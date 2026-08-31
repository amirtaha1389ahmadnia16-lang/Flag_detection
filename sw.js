const CACHE = "flag-game-app";

self.addEventListener("install", (e) => {
  e.waitUntil(
    (async () => {
      const c = await caches.open(CACHE);
      await Promise.all(
        ["./", "./index.html", "./manifest.json", "./sw.js"].map((u) =>
          c.add(u).catch(() => {}),
        ),
      );
      await self.skipWaiting();
    })(),
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)),
      );
      await self.clients.claim();
    })(),
  );
});

self.addEventListener("message", (e) => {
  const d = e.data;
  if (!d || d.type !== "PRECACHE") return;
  e.waitUntil(
    (async () => {
      try {
        const c = await caches.open(CACHE);
        const urls = Array.from(new Set(d.urls || []));
        for (let i = 0; i < urls.length; i += 8) {
          await Promise.all(
            urls.slice(i, i + 8).map(async (u) => {
              try {
                if (await c.match(u)) return;
                await c.add(u);
              } catch (_) {}
            }),
          );
        }
        const FONT_CSS =
          "https://fonts.googleapis.com/css2?family=Lalezar&family=Vazirmatn:wght@400;600;700;800&display=swap";
        try {
          const res = await fetch(FONT_CSS, { mode: "cors" });
          const css = await res.text();
          await c.put(
            FONT_CSS,
            new Response(css, { headers: { "Content-Type": "text/css" } }),
          );
          const fonts = Array.from(
            css.matchAll(/url\((https:[^)]+?\.woff2)\)/g),
          ).map((m) => m[1]);
          for (const f of new Set(fonts)) {
            try {
              if (!(await c.match(f))) await c.add(f);
            } catch (_) {}
          }
        } catch (_) {}
        const clients = await self.clients.matchAll();
        clients.forEach((cl) => cl.postMessage({ type: "OFFLINE_READY" }));
      } catch (_) {}
    })(),
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  let url;
  try {
    url = new URL(req.url);
  } catch (_) {
    return;
  }
  const same = url.origin === location.origin;
  if (!same && !/fonts\.(gstatic|googleapis)\.com/.test(url.hostname)) return;

  if (same && req.mode === "navigate") {
    e.respondWith(
      fetch(req)
        .then((r) => {
          const cp = r.clone();
          caches.open(CACHE).then((c) => c.put("./", cp));
          return r;
        })
        .catch(() =>
          caches.match("./index.html").then((h) => h || caches.match("./")),
        ),
    );
    return;
  }
  e.respondWith(
    caches.match(req).then(
      (hit) =>
        hit ||
        fetch(req)
          .then((res) => {
            if (res && (res.ok || res.type === "opaque")) {
              const cp = res.clone();
              caches.open(CACHE).then((c) => c.put(req, cp));
            }
            return res;
          })
          .catch(() => caches.match("./index.html")),
    ),
  );
});

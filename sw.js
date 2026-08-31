const CACHE = "flag-game-v2";

self.addEventListener("install", (e) => {
  e.waitUntil(
    (async () => {
      const c = await caches.open(CACHE);
      await Promise.all(
        [
          "./",
          "./index.html",
          "./manifest.json",
          "./sw.js",
          "./icons/icon-192.png",
          "./icons/icon-512.png",
          "./icons/icon-maskable-512.png",
        ].map((u) => c.add(u).catch(() => {})),
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
        .catch(() => caches.match("./index.html")),
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

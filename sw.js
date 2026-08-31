/* کل فایل sw.js را با این جایگزین کن */

const CACHE = "flag-game-v3";
const FLAG_FILES = [
  "svg/abkhazia--2869.svg",
  "svg/afghanistan--2932.svg",
  "svg/aland-islands--2908.svg",
  "svg/albania--2920.svg",
  "svg/algeria--2965.svg",
  "svg/american-samoa--2848.svg",
  "svg/andorra--2866.svg",
  "svg/angola--2939.svg",
  "svg/anguilla--2846.svg",
  "svg/antigua-and-barbuda--2896.svg",
  "svg/argentina--3019.svg",
  "svg/armenia--2929.svg",
  "svg/aruba--2863.svg",
  "svg/australia--3055.svg",
  "svg/austria--2824.svg",
  "svg/azerbaijan--2962.svg",
  "svg/azores-islands--3061.svg",
  "svg/bahamas--2942.svg",
  "svg/bahrain--2959.svg",
  "svg/balearic-islands--2923.svg",
  "svg/bangladesh--2968.svg",
  "svg/barbados--2905.svg",
  "svg/basque--2914.svg",
  "svg/belarus--2956.svg",
  "svg/belgium--2986.svg",
  "svg/belize--2899.svg",
  "svg/benin--2881.svg",
  "svg/bermuda--2902.svg",
  "svg/bhutan--2861.svg",
  "svg/bolivia--2971.svg",
  "svg/bonaire--2893.svg",
  "svg/bosnia-and-herzegovina--2953.svg",
  "svg/botswana--2947.svg",
  "svg/brazil--3076.svg",
  "svg/british-columbia--2944.svg",
  "svg/british-indian-ocean-territory--2890.svg",
  "svg/british-virgin-islands--2935.svg",
  "svg/brunei--2941.svg",
  "svg/bulgaria--2989.svg",
  "svg/burkina-faso--2911.svg",
  "svg/burundi--2878.svg",
  "svg/cambodia--2980.svg",
  "svg/cameroon--2926.svg",
  "svg/canada--3064.svg",
  "svg/canary-islands--2875.svg",
  "svg/cape-verde--2859.svg",
  "svg/cayman-islands--2872.svg",
  "svg/central-african-republic--2857.svg",
  "svg/ceuta--2840.svg",
  "svg/chad--2887.svg",
  "svg/chile--2952.svg",
  "svg/china--2855.svg",
  "svg/christmas-island--2838.svg",
  "svg/cocos-island--2844.svg",
  "svg/colombia--2998.svg",
  "svg/comoros--2850.svg",
  "svg/cook-islands--2842.svg",
  "svg/corsica--2852.svg",
  "svg/costa-rica--2977.svg",
  "svg/croatia--2985.svg",
  "svg/cuba--2974.svg",
  "svg/curacao--2938.svg",
  "svg/czech-republic--2970.svg",
  "svg/democratic-republic-of-congo--3070.svg",
  "svg/denmark--2995.svg",
  "svg/djibouti--2889.svg",
  "svg/dominica--3007.svg",
  "svg/dominican-republic--2868.svg",
  "svg/east-timor--2961.svg",
  "svg/ecuador--2925.svg",
  "svg/egypt--2979.svg",
  "svg/el-salvador--2836.svg",
  "svg/england--3037.svg",
  "svg/equatorial-guinea--3010.svg",
  "svg/eritrea--2886.svg",
  "svg/estonia--2829.svg",
  "svg/ethiopia--2826.svg",
  "svg/european-union--3080.svg",
  "svg/falkland-islands--3036.svg",
  "svg/fiji--2958.svg",
  "svg/finland--2946.svg",
  "svg/france--3016.svg",
  "svg/french-polynesia--3001.svg",
  "svg/gabon--2880.svg",
  "svg/galapagos-islands--2992.svg",
  "svg/gambia--2967.svg",
  "svg/georgia--3077.svg",
  "svg/germany--2983.svg",
  "svg/ghana--2874.svg",
  "svg/gibraltar--3034.svg",
  "svg/greece--2991.svg",
  "svg/greenland--2934.svg",
  "svg/grenada--3031.svg",
  "svg/guam--3028.svg",
  "svg/guatemala--2919.svg",
  "svg/guernsey--3025.svg",
  "svg/guinea--2931.svg",
  "svg/guinea-bissau--2877.svg",
  "svg/haiti--3006.svg",
  "svg/hawaii--3083.svg",
  "svg/honduras--2845.svg",
  "svg/hong-kong--3004.svg",
  "svg/hungary--2937.svg",
  "svg/iceland--2901.svg",
  "svg/india--3067.svg",
  "svg/indonesia--3030.svg",
  "svg/iran--2823.svg",
  "svg/iraq--2841.svg",
  "svg/ireland--3000.svg",
  "svg/isle-of-man--3040.svg",
  "svg/israel--2976.svg",
  "svg/italy--2834.svg",
  "svg/ivory-coast--2982.svg",
  "svg/jamaica--2858.svg",
  "svg/japan--2884.svg",
  "svg/jersey--3066.svg",
  "svg/jordan--2898.svg",
  "svg/kazakhstan--2895.svg",
  "svg/kenya--2888.svg",
  "svg/kiribati--3082.svg",
  "svg/kosovo--2873.svg",
  "svg/kwait--2928.svg",
  "svg/kyrgyzstan--2973.svg",
  "svg/laos--2933.svg",
  "svg/latvia--2865.svg",
  "svg/lebanon--2839.svg",
  "svg/lesotho--2997.svg",
  "svg/liberia--2990.svg",
  "svg/libya--3052.svg",
  "svg/liechtenstein--2955.svg",
  "svg/lithuania--2885.svg",
  "svg/luxembourg--2856.svg",
  "svg/macao--2988.svg",
  "svg/madagascar--3063.svg",
  "svg/madeira--2969.svg",
  "svg/malasya--2940.svg",
  "svg/malawi--3035.svg",
  "svg/maldives--3046.svg",
  "svg/mali--2994.svg",
  "svg/malta--3015.svg",
  "svg/marshall-island--2924.svg",
  "svg/martinique--3022.svg",
  "svg/mauritania--2871.svg",
  "svg/mauritius--2957.svg",
  "svg/melilla--3018.svg",
  "svg/mexico--3073.svg",
  "svg/micronesia--2867.svg",
  "svg/moldova--3033.svg",
  "svg/monaco--2860.svg",
  "svg/mongolia--3079.svg",
  "svg/montenegro--3060.svg",
  "svg/montserrat--2864.svg",
  "svg/morocco--2987.svg",
  "svg/mozambique--2917.svg",
  "svg/myanmar--2879.svg",
  "svg/namibia--2883.svg",
  "svg/nato--3075.svg",
  "svg/nauru--3049.svg",
  "svg/nepal--2837.svg",
  "svg/netherlands--3058.svg",
  "svg/new-zealand--2943.svg",
  "svg/nicaragua--2828.svg",
  "svg/niger--3043.svg",
  "svg/nigeria--2907.svg",
  "svg/niue--3003.svg",
  "svg/norfolk-island--3014.svg",
  "svg/north-korea--2851.svg",
  "svg/northern-cyprus--2922.svg",
  "svg/northern-marianas-islands--2981.svg",
  "svg/norway--2964.svg",
  "svg/oman--2825.svg",
  "svg/ossetia--2950.svg",
  "svg/pakistan--2921.svg",
  "svg/palau--2999.svg",
  "svg/palestine--3029.svg",
  "svg/panama--2927.svg",
  "svg/papua-new-guinea--2984.svg",
  "svg/paraguay--2862.svg",
  "svg/peru--3009.svg",
  "svg/philippines--3013.svg",
  "svg/pitcairn-islands--2916.svg",
  "svg/poland--3032.svg",
  "svg/portugal--3045.svg",
  "svg/puerto-rico--2849.svg",
  "svg/qatar--2847.svg",
  "svg/rapa-nui--2996.svg",
  "svg/republic-of-macedonia--3057.svg",
  "svg/republic-of-the-congo--2978.svg",
  "svg/romania--2930.svg",
  "svg/russia--3069.svg",
  "svg/rwanda--3027.svg",
  "svg/saba-island--2882.svg",
  "svg/sahrawi-arab-democratic-republic--3024.svg",
  "svg/saint-kitts-and-nevis--2854.svg",
  "svg/samoa--3072.svg",
  "svg/san-marino--2918.svg",
  "svg/sao-tome-and-prince--2833.svg",
  "svg/sardinia--3078.svg",
  "svg/saudi-arabia--2954.svg",
  "svg/scotland--2876.svg",
  "svg/senegal--3048.svg",
  "svg/serbia--2892.svg",
  "svg/seychelles--3074.svg",
  "svg/sicily--2951.svg",
  "svg/sierra-leone--2913.svg",
  "svg/singapore--3051.svg",
  "svg/sint-eustatius--3071.svg",
  "svg/sint-maarten--2910.svg",
  "svg/slovakia--2912.svg",
  "svg/slovenia--2831.svg",
  "svg/solomon-islands--2906.svg",
  "svg/somalia--2904.svg",
  "svg/somaliland--3068.svg",
  "svg/south-africa--3021.svg",
  "svg/south-korea--2915.svg",
  "svg/south-sudan--3065.svg",
  "svg/spain--2949.svg",
  "svg/sri-lanka--2948.svg",
  "svg/st-barts--2900.svg",
  "svg/st-lucia--2993.svg",
  "svg/st-vincent-and-the-grenadines--3062.svg",
  "svg/sudan--3020.svg",
  "svg/suriname--2897.svg",
  "svg/swaziland--2975.svg",
  "svg/sweden--3005.svg",
  "svg/switzerland--3026.svg",
  "svg/syria--2843.svg",
  "svg/taiwan--3023.svg",
  "svg/tajikistan--3017.svg",
  "svg/tanzania--2827.svg",
  "svg/thailand--3059.svg",
  "svg/tibet--2963.svg",
  "svg/togo--2894.svg",
  "svg/tokelau--3056.svg",
  "svg/tonga--3012.svg",
  "svg/transnistria--3054.svg",
  "svg/trinidad-and-tobago--3002.svg",
  "svg/tunisia--2870.svg",
  "svg/turkey--3039.svg",
  "svg/turkmenistan--3050.svg",
  "svg/turks-and-caicos--3044.svg",
  "svg/tuvalu--2891.svg",
  "svg/tuvalu--3042.svg",
  "svg/uganda--2830.svg",
  "svg/ukraine--2966.svg",
  "svg/united-arab-emirates--2972.svg",
  "svg/united-kingdom--3081.svg",
  "svg/united-nations--2903.svg",
  "svg/united-states--3047.svg",
  "svg/uruguay--2909.svg",
  "svg/uzbekistn--3011.svg",
  "svg/vanuatu--3008.svg",
  "svg/vatican-city--2945.svg",
  "svg/venezuela--2960.svg",
  "svg/vietnam--3041.svg",
  "svg/virgin-islands--3038.svg",
  "svg/wales--2835.svg",
  "svg/yemen--3053.svg",
  "svg/zambia--2853.svg",
  "svg/zimbabwe--2832.svg",
];

const CORE_FILES = [
  "./",
  "./index.html",
  "./manifest.json",
  "./sw.js",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
];

/* مرحلهٔ ۱: نصب سریع با فایل‌های اصلی */
self.addEventListener("install", (e) => {
  e.waitUntil(
    (async () => {
      const c = await caches.open(CACHE);
      await Promise.all(CORE_FILES.map((u) => c.add(u).catch(() => {})));
      /* نصب را کامل می‌کنیم ولی صبر نمی‌کنیم — پرچم‌ها در پس‌زمینه می‌آیند */
      self.skipWaiting();
    })(),
  );
});

/* مرحلهٔ ۲: پس از فعال‌شدن، همهٔ ۲۶۰ پرچم + فونت‌ها در پس‌زمینه دانلود می‌شوند */
self.addEventListener("activate", (e) => {
  e.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)),
      );
      await self.clients.claim();

      /* دانلود پس‌زمینهٔ همهٔ پرچم‌ها — دستهٔ ۸تایی */
      const c = await caches.open(CACHE);
      const all = FLAG_FILES.slice();
      for (let i = 0; i < all.length; i += 8) {
        await Promise.all(
          all.slice(i, i + 8).map(async (u) => {
            try {
              if (await c.match(u)) return;
              await c.add(u);
            } catch (_) {}
          }),
        );
      }

      /* فونت‌ها هم کش شوند */
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

      /* به صفحه خبر بده که همه‌چیز آماده است */
      const clients = await self.clients.matchAll();
      clients.forEach((cl) => cl.postMessage({ type: "ALL_READY" }));
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

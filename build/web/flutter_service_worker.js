'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "eb133a5c7ebea3e4d0524edc991f12ac",
"assets/AssetManifest.bin.json": "f5e41019473a47961665c387a080494a",
"assets/AssetManifest.json": "69d0997f10a8c155e015aae0ef749658",
"assets/assets/fonts/mplus1/MPLUS1p-Bold.ttf": "4dd51c7675dc3e1ac38e4b837524b85d",
"assets/assets/fonts/mplus1/MPLUS1p-ExtraBold.ttf": "6524919a711189598eba2760c3c3ee82",
"assets/assets/fonts/mplus1/MPLUS1p-Light.ttf": "01fea1cae2979588652514d83e9c0423",
"assets/assets/fonts/mplus1/MPLUS1p-Medium.ttf": "c3c30d03ec6798b9b07da13b2b325e1d",
"assets/assets/fonts/mplus1/MPLUS1p-Regular.ttf": "9365e1316a34be4beca30615950bea3f",
"assets/assets/images/icons/cancel_order_white_icon.png": "822fdb69396a297993f5cd83b27e5ac3",
"assets/assets/images/icons/client_ico.png": "72dbc10835fd035b07192bc16bc46bdf",
"assets/assets/images/icons/client_ico_selected.png": "b6474f3cad1dd82d92f312a5b50c74be",
"assets/assets/images/icons/confirm_order_icon.png": "f952db63f6fa0d22fc1e5cc1172152a9",
"assets/assets/images/icons/confirm_order_white_icon.png": "c6397febb9b3d5ba38041b69acba8649",
"assets/assets/images/icons/finish_order_ico.png": "67ac4bc68c899e8f74420fb73c7ffbc5",
"assets/assets/images/icons/finish_order_white_ico.png": "8a5a9779ea20c1e05aed285a51de7b41",
"assets/assets/images/icons/order_edit_icon.png": "5c419cfc91c3c3c3fa0c0a6315067227",
"assets/assets/images/icons/order_ico.png": "b72428572c0cdb5ef1efee2bb675b5f3",
"assets/assets/images/icons/order_ico_selected.png": "932117af18d6a347480b91b2f628ecbb",
"assets/assets/images/icons/payment_cc_icon.png": "8f161fd26109cab598191a0c9f1168f6",
"assets/assets/images/icons/payment_cd_icon.png": "2f17ce6c5ddca0bb2fd36849ae104810",
"assets/assets/images/icons/payment_notfound_icon.png": "a374c78f3da2ed41bc86f3b61ff4047f",
"assets/assets/images/icons/payment_type_ico.png": "0200f81ede7ce8c990330c4680d833e5",
"assets/assets/images/icons/payment_type_ico_selected.png": "64dd0d27e274937aaf98c68a4290dd0a",
"assets/assets/images/icons/payment_va_icon.png": "c3856b1f4cb204fdbd0fd491ed052598",
"assets/assets/images/icons/payment_vr_icon.png": "9e4cffb87ff9fc6931a162a8a29c2732",
"assets/assets/images/icons/product_ico.png": "d776da783cb9a59357c3d4f7bb068dc2",
"assets/assets/images/icons/product_ico_selected.png": "28f74a4dfb9dbcf2353e09b5c73b3a01",
"assets/assets/images/lanche.png": "2a9fa27260eb4ea63f243a84ad9af7e6",
"assets/assets/images/logo.png": "2b91ff468c1585cdb9290b781ec8ad37",
"assets/FontManifest.json": "e8284a5b7ac3a6bd701f167015d2ddd6",
"assets/fonts/MaterialIcons-Regular.otf": "7fc823a91946c8243248614819178824",
"assets/NOTICES": "e9982cd26b2cfbe892c8f74ff2357ffb",
"assets/packages/awesome_snackbar_content/assets/back.svg": "ba1c3aebba280f23f5509bd42dab958d",
"assets/packages/awesome_snackbar_content/assets/bubbles.svg": "1df6817bf509ee4e615fe821bc6dabd9",
"assets/packages/awesome_snackbar_content/assets/types/failure.svg": "cb9e759ee55687836e9c1f20480dd9c8",
"assets/packages/awesome_snackbar_content/assets/types/help.svg": "7fb350b5c30bde7deeb3160f591461ff",
"assets/packages/awesome_snackbar_content/assets/types/success.svg": "6e273a8f41cd45839b2e3a36747189ac",
"assets/packages/awesome_snackbar_content/assets/types/warning.svg": "cfcc5fcb570129febe890f2e117615e0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "cc30908f94e0853f34a336a53c35e7a1",
"/": "cc30908f94e0853f34a336a53c35e7a1",
"main.dart.js": "0c755ac2d39e8a3d89c9ad2ed7920a1d",
"manifest.json": "91fba64fc1b12beeb0054d6ec46d90f1",
"version.json": "b5b3f1daa8b96e63dae13ab468aa2664"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

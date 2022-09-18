'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "96a855ab563312f61a030122b7e1203b",
".git/config": "5a8827c0b8ff1a40a3d739d9217e94dc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "aad774080d151df67f6e786085ce9925",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1b02496df6196432bb3f9796d695f73a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8780c1b513d290bf9682a25bba32f76f",
".git/logs/refs/heads/main": "0d058b4b1d8c8d5817fe1b30454a4726",
".git/logs/refs/remotes/origin/main": "39d99f2002a3164ae0b460ac82338edb",
".git/objects/01/7d7e50a53a6ff18488435d725ce00b26213096": "b0a16905b0c98b21a2d846769c4d5898",
".git/objects/05/8b84f6b3d3344ea0ecaeb87d1ba854848f9dc8": "947d20051fa3b513c83484ed619b61b3",
".git/objects/1a/d00906b67bd2ff76662827979df200a0d415e9": "96e3080f6e170dc2bfe57a190679fab1",
".git/objects/1f/d62cb437471c7f6e1a797970873aef6602cf98": "2e0754c195a5fabce8b7a7ec547c4ce5",
".git/objects/26/170b7acf35dd66b7967f3052f1483923fca5e4": "e6c2108aa7600a3e27ea063137edd9e2",
".git/objects/26/23761c16adf0006e8f373766bb6bcddcdb6a3a": "bc0e24b5ba1fd0fd9175056308e7744a",
".git/objects/27/3e678d1405d2774c4c1ffab1c0bcf328f1f781": "f40c5a9b015fdcb3ecfc18e225a97d53",
".git/objects/28/fcf828833255887056dd1060963a6419437710": "f4c6f4023f8a03a51e14490e6d8a54e8",
".git/objects/29/a05ad6d342377938cc9cadea8f31fa0d673af8": "11176ae5c31fa3b288753427f0741cf0",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/41/b4e50d1c1ff08533db469a249981252de1b895": "7652d329eefe2e49b525ab8df10d05a5",
".git/objects/51/2fbb90e53fd9ea3971ed4161af2d79f6e3feee": "3a95710e33821e9a79ce6db9807b77af",
".git/objects/51/bd1aa692558044c75a97b8d151091a0b50be16": "801957c1a43f765c2f1a9cf89f38f6a3",
".git/objects/52/e43a16b2cd976e1f064d2bf9246d1fc1b6272a": "8d65ac27db7653b93d8cc016fd9e2f93",
".git/objects/56/b0ade53db3bd93127cbe48a946d29e965f5791": "cbe81bb713b09bc0f4aa529341bf1c2e",
".git/objects/56/c0d5c75a69fbf462f945f6f2be91219988eb22": "f6793332da1c1cc6e0e727b27e25ac79",
".git/objects/59/2723001a80d8eec9ff0fd7e34b2d85f37505e2": "20f6a29679898a77a10fd5c8720b3f17",
".git/objects/60/608776011c321c2a71521c52557addc3f17960": "6ea5600e00dda9cb0b76237350f5f8ad",
".git/objects/6f/bea0451b8740b708d2dd3cd5d93c99ea5f0426": "99c466932c052d4699015afdf42316b0",
".git/objects/74/37724ee3f3f834ac98691849cb462e12f2c275": "e04644fbc4e981cffc8bf80cf29dfcae",
".git/objects/7d/b1f5c1975fd421b8bb73cd68455f9567ffb8b8": "0afc178d46d1968328c57cd0f71d23d2",
".git/objects/8c/0cb024c11b24f82ad1b99a4e5e641b195d5fda": "9ce4f4854ab94b5c0a73b248529a2dbf",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/93/115ed7208599962f49ab1a983fbfba65458153": "56bf22ae5478a21d98006f5bbae4eb9f",
".git/objects/a3/00767be3ee8d3b8cfe88ed5c57f1d22ba7e6a9": "4bffd0cef31a3aad58a5045e5d7e44c4",
".git/objects/a8/bc43ce1375cc1fc525a2977f87fb6e1a2ab6bf": "de4447c81959ea210704344cc0aa23f4",
".git/objects/ad/fea0e6de434e7fce3f39ec0f1b72ce425cfc1a": "4dc4d9cdbc9021c103fdf0cadbb3a92b",
".git/objects/ba/48301fe2125e7f8b898f1d9ef4295b9771619f": "7c2ff27df944b2637fc17fcd5bb228c9",
".git/objects/ba/9277a89ec68f99641a455ebb01c39504042e9c": "85f8df7761363939058bab0587c1067d",
".git/objects/bf/6df52b129b571d93b5c8c52c86e0696011672d": "f9da0178986f223ca537bb8f8c071a20",
".git/objects/c6/17ac8164b1b92d7f95923b4c38883afb224338": "f0239b2401860b1c192028ac4e8a625e",
".git/objects/c9/0727fd8e4bdc7c44ac48bd4cafb46f4ea796cd": "603b6d425a26ea30880873e99fce7048",
".git/objects/cc/794072fe21d46585aa0d57c0b1e79fd0ce5193": "7ebe625534a1ee5978ec832f82143387",
".git/objects/d2/e4ae91122e31a9723da28f2008f1b180c2220c": "1375b83b5a003ff6349d55797d5b00da",
".git/objects/d3/f0121aed3c57abd5ae3d42bd734ebc58374987": "b82e6ae9a339f5caec4021f6d096273e",
".git/objects/d9/b306a561786c37dc1f5323cdaffb4ad7acdf2f": "9bf31c254a51edb07de76e7fe2ac6d2c",
".git/objects/dc/0d159634973bf7c1aebe036c11aa3493183321": "68e76646304cfc0bb89d3377066eaa72",
".git/objects/dc/11aaa717db826aae627d628de2b695a16c24a6": "931d149fdae4325550ba876c55710fcc",
".git/objects/e5/7bc2335f3277881bfd66c904547dfd76aa44bf": "0ccec4d9a4e759bb9f82dc046b886594",
".git/objects/f0/9d83deca23eaa309f4badafe2af16fa8e4240d": "d2734af0bf39f2e522c6c40753f2157f",
".git/objects/f8/343748335a9db7bb664b085cdbfff244315fcb": "9b535a2f3dceb1b3418a2883f45685a1",
".git/objects/fe/f4bf93565df23b0afbececaae928f688f2fb19": "d62b61ee4ccace4d59b64ef36c0682ec",
".git/ORIG_HEAD": "8f468afdfa9ca5b8fb9504e77d1dfa6d",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "5bd992d00c4cfa34fbfd0672271e95ff",
".git/refs/remotes/origin/main": "5bd992d00c4cfa34fbfd0672271e95ff",
"assets/AssetManifest.json": "907da026b81ea5dddd7c0807b7cb0af8",
"assets/FontManifest.json": "634f1efc2f689271ca4f617f6319eccb",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/images/logo-dark.svg": "05797da04917c1a5316889da01b3c541",
"assets/NOTICES": "cc70a93d890c7adb0c72ad7b47b3d6f4",
"assets/packages/eva_icons_flutter/lib/fonts/Eva-Icons.ttf": "a71dbd49ad4a52020638190e30ac52e0",
"assets/shaders/ink_sparkle.frag": "a04e492a05f9fd1a8cc6f12163b184dd",
"canvaskit/canvaskit.js": "687636ce014616f8b829c44074231939",
"canvaskit/canvaskit.wasm": "d4972dbefe733345d4eabb87d17fcb5f",
"canvaskit/profiling/canvaskit.js": "ba8aac0ba37d0bfa3c9a5f77c761b88b",
"canvaskit/profiling/canvaskit.wasm": "05ad694fda6cfca3f9bbac4b18358f93",
"favicon.png": "f85a12b5a09706ce1dbbdb49d5b5c6b9",
"flutter.js": "195f32f4217e034162a6697208586f44",
"icons/Icon-192.png": "c4cff2e238a85662130cbf120d97e188",
"icons/Icon-512.png": "61441015b94929df15a13309329c03bb",
"index.html": "e29fa7a09f12b62cadc18336508fe734",
"/": "e29fa7a09f12b62cadc18336508fe734",
"main.dart.js": "81bcb1a0f7abc6c43d427e3de5b2a9c4",
"manifest.json": "e11b309c5e65c45cad0f1486d63cfbfb",
"README.md": "f5a5ba5d991a3905c34b1027a511f0cb",
"version.json": "18c9d75777c84135f32b87634aa72ad0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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

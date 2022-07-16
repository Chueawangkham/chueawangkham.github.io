'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "aa94491c68ff62f7c276db5877b659f6",
".git/config": "d43eca110a418b3399ce7750cd3d7c16",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "63336b63b4768df60b9948c9a0bafe49",
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
".git/index": "4685ad3adf2478113eb87d9d7c4762d8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d6bb3517ee8d98824564d8a355eafbec",
".git/logs/refs/heads/main": "196f1b6007d6828b7181c67a55588f4b",
".git/logs/refs/remotes/origin/main": "178c1be2749eb3eb9d5b04b446c08008",
".git/objects/00/872401d541499f41b800154c6bfa5c529f8e29": "16076fc3308dbaba6d9a780b8148708a",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/05/ceeb9e0c48b4f2e1785d880eba3eb83f20c5ee": "93fba58f06a303b3d053af96af08da9a",
".git/objects/07/5f8c78c1327bfd52515cee015142ca89cf7af9": "06536555283dad66aaebb75e660636e5",
".git/objects/07/fc8aaae611021e68766d2aa6c139ba44ac3018": "41416bc17652e5d6c77a6e73d42a5d8d",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/10/2943c9c8ed2b35fe324bf546d6597bd100c38a": "9c62ff619033f926a4a1d47aa96c27e0",
".git/objects/1c/2df287b51503eb907ad643fde4aaa7f274cb33": "a302ee1d9f4a5eb765b7a73c5ae6fa44",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/26/6a468ebb70d3db512b18f801a93696966c3638": "8209b184dc52e5dcf36264533ac9d5f7",
".git/objects/2c/a7c755c081b8939d2632e01ed071bb40088bd1": "ae88cf1deb413394c66228b247225e1d",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/38/3eefd2ed643187ea6a95aa5071ae404ec6bb60": "e20c17cdadcc39fdf4147f3390e0b19e",
".git/objects/38/80964ef0df745832b4fddaa2816b7e1b5d85ea": "2cd66fda4b389811cad4b9c773a12282",
".git/objects/3a/864820a458696b48aa17028f5187b02bb51c0d": "566c450147a31ddbe4593a823fc0ab1d",
".git/objects/45/ee19dd17404b9628beeaa3fda025c83d814cef": "ce50c348e8d76ef4d38d52e91df5e9f0",
".git/objects/46/43cd07a68176501df1bba8e64a56c2b542f600": "34228ea41d4b8ef22808efeb89d25829",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/4b/e1b412e423597b85c7de1055e1e81f11bdb2d4": "6d67c6f6a54f147548088a60bc7ca561",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/5b/5864e885e5e6cfc1d20910eeadb7c6b0e9889d": "522da1e6ca4a911dca1ca3d0b601b55e",
".git/objects/66/221de116b55444b6b82523154997f8710f4dc7": "c3a1fbde9835b43f72734cd6a4f66903",
".git/objects/66/699157ddee9c8887be4f6b76378f0c70166f86": "ff657499d038c32f98f5e306285fccfe",
".git/objects/6d/e5ef29d703bb89d3a7f3fb04fc08dea12b9c4d": "69f2035096bf101802588563d755cf4d",
".git/objects/72/62ce8249adf356d11c2b7e777bf864cc3e0bfe": "0679b8d09f34177464241482c322dba2",
".git/objects/75/9ce388753a436f40b75f574d1377077a7a40ec": "22405202bcf8e16da18d3b49990c9820",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/78/86784281a62ae02514a90dcba7a07a31028a92": "e5dd3fad5df0f96a1115773048a38e80",
".git/objects/79/440557cc9c004b6cff5426547a38c06c0ea5eb": "c262d9224bdbccee18f8a39dd9c75a8f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/81/6d0744e4747c4e6562e87b6b2133eefd31b1d1": "e4071e3884704d174688826b7814f7e1",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/84/f4c64a618396edbc857b50826daafa9ed1887d": "daf987df3573d0574ef3344a4b5985a0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/d8f6b0d5dbf475cebdced38ccb80a3969cadee": "aacada940c8ad8762a8567f5ee26d91b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/95/916106ae68d64258e68ee82315c65d9f2891d4": "d1963ebcb22f19effaa3a9fa5ca6b130",
".git/objects/9c/bcfe3554dcf193c714f206ff9379eadb183234": "aa7f0fb9e972cc3f6d889d368c71ee62",
".git/objects/a1/23215058167a470dc91ce59c4977932113e5da": "b64b64dff85caec88d127d8cf8eec172",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/6ba4e3325a532cd181f887a4c40a2d8b5dd218": "5a057b91b9f2a002d4a802d9c02c4723",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/8b02d02776b145c043300524abfb1c0f02b482": "227c88656f41bad1d1eb01b66ae1c561",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/ab/98c9ae6c1bd3efb06f1488a7b9e710c15f0b08": "d8bd7f083f5a0d71c5ba8147fa170315",
".git/objects/b5/8ebd42ec8f61dd9ed2ff73cd8e42e6f9d69808": "db42c2267704e5c0777902721241f292",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/6096b418b799e81b05d956dcbf71a7a46d22a9": "c574edbd1a9a58cf24724b5979933c5c",
".git/objects/bd/4221544b5a25ba6bab3228cbd99e550144e401": "2b9fb2ea5838f54f89352c5b9a019fd4",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/objects/c3/ee69aa59c6fe1a569ffe2d159be98c5681a423": "14297c0352e06b7c443385f6259e8e84",
".git/objects/c4/53e633f349ccc9f0a9e3569913df23e224fbd8": "373dc670b217b2350bbbc6be0624d22c",
".git/objects/c6/e3d3667714754c4adde2d958c701ba6d149319": "f38c21f7da212955fab3a022f1c03caf",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d0/bd9b051c53a70f80dc2525052c0d117a9c0aae": "becd9c54e7d087794a6a06ae98e8842b",
".git/objects/d2/63cbb81309a19dbb0afe7405e25e2fbe9d524d": "8839b3813ae5dd2b122e69483fbc96e3",
".git/objects/d4/cb85af2222759cd1b6295d8bf800dc99d44524": "6fa03a0fa16f6a76f2a0f06ca413b873",
".git/objects/d9/4cbf88637cbfc3cd3a6c66c01ff325a5a88d4c": "f06d446d272e0c948315be1accf8ec18",
".git/objects/dd/0246757a05f80d07b407e71385b7ce65c0c034": "7a288334bc7e550900b453c943c4a0ea",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/ebd22175eb1a13c526b7021ee734cd102ceead": "f2dbd863d298db4a106f8816213a720b",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/f3/9a9e4d5c1f753357e400c93f8757d483a0db7a": "a7047da3884c37c383935b30c2988c70",
".git/objects/ff/f5da1e93a79b308a7cb45265f0902f7cbbac81": "d09a4dc62bf85bf91140196bf22d5688",
".git/refs/heads/main": "34e08403c151622b967cf89c859ead14",
".git/refs/remotes/origin/main": "34e08403c151622b967cf89c859ead14",
"assets/AssetManifest.json": "cc7ef148911a20ab52f17835a52e782a",
"assets/assets/icons/android_studio.svg": "9f6a55eb449bd6054b46adf2c11912fc",
"assets/assets/icons/behance.svg": "35ad2d47e647d0b168e7707b2984c6b5",
"assets/assets/icons/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/dribble.svg": "d392567c5678d42472d2c7b766268101",
"assets/assets/icons/firebase-console.svg": "e1b3ca5c118c5327aaafe13fd80508c0",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/icons8-adobe-illustrator.svg": "9ef0051845c54b7b5baf3585a1625fdf",
"assets/assets/icons/icons8-adobe-photoshop.svg": "b69ae5f6e90c3b81448fe05939649f8a",
"assets/assets/icons/icons8-adobe-xd.svg": "b36c59c37f81f7f08e76eefe16e0a81c",
"assets/assets/icons/icons8-git-240.svg": "68fe4fb0ebd4335de8e49ccee72db34d",
"assets/assets/icons/icons8-github.svg": "93fe6ba87ef59a9b7fc800398b3019ae",
"assets/assets/icons/icons8-old-vmware-logo.svg": "215441077b11b267a6e683eedf286871",
"assets/assets/icons/icons8-xcode.svg": "389498dd1a893a33ec059998c320f9b2",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/icons/terminal-svgrepo-com.svg": "5be0296d0d0aec10963379e496a4147b",
"assets/assets/icons/twitter.svg": "a4a0163fef48a4247a305528c07bc4fa",
"assets/assets/icons/vscode-alt.svg": "90fd5bfa88e040ae12428477ee74077e",
"assets/assets/icons/vscode-svgrepo-com.svg": "c7b7d27861432a0c4526a392667e209f",
"assets/assets/icons/vscode.svg": "a80b6238ec4054a6de32d56f097ac656",
"assets/assets/images/11155.jpg": "b1711008f9038a2e67155ea1f87373d0",
"assets/assets/images/43951166.jpg": "9c23aa853804fb84ecb2aa6105a9436e",
"assets/assets/images/bg.jpeg": "c6449162dc3940daa640a43101cfd66c",
"assets/assets/images/map.png": "17fdf8efdbff69fcbbc604b21ae0b442",
"assets/assets/images/startup.jpg": "21e5ec98d7981f58ef84306567b69029",
"assets/assets/images/worker.png": "c9ccdd5a9ce77c2ca57c27bcb53e8de6",
"assets/assets/images/worker1.png": "7b60790f9678c01ad1640b1df27c8ccc",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "781cbabf3ed7417a5afa616df2cab1fb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "cfb13480221340aa5ec5c7ae4d9bed8d",
"/": "cfb13480221340aa5ec5c7ae4d9bed8d",
"main.dart.js": "bcd56dc03cd9cbe4d9bdc615bb773e2a",
"manifest.json": "14533758d5adebb52c270151b0335f00",
"version.json": "1ac57eb0214a8f5216f1da7dd479b33f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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

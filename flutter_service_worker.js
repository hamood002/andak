'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "92be53694ade49dba65cf9d318e4decf",
".git/config": "f76886ae1f4a701d3f8896cff7c8d1ea",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a53ef61323eb744dfc4dfea81618cd1a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a469beae8876475ad3ffa8fb4de14a05",
".git/logs/refs/heads/main": "6bdc98b9ca9d7564e9f31907460fdbb1",
".git/logs/refs/remotes/origin/main": "0e1ff1b061f3a1acaabb136c1d7a2742",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/22/dbc1d692a32a7c74a76b511f4815510a3f5889": "2cc7926cb788d4d813c017182d3e19ac",
".git/objects/2a/d020485b2c1425e52dfb17703aef73634584ec": "58769190ebeb5c57744c6397980aaa80",
".git/objects/2e/25d628fade7346286870ac384d3f7f17e28f31": "9c7c6ba96b2d232739ab3e7760c67b9a",
".git/objects/30/947462a89daad9bb41accdffa0377d91b09a74": "38c8579401fbd97ace0a43478c4d2930",
".git/objects/34/603515592be1bac43eaa5c13ade9d7883985bf": "c5575d76822fea17b4ea205f7a98264c",
".git/objects/39/0f245ff1a011c61459354cb2c6568e25f5b47c": "65aa3c2605660efffde81e4c231cf5f3",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/48/a4b790dbe2ebc1f3d67a1b1f520030d24eaa1c": "15eadde671308235304d4738a8473f14",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/50/df61c2a26da8089f3d1059b76b75ba9ff77ece": "9e218f172d53cdac73d265f1c54cfb79",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/5d/448e5acba063c856e800b901071382f8d6cd1e": "266e7fc58b2c763ed1cb993004f73a34",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/5f/1770e448e3ea2bbae3012dfc0a811dbc466712": "dc6fd9b645a812f0db3c45e65b06748a",
".git/objects/63/62ec6912afefef7e181fc226a02171762994d5": "d7adac35e6463ea92074b486325cabb1",
".git/objects/67/a45d3c4baa4fd212146cfa3ac97c13fde381c3": "342225681ec804f1cb6d6863c392bfa8",
".git/objects/6a/5be7d8cf03ec0bb21451acb965402622f7b7a6": "8dd3dd5b0ff6181aec68ecdce1df27b9",
".git/objects/6d/fbc60073d7502102b48e564337290f195174d5": "6dc8004bf7b999536c29daa120b8f6ad",
".git/objects/70/6526a97cb032af29c43237c9d2a6b554edb2da": "6563e3a35e91ed300a926c4c99d3397c",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/79/d4c8963551b82542ff0874d9d7334e96815eb4": "9df776cf758b31c947fe9a988ef776ef",
".git/objects/87/674af9a921c3ff2c2957ddbc68d85548740766": "fd8a0a09a59f901d4fccc7aa24c73161",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/c6518bf7974ae7348eefcd6ab4f8216f0752dc": "107ec4f726ff35473ab7408cf9f3ac6e",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8e/91eb3bd06fdf9100d62f7fc6295b6e58565d0c": "bd2e0c617bad483ccdfec45e38f13ac1",
".git/objects/95/c0d97f81e38f11636cf933aa511de22ba634eb": "98f4ca2a56cd595b552fa99cf197e6d6",
".git/objects/96/ffdfe6ce1025f303b6c5c0b5ff66e858031097": "56f41d5f102cf6092c607971326d1cac",
".git/objects/99/8066af26ea29315d8e70af3a71efe73e91ddb2": "715de8637260484300ff63dd2a96d38b",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/a6/d0e10247858c69fb119d7131da9519a2021f72": "ad04e4dda0b44e59e828705798b05d01",
".git/objects/ae/e9bc124a3333af85f5829b03127c37e6cae10a": "acd21220d9a018a5fb288753956a039a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/e34ecc5340c685bfea78e7b20e0741c7d80229": "d6384a8887eea757da0d2a149ede280e",
".git/objects/da/91924dc746f0e21ac99a2eb210503a77dc1b0e": "fe9d0a4ad5899a79d7eccf1fc2fd638c",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dc/cbdf5d7785d3b02cecbdba6f7c997c22d0483a": "8e0ca0cd7ad648f2355c6cd9ac48845e",
".git/objects/df/a307c4486446b3926cac04df51ef51fd12ad00": "786244c7104cb9a713f924a8a5ba005d",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e3/482bf2dc41f8b77b4d17a5fda853422a730a20": "6e81f6d3d2672d345fafa6f932b2918a",
".git/objects/e7/acdde78a803caf09a59ec62227cbc5298572bc": "f30cb84adc163a2b004fa27753c40d10",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f9/1f2912a737ee31ba6ad1dbade3bed50fc5e9f0": "4405803528e4df85d2105e1bcc5859d9",
".git/objects/fd/a055c4223e8c27252bff4e8f69a409fddf2600": "b49a49f75c0f63d88d5647f91b33b7b0",
".git/refs/heads/main": "31eaaf81e8f614da1115bbb286f23299",
".git/refs/remotes/origin/main": "31eaaf81e8f614da1115bbb286f23299",
"assets/AssetManifest.bin": "66c0630fdf74a0d61cf225049ec7c9e2",
"assets/AssetManifest.bin.json": "cecf21d6033b5c2ef4b72c4ac92f58f1",
"assets/AssetManifest.json": "0b9338a2338d0c04cf1dba65d840c615",
"assets/assets/fonts/Tajawal-Bold.ttf": "76f83be859d749342ba420e1bb010d6a",
"assets/assets/fonts/Tajawal-Regular.ttf": "e3fe295c55a0cb720f766bccc5eecf63",
"assets/assets/images/app_store.png": "77ca8b6daef7f3a2c81f8266a17cd96a",
"assets/assets/images/google_play.png": "1f12a6762bc48d9b8718238d2da2c41d",
"assets/assets/images/intro.png": "451920656ea20f86797782122a6853b5",
"assets/assets/images/logo.png": "94b9cb733c460e950699de7b1f9b3ac9",
"assets/FontManifest.json": "dd1c8c7804b978b66e849fd6fcdb2f3b",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "0f18b0bb5a616561e18f97cb6a0bdf4e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "710e59f066ff3286085c3e8fe22c361e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "456641be28661c0570bc7f867d5c414f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c9656c9930f43984a99a15e5c4504e2b",
"/": "c9656c9930f43984a99a15e5c4504e2b",
"main.dart.js": "f0ed9dabc534984cf326573639d43d38",
"manifest.json": "1932aaedea0c3cc18ab72fd393c7bff2",
"version.json": "bbbccbeafad810fdc96f18736a82955f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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

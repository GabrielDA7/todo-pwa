/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.0"});

workbox.core.skipWaiting();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "css/index.css",
    "revision": "78fee61c877ea36046fa4c974a7ff7ed"
  },
  {
    "url": "index.html",
    "revision": "73bd1c3a14ca3a250441525bebab8bde"
  },
  {
    "url": "js/app.js",
    "revision": "953921b3c022cd6275d4f88a04d7f44c"
  },
  {
    "url": "js/components/ToDo/ToDo-styles.js",
    "revision": "1e03e47d0ba2e9a593c21ccc48844510"
  },
  {
    "url": "js/components/ToDo/ToDo.js",
    "revision": "69a0d9c3b3135b91892ab3fdb7fcdff5"
  },
  {
    "url": "js/components/ToDo/ToDoItem-styles.js",
    "revision": "54675cfce1f63fbbfadcc74048ca03be"
  },
  {
    "url": "js/components/ToDo/ToDoItem.js",
    "revision": "b7c10fa484565c3d20912e3a0e0ba1ab"
  },
  {
    "url": "js/connection.js",
    "revision": "63da20156cf7028b842b17c0bdb0b612"
  },
  {
    "url": "manifest.json",
    "revision": "4d186ed80393b4b340685186f9c0d428"
  },
  {
    "url": "node_modules/@webcomponents/webcomponentsjs/bundles/webcomponents-ce.js",
    "revision": "039cece33b43e3ae0215cdcd2ade8c6b"
  },
  {
    "url": "node_modules/@webcomponents/webcomponentsjs/bundles/webcomponents-sd-ce-pf.js",
    "revision": "c73899f69a673e93653c018e4a2be04b"
  },
  {
    "url": "node_modules/@webcomponents/webcomponentsjs/bundles/webcomponents-sd-ce.js",
    "revision": "ed70043d6ffd397cd8a5785a91deedcc"
  },
  {
    "url": "node_modules/@webcomponents/webcomponentsjs/bundles/webcomponents-sd.js",
    "revision": "0f94d1d1fa6eb56e54ceba65a10d5cab"
  },
  {
    "url": "node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js",
    "revision": "e1fd2666c41624563d5f54b012c56acd"
  },
  {
    "url": "node_modules/@webcomponents/webcomponentsjs/entrypoints/custom-elements-es5-adapter-index.js",
    "revision": "5652c8f83533d62943792a7fe7a2e581"
  },
  {
    "url": "node_modules/@webcomponents/webcomponentsjs/entrypoints/webcomponents-bundle-index.js",
    "revision": "8dd62a28e52d133ef1ecf044bc51f109"
  },
  {
    "url": "node_modules/@webcomponents/webcomponentsjs/entrypoints/webcomponents-ce-index.js",
    "revision": "0867f0cb4caf5081f1e85da13c24528a"
  },
  {
    "url": "node_modules/@webcomponents/webcomponentsjs/entrypoints/webcomponents-sd-ce-index.js",
    "revision": "5d9cd4fb5d341a0e2890edaa2cc8e226"
  },
  {
    "url": "node_modules/@webcomponents/webcomponentsjs/entrypoints/webcomponents-sd-ce-pf-index.js",
    "revision": "4fa20d933ca980ef122fbad7528e56ca"
  },
  {
    "url": "node_modules/@webcomponents/webcomponentsjs/entrypoints/webcomponents-sd-index.js",
    "revision": "d4e3a4413d567733a71057462763e36f"
  },
  {
    "url": "node_modules/@webcomponents/webcomponentsjs/package.json",
    "revision": "116cd5a6665e462548f619482194631c"
  },
  {
    "url": "node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js",
    "revision": "ea4c0648b79eb102853d55e80d75daf4"
  },
  {
    "url": "node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js",
    "revision": "e044a63e034bf10304dad73138b8c74b"
  },
  {
    "url": "node_modules/idb/build/cjs/async-iterators.js",
    "revision": "b176eb26e432b2fe568b9b25b73378de"
  },
  {
    "url": "node_modules/idb/build/cjs/chunk.js",
    "revision": "b122de2064c0c38b6db060862355a64d"
  },
  {
    "url": "node_modules/idb/build/cjs/index.js",
    "revision": "4225c7b263c894247bd402ea580b9f23"
  },
  {
    "url": "node_modules/idb/build/esm/async-iterators.js",
    "revision": "7545047ce7bf014ff279593d6a5638ac"
  },
  {
    "url": "node_modules/idb/build/esm/chunk.js",
    "revision": "c425e70eed99680fd3f14b1f70580f8a"
  },
  {
    "url": "node_modules/idb/build/esm/index.js",
    "revision": "1744c78524339333fc1a296a8d11baf9"
  },
  {
    "url": "node_modules/idb/build/iife/index-min.js",
    "revision": "cf188533af67d7a27e45cd74bc4d2199"
  },
  {
    "url": "node_modules/idb/build/iife/with-async-ittr-min.js",
    "revision": "76e830e6efc03795ec70efb0fa3c6773"
  },
  {
    "url": "node_modules/idb/package.json",
    "revision": "0f81e610730f932394cfb75a0861db28"
  },
  {
    "url": "node_modules/idb/rollup.config.js",
    "revision": "2a0469f09378735c3451f73471608a6b"
  },
  {
    "url": "node_modules/idb/test/index.html",
    "revision": "a29b5a1864a5b83881153a8d8c2a33d3"
  },
  {
    "url": "node_modules/idb/test/tsconfig.json",
    "revision": "b06b82a6447801e1f905e6bc2530aa21"
  },
  {
    "url": "node_modules/idb/tsconfig.json",
    "revision": "a2eb039d7cc58fb6ce93eb2525374cd7"
  },
  {
    "url": "node_modules/idb/tslint.json",
    "revision": "e1ea7461185b802f2fdf7a5be0660eaf"
  },
  {
    "url": "node_modules/idb/with-async-ittr-cjs.js",
    "revision": "78790be05afaaec9b30440a4ee831383"
  },
  {
    "url": "node_modules/idb/with-async-ittr.js",
    "revision": "2834dc6a281fb7a011cf518dd1772e54"
  },
  {
    "url": "node_modules/lit-element/lib/css-tag.js",
    "revision": "88a7776dc45a2f5f5a2a99b144d49075"
  },
  {
    "url": "node_modules/lit-element/lib/decorators.js",
    "revision": "aa875a7b763b574cfce40b684b733eb3"
  },
  {
    "url": "node_modules/lit-element/lib/updating-element.js",
    "revision": "2276cf333bd0a08bd8ae34783f36aa4c"
  },
  {
    "url": "node_modules/lit-element/lit-element.js",
    "revision": "72433c8e2d5d81583b7af68bad4822d6"
  },
  {
    "url": "node_modules/lit-element/package.json",
    "revision": "c9c8bda28f8faf8db6acb051793c58b1"
  },
  {
    "url": "node_modules/lit-html/directives/async-append.js",
    "revision": "20e3f940ebfcbf1fd1c3ff930140478c"
  },
  {
    "url": "node_modules/lit-html/directives/async-replace.js",
    "revision": "7732ef7434ee0095decce950f416bff8"
  },
  {
    "url": "node_modules/lit-html/directives/cache.js",
    "revision": "8aa0c9b2096899239e163a0727362c6f"
  },
  {
    "url": "node_modules/lit-html/directives/class-map.js",
    "revision": "13fd443f5b030395790886e21fa7ef6b"
  },
  {
    "url": "node_modules/lit-html/directives/guard.js",
    "revision": "ad09d68d2035c335d3be91e78a390ec7"
  },
  {
    "url": "node_modules/lit-html/directives/if-defined.js",
    "revision": "0b45cc46b88bc39118f14369e7f9141e"
  },
  {
    "url": "node_modules/lit-html/directives/repeat.js",
    "revision": "a3ed38e564c97093741ed7fe6ab53d1d"
  },
  {
    "url": "node_modules/lit-html/directives/style-map.js",
    "revision": "52f71857303971de342219f86e1be27c"
  },
  {
    "url": "node_modules/lit-html/directives/unsafe-html.js",
    "revision": "ff818bc767837badf6765e48c3903154"
  },
  {
    "url": "node_modules/lit-html/directives/until.js",
    "revision": "ee1eb6e410fa9920673890aece12b517"
  },
  {
    "url": "node_modules/lit-html/lib/async-append.js",
    "revision": "e72ae444630172678a2ce51dbf52beb6"
  },
  {
    "url": "node_modules/lit-html/lib/async-replace.js",
    "revision": "08d3c1a2322c52e2689758fb0bd6c912"
  },
  {
    "url": "node_modules/lit-html/lib/default-template-processor.js",
    "revision": "e96dc25c4a6ab961d383723b243bacb1"
  },
  {
    "url": "node_modules/lit-html/lib/directive.js",
    "revision": "1d0d4dd4117349ba63339aee90963f44"
  },
  {
    "url": "node_modules/lit-html/lib/dom.js",
    "revision": "45322140ad6ad2789e8ebeb95eec59f3"
  },
  {
    "url": "node_modules/lit-html/lib/lit-extended.js",
    "revision": "d24daec20065370d69db1eea3ca14252"
  },
  {
    "url": "node_modules/lit-html/lib/modify-template.js",
    "revision": "19cd46629fac6601423169f538f5b5ba"
  },
  {
    "url": "node_modules/lit-html/lib/part.js",
    "revision": "ffd11b35ced31f865d8381f3585892df"
  },
  {
    "url": "node_modules/lit-html/lib/parts.js",
    "revision": "ffdc54cd7f09acb476c53d96c99b0a99"
  },
  {
    "url": "node_modules/lit-html/lib/render-options.js",
    "revision": "b135ca8c29cdf7d1e3d0761b692e1663"
  },
  {
    "url": "node_modules/lit-html/lib/render.js",
    "revision": "e22a39942d0d752076163c996cf8fc56"
  },
  {
    "url": "node_modules/lit-html/lib/repeat.js",
    "revision": "8472ee5fdd935aa72259321a05f9471f"
  },
  {
    "url": "node_modules/lit-html/lib/shady-render.js",
    "revision": "6f7e199cd1cf7c2ae9bf6eba7a8c12c7"
  },
  {
    "url": "node_modules/lit-html/lib/template-factory.js",
    "revision": "dcdc52b73ba1f464ece3387ab1ce1b8d"
  },
  {
    "url": "node_modules/lit-html/lib/template-instance.js",
    "revision": "6c9495fce172762a92590b384bb4d3c3"
  },
  {
    "url": "node_modules/lit-html/lib/template-processor.js",
    "revision": "da7fb57119a10d43468d581552ceee39"
  },
  {
    "url": "node_modules/lit-html/lib/template-result.js",
    "revision": "692e28fbf475a700fcb68ebecfe37741"
  },
  {
    "url": "node_modules/lit-html/lib/template.js",
    "revision": "aa4ec6a7762d526e15f7c34b4e06c9c4"
  },
  {
    "url": "node_modules/lit-html/lib/unsafe-html.js",
    "revision": "68d76f033adbaf4fea06ad13cf0980ce"
  },
  {
    "url": "node_modules/lit-html/lib/until.js",
    "revision": "5c149fcee4354ebda36af2e9bb63a79a"
  },
  {
    "url": "node_modules/lit-html/lit-html.js",
    "revision": "b0f1b842794a5026a27829356f2a26ce"
  },
  {
    "url": "node_modules/lit-html/package.json",
    "revision": "07497fc3df2e3e9fe63a3b657f126702"
  },
  {
    "url": "node_modules/lit-html/polyfills/template_polyfill.js",
    "revision": "0f0860f25b55c688dd6f1bd5685a824c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(?:png|gif|jpg|jpeg|svg)$/, new workbox.strategies.CacheFirst({ "cacheName":"images", plugins: [] }), 'GET');

if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let n=Promise.resolve();return c[e]||(n=new Promise((async n=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=n}else importScripts(e),n()}))),n.then((()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]}))},n=(n,c)=>{Promise.all(n.map(e)).then((e=>c(1===e.length?e[0]:e)))},c={require:Promise.resolve(n)};self.define=(n,i,s)=>{c[n]||(c[n]=Promise.resolve().then((()=>{let c={};const r={uri:location.origin+n.slice(1)};return Promise.all(i.map((n=>{switch(n){case"exports":return c;case"module":return r;default:return e(n)}}))).then((e=>{const n=s(...e);return c.default||(c.default=n),c}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Arn7xzhLVEcHlXjY4YG95/_buildManifest.js",revision:"Arn7xzhLVEcHlXjY4YG95"},{url:"/_next/static/Arn7xzhLVEcHlXjY4YG95/_ssgManifest.js",revision:"Arn7xzhLVEcHlXjY4YG95"},{url:"/_next/static/chunks/1bfc9850.b8d035711fe643eb51dc.js",revision:"Arn7xzhLVEcHlXjY4YG95"},{url:"/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.429a5247f33e9b7f3311.js",revision:"Arn7xzhLVEcHlXjY4YG95"},{url:"/_next/static/chunks/commons.b33d69fee4c480cb880f.js",revision:"Arn7xzhLVEcHlXjY4YG95"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.664d47e0df7553f1d5fb.js",revision:"Arn7xzhLVEcHlXjY4YG95"},{url:"/_next/static/chunks/framework.1a5e6c0bcaecf178eee2.js",revision:"Arn7xzhLVEcHlXjY4YG95"},{url:"/_next/static/chunks/main-9f7f7989ffd32f3c9648.js",revision:"Arn7xzhLVEcHlXjY4YG95"},{url:"/_next/static/chunks/pages/_app-0f0c186763c328d69893.js",revision:"Arn7xzhLVEcHlXjY4YG95"},{url:"/_next/static/chunks/pages/_error-78cb3450df7c395e9c71.js",revision:"Arn7xzhLVEcHlXjY4YG95"},{url:"/_next/static/chunks/pages/index-390aa778e6748d565a45.js",revision:"Arn7xzhLVEcHlXjY4YG95"},{url:"/_next/static/chunks/polyfills-144e5fa6fafab6397d9c.js",revision:"Arn7xzhLVEcHlXjY4YG95"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"Arn7xzhLVEcHlXjY4YG95"},{url:"/favicon.ico",revision:"c75be04e7984046b7ade6d09939a7852"},{url:"/icons/android-icon-144x144.png",revision:"019131b21991064d65fdca827cf31f61"},{url:"/icons/android-icon-192x192.png",revision:"65bbde5dcd673f24e92257dee6de5d23"},{url:"/icons/android-icon-36x36.png",revision:"3f58d82ddedf0ef635738b94ca7a4b3c"},{url:"/icons/android-icon-48x48.png",revision:"45663efefd1068b8317de6d4a9381807"},{url:"/icons/android-icon-72x72.png",revision:"ef932af73385c0e660175d707a319848"},{url:"/icons/android-icon-96x96.png",revision:"fcee3d6dc5623acc57ea771923911d7c"},{url:"/icons/apple-icon-114x114.png",revision:"dffb78796215a9e72bbee5c5f3e3a78b"},{url:"/icons/apple-icon-120x120.png",revision:"b12a80a8aa08044bbcdb63ccc0c57423"},{url:"/icons/apple-icon-144x144.png",revision:"019131b21991064d65fdca827cf31f61"},{url:"/icons/apple-icon-152x152.png",revision:"379d6c2cd4f3c388cc1502633489bdaa"},{url:"/icons/apple-icon-180x180.png",revision:"4930192c474f0405bc4989d0c30da64d"},{url:"/icons/apple-icon-57x57.png",revision:"28885be52041683296195547306448d7"},{url:"/icons/apple-icon-60x60.png",revision:"8a3ad88813cb28bf9eaa83f46f68e8b0"},{url:"/icons/apple-icon-72x72.png",revision:"ef932af73385c0e660175d707a319848"},{url:"/icons/apple-icon-76x76.png",revision:"c4717486a22053874b019cd67cc4d012"},{url:"/icons/apple-icon-precomposed.png",revision:"be2a86cb8c0200ce1a928cd79264b1ea"},{url:"/icons/apple-icon.png",revision:"be2a86cb8c0200ce1a928cd79264b1ea"},{url:"/icons/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"/icons/favicon-16x16.png",revision:"7feaa17ce89e121d8b696073a1f63576"},{url:"/icons/favicon-32x32.png",revision:"1697c604682efa264d6c28fc0c7223cb"},{url:"/icons/favicon-96x96.png",revision:"fcee3d6dc5623acc57ea771923911d7c"},{url:"/icons/icon-192x192.png",revision:"431b80deb1b94ab305cfe1373e680f14"},{url:"/icons/icon-256x256.png",revision:"d1a765aa0cc701c267d84dff69166e61"},{url:"/icons/icon-384x384.png",revision:"3e7de09d602234ad20b1f14e79d6ee52"},{url:"/icons/icon-512x512.png",revision:"ae331771d200205072ceaa1b2beb93e8"},{url:"/icons/ms-icon-144x144.png",revision:"019131b21991064d65fdca827cf31f61"},{url:"/icons/ms-icon-150x150.png",revision:"c2f0e5f33650424d13b82c82ab6c0625"},{url:"/icons/ms-icon-310x310.png",revision:"6cf73526772f5bada066149e5d0d0ef1"},{url:"/icons/ms-icon-70x70.png",revision:"a43557aa524bc9eb78003996d64e4ee8"},{url:"/manifest.webmanifest",revision:"21d97bd8b98869eb2679ad06d780b9fe"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:n,event:c,state:i})=>n&&"opaqueredirect"===n.type?new Response(n.body,{status:200,statusText:"OK",headers:n.headers}):n}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
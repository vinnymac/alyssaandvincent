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

importScripts("workbox-v3.5.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.5.0"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-092a13cb5d10261061bf.js"
  },
  {
    "url": "app-3e9abcaa0effa488de27.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-36df8f17019630fec764.js"
  },
  {
    "url": "index.html",
    "revision": "56bf5eecca704f402759d9d6574ef969"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "94c5a61d6114b23fbb6ea74ad2fb8209"
  },
  {
    "url": "0-67433a69d394f1595102.js"
  },
  {
    "url": "component---src-pages-index-jsx-c0cf93ef8254dfca8bca.js"
  },
  {
    "url": "static/d/944/path---index-6a9-tihEyB1lI5RHIF93wPTGDsP0Ck.json",
    "revision": "e112cd97a0a2dfca75dda7b88ff3b77e"
  },
  {
    "url": "component---src-pages-404-jsx-80deb42f2599efa3c8e3.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.json",
    "revision": "6b42a553f49665d21c93ec52e2af4997"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "1813d60c34825e68c93fb89aa0195d9c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});
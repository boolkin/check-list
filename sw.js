'use strict';
const CACHE_STATIC = 'static-cache-v1';
        const files = [
            './',
            './manifest.json',
            './images/240x240.png',
            './index.html',
            './sw.js',
        ];


function hndlEventFetch(evt) {
    async function getFromCache() {
        const cache = await self.caches.open(CACHE_STATIC);
        const cachedResponse = await cache.match(evt.request);
        if (cachedResponse) {
            return cachedResponse;
        }
        // wait until resource will be fetched from server and stored in cache
        const resp = await fetch(evt.request);
        await cache.put(evt.request, resp.clone());
        return resp;
    }

    evt.respondWith(getFromCache());
}

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_STATIC).then(cache => {
      return cache.addAll(files);
    })
  );
});
self.addEventListener('fetch', hndlEventFetch);
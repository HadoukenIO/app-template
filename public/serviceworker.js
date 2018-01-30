// Mozilla Service Worker Cookbook 'network or cache' recipe: https://serviceworke.rs/strategy-network-or-cache.html
var CACHE = "network-or-cache";

self.addEventListener("install", evt => {
  console.log("The service worker is being installed.");
  evt.waitUntil(precache());
});

self.addEventListener("fetch", evt => {
  console.log("The service worker is serving the asset.");
  evt.respondWith(
    fromNetwork(evt.request, 400).catch(() => {
      return fromCache(evt.request);
    })
  );
});

function precache() {
  return caches.open(CACHE).then(cache => {
    return cache.addAll(["./index.html", "./favicon.ico", "js/main.js"]);
  });
}

function fromNetwork(request, timeout) {
  return new Promise((fulfill, reject) => {
    var timeoutId = setTimeout(reject, timeout);
    fetch(request).then(response => {
      clearTimeout(timeoutId);
      fulfill(response);
    }, reject);
  });
}

function fromCache(request) {
  return caches.open(CACHE).then(cache => {
    return cache.match(request).then(matching => {
      return matching || Promise.reject("no-match");
    });
  });
}

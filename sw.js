!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){var n=["index.html","bundle.css","index.js"];function r(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(t,n){return!!e.endsWith(n)||t},!1)}self.addEventListener("install",function(e){caches.open("filter-gallery-v1").then(function(e){return e.addAll(n)})}),self.addEventListener("fetch",function(e){var t=e.request.url;r(t,"index.js","index.html","bundle.css","application.json",self.location.origin+"/","f=json")||t.slice(0,t.lastIndexOf("?")).endsWith("self")?e.respondWith(fetch(e.request).then(function(e){return caches.open("filter-gallery-v1").then(function(n){return t.indexOf("test")<0&&n.put(t,e.clone()),e})}).catch(function(t){return caches.match(e.request)})):r(t,".css",".js",".html","/","woff","woff2","ttf")&&e.respondWith(caches.match(e.request).then(function(n){return n||fetch(e.request).then(function(e){return caches.open("filter-gallery-v1").then(function(n){return t.indexOf("test")<0&&n.put(t,e.clone()),e})})}).catch(function(e){}))})}]);
//# sourceMappingURL=sw.js.map
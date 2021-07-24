!function(e){function t(t){for(var n,o,i=t[0],c=t[1],s=t[2],p=0,l=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(f&&f(t);l.length;)l.shift()();return u.push.apply(u,s||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==a[c]&&(n=!1)}n&&(u.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={2:0},u=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var f=c;u.push([22,0,1]),r()}([function(e,t,r){"use strict";var n={BASE_URL:"https://restaurant-api.dicoding.dev/",API_KEY:"12345",CACHE_NAME:(new Date).toISOString(),DATABASE_NAME:"enak-restaurant-database",DATABASE_VERSION:1,OBJECT_STORE_NAME:"restaurant"};t.a=n},function(e,t,r){"use strict";var n=r(0),a={LIST:"".concat(n.a.BASE_URL,"list"),DETAIL:function(e){return"".concat(n.a.BASE_URL,"detail/").concat(e)},IMAGE:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"small",t=arguments.length>1?arguments[1]:void 0;return"".concat(n.a.BASE_URL,"images/").concat(e,"/").concat(t)},ADD_NEW_REVIEW:"".concat(n.a.BASE_URL,"review")};t.a=a},function(e,t,r){"use strict";var n=r(1),a=r(0);function u(e,t,r,n,a,u,o){try{var i=e[u](o),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,a)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){u(o,n,a,i,c,"next",e)}function c(e){u(o,n,a,i,c,"throw",e)}i(void 0)}))}}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,u,c,s,f;return t=e,r=null,u=[{key:"RestaurantList",value:(f=o(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n.a.LIST);case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r.restaurants);case 7:case"end":return e.stop()}}),e)}))),function(){return f.apply(this,arguments)})},{key:"RestaurantDetail",value:(s=o(regeneratorRuntime.mark((function e(t){var r,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n.a.DETAIL(t));case 2:return r=e.sent,e.next=5,r.json();case 5:return a=e.sent,e.abrupt("return",a.restaurant);case 7:case"end":return e.stop()}}),e)}))),function(e){return s.apply(this,arguments)})},{key:"AddReview",value:(c=o(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n.a.ADD_NEW_REVIEW,{method:"POST",headers:{"Content-Type":"application/json","X-Auth-Token":a.a.API_KEY},body:JSON.stringify(t)});case 2:return r=e.sent,e.abrupt("return",r.json());case 4:case"end":return e.stop()}}),e)}))),function(e){return c.apply(this,arguments)})}],r&&i(t.prototype,r),u&&i(t,u),e}();t.a=c},function(e,t,r){"use strict";var n={parseActiveUrlWithCombiner:function(){var e=window.location.hash.slice(1).toLowerCase(),t=this._urlSplitter(e);return this._urlCombiner(t)},parseActiveUrlWithoutCombiner:function(){var e=window.location.hash.slice(1).toLowerCase();return this._urlSplitter(e)},_urlSplitter:function(e){var t=e.split("/");return{resource:t[1]||null,id:t[2]||null,verb:t[3]||null}},_urlCombiner:function(e){return(e.resource?"/".concat(e.resource):"/")+(e.id?"/:id":"")+(e.verb?"/".concat(e.verb):"")}};t.a=n},function(e,t,r){"use strict";var n=r(15),a=r(0);function u(e,t,r,n,a,u,o){try{var i=e[u](o),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,a)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){u(o,n,a,i,c,"next",e)}function c(e){u(o,n,a,i,c,"throw",e)}i(void 0)}))}}var i=a.a.DATABASE_NAME,c=a.a.DATABASE_VERSION,s=a.a.OBJECT_STORE_NAME,f=Object(n.a)(i,c,{upgrade:function(e){e.createObjectStore(s,{keyPath:"id"})}}),p={getRestaurant:function(e){return o(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,f;case 4:return t.abrupt("return",t.sent.get(s,e));case 5:case"end":return t.stop()}}),t)})))()},getAllRestaurants:function(){return o(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f;case 2:return e.abrupt("return",e.sent.getAll(s));case 3:case"end":return e.stop()}}),e)})))()},putRestaurant:function(e){return o(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.hasOwnProperty("id")){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,f;case 4:return t.abrupt("return",t.sent.put(s,e));case 5:case"end":return t.stop()}}),t)})))()},deleteRestaurant:function(e){return o(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f;case 2:return t.abrupt("return",t.sent.delete(s,e));case 3:case"end":return t.stop()}}),t)})))()}};t.a=p},function(e,t,r){"use strict";var n=r(3),a=r(10),u=r(14),o=r(12),i={"/":a.a,"/detail/:id":u.a,"/favorite":o.a};function c(e,t,r,n,a,u,o){try{var i=e[u](o),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,a)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var f=function(){function e(t){var r=t.content;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._content=r}var t,r,a,u,o;return t=e,(r=[{key:"renderPage",value:(u=regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.a.parseActiveUrlWithCombiner(),r=i[t],e.next=4,r.render();case 4:return this._content.innerHTML=e.sent,e.next=7,r.afterRender();case 7:case"end":return e.stop()}}),e,this)})),o=function(){var e=this,t=arguments;return new Promise((function(r,n){var a=u.apply(e,t);function o(e){c(a,r,n,o,i,"next",e)}function i(e){c(a,r,n,o,i,"throw",e)}o(void 0)}))},function(){return o.apply(this,arguments)})}])&&s(t.prototype,r),a&&s(t,a),e}();t.a=f},,,,,,function(e,t,r){"use strict";var n=r(8);function a(e,t,r,n,a,u,o){try{var i=e[u](o),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,a)}function u(e){return function(){var t=this,r=arguments;return new Promise((function(n,u){var o=e.apply(t,r);function i(e){a(o,n,u,i,c,"next",e)}function c(e){a(o,n,u,i,c,"throw",e)}i(void 0)}))}}var o={init:function(e){var t=this;return u(regeneratorRuntime.mark((function r(){var n,a,u;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.likeButtonContainer,a=e.favoriteRestaurant,u=e.restaurant,t._likeButtonContainer=n,t._restaurant=u,t._favoriteRestaurant=a,r.next=6,t._renderButton();case 6:case"end":return r.stop()}}),r)})))()},_renderButton:function(){var e=this;return u(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e._restaurant.id,t.next=3,e._isRestaurantExists(r);case 3:if(!t.sent){t.next=7;break}e._renderLiked(),t.next=8;break;case 7:e._renderLike();case 8:case"end":return t.stop()}}),t)})))()},_isRestaurantExists:function(e){var t=this;return u(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t._favoriteRestaurant.getRestaurant(e);case 2:return n=r.sent,r.abrupt("return",!!n);case 4:case"end":return r.stop()}}),r)})))()},_renderLike:function(){var e=this;this._likeButtonContainer.innerHTML=Object(n.a)(),document.querySelector("#likeButton").addEventListener("click",u(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._favoriteRestaurant.putRestaurant(e._restaurant);case 2:e._renderButton();case 3:case"end":return t.stop()}}),t)}))))},_renderLiked:function(){var e=this;this._likeButtonContainer.innerHTML=Object(n.b)(),document.querySelector("#likeButton").addEventListener("click",u(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._favoriteRestaurant.deleteRestaurant(e._restaurant.id);case 2:e._renderButton();case 3:case"end":return t.stop()}}),t)}))))}};t.a=o},,,,,,,,,,,function(e,t,r){"use strict";r.r(t);r(16),r(17),r(18);var n=r(5),a=r(13),u=r.n(a);function o(e,t,r,n,a,u,o){try{var i=e[u](o),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,a)}var i=function(){var e,t=(e=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("serviceWorker"in navigator)){e.next=4;break}return e.next=3,u.a.register();case 3:return e.abrupt("return");case 4:console.log("service worker not supported in this browser");case 5:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var u=e.apply(t,r);function i(e){o(u,n,a,i,c,"next",e)}function c(e){o(u,n,a,i,c,"throw",e)}i(void 0)}))});return function(){return t.apply(this,arguments)}}(),c=new n.a({content:document.querySelector("#mainContent")});window.addEventListener("hashchange",(function(){c.renderPage()})),window.addEventListener("DOMContentLoaded",(function(){c.renderPage(),i()}))}]);
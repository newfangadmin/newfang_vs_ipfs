var newfang_store=function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=130)}({130:function(t,e,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},i=this&&this.__generator||function(t,e){var r,n,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,n=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(i=(i=u.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=e.call(t,u)}catch(t){o=[6,t],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},o=this&&this.__read||function(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,i,o=r.call(t),u=[];try{for(;(void 0===e||e-- >0)&&!(n=o.next()).done;)u.push(n.value)}catch(t){i={error:t}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return u},u=this&&this.__spread||function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(o(arguments[e]));return t},s=this&&this.__values||function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],r=0;return e?e.call(t):{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}}};Object.defineProperty(e,"__esModule",{value:!0});var a=r(131),l=function(t,e){var r;return i(this,function(n){switch(n.label){case 0:r=t,n.label=1;case 1:return r<=e?[4,r]:[3,4];case 2:n.sent(),n.label=3;case 3:return r++,[3,1];case 4:return[2]}})},c=[null,"13.233.229.160","15.206.10.154","13.235.94.213","13.233.186.47","15.206.17.31","13.235.70.180"],f=function(){function t(){this.imageList=[],this.helperUsage=new a.default,this.imageList=[],this.helperUsage.buildHeap(u(l(1,6)).map(function(t){return{key:0,value:t}}))}return t.prototype.add_element=function(t){try{var e=document.getElementById(t.id);if(e){var r=this.get_helper_url();return e.src=this.get_url_string(r,t.uri,t.name),this.imageList.push(n({},t,{element:e,storageCount:r})),!0}return!1}catch(t){return!1}},t.prototype.add_elements=function(t){var e,r,n=[];try{for(var i=s(t),o=i.next();!o.done;o=i.next()){var u=o.value;n.push(this.add_element(u))}}catch(t){e={error:t}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(e)throw e.error}}return n.every(Boolean)},t.prototype.get_url=function(t){var e=this.get_helper_url();return this.get_url_string(e,t.uri,t.filename)},t.prototype.get_url_string=function(t,e,r){return"http://"+c[t]+":3456/suri?uri="+e+"&filename="+r},t.prototype.get_helper_url=function(){return this.helperUsage.getMin().value},t}();e.default=new f},131:function(t,e,r){"use strict";var n=this&&this.__read||function(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,i,o=r.call(t),u=[];try{for(;(void 0===e||e-- >0)&&!(n=o.next()).done;)u.push(n.value)}catch(t){i={error:t}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return u},i=this&&this.__spread||function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(n(arguments[e]));return t};Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(){this.items=[0],this.size=0}return t.prototype.insert=function(t){this.items.push(t),this.size=this.size+1,this.percUp(this.size)},t.prototype.getMin=function(){if(this.size>0){var t=this.items[1];return this.items[1].key=this.items[1].key+1,this.percDown(1),t}return null},t.prototype.buildHeap=function(t){var e=~~(t.length/2);for(this.size=t.length,this.items=i([0],t);e>0;)this.percDown(e),e-=1},t.prototype.percUp=function(t){for(;~~(t/2)>0;){var e=~~(t/2);if(this.items[t].key<this.items[e].key){var r=this.items[t];this.items[t]=this.items[e],this.items[e]=r}t=~~(t/2)}},t.prototype.percDown=function(t){for(;2*t<=this.size;){var e=this.minChild(t);if(this.items[t].key>this.items[e].key){var r=this.items[t];this.items[t]=this.items[e],this.items[e]=r}t=e}},t.prototype.minChild=function(t){return 2*t+1>this.size?2*t:this.items[2*t].key<this.items[2*t+1].key?2*t:2*t+1},t}();e.default=o}});
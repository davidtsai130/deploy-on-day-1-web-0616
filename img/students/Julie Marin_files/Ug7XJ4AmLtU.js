if (self.CavalryLogger) { CavalryLogger.start_js(["30Ha8"]); }

__d('LogoutMenu',['csx','DOMQuery','emptyFunction','Event','requireWeak'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i;c('requireWeak')('MenuItem',function(k){i=k;});function j(k,l){var m;if(l)l.subscribe('confirm',function(){c('Event').fire(m,'submit');m.submit();});k.subscribe('itemclick',function(n,o){switch(o.item.getValue()){case 'logout':m=c('DOMQuery').find(k.getRoot(),"._w0d");break;case 'help':if(i)i.prototype.hasAction=c('emptyFunction').thatReturnsFalse;break;default:break;}if(m)if(l){l.show();}else{c('Event').fire(m,'submit');m.submit();}});}f.exports.init=j;},null);
__d('StringTransformations',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();f.exports={unicodeEscape:function(h){return h.replace(/[^A-Za-z0-9\-\.\:\_\$\/\+\=]/g,function(i){var j=i.charCodeAt().toString(16);return '\\u'+('0000'+j.toUpperCase()).slice(-4);});},unicodeUnescape:function(h){return h.replace(/(\\u[0-9A-Fa-f]{4})/g,function(i){return String.fromCharCode(parseInt(i.slice(2),16));});}};},null);
__d("XWebStorageLoggingAsyncController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/ajax\/webstorage\/process_keys\/",{});},null);
__d('WebStorageMonster',['Event','AsyncRequest','UserActivity','StringTransformations','WebStorage','XWebStorageLoggingAsyncController','arrayContains','isEmpty','setTimeoutAcrossTransitions'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=300000,i=false;function j(o){var p={};for(var q in o){var r=o.getItem(q),s=c('StringTransformations').unicodeEscape(q);if(typeof r==='string')p[s]=r.length;}return p;}function k(o){var p=c('WebStorage').getLocalStorage();if(!p||!o.keys)return;n._getLocalStorageKeys().forEach(function(q){if(c('arrayContains')(o.keys,q))p.removeItem(q);});}function l(o){var p=c('WebStorage').getLocalStorage();if(p)n._getLocalStorageKeys().forEach(function(q){if(!o.some(function(r){return new RegExp(r).test(q);}))p.removeItem(q);});}function m(){if(c('UserActivity').isActive(h)){c('setTimeoutAcrossTransitions')(m,h);}else n.cleanNow();}var n={registerLogoutForm:function(o,p){c('Event').listen(o,'submit',function(q){n.cleanOnLogout(p);});},schedule:function(){if(i)return;i=true;m();},cleanNow:function(){var o=Date.now(),p={},q=c('WebStorage').getLocalStorage();if(q)p.local_storage=j(q);var r=c('WebStorage').getSessionStorage();if(r)p.session_storage=j(r);var s=!c('isEmpty')(p),t=Date.now();p.logtime=t-o;if(s){var u=c('XWebStorageLoggingAsyncController').getURIBuilder().getURI();new (c('AsyncRequest'))(u).setData(p).setHandler(function(v){var w=v.getPayload();if(w.keys)w.keys=w.keys.map(c('StringTransformations').unicodeUnescape);k(w);}).send();}},cleanOnLogout:function(o){if(o)l(o);var p=c('WebStorage').getSessionStorage();if(p)p.clear();},_getLocalStorageKeys:function(){var o=c('WebStorage').getLocalStorage();return o?Object.keys(o):[];}};f.exports=n;},null);
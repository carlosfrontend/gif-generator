(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var r=t.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var c=r.getElementsByTagName("script");if(c.length)for(var o=c.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=c[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})();const e=t.p+"images/480ec545cea8cbc9a138.svg",r=t.p+"images/cf24bf475c239c961691.png",c=t=>{if(!t.ok)throw new Error("Could not obtain a new image. A correct API key is required!!")},o=(t,e)=>{t.textContent=e},n=(t,e)=>{t.src=e.data.images.original.url},a=t=>{t.textContent=""},i=()=>{document.querySelector("#search").value=""},s=t.p+"images/257345e5a458c3e23965.gif",u="https://api.giphy.com/v1/gifs/random?api_key=rVwOiFFX3oZk5jfqXjux1KP3HHyTbcZH",l=document.querySelector(".error"),g=document.querySelector(".result");g.src=s;const m=document.querySelector("#magnify-icon"),d=document.querySelector(".attr-image"),h=document.querySelector("#search-button"),p=document.querySelector(".get-gif-button");m.src=e,d.src=r,p.addEventListener("click",(async()=>{try{const t=await fetch(u,{mode:"cors"});c(t),a(l);const e=await t.json();n(g,e)}catch(t){g.src=s,o(l,t)}})),h.addEventListener("click",(async()=>{try{const t=document.querySelector("#search").value,e=`${u.replace("random","translate")}&s=${t}`,r=await fetch(e,{mode:"cors"});c(r),a(l);const o=await r.json();(t=>{if(0===t.data.length&&200===t.meta.status)throw new Error("Try writing something different. We did not find images with that term!!")})(o),n(g,o),a(l),i()}catch(t){g.src=s,o(l,t),i()}}))})();
//# sourceMappingURL=main.2bc72c7dc767b82c42bb.js.map
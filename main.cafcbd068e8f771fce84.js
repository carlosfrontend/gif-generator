(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var r=t.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var c=r.getElementsByTagName("script");if(c.length)for(var n=c.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=c[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})();const e=t.p+"images/480ec545cea8cbc9a138.svg",r=t.p+"images/cf24bf475c239c961691.png",c=t=>{if(!t.ok)throw new Error("Could not obtain a new image. A correct API key is required!!")},n=(t,e)=>{t.textContent=e},o=(t,e)=>{t.src=e.data.images.original.url},a=t=>{t.textContent=""},i=t=>{t.target.parentElement.parentElement.children[0].value=""},s=t.p+"images/257345e5a458c3e23965.gif",u="https://api.giphy.com/v1/gifs/random?api_key=rVwOiFFX3oZk5jfqXjux1KP3HHyTbcZH",l=document.querySelector(".error"),g=document.querySelector(".result");g.src=s;const m=document.querySelector("#magnify-icon"),h=document.querySelector(".attr-image"),d=document.querySelector("#search-button"),p=document.querySelector(".get-gif-button");m.src=e,h.src=r,p.addEventListener("click",(async()=>{try{const t=await fetch(u,{mode:"cors"});c(t),a(l),t.json().then((t=>{o(g,t)}))}catch(t){n(l,t)}})),d.addEventListener("click",(async t=>{const e=t;try{const t=document.querySelector("#search").value,r=`${u.replace("random","translate")}&s=${t}`,s=await fetch(r,{mode:"cors"});c(s),a(l),s.json().then((t=>{try{(t=>{if(0===t.data.length&&200===t.meta.status)throw new Error("Try writing something different. We did not find images with that term!!")})(t),o(g,t),a(l),i(e)}catch(t){n(l,t),i(e)}}))}catch(t){n(l,t)}}))})();
//# sourceMappingURL=main.cafcbd068e8f771fce84.js.map
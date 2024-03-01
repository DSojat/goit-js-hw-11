import{i as u,S as f}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function h(l){const i=`https://pixabay.com/api/?${new URLSearchParams({key:"42608378-1c88fd965c25ed4d8c49bb63d",q:l,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`;return Promise.resolve(fetch(i).then(t=>t.json()).then(t=>t.hits).catch(t=>alert(t)))}const m=document.querySelector(".gallery-list");function y(){m.innerHTML='<span class="loader"></span>'}function p(l){const s=l.map(({webformatURL:i,largeImageURL:t,tags:e,likes:r,views:a,comments:d,downloads:g})=>`
    <li class="gallery-item">
      <div class="gallery-image-box">
        <a class="gallery-link" href="${t}">
          <img class="gallery-image" src="${i}" alt="${e}" />
        </a>
      </div>
      <div class="gallery-stats">
        <ul>
          Likes
          <li>${r}</li>
        </ul>
        <ul>
          Views
          <li>${a}</li>
        </ul>
        <ul>
          Comments
          <li>${d}</li>
        </ul>
        <ul>
          Downloads
          <li>${g}</li>
        </ul>
      </div>
    </li>
        `).join("");m.innerHTML=s}u.settings({messageColor:"white",messageSize:"16",messageLineHeight:"24",maxWidth:432,theme:"dark",position:"topRight",iconUrl:"./img/x-octagon.svg"});const o=document.querySelector(".search-form"),c=document.querySelector(".gallery-list");let n="";o.addEventListener("submit",l=>{l.preventDefault(),n=o.elements.search.value.trim(),n?(y(),h(n).then(s=>{s.length===0?(c.innerHTML="",u.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040"})):(p(s),new f(".gallery-list a",{captionsData:"alt",captionDelay:250}).refresh())}),o.reset()):c.innerHTML=""});
//# sourceMappingURL=commonHelpers.js.map

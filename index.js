import{a as f,S as p,i as n}from"./assets/vendor-DqB7j7Ix.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const m="51361185-26f33cacb8ace1f080d7f8aff",y="https://pixabay.com/api/";async function g(a){const r={key:m,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await f.get(y,{params:r})).data}let l;function h(a){const r=document.querySelector(".gallery"),s=a.map(({webformatURL:i,largeImageURL:e,tags:t,likes:o,views:c,comments:u,downloads:d})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${e}">
          <img class="gallery-image" src="${i}" alt="${t}" />
        </a>
        <div class="info">
  <div class="info-item">
    <p class="label">Likes</p>
    <p class="value">${o}</p>
  </div>
  <div class="info-item">
    <p class="label">Views</p>
    <p class="value">${c}</p>
  </div>
  <div class="info-item">
    <p class="label">Comments</p>
    <p class="value">${u}</p>
  </div>
  <div class="info-item">
    <p class="label">Downloads</p>
    <p class="value">${d}</p>
  </div>
</div>

      </li>
    `).join("");r.insertAdjacentHTML("beforeend",s),l?l.refresh():l=new p(".gallery a",{captionsData:"alt",captionDelay:250})}function v(){document.querySelector(".gallery").innerHTML=""}function L(){document.querySelector(".loader").classList.remove("is-hidden")}function b(){document.querySelector(".loader").classList.add("is-hidden")}const S=document.querySelector(".form");S.addEventListener("submit",async a=>{a.preventDefault();const r=a.currentTarget.elements["search-text"].value.trim();if(!r){n.error({title:"Error",message:"Please enter a search query!",position:"topRight"});return}v(),L();try{const s=await g(r);if(s.hits.length===0){n.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(s.hits)}catch{n.error({title:"Error",message:"Something went wrong. Try again later.",position:"topRight"})}finally{b()}});
//# sourceMappingURL=index.js.map

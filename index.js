import{a as h,S as v,i as l}from"./assets/vendor-DqB7j7Ix.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const L="51361185-26f33cacb8ace1f080d7f8aff",b="https://pixabay.com/api/";async function w(r,o=1){const i={key:L,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o};return(await h.get(b,{params:i})).data}let c;function S(r){const o=document.querySelector(".gallery"),i=r.map(({webformatURL:a,largeImageURL:e,tags:t,likes:n,views:m,comments:y,downloads:g})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${e}">
          <img class="gallery-image" src="${a}" alt="${t}" />
        </a>
        <div class="info">
          <div class="info-item">
            <p class="label">Likes</p>
            <p class="value">${n}</p>
          </div>
          <div class="info-item">
            <p class="label">Views</p>
            <p class="value">${m}</p>
          </div>
          <div class="info-item">
            <p class="label">Comments</p>
            <p class="value">${y}</p>
          </div>
          <div class="info-item">
            <p class="label">Downloads</p>
            <p class="value">${g}</p>
          </div>
        </div>
      </li>
    `).join("");o.insertAdjacentHTML("beforeend",i),c?c.refresh():c=new v(".gallery a",{captionsData:"alt",captionDelay:250})}function q(){document.querySelector(".gallery").innerHTML=""}function P(){document.querySelector(".loader").classList.remove("is-hidden")}function E(){document.querySelector(".loader").classList.add("is-hidden")}function B(){document.querySelector(".load-more").classList.remove("is-hidden")}function f(){document.querySelector(".load-more").classList.add("is-hidden")}const M=document.querySelector(".form"),$=document.querySelector(".load-more");let d="",s=1,u=0;M.addEventListener("submit",async r=>{if(r.preventDefault(),d=r.currentTarget.elements["search-text"].value.trim(),!d){l.error({title:"Error",message:"Please enter a search query!",position:"topRight"});return}q(),s=1,u=0,f(),await p()});$.addEventListener("click",async()=>{s+=1,await p()});async function p(){P();try{const r=await w(d,s);if(r.hits.length===0&&s===1){l.info({title:"Info",message:"No images found. Please try a different query.",position:"topRight"});return}if(S(r.hits),u=Math.ceil(r.totalHits/15),s<u?B():(f(),l.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),s>1){const{height:o}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}}catch{l.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{E()}}
//# sourceMappingURL=index.js.map

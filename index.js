import{a as d,S as f,i}from"./assets/vendor-BjRz3xa9.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const p="49751566-58037048f2894c5e898374fdb",m="https://pixabay.com/api/";function y(r){const s={key:p,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0};return d.get(m,{params:s}).then(e=>e.data).catch(e=>{throw console.error("Помилка при запиті:",e),e})}const u=document.querySelector(".gallery");let a=null;function h(r){const s=r.map(e=>`
      <li class="gallery-item">
        <a href="${e.largeImageURL}" class="gallery-item-link">
          <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" class="gallery-image" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${e.likes}</p>
          <p><b>Views:</b> ${e.views}</p>
          <p><b>Comments:</b> ${e.comments}</p>
          <p><b>Downloads:</b> ${e.downloads}</p>
        </div>
      </li>
    `).join("");u.insertAdjacentHTML("beforeend",s),a?a.refresh():a=new f(".gallery a")}function g(){u.innerHTML=""}function b(){var r;(r=document.querySelector(".loader"))==null||r.classList.add("is-visible")}function L(){var r;(r=document.querySelector(".loader"))==null||r.classList.remove("is-visible")}const l=document.querySelector(".form"),w=document.querySelector('input[name="search-text"]');l.addEventListener("submit",async r=>{r.preventDefault();const s=w.value.trim();if(!s){i.warning({message:"Please enter a search query!",position:"topCenter"});return}g(),b();try{const e=await y(s);if(e.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter",icon:""});return}console.log("API data:",e),h(e.hits)}catch{i.error({message:"An error occurred while fetching data.",position:"topCenter",icon:""})}finally{L(),l.reset()}});
//# sourceMappingURL=index.js.map

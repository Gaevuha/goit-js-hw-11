import{a as d,S as f,i}from"./assets/vendor-DEZpR2tN.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();const p="49751566-58037048f2894c5e898374fdb",m="https://pixabay.com/api/";function y(t){const n={key:p,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0};return d.get(m,{params:n}).then(e=>e.data).catch(e=>{throw console.error("Помилка при запиті:",e),e})}const u=document.querySelector(".gallery");let a=null;function h(t){const n=t.map(e=>`
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
    `).join("");u.insertAdjacentHTML("beforeend",n),a?a.refresh():a=new f(".gallery a")}function g(){u.innerHTML=""}function b(){var t;(t=document.querySelector(".loader"))==null||t.classList.add("is-visible")}function L(){var t;(t=document.querySelector(".loader"))==null||t.classList.remove("is-visible")}const c=document.querySelector(".form"),v=document.querySelector('input[name="search-text"]');c.addEventListener("submit",t=>{t.preventDefault();const n=v.value.trim();if(!n){i.warning({message:"Please enter a search query!",position:"topCenter"});return}g(),b(),y(n).then(e=>{if(e.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter",icon:""});return}console.log("API data:",e),h(e.hits)}).catch(e=>{i.error({message:"An error occurred while fetching data.",position:"topCenter",icon:""})}).finally(()=>{L(),c.reset()})});
//# sourceMappingURL=index.js.map

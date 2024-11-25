(()=>{"use strict";const e={async getData(e){const t=await fetch(e);return await t.json()}},t={removeLoader(){setTimeout((()=>{document.querySelector(".page").classList.add("opacity-1"),document.querySelector(".loading").classList.add("opacity-0")}),300),setTimeout((()=>{document.querySelector(".loading").style.display="none"}),500)}},s={getScrollWidth(){let e=document.createElement("div");e.style.overflowY="scroll",e.style.width="50px",e.style.height="50px",document.body.append(e);let t=e.offsetWidth-e.clientWidth;return e.remove(),t},hideScroll(){document.body.classList.contains("hide-scroll")?(document.body.classList.remove("hide-scroll"),document.body.style.marginRight="0px"):(document.body.classList.add("hide-scroll"),document.body.style.marginRight=`${this.getScrollWidth()}px`)}},i={menu:document.querySelector(".burger"),nav:document.querySelector(".nav"),openBurgerMenu(){!i.menu.classList.contains("burger_opened")&&window.innerWidth<=768?(i.menu.classList.add("burger_opened"),i.nav.classList.add("nav_opened"),s.hideScroll()):window.innerWidth<=768&&(i.menu.classList.remove("burger_opened"),i.nav.classList.remove("nav_opened"),s.hideScroll())},link(e){}},n={checkPageAndGoToAnother(e){window.location.href=window.location.pathname.split("/").length>3?"../../index.html":"./index.html"},goToGiftsPage(e){e.target.classList.add("nav__link_active"),i.menu.classList.contains("burger_opened")?(setTimeout((()=>{document.querySelector(".main").classList.add("opacity-0")}),300),setTimeout((function(){window.location.href="./src/pages/gifts.html"}),600)):(document.querySelector(".main").classList.add("opacity-0"),setTimeout((function(){window.location.href="./src/pages/gifts.html"}),300))},checkClick(e){const t=i.menu.classList.contains("burger_opened")?300:0,s=e.target.classList;s.contains("gifts-link")&&n.goToGiftsPage(e),s.contains("home-link")?(i.menu.classList.contains("burger_opened")&&i.openBurgerMenu(),setTimeout((()=>{document.querySelector(".main").classList.add("opacity-0")}),t),setTimeout(n.checkPageAndGoToAnother,t+300)):s.contains("home-link_about")?(setTimeout((()=>{document.querySelector(".main").classList.add("opacity-0")}),t),setTimeout((function(){window.location.href="../../index.html#about"}),t+300)):s.contains("home-link_best")&&(setTimeout((()=>{document.querySelector(".main").classList.add("opacity-0")}),t),setTimeout((function(){window.location.href="../../index.html#best"}),t+300)),s.contains("nav__link")&&i.openBurgerMenu()}},r={sliderSec:document.querySelector(".slider"),sliderBtns:document.querySelector(".slider__btns"),sliderClip:document.querySelector(".slider__clip"),sliderBtnLeft:document.querySelector(".slider-button.left"),sliderBtnRght:document.querySelector(".slider-button.right"),sliderAnimationEnd(){r.sliderBtns.addEventListener("click",r.sliderClickTrash)},sliderResize(){r.sliderClip.style.left="0px",r.sliderBtnLeft.classList.add("slider-button_inactive"),r.sliderBtnRght.classList.remove("slider-button_inactive")},sliderClick(e){if(!e.target.classList.contains("slider__btns")){const t=parseFloat(getComputedStyle(r.sliderSec).width),s=getComputedStyle(r.sliderClip),i=2*parseFloat(s.marginLeft)+parseFloat(s.width),n=Math.floor(i/t),a=Math.trunc((i-t)/n),o=parseFloat(getComputedStyle(r.sliderClip).left);e.target.classList.contains("right")&&(o!==-a*n&&(r.sliderClip.style.left=o-a+"px",r.sliderBtnLeft.classList.remove("slider-button_inactive"),r.sliderBtns.removeEventListener("click",r.sliderClick),r.sliderClip.addEventListener("transitionend",r.sliderAnimationEnd)),o-a==-a*n&&r.sliderBtnRght.classList.add("slider-button_inactive")),e.target.classList.contains("left")&&(0!==o&&(r.sliderClip.style.left=`${o+a}px`,r.sliderBtnRght.classList.remove("slider-button_inactive"),r.sliderBtns.removeEventListener("click",r.sliderClick),r.sliderClip.addEventListener("transitionend",r.sliderAnimationEnd)),"0px"===r.sliderClip.style.left&&r.sliderBtnLeft.classList.add("slider-button_inactive"))}},sliderClickTrash(e){if(!e.target.classList.contains("slider__btns")){const t=parseFloat(getComputedStyle(r.sliderClip).left),s=parseFloat(getComputedStyle(r.sliderSec).width),i=getComputedStyle(r.sliderClip),n=2*parseFloat(i.marginLeft)+parseFloat(i.width),a=s>768?3:6,o=Math.trunc((n-s)/a);e.target.classList.contains("right")&&(t-o==-o*a&&r.sliderBtnRght.classList.add("slider-button_inactive"),t!==-o*a&&(r.sliderClip.style.left=t-o+"px",r.sliderBtnLeft.classList.remove("slider-button_inactive"),r.sliderBtns.removeEventListener("click",r.sliderClickTrash),r.sliderClip.addEventListener("transitionend",r.sliderAnimationEnd))),e.target.classList.contains("left")&&(-parseFloat(r.sliderClip.style.left)===o&&r.sliderBtnLeft.classList.add("slider-button_inactive"),0!==t&&(r.sliderClip.style.left=`${t+o}px`,r.sliderBtnRght.classList.remove("slider-button_inactive"),r.sliderBtns.removeEventListener("click",r.sliderClickTrash),r.sliderClip.addEventListener("transitionend",r.sliderAnimationEnd)))}}},a={getDate(){const e=(new Date).getFullYear()+1,t=new Date(e,0,1,0,0,0).getTime(),s=(new Date).getTime(),i=Math.trunc((t-s)/1e3),n=Math.trunc(i/86400),r=Math.trunc((i-86400*n)/3600),a=Math.trunc((i-86400*n-3600*r)/60);return{days:n,hours:r,minutes:a,seconds:i-86400*n-3600*r-60*a}},startTimer(){setInterval((()=>{Object.entries(this.getDate()).forEach((e=>{document.querySelector(`.${e[0]}-count`).textContent=e[1]}))}),1e3)},getRandomNumber:(e,t)=>Math.floor(Math.random()*(t-e+1))+e,gеtArrayOfRandomNumbers(e,t){const s=[];let i=0;for(;i<e;){let e=this.getRandomNumber(0,t.length-1);s.includes(e)?i-=1:s.push(e),i+=1}return s}},o={showPageUpIco(){const e=document.querySelector(".pageup");window.scrollY>=300?e.classList.remove("invisible"):e.classList.add("invisible")}};class l{constructor({name:e,category:t}){this.name=e,this.category=t}getCategoryInOneWord(){return this.category.substring(this.category.lastIndexOf(" ")+1,this.category.length).toLowerCase()}getImagePath(){return window.location.pathname.split("/").length>3?"../img/gifts/gift-for-":"./src/img/gifts/gift-for-"}getColor(e){return{work:"purple",health:"green",harmony:"pink"}[e]}generateCard(e,t="before"){const s=this.getCategoryInOneWord(),i=document.createElement("div");i.className="gift-card";const n=document.createElement("img");n.className="gift-card__img",n.setAttribute("src",`${this.getImagePath()}${s}.png`),n.setAttribute("alt",`Gift - ${this.name}`),i.append(n);const r=document.createElement("div");r.className="gift-card__descr",i.append(r);const a=document.createElement("h4");a.classList=`gift-card__h4 ${this.getColor(s)}`,a.textContent=`${this.category}`,r.append(a);const o=document.createElement("h4");o.className="gift-card__h3",o.textContent=`${this.name}`,r.append(o),e.append(i)}}const c={parent:document.querySelector(".gifts__cards"),tabs:document.querySelector(".tabs"),data:{},changeSelectedTab(e){document.querySelectorAll(".tab").forEach((e=>e.classList.remove("tab_selected"))),e.target.classList.add("tab_selected")},getTabCategoryArray(e){const t=e.target.innerText.replace("FOR ","").toLowerCase();return c.data.filter((e=>e.category.replace("For ","").toLowerCase()===t))},clickOnTabs(e){if(e.target.classList.contains("tab")){c.changeSelectedTab(e);let t=document.querySelectorAll(".gift-card");t.forEach((e=>{e.classList.add("gift-card_anim")})),setTimeout((()=>{if("ALL"===e.target.innerText)c.generateGiftsCardsBlock(c.data);else{const t=c.getTabCategoryArray(e);c.generateGiftsCardsBlock(t)}t=document.querySelectorAll(".gift-card");let s=100;t.forEach((e=>{e.classList.add("gift-card_anim"),setTimeout((()=>{e.classList.remove("gift-card_anim")}),s),s+=100}))}),300)}},generateGiftsCardsBlock(e){c.parent.innerHTML="",a.gеtArrayOfRandomNumbers(12,e).forEach((t=>{new l(e[t]).generateCard(c.parent)}))}};window.addEventListener("load",(t=>{const s=window.location.pathname.includes("gifts")?"../data/gifts.json":"./src/data/gifts.json";e.getData(s).then((e=>{d(e)}))}));const d=function(e){if(t.removeLoader(),window.addEventListener("click",n.checkClick),i.menu.addEventListener("click",i.openBurgerMenu),"/christmas-shop/src/pages/gifts.html"===window.location.pathname)e&&(c.data=e,c.generateGiftsCardsBlock(e)),window.addEventListener("scroll",o.showPageUpIco),c.tabs.addEventListener("click",c.clickOnTabs);else{if(e){const t=document.querySelector(".best__cards");t.innerHTML="",a.gеtArrayOfRandomNumbers(4,e).forEach((s=>{new l(e[s]).generateCard(t)}))}window.addEventListener("resize",r.sliderResize),r.sliderBtns.addEventListener("click",r.sliderClickTrash),a.startTimer()}};console.log("\n")})();
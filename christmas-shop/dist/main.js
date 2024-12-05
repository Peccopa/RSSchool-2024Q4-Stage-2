(()=>{"use strict";const e={async getData(e){const t=await fetch(e);return await t.json()}},t={removeLoader(){setTimeout((()=>{document.querySelector(".page").classList.add("opacity-1"),document.querySelector(".loading").classList.add("opacity-0")}),300),setTimeout((()=>{document.querySelector(".loading").style.display="none"}),500)}},n={getScrollWidth(){let e=document.createElement("div");e.style.overflowY="scroll",e.style.width="50px",e.style.height="50px",document.body.append(e);let t=e.offsetWidth-e.clientWidth;return e.remove(),t},hideScroll(){document.body.classList.contains("hide-scroll")?(document.body.classList.remove("hide-scroll"),document.body.style.marginRight="0px"):(document.body.classList.add("hide-scroll"),document.body.style.marginRight=`${this.getScrollWidth()}px`)}},s={menu:document.querySelector(".burger"),nav:document.querySelector(".nav"),sliderImages:document.querySelectorAll(".slider__img"),openBurgerMenu(){!s.menu.classList.contains("burger_opened")&&window.innerWidth<=768?(s.menu.classList.add("burger_opened"),s.nav.classList.add("nav_opened"),n.hideScroll(),s.sliderImages&&s.sliderImages.forEach((e=>e.style.zIndex="-1"))):window.innerWidth<=768&&(s.menu.classList.remove("burger_opened"),s.nav.classList.remove("nav_opened"),n.hideScroll(),setTimeout((()=>{s.sliderImages&&s.sliderImages.forEach((e=>e.style.zIndex="auto"))}),150))}};class o{constructor({name:e,category:t}){this.name=e,this.category=t}getCategoryInOneWord(){return this.category.substring(this.category.lastIndexOf(" ")+1,this.category.length).toLowerCase()}getImagePath(){return window.location.pathname.split("/").length>4?"../img/":"./src/img/"}getColor(e){return{work:"purple",health:"green",harmony:"pink"}[e]}generateCard(e,t="before"){const n=this.getCategoryInOneWord(),s=document.createElement("div");s.className="gift-card";const o=document.createElement("div");o.className="gift-card__img",o.style.backgroundImage=`url(${this.getImagePath()}gifts/gift-for-${n}.png)`,s.append(o);const i=document.createElement("div");i.className="gift-card__descr",s.append(i);const a=document.createElement("h4");a.classList=`gift-card__h4 ${this.getColor(n)}`,a.textContent=`${this.category}`,i.append(a);const r=document.createElement("h4");return r.className="gift-card__h3",r.textContent=`${this.name}`,i.append(r),e.append(s),s}}class i extends o{constructor({name:e,category:t,description:n,superpowers:{live:s,create:o,love:i,dream:a}}){super(e,t),this.name=e,this.category=t,this.description=n,this.live=s,this.create=o,this.love=i,this.live=s,this.dream=a}generateModal(e,t="before"){const n=this.generateCard(e,t);n.classList.add("modal");const s=document.createElement("div");s.className="modal__cross",n.append(s);const o=document.createElement("div");o.className="modal__cross-line",s.append(o);const i=document.createElement("div");i.className="modal__cross-line",s.append(i);const a=n.querySelector(".gift-card__descr"),r=document.createElement("p");r.className="modal__descr",r.textContent=this.description,a.append(r);const l=document.createElement("div");l.className="modal__stats",a.append(l);const c=document.createElement("h4");c.classList="stats__header",c.textContent="Adds superpowers to:".toUpperCase(),l.append(c),["live","create","love","dream"].forEach((e=>{const t=document.createElement("div");t.classList="stat",l.append(t);const s=document.createElement("p");s.classList="stat__name",s.textContent=e,t.append(s);const o=document.createElement("div");o.classList="stat__points-block",t.append(o);const i=document.createElement("p");i.classList="stat__points",i.textContent=this[e],o.append(i);const a=document.createElement("div");a.classList="stat__stars-block",o.append(a);let r=parseInt(this[e])/100;for(let e=0;e<5;e+=1){const e=document.createElement("div");e.className="stat__star",r<=0&&(e.style.opacity="0.1"),r-=1,a.append(e)}setTimeout((()=>{n.classList.add("show-modal")}),0)}))}}const a={showPageUpIco(){if(window.location.pathname.split("/").length>4){const e=document.querySelector(".pageup");window.scrollY>=300&&!document.querySelector(".modal")?e.classList.remove("invisible"):e.classList.add("invisible")}}},r={getDate(){const e=new Date,t=new Date(e.getTime()+6e4*e.getTimezoneOffset()),n=t.getFullYear()+1,s=new Date(n,0,1,0,0,0).getTime(),o=new Date(t).getTime(),i=Math.trunc((s-o)/1e3),a=Math.trunc(i/86400),r=Math.trunc((i-86400*a)/3600),l=Math.trunc((i-86400*a-3600*r)/60);return{days:a,hours:r,minutes:l,seconds:i-86400*a-3600*r-60*l}},startTimer(){setInterval((()=>{Object.entries(this.getDate()).forEach((e=>{document.querySelector(`.${e[0]}-count`).textContent=e[1]}))}),1e3)},getRandomNumber:(e,t)=>Math.floor(Math.random()*(t-e+1))+e,gеtArrayOfRandomNumbers(e,t){const n=[];let s=0;for(;s<e;){let e=this.getRandomNumber(0,t.length-1);n.includes(e)?s-=1:n.push(e),s+=1}return n}},l={parent:document.querySelector(".gifts__cards"),tabs:document.querySelector(".tabs"),data:{},changeSelectedTab(e){document.querySelectorAll(".tab").forEach((e=>e.classList.remove("tab_selected"))),e.target.classList.add("tab_selected")},getTabCategoryArray(e){const t=e.target.innerText.replace("FOR ","").toLowerCase();return l.data.filter((e=>e.category.replace("For ","").toLowerCase()===t))},clickOnTabs(e){if(e.target.classList.contains("tab")){l.changeSelectedTab(e);let t=document.querySelectorAll(".gift-card");t.forEach((e=>{e.classList.add("gift-card_anim")})),setTimeout((()=>{if("ALL"===e.target.innerText)l.generateGiftsCardsBlock(36,l.data);else{const t=l.getTabCategoryArray(e);l.generateGiftsCardsBlock(12,t)}t=document.querySelectorAll(".gift-card");let n=100;t.forEach((e=>{e.classList.add("gift-card_anim"),setTimeout((()=>{e.classList.remove("gift-card_anim")}),n),n+=100}))}),300)}},generateGiftsCardsBlock(e,t){l.parent.innerHTML="",r.gеtArrayOfRandomNumbers(e,t).forEach((e=>{new o(t[e]).generateCard(l.parent)}))}},c={checkPageAndGoToAnother(e){window.location.href=window.location.pathname.split("/").length>4?"../../index.html":"./index.html"},goToGiftsPage(e){e.target.classList.add("nav__link_active"),s.menu.classList.contains("burger_opened")?(setTimeout((()=>{document.querySelector(".main").classList.add("opacity-0")}),300),setTimeout((function(){window.location.href="./src/pages/gifts.html"}),600)):(document.querySelector(".main").classList.add("opacity-0"),setTimeout((function(){window.location.href="./src/pages/gifts.html"}),300))},checkClick(e){const t=s.menu.classList.contains("burger_opened")?300:0,o=e.target.classList,r=document.querySelector(".overlay");if("gift-card"===o.value.substring(0,9)&&!r.classList.contains("show-overlay")&&!document.querySelector(".modal")){r.classList.add("show-overlay"),n.hideScroll(),document.addEventListener("keyup",c.escapeListener);const t=e.target.closest(".gift-card").querySelector(".gift-card__h3").textContent,s=l.data.find((e=>e.name===t));new i(s).generateModal(document.querySelector(".overlay")),a.showPageUpIco()}o.contains("overlay")&&document.querySelector(".modal")&&(setTimeout((()=>{document.querySelector(".overlay").classList.remove("show-overlay")}),150),n.hideScroll(),document.removeEventListener("keyup",c.escapeListener),c.removeModalCard()),"modal"===o.value.substring(0,5)&&"modal__descr"!==o.value&&"modal__stats"!==o.value&&document.querySelector(".modal")&&(n.hideScroll(),document.removeEventListener("keyup",c.escapeListener),c.removeModalCard(),setTimeout((()=>{document.querySelector(".overlay").classList.remove("show-overlay")}),150)),o.contains("gifts-link")&&c.goToGiftsPage(e),o.contains("home-link")?(s.menu.classList.contains("burger_opened")&&s.openBurgerMenu(),setTimeout((()=>{document.querySelector(".main").classList.add("opacity-0")}),t),setTimeout(c.checkPageAndGoToAnother,t+300)):o.contains("home-link_about")?(document.querySelector(".nav__link_active").classList.remove("nav__link_active"),e.target.classList.add("nav__link_active"),setTimeout((()=>{document.querySelector(".main").classList.add("opacity-0")}),t),setTimeout((function(){window.location.href="../../index.html#about"}),t+300)):o.contains("home-link_best")&&(document.querySelector(".nav__link_active").classList.remove("nav__link_active"),e.target.classList.add("nav__link_active"),setTimeout((()=>{document.querySelector(".main").classList.add("opacity-0")}),t),setTimeout((function(){window.location.href="../../index.html#best"}),t+300)),o.contains("nav__link")&&s.openBurgerMenu()},escapeListener(e){"Escape"===e.key&&(setTimeout((()=>{document.querySelector(".overlay").classList.remove("show-overlay")}),150),n.hideScroll(),document.removeEventListener("keyup",c.escapeListener),c.removeModalCard())},removeModalCard(){const e=document.querySelector(".modal");setTimeout((()=>{e.classList.add("hide-modal")}),0),setTimeout((()=>{e.remove(),a.showPageUpIco()}),300)}},d={sliderSec:document.querySelector(".slider"),sliderBtns:document.querySelector(".slider__btns"),sliderClip:document.querySelector(".slider__clip"),sliderBtnLeft:document.querySelector(".slider-button.left"),sliderBtnRght:document.querySelector(".slider-button.right"),sliderAnimationEnd(){d.sliderBtns.addEventListener("click",d.sliderClickTrash)},sliderResize(){d.sliderClip.style.left="0px",d.sliderBtnLeft.classList.add("slider-button_inactive"),d.sliderBtnRght.classList.remove("slider-button_inactive")},sliderClick(e){if(!e.target.classList.contains("slider__btns")){const t=parseFloat(getComputedStyle(d.sliderSec).width),n=getComputedStyle(d.sliderClip),s=2*parseFloat(n.marginLeft)+parseFloat(n.width),o=Math.floor(s/t),i=Math.trunc((s-t)/o),a=parseFloat(getComputedStyle(d.sliderClip).left);e.target.classList.contains("right")&&(a!==-i*o&&(d.sliderClip.style.left=a-i+"px",d.sliderBtnLeft.classList.remove("slider-button_inactive"),d.sliderBtns.removeEventListener("click",d.sliderClick),d.sliderClip.addEventListener("transitionend",d.sliderAnimationEnd)),a-i==-i*o&&d.sliderBtnRght.classList.add("slider-button_inactive")),e.target.classList.contains("left")&&(0!==a&&(d.sliderClip.style.left=`${a+i}px`,d.sliderBtnRght.classList.remove("slider-button_inactive"),d.sliderBtns.removeEventListener("click",d.sliderClick),d.sliderClip.addEventListener("transitionend",d.sliderAnimationEnd)),"0px"===d.sliderClip.style.left&&d.sliderBtnLeft.classList.add("slider-button_inactive"))}},sliderClickTrash(e){if(!e.target.classList.contains("slider__btns")){const t=parseFloat(getComputedStyle(d.sliderClip).left),n=parseFloat(getComputedStyle(d.sliderSec).width),s=getComputedStyle(d.sliderClip),o=2*parseFloat(s.marginLeft)+parseFloat(s.width),i=n>768?3:6,a=Math.trunc((o-n)/i);e.target.classList.contains("right")&&(t-a==-a*i&&d.sliderBtnRght.classList.add("slider-button_inactive"),t!==-a*i&&(d.sliderClip.style.left=t-a+"px",d.sliderBtnLeft.classList.remove("slider-button_inactive"),d.sliderBtns.removeEventListener("click",d.sliderClickTrash),d.sliderClip.addEventListener("transitionend",d.sliderAnimationEnd))),e.target.classList.contains("left")&&(-parseFloat(d.sliderClip.style.left)===a&&d.sliderBtnLeft.classList.add("slider-button_inactive"),0!==t&&(d.sliderClip.style.left=`${t+a}px`,d.sliderBtnRght.classList.remove("slider-button_inactive"),d.sliderBtns.removeEventListener("click",d.sliderClickTrash),d.sliderClip.addEventListener("transitionend",d.sliderAnimationEnd)))}}};window.addEventListener("load",(t=>{const n=window.location.pathname.includes("gifts")?"../data/gifts.json":"./src/data/gifts.json";e.getData(n).then((e=>{h(e)}))}));const h=function(e){if(l.data=e,t.removeLoader(),window.addEventListener("click",c.checkClick),s.menu.addEventListener("click",s.openBurgerMenu),window.location.pathname.split("/").length>4)e&&l.generateGiftsCardsBlock(36,e),window.addEventListener("scroll",a.showPageUpIco),l.tabs.addEventListener("click",l.clickOnTabs),a.showPageUpIco();else{if(e){const t=document.querySelector(".best__cards");t.innerHTML="",r.gеtArrayOfRandomNumbers(4,e).forEach((n=>{new o(e[n]).generateCard(t)}))}window.addEventListener("resize",d.sliderResize),d.sliderBtns.addEventListener("click",d.sliderClickTrash),r.startTimer()}};console.log("\nCrossCheck Criteria (90 points)\n\nImplementation of the burger menu on both pages: +22\n  At a page width of 768px and less, the navigation panel hides, and the burger icon appears: +2\n  When clicking the burger icon, the burger menu slides out from the right, and the burger icon smoothly transforms into a cross: +2\n  The burger menu occupies the entire available screen area below the <header> block: +2\n  When clicking the cross, the burger menu smoothly hides, moving to the right of the screen, and the cross smoothly transforms into a burger icon: +2\n  The burger icon is created using HTML and CSS without the use of images/svg: +2\n  Links in the burger menu work, providing smooth scrolling to anchor points: +2\n  When clicking on any link (interactive or non-interactive) in the menu, the burger menu hides, and the cross transforms into a burger icon: +2\n  When clicking on any link (interactive or non-interactive) in the menu, the burger menu smoothly hides to the right, and the cross smoothly transforms into a burger icon if a user stays on the same page: +2\n  The placement and sizes of elements in the burger menu correspond to the layout (horizontal and vertical centering of menu items): +2\n  The page behind the open menu does not scroll: +2\n  When the page width increases to more than 768px, the burger icon and the open burger menu hide, and the navigation panel appears: +2\n\nImplementation of the Slider on the home page: +18\n  Scrolling the slider in the corresponding direction is implemented by pressing left arrow button and right arrow button: +2\n  The left arrow button is inactive at the far left position of the slider: +2\n  The right arrow button is inactive at the far right position of the slider: +2\n  Scrolling the slider is accompanied by the carousel-like animation (the method of animation execution is not evaluated): +4\n  The slider is fully scrolled with 3 presses of the arrow button in one direction for screen widths more than 768px, and with 6 presses of the arrow button in one direction for screen widths of 768px and less: +4\n  When the screen width changes, the slider returns to its initial position, and the slider can be fully scrolled with the correct number of the relevant arrow button clicks (it works without reloading the page): +4\n\nImplementation of the Timer on the home page: +8\n  The timer shows the correct value of the remaining days, hours, minutes, and seconds until the New Year in UTC+0: +2\n  Leading zeros are not displayed for single-digit numbers: +2\n  The timer updates every second, displaying the current remaining time with the labels days, hours, minutes, seconds (the labels must not change): +4\n\nWhen both opening or refreshing the page, 4 random cards are displayed in the block Best Gifts on the home page: +4\n\nImplementation of the Category switching for products on the gifts page: +8\n  The ALL category is active and all 36 gifts are displayed when both opening or reloading the gifts page. The order of sorting gifts does not matter: +2\n  When switching categories, the gifts of the selected category are displayed. The order of sorting gifts does not matter: +4\n  Only the selected category tab is active: +2\n\nImplementation of the Scroll-to-Top button on the gifts page: +12\n  The button can only appear at a screen width of 768px and less: +2\n  At the top of the page, the button is not displayed: +4\n  The button appears after scrolling the page down by 300px: +4\n  When the button is clicked, the page scrolls to the top: +2\n\nImplementation of the Modal for selected gift on both pages: +18\n  The Modal with the description of a specific gift opens when clicking on any part of a card of gift: +4\n  The description and superpowers in the Modal corresponds to the selected gift: +4\n  The part of the page outside the Modal is darkened: +2\n  When the Modal is open, the vertical scroll of the page becomes inactive; when closed, it becomes active again: +4\n  Clicking on the area around the Modal and Close button closes it: +2\n  The Modal is centered on both axes, sizes of modal elements and their layout match the design: +2\n")})();
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[92],{2800:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/[id]",function(){return t(5559)}])},8652:function(e,s,t){"use strict";var i=t(2676);t(5320),t(5271),s.Z=e=>(0,i.jsx)("section",{className:"page-title",style:{backgroundImage:"url(".concat(e.bg||"images/background/liberty.png",")"),backgroundSize:"cover",backgroundPosition:"top center"},children:(0,i.jsx)("div",{className:"auto-container",children:(0,i.jsx)("div",{className:"title-outer",children:(0,i.jsx)("h1",{className:"title",children:e.pageName})})})})},9127:function(e,s,t){"use strict";var i=t(2676);t(5320);var a=t(5271),c=t(6142),l=t(2014);let n={location:"Location",units:"Units",status:"Status",return:"Return",address:"Address"};s.Z=e=>{let{children:s,project:t,projectId:r}=e;console.log("ssss",s);let[d,o]=(0,a.useState)(null),[u,m]=(0,a.useState)(1),x=e=>{m(e)};return t&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("section",{className:"product-details",children:(0,i.jsx)("div",{className:"container pb-70",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-lg-6 col-xl-6",children:(0,i.jsx)("div",{className:"bxslider",children:(0,i.jsxs)("div",{className:"slider-content",children:[(0,i.jsx)(c.tq,{spaceBetween:10,pagination:{clickable:!0},thumbs:{swiper:d&&!d.destroyed?d:null},modules:[l.Rv,l.W_,l.pt,l.o3],loop:!0,autoplay:{delay:3500,disableOnInteraction:!1},className:"slider-pager",children:t.images.map(e=>(0,i.jsx)(c.o5,{children:(0,i.jsx)("div",{className:"image-box mx-0",children:(0,i.jsx)("img",{src:e,alt:t.title})})},e))}),(0,i.jsx)(c.tq,{onSwiper:o,spaceBetween:10,slidesPerView:5,freeMode:!0,watchSlidesProgress:!0,modules:[l.Rv,l.W_,l.o3],className:"slider-pager",children:t.images.map(e=>(0,i.jsx)(c.o5,{className:"product-thumb wide-100",children:(0,i.jsx)("figure",{className:"image",children:(0,i.jsx)("img",{src:e,alt:t.title})})},e))})]})})}),(0,i.jsxs)("div",{className:"col-lg-6 col-xl-6 product-info",children:[(0,i.jsx)("div",{className:"product-details__top",children:(0,i.jsx)("h3",{className:"product-details__title mt-3 mt-lg-0",children:t.title})}),(0,i.jsx)("div",{className:"product-details__content",children:(0,i.jsx)("ul",{className:"list-unstyled mt-4",children:Object.entries(n).map(e=>{let[s,a]=e;return t[s]&&(0,i.jsxs)("li",{className:"d-flex align-items-center",children:[(0,i.jsxs)("span",{className:"strong",children:[a,": \xa0 "]}),(0,i.jsx)("strong",{className:"text fw-bold",children:t[s]||"-"})]},s)})})})]})]})})}),s,!s&&(0,i.jsx)("section",{className:"product-description",children:(0,i.jsx)("div",{className:"container pt-0 pb-90",children:(0,i.jsx)("div",{className:"product-discription",children:(0,i.jsxs)("div",{className:"tabs-box",children:[(0,i.jsx)("div",{className:"tab-btn-box text-center",children:(0,i.jsx)("ul",{className:"tab-btns tab-buttons clearfix",children:(0,i.jsx)("li",{className:1===u?"tab-btn active-btn":"tab-btn",onClick:()=>x(1),"data-tab":"#tab1",children:"Description"})})}),(0,i.jsx)("div",{className:"tabs-content",children:(0,i.jsx)("div",{className:1===u?"tab active-tab":"tab",id:"tab1",children:(0,i.jsxs)("div",{className:"text",children:[(0,i.jsx)("h3",{className:"product-description__title",children:"Description"}),(0,i.jsx)("p",{className:"product-description__text1",children:t.description})]})})})]})})})})]})}},5559:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return o}});var i=t(2676),a=t(976),c=t(8652),l=t(9127),n=t(1610),r=t(5778),d=t(5271);function o(){let e=(0,r.useRouter)(),[s,t]=(0,d.useState)(null);return(0,d.useEffect)(()=>{t(n.Fw.find(s=>s.id===+e.query.id))},[e.query.id]),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(a.Z,{headerStyle:1,footerStyle:1,children:s&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.Z,{bg:s.images[0],pageName:null==s?void 0:s.title}),(0,i.jsx)(l.Z,{project:s,projectId:+s.id})]})})})}},5778:function(e,s,t){e.exports=t(9313)}},function(e){e.O(0,[453,441,976,888,774,179],function(){return e(e.s=2800)}),_N_E=e.O()}]);
"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[517],{2988:function(e,s,n){n.d(s,{Z:function(){return l}});var t=n(2676),a=n(5271);function i(e){let{end:s,duration:n,round:i=!0}=e,[l,r]=(0,a.useState)(0),o=(0,a.useRef)(null),c=s/n;(0,a.useEffect)(()=>{let e=new IntersectionObserver(s=>{let[n]=s;n.isIntersecting&&(d(),e.disconnect())},{threshold:0});return o.current&&e.observe(o.current),()=>{e.disconnect()}},[]),(0,a.useEffect)(()=>{let e=setInterval(()=>{r(n=>{let t=n+c;return t>=s?(clearInterval(e),s):t})},1e3/n);return()=>{clearInterval(e)}},[s,c]);let d=()=>{r(0)};return(0,t.jsx)("span",{ref:o,children:(0,t.jsx)("span",{children:i?Math.round(l):l.toFixed(2)})})}function l(e){let{end:s,round:n}=e,[l,r]=(0,a.useState)(!1),o=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let e=new IntersectionObserver(s=>{let[n]=s;n.isIntersecting&&(r(!0),e.unobserve(n.target))},{root:null,rootMargin:"0px",threshold:.5});return o.current&&e.observe(o.current),()=>{o.current&&e.unobserve(o.current)}},[]),(0,t.jsx)("span",{ref:o,className:"count-text",children:l&&(0,t.jsx)(i,{end:s,duration:20,round:n})})}},8946:function(e,s,n){var t=n(2676),a=n(5320),i=n.n(a),l=n(9976),r=n.n(l);s.Z=e=>{let{project:s}=e;return(0,t.jsx)(t.Fragment,{children:s&&(0,t.jsx)("div",{className:"project-block",children:(0,t.jsxs)("div",{className:"inner-box",children:[(0,t.jsx)("div",{className:"image-box",children:(0,t.jsx)("figure",{className:"image",children:(0,t.jsx)(i(),{href:"projects/".concat(s.id),children:(0,t.jsx)(r(),{src:null==s?void 0:s.images[0],alt:s.title,width:480,height:240})})})}),(0,t.jsxs)("div",{className:"content-box",children:[(0,t.jsx)(i(),{href:"projects/".concat(s.id),className:"theme-btn read-more",children:(0,t.jsx)("i",{className:"far fa-arrow-up"})}),(0,t.jsx)("h4",{className:"title",children:s.title}),(0,t.jsx)("span",{className:"cat",children:s.location})]}),(0,t.jsx)("div",{className:"overlay-1"})]})})})}},8543:function(e,s,n){var t=n(2676);n(5320);var a=n(6142),i=n(2014);n(4899),n(7457),n(4045),n(9976);var l=n(1610),r=n(8946);let o={modules:[i.pt,i.tl,i.W_],slidesPerView:4,spaceBetween:30,navigation:!1,autoplay:{delay:3500,disableOnInteraction:!1},loop:!0,breakpoints:{320:{slidesPerView:1},575:{slidesPerView:2},767:{slidesPerView:2},991:{slidesPerView:3},1199:{slidesPerView:3}}};s.Z=()=>(0,t.jsxs)("section",{className:"project-section pb-0",id:"projects",children:[(0,t.jsx)("div",{className:"bg bg-shape"}),(0,t.jsx)("div",{className:"auto-container",children:(0,t.jsx)("div",{className:"sec-title light text-center",children:(0,t.jsx)("h2",{className:"words-slide-up text-split",children:"Our Projects"})})}),(0,t.jsx)("div",{className:"carousel-outer",children:(0,t.jsx)(a.tq,{...o,className:"projects-carousel-two",children:l.Fw.map(e=>(0,t.jsx)(a.o5,{children:(0,t.jsx)(r.Z,{project:e})},e.id))})})]})},164:function(e,s,n){n.d(s,{Z:function(){return o}});var t=n(2676);n(5271);var a=n(9976),i=n.n(a),l=function(e){let{member:s}=e;return s&&(0,t.jsxs)("div",{className:"member-card d-flex flex-column",children:[(0,t.jsxs)("div",{className:"member-card-photo position-relative",children:[(0,t.jsx)(i(),{src:null==s?void 0:s.img,width:512,height:768}),(0,t.jsx)("div",{className:"member-card-photo--hover position-absolute h-100 w-100 top-0 d-flex flex-column align-items-center justify-content-end"})]}),(0,t.jsxs)("div",{className:"d-flex flex-column align-items-center pt-4",children:[(0,t.jsx)("h3",{className:"mb-0",children:null==s?void 0:s.name}),(0,t.jsx)("p",{children:null==s?void 0:s.designation})]})]})},r=n(1610),o=function(){return(0,t.jsx)("section",{className:"team-section pb-0",id:"team",children:(0,t.jsxs)("div",{className:"auto-container",children:[(0,t.jsxs)("div",{className:"sec-title text-center mb-0 mt-xl-30",children:[(0,t.jsx)("span",{className:"sub-title",children:"Our Team"}),(0,t.jsx)("h2",{className:"words-slide-up text-split",children:"Experience Team Members"})]}),(0,t.jsx)("div",{className:"row",children:r.lU.map(e=>(0,t.jsx)("div",{className:"col-12 col-md-6 col-lg-4",children:(0,t.jsx)(l,{member:e},e.id)}))})]})})}},5335:function(e,s,n){n.d(s,{Z:function(){return b}});var t=n(2676);n(4899),n(7457),n(4045);var a=n(5320),i=n.n(a),l=n(9976),r=n.n(l),o=n(5271),c=n(2988),d=n(8543),m=n(1610),h=()=>(0,t.jsxs)("section",{className:"offer-section",id:"story",children:[(0,t.jsx)("div",{className:"bg bg-image",style:{backgroundColor:"rgba(var(--theme-color2-rgb), 1)",backgroundImage:"url('/images/background/bg-pattern.png')",backgroundSize:"cover",backgroundBlendMode:"multiply"}}),(0,t.jsx)("div",{className:"auto-container",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"content-column col-lg-6 col-md-12",children:(0,t.jsxs)("div",{className:"inner-column",children:[(0,t.jsxs)("div",{className:"sec-title light",children:[(0,t.jsx)("h2",{children:"Our Story and Success"}),(0,t.jsx)("div",{className:"text",children:"DHANANI EB-5 International is a Texas-based Regional Center with over 14 years of profitable and zero losses experience in real estate developing and investing. We are registered in Texas, Tennessee, Georgia, Arkansas, and Florida. Join us as we continue to create a foundation and future for our global investors."})]}),(0,t.jsx)("ul",{className:"list-style-two ",children:(0,t.jsxs)("li",{className:"d-flex flex-column text-start justify-content-start",children:[(0,t.jsx)("h3",{className:"text-light",children:"Mission Statement"}),(0,t.jsx)("p",{className:"text-white",children:"At DHANANI EB-5 International, we empower global investors to secure US Permanent Residency through carefully curated, strategic, and profitable EB-5 projects. We are committed to building a secure and prosperous future for our partners - one investment at a time."})]})})]})}),(0,t.jsx)("div",{className:"image-column col-lg-6 col-md-12 col-sm-12",children:(0,t.jsx)("div",{className:"inner-column",children:(0,t.jsx)("div",{className:"image-box",children:(0,t.jsx)("figure",{className:"image",children:(0,t.jsx)("img",{src:"images/projects/building.png",alt:""})})})})})]})}),(0,t.jsx)("div",{className:"auto-container mt-80",children:(0,t.jsx)("div",{className:"fact-counter",children:(0,t.jsx)("div",{className:"row",children:m.dU.map(e=>(0,t.jsx)("div",{className:"counter-block-two col-lg-4 col-sm-6 wow fadeInUp",children:(0,t.jsx)("div",{className:"inner-box bg-white",children:(0,t.jsxs)("div",{className:"content-box",children:[(0,t.jsx)("i",{className:"icon ".concat(e.icon),children:" "}),(0,t.jsx)("div",{className:"count-box",children:(0,t.jsxs)("span",{className:"count-text d-flex justify-content-center",children:[(0,t.jsx)("span",{children:e.before}),(0,t.jsx)(c.Z,{end:+e.target,round:5!==e.id}),(0,t.jsx)("span",{children:e.after})]})}),(0,t.jsx)("div",{className:"counter-title",children:e.title})]})})},e.id))})})})]});let u=[{id:1,title:"Dhanani Private Equity",img:"/images/services/equity_1.jpg",link:"https://dhananipeg.com/"},{id:2,title:"DPEG Energy",img:"/images/services/energy.jpg",link:"https://dhananipeg.com/dpeg-energy/"},{id:3,title:"DPEG Insurance",img:"/images/services/insurance_1.jpg",link:"https://mckinneyandco.com/"},{id:4,title:"DPEG Construction",img:"/images/services/construction.jpg",link:"https://dhananipeg.com/construction/"}];var p=function(){return(0,t.jsx)("section",{children:(0,t.jsxs)("div",{className:"container text-center",id:"services",children:[(0,t.jsxs)("div",{className:"sec-title",children:[(0,t.jsx)("h2",{className:"scrub-each-word text-split",children:"What Other Services Do We Offer?"}),(0,t.jsx)("p",{children:"Business is about creating value. We offer an ecosystem of real estate services."})]}),(0,t.jsx)("div",{className:"row",children:u.map(e=>(0,t.jsx)("div",{className:"col-12 col-md-6 mb-3",children:(0,t.jsx)("div",{style:{background:"url(".concat(e.img,") rgba(0,0,0,0.5)"),backgroundBlendMode:"multiply",backgroundSize:"cover",backgroundRepeat:"no-repeat"},className:"py-5 w-100",children:(0,t.jsx)(i(),{href:e.link,target:"_blank",children:(0,t.jsx)("h3",{className:"my-5 text-white title",children:e.title})})})},e.id))})]})})};let g=[{id:1,link:"https://www.bizjournals.com/houston/news/2024/09/20/dhanani-buys-first-colony-commons-sugar-land.html",img:"https://dhananipeg.com/wp-content/uploads/2024/09/HBJ-article.png",title:"Dhanani Private Equity Group buys First Colony Commons, Sugar Land",date:"Sep. 20, 2024"},{id:2,link:"https://www.inc.com/inc5000/2024",img:"https://dhananipeg.com/wp-content/uploads/2024/09/INC-5000.png",title:"The Fastest-Growing Private Companies in America – 2024",date:"Sep. 23, 2024"},{id:3,link:"https://www.bizjournals.com/houston/c/meet-hbj-2024-most-admired-ceo-awards-honorees/27121/2024-most-admired-ceo-honoree-nadyrshah-dhanani-of-dhanani-private-equity-group.html",img:"https://dhananipeg.com/wp-content/uploads/2024/09/Most-Admired-Ceo-2024.png",title:"Meet Most Admired CEO, Nick Dhanani – 2024",date:"Aug. 30, 2024"},{id:4,link:"https://rejournals.com/realestateawards/reawards2024-tx/",img:"https://dhananipeg.com/wp-content/uploads/2024/09/RedNews-2024.png",title:"REjournals Commercial Real Estate Awards 2024",date:"Aug. 15, 2024"},{id:5,link:"https://traded.co/deals/texas/retail/sale/deal-268252",img:"https://dhananipeg.com/wp-content/uploads/2024/09/TradedTexas.jpg",title:"DhananiPEG Acquires 379829 SF Retail Power Center in Sugar Land for $31 Million",date:"Sep. 10, 2024"},{id:6,link:"https://www.bizjournals.com/houston/subscriber-only/2024/04/12/2024-largest-houston-area-venture-capital-and-private.html",img:"https://dhananipeg.com/wp-content/uploads/2024/04/Screenshot-2024-04-16-085342-1.png",title:"2024 Largest Houston-area venture capital and private equity firms",date:"Apr. 12, 2024"},{id:7,link:"https://issuu.com/rejournals/docs/rednews_texas_icons_2024_issue?fr=sY2JmYjY3NDQ3NzQ",img:"https://dhananipeg.com/wp-content/uploads/2024/04/REDNews_Texas-ICONS-Cover-2024-scaled-1.jpg",title:"2023 Texas Icons\xa0\xa0",date:"Mar. 19, 2024"},{id:8,link:"https://www.bizjournals.com/houston/news/2023/06/28/2023-most-admired-ceos-honorees.html",img:"https://dhananipeg.com/wp-content/uploads/2024/01/DPG_500X500_16.png",title:"Houston Business Journal names 2023 Women Who Mean Business honorees",date:"Aug. 17, 2023"},{id:9,link:"https://dhananipeg.com/wp-content/uploads/2023/05/Nick-Dhanani-6.pdf",img:"https://dhananipeg.com/wp-content/uploads/2024/01/DPG_500X500_5.png",title:"HBJ unveils the 2023 Most Admired CEO Awards honorees",date:"Jun. 28, 2023"},{id:10,link:"https://www.bizjournals.com/houston/news/2023/05/25/dhanani-private-equity-group-montgomery-county.html",img:"https://dhananipeg.com/wp-content/uploads/2024/01/DPG_500X500_12.png",title:"DPEG’s CEO, Nick Dhanani’s Feature on the Journey so Far and Future Outlook",date:""},{id:11,link:"https://www.bizjournals.com/houston/news/2023/05/25/dhanani-private-equity-group-montgomery-county.html",img:"https://dhananipeg.com/wp-content/uploads/2024/01/DPG_500X500_12.png",title:"Dhanani Private Equity Group acquires shopping center, land for apartment complex in Montgomery County",date:""},{id:12,link:"https://www.bizjournals.com/houston/news/2023/03/29/investment-development-ventures-anserra-industrial.html",img:"https://dhananipeg.com/wp-content/uploads/2024/01/DPG_500X500_3.png",title:"HBJ reveals honorees for inaugural Family-Owned Business Awards",date:"Apr. 27, 2023"},{id:13,link:"https://communityimpact.com/houston/spring-klein/development/2023/04/19/residential-commercial-growth-booming-along-fm-2920-corridor/",img:"https://dhananipeg.com/wp-content/uploads/2024/01/DPG_500X500_4.png",title:"Residential, commercial growth booming along FM 2920 corridor",date:"Apr. 20, 2023"},{id:14,link:"https://therealdeal.com/texas/houston/2023/03/30/dhanani-dives-deep-into-multifamily/",img:"https://dhananipeg.com/wp-content/uploads/2024/01/DPG_500X500_9.png",title:"Dhanani dives deep into multifamily",date:"Mar. 30, 2023"},{id:15,link:"https://www.bizjournals.com/houston/news/2023/03/29/investment-development-ventures-anserra-industrial.html",img:"https://dhananipeg.com/wp-content/uploads/2024/01/DPG_500X500_3.png",title:"Investment & Development Ventures building 716K-SF industrial park in Katy",date:"Mar. 29, 2023"},{id:16,link:"https://www.bizjournals.com/houston/news/2023/03/27/dhanani-private-equity-group-apartment-development.html",img:"https://dhananipeg.com/wp-content/uploads/2024/01/DPG_500X500_15.png",title:"Dhanani Private Equity Group to open multiple apartment complexes, build-to-rent community",date:""},{id:17,link:"https://www.houstonchronicle.com/business/real-estate/article/hc122922office-17683697.php",img:"https://dhananipeg.com/wp-content/uploads/2024/01/DPG_500X500_2.png",title:"Investor buys Galleria mixed-use complex in a bet on Houston’s office recovery",date:"Dec. 30, 2022"},{id:18,link:"https://www.fortbendfocus.com/dhanani-private-equity-group-hits-billion-dollar-mark-and-takes-on-fort-bend-county/",img:"https://dhananipeg.com/wp-content/uploads/2024/01/DPG_500X500_1.png",title:"Dhanani Private Equity Group Hits Billion Dollar Mark and Takes on Fort Bend County",date:"Dec. 29, 2022"},{id:19,link:"https://www.bizjournals.com/houston/news/2022/12/12/dhanani-equity-group-mixed-use-fluor-sugar-land.html",img:"https://dhananipeg.com/wp-content/uploads/2024/01/DPG_500X500_14.png",title:"Dhanani Private Equity Group buys former Fluor property in Sugar Land for mixed-use development",date:"Dec. 12, 2022"},{id:20,link:"https://www.houstonchronicle.com/business/real-estate/article/Dhanani-buys-Fluor-Land-Sugar-Land-mixed-use-17641294.php",img:"https://dhananipeg.com/wp-content/uploads/2024/01/DPG_500X500_13.png",title:"Mixed-use development planned for former Fluor site next to Smart Financial Centre in Sugar Land",date:"Dec. 9, 2022"},{id:21,link:"https://dhananipeg.com/wp-content/uploads/2022/05/Dhanani-Private-Equity-Group-1.pdf",img:"https://dhananipeg.com/wp-content/uploads/2024/01/DPG_500X500_6.png",title:"Nick Dhanani: The journey from a cashier to a successful leader of Dhanani Private Equity",date:"2022"},{id:22,link:"https://abc13.com/dhanani-private-equity-group-wealth-investment-investing-houston/11320671/",img:"https://dhananipeg.com/wp-content/uploads/2024/01/DPG_500X500_10.png",title:"Dhanani Private Equity Group Talks About Growth as Record 2021 Year Winds Down",date:"Dec. 16, 2021"},{id:23,link:"https://commercialobserver.com/2021/12/argentic-real-estate-finance-dhanani-private-equity-group-fountains-on-the-lake-houston-retail-amc-main-event-entertainment-bed-bath-and-beyond-hobby-lobby-cmbs/",img:"https://dhananipeg.com/wp-content/uploads/2024/01/DPG_500X500_11.png",title:"Argentic Lends $59M Toward Buy of Massive Retail Center Near Houston",date:"Dec. 14, 2021"},{id:24,link:"https://abc13.com/investing-dhanani-equity-private-group/11198880/",img:"https://dhananipeg.com/wp-content/uploads/2024/01/DPG_500X500_8.png",title:"Dhanani Private Equity Group wants to help you invest wisely!",date:"Nov. 13, 2021"},{id:25,link:"https://abc13.com/dhanani-private-equity-group-finances-investing/11121384/",img:"https://dhananipeg.com/wp-content/uploads/2024/01/DPG_500X500_7.png",title:"Dhanani Private Equity Group wants to educate you on investing!",date:"Oct. 20, 2021"},{id:26,link:"https://abc13.com/dhanani-private-equity-group-group-revenue-houston-wealth/11035009/",img:"https://dhananipeg.com/wp-content/uploads/2024/01/DPG_500X500_15.png",title:"Dhanani Private Equity Group talks Importance of Building Wealth",date:"Sep. 29, 2021"}];function x(){return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("section",{className:"services-section-two",id:"media",children:[(0,t.jsx)("div",{className:"bg bg-image",style:{backgroundImage:"url(/images/background/bg3.jpg)"}}),(0,t.jsxs)("div",{className:"auto-container",children:[(0,t.jsxs)("div",{className:"sec-title text-center",children:[" ",(0,t.jsx)("span",{className:"sub-title",children:"GET TO KNOW US"}),(0,t.jsx)("h2",{className:"words-slide-up text-split",children:"In The Media"})]}),(0,t.jsx)("div",{className:"row",children:g.map(e=>(0,t.jsx)("div",{className:"col-12 col-md-6 col-lg-3",children:(0,t.jsx)("div",{className:"service-block-two",children:(0,t.jsxs)("div",{className:"inner-box",children:[(0,t.jsx)("div",{className:"image-box",children:(0,t.jsx)("figure",{className:"image",children:(0,t.jsx)(i(),{href:e.link,target:"_blank",children:(0,t.jsx)(r(),{width:"768",height:"768",style:{display:"inline-block",objectFit:"contain",width:"100%",height:"240px"},src:e.img,alt:e.title})})})}),(0,t.jsxs)("div",{className:"content-box",children:[(0,t.jsx)("div",{className:"inner py-2 w-100 d-block",style:{minHeight:"150px"},children:(0,t.jsx)("h5",{className:"title",children:e.title})}),(0,t.jsx)(i(),{target:"_blank",href:e.link,className:"theme-btn btn-style-one dark-bg",children:(0,t.jsxs)("span",{className:"btn-title",children:["Learn more ",(0,t.jsx)("i",{className:"fa fa-arrow-right"})]})})]})]})})},e.id))})]})]})})}var v=n(164);let j=["/images/media/1.png","/images/media/2.png","/images/media/3.png","/images/media/4.png","/images/media/5.png"];function w(){return(0,t.jsx)("section",{className:"py-5",children:(0,t.jsxs)("div",{className:"auto-container text-center",children:[(0,t.jsx)("div",{className:"sec-title",children:(0,t.jsx)("h2",{className:"words-slide-up text-split",children:"As Seen In "})}),(0,t.jsxs)("div",{className:"marquee ",children:[(0,t.jsx)("div",{className:"marquee-group d-flex justify-content-evenly gap-5",children:j.map(e=>(0,t.jsx)(r(),{src:e,width:100,height:150},e))}),(0,t.jsx)("div",{"aria-hidden":"true",className:"marquee-group d-flex justify-content-evenly gap-5",children:j.map(e=>(0,t.jsx)(r(),{src:e,width:100,height:150},e))})]})]})})}let N=["/images/media/c1.png","/images/media/c2.png","/images/media/c3.png","/images/media/c4.png"];function f(){return(0,t.jsx)("section",{className:"py-5",children:(0,t.jsxs)("div",{className:"auto-container text-center",children:[(0,t.jsx)("div",{className:"sec-title",children:(0,t.jsx)("h2",{className:"words-slide-up text-split",children:"DPEG Certificates"})}),(0,t.jsx)("div",{className:"row",children:N.map(e=>(0,t.jsx)("div",{className:"col-lg-3 col-md-6 col-sm-6 col-12 mb-3 d-flex align-items-center",children:(0,t.jsx)(r(),{src:e,width:240,height:240},e)}))})]})})}var b=()=>{let[e,s]=(0,o.useState)(!1);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("section",{className:"offer-section py-5",children:(0,t.jsx)("div",{className:"auto-container",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"content-column col-lg-8 col-md-8 order-2 order-md-1",children:(0,t.jsx)("div",{className:"inner-column",children:(0,t.jsxs)("div",{className:"sec-title light",children:[(0,t.jsx)("span",{className:"sub-title text-gray",children:"Dhanani EB-5 International"}),(0,t.jsx)("h2",{className:"text-black",children:"CEO Nick Dhanani’s Vision"}),(0,t.jsx)("div",{className:"text text-gray",children:"Nick Dhanani, Founder and CEO of Dhanani Private Equity Group (DPEG), always says that this company was formed accidentally. Nick’s story came from humble beginnings when he and his family immigrated to the United States in the early 1980s. After landing in Houston, TX, Nick started his career working the night shift as a cashier at a local gas station. Nick always had an ambitious vision and was determined to grow, so he spent his initial years aggressively saving money in order to buy his first business, which just so happened to be the c-store that he was employed at. With the proceeds from his initial business ventures, Nick began investing in prime real estate across the greater Houston area, quickly realizing how beneficial it was to own real assets instead of solely operating retail as a lessee. Coming from a close-knit family, Nick’s sister was naturally his first investor and from there, friends, family, and co-workers all joined along for the ride. The rest is history."})]})})}),(0,t.jsx)("div",{className:"image-column col-lg-4 col-md-4 col-sm-12 order-1 order-md-2",children:(0,t.jsx)("figure",{className:"image",children:(0,t.jsx)("img",{src:"images/team/Nick-Dhanani-2.png",alt:""})})})]})})}),(0,t.jsxs)("section",{className:"why-choose-us-two pt-0",children:[(0,t.jsx)("div",{className:"icon-shape bounce-y"}),(0,t.jsx)("div",{className:"auto-container",children:(0,t.jsx)("div",{className:"outer-box",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"content-column col-xl-5 col-lg-6 order-lg-2",children:(0,t.jsxs)("div",{className:"inner-column",children:[(0,t.jsxs)("div",{className:"sec-title",children:[(0,t.jsx)("span",{className:"sub-title",children:"Who we are ?"}),(0,t.jsx)("div",{className:"text",children:"Dhanani Private Equity Group currently manages over $1,300,000,000 in assets under a portfolio consisting of 45+ convenience stores, 50+ retail centers, and over 3,000 units of Class A multifamily. Our database of investors has organically grown to surpass 3,000 unique partners across and over 23 different US states and 2 Canadian provinces. DPEG has successfully completed over and 250 projects, and we have been blessed to have seen profitability in every single one."})]}),(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"exp-box col-lg-5 col-sm-4",children:(0,t.jsxs)("div",{className:"inner",children:[(0,t.jsx)("div",{className:"count-box ",children:(0,t.jsx)("span",{className:"count",children:(0,t.jsx)(c.Z,{end:14})})}),(0,t.jsxs)("div",{className:"title",children:["Years Of ",(0,t.jsx)("br",{})," Experience"]})]})})})]})}),(0,t.jsx)("div",{className:"image-column col-xl-7 col-lg-6 col-md-10",children:(0,t.jsx)("div",{className:"inner-column",children:(0,t.jsxs)("div",{className:"image-box",children:[(0,t.jsx)("figure",{className:"image overlay-anim reveal visible",children:(0,t.jsx)(r(),{src:"/images/people/people-9.jpg",alt:"Why Choose Us",width:500,height:300})}),(0,t.jsx)("figure",{className:"image-2 overlay-anim reveal visible",children:(0,t.jsx)(r(),{src:"/images/people/people-8.jpg",alt:"Why Choose Us",width:300,height:300})}),(0,t.jsxs)("div",{className:"info-box",children:[(0,t.jsx)("div",{className:"icon-box",children:(0,t.jsx)("i",{className:"icon flaticon-take-off"})}),(0,t.jsx)("h5",{className:"title",children:"We’re doing the right thing."})]})]})})})]})})})]}),(0,t.jsx)(h,{}),(0,t.jsx)(v.Z,{}),(0,t.jsx)(p,{}),(0,t.jsx)(d.Z,{}),(0,t.jsx)(w,{}),(0,t.jsx)(x,{}),(0,t.jsx)(f,{})]})}},7892:function(e,s,n){function t(e){let{src:s}=e;return s}n.r(s),n.d(s,{default:function(){return t}})}}]);
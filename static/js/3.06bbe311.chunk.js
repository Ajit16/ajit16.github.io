(this["webpackJsonpnew-vision"]=this["webpackJsonpnew-vision"]||[]).push([[3],{31:function(e,t,a){e.exports=a.p+"static/media/s1.dd5d4902.png"},32:function(e,t,a){e.exports=a.p+"static/media/s2.ac61c8d8.png"},33:function(e,t,a){e.exports=a.p+"static/media/s3.c483ba1c.png"},34:function(e,t,a){e.exports=a.p+"static/media/s4.2db04545.png"},35:function(e,t,a){e.exports=a.p+"static/media/s5.2e4429fe.png"},36:function(e,t,a){e.exports=a.p+"static/media/s6.23c1fe11.png"},37:function(e,t,a){e.exports=a.p+"static/media/s8.287b9a8a.png"},38:function(e,t,a){e.exports=a.p+"static/media/s9.f252c19d.png"},39:function(e,t,a){e.exports=a.p+"static/media/s10.be40a3ce.png"},40:function(e,t,a){e.exports=a.p+"static/media/s11.124703e9.png"},41:function(e,t,a){e.exports=a.p+"static/media/s12.698dcb87.png"},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){e.exports=a.p+"static/media/s7.a008b753.png"},51:function(e,t,a){"use strict";function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var a=[],i=!0,o=!1,n=void 0;try{for(var r,s=e[Symbol.iterator]();!(i=(r=s.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(c){o=!0,n=c}finally{try{i||null==s.return||s.return()}finally{if(o)throw n}}return a}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}a.r(t);var o=a(0),n=a.n(o);a(45);var r=function(e){return window.scroll(0,0),e.show?n.a.createElement(o.Fragment,null,n.a.createElement("div",{className:(e.show?"show":"")+" model view-model"},n.a.createElement("div",{className:"model-head d-flex justify-content-between"},n.a.createElement("h2",null,e.data.title),n.a.createElement("div",null,n.a.createElement("i",{className:"material-icons cursor",onClick:e.CloseModel},"close"))),n.a.createElement("hr",{className:"my-2"}),n.a.createElement("div",{className:"model-content"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement("img",{src:e.data.pro_image,className:"img-fluid border border-info p-2",alt:"proImage"})),n.a.createElement("div",{className:"col"},n.a.createElement("h3",null,e.data.title),n.a.createElement("p",{className:"lead"},e.data.Discription),e.data.url&&n.a.createElement("a",{href:e.data.url,target:"_blank",rel:"noopener noreferrer"},"Live link"),n.a.createElement("hr",{className:"my-2"}),n.a.createElement("blockquote",{className:"blockquote"},n.a.createElement("p",{className:"mb-1"},"Technologies Used:"),n.a.createElement("footer",{className:"blockquote-footer position-relative"},e.data.technologies.map((function(e){return n.a.createElement("kbd",{className:"badge-primary badge-pill mx-1",key:e},e)})))),n.a.createElement("hr",{className:"my-2"}),n.a.createElement("blockquote",{className:"blockquote"},n.a.createElement("p",{className:"mb-1"},"Category:"),n.a.createElement("footer",{className:"blockquote-footer position-relative"},e.data.category.map((function(e){return n.a.createElement("kbd",{className:"badge-light badge-pill mx-1",key:e},e)}))))))),n.a.createElement("div",{className:"model-footer"})),n.a.createElement("div",{className:"modelBg",onClick:e.CloseModel})):n.a.createElement("div",{className:" model view-model"})};a(46);t.default=function(){var e=i(Object(o.useState)(""),2),t=e[0],a=e[1],l=i(Object(o.useState)({}),2),m=l[0],d=l[1],p=i(Object(o.useState)(!1),2),g=p[0],u=p[1];return n.a.createElement("div",{className:"main portfolio"},n.a.createElement("div",{className:"portfolio-box px-3"},n.a.createElement("h1",{className:"title text-center px-3 my-5"},"Portfolio"),n.a.createElement("ul",{className:"d-flex p-0 category border-bottom"},n.a.createElement("li",{className:"list-group-item py-1"+(""===t?" active":""),onClick:function(){return a("")}},"All"),s.map((function(e,i){return n.a.createElement("li",{key:i,className:"list-group-item py-1"+(t===e?" active":""),onClick:function(){return a(e)}},e)}))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement("ul",{className:"portfolio-items d-flex p-0 flex-wrap"},c.map((function(e){return""!==t&&!function(e,t){return!!e.category.find((function(e){return e.toLocaleLowerCase()===t.toLocaleLowerCase()}))}(e,t)||n.a.createElement("li",{className:"item",key:e.id},n.a.createElement("img",{className:"shadow-sm",src:e.pro_image,alt:e.title}),n.a.createElement("div",{className:"projectDetail"},e.url&&n.a.createElement("a",{className:"text-white",href:e.url,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:"material-icons cursor"},"link")," \xa0")," ",n.a.createElement("i",{className:"material-icons cursor",onClick:function(){d(e),u(!0)}},"fullscreen")))})))))),n.a.createElement(r,{data:m,CloseModel:function(){u(!1),d({})},show:g}))};var s=["React","Angular","HTML","Design","Wordpress"],c=[{id:0,url:"http://dev.chd.miraclestudios.us/haptic-html/",title:"Haptic",shortDiscription:"Online ecommerce site",Discription:"Online ecommerce site",pro_image:a(31),date:new Date,category:["HTML","Design"],technologies:["HTML","CSS","Bootstrap","Responsive","Design"],images:[a(31)]},{id:1,url:"",title:"URMOTIVE",shortDiscription:"Online musical site",Discription:"Admin panel to provide management service",pro_image:a(32),date:new Date,category:["React","HTML"],technologies:["React","HTML","CSS3","Responsive"],images:[a(32)]},{id:2,url:"",title:"JK Traders",shortDiscription:"Trades services",Discription:"Jk Traders Ltd is newly established Calgary based Canadian import and Export company . who trades only in bulk. We have Partners, buyers and seller in Canada And in India.",pro_image:a(33),date:new Date,category:["Design","HTML"],technologies:["HTML","CSS3","Design"],images:[a(33)]},{id:3,url:"",title:"SldeBazzar",shortDiscription:"Provide provide next level specialized in Presentation",Discription:"The Bazaar for PowerPoint and Keynote templates. Slidebazaar is a dedicated team of energetic designers who are specialized in Presentation Template creation. We want to offer you our best works of high quality resources that will take your presentation to the next level.",pro_image:a(34),date:new Date,category:["React","HTML"],technologies:["React","HTML","CSS3","Responsive"],images:[a(34)]},{id:4,url:"",title:"UrbanClues",shortDiscription:"Provide Design and HTML code",Discription:"Provided Design and HTML code",pro_image:a(35),date:new Date,category:["HTML"],technologies:["React","HTML5","CSS3"],images:[a(35)]},{id:5,url:"",title:"FMM",shortDiscription:"Admin Panel",Discription:"Admin Panel for access and manage user management service",pro_image:a(36),date:new Date,category:["React","HTML"],technologies:["React","HTML","CSS3","AntDesign","Responsive"],images:[a(36),a(47)]},{id:7,url:"",title:"FMM Vender",shortDiscription:"FMM Vender Admin Panel",Discription:"FMM Vender Admin Panel",pro_image:a(37),date:new Date,category:["React","HTML"],technologies:["React","HTML","CSS3","Bootstrap","Responsive"],images:[a(37)]},{id:8,url:"http://videovillagevan.com/home/",title:"videovillagevan",shortDiscription:"Provide van on rent",Discription:"video village vehicles are custom designed for the specific task at hand. Whether it\u2019s high speed driving shots, low profile shoots, keeping your team comfortable while working on site, or scouting a job in style, we\u2019ve got you covered.",pro_image:a(38),date:new Date,category:["HTML","Wordpress"],technologies:["React","HTML"],images:[a(38)]},{id:9,url:"",title:"49to449",shortDiscription:"short discription",Discription:"Discription",pro_image:a(39),date:new Date,category:["React","HTML"],technologies:["React","HTML"],images:[a(39)]},{id:10,url:"",title:"Project 1",shortDiscription:"short discription",Discription:"Discription",pro_image:a(40),date:new Date,category:["Design","HTML"],technologies:["Design","HTML"],images:[a(40)]},{id:11,url:"",title:"Project 1",shortDiscription:"short discription",Discription:"Discription",pro_image:a(41),date:new Date,category:["Angular","HTML"],technologies:["Angular","HTML"],images:[a(41)]}]}}]);
//# sourceMappingURL=3.06bbe311.chunk.js.map
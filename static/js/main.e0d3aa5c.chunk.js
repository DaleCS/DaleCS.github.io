(this["webpackJsonpdalecs.github.io"]=this["webpackJsonpdalecs.github.io"]||[]).push([[0],[,function(e,t,n){},,,,,function(e){e.exports=JSON.parse("{}")},function(e,t,n){e.exports=n.p+"static/media/DCS Public Resume 2020.ade0ab0c.pdf"},function(e,t,n){e.exports=n.p+"static/media/resume_64.c61d2005.svg"},function(e,t,n){e.exports=n.p+"static/media/email_64.e1ee8060.svg"},function(e,t,n){e.exports=n.p+"static/media/linkedin_64.23fa596f.svg"},function(e,t,n){e.exports=n.p+"static/media/github_64.2fce79b7.svg"},,function(e,t,n){e.exports=n(26)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),i=n.n(c),o=(n(18),n(1),n(19),function(e){var t=e.scrollTo,n=(e.breakpoint,function(e){e.preventDefault(),t(e.target.innerHTML)});return r.a.createElement("div",{className:"navbar"},r.a.createElement(M,{isVisible:!0,className:"navbar-selection mr-8",delay:3500,onClick:n},"DaleCS"),r.a.createElement(M,{isVisible:!0,className:"navbar-selection mr-8",delay:3600,onClick:n},"about me"),r.a.createElement(M,{isVisible:!0,className:"navbar-selection mr-8",delay:3700,onClick:n},"projects"),r.a.createElement(M,{isVisible:!0,className:"navbar-selection",delay:3800,onClick:n},"contact"))}),s=(n(20),n(2)),l=function(){var e=window;return{width:e.innerWidth,height:e.innerHeight}},u=function(){var e=Object(a.useState)(l()),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){var e=function(){r(l())};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),n},m=n(4),d=n(3),b=function(e){var t=Object(a.useState)({}),n=Object(s.a)(t,2),r=n[0],c=n[1],i=Object(a.useRef)(r);return Object(a.useEffect)((function(){var t={};Object.keys(e).forEach((function(e){t[e]=!1})),i.current=Object(d.a)({},t),c(Object(d.a)({},t));var n=function(){Object.keys(e).forEach((function(t){var n=e[t].current.getBoundingClientRect(),a=n.height,r=n.top,o=n.bottom;r<=a-window.innerHeight/8&&o>=window.innerHeight/8?i.current[t]||(i.current[t]=!0,c(Object(d.a)(Object(d.a)({},i.current),{},Object(m.a)({},t,!0)))):i.current[t]&&(i.current[t]=!1,c(Object(d.a)(Object(d.a)({},i.current),{},Object(m.a)({},t,!1))))}))};return n(),window.addEventListener("scroll",n),function(){window.removeEventListener("scroll",n)}}),[e]),r},f=function(){var e=window.innerWidth;return e<600?"xs":e>=600&&e<960?"sm":e>=960&&e<1280?"md":e>=1280&&e<1920?"lg":"xl"},p=function(){var e=Object(a.useState)(f()),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){var e=function(){r(f())};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),n},h=Object(a.forwardRef)((function(e,t){var n=e.isVisible,a=e.breakpoint,c=u();return r.a.createElement("div",{className:"section intro-bkg",style:{minHeight:c.height},ref:t},r.a.createElement(T,{isVisible:n,delay:3500,breakpoint:a},"hello."),r.a.createElement("div",{className:"intro-container ".concat(a)},r.a.createElement("span",{className:"intro-container-text-line-1"},"Hello there! I'm"," ",r.a.createElement("span",{className:"underlined"},"Dale Christian Seen"),"."),r.a.createElement("span",{className:"intro-container-text-line-2"},"I'm an aspiring ",r.a.createElement("span",{className:"clr-blue"},"front-end developer"),"."),r.a.createElement("div",{className:"intro-container-borderanim"})))})),v=(n(21),Object(a.forwardRef)((function(e,t){var n=e.isVisible,a=e.breakpoint,c=u();return r.a.createElement("div",{className:"section about-bkg",style:{minHeight:c.height},ref:t},r.a.createElement(T,{isVisible:n,delay:500,breakpoint:a},"about me."),r.a.createElement("div",{className:"about-container"},r.a.createElement("span",{className:"mb-32"},"As a recent grad, I have experience building intuitive and responsive UI for a variety of web pages ranging from regular static pages to interactive search w/ filter pages using modern frameworks such as React and Angular. I also have experience building RESTful APIs using Express.js and Spring Boot in order to power their corresponding front-end functionalities."),r.a.createElement("span",null,"I seek to dive deeper into the world of web development and will take on new opportunities that will allow me to grow as a software engineer.")))}))),g=(n(22),function(e){var t=e.className,n=e.children;return r.a.createElement("div",{className:t},n)}),E=Object(a.forwardRef)((function(e,t){var n=e.isVisible,a=e.breakpoint,c=u();return r.a.createElement("div",{className:"section projects-bkg",style:{minHeight:c.height},ref:t},r.a.createElement(T,{isVisible:n,delay:500,breakpoint:a},"projects."),r.a.createElement("div",{className:"projects-container ".concat(a)},r.a.createElement(g,{className:"project-card ".concat(a)},"Degreeinsight.io"),r.a.createElement(g,{className:"project-card ".concat(a)},"Abode.city"),r.a.createElement(g,{className:"project-card ".concat(a)},"Spartanstop.com"),r.a.createElement(g,{className:"project-card ".concat(a)},"Spartan Agenda"),r.a.createElement(g,{className:"project-card ".concat(a)},"Byte Drive"),r.a.createElement(g,{className:"project-card ".concat(a)},"Text Encryptor/Decryptor")),r.a.createElement("span",{className:"body1"},"... more in my"," ",r.a.createElement("span",{className:"github-link",onClick:function(e){e.preventDefault(),window.open("https://github.com/dalecs")}},"Github")))})),w=(n(23),n(6),n(7)),j=n.n(w),k=n(8),N=n.n(k),O=n(9),y=n.n(O),V=n(10),I=n.n(V),R=n(11),x=n.n(R),S=function(e){var t=e.children,n=e.icon,a=e.redirectTo,c=e.isMain,i=e.breakpoint;return r.a.createElement("div",{className:"contact-card ".concat(c?"main":""," ").concat(i),onClick:function(e){e.preventDefault(),a&&a.length>0&&window.open(a)}},r.a.createElement("img",{src:n,className:"mb-8",alt:"icon"}),t)},C=Object(a.forwardRef)((function(e,t){var n=e.isVisible,a=e.breakpoint,c=u();return r.a.createElement("div",{className:"section contact-bkg",style:{minHeight:c.height},ref:t},r.a.createElement(T,{isVisible:n,delay:500,breakpoint:a},"contact."),r.a.createElement("div",{className:"contact-container ".concat(a)},r.a.createElement(S,{icon:N.a,redirectTo:j.a,isMain:!0,breakpoint:a},r.a.createElement("span",null,"My Resume"),r.a.createElement("span",null,"(.pdf, ~137KB)")),r.a.createElement("div",{className:"other-contacts-container ".concat(a)},r.a.createElement(S,{icon:y.a,redirectTo:"mailTo:Dale.Seen@gmail.com",isMain:!1,breakpoint:a},"Email"),r.a.createElement(S,{icon:I.a,redirectTo:"https://www.linkedin.com/in/dalecs",isMain:!1,breakpoint:a},"LinkedIn"),r.a.createElement(S,{icon:x.a,redirectTo:"https://github.com/dalecs",isMain:!1,breakpoint:a},"Github"))))})),M=(n(24),n(25),function(e){var t=e.isVisible,n=e.delay,c=e.className,i=e.onClick,o=e.children,l=Object(a.useState)(""),u=Object(s.a)(l,2),m=u[0],d=u[1],b=Object(a.useRef)(""),f=Object(a.useRef)(""),p=Object(a.useRef)(!1),h=Object(a.useRef)(null);return Object(a.useEffect)((function(){p.current||t&&(p.current=!0,setTimeout((function(){var e=setInterval((function(){if(f.current.length<o.length){for(var t="",n=0;n<f.current.length+1;n++)t+=Math.floor(2*Math.random());f.current=t,d(f.current)}else{clearInterval(e);var a=setInterval((function(){b.current.length<o.length?(b.current+=o[b.current.length],f.current=f.current.substring(0,f.current.length-1),d("".concat(b.current).concat(f.current))):clearInterval(a)}),50),r=setInterval((function(){if(f.current.length>0){for(var e="",t=0;t<f.current.length;t++)e+=Math.floor(2*Math.random());f.current=e,d("".concat(b.current).concat(f.current))}else clearInterval(r)}),30)}}),10)}),n||0),d(""))}),[t,n,o]),r.a.createElement("div",{ref:h,className:"container",onClick:i},r.a.createElement("span",{className:c,style:{width:"".concat(o.length,"ch")}},m))}),T=function(e){var t=e.isVisible,n=e.delay,a=e.children,c=e.breakpoint;return r.a.createElement("div",{className:"page-header"},r.a.createElement("div",{className:"page-header-text-rotate"},r.a.createElement(M,{isVisible:t,delay:n,className:"page-header-text ".concat(c)},a)))},D=function(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null),n=Object(a.useRef)(null),c=Object(a.useRef)(null),i=Object(a.useRef)({intro:e,aboutme:t,portfolio:n,contact:c}),s=b(i.current),l=p();return r.a.createElement(a.Fragment,null,r.a.createElement(o,{scrollTo:function(a){switch(a.toLowerCase()){case"dalecs":case"intro":e.current&&e.current.scrollIntoView({behavior:"smooth"});break;case"aboutme":case"about me":t.current&&t.current.scrollIntoView({behavior:"smooth"});break;case"projects":n.current&&n.current.scrollIntoView({behavior:"smooth"});break;case"contact":c.current&&c.current.scrollIntoView({behavior:"smooth"})}},breakpoint:l}),r.a.createElement(h,{ref:e,isVisible:s.intro,breakpoint:l}),r.a.createElement(v,{ref:t,isVisible:s.aboutme,breakpoint:l}),r.a.createElement(E,{ref:n,isVisible:s.portfolio,breakpoint:l}),r.a.createElement(C,{ref:c,isVisible:s.contact,breakpoint:l}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[13,1,2]]]);
//# sourceMappingURL=main.e0d3aa5c.chunk.js.map
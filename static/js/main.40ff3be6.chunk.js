(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/gear.e250a0b5.png"},function(e,t,n){e.exports=n.p+"static/media/3526768.0da91477.jpg"},function(e,t,n){e.exports=n.p+"static/media/check-mark.d4e90b4d.svg"},function(e,t,n){e.exports=n.p+"static/media/instaicon.906266bc.svg"},function(e,t,n){e.exports=n.p+"static/media/twittericon.3137fd49.svg"},,,function(e,t,n){e.exports=n(35)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/fbookicon.3c9ad1a3.svg"},function(e,t,n){e.exports=n.p+"static/media/youtubeicon.a274ef32.svg"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(5),c=n.n(i),s=(n(23),n(3)),r=n(6),l=n(7),u=n(15),m=n(8),f=n(16),d=(n(24),function(e){var t=e.alt,n=e.src,a=e.spinSpeed;return o.a.createElement("div",{className:"logo-container ".concat(a)},o.a.createElement("img",{className:"logo",alt:t,src:n}))}),p=(n(25),function(e){var t=e.text;return o.a.createElement("h1",{className:"title"},t)}),g=(n(26),function(e){var t=e.level,n=e.visible,a=e.src,i=e.alt,c=e.message;return o.a.createElement("div",{className:"notification ".concat(t).concat(n?" visible":"")},o.a.createElement("img",{src:a,alt:i}),o.a.createElement("p",null,c))}),v=(n(27),function(e){var t=e.text,n=e.src,a=e.alt,i=e.message,c=e.visible,s=e.level;return o.a.createElement("div",{className:"description"},o.a.createElement("p",{className:"description-text"},t),o.a.createElement(g,{src:n,alt:a,message:i,visible:c,level:s}))}),b=(n(28),function(e){var t=e.links;return o.a.createElement("div",{className:"social-links"},t.map(function(e,t){return o.a.createElement("a",{className:"social-link",key:t,target:"_blank",rel:"noopener noreferrer",href:e.url},o.a.createElement("object",{className:"social-logo",type:"image/svg+xml",data:e.logo},e.text),o.a.createElement("span",{className:"social-text"},e.text))}))}),w=n(1),h=n(2),E=n.n(h),x=n(9),k=n.n(x),N=(n(30),function(e){var t=e.countdownDate,n=Object(a.useState)({days:0,hours:0,mins:0,secs:0}),i=Object(w.a)(n,2),c=i[0],s=i[1],r=function(){var e=E()(t),n=E()(),a=Object(h.duration)(e.diff(n)),o=Math.floor(a.asDays()),i=a.hours(),c=a.minutes(),r=a.seconds();s({days:o,hours:i,mins:c,secs:r})};return k()(function(){r()},1e3),Object(a.useEffect)(function(){r()}),o.a.createElement("div",{className:"countdown"},Object.keys(c).map(function(e,t){return o.a.createElement("div",{key:t,className:"countdown-segment"},o.a.createElement("span",{className:"countdown-segment-number"},function(e){for(e=String(e);e.length<2;)e="0".concat(e);return e}(c[e])),o.a.createElement("span",{className:"countdown-segment-caption"},e.toUpperCase()))}))}),S=(n(31),n(10)),j=n.n(S),y=n(11),O=n.n(y),D=n(12),M=n.n(D),T=(n(32),n(13)),B=n.n(T),C=(n(33),n(14)),_=n.n(C),J=(n(34),function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={countdown:{countdownDate:"2020-3-20 00:00:00"},logo:{alt:"Spinning Gear",src:j.a,spinSpeed:"slow"},title:{text:"Sorry this website is under maintenance!"},description:{text:"#TenangDiaMasihDiBumi."},links:[{url:"https://www.instagram.com/_temuin/",logo:B.a,text:"Follow"},{url:" https://twitter.com/_temuin",logo:_.a,text:"Tweet"}],notification:{src:"",alt:"",message:"",visible:!1,level:""}},n.configureNotification=function(e){var t=Object(s.a)({},n.state.notification);t.message=e.body.msg,200===e.status?(t.src=M.a,t.alt="Check Mark",t.level="success"):(t.src=O.a,t.alt="X Mark",t.level="error"),n.setState({notification:t})},n.showNotification=function(){var e=Object(s.a)({},n.state.notification);e.visible=!0,n.setState({notification:e},function(){setTimeout(function(){e.visible=!1,n.setState({notification:e})},3e3)})},n.changeLogoSpeed=function(){var e=Object(s.a)({},n.state.logo);e.spinSpeed="fast",n.setState({logo:e},function(){setTimeout(function(){e.spinSpeed="slow",n.setState({logo:e})},1e3)})},n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.title,n=e.description,a=e.logo,i=e.links,c=e.countdown,s=e.notification;return o.a.createElement("div",{className:"background"},o.a.createElement(N,{countdownDate:c.countdownDate}),o.a.createElement(d,{alt:a.alt,src:a.src,spinSpeed:a.spinSpeed}),o.a.createElement(p,{text:t.text}),o.a.createElement(v,{text:n.text,src:s.src,alt:s.alt,message:s.message,visible:s.visible,level:s.level}),o.a.createElement(b,{links:i}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[17,1,2]]]);
//# sourceMappingURL=main.40ff3be6.chunk.js.map
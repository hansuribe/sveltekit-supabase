import{S as e,i as s,s as a,k as t,l as n,O as r,d as o,n as i,f as l,r as f,u as c,v as $,H as m,B as p,L as u,e as h,t as g,c as d,a as v,g as w,b,F as x,G as k,j,m as E,o as y,w as S,P as T,Q as I,R as U}from"../chunks/vendor-e40e4385.js";import{g as A,F as L,T as P,P as V}from"../chunks/navigation-75ff378a.js";import{I as q}from"../chunks/Icon-088eb577.js";import{s as z}from"../chunks/db-7bf1fdc8.js";import{s as B}from"../chunks/stores-8451b46e.js";import"../chunks/singletons-bb9012b7.js";function F(e){let s,a,t,n;return{c(){s=h("h6"),a=g("View "),t=h("a"),n=g("profile"),this.h()},l(e){s=d(e,"H6",{});var r=v(s);a=w(r,"View "),t=d(r,"A",{href:!0});var i=v(t);n=w(i,"profile"),i.forEach(o),r.forEach(o),this.h()},h(){b(t,"href","/profile")},m(e,r){l(e,s,r),x(s,a),x(s,t),x(t,n)},p:k,i:k,o:k,d(e){e&&o(s)}}}function H(e){let s,a,n,r,c,m;return n=new q({props:{class:"signupBanner",name:"signup",width:"400px",height:"400px"}}),c=new L({props:{heading:"Sign Up",footerText:"Already a Member?",footerLinkText:"Sign In",footerLink:"/signin",handleAction:e[3],$$slots:{default:[N]},$$scope:{ctx:e}}}),{c(){s=h("section"),a=h("div"),j(n.$$.fragment),r=t(),j(c.$$.fragment),this.h()},l(e){s=d(e,"SECTION",{class:!0});var t=v(s);a=d(t,"DIV",{class:!0});var l=v(a);E(n.$$.fragment,l),l.forEach(o),r=i(t),E(c.$$.fragment,t),t.forEach(o),this.h()},h(){b(a,"class","bannerimg svelte-gzpl9i"),b(s,"class","svelte-gzpl9i")},m(e,t){l(e,s,t),x(s,a),y(n,a,null),x(s,r),y(c,s,null),m=!0},p(e,s){const a={};67&s&&(a.$$scope={dirty:s,ctx:e}),c.$set(a)},i(e){m||($(n.$$.fragment,e),$(c.$$.fragment,e),m=!0)},o(e){f(n.$$.fragment,e),f(c.$$.fragment,e),m=!1},d(e){e&&o(s),S(n),S(c)}}}function N(e){let s,a,n,r,c,m,p,u;function h(s){e[4](s)}let g={required:!0,type:"email",id:"email",labelText:"Email"};function d(s){e[5](s)}void 0!==e[0]&&(g.value=e[0]),s=new P({props:g}),T.push((()=>I(s,"value",h)));let v={required:!0,type:"password",id:"password",labelText:"Password"};return void 0!==e[1]&&(v.value=e[1]),r=new P({props:v}),T.push((()=>I(r,"value",d))),p=new V({props:{type:"submit",text:"Sign Up"}}),{c(){j(s.$$.fragment),n=t(),j(r.$$.fragment),m=t(),j(p.$$.fragment)},l(e){E(s.$$.fragment,e),n=i(e),E(r.$$.fragment,e),m=i(e),E(p.$$.fragment,e)},m(e,a){y(s,e,a),l(e,n,a),y(r,e,a),l(e,m,a),y(p,e,a),u=!0},p(e,t){const n={};!a&&1&t&&(a=!0,n.value=e[0],U((()=>a=!1))),s.$set(n);const o={};!c&&2&t&&(c=!0,o.value=e[1],U((()=>c=!1))),r.$set(o)},i(e){u||($(s.$$.fragment,e),$(r.$$.fragment,e),$(p.$$.fragment,e),u=!0)},o(e){f(s.$$.fragment,e),f(r.$$.fragment,e),f(p.$$.fragment,e),u=!1},d(e){S(s,e),e&&o(n),S(r,e),e&&o(m),S(p,e)}}}function O(e){let s,a,m,u,h;const g=[H,F],d=[];function v(e,s){return null===e[2]?0:1}return a=v(e),m=d[a]=g[a](e),{c(){s=t(),m.c(),u=n(),this.h()},l(e){r('[data-svelte="svelte-193ewsj"]',document.head).forEach(o),s=i(e),m.l(e),u=n(),this.h()},h(){document.title="Sign Up"},m(e,t){l(e,s,t),d[a].m(e,t),l(e,u,t),h=!0},p(e,[s]){let t=a;a=v(e),a===t?d[a].p(e,s):(p(),f(d[t],1,1,(()=>{d[t]=null})),c(),m=d[a],m?m.p(e,s):(m=d[a]=g[a](e),m.c()),$(m,1),m.m(u.parentNode,u))},i(e){h||($(m),h=!0)},o(e){f(m),h=!1},d(e){e&&o(s),d[a].d(e),e&&o(u)}}}function C(e,s,a){let t,n,r;m(e,B,(e=>a(2,t=e)));return[n,r,t,async()=>{let{user:e,session:s,error:a}=await z.auth.signUp({email:n,password:r});u(B,t=s,t),A("/"),console.log(e,B,a)},function(e){n=e,a(0,n)},function(e){r=e,a(1,r)}]}export default class extends e{constructor(e){super(),s(this,e,C,O,a,{})}}
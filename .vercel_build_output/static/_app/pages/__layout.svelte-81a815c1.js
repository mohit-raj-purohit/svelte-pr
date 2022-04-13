import{F as sa,S as cr,i as dr,s as fr,e as L,k as Et,t as bt,c as x,a as M,d as A,m as Tt,h as Rt,b as _,f as ia,G as Je,g as pt,H as N,I as ra,E as Ze,J as Wn,j as oa,K as aa,L as ua,w as ha,x as la,y as ca,M as da,N as fa,O as ga,q as fi,o as gi,B as pa,v as ma}from"../chunks/index-eeba9379.js";import{a as Xn}from"../chunks/authStore-cff437c4.js";import{g as gr,s as ya,r as Qn,_ as va,C as wa,L as Ea,a as pe,S as Ta,b as Ia,F as Sa,c as Ca,d as Aa,i as ka,e as Na,f as _a,h as Da,j as ba,k as Ra,l as La}from"../chunks/index-6de4cbb9-8465d6ce.js";import{t as pi}from"../chunks/teamsStore-8b76f3b1.js";import"../chunks/index-6ffe4708.js";const xa=()=>{const e=sa("__svelte__");return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},session:e.session,updated:e.updated}},Ma={subscribe(e){return xa().page.subscribe(e)}};var Va="/_app/assets/logo-0df26b43.svg";function Oa(e){let t,n;return{c(){t=L("span"),n=bt("Please Login to access"),this.h()},l(s){t=x(s,"SPAN",{class:!0});var i=M(t);n=Rt(i,"Please Login to access"),i.forEach(A),this.h()},h(){_(t,"class","block")},m(s,i){pt(s,t,i),N(t,n)},p:Ze,d(s){s&&A(t)}}}function Pa(e){let t,n,s,i,r=e[0].user.displayName+"",o;return{c(){t=L("span"),n=bt("Welcome"),s=Et(),i=L("span"),o=bt(r),this.h()},l(a){t=x(a,"SPAN",{class:!0});var u=M(t);n=Rt(u,"Welcome"),u.forEach(A),s=Tt(a),i=x(a,"SPAN",{class:!0});var h=M(i);o=Rt(h,r),h.forEach(A),this.h()},h(){_(t,"class","block"),_(i,"class","text-emerald-600")},m(a,u){pt(a,t,u),N(t,n),pt(a,s,u),pt(a,i,u),N(i,o)},p(a,u){u&1&&r!==(r=a[0].user.displayName+"")&&oa(o,r)},d(a){a&&A(t),a&&A(s),a&&A(i)}}}function Fa(e){let t,n;return{c(){t=L("a"),n=bt("Log In"),this.h()},l(s){t=x(s,"A",{"sveltekit:prefetch":!0,class:!0,href:!0});var i=M(t);n=Rt(i,"Log In"),i.forEach(A),this.h()},h(){_(t,"sveltekit:prefetch",""),_(t,"class","ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"),_(t,"href","/login"),Je(t,"active",e[1].url.pathname==="/login")},m(s,i){pt(s,t,i),N(t,n)},p(s,i){i&2&&Je(t,"active",s[1].url.pathname==="/login")},d(s){s&&A(t)}}}function Ua(e){let t,n,s,i;return{c(){t=L("button"),n=bt("Log Out"),this.h()},l(r){t=x(r,"BUTTON",{class:!0});var o=M(t);n=Rt(o,"Log Out"),o.forEach(A),this.h()},h(){_(t,"class","ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700")},m(r,o){pt(r,t,o),N(t,n),s||(i=aa(t,"click",e[2]),s=!0)},p:Ze,d(r){r&&A(t),s=!1,i()}}}function mi(e){let t,n,s,i,r,o,a,u,h,l,c;return{c(){t=L("div"),n=L("div"),s=Et(),i=L("div"),r=L("div"),o=L("div"),a=L("nav"),u=L("a"),h=bt("Teams"),l=Et(),c=L("div"),this.h()},l(p){t=x(p,"DIV",{class:!0});var m=M(t);n=x(m,"DIV",{class:!0,style:!0}),M(n).forEach(A),s=Tt(m),i=x(m,"DIV",{class:!0});var w=M(i);r=x(w,"DIV",{class:!0});var R=M(r);o=x(R,"DIV",{class:!0});var b=M(o);a=x(b,"NAV",{class:!0});var Z=M(a);u=x(Z,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var st=M(u);h=Rt(st,"Teams"),st.forEach(A),Z.forEach(A),b.forEach(A),R.forEach(A),w.forEach(A),l=Tt(m),c=x(m,"DIV",{class:!0}),M(c).forEach(A),m.forEach(A),this.h()},h(){_(n,"class","absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"),ia(n,"background-position","10px 10px"),_(u,"sveltekit:prefetch",""),_(u,"href","/teams"),_(u,"class","rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"),Je(u,"active",e[1].url.pathname==="/teams"),_(a,"class","flex sm:justify-center space-x-4"),_(o,"class","bg-white px-6 py-4 shadow"),_(r,"class","sm:px-8 flex sm:justify-center"),_(i,"class","relative rounded-xl overflow-auto"),_(c,"class","absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5"),_(t,"class","not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25")},m(p,m){pt(p,t,m),N(t,n),N(t,s),N(t,i),N(i,r),N(r,o),N(o,a),N(a,u),N(u,h),N(t,l),N(t,c)},p(p,m){m&2&&Je(u,"active",p[1].url.pathname==="/teams")},d(p){p&&A(t)}}}function qa(e){let t,n,s,i,r,o,a,u,h,l,c,p,m,w,R,b,Z;function st(B,gt){return B[0].isLoggedIn?Pa:Oa}let ft=st(e),G=ft(e);function ue(B,gt){return B[0].isLoggedIn?Ua:Fa}let Ut=ue(e),at=Ut(e),tt=e[0].isLoggedIn&&mi(e);return{c(){t=L("header"),n=L("div"),s=L("div"),i=L("div"),r=L("div"),o=L("a"),a=L("span"),u=bt("Home Page"),h=Et(),l=L("img"),p=Et(),m=L("div"),w=L("h1"),G.c(),R=Et(),b=L("div"),at.c(),Z=Et(),tt&&tt.c(),this.h()},l(B){t=x(B,"HEADER",{});var gt=M(t);n=x(gt,"DIV",{class:!0});var ai=M(n);s=x(ai,"DIV",{class:!0});var qe=M(s);i=x(qe,"DIV",{class:!0});var qt=M(i);r=x(qt,"DIV",{class:!0});var ui=M(r);o=x(ui,"A",{"sveltekit:prefetch":!0,href:!0});var $e=M(o);a=x($e,"SPAN",{class:!0});var hi=M(a);u=Rt(hi,"Home Page"),hi.forEach(A),h=Tt($e),l=x($e,"IMG",{class:!0,src:!0,alt:!0}),$e.forEach(A),ui.forEach(A),p=Tt(qt),m=x(qt,"DIV",{class:!0});var li=M(m);w=x(li,"H1",{class:!0});var ci=M(w);G.l(ci),ci.forEach(A),li.forEach(A),R=Tt(qt),b=x(qt,"DIV",{class:!0});var di=M(b);at.l(di),di.forEach(A),qt.forEach(A),Z=Tt(qe),tt&&tt.l(qe),qe.forEach(A),ai.forEach(A),gt.forEach(A),this.h()},h(){_(a,"class","sr-only"),_(l,"class","h-16 md:h-20 w-auto "),ra(l.src,c=Va)||_(l,"src",c),_(l,"alt","Home Page"),_(o,"sveltekit:prefetch",""),_(o,"href","/"),_(r,"class","flex justify-start w-0 flex-1"),_(w,"class","text-xs text-center md:text-base font-medium text-gray-900"),_(m,"class","flex space-x-10"),_(b,"class","flex items-center justify-end flex-1 w-0"),_(i,"class","flex justify-between items-center py-6 md:justify-start md:space-x-10"),_(s,"class","border-b-2 border-gray-100 pb-4"),_(n,"class","relative bg-white")},m(B,gt){pt(B,t,gt),N(t,n),N(n,s),N(s,i),N(i,r),N(r,o),N(o,a),N(a,u),N(o,h),N(o,l),N(i,p),N(i,m),N(m,w),G.m(w,null),N(i,R),N(i,b),at.m(b,null),N(s,Z),tt&&tt.m(s,null)},p(B,[gt]){ft===(ft=st(B))&&G?G.p(B,gt):(G.d(1),G=ft(B),G&&(G.c(),G.m(w,null))),Ut===(Ut=ue(B))&&at?at.p(B,gt):(at.d(1),at=Ut(B),at&&(at.c(),at.m(b,null))),B[0].isLoggedIn?tt?tt.p(B,gt):(tt=mi(B),tt.c(),tt.m(s,null)):tt&&(tt.d(1),tt=null)},i:Ze,o:Ze,d(B){B&&A(t),G.d(),at.d(),tt&&tt.d()}}}function $a(e,t,n){let s,i;Wn(e,Xn,o=>n(0,s=o)),Wn(e,Ma,o=>n(1,i=o));async function r(){try{const o=gr();let a=await ya(o)}catch(o){console.error(o)}}return[s,i,r]}class Ba extends cr{constructor(t){super();dr(this,t,$a,qa,fr,{})}}var ja="firebase",Ka="9.6.10";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qn(ja,Ka,"app");var Ga=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},g,Ts=Ts||{},T=Ga||self;function tn(){}function Yn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Ne(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function za(e){return Object.prototype.hasOwnProperty.call(e,Vn)&&e[Vn]||(e[Vn]=++Ha)}var Vn="closure_uid_"+(1e9*Math.random()>>>0),Ha=0;function Wa(e,t,n){return e.call.apply(e.bind,arguments)}function Xa(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function H(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?H=Wa:H=Xa,H.apply(null,arguments)}function Be(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function J(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(s,o)}}function Ct(){this.s=this.s,this.o=this.o}var Qa=0,Ya={};Ct.prototype.s=!1;Ct.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),Qa!=0)){var e=za(this);delete Ya[e]}};Ct.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const pr=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},mr=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const s=e.length,i=typeof e=="string"?e.split(""):e;for(let r=0;r<s;r++)r in i&&t.call(n,i[r],r,e)};function Ja(e){t:{var t=ju;const n=e.length,s=typeof e=="string"?e.split(""):e;for(let i=0;i<n;i++)if(i in s&&t.call(void 0,s[i],i,e)){t=i;break t}t=-1}return 0>t?null:typeof e=="string"?e.charAt(t):e[t]}function yi(e){return Array.prototype.concat.apply([],arguments)}function Is(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function en(e){return/^[\s\xa0]*$/.test(e)}var vi=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function it(e,t){return e.indexOf(t)!=-1}function On(e,t){return e<t?-1:e>t?1:0}var rt;t:{var wi=T.navigator;if(wi){var Ei=wi.userAgent;if(Ei){rt=Ei;break t}}rt=""}function Ss(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function yr(e){const t={};for(const n in e)t[n]=e[n];return t}var Ti="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function vr(e,t){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)e[n]=s[n];for(let r=0;r<Ti.length;r++)n=Ti[r],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function Cs(e){return Cs[" "](e),e}Cs[" "]=tn;function Za(e){var t=nu;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var tu=it(rt,"Opera"),Ht=it(rt,"Trident")||it(rt,"MSIE"),wr=it(rt,"Edge"),Jn=wr||Ht,Er=it(rt,"Gecko")&&!(it(rt.toLowerCase(),"webkit")&&!it(rt,"Edge"))&&!(it(rt,"Trident")||it(rt,"MSIE"))&&!it(rt,"Edge"),eu=it(rt.toLowerCase(),"webkit")&&!it(rt,"Edge");function Tr(){var e=T.document;return e?e.documentMode:void 0}var nn;t:{var Pn="",Fn=function(){var e=rt;if(Er)return/rv:([^\);]+)(\)|;)/.exec(e);if(wr)return/Edge\/([\d\.]+)/.exec(e);if(Ht)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(eu)return/WebKit\/(\S+)/.exec(e);if(tu)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Fn&&(Pn=Fn?Fn[1]:""),Ht){var Un=Tr();if(Un!=null&&Un>parseFloat(Pn)){nn=String(Un);break t}}nn=Pn}var nu={};function su(){return Za(function(){let e=0;const t=vi(String(nn)).split("."),n=vi("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var i=t[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;e=On(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||On(i[2].length==0,r[2].length==0)||On(i[2],r[2]),i=i[3],r=r[3]}while(e==0)}return 0<=e})}var Zn;if(T.document&&Ht){var Ii=Tr();Zn=Ii||parseInt(nn,10)||void 0}else Zn=void 0;var iu=Zn,ru=function(){if(!T.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{T.addEventListener("test",tn,t),T.removeEventListener("test",tn,t)}catch{}return e}();function nt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}nt.prototype.h=function(){this.defaultPrevented=!0};function me(e,t){if(nt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Er){t:{try{Cs(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:ou[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&me.Z.h.call(this)}}J(me,nt);var ou={2:"touch",3:"pen",4:"mouse"};me.prototype.h=function(){me.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var _e="closure_listenable_"+(1e6*Math.random()|0),au=0;function uu(e,t,n,s,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ia=i,this.key=++au,this.ca=this.fa=!1}function pn(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function mn(e){this.src=e,this.g={},this.h=0}mn.prototype.add=function(e,t,n,s,i){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=es(e,t,s,i);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new uu(t,this.src,r,!!s,i),t.fa=n,e.push(t)),t};function ts(e,t){var n=t.type;if(n in e.g){var s=e.g[n],i=pr(s,t),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(pn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function es(e,t,n,s){for(var i=0;i<e.length;++i){var r=e[i];if(!r.ca&&r.listener==t&&r.capture==!!n&&r.ia==s)return i}return-1}var As="closure_lm_"+(1e6*Math.random()|0),qn={};function Ir(e,t,n,s,i){if(s&&s.once)return Cr(e,t,n,s,i);if(Array.isArray(t)){for(var r=0;r<t.length;r++)Ir(e,t[r],n,s,i);return null}return n=_s(n),e&&e[_e]?e.N(t,n,Ne(s)?!!s.capture:!!s,i):Sr(e,t,n,!1,s,i)}function Sr(e,t,n,s,i,r){if(!t)throw Error("Invalid event type");var o=Ne(i)?!!i.capture:!!i,a=Ns(e);if(a||(e[As]=a=new mn(e)),n=a.add(t,n,s,o,r),n.proxy)return n;if(s=hu(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)ru||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),s,i);else if(e.attachEvent)e.attachEvent(kr(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function hu(){function e(n){return t.call(e.src,e.listener,n)}var t=lu;return e}function Cr(e,t,n,s,i){if(Array.isArray(t)){for(var r=0;r<t.length;r++)Cr(e,t[r],n,s,i);return null}return n=_s(n),e&&e[_e]?e.O(t,n,Ne(s)?!!s.capture:!!s,i):Sr(e,t,n,!0,s,i)}function Ar(e,t,n,s,i){if(Array.isArray(t))for(var r=0;r<t.length;r++)Ar(e,t[r],n,s,i);else s=Ne(s)?!!s.capture:!!s,n=_s(n),e&&e[_e]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=es(r,n,s,i),-1<n&&(pn(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=Ns(e))&&(t=e.g[t.toString()],e=-1,t&&(e=es(t,n,s,i)),(n=-1<e?t[e]:null)&&ks(n))}function ks(e){if(typeof e!="number"&&e&&!e.ca){var t=e.src;if(t&&t[_e])ts(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(kr(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=Ns(t))?(ts(n,e),n.h==0&&(n.src=null,t[As]=null)):pn(e)}}}function kr(e){return e in qn?qn[e]:qn[e]="on"+e}function lu(e,t){if(e.ca)e=!0;else{t=new me(t,this);var n=e.listener,s=e.ia||e.src;e.fa&&ks(e),e=n.call(s,t)}return e}function Ns(e){return e=e[As],e instanceof mn?e:null}var $n="__closure_events_fn_"+(1e9*Math.random()>>>0);function _s(e){return typeof e=="function"?e:(e[$n]||(e[$n]=function(t){return e.handleEvent(t)}),e[$n])}function K(){Ct.call(this),this.i=new mn(this),this.P=this,this.I=null}J(K,Ct);K.prototype[_e]=!0;K.prototype.removeEventListener=function(e,t,n,s){Ar(this,e,t,n,s)};function W(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new nt(t,e);else if(t instanceof nt)t.target=t.target||e;else{var i=t;t=new nt(s,e),vr(t,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];i=je(o,s,!0,t)&&i}if(o=t.g=e,i=je(o,s,!0,t)&&i,i=je(o,s,!1,t)&&i,n)for(r=0;r<n.length;r++)o=t.g=n[r],i=je(o,s,!1,t)&&i}K.prototype.M=function(){if(K.Z.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)pn(n[s]);delete e.g[t],e.h--}}this.I=null};K.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};K.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function je(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,u=o.ia||o.src;o.fa&&ts(e.i,o),i=a.call(u,s)!==!1&&i}}return i&&!s.defaultPrevented}var Ds=T.JSON.stringify;function cu(){var e=_r;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class du{constructor(){this.h=this.g=null}add(t,n){const s=Nr.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Nr=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new fu,e=>e.reset());class fu{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function gu(e){T.setTimeout(()=>{throw e},0)}function bs(e,t){ns||pu(),ss||(ns(),ss=!0),_r.add(e,t)}var ns;function pu(){var e=T.Promise.resolve(void 0);ns=function(){e.then(mu)}}var ss=!1,_r=new du;function mu(){for(var e;e=cu();){try{e.h.call(e.g)}catch(n){gu(n)}var t=Nr;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}ss=!1}function yn(e,t){K.call(this),this.h=e||1,this.g=t||T,this.j=H(this.kb,this),this.l=Date.now()}J(yn,K);g=yn.prototype;g.da=!1;g.S=null;g.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),W(this,"tick"),this.da&&(Rs(this),this.start()))}};g.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Rs(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}g.M=function(){yn.Z.M.call(this),Rs(this),delete this.g};function Ls(e,t,n){if(typeof e=="function")n&&(e=H(e,n));else if(e&&typeof e.handleEvent=="function")e=H(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:T.setTimeout(e,t||0)}function Dr(e){e.g=Ls(()=>{e.g=null,e.i&&(e.i=!1,Dr(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class yu extends Ct{constructor(t,n){super();this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Dr(this)}M(){super.M(),this.g&&(T.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ye(e){Ct.call(this),this.h=e,this.g={}}J(ye,Ct);var Si=[];function br(e,t,n,s){Array.isArray(n)||(n&&(Si[0]=n.toString()),n=Si);for(var i=0;i<n.length;i++){var r=Ir(t,n[i],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function Rr(e){Ss(e.g,function(t,n){this.g.hasOwnProperty(n)&&ks(t)},e),e.g={}}ye.prototype.M=function(){ye.Z.M.call(this),Rr(this)};ye.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function vn(){this.g=!0}vn.prototype.Aa=function(){this.g=!1};function vu(e,t,n,s,i,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),u=0;u<a.length;u++){var h=a[u].split("=");if(1<h.length){var l=h[0];h=h[1];var c=l.split("_");o=2<=c.length&&c[1]=="type"?o+(l+"="+h+"&"):o+(l+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function wu(e,t,n,s,i,r,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+t+`
`+n+`
`+r+" "+o})}function Bt(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Tu(e,n)+(s?" "+s:"")})}function Eu(e,t){e.info(function(){return"TIMEOUT: "+t})}vn.prototype.info=function(){};function Tu(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ds(n)}catch{return t}}var Ft={},Ci=null;function wn(){return Ci=Ci||new K}Ft.Ma="serverreachability";function Lr(e){nt.call(this,Ft.Ma,e)}J(Lr,nt);function ve(e){const t=wn();W(t,new Lr(t,e))}Ft.STAT_EVENT="statevent";function xr(e,t){nt.call(this,Ft.STAT_EVENT,e),this.stat=t}J(xr,nt);function ot(e){const t=wn();W(t,new xr(t,e))}Ft.Na="timingevent";function Mr(e,t){nt.call(this,Ft.Na,e),this.size=t}J(Mr,nt);function De(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return T.setTimeout(function(){e()},t)}var En={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Vr={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function xs(){}xs.prototype.h=null;function Ai(e){return e.h||(e.h=e.i())}function Or(){}var be={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Ms(){nt.call(this,"d")}J(Ms,nt);function Vs(){nt.call(this,"c")}J(Vs,nt);var is;function Tn(){}J(Tn,xs);Tn.prototype.g=function(){return new XMLHttpRequest};Tn.prototype.i=function(){return{}};is=new Tn;function Re(e,t,n,s){this.l=e,this.j=t,this.m=n,this.X=s||1,this.V=new ye(this),this.P=Iu,e=Jn?125:void 0,this.W=new yn(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Pr}function Pr(){this.i=null,this.g="",this.h=!1}var Iu=45e3,rs={},sn={};g=Re.prototype;g.setTimeout=function(e){this.P=e};function os(e,t,n){e.K=1,e.v=Sn(wt(t)),e.s=n,e.U=!0,Fr(e,null)}function Fr(e,t){e.F=Date.now(),Le(e),e.A=wt(e.v);var n=e.A,s=e.X;Array.isArray(s)||(s=[String(s)]),Gr(n.h,"t",s),e.C=0,n=e.l.H,e.h=new Pr,e.g=co(e.l,n?t:null,!e.s),0<e.O&&(e.L=new yu(H(e.Ia,e,e.g),e.O)),br(e.V,e.g,"readystatechange",e.gb),t=e.H?yr(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),ve(1),vu(e.j,e.u,e.A,e.m,e.X,e.s)}g.gb=function(e){e=e.target;const t=this.L;t&&vt(e)==3?t.l():this.Ia(e)};g.Ia=function(e){try{if(e==this.g)t:{const l=vt(this.g);var t=this.g.Da();const c=this.g.ba();if(!(3>l)&&(l!=3||Jn||this.g&&(this.h.h||this.g.ga()||Di(this.g)))){this.I||l!=4||t==7||(t==8||0>=c?ve(3):ve(2)),In(this);var n=this.g.ba();this.N=n;e:if(Ur(this)){var s=Di(this.g);e="";var i=s.length,r=vt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){kt(this),ce(this);var o="";break e}this.h.i=new T.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:r&&t==i-1});s.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,wu(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!en(a)){var h=a;break e}}h=null}if(n=h)Bt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,as(this,n);else{this.i=!1,this.o=3,ot(12),kt(this),ce(this);break t}}this.U?(qr(this,l,o),Jn&&this.i&&l==3&&(br(this.V,this.W,"tick",this.fb),this.W.start())):(Bt(this.j,this.m,o,null),as(this,o)),l==4&&kt(this),this.i&&!this.I&&(l==4?ao(this.l,this):(this.i=!1,Le(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ot(12)):(this.o=0,ot(13)),kt(this),ce(this)}}}catch{}finally{}};function Ur(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Ba:!1}function qr(e,t,n){let s=!0,i;for(;!e.I&&e.C<n.length;)if(i=Su(e,n),i==sn){t==4&&(e.o=4,ot(14),s=!1),Bt(e.j,e.m,null,"[Incomplete Response]");break}else if(i==rs){e.o=4,ot(15),Bt(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else Bt(e.j,e.m,i,null),as(e,i);Ur(e)&&i!=sn&&i!=rs&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,ot(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ks(t),t.L=!0,ot(11))):(Bt(e.j,e.m,n,"[Invalid Chunked Response]"),kt(e),ce(e))}g.fb=function(){if(this.g){var e=vt(this.g),t=this.g.ga();this.C<t.length&&(In(this),qr(this,e,t),this.i&&e!=4&&Le(this))}};function Su(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?sn:(n=Number(t.substring(n,s)),isNaN(n)?rs:(s+=1,s+n>t.length?sn:(t=t.substr(s,n),e.C=s+n,t)))}g.cancel=function(){this.I=!0,kt(this)};function Le(e){e.Y=Date.now()+e.P,$r(e,e.P)}function $r(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=De(H(e.eb,e),t)}function In(e){e.B&&(T.clearTimeout(e.B),e.B=null)}g.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Eu(this.j,this.A),this.K!=2&&(ve(3),ot(17)),kt(this),this.o=2,ce(this)):$r(this,this.Y-e)};function ce(e){e.l.G==0||e.I||ao(e.l,e)}function kt(e){In(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,Rs(e.W),Rr(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function as(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||us(n.i,e))){if(n.I=e.N,!e.J&&us(n.i,e)&&n.G==3){try{var s=n.Ca.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)un(n),kn(n);else break t;js(n),ot(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=De(H(n.ab,n),6e3));if(1>=Wr(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Nt(n,11)}else if((e.J||n.g==e)&&un(n),!en(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let h=i[t];if(n.U=h[0],h=h[1],n.G==2)if(h[0]=="c"){n.J=h[1],n.la=h[2];const l=h[3];l!=null&&(n.ma=l,n.h.info("VER="+n.ma));const c=h[4];c!=null&&(n.za=c,n.h.info("SVER="+n.za));const p=h[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=e.g;if(m){const w=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var r=s.i;!r.g&&(it(w,"spdy")||it(w,"quic")||it(w,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(Fs(r,r.h),r.h=null))}if(s.D){const R=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;R&&(s.sa=R,V(s.F,s.D,R))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=e;if(s.oa=lo(s,s.H?s.la:null,s.W),o.J){Xr(s.i,o);var a=o,u=s.K;u&&a.setTimeout(u),a.B&&(In(a),Le(a)),s.g=o}else ro(s);0<n.l.length&&Nn(n)}else h[0]!="stop"&&h[0]!="close"||Nt(n,7);else n.G==3&&(h[0]=="stop"||h[0]=="close"?h[0]=="stop"?Nt(n,7):Bs(n):h[0]!="noop"&&n.j&&n.j.wa(h),n.A=0)}}ve(4)}catch{}}function Cu(e){if(e.R&&typeof e.R=="function")return e.R();if(typeof e=="string")return e.split("");if(Yn(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function Os(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Yn(e)||typeof e=="string")mr(e,t,void 0);else{if(e.T&&typeof e.T=="function")var n=e.T();else if(e.R&&typeof e.R=="function")n=void 0;else if(Yn(e)||typeof e=="string"){n=[];for(var s=e.length,i=0;i<s;i++)n.push(i)}else for(i in n=[],s=0,e)n[s++]=i;s=Cu(e),i=s.length;for(var r=0;r<i;r++)t.call(void 0,s[r],n&&n[r],e)}}function te(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(e)if(e instanceof te)for(n=e.T(),s=0;s<n.length;s++)this.set(n[s],e.get(n[s]));else for(s in e)this.set(s,e[s])}g=te.prototype;g.R=function(){Ps(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e};g.T=function(){return Ps(this),this.g.concat()};function Ps(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var s=e.g[t];Lt(e.h,s)&&(e.g[n++]=s),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)s=e.g[t],Lt(i,s)||(e.g[n++]=s,i[s]=1),t++;e.g.length=n}}g.get=function(e,t){return Lt(this.h,e)?this.h[e]:t};g.set=function(e,t){Lt(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t};g.forEach=function(e,t){for(var n=this.T(),s=0;s<n.length;s++){var i=n[s],r=this.get(i);e.call(t,r,i,this)}};function Lt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var Br=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Au(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),i=null;if(0<=s){var r=e[n].substring(0,s);i=e[n].substring(s+1)}else r=e[n];t(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function xt(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof xt){this.g=t!==void 0?t:e.g,rn(this,e.j),this.s=e.s,on(this,e.i),an(this,e.m),this.l=e.l,t=e.h;var n=new we;n.i=t.i,t.g&&(n.g=new te(t.g),n.h=t.h),ki(this,n),this.o=e.o}else e&&(n=String(e).match(Br))?(this.g=!!t,rn(this,n[1]||"",!0),this.s=de(n[2]||""),on(this,n[3]||"",!0),an(this,n[4]),this.l=de(n[5]||"",!0),ki(this,n[6]||"",!0),this.o=de(n[7]||"")):(this.g=!!t,this.h=new we(null,this.g))}xt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(le(t,Ni,!0),":");var n=this.i;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(le(t,Ni,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&e.push("/"),e.push(le(n,n.charAt(0)=="/"?bu:Du,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",le(n,Lu)),e.join("")};function wt(e){return new xt(e)}function rn(e,t,n){e.j=n?de(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function on(e,t,n){e.i=n?de(t,!0):t}function an(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function ki(e,t,n){t instanceof we?(e.h=t,xu(e.h,e.g)):(n||(t=le(t,Ru)),e.h=new we(t,e.g))}function V(e,t,n){e.h.set(t,n)}function Sn(e){return V(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ku(e){return e instanceof xt?wt(e):new xt(e,void 0)}function Nu(e,t,n,s){var i=new xt(null,void 0);return e&&rn(i,e),t&&on(i,t),n&&an(i,n),s&&(i.l=s),i}function de(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function le(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,_u),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function _u(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Ni=/[#\/\?@]/g,Du=/[#\?:]/g,bu=/[#\?]/g,Ru=/[#\?@]/g,Lu=/#/g;function we(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function At(e){e.g||(e.g=new te,e.h=0,e.i&&Au(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}g=we.prototype;g.add=function(e,t){At(this),this.i=null,e=ee(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function jr(e,t){At(e),t=ee(e,t),Lt(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,Lt(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Ps(e)))}function Kr(e,t){return At(e),t=ee(e,t),Lt(e.g.h,t)}g.forEach=function(e,t){At(this),this.g.forEach(function(n,s){mr(n,function(i){e.call(t,i,s,this)},this)},this)};g.T=function(){At(this);for(var e=this.g.R(),t=this.g.T(),n=[],s=0;s<t.length;s++)for(var i=e[s],r=0;r<i.length;r++)n.push(t[s]);return n};g.R=function(e){At(this);var t=[];if(typeof e=="string")Kr(this,e)&&(t=yi(t,this.g.get(ee(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=yi(t,e[n])}return t};g.set=function(e,t){return At(this),this.i=null,e=ee(this,e),Kr(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};g.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t};function Gr(e,t,n){jr(e,t),0<n.length&&(e.i=null,e.g.set(ee(e,t),Is(n)),e.h+=n.length)}g.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var s=t[n],i=encodeURIComponent(String(s));s=this.R(s);for(var r=0;r<s.length;r++){var o=i;s[r]!==""&&(o+="="+encodeURIComponent(String(s[r]))),e.push(o)}}return this.i=e.join("&")};function ee(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function xu(e,t){t&&!e.j&&(At(e),e.i=null,e.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(jr(this,s),Gr(this,i,n))},e)),e.j=t}var Mu=class{constructor(e,t){this.h=e,this.g=t}};function zr(e){this.l=e||Vu,T.PerformanceNavigationTiming?(e=T.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(T.g&&T.g.Ea&&T.g.Ea()&&T.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Vu=10;function Hr(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Wr(e){return e.h?1:e.g?e.g.size:0}function us(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Fs(e,t){e.g?e.g.add(t):e.h=t}function Xr(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}zr.prototype.cancel=function(){if(this.i=Qr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Qr(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Is(e.i)}function Us(){}Us.prototype.stringify=function(e){return T.JSON.stringify(e,void 0)};Us.prototype.parse=function(e){return T.JSON.parse(e,void 0)};function Ou(){this.g=new Us}function Pu(e,t,n){const s=n||"";try{Os(e,function(i,r){let o=i;Ne(i)&&(o=Ds(i)),t.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw t.push(s+"type="+encodeURIComponent("_badmap")),i}}function Fu(e,t){const n=new vn;if(T.Image){const s=new Image;s.onload=Be(Ke,n,s,"TestLoadImage: loaded",!0,t),s.onerror=Be(Ke,n,s,"TestLoadImage: error",!1,t),s.onabort=Be(Ke,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=Be(Ke,n,s,"TestLoadImage: timeout",!1,t),T.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function Ke(e,t,n,s,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(s)}catch{}}function xe(e){this.l=e.$b||null,this.j=e.ib||!1}J(xe,xs);xe.prototype.g=function(){return new Cn(this.l,this.j)};xe.prototype.i=function(e){return function(){return e}}({});function Cn(e,t){K.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=qs,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}J(Cn,K);var qs=0;g=Cn.prototype;g.open=function(e,t){if(this.readyState!=qs)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Ee(this)};g.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||T).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))};g.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Me(this)),this.readyState=qs};g.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ee(this)),this.g&&(this.readyState=3,Ee(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof T.ReadableStream!="undefined"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Yr(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))};function Yr(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}g.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Me(this):Ee(this),this.readyState==3&&Yr(this)}};g.Ua=function(e){this.g&&(this.response=this.responseText=e,Me(this))};g.Ta=function(e){this.g&&(this.response=e,Me(this))};g.ha=function(){this.g&&Me(this)};function Me(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Ee(e)}g.setRequestHeader=function(e,t){this.v.append(e,t)};g.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};g.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Ee(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Cn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Uu=T.JSON.parse;function $(e){K.call(this),this.headers=new te,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Jr,this.K=this.L=!1}J($,K);var Jr="",qu=/^https?$/i,$u=["POST","PUT"];g=$.prototype;g.ea=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():is.g(),this.C=this.u?Ai(this.u):Ai(is),this.g.onreadystatechange=H(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(r){_i(this,r);return}e=n||"";const i=new te(this.headers);s&&Os(s,function(r,o){i.set(o,r)}),s=Ja(i.T()),n=T.FormData&&e instanceof T.FormData,!(0<=pr($u,t))||s||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(r,o){this.g.setRequestHeader(o,r)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{eo(this),0<this.B&&((this.K=Bu(this.g))?(this.g.timeout=this.B,this.g.ontimeout=H(this.pa,this)):this.A=Ls(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){_i(this,r)}};function Bu(e){return Ht&&su()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}function ju(e){return e.toLowerCase()=="content-type"}g.pa=function(){typeof Ts!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,W(this,"timeout"),this.abort(8))};function _i(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Zr(e),An(e)}function Zr(e){e.D||(e.D=!0,W(e,"complete"),W(e,"error"))}g.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,W(this,"complete"),W(this,"abort"),An(this))};g.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),An(this,!0)),$.Z.M.call(this)};g.Fa=function(){this.s||(this.F||this.v||this.l?to(this):this.cb())};g.cb=function(){to(this)};function to(e){if(e.h&&typeof Ts!="undefined"&&(!e.C[1]||vt(e)!=4||e.ba()!=2)){if(e.v&&vt(e)==4)Ls(e.Fa,0,e);else if(W(e,"readystatechange"),vt(e)==4){e.h=!1;try{const a=e.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var i=String(e.H).match(Br)[1]||null;if(!i&&T.self&&T.self.location){var r=T.self.location.protocol;i=r.substr(0,r.length-1)}s=!qu.test(i?i.toLowerCase():"")}n=s}if(n)W(e,"complete"),W(e,"success");else{e.m=6;try{var o=2<vt(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.ba()+"]",Zr(e)}}finally{An(e)}}}}function An(e,t){if(e.g){eo(e);const n=e.g,s=e.C[0]?tn:null;e.g=null,e.C=null,t||W(e,"ready");try{n.onreadystatechange=s}catch{}}}function eo(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(T.clearTimeout(e.A),e.A=null)}function vt(e){return e.g?e.g.readyState:0}g.ba=function(){try{return 2<vt(this)?this.g.status:-1}catch{return-1}};g.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};g.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Uu(t)}};function Di(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Jr:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}g.Da=function(){return this.m};g.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function Ku(e){let t="";return Ss(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function $s(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Ku(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):V(e,t,n))}function he(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function no(e){this.za=0,this.l=[],this.h=new vn,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=he("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=he("baseRetryDelayMs",5e3,e),this.$a=he("retryDelaySeedMs",1e4,e),this.Ya=he("forwardChannelMaxRetries",2,e),this.ra=he("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new zr(e&&e.concurrentRequestLimit),this.Ca=new Ou,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||e.Xb!==!1}g=no.prototype;g.ma=8;g.G=1;function Bs(e){if(so(e),e.G==3){var t=e.V++,n=wt(e.F);V(n,"SID",e.J),V(n,"RID",t),V(n,"TYPE","terminate"),Ve(e,n),t=new Re(e,e.h,t,void 0),t.K=2,t.v=Sn(wt(n)),n=!1,T.navigator&&T.navigator.sendBeacon&&(n=T.navigator.sendBeacon(t.v.toString(),"")),!n&&T.Image&&(new Image().src=t.v,n=!0),n||(t.g=co(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Le(t)}ho(e)}g.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch{}};function kn(e){e.g&&(Ks(e),e.g.cancel(),e.g=null)}function so(e){kn(e),e.u&&(T.clearTimeout(e.u),e.u=null),un(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&T.clearTimeout(e.m),e.m=null)}function Bn(e,t){e.l.push(new Mu(e.Za++,t)),e.G==3&&Nn(e)}function Nn(e){Hr(e.i)||e.m||(e.m=!0,bs(e.Ha,e),e.C=0)}function Gu(e,t){return Wr(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.l=t.D.concat(e.l),!0):e.G==1||e.G==2||e.C>=(e.Xa?0:e.Ya)?!1:(e.m=De(H(e.Ha,e,t),uo(e,e.C)),e.C++,!0)}g.Ha=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new Re(this,this.h,e,void 0);let r=this.s;if(this.P&&(r?(r=yr(r),vr(r,this.P)):r=this.P),this.o===null&&(i.H=r),this.ja)t:{for(var t=0,n=0;n<this.l.length;n++){e:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.l.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=io(this,i,t),n=wt(this.F),V(n,"RID",e),V(n,"CVER",22),this.D&&V(n,"X-HTTP-Session-Id",this.D),Ve(this,n),this.o&&r&&$s(n,this.o,r),Fs(this.i,i),this.Ra&&V(n,"TYPE","init"),this.ja?(V(n,"$req",t),V(n,"SID","null"),i.$=!0,os(i,n,null)):os(i,n,t),this.G=2}}else this.G==3&&(e?bi(this,e):this.l.length==0||Hr(this.i)||bi(this))};function bi(e,t){var n;t?n=t.m:n=e.V++;const s=wt(e.F);V(s,"SID",e.J),V(s,"RID",n),V(s,"AID",e.U),Ve(e,s),e.o&&e.s&&$s(s,e.o,e.s),n=new Re(e,e.h,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=io(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),Fs(e.i,n),os(n,s,t)}function Ve(e,t){e.j&&Os({},function(n,s){V(t,s,n)})}function io(e,t,n){n=Math.min(e.l.length,n);var s=e.j?H(e.j.Oa,e.j,e):null;t:{var i=e.l;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let u=0;u<n;u++){let h=i[u].h;const l=i[u].g;if(h-=r,0>h)r=Math.max(0,i[u].h-100),a=!1;else try{Pu(l,o,"req"+h+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break t}}}return e=e.l.splice(0,n),t.D=e,s}function ro(e){e.g||e.u||(e.Y=1,bs(e.Ga,e),e.A=0)}function js(e){return e.g||e.u||3<=e.A?!1:(e.Y++,e.u=De(H(e.Ga,e),uo(e,e.A)),e.A++,!0)}g.Ga=function(){if(this.u=null,oo(this),this.$&&!(this.L||this.g==null||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=De(H(this.bb,this),e)}};g.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ot(10),kn(this),oo(this))};function Ks(e){e.B!=null&&(T.clearTimeout(e.B),e.B=null)}function oo(e){e.g=new Re(e,e.h,"rpc",e.Y),e.o===null&&(e.g.H=e.s),e.g.O=0;var t=wt(e.oa);V(t,"RID","rpc"),V(t,"SID",e.J),V(t,"CI",e.N?"0":"1"),V(t,"AID",e.U),Ve(e,t),V(t,"TYPE","xmlhttp"),e.o&&e.s&&$s(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=Sn(wt(t)),n.s=null,n.U=!0,Fr(n,e)}g.ab=function(){this.v!=null&&(this.v=null,kn(this),js(this),ot(19))};function un(e){e.v!=null&&(T.clearTimeout(e.v),e.v=null)}function ao(e,t){var n=null;if(e.g==t){un(e),Ks(e),e.g=null;var s=2}else if(us(e.i,t))n=t.D,Xr(e.i,t),s=1;else return;if(e.I=t.N,e.G!=0){if(t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;s=wn(),W(s,new Mr(s,n,t,i)),Nn(e)}else ro(e);else if(i=t.o,i==3||i==0&&0<e.I||!(s==1&&Gu(e,t)||s==2&&js(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Nt(e,5);break;case 4:Nt(e,10);break;case 3:Nt(e,6);break;default:Nt(e,2)}}}function uo(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function Nt(e,t){if(e.h.info("Error code "+t),t==2){var n=null;e.j&&(n=null);var s=H(e.jb,e);n||(n=new xt("//www.google.com/images/cleardot.gif"),T.location&&T.location.protocol=="http"||rn(n,"https"),Sn(n)),Fu(n.toString(),s)}else ot(2);e.G=0,e.j&&e.j.va(t),ho(e),so(e)}g.jb=function(e){e?(this.h.info("Successfully pinged google.com"),ot(2)):(this.h.info("Failed to ping google.com"),ot(1))};function ho(e){e.G=0,e.I=-1,e.j&&((Qr(e.i).length!=0||e.l.length!=0)&&(e.i.i.length=0,Is(e.l),e.l.length=0),e.j.ua())}function lo(e,t,n){let s=ku(n);if(s.i!="")t&&on(s,t+"."+s.i),an(s,s.m);else{const i=T.location;s=Nu(i.protocol,t?t+"."+i.hostname:i.hostname,+i.port,n)}return e.aa&&Ss(e.aa,function(i,r){V(s,r,i)}),t=e.D,n=e.sa,t&&n&&V(s,t,n),V(s,"VER",e.ma),Ve(e,s),s}function co(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new $(new xe({ib:!0})):new $(e.qa),t.L=e.H,t}function fo(){}g=fo.prototype;g.xa=function(){};g.wa=function(){};g.va=function(){};g.ua=function(){};g.Oa=function(){};function hn(){if(Ht&&!(10<=Number(iu)))throw Error("Environmental error: no available transport.")}hn.prototype.g=function(e,t){return new lt(e,t)};function lt(e,t){K.call(this),this.g=new no(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!en(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!en(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new ne(this)}J(lt,K);lt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),bs(H(e.hb,e,t))),ot(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=lo(e,null,e.W),Nn(e)};lt.prototype.close=function(){Bs(this.g)};lt.prototype.u=function(e){if(typeof e=="string"){var t={};t.__data__=e,Bn(this.g,t)}else this.v?(t={},t.__data__=Ds(e),Bn(this.g,t)):Bn(this.g,e)};lt.prototype.M=function(){this.g.j=null,delete this.j,Bs(this.g),delete this.g,lt.Z.M.call(this)};function go(e){Ms.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}J(go,Ms);function po(){Vs.call(this),this.status=1}J(po,Vs);function ne(e){this.g=e}J(ne,fo);ne.prototype.xa=function(){W(this.g,"a")};ne.prototype.wa=function(e){W(this.g,new go(e))};ne.prototype.va=function(e){W(this.g,new po(e))};ne.prototype.ua=function(){W(this.g,"b")};hn.prototype.createWebChannel=hn.prototype.g;lt.prototype.send=lt.prototype.u;lt.prototype.open=lt.prototype.m;lt.prototype.close=lt.prototype.close;En.NO_ERROR=0;En.TIMEOUT=8;En.HTTP_ERROR=6;Vr.COMPLETE="complete";Or.EventType=be;be.OPEN="a";be.CLOSE="b";be.ERROR="c";be.MESSAGE="d";K.prototype.listen=K.prototype.N;$.prototype.listenOnce=$.prototype.O;$.prototype.getLastError=$.prototype.La;$.prototype.getLastErrorCode=$.prototype.Da;$.prototype.getStatus=$.prototype.ba;$.prototype.getResponseJson=$.prototype.Qa;$.prototype.getResponseText=$.prototype.ga;$.prototype.send=$.prototype.ea;var zu=function(){return new hn},Hu=function(){return wn()},jn=En,Wu=Vr,Xu=Ft,Ri={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Qu=xe,Ge=Or,Yu=$;const Li="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ut.UNAUTHENTICATED=new ut(null),ut.GOOGLE_CREDENTIALS=new ut("google-credentials-uid"),ut.FIRST_PARTY=new ut("first-party-uid"),ut.MOCK_USER=new ut("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let se="9.6.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt=new Ea("@firebase/firestore");function xi(){return Mt.logLevel}function y(e,...t){if(Mt.logLevel<=pe.DEBUG){const n=t.map(Gs);Mt.debug(`Firestore (${se}): ${e}`,...n)}}function It(e,...t){if(Mt.logLevel<=pe.ERROR){const n=t.map(Gs);Mt.error(`Firestore (${se}): ${e}`,...n)}}function Mi(e,...t){if(Mt.logLevel<=pe.WARN){const n=t.map(Gs);Mt.warn(`Firestore (${se}): ${e}`,...n)}}function Gs(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e="Unexpected state"){const t=`FIRESTORE (${se}) INTERNAL ASSERTION FAILED: `+e;throw It(t),new Error(t)}function q(e,t){e||I()}function k(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends Sa{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Zu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(ut.UNAUTHENTICATED))}shutdown(){}}class th{constructor(t){this.t=t,this.currentUser=ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const i=u=>this.i!==s?(s=this.i,n(u)):Promise.resolve();let r=new _t;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new _t,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=r;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new _t)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(q(typeof s.accessToken=="string"),new Ju(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return q(t===null||typeof t=="string"),new ut(t)}}class eh{constructor(t,n,s){this.type="FirstParty",this.user=ut.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=t.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class nh{constructor(t,n,s){this.h=t,this.l=n,this.m=s}getToken(){return Promise.resolve(new eh(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class sh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ih{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,n){const s=r=>{r.error!=null&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.p;return this.p=r.token,y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.g.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.g.getImmediate({optional:!0});r?i(r):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(q(typeof n.token=="string"),this.p=n.token,new sh(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.I(s),this.T=s=>n.writeSequenceNumber(s))}I(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(e){const t=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zs.A=-1;class oh{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=rh(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=t.charAt(i[r]%t.length))}return s}}function D(e,t){return e<t?-1:e>t?1:0}function Te(e,t,n){return e.length===t.length&&e.every((s,i)=>n(s,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new E(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new E(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new E(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new E(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return dt.fromMillis(Date.now())}static fromDate(t){return dt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new dt(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?D(this.nanoseconds,t.nanoseconds):D(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t){this.timestamp=t}static fromTimestamp(t){return new S(t)}static min(){return new S(new dt(0,0))}static max(){return new S(new dt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function _n(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function ah(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(t,n,s){n===void 0?n=0:n>t.length&&I(),s===void 0?s=t.length-n:s>t.length-n&&I(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return Ie.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Ie?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let i=0;i<s;i++){const r=t.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class P extends Ie{construct(t,n,s){return new P(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new E(f.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new P(n)}static emptyPath(){return new P([])}}const uh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends Ie{construct(t,n,s){return new ct(t,n,s)}static isValidIdentifier(t){return uh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ct(["__name__"])}static fromServerFormat(t){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new E(f.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new E(f.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new E(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new E(f.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ct(n)}static emptyPath(){return new ct([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new Q(n)}static fromUint8Array(t){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(t);return new Q(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return D(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Q.EMPTY_BYTE_STRING=new Q("");const hh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function St(e){if(q(!!e),typeof e=="string"){let t=0;const n=hh.exec(e);if(q(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:U(e.seconds),nanos:U(e.nanos)}}function U(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Wt(e){return typeof e=="string"?Q.fromBase64String(e):Q.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function yo(e){const t=e.mapValue.fields.__previous_value__;return mo(t)?yo(t):t}function Se(e){const t=St(e.mapValue.fields.__local_write_time__.timestampValue);return new dt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(t,n,s,i,r,o,a,u){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class Xt{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Xt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Xt&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e){return e==null}function hs(e){return e===0&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(t){this.path=t}static fromPath(t){return new v(P.fromString(t))}static fromName(t){return new v(P.fromString(t).popFirst(5))}static empty(){return new v(P.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&P.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return P.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new v(new P(t.slice()))}}function Vt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?mo(e)?4:ch(e)?9:10:I()}function mt(e,t){if(e===t)return!0;const n=Vt(e);if(n!==Vt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Se(e).isEqual(Se(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=St(s.timestampValue),o=St(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return Wt(s.bytesValue).isEqual(Wt(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return U(s.geoPointValue.latitude)===U(i.geoPointValue.latitude)&&U(s.geoPointValue.longitude)===U(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return U(s.integerValue)===U(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=U(s.doubleValue),o=U(i.doubleValue);return r===o?hs(r)===hs(o):isNaN(r)&&isNaN(o)}return!1}(e,t);case 9:return Te(e.arrayValue.values||[],t.arrayValue.values||[],mt);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Vi(r)!==Vi(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!mt(r[a],o[a])))return!1;return!0}(e,t);default:return I()}}function Ce(e,t){return(e.values||[]).find(n=>mt(n,t))!==void 0}function Qt(e,t){if(e===t)return 0;const n=Vt(e),s=Vt(t);if(n!==s)return D(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return D(e.booleanValue,t.booleanValue);case 2:return function(i,r){const o=U(i.integerValue||i.doubleValue),a=U(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return Oi(e.timestampValue,t.timestampValue);case 4:return Oi(Se(e),Se(t));case 5:return D(e.stringValue,t.stringValue);case 6:return function(i,r){const o=Wt(i),a=Wt(r);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let u=0;u<o.length&&u<a.length;u++){const h=D(o[u],a[u]);if(h!==0)return h}return D(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,r){const o=D(U(i.latitude),U(r.latitude));return o!==0?o:D(U(i.longitude),U(r.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let u=0;u<o.length&&u<a.length;++u){const h=Qt(o[u],a[u]);if(h)return h}return D(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,r){const o=i.fields||{},a=Object.keys(o),u=r.fields||{},h=Object.keys(u);a.sort(),h.sort();for(let l=0;l<a.length&&l<h.length;++l){const c=D(a[l],h[l]);if(c!==0)return c;const p=Qt(o[a[l]],u[h[l]]);if(p!==0)return p}return D(a.length,h.length)}(e.mapValue,t.mapValue);default:throw I()}}function Oi(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return D(e,t);const n=St(e),s=St(t),i=D(n.seconds,s.seconds);return i!==0?i:D(n.nanos,s.nanos)}function Kt(e){return ls(e)}function ls(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const i=St(s);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Wt(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,v.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=ls(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${ls(s.fields[a])}`;return r+"}"}(e.mapValue):I();var t,n}function cs(e){return!!e&&"integerValue"in e}function Hs(e){return!!e&&"arrayValue"in e}function Pi(e){return!!e&&"nullValue"in e}function Fi(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Kn(e){return!!e&&"mapValue"in e}function fe(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return _n(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=fe(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=fe(e.arrayValue.values[n]);return t}return Object.assign({},e)}function ch(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t){this.value=t}static empty(){return new yt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Kn(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=fe(n)}setAll(t){let n=ct.emptyPath(),s={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=fe(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(t){const n=this.field(t.popLast());Kn(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return mt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=n.mapValue.fields[t.get(s)];Kn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,s){_n(n,(i,r)=>t[i]=r);for(const i of s)delete t[i]}clone(){return new yt(fe(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t,n,s,i,r,o){this.key=t,this.documentType=n,this.version=s,this.readTime=i,this.data=r,this.documentState=o}static newInvalidDocument(t){return new et(t,0,S.min(),S.min(),yt.empty(),0)}static newFoundDocument(t,n,s){return new et(t,1,n,S.min(),s,0)}static newNoDocument(t,n){return new et(t,2,n,S.min(),yt.empty(),0)}static newUnknownDocument(t,n){return new et(t,3,n,S.min(),yt.empty(),2)}convertToFoundDocument(t,n){return this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=yt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof et&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new et(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}function dh(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,i=S.fromTimestamp(s===1e9?new dt(n+1,0):new dt(n,s));return new Yt(i,v.empty(),t)}function fh(e){return new Yt(e.readTime,e.key,-1)}class Yt{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new Yt(S.min(),v.empty(),-1)}static max(){return new Yt(S.max(),v.empty(),-1)}}function gh(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=v.comparator(e.documentKey,t.documentKey),n!==0?n:D(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(t,n=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.P=null}}function Ui(e,t=null,n=[],s=[],i=null,r=null,o=null){return new ph(e,t,n,s,i,r,o)}function Ws(e){const t=k(e);if(t.P===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>{return(i=s).field.canonicalString()+i.op.toString()+Kt(i.value);var i}).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),ie(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Kt(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Kt(s)).join(",")),t.P=n}return t.P}function mh(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${Kt(s.value)}`;var s}).join(", ")}]`),ie(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>Kt(n)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>Kt(n)).join(",")),`Target(${t})`}function Xs(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!Ch(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],s=t.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!mt(n.value,s.value))return!1;var n,s;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!$i(e.startAt,t.startAt)&&$i(e.endAt,t.endAt)}function ds(e){return v.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}class ht extends class{}{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.V(t,n,s):new yh(t,n,s):n==="array-contains"?new Eh(t,s):n==="in"?new Th(t,s):n==="not-in"?new Ih(t,s):n==="array-contains-any"?new Sh(t,s):new ht(t,n,s)}static V(t,n,s){return n==="in"?new vh(t,s):new wh(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.v(Qt(n,this.value)):n!==null&&Vt(this.value)===Vt(n)&&this.v(Qt(n,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return I()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class yh extends ht{constructor(t,n,s){super(t,n,s),this.key=v.fromName(s.referenceValue)}matches(t){const n=v.comparator(t.key,this.key);return this.v(n)}}class vh extends ht{constructor(t,n){super(t,"in",n),this.keys=vo("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class wh extends ht{constructor(t,n){super(t,"not-in",n),this.keys=vo("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function vo(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>v.fromName(s.referenceValue))}class Eh extends ht{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Hs(n)&&Ce(n.arrayValue,this.value)}}class Th extends ht{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Ce(this.value.arrayValue,n)}}class Ih extends ht{constructor(t,n){super(t,"not-in",n)}matches(t){if(Ce(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Ce(this.value.arrayValue,n)}}class Sh extends ht{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Hs(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ce(this.value.arrayValue,s))}}class ln{constructor(t,n){this.position=t,this.inclusive=n}}class ge{constructor(t,n="asc"){this.field=t,this.dir=n}}function Ch(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function qi(e,t,n){let s=0;for(let i=0;i<e.position.length;i++){const r=t[i],o=e.position[i];if(r.field.isKeyField()?s=v.comparator(v.fromName(o.referenceValue),n.key):s=Qt(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function $i(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!mt(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(t,n=null,s=[],i=[],r=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=u,this.D=null,this.C=null,this.startAt,this.endAt}}function Ah(e,t,n,s,i,r,o,a){return new Dn(e,t,n,s,i,r,o,a)}function wo(e){return new Dn(e)}function We(e){return!ie(e.limit)&&e.limitType==="F"}function cn(e){return!ie(e.limit)&&e.limitType==="L"}function kh(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Nh(e){for(const t of e.filters)if(t.S())return t.field;return null}function _h(e){return e.collectionGroup!==null}function Ae(e){const t=k(e);if(t.D===null){t.D=[];const n=Nh(t),s=kh(t);if(n!==null&&s===null)n.isKeyField()||t.D.push(new ge(n)),t.D.push(new ge(ct.keyField(),"asc"));else{let i=!1;for(const r of t.explicitOrderBy)t.D.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.D.push(new ge(ct.keyField(),r))}}}return t.D}function Ot(e){const t=k(e);if(!t.C)if(t.limitType==="F")t.C=Ui(t.path,t.collectionGroup,Ae(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const r of Ae(t)){const o=r.dir==="desc"?"asc":"desc";n.push(new ge(r.field,o))}const s=t.endAt?new ln(t.endAt.position,!t.endAt.inclusive):null,i=t.startAt?new ln(t.startAt.position,!t.startAt.inclusive):null;t.C=Ui(t.path,t.collectionGroup,n,t.filters,t.limit,s,i)}return t.C}function Dh(e,t,n){return new Dn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function bn(e,t){return Xs(Ot(e),Ot(t))&&e.limitType===t.limitType}function Eo(e){return`${Ws(Ot(e))}|lt:${e.limitType}`}function fs(e){return`Query(target=${mh(Ot(e))}; limitType=${e.limitType})`}function Qs(e,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):v.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=qi(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,Ae(n),s)||n.endAt&&!function(i,r,o){const a=qi(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,Ae(n),s))}(e,t)}function bh(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function To(e){return(t,n)=>{let s=!1;for(const i of Ae(e)){const r=Rh(i,t,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Rh(e,t,n){const s=e.field.isKeyField()?v.comparator(t.key,n.key):function(i,r,o){const a=r.data.field(i),u=o.data.field(i);return a!==null&&u!==null?Qt(a,u):I()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return I()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh(e,t){if(e.N){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:hs(t)?"-0":t}}function xh(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(){this._=void 0}}function Mh(e,t,n){return e instanceof gs?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,t):e instanceof dn?Io(e,t):e instanceof fn?So(e,t):function(s,i){const r=Oh(s,i),o=Bi(r)+Bi(s.k);return cs(r)&&cs(s.k)?xh(o):Lh(s.M,o)}(e,t)}function Vh(e,t,n){return e instanceof dn?Io(e,t):e instanceof fn?So(e,t):n}function Oh(e,t){return e instanceof ps?cs(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class gs extends Rn{}class dn extends Rn{constructor(t){super(),this.elements=t}}function Io(e,t){const n=Co(t);for(const s of e.elements)n.some(i=>mt(i,s))||n.push(s);return{arrayValue:{values:n}}}class fn extends Rn{constructor(t){super(),this.elements=t}}function So(e,t){let n=Co(t);for(const s of e.elements)n=n.filter(i=>!mt(i,s));return{arrayValue:{values:n}}}class ps extends Rn{constructor(t,n){super(),this.M=t,this.k=n}}function Bi(e){return U(e.integerValue||e.doubleValue)}function Co(e){return Hs(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Ph(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof dn&&s instanceof dn||n instanceof fn&&s instanceof fn?Te(n.elements,s.elements,mt):n instanceof ps&&s instanceof ps?mt(n.k,s.k):n instanceof gs&&s instanceof gs}(e.transform,t.transform)}function Xe(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Ao{}function Fh(e,t,n){e instanceof ko?function(s,i,r){const o=s.value.clone(),a=Gi(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(e,t,n):e instanceof No?function(s,i,r){if(!Xe(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Gi(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(_o(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(e,t,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,n)}function ms(e,t,n){e instanceof ko?function(s,i,r){if(!Xe(s.precondition,i))return;const o=s.value.clone(),a=zi(s.fieldTransforms,r,i);o.setAll(a),i.convertToFoundDocument(Ki(i),o).setHasLocalMutations()}(e,t,n):e instanceof No?function(s,i,r){if(!Xe(s.precondition,i))return;const o=zi(s.fieldTransforms,r,i),a=i.data;a.setAll(_o(s)),a.setAll(o),i.convertToFoundDocument(Ki(i),a).setHasLocalMutations()}(e,t,n):function(s,i){Xe(s.precondition,i)&&i.convertToNoDocument(S.min())}(e,t)}function ji(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Te(n,s,(i,r)=>Ph(i,r))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function Ki(e){return e.isFoundDocument()?e.version:S.min()}class ko extends Ao{constructor(t,n,s,i=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}}class No extends Ao{constructor(t,n,s,i,r=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}}function _o(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function Gi(e,t,n){const s=new Map;q(e.length===n.length);for(let i=0;i<n.length;i++){const r=e[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,Vh(o,a,n[i]))}return s}function zi(e,t,n){const s=new Map;for(const i of e){const r=i.transform,o=n.data.field(i.field);s.set(i.field,Mh(r,o,t))}return s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(t){this.count=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F,C;function Do(e){if(e===void 0)return It("GRPC error has no .code"),f.UNKNOWN;switch(e){case F.OK:return f.OK;case F.CANCELLED:return f.CANCELLED;case F.UNKNOWN:return f.UNKNOWN;case F.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case F.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case F.INTERNAL:return f.INTERNAL;case F.UNAVAILABLE:return f.UNAVAILABLE;case F.UNAUTHENTICATED:return f.UNAUTHENTICATED;case F.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case F.NOT_FOUND:return f.NOT_FOUND;case F.ALREADY_EXISTS:return f.ALREADY_EXISTS;case F.PERMISSION_DENIED:return f.PERMISSION_DENIED;case F.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case F.ABORTED:return f.ABORTED;case F.OUT_OF_RANGE:return f.OUT_OF_RANGE;case F.UNIMPLEMENTED:return f.UNIMPLEMENTED;case F.DATA_LOSS:return f.DATA_LOSS;default:return I()}}(C=F||(F={}))[C.OK=0]="OK",C[C.CANCELLED=1]="CANCELLED",C[C.UNKNOWN=2]="UNKNOWN",C[C.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",C[C.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",C[C.NOT_FOUND=5]="NOT_FOUND",C[C.ALREADY_EXISTS=6]="ALREADY_EXISTS",C[C.PERMISSION_DENIED=7]="PERMISSION_DENIED",C[C.UNAUTHENTICATED=16]="UNAUTHENTICATED",C[C.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",C[C.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",C[C.ABORTED=10]="ABORTED",C[C.OUT_OF_RANGE=11]="OUT_OF_RANGE",C[C.UNIMPLEMENTED=12]="UNIMPLEMENTED",C[C.INTERNAL=13]="INTERNAL",C[C.UNAVAILABLE=14]="UNAVAILABLE",C[C.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),i=this.inner[s];if(i===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(t){_n(this.inner,(n,s)=>{for(const[i,r]of s)t(i,r)})}isEmpty(){return ah(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,n){this.comparator=t,this.root=n||z.EMPTY}insert(t,n){return new Y(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,z.BLACK,null,null))}remove(t){return new Y(this.comparator,this.root.remove(t,this.comparator).copy(null,null,z.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ze(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ze(this.root,t,this.comparator,!1)}getReverseIterator(){return new ze(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ze(this.root,t,this.comparator,!0)}}class ze{constructor(t,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=n?s(t.key,n):1,n&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class z{constructor(t,n,s,i,r){this.key=t,this.value=n,this.color=s!=null?s:z.RED,this.left=i!=null?i:z.EMPTY,this.right=r!=null?r:z.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,i,r){return new z(t!=null?t:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return z.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return z.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,z.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,z.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw I();const t=this.left.check();if(t!==this.right.check())throw I();return t+(this.isRed()?0:1)}}z.EMPTY=null,z.RED=!0,z.BLACK=!1;z.EMPTY=new class{constructor(){this.size=0}get key(){throw I()}get value(){throw I()}get color(){throw I()}get left(){throw I()}get right(){throw I()}copy(e,t,n,s,i){return this}insert(e,t,n){return new z(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t){this.comparator=t,this.data=new Y(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Hi(this.data.getIterator())}getIteratorFrom(t){return new Hi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof X)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new X(this.comparator);return n.data=t,n}}class Hi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh=new Y(v.comparator);function Pt(){return qh}const $h=new Y(v.comparator);function ys(){return $h}function Gn(){return new re(e=>e.toString(),(e,t)=>e.isEqual(t))}new Y(v.comparator);const Bh=new X(v.comparator);function O(...e){let t=Bh;for(const n of e)t=t.add(n);return t}const jh=new X(D);function bo(){return jh}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(t,n,s,i,r){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,n){const s=new Map;return s.set(t,Oe.createSynthesizedTargetChangeForCurrentChange(t,n)),new Ln(S.min(),s,bo(),Pt(),O())}}class Oe{constructor(t,n,s,i,r){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,n){return new Oe(Q.EMPTY_BYTE_STRING,n,O(),O(),O())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(t,n,s,i){this.O=t,this.removedTargetIds=n,this.key=s,this.F=i}}class Ro{constructor(t,n){this.targetId=t,this.$=n}}class Lo{constructor(t,n,s=Q.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Wi{constructor(){this.B=0,this.L=Qi(),this.U=Q.EMPTY_BYTE_STRING,this.q=!1,this.G=!0}get current(){return this.q}get resumeToken(){return this.U}get K(){return this.B!==0}get j(){return this.G}W(t){t.approximateByteSize()>0&&(this.G=!0,this.U=t)}H(){let t=O(),n=O(),s=O();return this.L.forEach((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:I()}}),new Oe(this.U,this.q,t,n,s)}J(){this.G=!1,this.L=Qi()}Y(t,n){this.G=!0,this.L=this.L.insert(t,n)}X(t){this.G=!0,this.L=this.L.remove(t)}Z(){this.B+=1}tt(){this.B-=1}et(){this.G=!0,this.q=!0}}class Kh{constructor(t){this.nt=t,this.st=new Map,this.it=Pt(),this.rt=Xi(),this.ot=new X(D)}ut(t){for(const n of t.O)t.F&&t.F.isFoundDocument()?this.at(n,t.F):this.ct(n,t.key,t.F);for(const n of t.removedTargetIds)this.ct(n,t.key,t.F)}ht(t){this.forEachTarget(t,n=>{const s=this.lt(n);switch(t.state){case 0:this.ft(n)&&s.W(t.resumeToken);break;case 1:s.tt(),s.K||s.J(),s.W(t.resumeToken);break;case 2:s.tt(),s.K||this.removeTarget(n);break;case 3:this.ft(n)&&(s.et(),s.W(t.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),s.W(t.resumeToken));break;default:I()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.st.forEach((s,i)=>{this.ft(i)&&n(i)})}_t(t){const n=t.targetId,s=t.$.count,i=this.wt(n);if(i){const r=i.target;if(ds(r))if(s===0){const o=new v(r.path);this.ct(n,o,et.newNoDocument(o,S.min()))}else q(s===1);else this.gt(n)!==s&&(this.dt(n),this.ot=this.ot.add(n))}}yt(t){const n=new Map;this.st.forEach((r,o)=>{const a=this.wt(o);if(a){if(r.current&&ds(a.target)){const u=new v(a.target.path);this.it.get(u)!==null||this.It(o,u)||this.ct(o,u,et.newNoDocument(u,t))}r.j&&(n.set(o,r.H()),r.J())}});let s=O();this.rt.forEach((r,o)=>{let a=!0;o.forEachWhile(u=>{const h=this.wt(u);return!h||h.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.it.forEach((r,o)=>o.setReadTime(t));const i=new Ln(t,n,this.ot,this.it,s);return this.it=Pt(),this.rt=Xi(),this.ot=new X(D),i}at(t,n){if(!this.ft(t))return;const s=this.It(t,n.key)?2:0;this.lt(t).Y(n.key,s),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Tt(n.key).add(t))}ct(t,n,s){if(!this.ft(t))return;const i=this.lt(t);this.It(t,n)?i.Y(n,1):i.X(n),this.rt=this.rt.insert(n,this.Tt(n).delete(t)),s&&(this.it=this.it.insert(n,s))}removeTarget(t){this.st.delete(t)}gt(t){const n=this.lt(t).H();return this.nt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Z(t){this.lt(t).Z()}lt(t){let n=this.st.get(t);return n||(n=new Wi,this.st.set(t,n)),n}Tt(t){let n=this.rt.get(t);return n||(n=new X(D),this.rt=this.rt.insert(t,n)),n}ft(t){const n=this.wt(t)!==null;return n||y("WatchChangeAggregator","Detected inactive target",t),n}wt(t){const n=this.st.get(t);return n&&n.K?null:this.nt.Et(t)}dt(t){this.st.set(t,new Wi),this.nt.getRemoteKeysForTarget(t).forEach(n=>{this.ct(t,n,null)})}It(t,n){return this.nt.getRemoteKeysForTarget(t).has(n)}}function Xi(){return new Y(v.comparator)}function Qi(){return new Y(v.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),zh=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Hh{constructor(t,n){this.databaseId=t,this.N=n}}function Wh(e,t){return e.N?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Xh(e,t){return e.N?t.toBase64():t.toUint8Array()}function ke(e){return q(!!e),S.fromTimestamp(function(t){const n=St(t);return new dt(n.seconds,n.nanos)}(e))}function Qh(e,t){return function(n){return new P(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function xo(e){const t=P.fromString(e);return q(Oo(t)),t}function zn(e,t){const n=xo(t);if(n.get(1)!==e.databaseId.projectId)throw new E(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new E(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new v(Mo(n))}function vs(e,t){return Qh(e.databaseId,t)}function Yh(e){const t=xo(e);return t.length===4?P.emptyPath():Mo(t)}function Yi(e){return new P(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Mo(e){return q(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Jh(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:I()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],r=function(u,h){return u.N?(q(h===void 0||typeof h=="string"),Q.fromBase64String(h||"")):(q(h===void 0||h instanceof Uint8Array),Q.fromUint8Array(h||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const h=u.code===void 0?f.UNKNOWN:Do(u.code);return new E(h,u.message||"")}(o);n=new Lo(s,i,r,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const i=zn(e,s.document.name),r=ke(s.document.updateTime),o=new yt({mapValue:{fields:s.document.fields}}),a=et.newFoundDocument(i,r,o),u=s.targetIds||[],h=s.removedTargetIds||[];n=new Qe(u,h,a.key,a)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const i=zn(e,s.document),r=s.readTime?ke(s.readTime):S.min(),o=et.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Qe([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const i=zn(e,s.document),r=s.removedTargetIds||[];n=new Qe([],r,i,null)}else{if(!("filter"in t))return I();{t.filter;const s=t.filter;s.targetId;const i=s.count||0,r=new Uh(i),o=s.targetId;n=new Ro(o,r)}}return n}function Zh(e,t){return{documents:[vs(e,t.path)]}}function tl(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=vs(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=vs(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(u){if(u.length===0)return;const h=u.map(l=>function(c){if(c.op==="=="){if(Fi(c.value))return{unaryFilter:{field:$t(c.field),op:"IS_NAN"}};if(Pi(c.value))return{unaryFilter:{field:$t(c.field),op:"IS_NULL"}}}else if(c.op==="!="){if(Fi(c.value))return{unaryFilter:{field:$t(c.field),op:"IS_NOT_NAN"}};if(Pi(c.value))return{unaryFilter:{field:$t(c.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$t(c.field),op:il(c.op),value:c.value}}}(l));return h.length===1?h[0]:{compositeFilter:{op:"AND",filters:h}}}(t.filters);i&&(n.structuredQuery.where=i);const r=function(u){if(u.length!==0)return u.map(h=>function(l){return{field:$t(l.field),direction:sl(l.dir)}}(h))}(t.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(u,h){return u.N||ie(h)?h:{value:h}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),n}function el(e){let t=Yh(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){q(s===1);const l=n.from[0];l.allDescendants?i=l.collectionId:t=t.child(l.collectionId)}let r=[];n.where&&(r=Vo(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(c){return new ge(jt(c.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(c.direction))}(l)));let a=null;n.limit&&(a=function(l){let c;return c=typeof l=="object"?l.value:l,ie(c)?null:c}(n.limit));let u=null;n.startAt&&(u=function(l){const c=!!l.before,p=l.values||[];return new ln(p,c)}(n.startAt));let h=null;return n.endAt&&(h=function(l){const c=!l.before,p=l.values||[];return new ln(p,c)}(n.endAt)),Ah(t,i,o,r,a,"F",u,h)}function nl(e,t){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return I()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function Vo(e){return e?e.unaryFilter!==void 0?[ol(e)]:e.fieldFilter!==void 0?[rl(e)]:e.compositeFilter!==void 0?e.compositeFilter.filters.map(t=>Vo(t)).reduce((t,n)=>t.concat(n)):I():[]}function sl(e){return Gh[e]}function il(e){return zh[e]}function $t(e){return{fieldPath:e.canonicalString()}}function jt(e){return ct.fromServerFormat(e.fieldPath)}function rl(e){return ht.create(jt(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return I()}}(e.fieldFilter.op),e.fieldFilter.value)}function ol(e){switch(e.unaryFilter.op){case"IS_NAN":const t=jt(e.unaryFilter.field);return ht.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=jt(e.unaryFilter.field);return ht.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=jt(e.unaryFilter.field);return ht.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=jt(e.unaryFilter.field);return ht.create(i,"!=",{nullValue:"NULL_VALUE"});default:return I()}}function Oo(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ul{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&I(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new d((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof d?n:d.resolve(n)}catch(n){return d.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):d.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):d.reject(n)}static resolve(t){return new d((n,s)=>{n(t)})}static reject(t){return new d((n,s)=>{s(t)})}static waitFor(t){return new d((n,s)=>{let i=0,r=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},u=>s(u))}),o=!0,r===i&&n()})}static or(t){let n=d.resolve(!1);for(const s of t)n=n.next(i=>i?d.resolve(i):s());return n}static forEach(t,n){const s=[];return t.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}}function Pe(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(t,n,s,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&Fh(r,t,s[i])}}applyToLocalView(t){for(const n of this.baseMutations)n.key.isEqual(t.key)&&ms(n,t,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(t.key)&&ms(n,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(n=>{const s=t.get(n.key),i=s;this.applyToLocalView(i),s.isValidDocument()||i.convertToNoDocument(S.min())})}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),O())}isEqual(t){return this.batchId===t.batchId&&Te(this.mutations,t.mutations,(n,s)=>ji(n,s))&&Te(this.baseMutations,t.baseMutations,(n,s)=>ji(n,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(t,n,s,i,r=S.min(),o=S.min(),a=Q.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new Dt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new Dt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Dt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(t){this.Jt=t}}function dl(e){const t=el({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Dh(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(){this.qe=new gl}addToCollectionParentIndex(t,n){return this.qe.add(n),d.resolve()}getCollectionParents(t,n){return d.resolve(this.qe.getEntries(n))}addFieldIndex(t,n){return d.resolve()}deleteFieldIndex(t,n){return d.resolve()}getDocumentsMatchingTarget(t,n){return d.resolve(null)}getFieldIndex(t,n){return d.resolve(null)}getFieldIndexes(t,n){return d.resolve([])}getNextCollectionGroupToUpdate(t){return d.resolve(null)}updateCollectionGroup(t,n,s){return d.resolve()}updateIndexEntries(t,n){return d.resolve()}}class gl{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n]||new X(P.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(t){return(this.index[t]||new X(P.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(t){this.wn=t}next(){return this.wn+=2,this.wn}static mn(){return new Jt(0)}static gn(){return new Jt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ys(e){if(e.code!==f.FAILED_PRECONDITION||e.message!==al)throw e;y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(){this.changes=new re(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,et.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?d.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(t,n,s){this.fs=t,this.$s=n,this.indexManager=s}Bs(t,n){return this.$s.getAllMutationBatchesAffectingDocumentKey(t,n).next(s=>this.Ls(t,n,s))}Ls(t,n,s){return this.fs.getEntry(t,n).next(i=>{for(const r of s)r.applyToLocalView(i);return i})}Us(t,n){t.forEach((s,i)=>{for(const r of n)r.applyToLocalView(i)})}qs(t,n){return this.fs.getEntries(t,n).next(s=>this.Gs(t,s).next(()=>s))}Gs(t,n){return this.$s.getAllMutationBatchesAffectingDocumentKeys(t,n).next(s=>this.Us(n,s))}Ks(t,n,s){return function(i){return v.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.Qs(t,n.path):_h(n)?this.js(t,n,s):this.Ws(t,n,s)}Qs(t,n){return this.Bs(t,new v(n)).next(s=>{let i=ys();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}js(t,n,s){const i=n.collectionGroup;let r=ys();return this.indexManager.getCollectionParents(t,i).next(o=>d.forEach(o,a=>{const u=function(h,l){return new Dn(l,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,a.child(i));return this.Ws(t,u,s).next(h=>{h.forEach((l,c)=>{r=r.insert(l,c)})})}).next(()=>r))}Ws(t,n,s){let i;return this.fs.getAllFromCollection(t,n.path,s).next(r=>(i=r,this.$s.getAllMutationBatchesAffectingQuery(t,n))).next(r=>{for(const o of r)for(const a of o.mutations){const u=a.key;let h=i.get(u);h==null&&(h=et.newInvalidDocument(u),i=i.insert(u,h)),ms(a,h,o.localWriteTime),h.isFoundDocument()||(i=i.remove(u))}}).next(()=>(i.forEach((r,o)=>{Qs(n,o)||(i=i.remove(r))}),i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(t,n,s,i){this.targetId=t,this.fromCache=n,this.zs=s,this.Hs=i}static Js(t,n){let s=O(),i=O();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Js(t,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{Ys(t){this.Xs=t}Ks(t,n,s,i){return function(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}(n)||s.isEqual(S.min())?this.Zs(t,n):this.Xs.qs(t,i).next(r=>{const o=this.ti(n,r);return(We(n)||cn(n))&&this.ei(n.limitType,o,i,s)?this.Zs(t,n):(xi()<=pe.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),fs(n)),this.Xs.Ks(t,n,dh(s,-1)).next(a=>(o.forEach(u=>{a=a.insert(u.key,u)}),a)))})}ti(t,n){let s=new X(To(t));return n.forEach((i,r)=>{Qs(t,r)&&(s=s.add(r))}),s}ei(t,n,s,i){if(s.size!==n.size)return!0;const r=t==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Zs(t,n){return xi()<=pe.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",fs(n)),this.Xs.Ks(t,n,Yt.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(t,n,s,i){this.persistence=t,this.ni=n,this.M=i,this.si=new Y(D),this.ii=new re(r=>Ws(r),Xs),this.ri=new Map,this.oi=t.getRemoteDocumentCache(),this.ls=t.getTargetCache(),this.ds=t.getBundleCache(),this.ui(s)}ui(t){this.indexManager=this.persistence.getIndexManager(t),this.$s=this.persistence.getMutationQueue(t,this.indexManager),this.ai=new ml(this.oi,this.$s,this.indexManager),this.oi.setIndexManager(this.indexManager),this.ni.Ys(this.ai)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.si))}}function wl(e,t,n,s){return new vl(e,t,n,s)}async function Po(e,t){const n=k(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.$s.getAllMutationBatches(s).next(r=>(i=r,n.ui(t),n.$s.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let u=O();for(const h of i){o.push(h.batchId);for(const l of h.mutations)u=u.add(l.key)}for(const h of r){a.push(h.batchId);for(const l of h.mutations)u=u.add(l.key)}return n.ai.qs(s,u).next(h=>({ci:h,removedBatchIds:o,addedBatchIds:a}))})})}function Fo(e){const t=k(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.ls.getLastRemoteSnapshotVersion(n))}function El(e,t){const n=k(e),s=t.snapshotVersion;let i=n.si;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.oi.newChangeBuffer({trackRemovals:!0});i=n.si;const a=[];t.targetChanges.forEach((h,l)=>{const c=i.get(l);if(!c)return;a.push(n.ls.removeMatchingKeys(r,h.removedDocuments,l).next(()=>n.ls.addMatchingKeys(r,h.addedDocuments,l)));let p=c.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.has(l)?p=p.withResumeToken(Q.EMPTY_BYTE_STRING,S.min()).withLastLimboFreeSnapshotVersion(S.min()):h.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(h.resumeToken,s)),i=i.insert(l,p),function(m,w,R){return m.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:R.addedDocuments.size+R.modifiedDocuments.size+R.removedDocuments.size>0}(c,p,h)&&a.push(n.ls.updateTargetData(r,p))});let u=Pt();if(t.documentUpdates.forEach(h=>{t.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,h))}),a.push(Tl(r,o,t.documentUpdates).next(h=>{u=h})),!s.isEqual(S.min())){const h=n.ls.getLastRemoteSnapshotVersion(r).next(l=>n.ls.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(h)}return d.waitFor(a).next(()=>o.apply(r)).next(()=>n.ai.Gs(r,u)).next(()=>u)}).then(r=>(n.si=i,r))}function Tl(e,t,n){let s=O();return n.forEach(i=>s=s.add(i)),t.getEntries(e,s).next(i=>{let r=Pt();return n.forEach((o,a)=>{const u=i.get(o);a.isNoDocument()&&a.version.isEqual(S.min())?(t.removeEntry(o,a.readTime),r=r.insert(o,a)):!u.isValidDocument()||a.version.compareTo(u.version)>0||a.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(a),r=r.insert(o,a)):y("LocalStore","Ignoring outdated watch update for ",o,". Current version:",u.version," Watch version:",a.version)}),r})}function Il(e,t){const n=k(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.ls.getTargetData(s,t).next(r=>r?(i=r,d.resolve(i)):n.ls.allocateTargetId(s).next(o=>(i=new Dt(t,o,0,s.currentSequenceNumber),n.ls.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.si.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.si=n.si.insert(s.targetId,s),n.ii.set(t,s.targetId)),s})}async function ws(e,t,n){const s=k(e),i=s.si.get(t),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Pe(o))throw o;y("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.si=s.si.remove(t),s.ii.delete(i.target)}function Ji(e,t,n){const s=k(e);let i=S.min(),r=O();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,u,h){const l=k(a),c=l.ii.get(h);return c!==void 0?d.resolve(l.si.get(c)):l.ls.getTargetData(u,h)}(s,o,Ot(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.ls.getMatchingKeysForTargetId(o,a.targetId).next(u=>{r=u})}).next(()=>s.ni.Ks(o,t,n?i:S.min(),n?r:O())).next(a=>(Sl(s,bh(t),a),{documents:a,hi:r})))}function Sl(e,t,n){let s=S.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),e.ri.set(t,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(t){this.M=t,this._i=new Map,this.wi=new Map}getBundleMetadata(t,n){return d.resolve(this._i.get(n))}saveBundleMetadata(t,n){var s;return this._i.set(n.id,{id:(s=n).id,version:s.version,createTime:ke(s.createTime)}),d.resolve()}getNamedQuery(t,n){return d.resolve(this.wi.get(n))}saveNamedQuery(t,n){return this.wi.set(n.name,function(s){return{name:s.name,query:dl(s.bundledQuery),readTime:ke(s.readTime)}}(n)),d.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(){this.overlays=new Y(v.comparator),this.mi=new Map}getOverlay(t,n){return d.resolve(this.overlays.get(n))}saveOverlays(t,n,s){return s.forEach((i,r)=>{this.Xt(t,n,r)}),d.resolve()}removeOverlaysForBatchId(t,n,s){const i=this.mi.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.mi.delete(s)),d.resolve()}getOverlaysForCollection(t,n,s){const i=Gn(),r=n.length+1,o=new v(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===r&&u.largestBatchId>s&&i.set(u.getKey(),u)}return d.resolve(i)}getOverlaysForCollectionGroup(t,n,s,i){let r=new Y((h,l)=>h-l);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>s){let l=r.get(h.largestBatchId);l===null&&(l=Gn(),r=r.insert(h.largestBatchId,l)),l.set(h.getKey(),h)}}const a=Gn(),u=r.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,l)=>a.set(h,l)),!(a.size()>=i)););return d.resolve(a)}Xt(t,n,s){if(s===null)return;const i=this.overlays.get(s.key);if(i!==null){const o=this.mi.get(i.largestBatchId).delete(s.key);this.mi.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new ll(n,s));let r=this.mi.get(n);r===void 0&&(r=O(),this.mi.set(n,r)),this.mi.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(){this.gi=new X(j.yi),this.pi=new X(j.Ii)}isEmpty(){return this.gi.isEmpty()}addReference(t,n){const s=new j(t,n);this.gi=this.gi.add(s),this.pi=this.pi.add(s)}Ti(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.Ei(new j(t,n))}Ai(t,n){t.forEach(s=>this.removeReference(s,n))}Ri(t){const n=new v(new P([])),s=new j(n,t),i=new j(n,t+1),r=[];return this.pi.forEachInRange([s,i],o=>{this.Ei(o),r.push(o.key)}),r}bi(){this.gi.forEach(t=>this.Ei(t))}Ei(t){this.gi=this.gi.delete(t),this.pi=this.pi.delete(t)}Pi(t){const n=new v(new P([])),s=new j(n,t),i=new j(n,t+1);let r=O();return this.pi.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(t){const n=new j(t,0),s=this.gi.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class j{constructor(t,n){this.key=t,this.Vi=n}static yi(t,n){return v.comparator(t.key,n.key)||D(t.Vi,n.Vi)}static Ii(t,n){return D(t.Vi,n.Vi)||v.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.$s=[],this.vi=1,this.Si=new X(j.yi)}checkEmpty(t){return d.resolve(this.$s.length===0)}addMutationBatch(t,n,s,i){const r=this.vi;this.vi++,this.$s.length>0&&this.$s[this.$s.length-1];const o=new hl(r,n,s,i);this.$s.push(o);for(const a of i)this.Si=this.Si.add(new j(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return d.resolve(o)}lookupMutationBatch(t,n){return d.resolve(this.Di(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,i=this.Ci(s),r=i<0?0:i;return d.resolve(this.$s.length>r?this.$s[r]:null)}getHighestUnacknowledgedBatchId(){return d.resolve(this.$s.length===0?-1:this.vi-1)}getAllMutationBatches(t){return d.resolve(this.$s.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new j(n,0),i=new j(n,Number.POSITIVE_INFINITY),r=[];return this.Si.forEachInRange([s,i],o=>{const a=this.Di(o.Vi);r.push(a)}),d.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new X(D);return n.forEach(i=>{const r=new j(i,0),o=new j(i,Number.POSITIVE_INFINITY);this.Si.forEachInRange([r,o],a=>{s=s.add(a.Vi)})}),d.resolve(this.xi(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,i=s.length+1;let r=s;v.isDocumentKey(r)||(r=r.child(""));const o=new j(new v(r),0);let a=new X(D);return this.Si.forEachWhile(u=>{const h=u.key.path;return!!s.isPrefixOf(h)&&(h.length===i&&(a=a.add(u.Vi)),!0)},o),d.resolve(this.xi(a))}xi(t){const n=[];return t.forEach(s=>{const i=this.Di(s);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){q(this.Ni(n.batchId,"removed")===0),this.$s.shift();let s=this.Si;return d.forEach(n.mutations,i=>{const r=new j(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Si=s})}dn(t){}containsKey(t,n){const s=new j(n,0),i=this.Si.firstAfterOrEqual(s);return d.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.$s.length,d.resolve()}Ni(t,n){return this.Ci(t)}Ci(t){return this.$s.length===0?0:t-this.$s[0].batchId}Di(t){const n=this.Ci(t);return n<0||n>=this.$s.length?null:this.$s[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(t){this.ki=t,this.docs=new Y(v.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.ki(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return d.resolve(s?s.document.mutableCopy():et.newInvalidDocument(n))}getEntries(t,n){let s=Pt();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():et.newInvalidDocument(i))}),d.resolve(s)}getAllFromCollection(t,n,s){let i=Pt();const r=new v(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:u}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||gh(fh(u),s)<=0||(i=i.insert(u.key,u.mutableCopy()))}return d.resolve(i)}getAllFromCollectionGroup(t,n,s,i){I()}Mi(t,n){return d.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new _l(this)}getSize(t){return d.resolve(this.size)}}class _l extends pl{constructor(t){super(),this.qn=t}applyChanges(t){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.qn.addEntry(t,i)):this.qn.removeEntry(s)}),d.waitFor(n)}getFromCache(t,n){return this.qn.getEntry(t,n)}getAllFromCache(t,n){return this.qn.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(t){this.persistence=t,this.Oi=new re(n=>Ws(n),Xs),this.lastRemoteSnapshotVersion=S.min(),this.highestTargetId=0,this.Fi=0,this.$i=new Zs,this.targetCount=0,this.Bi=Jt.mn()}forEachTarget(t,n){return this.Oi.forEach((s,i)=>n(i)),d.resolve()}getLastRemoteSnapshotVersion(t){return d.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return d.resolve(this.Fi)}allocateTargetId(t){return this.highestTargetId=this.Bi.next(),d.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Fi&&(this.Fi=n),d.resolve()}In(t){this.Oi.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Bi=new Jt(n),this.highestTargetId=n),t.sequenceNumber>this.Fi&&(this.Fi=t.sequenceNumber)}addTargetData(t,n){return this.In(n),this.targetCount+=1,d.resolve()}updateTargetData(t,n){return this.In(n),d.resolve()}removeTargetData(t,n){return this.Oi.delete(n.target),this.$i.Ri(n.targetId),this.targetCount-=1,d.resolve()}removeTargets(t,n,s){let i=0;const r=[];return this.Oi.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Oi.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),d.waitFor(r).next(()=>i)}getTargetCount(t){return d.resolve(this.targetCount)}getTargetData(t,n){const s=this.Oi.get(n)||null;return d.resolve(s)}addMatchingKeys(t,n,s){return this.$i.Ti(n,s),d.resolve()}removeMatchingKeys(t,n,s){this.$i.Ai(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(t,o))}),d.waitFor(r)}removeMatchingKeysForTargetId(t,n){return this.$i.Ri(n),d.resolve()}getMatchingKeysForTargetId(t,n){const s=this.$i.Pi(n);return d.resolve(s)}containsKey(t,n){return d.resolve(this.$i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(t,n){this.Li={},this.overlays={},this.ts=new zs(0),this.es=!1,this.es=!0,this.referenceDelegate=t(this),this.ls=new Dl(this),this.indexManager=new fl,this.fs=function(s){return new Nl(s)}(s=>this.referenceDelegate.Ui(s)),this.M=new cl(n),this.ds=new Cl(this.M)}start(){return Promise.resolve()}shutdown(){return this.es=!1,Promise.resolve()}get started(){return this.es}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Al,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Li[t.toKey()];return s||(s=new kl(n,this.referenceDelegate),this.Li[t.toKey()]=s),s}getTargetCache(){return this.ls}getRemoteDocumentCache(){return this.fs}getBundleCache(){return this.ds}runTransaction(t,n,s){y("MemoryPersistence","Starting transaction:",t);const i=new Rl(this.ts.next());return this.referenceDelegate.qi(),s(i).next(r=>this.referenceDelegate.Gi(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ki(t,n){return d.or(Object.values(this.Li).map(s=>()=>s.containsKey(t,n)))}}class Rl extends ul{constructor(t){super(),this.currentSequenceNumber=t}}class ti{constructor(t){this.persistence=t,this.Qi=new Zs,this.ji=null}static Wi(t){return new ti(t)}get zi(){if(this.ji)return this.ji;throw I()}addReference(t,n,s){return this.Qi.addReference(s,n),this.zi.delete(s.toString()),d.resolve()}removeReference(t,n,s){return this.Qi.removeReference(s,n),this.zi.add(s.toString()),d.resolve()}markPotentiallyOrphaned(t,n){return this.zi.add(n.toString()),d.resolve()}removeTarget(t,n){this.Qi.Ri(n.targetId).forEach(i=>this.zi.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(r=>this.zi.add(r.toString()))}).next(()=>s.removeTargetData(t,n))}qi(){this.ji=new Set}Gi(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return d.forEach(this.zi,s=>{const i=v.fromPath(s);return this.Hi(t,i).next(r=>{r||n.removeEntry(i,S.min())})}).next(()=>(this.ji=null,n.apply(t)))}updateLimboDocument(t,n){return this.Hi(t,n).next(s=>{s?this.zi.delete(n.toString()):this.zi.add(n.toString())})}Ui(t){return 0}Hi(t,n){return d.or([()=>d.resolve(this.Qi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ki(t,n)])}}class Zi{constructor(){this.activeTargetIds=bo()}Xi(t){this.activeTargetIds=this.activeTargetIds.add(t)}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Ll{constructor(){this.Fr=new Zi,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Fr.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,n,s){this.$r[t]=n}removeLocalQueryTarget(t){this.Fr.Zi(t)}isLocalQueryTarget(t){return this.Fr.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(t){return this.Fr.activeTargetIds.has(t)}start(){return this.Fr=new Zi,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{Br(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Gr(),this.Kr=[],this.Qr()}Br(t){this.Kr.push(t)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Kr)t(0)}Gr(){y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Kr)t(1)}static vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(t){this.jr=t.jr,this.Wr=t.Wr}zr(t){this.Hr=t}Jr(t){this.Yr=t}onMessage(t){this.Xr=t}close(){this.Wr()}send(t){this.jr(t)}Zr(){this.Hr()}eo(t){this.Yr(t)}no(t){this.Xr(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.so=n+"://"+t.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(t,n,s,i,r){const o=this.oo(t,n);y("RestConnection","Sending: ",o,s);const a={};return this.uo(a,i,r),this.ao(t,o,a,s).then(u=>(y("RestConnection","Received: ",u),u),u=>{throw Mi("RestConnection",`${t} failed with error: `,u,"url: ",o,"request:",s),u})}co(t,n,s,i,r){return this.ro(t,n,s,i,r)}uo(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+se,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>t[r]=i),s&&s.headers.forEach((i,r)=>t[r]=i)}oo(t,n){const s=Ml[t];return`${this.so}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}ao(t,n,s,i){return new Promise((r,o)=>{const a=new Yu;a.listenOnce(Wu.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case jn.NO_ERROR:const h=a.getResponseJson();y("Connection","XHR received:",JSON.stringify(h)),r(h);break;case jn.TIMEOUT:y("Connection",'RPC "'+t+'" timed out'),o(new E(f.DEADLINE_EXCEEDED,"Request time out"));break;case jn.HTTP_ERROR:const l=a.getStatus();if(y("Connection",'RPC "'+t+'" failed with status:',l,"response text:",a.getResponseText()),l>0){const c=a.getResponseJson().error;if(c&&c.status&&c.message){const p=function(m){const w=m.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(w)>=0?w:f.UNKNOWN}(c.status);o(new E(p,c.message))}else o(new E(f.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new E(f.UNAVAILABLE,"Connection failed."));break;default:I()}}finally{y("Connection",'RPC "'+t+'" completed.')}});const u=JSON.stringify(i);a.send(n,"POST",u,s,15)})}ho(t,n,s){const i=[this.so,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=zu(),o=Hu(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Qu({})),this.uo(a.initMessageHeaders,n,s),ka()||Na()||_a()||Da()||ba()||Ra()||(a.httpHeadersOverwriteParam="$httpHeaders");const u=i.join("");y("Connection","Creating WebChannel: "+u,a);const h=r.createWebChannel(u,a);let l=!1,c=!1;const p=new Vl({jr:w=>{c?y("Connection","Not sending because WebChannel is closed:",w):(l||(y("Connection","Opening WebChannel transport."),h.open(),l=!0),y("Connection","WebChannel sending:",w),h.send(w))},Wr:()=>h.close()}),m=(w,R,b)=>{w.listen(R,Z=>{try{b(Z)}catch(st){setTimeout(()=>{throw st},0)}})};return m(h,Ge.EventType.OPEN,()=>{c||y("Connection","WebChannel transport opened.")}),m(h,Ge.EventType.CLOSE,()=>{c||(c=!0,y("Connection","WebChannel transport closed"),p.eo())}),m(h,Ge.EventType.ERROR,w=>{c||(c=!0,Mi("Connection","WebChannel transport errored:",w),p.eo(new E(f.UNAVAILABLE,"The operation could not be completed")))}),m(h,Ge.EventType.MESSAGE,w=>{var R;if(!c){const b=w.data[0];q(!!b);const Z=b,st=Z.error||((R=Z[0])===null||R===void 0?void 0:R.error);if(st){y("Connection","WebChannel received error:",st);const ft=st.status;let G=function(Ut){const at=F[Ut];if(at!==void 0)return Do(at)}(ft),ue=st.message;G===void 0&&(G=f.INTERNAL,ue="Unknown error status: "+ft+" with message "+st.message),c=!0,p.eo(new E(G,ue)),h.close()}else y("Connection","WebChannel received:",b),p.no(b)}}),m(o,Xu.STAT_EVENT,w=>{w.stat===Ri.PROXY?y("Connection","Detected buffering proxy"):w.stat===Ri.NOPROXY&&y("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.Zr()},0),p}}function Hn(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(e){return new Hh(e,!0)}class qo{constructor(t,n,s=1e3,i=1.5,r=6e4){this.Jn=t,this.timerId=n,this.lo=s,this.fo=i,this._o=r,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const n=Math.floor(this.wo+this.To()),s=Math.max(0,Date.now()-this.yo),i=Math.max(0,n-s);i>0&&y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.mo=this.Jn.enqueueAfterDelay(this.timerId,i,()=>(this.yo=Date.now(),t())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(t,n,s,i,r,o,a,u){this.Jn=t,this.Ao=s,this.Ro=i,this.bo=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Po=0,this.Vo=null,this.vo=null,this.stream=null,this.So=new qo(t,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.Vo===null&&(this.Vo=this.Jn.enqueueAfterDelay(this.Ao,6e4,()=>this.Mo()))}Oo(t){this.Fo(),this.stream.send(t)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}$o(){this.vo&&(this.vo.cancel(),this.vo=null)}async close(t,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,t!==4?this.So.reset():n&&n.code===f.RESOURCE_EXHAUSTED?(It(n.toString()),It("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const t=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Po===n&&this.Uo(s,i)},s=>{t(()=>{const i=new E(f.UNKNOWN,"Fetching auth token failed: "+s.message);return this.qo(i)})})}Uo(t,n){const s=this.Lo(this.Po);this.stream=this.Go(t,n),this.stream.zr(()=>{s(()=>(this.state=2,this.vo=this.Jn.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(i=>{s(()=>this.qo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(t){return y("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Lo(t){return n=>{this.Jn.enqueueAndForget(()=>this.Po===t?n():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Fl extends Pl{constructor(t,n,s,i,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.M=r}Go(t,n){return this.bo.ho("Listen",t,n)}onMessage(t){this.So.reset();const n=Jh(this.M,t),s=function(i){if(!("targetChange"in i))return S.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?S.min():r.readTime?ke(r.readTime):S.min()}(t);return this.listener.Ko(n,s)}Qo(t){const n={};n.database=Yi(this.M),n.addTarget=function(i,r){let o;const a=r.target;return o=ds(a)?{documents:Zh(i,a)}:{query:tl(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Xh(i,r.resumeToken):r.snapshotVersion.compareTo(S.min())>0&&(o.readTime=Wh(i,r.snapshotVersion.toTimestamp())),o}(this.M,t);const s=nl(this.M,t);s&&(n.labels=s),this.Oo(n)}jo(t){const n={};n.database=Yi(this.M),n.removeTarget=t,this.Oo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul extends class{}{constructor(t,n,s,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.bo=s,this.M=i,this.Zo=!1}tu(){if(this.Zo)throw new E(f.FAILED_PRECONDITION,"The client has already been terminated.")}ro(t,n,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.bo.ro(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new E(f.UNKNOWN,i.toString())})}co(t,n,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.bo.co(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new E(f.UNKNOWN,i.toString())})}terminate(){this.Zo=!0}}class ql{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(t){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.au(),this.ou(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ru("Offline")))}set(t){this.au(),this.eu=0,t==="Online"&&(this.su=!1),this.ru(t)}ru(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ou(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(It(n),this.su=!1):y("OnlineStateTracker",n)}au(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(t,n,s,i,r){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.cu=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=r,this.du.Br(o=>{s.enqueueAndForget(async()=>{Ue(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=k(a);u.lu.add(4),await Fe(u),u._u.set("Unknown"),u.lu.delete(4),await xn(u)}(this))})}),this._u=new ql(s,i)}}async function xn(e){if(Ue(e))for(const t of e.fu)await t(!0)}async function Fe(e){for(const t of e.fu)await t(!1)}function $o(e,t){const n=k(e);n.hu.has(t.targetId)||(n.hu.set(t.targetId,t),si(n)?ni(n):oe(n).Co()&&ei(n,t))}function Bo(e,t){const n=k(e),s=oe(n);n.hu.delete(t),s.Co()&&jo(n,t),n.hu.size===0&&(s.Co()?s.ko():Ue(n)&&n._u.set("Unknown"))}function ei(e,t){e.wu.Z(t.targetId),oe(e).Qo(t)}function jo(e,t){e.wu.Z(t),oe(e).jo(t)}function ni(e){e.wu=new Kh({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.hu.get(t)||null}),oe(e).start(),e._u.iu()}function si(e){return Ue(e)&&!oe(e).Do()&&e.hu.size>0}function Ue(e){return k(e).lu.size===0}function Ko(e){e.wu=void 0}async function Bl(e){e.hu.forEach((t,n)=>{ei(e,t)})}async function jl(e,t){Ko(e),si(e)?(e._u.uu(t),ni(e)):e._u.set("Unknown")}async function Kl(e,t,n){if(e._u.set("Online"),t instanceof Lo&&t.state===2&&t.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.hu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.hu.delete(o),s.wu.removeTarget(o))}(e,t)}catch(s){y("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await er(e,s)}else if(t instanceof Qe?e.wu.ut(t):t instanceof Ro?e.wu._t(t):e.wu.ht(t),!n.isEqual(S.min()))try{const s=await Fo(e.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.wu.yt(r);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const h=i.hu.get(u);h&&i.hu.set(u,h.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const u=i.hu.get(a);if(!u)return;i.hu.set(a,u.withResumeToken(Q.EMPTY_BYTE_STRING,u.snapshotVersion)),jo(i,a);const h=new Dt(u.target,a,1,u.sequenceNumber);ei(i,h)}),i.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){y("RemoteStore","Failed to raise snapshot:",s),await er(e,s)}}async function er(e,t,n){if(!Pe(t))throw t;e.lu.add(1),await Fe(e),e._u.set("Offline"),n||(n=()=>Fo(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await n(),e.lu.delete(1),await xn(e)})}async function nr(e,t){const n=k(e);n.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");const s=Ue(n);n.lu.add(3),await Fe(n),s&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.lu.delete(3),await xn(n)}async function Gl(e,t){const n=k(e);t?(n.lu.delete(2),await xn(n)):t||(n.lu.add(2),await Fe(n),n._u.set("Unknown"))}function oe(e){return e.mu||(e.mu=function(t,n,s){const i=k(t);return i.tu(),new Fl(n,i.bo,i.authCredentials,i.appCheckCredentials,i.M,s)}(e.datastore,e.asyncQueue,{zr:Bl.bind(null,e),Jr:jl.bind(null,e),Ko:Kl.bind(null,e)}),e.fu.push(async t=>{t?(e.mu.No(),si(e)?ni(e):e._u.set("Unknown")):(await e.mu.stop(),Ko(e))})),e.mu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(t,n,s,i,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new _t,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,i,r){const o=Date.now()+s,a=new ii(t,n,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new E(f.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Go(e,t){if(It("AsyncQueue",`${t}: ${e}`),Pe(e))return new E(f.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(t){this.comparator=t?(n,s)=>t(n,s)||v.comparator(n.key,s.key):(n,s)=>v.comparator(n.key,s.key),this.keyedMap=ys(),this.sortedSet=new Y(this.comparator)}static emptySet(t){return new Gt(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Gt)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Gt;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(){this.yu=new Y(v.comparator)}track(t){const n=t.doc.key,s=this.yu.get(n);s?t.type!==0&&s.type===3?this.yu=this.yu.insert(n,t):t.type===3&&s.type!==1?this.yu=this.yu.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.yu=this.yu.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.yu=this.yu.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.yu=this.yu.remove(n):t.type===1&&s.type===2?this.yu=this.yu.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.yu=this.yu.insert(n,{type:2,doc:t.doc}):I():this.yu=this.yu.insert(n,t)}pu(){const t=[];return this.yu.inorderTraversal((n,s)=>{t.push(s)}),t}}class Zt{constructor(t,n,s,i,r,o,a,u){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u}static fromInitialDocuments(t,n,s,i){const r=[];return n.forEach(o=>{r.push({type:0,doc:o})}),new Zt(t,n,Gt.emptySet(n),r,s,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&bn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(){this.Iu=void 0,this.listeners=[]}}class Hl{constructor(){this.queries=new re(t=>Eo(t),bn),this.onlineState="Unknown",this.Tu=new Set}}async function Wl(e,t){const n=k(e),s=t.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new zl),i)try{r.Iu=await n.onListen(s)}catch(o){const a=Go(o,`Initialization of query '${fs(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,r),r.listeners.push(t),t.Eu(n.onlineState),r.Iu&&t.Au(r.Iu)&&ri(n)}async function Xl(e,t){const n=k(e),s=t.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(t);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Ql(e,t){const n=k(e);let s=!1;for(const i of t){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Au(i)&&(s=!0);o.Iu=i}}s&&ri(n)}function Yl(e,t,n){const s=k(e),i=s.queries.get(t);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(t)}function ri(e){e.Tu.forEach(t=>{t.next()})}class Jl{constructor(t,n,s){this.query=t,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=s||{}}Au(t){if(!this.options.includeMetadataChanges){const s=[];for(const i of t.docChanges)i.type!==3&&s.push(i);t=new Zt(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let n=!1;return this.bu?this.Vu(t)&&(this.Ru.next(t),n=!0):this.vu(t,this.onlineState)&&(this.Su(t),n=!0),this.Pu=t,n}onError(t){this.Ru.error(t)}Eu(t){this.onlineState=t;let n=!1;return this.Pu&&!this.bu&&this.vu(this.Pu,t)&&(this.Su(this.Pu),n=!0),n}vu(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.Du||!s)&&(!t.docs.isEmpty()||n==="Offline")}Vu(t){if(t.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(t){t=Zt.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.bu=!0,this.Ru.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(t){this.key=t}}class Ho{constructor(t){this.key=t}}class Zl{constructor(t,n){this.query=t,this.Fu=n,this.$u=null,this.current=!1,this.Bu=O(),this.mutatedKeys=O(),this.Lu=To(t),this.Uu=new Gt(this.Lu)}get qu(){return this.Fu}Gu(t,n){const s=n?n.Ku:new sr,i=n?n.Uu:this.Uu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=We(this.query)&&i.size===this.query.limit?i.last():null,h=cn(this.query)&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((l,c)=>{const p=i.get(l),m=Qs(this.query,c)?c:null,w=!!p&&this.mutatedKeys.has(p.key),R=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let b=!1;p&&m?p.data.isEqual(m.data)?w!==R&&(s.track({type:3,doc:m}),b=!0):this.Qu(p,m)||(s.track({type:2,doc:m}),b=!0,(u&&this.Lu(m,u)>0||h&&this.Lu(m,h)<0)&&(a=!0)):!p&&m?(s.track({type:0,doc:m}),b=!0):p&&!m&&(s.track({type:1,doc:p}),b=!0,(u||h)&&(a=!0)),b&&(m?(o=o.add(m),r=R?r.add(l):r.delete(l)):(o=o.delete(l),r=r.delete(l)))}),We(this.query)||cn(this.query))for(;o.size>this.query.limit;){const l=We(this.query)?o.last():o.first();o=o.delete(l.key),r=r.delete(l.key),s.track({type:1,doc:l})}return{Uu:o,Ku:s,ei:a,mutatedKeys:r}}Qu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const i=this.Uu;this.Uu=t.Uu,this.mutatedKeys=t.mutatedKeys;const r=t.Ku.pu();r.sort((h,l)=>function(c,p){const m=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return I()}};return m(c)-m(p)}(h.type,l.type)||this.Lu(h.doc,l.doc)),this.ju(s);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,u=a!==this.$u;return this.$u=a,r.length!==0||u?{snapshot:new Zt(this.query,t.Uu,i,r,t.mutatedKeys,a===0,u,!1),zu:o}:{zu:o}}Eu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Ku:new sr,mutatedKeys:this.mutatedKeys,ei:!1},!1)):{zu:[]}}Hu(t){return!this.Fu.has(t)&&!!this.Uu.has(t)&&!this.Uu.get(t).hasLocalMutations}ju(t){t&&(t.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=t.current)}Wu(){if(!this.current)return[];const t=this.Bu;this.Bu=O(),this.Uu.forEach(s=>{this.Hu(s.key)&&(this.Bu=this.Bu.add(s.key))});const n=[];return t.forEach(s=>{this.Bu.has(s)||n.push(new Ho(s))}),this.Bu.forEach(s=>{t.has(s)||n.push(new zo(s))}),n}Ju(t){this.Fu=t.hi,this.Bu=O();const n=this.Gu(t.documents);return this.applyChanges(n,!0)}Yu(){return Zt.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class tc{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class ec{constructor(t){this.key=t,this.Xu=!1}}class nc{constructor(t,n,s,i,r,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Zu={},this.ta=new re(a=>Eo(a),bn),this.ea=new Map,this.na=new Set,this.sa=new Y(v.comparator),this.ia=new Map,this.ra=new Zs,this.oa={},this.ua=new Map,this.aa=Jt.gn(),this.onlineState="Unknown",this.ca=void 0}get isPrimaryClient(){return this.ca===!0}}async function sc(e,t){const n=lc(e);let s,i;const r=n.ta.get(t);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.Yu();else{const o=await Il(n.localStore,Ot(t));n.isPrimaryClient&&$o(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await ic(n,t,s,a==="current")}return i}async function ic(e,t,n,s){e.ha=(l,c,p)=>async function(m,w,R,b){let Z=w.view.Gu(R);Z.ei&&(Z=await Ji(m.localStore,w.query,!1).then(({documents:G})=>w.view.Gu(G,Z)));const st=b&&b.targetChanges.get(w.targetId),ft=w.view.applyChanges(Z,m.isPrimaryClient,st);return rr(m,w.targetId,ft.zu),ft.snapshot}(e,l,c,p);const i=await Ji(e.localStore,t,!0),r=new Zl(t,i.hi),o=r.Gu(i.documents),a=Oe.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline"),u=r.applyChanges(o,e.isPrimaryClient,a);rr(e,n,u.zu);const h=new tc(t,n,r);return e.ta.set(t,h),e.ea.has(n)?e.ea.get(n).push(t):e.ea.set(n,[t]),u.snapshot}async function rc(e,t){const n=k(e),s=n.ta.get(t),i=n.ea.get(s.targetId);if(i.length>1)return n.ea.set(s.targetId,i.filter(r=>!bn(r,t))),void n.ta.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ws(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Bo(n.remoteStore,s.targetId),Es(n,s.targetId)}).catch(Ys)):(Es(n,s.targetId),await ws(n.localStore,s.targetId,!0))}async function Wo(e,t){const n=k(e);try{const s=await El(n.localStore,t);t.targetChanges.forEach((i,r)=>{const o=n.ia.get(r);o&&(q(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Xu=!0:i.modifiedDocuments.size>0?q(o.Xu):i.removedDocuments.size>0&&(q(o.Xu),o.Xu=!1))}),await Qo(n,s,t)}catch(s){await Ys(s)}}function ir(e,t,n){const s=k(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.ta.forEach((r,o)=>{const a=o.view.Eu(t);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=k(r);a.onlineState=o;let u=!1;a.queries.forEach((h,l)=>{for(const c of l.listeners)c.Eu(o)&&(u=!0)}),u&&ri(a)}(s.eventManager,t),i.length&&s.Zu.Ko(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function oc(e,t,n){const s=k(e);s.sharedClientState.updateQueryState(t,"rejected",n);const i=s.ia.get(t),r=i&&i.key;if(r){let o=new Y(v.comparator);o=o.insert(r,et.newNoDocument(r,S.min()));const a=O().add(r),u=new Ln(S.min(),new Map,new X(D),o,a);await Wo(s,u),s.sa=s.sa.remove(r),s.ia.delete(t),oi(s)}else await ws(s.localStore,t,!1).then(()=>Es(s,t,n)).catch(Ys)}function Es(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.ea.get(t))e.ta.delete(s),n&&e.Zu.la(s,n);e.ea.delete(t),e.isPrimaryClient&&e.ra.Ri(t).forEach(s=>{e.ra.containsKey(s)||Xo(e,s)})}function Xo(e,t){e.na.delete(t.path.canonicalString());const n=e.sa.get(t);n!==null&&(Bo(e.remoteStore,n),e.sa=e.sa.remove(t),e.ia.delete(n),oi(e))}function rr(e,t,n){for(const s of n)s instanceof zo?(e.ra.addReference(s.key,t),ac(e,s)):s instanceof Ho?(y("SyncEngine","Document no longer in limbo: "+s.key),e.ra.removeReference(s.key,t),e.ra.containsKey(s.key)||Xo(e,s.key)):I()}function ac(e,t){const n=t.key,s=n.path.canonicalString();e.sa.get(n)||e.na.has(s)||(y("SyncEngine","New document in limbo: "+n),e.na.add(s),oi(e))}function oi(e){for(;e.na.size>0&&e.sa.size<e.maxConcurrentLimboResolutions;){const t=e.na.values().next().value;e.na.delete(t);const n=new v(P.fromString(t)),s=e.aa.next();e.ia.set(s,new ec(n)),e.sa=e.sa.insert(n,s),$o(e.remoteStore,new Dt(Ot(wo(n.path)),s,2,zs.A))}}async function Qo(e,t,n){const s=k(e),i=[],r=[],o=[];s.ta.isEmpty()||(s.ta.forEach((a,u)=>{o.push(s.ha(u,t,n).then(h=>{if(h){s.isPrimaryClient&&s.sharedClientState.updateQueryState(u.targetId,h.fromCache?"not-current":"current"),i.push(h);const l=Js.Js(u.targetId,h);r.push(l)}}))}),await Promise.all(o),s.Zu.Ko(i),await async function(a,u){const h=k(a);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>d.forEach(u,c=>d.forEach(c.zs,p=>h.persistence.referenceDelegate.addReference(l,c.targetId,p)).next(()=>d.forEach(c.Hs,p=>h.persistence.referenceDelegate.removeReference(l,c.targetId,p)))))}catch(l){if(!Pe(l))throw l;y("LocalStore","Failed to update sequence numbers: "+l)}for(const l of u){const c=l.targetId;if(!l.fromCache){const p=h.si.get(c),m=p.snapshotVersion,w=p.withLastLimboFreeSnapshotVersion(m);h.si=h.si.insert(c,w)}}}(s.localStore,r))}async function uc(e,t){const n=k(e);if(!n.currentUser.isEqual(t)){y("SyncEngine","User change. New user:",t.toKey());const s=await Po(n.localStore,t);n.currentUser=t,function(i,r){i.ua.forEach(o=>{o.forEach(a=>{a.reject(new E(f.CANCELLED,r))})}),i.ua.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Qo(n,s.ci)}}function hc(e,t){const n=k(e),s=n.ia.get(t);if(s&&s.Xu)return O().add(s.key);{let i=O();const r=n.ea.get(t);if(!r)return i;for(const o of r){const a=n.ta.get(o);i=i.unionWith(a.view.qu)}return i}}function lc(e){const t=k(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Wo.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=hc.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=oc.bind(null,t),t.Zu.Ko=Ql.bind(null,t.eventManager),t.Zu.la=Yl.bind(null,t.eventManager),t}class cc{constructor(){this.synchronizeTabs=!1}async initialize(t){this.M=Uo(t.databaseInfo.databaseId),this.sharedClientState=this.da(t),this.persistence=this._a(t),await this.persistence.start(),this.gcScheduler=this.wa(t),this.localStore=this.ma(t)}wa(t){return null}ma(t){return wl(this.persistence,new yl,t.initialUser,this.M)}_a(t){return new bl(ti.Wi,this.M)}da(t){return new Ll}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class dc{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>ir(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=uc.bind(null,this.syncEngine),await Gl(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Hl}createDatastore(t){const n=Uo(t.databaseInfo.databaseId),s=(i=t.databaseInfo,new Ol(i));var i;return function(r,o,a,u){return new Ul(r,o,a,u)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,i=t.asyncQueue,r=a=>ir(this.syncEngine,a,0),o=tr.vt()?new tr:new xl,new $l(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(t,n){return function(s,i,r,o,a,u,h){const l=new nc(s,i,r,o,a,u);return h&&(l.ca=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=k(t);y("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await Fe(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.ya(this.observer.next,t)}error(t){this.observer.error?this.ya(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}pa(){this.muted=!0}ya(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(t,n,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=ut.UNAUTHENTICATED,this.clientId=oh.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{y("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(y("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new _t;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=Go(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function pc(e,t){e.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Po(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function mc(e,t){e.asyncQueue.verifyOperationInProgress();const n=await yc(e);y("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(i=>nr(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,r)=>nr(t.remoteStore,r)),e.onlineComponents=t}async function yc(e){return e.offlineComponents||(y("FirestoreClient","Using default OfflineComponentProvider"),await pc(e,new cc)),e.offlineComponents}async function vc(e){return e.onlineComponents||(y("FirestoreClient","Using default OnlineComponentProvider"),await mc(e,new dc)),e.onlineComponents}async function wc(e){const t=await vc(e),n=t.eventManager;return n.onListen=sc.bind(null,t.syncEngine),n.onUnlisten=rc.bind(null,t.syncEngine),n}function Ec(e,t,n={}){const s=new _t;return e.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,u){const h=new fc({next:c=>{r.enqueueAndForget(()=>Xl(i,l)),c.fromCache&&a.source==="server"?u.reject(new E(f.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(c)},error:c=>u.reject(c)}),l=new Jl(o,h,{includeMetadataChanges:!0,Du:!0});return Wl(i,l)}(await wc(e),e.asyncQueue,t,n,s)),s.promise}const or=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(e,t,n){if(!n)throw new E(f.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Ic(e,t,n,s){if(t===!0&&s===!0)throw new E(f.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function ar(e){if(v.isDocumentKey(e))throw new E(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Sc(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":I()}function ur(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new E(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Sc(e);throw new E(f.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new E(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new E(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Ic("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(t,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hr({}),this._settingsFrozen=!1,t instanceof Xt?this._databaseId=t:(this._app=t,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new E(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xt(i.options.projectId)}(t))}get app(){if(!this._app)throw new E(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new E(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hr(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Zu;switch(n.type){case"gapi":const s=n.client;return q(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new nh(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new E(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=or.get(t);n&&(y("ComponentProvider","Removing Datastore"),or.delete(t),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ae(this.firestore,t,this._key)}}class Mn{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Mn(this.firestore,t,this._query)}}class zt extends Mn{constructor(t,n,s){super(t,n,wo(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ae(this.firestore,null,new v(t))}withConverter(t){return new zt(this.firestore,t,this._path)}}function Cc(e,t,...n){if(e=Aa(e),Tc("collection","path",t),e instanceof Yo){const s=P.fromString(t,...n);return ar(s),new zt(e,null,s)}{if(!(e instanceof ae||e instanceof zt))throw new E(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(P.fromString(t,...n));return ar(s),new zt(e.firestore,null,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(){this.Na=Promise.resolve(),this.ka=[],this.Ma=!1,this.Oa=[],this.Fa=null,this.$a=!1,this.Ba=!1,this.La=[],this.So=new qo(this,"async_queue_retry"),this.Ua=()=>{const n=Hn();n&&y("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const t=Hn();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Ua)}get isShuttingDown(){return this.Ma}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.qa(),this.Ga(t)}enterRestrictedMode(t){if(!this.Ma){this.Ma=!0,this.Ba=t||!1;const n=Hn();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Ua)}}enqueue(t){if(this.qa(),this.Ma)return new Promise(()=>{});const n=new _t;return this.Ga(()=>this.Ma&&this.Ba?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.ka.push(t),this.Ka()))}async Ka(){if(this.ka.length!==0){try{await this.ka[0](),this.ka.shift(),this.So.reset()}catch(t){if(!Pe(t))throw t;y("AsyncQueue","Operation failed with retryable error: "+t)}this.ka.length>0&&this.So.Io(()=>this.Ka())}}Ga(t){const n=this.Na.then(()=>(this.$a=!0,t().catch(s=>{this.Fa=s,this.$a=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw It("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.$a=!1,s))));return this.Na=n,n}enqueueAfterDelay(t,n,s){this.qa(),this.La.indexOf(t)>-1&&(n=0);const i=ii.createAndSchedule(this,t,n,s,r=>this.Qa(r));return this.Oa.push(i),i}qa(){this.Fa&&I()}verifyOperationInProgress(){}async ja(){let t;do t=this.Na,await t;while(t!==this.Na)}Wa(t){for(const n of this.Oa)if(n.timerId===t)return!0;return!1}za(t){return this.ja().then(()=>{this.Oa.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Oa)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.ja()})}Ha(t){this.La.push(t)}Qa(t){const n=this.Oa.indexOf(t);this.Oa.splice(n,1)}}class Jo extends Yo{constructor(t,n,s){super(t,n,s),this.type="firestore",this._queue=new Ac,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Zo(this),this._firestoreClient.terminate()}}function kc(e=Ca()){return Ia(e,"firestore").getImmediate()}function Nc(e){return e._firestoreClient||Zo(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Zo(e){var t;const n=e._freezeSettings(),s=function(i,r,o,a){return new lh(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new gc(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new E(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new gn(Q.fromBase64String(t))}catch(n){throw new E(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new gn(Q.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new E(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new E(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return D(this._lat,t._lat)||D(this._long,t._long)}}const Dc=new RegExp("[~\\*/\\[\\]]");function bc(e,t,n){if(t.search(Dc)>=0)throw lr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ta(...t.split("."))._internalPath}catch{throw lr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function lr(e,t,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(r||o)&&(u+=" (found",r&&(u+=` in field ${s}`),o&&(u+=` in document ${i}`),u+=")"),new E(f.INVALID_ARGUMENT,a+e+u)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(t,n,s,i,r){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new ae(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Rc(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(na("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Rc extends ea{data(){return super.data()}}function na(e,t){return typeof t=="string"?bc(e,t):t instanceof ta?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Lc extends ea{constructor(t,n,s,i,r,o){super(t,n,s,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Ye(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(na("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Ye extends Lc{data(t={}){return super.data(t)}}class xc{constructor(t,n,s,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new He(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new Ye(this._firestore,this._userDataWriter,s.key,s,new He(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new E(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new Ye(s._firestore,s._userDataWriter,o.doc.key,o.doc,new He(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:r++}))}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Ye(s._firestore,s._userDataWriter,o.doc.key,o.doc,new He(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return o.type!==0&&(u=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),h=r.indexOf(o.doc.key)),{type:Mc(o.type),doc:a,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Mc(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return I()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(e){if(cn(e)&&e.explicitOrderBy.length===0)throw new E(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{convertValue(t,n="none"){switch(Vt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return U(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Wt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw I()}}convertObject(t,n){const s={};return _n(t.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(t){return new _c(U(t.latitude),U(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=yo(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Se(t));default:return null}}convertTimestamp(t){const n=St(t);return new dt(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=P.fromString(t);q(Oo(s));const i=new Xt(s.get(1),s.get(3)),r=new v(s.popFirst(5));return i.isEqual(n)||It(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}class Pc extends Oc{constructor(t){super(),this.firestore=t}convertBytes(t){return new gn(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new ae(this.firestore,null,n)}}function Fc(e){e=ur(e,Mn);const t=ur(e.firestore,Jo),n=Nc(t),s=new Pc(t);return Vc(e._query),Ec(n,e._query).then(i=>new xc(t,s,e,i))}(function(e,t=!0){(function(n){se=n})(Ta),va(new wa("firestore",(n,{options:s})=>{const i=n.getProvider("app").getImmediate(),r=new Jo(i,new th(n.getProvider("auth-internal")),new ih(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:t},s),r._setSettings(s),r},"PUBLIC")),Qn(Li,"3.4.7",e),Qn(Li,"3.4.7","esm2017")})();function Uc(e){let t,n,s,i;t=new Ba({});const r=e[1].default,o=ua(r,e,e[0],null);return{c(){ha(t.$$.fragment),n=Et(),s=L("main"),o&&o.c()},l(a){la(t.$$.fragment,a),n=Tt(a),s=x(a,"MAIN",{});var u=M(s);o&&o.l(u),u.forEach(A)},m(a,u){ca(t,a,u),pt(a,n,u),pt(a,s,u),o&&o.m(s,null),i=!0},p(a,[u]){o&&o.p&&(!i||u&1)&&da(o,r,a,a[0],i?ga(r,a[0],u,null):fa(a[0]),null)},i(a){i||(fi(t.$$.fragment,a),fi(o,a),i=!0)},o(a){gi(t.$$.fragment,a),gi(o,a),i=!1},d(a){pa(t,a),a&&A(n),a&&A(s),o&&o.d(a)}}}function qc(e,t,n){let s;Wn(e,Xn,a=>n(2,s=a));let{$$slots:i={},$$scope:r}=t;async function o(a,u){(await Fc(Cc(a,"teams"))).forEach(l=>{u.push({team_id:l.id,team:l.data()})}),pi.set({teams:u})}return ma(()=>{const u=La({apiKey:"AIzaSyC47HbOthMoL3NaiuhngMhAbjMOiJ7K14E",authDomain:"ipl-490.firebaseapp.com",projectId:"ipl-490",storageBucket:"ipl-490.appspot.com",messagingSenderId:"233512990468",appId:"1:233512990468:web:f9f52670f5ddb6a81a8251",measurementId:"G-BX5DYP48BT"}),h=kc(u),l=gr(),c=[];l.onAuthStateChanged(p=>{Xn.set({isLoggedIn:p!=null,user:p,firebaseControlled:!0}),s.isLoggedIn?o(h,c):pi.set({teams:[]})})}),e.$$set=a=>{"$$scope"in a&&n(0,r=a.$$scope)},[r,i]}class zc extends cr{constructor(t){super();dr(this,t,qc,Uc,fr,{})}}export{zc as default};

"use strict";(self.webpackChunksite_gruppo_natura_lentiai=self.webpackChunksite_gruppo_natura_lentiai||[]).push([[21],{3204:function(e){const t=/[\p{Lu}]/u,n=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,l=/([\p{Alpha}\p{N}_]|$)/u,i=/[_.\- ]+/,a=new RegExp("^"+i.source),o=new RegExp(i.source+l.source,"gu"),s=new RegExp("\\d+"+l.source,"gu"),c=(e,l)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(l={pascalCase:!1,preserveConsecutiveUppercase:!1,...l},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const i=!1===l.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(l.locale),c=!1===l.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(l.locale);if(1===e.length)return l.pascalCase?c(e):i(e);return e!==i(e)&&(e=((e,r,l)=>{let i=!1,a=!1,o=!1;for(let s=0;s<e.length;s++){const c=e[s];i&&t.test(c)?(e=e.slice(0,s)+"-"+e.slice(s),i=!1,o=a,a=!0,s++):a&&o&&n.test(c)?(e=e.slice(0,s-1)+"-"+e.slice(s-1),o=a,a=!1,i=!0):(i=r(c)===c&&l(c)!==c,o=a,a=l(c)===c&&r(c)!==c)}return e})(e,i,c)),e=e.replace(a,""),e=l.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,i):i(e),l.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(o.lastIndex=0,s.lastIndex=0,e.replace(o,((e,n)=>t(n))).replace(s,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,n){n.d(t,{G:function(){return A},L:function(){return h},M:function(){return E},P:function(){return x},_:function(){return o},a:function(){return a},b:function(){return d},c:function(){return c},g:function(){return p},h:function(){return s}});var r=n(7294),l=(n(3204),n(5697)),i=n.n(l);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||(l[n]=e[n]);return l}const s=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,n;return Boolean(null==e||null==(t=e.images)||null==(n=t.fallback)?void 0:n.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function u(e,t,n){const r={};let l="gatsby-image-wrapper";return"fixed"===n?(r.width=e,r.height=t):"constrained"===n&&(l="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:l,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,n,r,l){return void 0===l&&(l={}),a({},n,{loading:r,shouldLoad:e,"data-main-image":"",style:a({},l,{opacity:t?1:0})})}function p(e,t,n,r,l,i,o,s){const c={};i&&(c.backgroundColor=i,"fixed"===n?(c.width=r,c.height=l,c.backgroundColor=i,c.position="relative"):("constrained"===n||"fullWidth"===n)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),s&&(c.objectPosition=s);const u=a({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:a({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const m=["children"],y=function(e){let{layout:t,width:n,height:l}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:l/n*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:n,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+l+"'%20width='"+n+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},h=function(e){let{children:t}=e,n=o(e,m);return r.createElement(r.Fragment,null,r.createElement(y,a({},n)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],g=["fallback","sources","shouldLoad"],b=function(e){let{src:t,srcSet:n,loading:l,alt:i="",shouldLoad:s}=e,c=o(e,f);return r.createElement("img",a({},c,{decoding:"async",loading:l,src:s?t:void 0,"data-src":s?void 0:t,srcSet:s?n:void 0,"data-srcset":s?void 0:n,alt:i}))},k=function(e){let{fallback:t,sources:n=[],shouldLoad:l=!0}=e,i=o(e,g);const s=i.sizes||(null==t?void 0:t.sizes),c=r.createElement(b,a({},i,t,{sizes:s,shouldLoad:l}));return n.length?r.createElement("picture",null,n.map((e=>{let{media:t,srcSet:n,type:i}=e;return r.createElement("source",{key:t+"-"+i+"-"+n,type:i,media:t,srcSet:l?n:void 0,"data-srcset":l?void 0:n,sizes:s})})),c):c};var v;b.propTypes={src:l.string.isRequired,alt:l.string.isRequired,sizes:l.string,srcSet:l.string,shouldLoad:l.bool},k.displayName="Picture",k.propTypes={alt:l.string.isRequired,shouldLoad:l.bool,fallback:l.exact({src:l.string.isRequired,srcSet:l.string,sizes:l.string}),sources:l.arrayOf(l.oneOfType([l.exact({media:l.string.isRequired,type:l.string,sizes:l.string,srcSet:l.string.isRequired}),l.exact({media:l.string,type:l.string.isRequired,sizes:l.string,srcSet:l.string.isRequired})]))};const w=["fallback"],x=function(e){let{fallback:t}=e,n=o(e,w);return t?r.createElement(k,a({},n,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",a({},n))};x.displayName="Placeholder",x.propTypes={fallback:l.string,sources:null==(v=k.propTypes)?void 0:v.sources,alt:function(e,t,n){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Validation failed."):null}};const E=function(e){return r.createElement(r.Fragment,null,r.createElement(k,a({},e)),r.createElement("noscript",null,r.createElement(k,a({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=k.propTypes;const j=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],I=["style","className"],O=e=>e.replace(/\n/g,""),_=function(e,t,n){for(var r=arguments.length,l=new Array(r>3?r-3:0),a=3;a<r;a++)l[a-3]=arguments[a];return e.alt||""===e.alt?i().string.apply(i(),[e,t,n].concat(l)):new Error('The "alt" prop is required in '+n+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},S={image:i().object.isRequired,alt:_},L=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],N=["style","className"],P=new Set;let C,T;const D=function(e){let{as:t="div",image:l,style:i,backgroundColor:c,className:d,class:p,onStartLoad:m,onLoad:y,onError:h}=e,f=o(e,L);const{width:g,height:b,layout:k}=l,v=u(g,b,k),{style:w,className:x}=v,E=o(v,N),j=(0,r.useRef)(),I=(0,r.useMemo)((()=>JSON.stringify(l.images)),[l.images]);p&&(d=p);const O=function(e,t,n){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+n/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+n+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(k,g,b);return(0,r.useEffect)((()=>{C||(C=n.e(731).then(n.bind(n,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:n}=e;return T=t,{renderImageToString:t,swapPlaceholderImage:n}})));const e=j.current.querySelector("[data-gatsby-image-ssr]");if(e&&s())return e.complete?(null==m||m({wasCached:!0}),null==y||y({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==m||m({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==y||y({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void P.add(I);if(T&&P.has(I))return;let t,r;return C.then((e=>{let{renderImageToString:n,swapPlaceholderImage:o}=e;j.current&&(j.current.innerHTML=n(a({isLoading:!0,isLoaded:P.has(I),image:l},f)),P.has(I)||(t=requestAnimationFrame((()=>{j.current&&(r=o(j.current,I,P,i,m,y,h))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[l]),(0,r.useLayoutEffect)((()=>{P.has(I)&&T&&(j.current.innerHTML=T(a({isLoading:P.has(I),isLoaded:P.has(I),image:l},f)),null==m||m({wasCached:!0}),null==y||y({wasCached:!0}))}),[l]),(0,r.createElement)(t,a({},E,{style:a({},w,i,{backgroundColor:c}),className:x+(d?" "+d:""),ref:j,dangerouslySetInnerHTML:{__html:O},suppressHydrationWarning:!0}))},A=(0,r.memo)((function(e){return e.image?(0,r.createElement)(D,e):null}));A.propTypes=S,A.displayName="GatsbyImage";const q=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function M(e){return function(t){let{src:n,__imageData:l,__error:i}=t,s=o(t,q);return i&&console.warn(i),l?r.createElement(e,a({image:l},s)):(console.warn("Image not loaded",n),null)}}const R=M((function(e){let{as:t="div",className:n,class:l,style:i,image:s,loading:c="lazy",imgClassName:m,imgStyle:y,backgroundColor:f,objectFit:g,objectPosition:b}=e,k=o(e,j);if(!s)return console.warn("[gatsby-plugin-image] Missing image prop"),null;l&&(n=l),y=a({objectFit:g,objectPosition:b,backgroundColor:f},y);const{width:v,height:w,layout:_,images:S,placeholder:L,backgroundColor:N}=s,P=u(v,w,_),{style:C,className:T}=P,D=o(P,I),A={fallback:void 0,sources:[]};return S.fallback&&(A.fallback=a({},S.fallback,{srcSet:S.fallback.srcSet?O(S.fallback.srcSet):void 0})),S.sources&&(A.sources=S.sources.map((e=>a({},e,{srcSet:O(e.srcSet)})))),r.createElement(t,a({},D,{style:a({},C,i,{backgroundColor:f}),className:T+(n?" "+n:"")}),r.createElement(h,{layout:_,width:v,height:w},r.createElement(x,a({},p(L,!1,_,v,w,N,g,b))),r.createElement(E,a({"data-gatsby-image-ssr":"",className:m},k,d("eager"===c,!1,A,c,y)))))})),$=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),l=2;l<n;l++)r[l-2]=arguments[l];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},B=new Set(["fixed","fullWidth","constrained"]),W={src:i().string.isRequired,alt:_,width:$,height:$,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!B.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};R.displayName="StaticImage",R.propTypes=W;const F=M(A);F.displayName="StaticImage",F.propTypes=W},9761:function(e,t,n){n.r(t),n.d(t,{default:function(){return K}});var r=n(7361),l=n.n(r),i=n(7896),a=n(7294),o=n(9210),s=n(5893);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){return"span"===e._type&&"text"in e&&"string"==typeof e.text&&(typeof e.marks>"u"||Array.isArray(e.marks)&&e.marks.every((e=>"string"==typeof e)))}function m(e){return"string"==typeof e._type&&"@"!==e._type[0]&&(!("markDefs"in e)||!e.markDefs||Array.isArray(e.markDefs)&&e.markDefs.every((e=>"string"==typeof e._key)))&&"children"in e&&Array.isArray(e.children)&&e.children.every((e=>"object"==typeof e&&"_type"in e))}function y(e){return m(e)&&"listItem"in e&&"string"==typeof e.listItem&&(typeof e.level>"u"||"number"==typeof e.level)}function h(e){return"@list"===e._type}function f(e){return"@span"===e._type}function g(e){return"@text"===e._type}const b=["strong","em","code","underline","strike-through"];function k(e,t,n){if(!p(e)||!e.marks)return[];if(!e.marks.length)return[];const r=e.marks.slice(),l={};return r.forEach((e=>{l[e]=1;for(let r=t+1;r<n.length;r++){const t=n[r];if(!(t&&p(t)&&Array.isArray(t.marks)&&-1!==t.marks.indexOf(e)))break;l[e]++}})),r.sort(((e,t)=>function(e,t,n){const r=e[t],l=e[n];if(r!==l)return l-r;const i=b.indexOf(t),a=b.indexOf(n);return i!==a?i-a:t.localeCompare(n)}(l,e,t)))}function v(e,t){return(e.level||1)===t.level&&e.listItem===t.listItem}function w(e,t,n){return{_type:"@list",_key:`${e._key||`${t}`}-parent`,mode:n,level:e.level||1,listItem:e.listItem,children:[e]}}function x(e,t){const n=t.level||1,r=t.listItem||"normal",l="string"==typeof t.listItem;if(h(e)&&(e.level||1)===n&&l&&(e.listItem||"normal")===r)return e;if(!("children"in e))return;const i=e.children[e.children.length-1];return i&&!p(i)?x(i,t):void 0}function E(e){let t="";return e.children.forEach((e=>{g(e)?t+=e.text:f(e)&&(t+=E(e))})),t}const j=["block","list","listItem","marks","types"],I=["listItem"],O=["_key"];function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){L(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function L(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.includes(n)||{}.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}const P={textDecoration:"underline"},C=(e,t)=>`[@portabletext/react] Unknown ${e}, specify a component for it in the \`components.${t}\` prop`,T=e=>C(`block type "${e}"`,"types");function D(e){console.warn(e)}const A={display:"none"},q={types:{},block:{normal:({children:e})=>(0,s.jsx)("p",{children:e}),blockquote:({children:e})=>(0,s.jsx)("blockquote",{children:e}),h1:({children:e})=>(0,s.jsx)("h1",{children:e}),h2:({children:e})=>(0,s.jsx)("h2",{children:e}),h3:({children:e})=>(0,s.jsx)("h3",{children:e}),h4:({children:e})=>(0,s.jsx)("h4",{children:e}),h5:({children:e})=>(0,s.jsx)("h5",{children:e}),h6:({children:e})=>(0,s.jsx)("h6",{children:e})},marks:{em:({children:e})=>(0,s.jsx)("em",{children:e}),strong:({children:e})=>(0,s.jsx)("strong",{children:e}),code:({children:e})=>(0,s.jsx)("code",{children:e}),underline:({children:e})=>(0,s.jsx)("span",{style:P,children:e}),"strike-through":({children:e})=>(0,s.jsx)("del",{children:e}),link:({children:e,value:t})=>(0,s.jsx)("a",{href:t?.href,children:e})},list:{number:({children:e})=>(0,s.jsx)("ol",{children:e}),bullet:({children:e})=>(0,s.jsx)("ul",{children:e})},listItem:({children:e})=>(0,s.jsx)("li",{children:e}),hardBreak:()=>(0,s.jsx)("br",{}),unknownType:({value:e,isInline:t})=>{const n=T(e._type);return t?(0,s.jsx)("span",{style:A,children:n}):(0,s.jsx)("div",{style:A,children:n})},unknownMark:({markType:e,children:t})=>(0,s.jsx)("span",{className:`unknown__pt__mark__${e}`,children:t}),unknownList:({children:e})=>(0,s.jsx)("ul",{children:e}),unknownListItem:({children:e})=>(0,s.jsx)("li",{children:e}),unknownBlockStyle:({children:e})=>(0,s.jsx)("p",{children:e})};function M(e,t,n){const r=t[n],l=e[n];return"function"==typeof r||r&&"function"==typeof l?r:r?S(S({},l),r):l}function R({value:e,components:t,listNestingMode:n,onMissingComponent:r=D}){const l=r||W,i=function(e,t){const n=[];let r;for(let l=0;l<e.length;l++){const i=e[l];if(i){if(!y(i)){n.push(i),r=void 0;continue}if(!r){r=w(i,l,t),n.push(r);continue}if(v(i,r)){r.children.push(i);continue}if((i.level||1)>r.level){const e=w(i,l,t);if("html"===t){const t=r.children[r.children.length-1],n=u(u({},t),{},{children:[...t.children,e]});r.children[r.children.length-1]=n}else r.children.push(e);r=e;continue}if((i.level||1)<r.level){const e=n[n.length-1],a=e&&x(e,i);if(a){r=a,r.children.push(i);continue}r=w(i,l,t),n.push(r);continue}if(i.listItem!==r.listItem){const e=n[n.length-1],a=e&&x(e,{level:i.level||1});if(a&&a.listItem===i.listItem){r=a,r.children.push(i);continue}r=w(i,l,t),n.push(r);continue}console.warn("Unknown state encountered for block",i),n.push(i)}}return n}(Array.isArray(e)?e:[e],n||"html"),o=(0,a.useMemo)((()=>t?function(e,t){const{block:n,list:r,listItem:l,marks:i,types:a}=t,o=N(t,j);return S(S({},e),{},{block:M(e,t,"block"),list:M(e,t,"list"),listItem:M(e,t,"listItem"),marks:M(e,t,"marks"),types:M(e,t,"types")},o)}(q,t):q),[t]),c=(0,a.useMemo)((()=>$(o,l)),[o,l]),d=i.map(((e,t)=>c({node:e,index:t,isInline:!1,renderNode:c})));return(0,s.jsx)(s.Fragment,{children:d})}const $=(e,t)=>{function n(r){const{node:l,index:i,isInline:a}=r,o=l._key||`node-${i}`;return h(l)?function(r,l,i){const a=r.children.map(((e,t)=>n({node:e._key?e:S(S({},e),{},{_key:`li-${l}-${t}`}),index:t,isInline:!1,renderNode:n}))),o=e.list,c=("function"==typeof o?o:o[r.listItem])||e.unknownList;if(c===e.unknownList){const e=r.listItem||"bullet";t(C(`list style "${e}"`,"list"),{nodeType:"listStyle",type:e})}return(0,s.jsx)(c,{value:r,index:l,isInline:!1,renderNode:n,children:a},i)}(l,i,o):y(l)?function(r,l,i){const a=B({node:r,index:l,isInline:!1,renderNode:n}),o=e.listItem,c=("function"==typeof o?o:o[r.listItem])||e.unknownListItem;if(c===e.unknownListItem){const e=r.listItem||"bullet";t(C(`list item style "${e}"`,"listItem"),{type:e,nodeType:"listItemStyle"})}let u=a.children;if(r.style&&"normal"!==r.style){const{listItem:e}=r;u=n({node:N(r,I),index:l,isInline:!1,renderNode:n})}return(0,s.jsx)(c,{value:r,index:l,isInline:!1,renderNode:n,children:u},i)}(l,i,o):f(l)?function(r,l,i){const{markDef:a,markType:o,markKey:c}=r,u=e.marks[o]||e.unknownMark,d=r.children.map(((e,t)=>n({node:e,index:t,isInline:!0,renderNode:n})));return u===e.unknownMark&&t((e=>C(`mark type "${e}"`,"marks"))(o),{nodeType:"mark",type:o}),(0,s.jsx)(u,{text:E(r),value:a,markType:o,markKey:c,renderNode:n,children:d},i)}(l,0,o):function(t){return t._type in e.types}(l)?function(t,r,l,i){const a={value:t,isInline:i,index:r,renderNode:n},o=e.types[t._type];return o?(0,s.jsx)(o,S({},a),l):null}(l,i,o,a):m(l)?function(r,l,i,a){const o=B({node:r,index:l,isInline:a,renderNode:n}),{_key:c}=o,u=N(o,O),d=u.node.style||"normal",p=("function"==typeof e.block?e.block:e.block[d])||e.unknownBlockStyle;return p===e.unknownBlockStyle&&t((m=d,C(`block style "${m}"`,"block")),{nodeType:"blockStyle",type:d}),(0,s.jsx)(p,S(S({},u),{},{value:u.node,renderNode:n}),i);var m}(l,i,o,a):g(l)?function(t,n){if("\n"===t.text){const t=e.hardBreak;return t?(0,s.jsx)(t,{},n):"\n"}return t.text}(l,o):function(r,l,i,a){const o={value:r,isInline:a,index:l,renderNode:n};t(T(r._type),{nodeType:"block",type:r._type});const c=e.unknownType;return(0,s.jsx)(c,S({},o),i)}(l,i,o,a)}return n};function B(e){const{node:t,index:n,isInline:r,renderNode:l}=e,i=function(e){var t;const{children:n,markDefs:r=[]}=e;if(!n||!n.length)return[];const l=n.map(k),i={_type:"@span",children:[],markType:"<unknown>"};let a=[i];for(let o=0;o<n.length;o++){const e=n[o];if(!e)continue;const i=l[o]||[];let s=1;if(a.length>1)for(;s<a.length;s++){const e=(null==(t=a[s])?void 0:t.markKey)||"",n=i.indexOf(e);if(-1===n)break;i.splice(n,1)}a=a.slice(0,s);let c=a[a.length-1];if(c){for(const t of i){const n=r.find((e=>e._key===t)),l=n?n._type:t,i={_type:"@span",_key:e._key,children:[],markDef:n,markType:l,markKey:t};c.children.push(i),a.push(i),c=i}if(p(e)){const t=e.text.split("\n");for(let e=t.length;e-- >1;)t.splice(e,0,"\n");c.children=c.children.concat(t.map((e=>({_type:"@text",text:e}))))}else c.children=c.children.concat(e)}}return i.children}(t).map(((e,t)=>l({node:e,isInline:!0,index:t,renderNode:l})));return{_key:t._key||`block-${n}`,children:i,index:n,isInline:r,node:t}}function W(){}var F=n(8032);var z={types:{image:e=>{let{value:t}=e;return t.asset?t.asset.gatsbyImageData?a.createElement(F.G,{image:(0,F.c)(t.asset.gatsbyImageData),alt:t.alt||"Content image",style:{maxWidth:"100%",height:"auto"}}):t.asset.url?a.createElement("img",{src:t.asset.url,alt:t.alt||"Content image",style:{maxWidth:"100%",height:"auto"}}):null:null}},block:{normal:e=>{let{children:t}=e;return a.createElement("p",{style:{lineHeight:"1.6",margin:"1em 0"}},t)}},marks:{link:e=>{let{value:t,children:n}=e;const{href:r}=t;return a.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer",style:{color:"blue"}},n)}},list:{bullet:e=>{let{children:t}=e;return a.createElement("ul",null,t)},number:e=>{let{children:t}=e;return a.createElement("ol",null,t)}},listItem:{bullet:e=>{let{children:t}=e;return a.createElement("li",null,t)},number:e=>{let{children:t}=e;return a.createElement("li",null,t)}},hardBreak:()=>a.createElement("br",null),unknownMark:e=>{let{children:t}=e;return a.createElement("span",{style:{backgroundColor:"yellow"}},t)},unknownType:e=>{let{value:t}=e;return a.createElement("div",{style:{border:"1px solid red",padding:"10px"}},"Unknown type: ",JSON.stringify(t))},unknownBlockStyle:e=>{let{children:t}=e;return a.createElement("div",{style:{fontStyle:"italic",color:"gray"}},t)},unknownList:e=>{let{children:t}=e;return a.createElement("ul",{style:{listStyle:"square"}},t)},unknownListItem:e=>{let{children:t}=e;return a.createElement("li",{style:{color:"red"}},t)}};var H=e=>{var t,n;let{title:r,publishedAt:l,_rawBody:i,image:o}=e;const s=null!=o&&null!==(t=o.asset)&&void 0!==t&&t.gatsbyImageData?(0,F.c)(o.asset.gatsbyImageData):null,c=null==o||null===(n=o.asset)||void 0===n?void 0:n.url;return a.createElement("article",null,a.createElement("h1",null,r),a.createElement("p",null," ","Articolo pubblicato in data:"," ",new Date(l).toLocaleDateString()," "),s&&a.createElement(F.G,{image:s,alt:r}),!s&&c&&a.createElement("img",{src:c,alt:r,style:{maxWidth:"100%",height:"auto"}}),a.createElement(R,{value:i,components:z}))},U=n(3706);const G={}.LOCAL?e=>({query:'{\n            sanityPost(slug: { current: { eq: "'+e+'" } }) { \n              title\n              publishedAt\n              _rawBody\n              image {\n                asset {\n                  gatsbyImageData(layout: CONSTRAINED, width: 800)\n                }\n              }\n            }\n          }',result:"sanityPost",filterFn:e=>e}):e=>({query:"query {\n    allPost {\n      title\n      slug {\n        current\n      }\n      publishedAt\n      bodyRaw\n      image {\n        asset {\n          url\n        }\n      }\n    }\n  }",result:"allPost",filterFn:t=>t.filter((t=>t.slug.current===""+e)).at(0)});var K=()=>{const e=(0,i.useLocation)(),{0:t,1:n}=(0,a.useState)(null),{0:r,1:s}=(0,a.useState)(!0),{0:c,1:u}=(0,a.useState)(null),d=(p=e.pathname).endsWith("/")?p.slice(0,-1):p;var p;const m=G(d);if((0,a.useEffect)((()=>{if(!d)return;(async()=>{s(!0),u(null);try{const e=await fetch(U.i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:m.query})}),t=await e.json();if(t.errors)throw new Error(t.errors[0].message);const r=l()(t.data,m.result),i=m.filterFn(r);console.log(r,i,d),n(i)}catch(e){u(e.message)}finally{s(!1)}})()}),[d]),r)return a.createElement("p",null,"Loading...");if(c)return a.createElement("p",null,"Error: ",c);if(!t)return a.createElement("p",null,"No post found.");const{title:y,publishedAt:h,_rawBody:f,image:g}=t;return a.createElement(o.Z,null,a.createElement(H,{title:y,publishedAt:h,_rawBody:f,image:g}))}}}]);
//# sourceMappingURL=component---src-pages-post-[slug]-tsx-49dbfa105640d601ed82.js.map
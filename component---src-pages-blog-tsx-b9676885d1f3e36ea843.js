"use strict";(self.webpackChunksite_gruppo_natura_lentiai=self.webpackChunksite_gruppo_natura_lentiai||[]).push([[410],{8645:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c}});var l=n(7361),r=n.n(l),a=n(7294),u=n(1883),s=n(9210),o=n(3706);const i={}.LOCAL?{query:"{\n    allSanityPost {\n      nodes {\n        slug {\n          current\n        }\n        title\n      }\n    }\n  }",result:"allSanityPost.nodes"}:{query:"query {\n    allPost {\n      slug {\n        current\n      }\n      title\n    }\n  }",result:"allPost"};t.default=()=>{const{0:e,1:t}=(0,a.useState)([]),{0:n,1:l}=(0,a.useState)(!0),{0:c,1:p}=(0,a.useState)(null);return(0,a.useEffect)((()=>{(async()=>{l(!0),p(null);try{const e=await fetch(o.i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:i.query})}),n=await e.json();if(n.errors)throw new Error(n.errors[0].message);t(r()(n.data,i.result))}catch(e){p(e.message)}finally{l(!1)}})()}),[]),n?a.createElement("p",null,"Loading posts..."):c?a.createElement("p",null,"Error: ",c):a.createElement(s.Z,null,a.createElement("h1",null,"Blog"),a.createElement("ul",null,e.map((e=>a.createElement("li",{key:e.slug.current},a.createElement(u.Link,{to:""+e.slug.current},e.title))))))};const c=()=>a.createElement("title",null,"Gruppo Natura Lentiai - Blog")}}]);
//# sourceMappingURL=component---src-pages-blog-tsx-b9676885d1f3e36ea843.js.map
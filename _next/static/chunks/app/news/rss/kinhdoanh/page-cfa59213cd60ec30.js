(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[602],{5419:function(e,t,n){Promise.resolve().then(n.bind(n,7399))},3839:function(e,t,n){"use strict";n.d(t,{Q:function(){return s}});var r=n(7945);let a=new(n.n(r)());async function s(e){return(await a.parseURL(e)).items}},7212:function(e,t,n){"use strict";n.d(t,{FT:function(){return i}});var r=n(2265),a=n(7437);let s=["as","disabled"];function i({tagName:e,disabled:t,href:n,target:r,rel:a,role:s,onClick:i,tabIndex:l=0,type:c}){e||(e=null!=n||null!=r||null!=a?"a":"button");let o={tagName:e};if("button"===e)return[{type:c||"button",disabled:t},o];let d=r=>{var a;if(!t&&("a"!==e||(a=n)&&"#"!==a.trim())||r.preventDefault(),t){r.stopPropagation();return}null==i||i(r)};return"a"===e&&(n||(n="#"),t&&(n=void 0)),[{role:null!=s?s:"button",disabled:void 0,tabIndex:t?void 0:l,href:n,target:"a"===e?r:void 0,"aria-disabled":t||void 0,rel:"a"===e?a:void 0,onClick:d,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),d(e))}},o]}let l=r.forwardRef((e,t)=>{let{as:n,disabled:r}=e,l=function(e,t){if(null==e)return{};var n={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,s),[c,{tagName:o}]=i(Object.assign({tagName:n,disabled:r},l));return(0,a.jsx)(o,Object.assign({},l,c,{ref:t}))});l.displayName="Button",t.ZP=l},2808:function(e,t,n){"use strict";var r=n(6800),a=n.n(r),s=n(2265),i=n(7212),l=n(2574),c=n(7437);let o=s.forwardRef((e,t)=>{let{as:n,bsPrefix:r,variant:s="primary",size:o,active:d=!1,disabled:u=!1,className:h,...f}=e,x=(0,l.vE)(r,"btn"),[p,{tagName:j}]=(0,i.FT)({tagName:n,disabled:u,...f});return(0,c.jsx)(j,{...p,...f,ref:t,disabled:u,className:a()(h,x,d&&"active",s&&"".concat(x,"-").concat(s),o&&"".concat(x,"-").concat(o),f.href&&u&&"disabled")})});o.displayName="Button",t.Z=o},7399:function(e,t,n){"use strict";n.r(t);var r=n(7437);n(2265);var a=n(2824),s=n(9811),i=n(2808),l=n(3839);let c=async()=>{let e=await (0,l.Q)("https://vnexpress.net/rss/kinh-doanh.rss"),t=async e=>{var t;let n="\n    T\xean bản tin: ".concat(e.title,"\n    H\xecnh: ").concat((null===(t=e.enclosure)||void 0===t?void 0:t.url)||"No image","\n    Link: ").concat(e.link,"\n    Nội dung: ").concat(e.contentSnippet,"\n    ");try{let e=await fetch("/api/sendTelegramMessage",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:n})}),t=await e.json();t.success?alert("Message sent successfully!"):alert("Failed to send message: "+t.error)}catch(e){console.error("Error sending message:",e),alert("An error occurred while sending the message.")}};return(0,r.jsxs)(a.Z,{className:"mt-4",children:[(0,r.jsx)("h1",{children:"Health News RSS Feed"}),(0,r.jsx)("p",{className:"lead",children:"Latest health news from VnExpress."}),(0,r.jsxs)(s.Z,{striped:!0,bordered:!0,hover:!0,children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"#"}),(0,r.jsx)("th",{children:"Image"}),(0,r.jsx)("th",{children:"Title"}),(0,r.jsx)("th",{children:"Description"}),(0,r.jsx)("th",{children:"Publication Date"}),(0,r.jsx)("th",{children:"Link"}),(0,r.jsx)("th",{children:"Actions"})]})}),(0,r.jsx)("tbody",{children:e.map((e,n)=>{var a;return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:n+1}),(0,r.jsx)("td",{children:(null===(a=e.enclosure)||void 0===a?void 0:a.url)?(0,r.jsx)("img",{src:e.enclosure.url,alt:e.title,style:{maxWidth:"100px",maxHeight:"auto"}}):"No image"}),(0,r.jsx)("td",{children:e.title}),(0,r.jsx)("td",{children:e.contentSnippet}),(0,r.jsx)("td",{children:new Date(e.pubDate||e.isoDate).toLocaleDateString()}),(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:"Read More"})}),(0,r.jsx)("td",{children:(0,r.jsx)(i.Z,{variant:"primary",onClick:()=>t(e),children:"Send Message"})})]},n)})})]})]})};t.default=c}},function(e){e.O(0,[535,971,23,744],function(){return e(e.s=5419)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[178],{1824:function(e,t,n){Promise.resolve().then(n.bind(n,5393))},9430:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var o=n(3075);function a(e){let{theme:t,name:n,props:a}=e;return t&&t.components&&t.components[n]&&t.components[n].defaultProps?(0,o.Z)(t.components[n].defaultProps,a):a}},7449:function(e,t){"use strict";function n(){return null}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1624:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var o=n(7437),a=n(9671),r=n.n(a),i=n(2265),s=n.t(i,2),l=n(3815),c=n(9430),u=n(4828);let d=s.useSyncExternalStore;var p=n(1326),m=n(511),f=n(1002),g=n(335),h=n(1444),_=n(9381),x=(0,n(9018).Z)([(0,o.jsx)("circle",{cx:"12",cy:"12",r:"3.2"},"0"),(0,o.jsx)("path",{d:"M9 2 7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5"},"1")],"PhotoCamera"),v=n(6548),j=n(8460);n(7233);var b=e=>{let{visible:t}=e;return(0,o.jsx)(p.Z,{className:"animated-tick ".concat(t?"visible":""),children:(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"40",height:"40",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"tick-icon ".concat(t?"fill-color":""),children:(0,o.jsx)("path",{d:"M20 6L9 17l-5-5"})})})},w=n(4962);function y(){let e=(0,h.I0)(),[t,n]=(0,i.useState)(null),[a,s]=(0,i.useState)(""),[y,Z]=(0,i.useState)(!1),k=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(0,u.Z)(),o="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches:a=!1,matchMedia:r=o?window.matchMedia:null,ssrMatchMedia:s=null,noSsr:p=!1}=(0,c.Z)({name:"MuiUseMediaQuery",props:t,theme:n}),m="function"==typeof e?e(n):e;return(void 0!==d?function(e,t,n,o,a){let r=i.useCallback(()=>t,[t]),s=i.useMemo(()=>{if(a&&n)return()=>n(e).matches;if(null!==o){let{matches:t}=o(e);return()=>t}return r},[r,e,o,a,n]),[l,c]=i.useMemo(()=>{if(null===n)return[r,()=>()=>{}];let t=n(e);return[()=>t.matches,e=>(t.addListener(e),()=>{t.removeListener(e)})]},[r,n,e]);return d(c,l,s)}:function(e,t,n,o,a){let[r,s]=i.useState(()=>a&&n?n(e).matches:o?o(e).matches:t);return(0,l.Z)(()=>{let t=!0;if(!n)return;let o=n(e),a=()=>{t&&s(o.matches)};return a(),o.addListener(a),()=>{t=!1,o.removeListener(a)}},[e,n]),r})(m=m.replace(/^@media( ?)/m,""),a,r,s,p)}("(max-width:600px)"),N=(0,_.TA)({initialValues:{postText:"",image:null},onSubmit:o=>{t?e((0,j.q2)({body:o.postText,image:t})).then(()=>{Z(!0),setTimeout(()=>{Z(!1)},2e3),N.resetForm(),n(null),s(""),w.ZP.success("Post is added, check your Profile",{position:"top-center"}),e((0,j.ww)(localStorage.getItem("userId")))}).catch(e=>{console.error("Submission error: ",e)}):w.ZP.error("image and content can't be empty",{position:"top-center"})}});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(p.Z,{component:"form",onSubmit:N.handleSubmit,className:r().container,children:[(0,o.jsx)(m.Z,{variant:"h6",className:r().heading,children:"Create a Post"}),(0,o.jsx)(f.Z,{name:"postText",placeholder:"What's on your mind?",multiline:!0,rows:k?3:4,variant:"outlined",fullWidth:!0,onChange:N.handleChange,value:N.values.postText,className:r().textField}),(0,o.jsxs)(p.Z,{className:r().actions,children:[(0,o.jsxs)(p.Z,{className:r().uploadContainer,children:[(0,o.jsxs)(g.Z,{color:"primary","aria-label":"upload picture",component:"label",className:r().uploadButton,children:[(0,o.jsx)("input",{hidden:!0,accept:"image/*",type:"file",onChange:e=>{var t;let o=(null===(t=e.target.files)||void 0===t?void 0:t[0])||null;o&&(n(o),s(o.name))}}),(0,o.jsx)(x,{titleAccess:"Upload picture"})]}),(0,o.jsx)(p.Z,{className:r().fileNames,children:a&&(0,o.jsx)(m.Z,{className:r().fileName,children:a})})]}),(0,o.jsx)(v.Z,{type:"submit",variant:"contained",className:r().postButton,children:"Post"})]})]}),(0,o.jsx)(b,{visible:y})]})}},5393:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var o=n(7437),a=n(8460),r=n(8433);class i extends Error{}i.prototype.name="InvalidTokenError";var s=n(2265),l=n(1444),c=n(918),u=n(5539),d=n(1624),p=n(6463),m=n(7449),f=n.n(m);function g(){let{userData:e}=(0,l.v9)(e=>e.auth),t=(0,p.useRouter)(),{userPosts:n}=(0,l.v9)(e=>e.posts),m=(0,l.I0)(),g=()=>localStorage.getItem("loggedUser"),h=(()=>{let e=g();return e?function(e,t){let n;if("string"!=typeof e)throw new i("Invalid token specified: must be a string");t||(t={});let o=!0===t.header?0:1,a=e.split(".")[o];if("string"!=typeof a)throw new i(`Invalid token specified: missing part #${o+1}`);try{n=function(e){let t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw Error("base64 string is not of the correct length")}try{var n;return n=t,decodeURIComponent(atob(n).replace(/(.)/g,(e,t)=>{let n=t.charCodeAt(0).toString(16).toUpperCase();return n.length<2&&(n="0"+n),"%"+n}))}catch(e){return atob(t)}}(a)}catch(e){throw new i(`Invalid token specified: invalid base64 for part #${o+1} (${e.message})`)}try{return JSON.parse(n)}catch(e){throw new i(`Invalid token specified: invalid json for part #${o+1} (${e.message})`)}}(e).user:null})();return h&&(console.log(h),localStorage.setItem("userId",h),console.log(localStorage.getItem("userId"))),(0,s.useEffect)(()=>{h?m((0,a.ww)(h)):t.push("/login")},[]),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{children:[(0,o.jsxs)(f(),{children:[(0,o.jsx)("title",{children:"Profile"}),(0,o.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,o.jsx)("link",{rel:"icon",type:"image/svg+xml",href:"src/assets/images/fake-logo.jpg"})]}),(0,o.jsx)(d.Z,{}),n?(0,o.jsxs)(r.ZP,{container:!0,spacing:2,children:[(0,o.jsx)(r.ZP,{item:!0,xs:3}),(0,o.jsx)(r.ZP,{item:!0,md:6,xs:12,sx:{display:"flex",flexDirection:"column",gap:"20px",marginBlock:"20px"},children:null==n?void 0:n.map(e=>(0,o.jsx)(u.Z,{postObj:e},e._id))}),(0,o.jsx)(r.ZP,{item:!0,xs:3})]}):(0,o.jsx)(c.Z,{})]})})}},7233:function(){},9671:function(e){e.exports={main:"page_main__GlU4n",description:"page_description__86bsR",code:"page_code__9lUUd",grid:"page_grid__f5Kdy",card:"page_card__QV0Om",center:"page_center__5oHG7",logo:"page_logo__7fc9l",content:"page_content__kDoxQ",vercelLogo:"page_vercelLogo__rOY_u",container:"page_container__aoG4z",heading:"page_heading__ZPgh_",textField:"page_textField__wu0bS","MuiOutlinedInput-root":"page_MuiOutlinedInput-root__hJdQy",actions:"page_actions__e35f9",uploadContainer:"page_uploadContainer__xkOCW",uploadButton:"page_uploadButton__b2HuV",fileNames:"page_fileNames__vzclm",fileName:"page_fileName__2ugHa",postButton:"page_postButton__z60j1",rotate:"page_rotate__durgN"}}},function(e){e.O(0,[393,235,472,866,322,242,180,352,971,23,744],function(){return e(e.s=1824)}),_N_E=e.O()}]);
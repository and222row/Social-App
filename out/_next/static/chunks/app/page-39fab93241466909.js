(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6667:function(e,t,n){Promise.resolve().then(n.bind(n,8212))},9430:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var o=n(3075);function a(e){let{theme:t,name:n,props:a}=e;return t&&t.components&&t.components[n]&&t.components[n].defaultProps?(0,o.Z)(t.components[n].defaultProps,a):a}},7449:function(e,t){"use strict";function n(){return null}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1624:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var o=n(7437),a=n(9671),i=n.n(a),s=n(2265),r=n.t(s,2),l=n(3815),c=n(9430),u=n(4828);let d=r.useSyncExternalStore;var p=n(1326),m=n(511),_=n(1002),f=n(335),g=n(1444),h=n(9381),x=(0,n(9018).Z)([(0,o.jsx)("circle",{cx:"12",cy:"12",r:"3.2"},"0"),(0,o.jsx)("path",{d:"M9 2 7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5"},"1")],"PhotoCamera"),j=n(6548),v=n(8460);n(7233);var Z=e=>{let{visible:t}=e;return(0,o.jsx)(p.Z,{className:"animated-tick ".concat(t?"visible":""),children:(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"40",height:"40",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"tick-icon ".concat(t?"fill-color":""),children:(0,o.jsx)("path",{d:"M20 6L9 17l-5-5"})})})},b=n(4962);function y(){let e=(0,g.I0)(),[t,n]=(0,s.useState)(null),[a,r]=(0,s.useState)(""),[y,N]=(0,s.useState)(!1),P=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(0,u.Z)(),o="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches:a=!1,matchMedia:i=o?window.matchMedia:null,ssrMatchMedia:r=null,noSsr:p=!1}=(0,c.Z)({name:"MuiUseMediaQuery",props:t,theme:n}),m="function"==typeof e?e(n):e;return(void 0!==d?function(e,t,n,o,a){let i=s.useCallback(()=>t,[t]),r=s.useMemo(()=>{if(a&&n)return()=>n(e).matches;if(null!==o){let{matches:t}=o(e);return()=>t}return i},[i,e,o,a,n]),[l,c]=s.useMemo(()=>{if(null===n)return[i,()=>()=>{}];let t=n(e);return[()=>t.matches,e=>(t.addListener(e),()=>{t.removeListener(e)})]},[i,n,e]);return d(c,l,r)}:function(e,t,n,o,a){let[i,r]=s.useState(()=>a&&n?n(e).matches:o?o(e).matches:t);return(0,l.Z)(()=>{let t=!0;if(!n)return;let o=n(e),a=()=>{t&&r(o.matches)};return a(),o.addListener(a),()=>{t=!1,o.removeListener(a)}},[e,n]),i})(m=m.replace(/^@media( ?)/m,""),a,i,r,p)}("(max-width:600px)"),w=(0,h.TA)({initialValues:{postText:"",image:null},onSubmit:o=>{t?e((0,v.q2)({body:o.postText,image:t})).then(()=>{N(!0),setTimeout(()=>{N(!1)},2e3),w.resetForm(),n(null),r(""),b.ZP.success("Post is added, check your Profile",{position:"top-center"}),e((0,v.ww)(localStorage.getItem("userId")))}).catch(e=>{console.error("Submission error: ",e)}):b.ZP.error("image and content can't be empty",{position:"top-center"})}});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(p.Z,{component:"form",onSubmit:w.handleSubmit,className:i().container,children:[(0,o.jsx)(m.Z,{variant:"h6",className:i().heading,children:"Create a Post"}),(0,o.jsx)(_.Z,{name:"postText",placeholder:"What's on your mind?",multiline:!0,rows:P?3:4,variant:"outlined",fullWidth:!0,onChange:w.handleChange,value:w.values.postText,className:i().textField}),(0,o.jsxs)(p.Z,{className:i().actions,children:[(0,o.jsxs)(p.Z,{className:i().uploadContainer,children:[(0,o.jsxs)(f.Z,{color:"primary","aria-label":"upload picture",component:"label",className:i().uploadButton,children:[(0,o.jsx)("input",{hidden:!0,accept:"image/*",type:"file",onChange:e=>{var t;let o=(null===(t=e.target.files)||void 0===t?void 0:t[0])||null;o&&(n(o),r(o.name))}}),(0,o.jsx)(x,{titleAccess:"Upload picture"})]}),(0,o.jsx)(p.Z,{className:i().fileNames,children:a&&(0,o.jsx)(m.Z,{className:i().fileName,children:a})})]}),(0,o.jsx)(j.Z,{type:"submit",variant:"contained",className:i().postButton,children:"Post"})]})]}),(0,o.jsx)(Z,{visible:y})]})}},8212:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var o=n(7437),a=n(8433),i=n(5539),s=n(1444),r=n(2265),l=n(8460),c=n(918),u=n(1624),d=n(6463),p=n(7449),m=n.n(p);function _(){let e=(0,s.I0)(),{allPosts:t}=(0,s.v9)(e=>e.posts),n=(0,d.useRouter)();return(0,r.useEffect)(()=>{localStorage.getItem("loggedUser")?e((0,l.Bd)()):n.push("/login")},[e]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(m(),{children:[(0,o.jsx)("title",{children:"Social APP"}),(0,o.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,o.jsx)("link",{rel:"icon",type:"image/svg+xml",href:"src/assets/images/fake-logo.jpg"})]}),(0,o.jsx)(u.Z,{}),t?(0,o.jsxs)(a.ZP,{container:!0,spacing:2,children:[(0,o.jsx)(a.ZP,{item:!0,xs:3}),(0,o.jsx)(a.ZP,{item:!0,md:6,xs:12,sx:{display:"flex",flexDirection:"column",gap:"20px",marginBlock:"20px"},children:null==t?void 0:t.map(e=>(0,o.jsx)(i.Z,{postObj:e},e._id))}),(0,o.jsx)(a.ZP,{item:!0,xs:3})]}):(0,o.jsx)(c.Z,{})]})}},7233:function(){},9671:function(e){e.exports={main:"page_main__GlU4n",description:"page_description__86bsR",code:"page_code__9lUUd",grid:"page_grid__f5Kdy",card:"page_card__QV0Om",center:"page_center__5oHG7",logo:"page_logo__7fc9l",content:"page_content__kDoxQ",vercelLogo:"page_vercelLogo__rOY_u",container:"page_container__aoG4z",heading:"page_heading__ZPgh_",textField:"page_textField__wu0bS","MuiOutlinedInput-root":"page_MuiOutlinedInput-root__hJdQy",actions:"page_actions__e35f9",uploadContainer:"page_uploadContainer__xkOCW",uploadButton:"page_uploadButton__b2HuV",fileNames:"page_fileNames__vzclm",fileName:"page_fileName__2ugHa",postButton:"page_postButton__z60j1",rotate:"page_rotate__durgN"}}},function(e){e.O(0,[393,235,472,866,322,242,180,352,971,23,744],function(){return e(e.s=6667)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[11],{7414:function(e,t,n){Promise.resolve().then(n.bind(n,3488))},6014:function(e,t,n){"use strict";n.d(t,{Z:function(){return M}});var r=n(3950),a=n(2988),o=n(2265),s=n(4839),i=n(587),l=n(6990),u=n(7434),d=n(9430),c=n(4874),p=n(5785),m=n(424),h=n(3143),f=n(7267);let g=["ownerState"],v=["variants"],x=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function Z(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}let y=(0,h.Z)(),b=e=>e?e.charAt(0).toLowerCase()+e.slice(1):e;function k({defaultTheme:e,theme:t,themeId:n}){return 0===Object.keys(t).length?e:t[n]||t}function w(e,t){let{ownerState:n}=t,o=(0,r.Z)(t,g),s="function"==typeof e?e((0,a.Z)({ownerState:n},o)):e;if(Array.isArray(s))return s.flatMap(e=>w(e,(0,a.Z)({ownerState:n},o)));if(s&&"object"==typeof s&&Array.isArray(s.variants)){let{variants:e=[]}=s,t=(0,r.Z)(s,v);return e.forEach(e=>{let r=!0;"function"==typeof e.props?r=e.props((0,a.Z)({ownerState:n},o,n)):Object.keys(e.props).forEach(t=>{(null==n?void 0:n[t])!==e.props[t]&&o[t]!==e.props[t]&&(r=!1)}),r&&(Array.isArray(t)||(t=[t]),t.push("function"==typeof e.style?e.style((0,a.Z)({ownerState:n},o,n)):e.style))}),t}return s}let C=function(e={}){let{themeId:t,defaultTheme:n=y,rootShouldForwardProp:o=Z,slotShouldForwardProp:s=Z}=e,i=e=>(0,f.Z)((0,a.Z)({},e,{theme:k((0,a.Z)({},e,{defaultTheme:n,themeId:t}))}));return i.__mui_systemSx=!0,(e,l={})=>{var u;let d;(0,p.internal_processStyles)(e,e=>e.filter(e=>!(null!=e&&e.__mui_systemSx)));let{name:c,slot:h,skipVariantsResolver:f,skipSx:g,overridesResolver:v=(u=b(h))?(e,t)=>t[u]:null}=l,y=(0,r.Z)(l,x),C=void 0!==f?f:h&&"Root"!==h&&"root"!==h||!1,S=g||!1,P=Z;"Root"===h||"root"===h?P=o:h?P=s:"string"==typeof e&&e.charCodeAt(0)>96&&(P=void 0);let R=(0,p.default)(e,(0,a.Z)({shouldForwardProp:P,label:d},y)),_=e=>"function"==typeof e&&e.__emotion_real!==e||(0,m.P)(e)?r=>w(e,(0,a.Z)({},r,{theme:k({theme:r.theme,defaultTheme:n,themeId:t})})):e,W=(r,...o)=>{let s=_(r),l=o?o.map(_):[];c&&v&&l.push(e=>{let r=k((0,a.Z)({},e,{defaultTheme:n,themeId:t}));if(!r.components||!r.components[c]||!r.components[c].styleOverrides)return null;let o=r.components[c].styleOverrides,s={};return Object.entries(o).forEach(([t,n])=>{s[t]=w(n,(0,a.Z)({},e,{theme:r}))}),v(e,s)}),c&&!C&&l.push(e=>{var r;let o=k((0,a.Z)({},e,{defaultTheme:n,themeId:t}));return w({variants:null==o||null==(r=o.components)||null==(r=r[c])?void 0:r.variants},(0,a.Z)({},e,{theme:o}))}),S||l.push(i);let u=l.length-o.length;if(Array.isArray(r)&&u>0){let e=Array(u).fill("");(s=[...r,...e]).raw=[...r.raw,...e]}let d=R(s,...l);return e.muiName&&(d.muiName=e.muiName),d};return R.withConfig&&(W.withConfig=R.withConfig),W}}();var S=n(7437);let P=["className","component","disableGutters","fixed","maxWidth","classes"],R=(0,h.Z)(),_=C("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[`maxWidth${(0,u.Z)(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),W=e=>(function(e){let{props:t,name:n,defaultTheme:r,themeId:a}=e,o=(0,c.Z)(r);return a&&(o=o[a]||o),(0,d.Z)({theme:o,name:n,props:t})})({props:e,name:"MuiContainer",defaultTheme:R}),j=(e,t)=>{let{classes:n,fixed:r,disableGutters:a,maxWidth:o}=e,s={root:["root",o&&`maxWidth${(0,u.Z)(String(o))}`,r&&"fixed",a&&"disableGutters"]};return(0,l.Z)(s,e=>(0,i.ZP)(t,e),n)};var A=n(2272),E=n(8024),O=n(5885),M=function(e={}){let{createStyledComponent:t=_,useThemeProps:n=W,componentName:i="MuiContainer"}=e,l=t(({theme:e,ownerState:t})=>(0,a.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}),({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce((t,n)=>{let r=e.breakpoints.values[n];return 0!==r&&(t[e.breakpoints.up(n)]={maxWidth:`${r}${e.breakpoints.unit}`}),t},{}),({theme:e,ownerState:t})=>(0,a.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}}));return o.forwardRef(function(e,t){let o=n(e),{className:u,component:d="div",disableGutters:c=!1,fixed:p=!1,maxWidth:m="lg"}=o,h=(0,r.Z)(o,P),f=(0,a.Z)({},o,{component:d,disableGutters:c,fixed:p,maxWidth:m}),g=j(f,i);return(0,S.jsx)(l,(0,a.Z)({as:d,ownerState:f,className:(0,s.Z)(g.root,u),ref:t},h))})}({createStyledComponent:(0,E.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t["maxWidth".concat((0,A.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,O.i)({props:e,name:"MuiContainer"})})},9430:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(3075);function a(e){let{theme:t,name:n,props:a}=e;return t&&t.components&&t.components[n]&&t.components[n].defaultProps?(0,r.Z)(t.components[n].defaultProps,a):a}},3488:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(7437),a=n(7954),o=n(6014),s=n(4990),i=n(1002),l=n(6548),u=n(9381),d=n(6463);n(2265);var c=n(4962),p=n(1444);function m(){let e=(0,p.I0)(),t=(0,d.useRouter)(),n=(0,u.TA)({initialValues:{name:"",email:"",password:"",rePassword:"",dateOfBirth:"7-10-1994",gender:"male"},onSubmit:function(n){console.log(n),e((0,a.iq)(n)).then(e=>{console.log(e),"success"==e.payload.message?(c.ZP.success("welcome back",{position:"top-right"}),t.push("/login")):c.ZP.error(e.payload.response.data.error,{position:"top-right"})})}});return(0,r.jsx)(o.Z,{maxWidth:"sm",children:(0,r.jsx)(s.Z,{elevation:20,sx:{p:5,my:7},children:(0,r.jsxs)("form",{onSubmit:n.handleSubmit,style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,r.jsx)(i.Z,{placeholder:"name...",id:"name",label:"name",variant:"outlined",value:n.values.name,onChange:n.handleChange}),(0,r.jsx)(i.Z,{placeholder:"Email...",id:"email",label:"Email",variant:"outlined",value:n.values.email,onChange:n.handleChange}),(0,r.jsx)(i.Z,{placeholder:"Password...",type:"password",id:"password",label:"password",variant:"outlined",value:n.values.password,onChange:n.handleChange}),(0,r.jsx)(i.Z,{placeholder:"rePassword...",type:"password",id:"rePassword",label:"rePassword",variant:"outlined",value:n.values.rePassword,onChange:n.handleChange}),(0,r.jsx)(l.Z,{type:"submit",variant:"contained",children:"Register"})]})})})}},7954:function(e,t,n){"use strict";n.d(t,{iq:function(){return s},q0:function(){return o}});var r=n(6862),a=n(8472);let o=(0,r.hg)("auth/login",async function(e){return await a.Z.post("https://linked-posts.routemisr.com/users/signin",e).then(e=>(console.log(e),e.data)).catch(e=>(console.log(e),e))}),s=(0,r.hg)("auth/register",async function(e){return await a.Z.post("https://linked-posts.routemisr.com/users/signup",e).then(e=>(console.log(e),e.data)).catch(e=>(console.log(e),e))}),i=(0,r.oM)({name:"auth",initialState:{userToken:null,userData:null,isError:!1,isLoading:!1},reducers:{clearUserData:function(e){e.userData=null,e.userToken=null}},extraReducers:function(e){e.addCase(o.fulfilled,function(e,t){e.isLoading=!1,e.userToken=t.payload.token,localStorage.setItem("loggedUser",t.payload.token)}),e.addCase(s.fulfilled,function(e,t){e.isLoading=!1})}});t.ZP=i.reducer}},function(e){e.O(0,[235,472,866,322,971,23,744],function(){return e(e.s=7414)}),_N_E=e.O()}]);
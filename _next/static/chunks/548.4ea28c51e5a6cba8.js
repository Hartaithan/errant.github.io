"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[548],{4548:function(e,o,n){let r;n.r(o),n.d(o,{default:function(){return B}});var t,a=n(7437);let s=(e,o)=>Math.floor(Math.random()*(o-e+1)+e);var i=n(1448);let l=e=>new i.Vector3(e,e,e),c=function(){for(var e=arguments.length,o=Array(e),n=0;n<e;n++)o[n]=arguments[n];o[3].center()};var m=n(2508),h=n(2265);let d=()=>(0,a.jsx)("meshStandardMaterial",{color:"white",wireframe:!0,transparent:!0,opacity:.3}),f=(0,h.forwardRef)((e,o)=>(0,a.jsxs)("mesh",{ref:o,...e,children:[(0,a.jsx)("boxGeometry",{args:[1,1,1]}),(0,a.jsx)(d,{})]})),u=(0,h.forwardRef)((e,o)=>(0,a.jsxs)("mesh",{ref:o,...e,children:[(0,a.jsx)("icosahedronGeometry",{args:[1,1]}),(0,a.jsx)(d,{})]})),p=(0,h.forwardRef)((e,o)=>(0,a.jsxs)("mesh",{ref:o,...e,children:[(0,a.jsx)("octahedronGeometry",{args:[1,0]}),(0,a.jsx)(d,{})]})),x=(0,h.forwardRef)((e,o)=>(0,a.jsxs)("mesh",{ref:o,...e,children:[(0,a.jsx)("torusKnotGeometry",{args:[1,.1,160,10,3,5]}),(0,a.jsx)(d,{})]})),j=(0,h.forwardRef)((e,o)=>(0,a.jsxs)("mesh",{ref:o,...e,children:[(0,a.jsx)("sphereGeometry",{args:[1,8,8]}),(0,a.jsx)(d,{})]})),z=(0,h.forwardRef)((e,o)=>(0,a.jsxs)("mesh",{ref:o,...e,children:[(0,a.jsx)("tetrahedronGeometry",{args:[1,0]}),(0,a.jsx)(d,{})]})),C=(0,h.forwardRef)((e,o)=>(0,a.jsxs)("mesh",{ref:o,...e,children:[(0,a.jsx)("torusGeometry",{args:[25,8,4,4]}),(0,a.jsx)(d,{})]})),g=(0,h.forwardRef)((e,o)=>{let{children:n,...r}=e;return(0,a.jsx)("mesh",{ref:o,...r,children:(0,a.jsxs)(m.o,{size:2,height:.3,curveSegments:2,font:"/fonts/arial.json",onBeforeRender:c,children:[n,(0,a.jsx)(d,{})]})})}),w=[{Component:f,scale:2,zoom:.7,rotation:.003},{Component:u,scale:1.5,zoom:.7,rotation:.002},{Component:p,scale:1.5,zoom:.7,rotation:.006},{Component:x,scale:1,zoom:.65,rotation:.005},{Component:j,scale:1.5,zoom:.7,rotation:.0025},{Component:z,scale:2,zoom:.6,rotation:.005},{Component:C,scale:.047,zoom:.65,rotation:.005},{Component:g,scale:1.3,zoom:.6,rotation:.005,children:":D"},{Component:g,scale:.8,zoom:.5,rotation:.005,children:"(•_•)"},{Component:g,scale:1.4,zoom:.7,rotation:.005,children:"H"},{Component:g,scale:1.4,zoom:.6,rotation:.005,children:"D:"},{Component:g,scale:.6,zoom:.45,rotation:.005,children:"( ͡\xb0 ͜ʖ ͡\xb0)"},{Component:g,scale:1.4,zoom:.7,rotation:.005,children:"if"},{Component:g,scale:.8,zoom:.5,rotation:.005,children:"else"},{Component:g,scale:.7,zoom:.45,rotation:.005,children:"ʕ•ᴥ•ʔ"},{Component:g,scale:.5,zoom:.5,rotation:.005,children:"( ͠\xb0 ͟ل ͡\xb0)"},{Component:g,scale:1,zoom:.9,rotation:.005,children:"┼"},{Component:g,scale:1.7,zoom:.7,rotation:.005,children:"☺"},{Component:g,scale:1.3,zoom:.6,rotation:.005,children:"☼"},{Component:g,scale:1,zoom:.9,rotation:.005,children:"░"},{Component:g,scale:1.4,zoom:.7,rotation:.005,children:"ʘ"},{Component:g,scale:1.4,zoom:.8,rotation:.005,children:"Ξ"},{Component:g,scale:1.2,zoom:.65,rotation:.005,children:"҉"},{Component:g,scale:1.3,zoom:.6,rotation:.005,children:"҈"},{Component:g,scale:2.2,zoom:.65,rotation:.005,children:"◌"}],v=(e,o,n)=>{(0,h.useEffect)(()=>(window.addEventListener(e,o,n),()=>window.removeEventListener(e,o,n)),[e,o])},R={passive:!0},y=(t=e=>{e({width:window.innerWidth||null,height:window.innerHeight||null})},function(){for(var e=arguments.length,o=Array(e),n=0;n<e;n++)o[n]=arguments[n];clearTimeout(r),r=setTimeout(()=>t(...o),500)}),E=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,[o,n]=(0,h.useState)({width:e,height:e}),r=(0,h.useCallback)(()=>y(n),[]);return v("resize",r,R),v("orientationchange",r,R),(0,h.useEffect)(r,[]),o};var G=n(4725),b=n(6010),k=n(7283);let{Component:M,scale:_,zoom:A,children:D,rotation:L}=(()=>{let e=s(0,w.length-1);return w[e]})(),S=e=>e&&e<1e3?A:1,T=e=>{let{clock:o,mesh:n}=e;if(!n.current)return;let r=o.getElapsedTime();n.current.rotation.y+=L,n.current.position.y=.1*Math.sin(r)},H=e=>{let{zoom:o,camera:n,width:r}=e;if(!o.current.changing||!n.current)return;let t=S(r);n.current.zoom+=(t-n.current.zoom)*.1,n.current.updateProjectionMatrix(),.01>Math.abs(n.current.zoom-o.current.value)&&(o.current.changing=!1)},N=e=>{let{zoom:o,width:n}=e;if(!n)return;let r=S(n);o.current={value:r,changing:!0}},P=e=>{let{camera:o,onAfterRender:n}=e,{width:r}=E(),t=(0,h.useRef)(null),s=(0,h.useRef)({value:1,changing:!0});return(0,b.F)(e=>{let{clock:n}=e;T({clock:n,mesh:t}),H({zoom:s,camera:o,width:r})}),(0,h.useEffect)(()=>{N({zoom:s,width:r})},[r]),(0,a.jsx)(M,{ref:t,scale:l(_),onAfterRender:n,children:D})};var B=(0,h.memo)(e=>{let{onAfterRender:o}=e,n=(0,h.useRef)(null);return(0,a.jsxs)(k.Xz,{dpr:window.devicePixelRatio,children:[(0,a.jsx)(G.c,{ref:n,makeDefault:!0,position:[0,0,6]}),(0,a.jsx)("ambientLight",{intensity:10}),(0,a.jsx)(P,{camera:n,onAfterRender:o})]})})}}]);
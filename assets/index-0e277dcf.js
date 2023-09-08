import{r as a,a as $t}from"./index-76fb7be0.js";import{r as je,R as Et}from"./index-d3ea75b5.js";function W(){return W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},W.apply(this,arguments)}function xe(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e==null||e(r),n===!1||!r.defaultPrevented)return t==null?void 0:t(r)}}function Pt(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function Ye(...e){return t=>e.forEach(n=>Pt(n,t))}function Pe(...e){return a.useCallback(Ye(...e),e)}function Ot(e,t=[]){let n=[];function o(i,s){const c=a.createContext(s),l=n.length;n=[...n,s];function f(u){const{scope:h,children:d,...m}=u,w=(h==null?void 0:h[e][l])||c,v=a.useMemo(()=>m,Object.values(m));return a.createElement(w.Provider,{value:v},d)}function p(u,h){const d=(h==null?void 0:h[e][l])||c,m=a.useContext(d);if(m)return m;if(s!==void 0)return s;throw new Error(`\`${u}\` must be used within \`${i}\``)}return f.displayName=i+"Provider",[f,p]}const r=()=>{const i=n.map(s=>a.createContext(s));return function(c){const l=(c==null?void 0:c[e])||i;return a.useMemo(()=>({[`__scope${e}`]:{...c,[e]:l}}),[c,l])}};return r.scopeName=e,[o,At(r,...t)]}function At(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const o=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(i){const s=o.reduce((c,{useScope:l,scopeName:f})=>{const u=l(i)[`__scope${f}`];return{...c,...u}},{});return a.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])}};return n.scopeName=t.scopeName,n}const Xe=a.forwardRef((e,t)=>{const{children:n,...o}=e,r=a.Children.toArray(n),i=r.find(Rt);if(i){const s=i.props.children,c=r.map(l=>l===i?a.Children.count(s)>1?a.Children.only(null):a.isValidElement(s)?s.props.children:null:l);return a.createElement(be,W({},o,{ref:t}),a.isValidElement(s)?a.cloneElement(s,void 0,c):null)}return a.createElement(be,W({},o,{ref:t}),n)});Xe.displayName="Slot";const be=a.forwardRef((e,t)=>{const{children:n,...o}=e;return a.isValidElement(n)?a.cloneElement(n,{...St(o,n.props),ref:t?Ye(t,n.ref):n.ref}):a.Children.count(n)>1?a.Children.only(null):null});be.displayName="SlotClone";const Ct=({children:e})=>a.createElement(a.Fragment,null,e);function Rt(e){return a.isValidElement(e)&&e.type===Ct}function St(e,t){const n={...t};for(const o in t){const r=e[o],i=t[o];/^on[A-Z]/.test(o)?r&&i?n[o]=(...c)=>{i(...c),r(...c)}:r&&(n[o]=r):o==="style"?n[o]={...r,...i}:o==="className"&&(n[o]=[r,i].filter(Boolean).join(" "))}return{...e,...n}}const Dt=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],te=Dt.reduce((e,t)=>{const n=a.forwardRef((o,r)=>{const{asChild:i,...s}=o,c=i?Xe:t;return a.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),a.createElement(c,W({},s,{ref:r}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function Tt(e,t){e&&je.flushSync(()=>e.dispatchEvent(t))}function he(e){const t=a.useRef(e);return a.useEffect(()=>{t.current=e}),a.useMemo(()=>(...n)=>{var o;return(o=t.current)===null||o===void 0?void 0:o.call(t,...n)},[])}function Lt(e,t=globalThis==null?void 0:globalThis.document){const n=he(e);a.useEffect(()=>{const o=r=>{r.key==="Escape"&&n(r)};return t.addEventListener("keydown",o),()=>t.removeEventListener("keydown",o)},[n,t])}const ye="dismissableLayer.update",_t="dismissableLayer.pointerDownOutside",kt="dismissableLayer.focusOutside";let _e;const Mt=a.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),zn=a.forwardRef((e,t)=>{var n;const{disableOutsidePointerEvents:o=!1,onEscapeKeyDown:r,onPointerDownOutside:i,onFocusOutside:s,onInteractOutside:c,onDismiss:l,...f}=e,p=a.useContext(Mt),[u,h]=a.useState(null),d=(n=u==null?void 0:u.ownerDocument)!==null&&n!==void 0?n:globalThis==null?void 0:globalThis.document,[,m]=a.useState({}),w=Pe(t,P=>h(P)),v=Array.from(p.layers),[g]=[...p.layersWithOutsidePointerEventsDisabled].slice(-1),$=v.indexOf(g),b=u?v.indexOf(u):-1,y=p.layersWithOutsidePointerEventsDisabled.size>0,x=b>=$,E=Ft(P=>{const D=P.target,T=[...p.branches].some(O=>O.contains(D));!x||T||(i==null||i(P),c==null||c(P),P.defaultPrevented||l==null||l())},d),R=Wt(P=>{const D=P.target;[...p.branches].some(O=>O.contains(D))||(s==null||s(P),c==null||c(P),P.defaultPrevented||l==null||l())},d);return Lt(P=>{b===p.layers.size-1&&(r==null||r(P),!P.defaultPrevented&&l&&(P.preventDefault(),l()))},d),a.useEffect(()=>{if(u)return o&&(p.layersWithOutsidePointerEventsDisabled.size===0&&(_e=d.body.style.pointerEvents,d.body.style.pointerEvents="none"),p.layersWithOutsidePointerEventsDisabled.add(u)),p.layers.add(u),ke(),()=>{o&&p.layersWithOutsidePointerEventsDisabled.size===1&&(d.body.style.pointerEvents=_e)}},[u,d,o,p]),a.useEffect(()=>()=>{u&&(p.layers.delete(u),p.layersWithOutsidePointerEventsDisabled.delete(u),ke())},[u,p]),a.useEffect(()=>{const P=()=>m({});return document.addEventListener(ye,P),()=>document.removeEventListener(ye,P)},[]),a.createElement(te.div,W({},f,{ref:w,style:{pointerEvents:y?x?"auto":"none":void 0,...e.style},onFocusCapture:xe(e.onFocusCapture,R.onFocusCapture),onBlurCapture:xe(e.onBlurCapture,R.onBlurCapture),onPointerDownCapture:xe(e.onPointerDownCapture,E.onPointerDownCapture)}))});function Ft(e,t=globalThis==null?void 0:globalThis.document){const n=he(e),o=a.useRef(!1),r=a.useRef(()=>{});return a.useEffect(()=>{const i=c=>{if(c.target&&!o.current){let f=function(){Ue(_t,n,l,{discrete:!0})};const l={originalEvent:c};c.pointerType==="touch"?(t.removeEventListener("click",r.current),r.current=f,t.addEventListener("click",r.current,{once:!0})):f()}o.current=!1},s=window.setTimeout(()=>{t.addEventListener("pointerdown",i)},0);return()=>{window.clearTimeout(s),t.removeEventListener("pointerdown",i),t.removeEventListener("click",r.current)}},[t,n]),{onPointerDownCapture:()=>o.current=!0}}function Wt(e,t=globalThis==null?void 0:globalThis.document){const n=he(e),o=a.useRef(!1);return a.useEffect(()=>{const r=i=>{i.target&&!o.current&&Ue(kt,n,{originalEvent:i},{discrete:!1})};return t.addEventListener("focusin",r),()=>t.removeEventListener("focusin",r)},[t,n]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}function ke(){const e=new CustomEvent(ye);document.dispatchEvent(e)}function Ue(e,t,n,{discrete:o}){const r=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&r.addEventListener(e,t,{once:!0}),o?Tt(r,i):r.dispatchEvent(i)}const le=globalThis!=null&&globalThis.document?a.useLayoutEffect:()=>{},Nt=$t["useId".toString()]||(()=>{});let Bt=0;function In(e){const[t,n]=a.useState(Nt());return le(()=>{e||n(o=>o??String(Bt++))},[e]),e||(t?`radix-${t}`:"")}const Ht=["top","right","bottom","left"],Y=Math.min,_=Math.max,ae=Math.round,se=Math.floor,X=e=>({x:e,y:e}),zt={left:"right",right:"left",bottom:"top",top:"bottom"},It={start:"end",end:"start"};function $e(e,t,n){return _(e,Y(t,n))}function H(e,t){return typeof e=="function"?e(t):e}function z(e){return e.split("-")[0]}function J(e){return e.split("-")[1]}function Oe(e){return e==="x"?"y":"x"}function Ae(e){return e==="y"?"height":"width"}function Q(e){return["top","bottom"].includes(z(e))?"y":"x"}function Ce(e){return Oe(Q(e))}function Vt(e,t,n){n===void 0&&(n=!1);const o=J(e),r=Ce(e),i=Ae(r);let s=r==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(s=fe(s)),[s,fe(s)]}function jt(e){const t=fe(e);return[Ee(e),t,Ee(t)]}function Ee(e){return e.replace(/start|end/g,t=>It[t])}function Yt(e,t,n){const o=["left","right"],r=["right","left"],i=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return n?t?r:o:t?o:r;case"left":case"right":return t?i:s;default:return[]}}function Xt(e,t,n,o){const r=J(e);let i=Yt(z(e),n==="start",o);return r&&(i=i.map(s=>s+"-"+r),t&&(i=i.concat(i.map(Ee)))),i}function fe(e){return e.replace(/left|right|bottom|top/g,t=>zt[t])}function Ut(e){return{top:0,right:0,bottom:0,left:0,...e}}function Ke(e){return typeof e!="number"?Ut(e):{top:e,right:e,bottom:e,left:e}}function de(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function Me(e,t,n){let{reference:o,floating:r}=e;const i=Q(t),s=Ce(t),c=Ae(s),l=z(t),f=i==="y",p=o.x+o.width/2-r.width/2,u=o.y+o.height/2-r.height/2,h=o[c]/2-r[c]/2;let d;switch(l){case"top":d={x:p,y:o.y-r.height};break;case"bottom":d={x:p,y:o.y+o.height};break;case"right":d={x:o.x+o.width,y:u};break;case"left":d={x:o.x-r.width,y:u};break;default:d={x:o.x,y:o.y}}switch(J(t)){case"start":d[s]-=h*(n&&f?-1:1);break;case"end":d[s]+=h*(n&&f?-1:1);break}return d}const Kt=async(e,t,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:i=[],platform:s}=n,c=i.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(t));let f=await s.getElementRects({reference:e,floating:t,strategy:r}),{x:p,y:u}=Me(f,o,l),h=o,d={},m=0;for(let w=0;w<c.length;w++){const{name:v,fn:g}=c[w],{x:$,y:b,data:y,reset:x}=await g({x:p,y:u,initialPlacement:o,placement:h,strategy:r,middlewareData:d,rects:f,platform:s,elements:{reference:e,floating:t}});if(p=$??p,u=b??u,d={...d,[v]:{...d[v],...y}},x&&m<=50){m++,typeof x=="object"&&(x.placement&&(h=x.placement),x.rects&&(f=x.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:r}):x.rects),{x:p,y:u}=Me(f,h,l)),w=-1;continue}}return{x:p,y:u,placement:h,strategy:r,middlewareData:d}};async function ee(e,t){var n;t===void 0&&(t={});const{x:o,y:r,platform:i,rects:s,elements:c,strategy:l}=e,{boundary:f="clippingAncestors",rootBoundary:p="viewport",elementContext:u="floating",altBoundary:h=!1,padding:d=0}=H(t,e),m=Ke(d),v=c[h?u==="floating"?"reference":"floating":u],g=de(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(v)))==null||n?v:v.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(c.floating)),boundary:f,rootBoundary:p,strategy:l})),$=u==="floating"?{...s.floating,x:o,y:r}:s.reference,b=await(i.getOffsetParent==null?void 0:i.getOffsetParent(c.floating)),y=await(i.isElement==null?void 0:i.isElement(b))?await(i.getScale==null?void 0:i.getScale(b))||{x:1,y:1}:{x:1,y:1},x=de(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:$,offsetParent:b,strategy:l}):$);return{top:(g.top-x.top+m.top)/y.y,bottom:(x.bottom-g.bottom+m.bottom)/y.y,left:(g.left-x.left+m.left)/y.x,right:(x.right-g.right+m.right)/y.x}}const Fe=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:o,placement:r,rects:i,platform:s,elements:c}=t,{element:l,padding:f=0}=H(e,t)||{};if(l==null)return{};const p=Ke(f),u={x:n,y:o},h=Ce(r),d=Ae(h),m=await s.getDimensions(l),w=h==="y",v=w?"top":"left",g=w?"bottom":"right",$=w?"clientHeight":"clientWidth",b=i.reference[d]+i.reference[h]-u[h]-i.floating[d],y=u[h]-i.reference[h],x=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l));let E=x?x[$]:0;(!E||!await(s.isElement==null?void 0:s.isElement(x)))&&(E=c.floating[$]||i.floating[d]);const R=b/2-y/2,P=E/2-m[d]/2-1,D=Y(p[v],P),T=Y(p[g],P),O=D,F=E-m[d]-T,C=E/2-m[d]/2+R,S=$e(O,C,F),A=J(r)!=null&&C!=S&&i.reference[d]/2-(C<O?D:T)-m[d]/2<0?C<O?O-C:F-C:0;return{[h]:u[h]-A,data:{[h]:S,centerOffset:C-S+A}}}}),qt=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n;const{placement:o,middlewareData:r,rects:i,initialPlacement:s,platform:c,elements:l}=t,{mainAxis:f=!0,crossAxis:p=!0,fallbackPlacements:u,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:d="none",flipAlignment:m=!0,...w}=H(e,t),v=z(o),g=z(s)===s,$=await(c.isRTL==null?void 0:c.isRTL(l.floating)),b=u||(g||!m?[fe(s)]:jt(s));!u&&d!=="none"&&b.push(...Xt(s,m,d,$));const y=[s,...b],x=await ee(t,w),E=[];let R=((n=r.flip)==null?void 0:n.overflows)||[];if(f&&E.push(x[v]),p){const O=Vt(o,i,$);E.push(x[O[0]],x[O[1]])}if(R=[...R,{placement:o,overflows:E}],!E.every(O=>O<=0)){var P,D;const O=(((P=r.flip)==null?void 0:P.index)||0)+1,F=y[O];if(F)return{data:{index:O,overflows:R},reset:{placement:F}};let C=(D=R.filter(S=>S.overflows[0]<=0).sort((S,L)=>S.overflows[1]-L.overflows[1])[0])==null?void 0:D.placement;if(!C)switch(h){case"bestFit":{var T;const S=(T=R.map(L=>[L.placement,L.overflows.filter(A=>A>0).reduce((A,j)=>A+j,0)]).sort((L,A)=>L[1]-A[1])[0])==null?void 0:T[0];S&&(C=S);break}case"initialPlacement":C=s;break}if(o!==C)return{reset:{placement:C}}}return{}}}};function We(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function Ne(e){return Ht.some(t=>e[t]>=0)}const Zt=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:o="referenceHidden",...r}=H(e,t);switch(o){case"referenceHidden":{const i=await ee(t,{...r,elementContext:"reference"}),s=We(i,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:Ne(s)}}}case"escaped":{const i=await ee(t,{...r,altBoundary:!0}),s=We(i,n.floating);return{data:{escapedOffsets:s,escaped:Ne(s)}}}default:return{}}}}};async function Gt(e,t){const{placement:n,platform:o,elements:r}=e,i=await(o.isRTL==null?void 0:o.isRTL(r.floating)),s=z(n),c=J(n),l=Q(n)==="y",f=["left","top"].includes(s)?-1:1,p=i&&l?-1:1,u=H(t,e);let{mainAxis:h,crossAxis:d,alignmentAxis:m}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return c&&typeof m=="number"&&(d=c==="end"?m*-1:m),l?{x:d*p,y:h*f}:{x:h*f,y:d*p}}const Jt=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:n,y:o}=t,r=await Gt(t,e);return{x:n+r.x,y:o+r.y,data:r}}}},Qt=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:o,placement:r}=t,{mainAxis:i=!0,crossAxis:s=!1,limiter:c={fn:v=>{let{x:g,y:$}=v;return{x:g,y:$}}},...l}=H(e,t),f={x:n,y:o},p=await ee(t,l),u=Q(z(r)),h=Oe(u);let d=f[h],m=f[u];if(i){const v=h==="y"?"top":"left",g=h==="y"?"bottom":"right",$=d+p[v],b=d-p[g];d=$e($,d,b)}if(s){const v=u==="y"?"top":"left",g=u==="y"?"bottom":"right",$=m+p[v],b=m-p[g];m=$e($,m,b)}const w=c.fn({...t,[h]:d,[u]:m});return{...w,data:{x:w.x-n,y:w.y-o}}}}},en=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:o,placement:r,rects:i,middlewareData:s}=t,{offset:c=0,mainAxis:l=!0,crossAxis:f=!0}=H(e,t),p={x:n,y:o},u=Q(r),h=Oe(u);let d=p[h],m=p[u];const w=H(c,t),v=typeof w=="number"?{mainAxis:w,crossAxis:0}:{mainAxis:0,crossAxis:0,...w};if(l){const b=h==="y"?"height":"width",y=i.reference[h]-i.floating[b]+v.mainAxis,x=i.reference[h]+i.reference[b]-v.mainAxis;d<y?d=y:d>x&&(d=x)}if(f){var g,$;const b=h==="y"?"width":"height",y=["top","left"].includes(z(r)),x=i.reference[u]-i.floating[b]+(y&&((g=s.offset)==null?void 0:g[u])||0)+(y?0:v.crossAxis),E=i.reference[u]+i.reference[b]+(y?0:(($=s.offset)==null?void 0:$[u])||0)-(y?v.crossAxis:0);m<x?m=x:m>E&&(m=E)}return{[h]:d,[u]:m}}}},tn=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:o,platform:r,elements:i}=t,{apply:s=()=>{},...c}=H(e,t),l=await ee(t,c),f=z(n),p=J(n),u=Q(n)==="y",{width:h,height:d}=o.floating;let m,w;f==="top"||f==="bottom"?(m=f,w=p===(await(r.isRTL==null?void 0:r.isRTL(i.floating))?"start":"end")?"left":"right"):(w=f,m=p==="end"?"top":"bottom");const v=d-l[m],g=h-l[w],$=!t.middlewareData.shift;let b=v,y=g;if(u){const E=h-l.left-l.right;y=p||$?Y(g,E):E}else{const E=d-l.top-l.bottom;b=p||$?Y(v,E):E}if($&&!p){const E=_(l.left,0),R=_(l.right,0),P=_(l.top,0),D=_(l.bottom,0);u?y=h-2*(E!==0||R!==0?E+R:_(l.left,l.right)):b=d-2*(P!==0||D!==0?P+D:_(l.top,l.bottom))}await s({...t,availableWidth:y,availableHeight:b});const x=await r.getDimensions(i.floating);return h!==x.width||d!==x.height?{reset:{rects:!0}}:{}}}};function U(e){return qe(e)?(e.nodeName||"").toLowerCase():"#document"}function k(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function V(e){var t;return(t=(qe(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function qe(e){return e instanceof Node||e instanceof k(e).Node}function I(e){return e instanceof Element||e instanceof k(e).Element}function N(e){return e instanceof HTMLElement||e instanceof k(e).HTMLElement}function Be(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof k(e).ShadowRoot}function ne(e){const{overflow:t,overflowX:n,overflowY:o,display:r}=M(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+n)&&!["inline","contents"].includes(r)}function nn(e){return["table","td","th"].includes(U(e))}function Re(e){const t=Se(),n=M(e);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function on(e){let t=G(e);for(;N(t)&&!me(t);){if(Re(t))return t;t=G(t)}return null}function Se(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function me(e){return["html","body","#document"].includes(U(e))}function M(e){return k(e).getComputedStyle(e)}function ge(e){return I(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function G(e){if(U(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Be(e)&&e.host||V(e);return Be(t)?t.host:t}function Ze(e){const t=G(e);return me(t)?e.ownerDocument?e.ownerDocument.body:e.body:N(t)&&ne(t)?t:Ze(t)}function ue(e,t){var n;t===void 0&&(t=[]);const o=Ze(e),r=o===((n=e.ownerDocument)==null?void 0:n.body),i=k(o);return r?t.concat(i,i.visualViewport||[],ne(o)?o:[]):t.concat(o,ue(o))}function Ge(e){const t=M(e);let n=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const r=N(e),i=r?e.offsetWidth:n,s=r?e.offsetHeight:o,c=ae(n)!==i||ae(o)!==s;return c&&(n=i,o=s),{width:n,height:o,$:c}}function De(e){return I(e)?e:e.contextElement}function Z(e){const t=De(e);if(!N(t))return X(1);const n=t.getBoundingClientRect(),{width:o,height:r,$:i}=Ge(t);let s=(i?ae(n.width):n.width)/o,c=(i?ae(n.height):n.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!c||!Number.isFinite(c))&&(c=1),{x:s,y:c}}const rn=X(0);function Je(e){const t=k(e);return!Se()||!t.visualViewport?rn:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function sn(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==k(e)?!1:t}function K(e,t,n,o){t===void 0&&(t=!1),n===void 0&&(n=!1);const r=e.getBoundingClientRect(),i=De(e);let s=X(1);t&&(o?I(o)&&(s=Z(o)):s=Z(e));const c=sn(i,n,o)?Je(i):X(0);let l=(r.left+c.x)/s.x,f=(r.top+c.y)/s.y,p=r.width/s.x,u=r.height/s.y;if(i){const h=k(i),d=o&&I(o)?k(o):o;let m=h.frameElement;for(;m&&o&&d!==h;){const w=Z(m),v=m.getBoundingClientRect(),g=M(m),$=v.left+(m.clientLeft+parseFloat(g.paddingLeft))*w.x,b=v.top+(m.clientTop+parseFloat(g.paddingTop))*w.y;l*=w.x,f*=w.y,p*=w.x,u*=w.y,l+=$,f+=b,m=k(m).frameElement}}return de({width:p,height:u,x:l,y:f})}function cn(e){let{rect:t,offsetParent:n,strategy:o}=e;const r=N(n),i=V(n);if(n===i)return t;let s={scrollLeft:0,scrollTop:0},c=X(1);const l=X(0);if((r||!r&&o!=="fixed")&&((U(n)!=="body"||ne(i))&&(s=ge(n)),N(n))){const f=K(n);c=Z(n),l.x=f.x+n.clientLeft,l.y=f.y+n.clientTop}return{width:t.width*c.x,height:t.height*c.y,x:t.x*c.x-s.scrollLeft*c.x+l.x,y:t.y*c.y-s.scrollTop*c.y+l.y}}function ln(e){return Array.from(e.getClientRects())}function Qe(e){return K(V(e)).left+ge(e).scrollLeft}function an(e){const t=V(e),n=ge(e),o=e.ownerDocument.body,r=_(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),i=_(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+Qe(e);const c=-n.scrollTop;return M(o).direction==="rtl"&&(s+=_(t.clientWidth,o.clientWidth)-r),{width:r,height:i,x:s,y:c}}function fn(e,t){const n=k(e),o=V(e),r=n.visualViewport;let i=o.clientWidth,s=o.clientHeight,c=0,l=0;if(r){i=r.width,s=r.height;const f=Se();(!f||f&&t==="fixed")&&(c=r.offsetLeft,l=r.offsetTop)}return{width:i,height:s,x:c,y:l}}function dn(e,t){const n=K(e,!0,t==="fixed"),o=n.top+e.clientTop,r=n.left+e.clientLeft,i=N(e)?Z(e):X(1),s=e.clientWidth*i.x,c=e.clientHeight*i.y,l=r*i.x,f=o*i.y;return{width:s,height:c,x:l,y:f}}function He(e,t,n){let o;if(t==="viewport")o=fn(e,n);else if(t==="document")o=an(V(e));else if(I(t))o=dn(t,n);else{const r=Je(e);o={...t,x:t.x-r.x,y:t.y-r.y}}return de(o)}function et(e,t){const n=G(e);return n===t||!I(n)||me(n)?!1:M(n).position==="fixed"||et(n,t)}function un(e,t){const n=t.get(e);if(n)return n;let o=ue(e).filter(c=>I(c)&&U(c)!=="body"),r=null;const i=M(e).position==="fixed";let s=i?G(e):e;for(;I(s)&&!me(s);){const c=M(s),l=Re(s);!l&&c.position==="fixed"&&(r=null),(i?!l&&!r:!l&&c.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||ne(s)&&!l&&et(e,s))?o=o.filter(p=>p!==s):r=c,s=G(s)}return t.set(e,o),o}function pn(e){let{element:t,boundary:n,rootBoundary:o,strategy:r}=e;const s=[...n==="clippingAncestors"?un(t,this._c):[].concat(n),o],c=s[0],l=s.reduce((f,p)=>{const u=He(t,p,r);return f.top=_(u.top,f.top),f.right=Y(u.right,f.right),f.bottom=Y(u.bottom,f.bottom),f.left=_(u.left,f.left),f},He(t,c,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function hn(e){return Ge(e)}function mn(e,t,n){const o=N(t),r=V(t),i=n==="fixed",s=K(e,!0,i,t);let c={scrollLeft:0,scrollTop:0};const l=X(0);if(o||!o&&!i)if((U(t)!=="body"||ne(r))&&(c=ge(t)),o){const f=K(t,!0,i,t);l.x=f.x+t.clientLeft,l.y=f.y+t.clientTop}else r&&(l.x=Qe(r));return{x:s.left+c.scrollLeft-l.x,y:s.top+c.scrollTop-l.y,width:s.width,height:s.height}}function ze(e,t){return!N(e)||M(e).position==="fixed"?null:t?t(e):e.offsetParent}function tt(e,t){const n=k(e);if(!N(e))return n;let o=ze(e,t);for(;o&&nn(o)&&M(o).position==="static";)o=ze(o,t);return o&&(U(o)==="html"||U(o)==="body"&&M(o).position==="static"&&!Re(o))?n:o||on(e)||n}const gn=async function(e){let{reference:t,floating:n,strategy:o}=e;const r=this.getOffsetParent||tt,i=this.getDimensions;return{reference:mn(t,await r(n),o),floating:{x:0,y:0,...await i(n)}}};function wn(e){return M(e).direction==="rtl"}const vn={convertOffsetParentRelativeRectToViewportRelativeRect:cn,getDocumentElement:V,getClippingRect:pn,getOffsetParent:tt,getElementRects:gn,getClientRects:ln,getDimensions:hn,getScale:Z,isElement:I,isRTL:wn};function xn(e,t){let n=null,o;const r=V(e);function i(){clearTimeout(o),n&&n.disconnect(),n=null}function s(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),i();const{left:f,top:p,width:u,height:h}=e.getBoundingClientRect();if(c||t(),!u||!h)return;const d=se(p),m=se(r.clientWidth-(f+u)),w=se(r.clientHeight-(p+h)),v=se(f),$={rootMargin:-d+"px "+-m+"px "+-w+"px "+-v+"px",threshold:_(0,Y(1,l))||1};let b=!0;function y(x){const E=x[0].intersectionRatio;if(E!==l){if(!b)return s();E?s(!1,E):o=setTimeout(()=>{s(!1,1e-7)},100)}b=!1}try{n=new IntersectionObserver(y,{...$,root:r.ownerDocument})}catch{n=new IntersectionObserver(y,$)}n.observe(e)}return s(!0),i}function bn(e,t,n,o){o===void 0&&(o={});const{ancestorScroll:r=!0,ancestorResize:i=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,f=De(e),p=r||i?[...f?ue(f):[],...ue(t)]:[];p.forEach(g=>{r&&g.addEventListener("scroll",n,{passive:!0}),i&&g.addEventListener("resize",n)});const u=f&&c?xn(f,n):null;let h=-1,d=null;s&&(d=new ResizeObserver(g=>{let[$]=g;$&&$.target===f&&d&&(d.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{d&&d.observe(t)})),n()}),f&&!l&&d.observe(f),d.observe(t));let m,w=l?K(e):null;l&&v();function v(){const g=K(e);w&&(g.x!==w.x||g.y!==w.y||g.width!==w.width||g.height!==w.height)&&n(),w=g,m=requestAnimationFrame(v)}return n(),()=>{p.forEach(g=>{r&&g.removeEventListener("scroll",n),i&&g.removeEventListener("resize",n)}),u&&u(),d&&d.disconnect(),d=null,l&&cancelAnimationFrame(m)}}const yn=(e,t,n)=>{const o=new Map,r={platform:vn,...n},i={...r.platform,_c:o};return Kt(e,t,{...r,platform:i})},$n=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:o,padding:r}=typeof e=="function"?e(n):e;return o&&t(o)?o.current!=null?Fe({element:o.current,padding:r}).fn(n):{}:o?Fe({element:o,padding:r}).fn(n):{}}}};var ce=typeof document<"u"?a.useLayoutEffect:a.useEffect;function pe(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,o,r;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(o=n;o--!==0;)if(!pe(e[o],t[o]))return!1;return!0}if(r=Object.keys(e),n=r.length,n!==Object.keys(t).length)return!1;for(o=n;o--!==0;)if(!{}.hasOwnProperty.call(t,r[o]))return!1;for(o=n;o--!==0;){const i=r[o];if(!(i==="_owner"&&e.$$typeof)&&!pe(e[i],t[i]))return!1}return!0}return e!==e&&t!==t}function nt(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Ie(e,t){const n=nt(e);return Math.round(t*n)/n}function Ve(e){const t=a.useRef(e);return ce(()=>{t.current=e}),t}function En(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:o=[],platform:r,elements:{reference:i,floating:s}={},transform:c=!0,whileElementsMounted:l,open:f}=e,[p,u]=a.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[h,d]=a.useState(o);pe(h,o)||d(o);const[m,w]=a.useState(null),[v,g]=a.useState(null),$=a.useCallback(A=>{A!=E.current&&(E.current=A,w(A))},[w]),b=a.useCallback(A=>{A!==R.current&&(R.current=A,g(A))},[g]),y=i||m,x=s||v,E=a.useRef(null),R=a.useRef(null),P=a.useRef(p),D=Ve(l),T=Ve(r),O=a.useCallback(()=>{if(!E.current||!R.current)return;const A={placement:t,strategy:n,middleware:h};T.current&&(A.platform=T.current),yn(E.current,R.current,A).then(j=>{const B={...j,isPositioned:!0};F.current&&!pe(P.current,B)&&(P.current=B,je.flushSync(()=>{u(B)}))})},[h,t,n,T]);ce(()=>{f===!1&&P.current.isPositioned&&(P.current.isPositioned=!1,u(A=>({...A,isPositioned:!1})))},[f]);const F=a.useRef(!1);ce(()=>(F.current=!0,()=>{F.current=!1}),[]),ce(()=>{if(y&&(E.current=y),x&&(R.current=x),y&&x){if(D.current)return D.current(y,x,O);O()}},[y,x,O,D]);const C=a.useMemo(()=>({reference:E,floating:R,setReference:$,setFloating:b}),[$,b]),S=a.useMemo(()=>({reference:y,floating:x}),[y,x]),L=a.useMemo(()=>{const A={position:n,left:0,top:0};if(!S.floating)return A;const j=Ie(S.floating,p.x),B=Ie(S.floating,p.y);return c?{...A,transform:"translate("+j+"px, "+B+"px)",...nt(S.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:j,top:B}},[n,c,S.floating,p.x,p.y]);return a.useMemo(()=>({...p,update:O,refs:C,elements:S,floatingStyles:L}),[p,O,C,S,L])}const Pn=a.forwardRef((e,t)=>{const{children:n,width:o=10,height:r=5,...i}=e;return a.createElement(te.svg,W({},i,{ref:t,width:o,height:r,viewBox:"0 0 30 10",preserveAspectRatio:"none"}),e.asChild?n:a.createElement("polygon",{points:"0,0 30,0 15,10"}))}),On=Pn;function An(e){const[t,n]=a.useState(void 0);return le(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const o=new ResizeObserver(r=>{if(!Array.isArray(r)||!r.length)return;const i=r[0];let s,c;if("borderBoxSize"in i){const l=i.borderBoxSize,f=Array.isArray(l)?l[0]:l;s=f.inlineSize,c=f.blockSize}else s=e.offsetWidth,c=e.offsetHeight;n({width:s,height:c})});return o.observe(e,{box:"border-box"}),()=>o.unobserve(e)}else n(void 0)},[e]),t}const ot="Popper",[rt,Vn]=Ot(ot),[Cn,it]=rt(ot),Rn=e=>{const{__scopePopper:t,children:n}=e,[o,r]=a.useState(null);return a.createElement(Cn,{scope:t,anchor:o,onAnchorChange:r},n)},Sn="PopperAnchor",Dn=a.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:o,...r}=e,i=it(Sn,n),s=a.useRef(null),c=Pe(t,s);return a.useEffect(()=>{i.onAnchorChange((o==null?void 0:o.current)||s.current)}),o?null:a.createElement(te.div,W({},r,{ref:c}))}),st="PopperContent",[Tn,Ln]=rt(st),_n=a.forwardRef((e,t)=>{var n,o,r,i,s,c,l,f;const{__scopePopper:p,side:u="bottom",sideOffset:h=0,align:d="center",alignOffset:m=0,arrowPadding:w=0,collisionBoundary:v=[],collisionPadding:g=0,sticky:$="partial",hideWhenDetached:b=!1,avoidCollisions:y=!0,onPlaced:x,...E}=e,R=it(st,p),[P,D]=a.useState(null),T=Pe(t,ve=>D(ve)),[O,F]=a.useState(null),C=An(O),S=(n=C==null?void 0:C.width)!==null&&n!==void 0?n:0,L=(o=C==null?void 0:C.height)!==null&&o!==void 0?o:0,A=u+(d!=="center"?"-"+d:""),j=typeof g=="number"?g:{top:0,right:0,bottom:0,left:0,...g},B=Array.isArray(v)?v:[v],lt=B.length>0,we={padding:j,boundary:B.filter(Wn),altBoundary:lt},{refs:at,floatingStyles:Te,placement:ft,isPositioned:oe,middlewareData:q}=En({strategy:"fixed",placement:A,whileElementsMounted:bn,elements:{reference:R.anchor},middleware:[Jt({mainAxis:h+L,alignmentAxis:m}),y&&Qt({mainAxis:!0,crossAxis:!1,limiter:$==="partial"?en():void 0,...we}),y&&qt({...we}),tn({...we,apply:({elements:ve,rects:wt,availableWidth:vt,availableHeight:xt})=>{const{width:bt,height:yt}=wt.reference,ie=ve.floating.style;ie.setProperty("--radix-popper-available-width",`${vt}px`),ie.setProperty("--radix-popper-available-height",`${xt}px`),ie.setProperty("--radix-popper-anchor-width",`${bt}px`),ie.setProperty("--radix-popper-anchor-height",`${yt}px`)}}),O&&$n({element:O,padding:w}),Nn({arrowWidth:S,arrowHeight:L}),b&&Zt({strategy:"referenceHidden"})]}),[Le,dt]=ct(ft),re=he(x);le(()=>{oe&&(re==null||re())},[oe,re]);const ut=(r=q.arrow)===null||r===void 0?void 0:r.x,pt=(i=q.arrow)===null||i===void 0?void 0:i.y,ht=((s=q.arrow)===null||s===void 0?void 0:s.centerOffset)!==0,[mt,gt]=a.useState();return le(()=>{P&&gt(window.getComputedStyle(P).zIndex)},[P]),a.createElement("div",{ref:at.setFloating,"data-radix-popper-content-wrapper":"",style:{...Te,transform:oe?Te.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:mt,"--radix-popper-transform-origin":[(c=q.transformOrigin)===null||c===void 0?void 0:c.x,(l=q.transformOrigin)===null||l===void 0?void 0:l.y].join(" ")},dir:e.dir},a.createElement(Tn,{scope:p,placedSide:Le,onArrowChange:F,arrowX:ut,arrowY:pt,shouldHideArrow:ht},a.createElement(te.div,W({"data-side":Le,"data-align":dt},E,{ref:T,style:{...E.style,animation:oe?void 0:"none",opacity:(f=q.hide)!==null&&f!==void 0&&f.referenceHidden?0:void 0}}))))}),kn="PopperArrow",Mn={top:"bottom",right:"left",bottom:"top",left:"right"},Fn=a.forwardRef(function(t,n){const{__scopePopper:o,...r}=t,i=Ln(kn,o),s=Mn[i.placedSide];return a.createElement("span",{ref:i.onArrowChange,style:{position:"absolute",left:i.arrowX,top:i.arrowY,[s]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i.placedSide],visibility:i.shouldHideArrow?"hidden":void 0}},a.createElement(On,W({},r,{ref:n,style:{...r.style,display:"block"}})))});function Wn(e){return e!==null}const Nn=e=>({name:"transformOrigin",options:e,fn(t){var n,o,r,i,s;const{placement:c,rects:l,middlewareData:f}=t,u=((n=f.arrow)===null||n===void 0?void 0:n.centerOffset)!==0,h=u?0:e.arrowWidth,d=u?0:e.arrowHeight,[m,w]=ct(c),v={start:"0%",center:"50%",end:"100%"}[w],g=((o=(r=f.arrow)===null||r===void 0?void 0:r.x)!==null&&o!==void 0?o:0)+h/2,$=((i=(s=f.arrow)===null||s===void 0?void 0:s.y)!==null&&i!==void 0?i:0)+d/2;let b="",y="";return m==="bottom"?(b=u?v:`${g}px`,y=`${-d}px`):m==="top"?(b=u?v:`${g}px`,y=`${l.floating.height+d}px`):m==="right"?(b=`${-d}px`,y=u?v:`${$}px`):m==="left"&&(b=`${l.floating.width+d}px`,y=u?v:`${$}px`),{data:{x:b,y}}}});function ct(e){const[t,n="center"]=e.split("-");return[t,n]}const jn=Rn,Yn=Dn,Xn=_n,Un=Fn,Kn=a.forwardRef((e,t)=>{var n;const{container:o=globalThis==null||(n=globalThis.document)===null||n===void 0?void 0:n.body,...r}=e;return o?Et.createPortal(a.createElement(te.div,W({},r,{ref:t})),o):null});export{te as $,W as _,Pe as a,le as b,he as c,Ot as d,Vn as e,In as f,jn as g,Yn as h,xe as i,Kn as j,zn as k,Xn as l,Ct as m,Un as n,Xe as o,Ye as p,Tt as q};
//# sourceMappingURL=index-0e277dcf.js.map
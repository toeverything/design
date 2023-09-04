import{j as _}from"./jsx-runtime-ffb262ed.js";import{c as N}from"./clsx-1229b3e0.js";import{r as n}from"./index-76fb7be0.js";import{i as pe,a as Qe}from"./vanilla-extract-dynamic.esm-22503a8d.js";import{d as $e,_ as v,a as q,c as me,$ as z,g as en,h as Oe,f as nn}from"./index-be7a436d.js";import{d as g,a as W,$ as Se,b as Pe,c as tn,e as on,f as rn,g as cn}from"./index-86e96204.js";import{$ as be,a as ge}from"./index-6e4e57ad.js";import{$ as De,h as an,a as sn,b as un,c as dn}from"./Combination-8e1f2158.js";const ln=n.createContext(void 0);function Te(e){const t=n.useContext(ln);return e||t||"ltr"}const ue="rovingFocusGroup.onEntryFocus",fn={bubbles:!1,cancelable:!0},ve="RovingFocusGroup",[ie,Fe,pn]=De(ve),[$n,Ne]=$e(ve,[pn]),[mn,bn]=$n(ve),gn=n.forwardRef((e,t)=>n.createElement(ie.Provider,{scope:e.__scopeRovingFocusGroup},n.createElement(ie.Slot,{scope:e.__scopeRovingFocusGroup},n.createElement(vn,v({},e,{ref:t}))))),vn=n.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:o,orientation:r,loop:a=!1,dir:c,currentTabStopId:u,defaultCurrentTabStopId:i,onCurrentTabStopIdChange:d,onEntryFocus:l,...f}=e,s=n.useRef(null),p=q(t,s),b=Te(c),[m=null,h]=be({prop:u,defaultProp:i,onChange:d}),[I,w]=n.useState(!1),E=me(l),k=Fe(o),V=n.useRef(!1),[oe,G]=n.useState(0);return n.useEffect(()=>{const x=s.current;if(x)return x.addEventListener(ue,E),()=>x.removeEventListener(ue,E)},[E]),n.createElement(mn,{scope:o,orientation:r,dir:b,loop:a,currentTabStopId:m,onItemFocus:n.useCallback(x=>h(x),[h]),onItemShiftTab:n.useCallback(()=>w(!0),[]),onFocusableItemAdd:n.useCallback(()=>G(x=>x+1),[]),onFocusableItemRemove:n.useCallback(()=>G(x=>x-1),[])},n.createElement(z.div,v({tabIndex:I||oe===0?-1:0,"data-orientation":r},f,{ref:p,style:{outline:"none",...e.style},onMouseDown:g(e.onMouseDown,()=>{V.current=!0}),onFocus:g(e.onFocus,x=>{const re=!V.current;if(x.target===x.currentTarget&&re&&!I){const T=new CustomEvent(ue,fn);if(x.currentTarget.dispatchEvent(T),!T.defaultPrevented){const P=k().filter(R=>R.focusable),ce=P.find(R=>R.active),U=P.find(R=>R.id===m),j=[ce,U,...P].filter(Boolean).map(R=>R.ref.current);Ae(j)}}V.current=!1}),onBlur:g(e.onBlur,()=>w(!1))})))}),_n="RovingFocusGroupItem",hn=n.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:o,focusable:r=!0,active:a=!1,tabStopId:c,...u}=e,i=W(),d=c||i,l=bn(_n,o),f=l.currentTabStopId===d,s=Fe(o),{onFocusableItemAdd:p,onFocusableItemRemove:b}=l;return n.useEffect(()=>{if(r)return p(),()=>b()},[r,p,b]),n.createElement(ie.ItemSlot,{scope:o,id:d,focusable:r,active:a},n.createElement(z.span,v({tabIndex:f?0:-1,"data-orientation":l.orientation},u,{ref:t,onMouseDown:g(e.onMouseDown,m=>{r?l.onItemFocus(d):m.preventDefault()}),onFocus:g(e.onFocus,()=>l.onItemFocus(d)),onKeyDown:g(e.onKeyDown,m=>{if(m.key==="Tab"&&m.shiftKey){l.onItemShiftTab();return}if(m.target!==m.currentTarget)return;const h=wn(m,l.orientation,l.dir);if(h!==void 0){m.preventDefault();let w=s().filter(E=>E.focusable).map(E=>E.ref.current);if(h==="last")w.reverse();else if(h==="prev"||h==="next"){h==="prev"&&w.reverse();const E=w.indexOf(m.currentTarget);w=l.loop?En(w,E+1):w.slice(E+1)}setTimeout(()=>Ae(w))}})})))}),xn={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Mn(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function wn(e,t,o){const r=Mn(e.key,o);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return xn[r]}function Ae(e){const t=document.activeElement;for(const o of e)if(o===t||(o.focus(),document.activeElement!==t))return}function En(e,t){return e.map((o,r)=>e[(t+r)%e.length])}const Cn=gn,yn=hn,de=["Enter"," "],In=["ArrowDown","PageUp","Home"],ke=["ArrowUp","PageDown","End"],Rn=[...In,...ke],On={ltr:[...de,"ArrowRight"],rtl:[...de,"ArrowLeft"]},Sn={ltr:["ArrowLeft"],rtl:["ArrowRight"]},ne="Menu",[X,Pn,Dn]=De(ne),[A,Ve]=$e(ne,[Dn,Se,Ne]),te=Se(),Le=Ne(),[Ke,D]=A(ne),[Tn,Z]=A(ne),Fn=e=>{const{__scopeMenu:t,open:o=!1,children:r,dir:a,onOpenChange:c,modal:u=!0}=e,i=te(t),[d,l]=n.useState(null),f=n.useRef(!1),s=me(c),p=Te(a);return n.useEffect(()=>{const b=()=>{f.current=!0,document.addEventListener("pointerdown",m,{capture:!0,once:!0}),document.addEventListener("pointermove",m,{capture:!0,once:!0})},m=()=>f.current=!1;return document.addEventListener("keydown",b,{capture:!0}),()=>{document.removeEventListener("keydown",b,{capture:!0}),document.removeEventListener("pointerdown",m,{capture:!0}),document.removeEventListener("pointermove",m,{capture:!0})}},[]),n.createElement(Pe,i,n.createElement(Ke,{scope:t,open:o,onOpenChange:s,content:d,onContentChange:l},n.createElement(Tn,{scope:t,onClose:n.useCallback(()=>s(!1),[s]),isUsingKeyboardRef:f,dir:p,modal:u},r)))},qe=n.forwardRef((e,t)=>{const{__scopeMenu:o,...r}=e,a=te(o);return n.createElement(tn,v({},a,r,{ref:t}))}),Ge="MenuPortal",[Nn,Ue]=A(Ge,{forceMount:void 0}),An=e=>{const{__scopeMenu:t,forceMount:o,children:r,container:a}=e,c=D(Ge,t);return n.createElement(Nn,{scope:t,forceMount:o},n.createElement(ge,{present:o||c.open},n.createElement(on,{asChild:!0,container:a},r)))},y="MenuContent",[kn,_e]=A(y),Vn=n.forwardRef((e,t)=>{const o=Ue(y,e.__scopeMenu),{forceMount:r=o.forceMount,...a}=e,c=D(y,e.__scopeMenu),u=Z(y,e.__scopeMenu);return n.createElement(X.Provider,{scope:e.__scopeMenu},n.createElement(ge,{present:r||c.open},n.createElement(X.Slot,{scope:e.__scopeMenu},u.modal?n.createElement(Ln,v({},a,{ref:t})):n.createElement(Kn,v({},a,{ref:t})))))}),Ln=n.forwardRef((e,t)=>{const o=D(y,e.__scopeMenu),r=n.useRef(null),a=q(t,r);return n.useEffect(()=>{const c=r.current;if(c)return an(c)},[]),n.createElement(he,v({},e,{ref:a,trapFocus:o.open,disableOutsidePointerEvents:o.open,disableOutsideScroll:!0,onFocusOutside:g(e.onFocusOutside,c=>c.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>o.onOpenChange(!1)}))}),Kn=n.forwardRef((e,t)=>{const o=D(y,e.__scopeMenu);return n.createElement(he,v({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>o.onOpenChange(!1)}))}),he=n.forwardRef((e,t)=>{const{__scopeMenu:o,loop:r=!1,trapFocus:a,onOpenAutoFocus:c,onCloseAutoFocus:u,disableOutsidePointerEvents:i,onEntryFocus:d,onEscapeKeyDown:l,onPointerDownOutside:f,onFocusOutside:s,onInteractOutside:p,onDismiss:b,disableOutsideScroll:m,...h}=e,I=D(y,o),w=Z(y,o),E=te(o),k=Le(o),V=Pn(o),[oe,G]=n.useState(null),x=n.useRef(null),re=q(t,x,I.onContentChange),T=n.useRef(0),P=n.useRef(""),ce=n.useRef(0),U=n.useRef(null),ae=n.useRef("right"),j=n.useRef(0),R=m?dn:n.Fragment,Ze=m?{as:en,allowPinchZoom:!0}:void 0,Je=$=>{var M,C;const F=P.current+$,B=V().filter(O=>!O.disabled),se=document.activeElement,xe=(M=B.find(O=>O.ref.current===se))===null||M===void 0?void 0:M.textValue,J=B.map(O=>O.textValue),Y=Jn(J,F,xe),Me=(C=B.find(O=>O.textValue===Y))===null||C===void 0?void 0:C.ref.current;(function O(we){P.current=we,window.clearTimeout(T.current),we!==""&&(T.current=window.setTimeout(()=>O(""),1e3))})(F),Me&&setTimeout(()=>Me.focus())};n.useEffect(()=>()=>window.clearTimeout(T.current),[]),sn();const L=n.useCallback($=>{var M,C;return ae.current===((M=U.current)===null||M===void 0?void 0:M.side)&&et($,(C=U.current)===null||C===void 0?void 0:C.area)},[]);return n.createElement(kn,{scope:o,searchRef:P,onItemEnter:n.useCallback($=>{L($)&&$.preventDefault()},[L]),onItemLeave:n.useCallback($=>{var M;L($)||((M=x.current)===null||M===void 0||M.focus(),G(null))},[L]),onTriggerLeave:n.useCallback($=>{L($)&&$.preventDefault()},[L]),pointerGraceTimerRef:ce,onPointerGraceIntentChange:n.useCallback($=>{U.current=$},[])},n.createElement(R,Ze,n.createElement(un,{asChild:!0,trapped:a,onMountAutoFocus:g(c,$=>{var M;$.preventDefault(),(M=x.current)===null||M===void 0||M.focus()}),onUnmountAutoFocus:u},n.createElement(rn,{asChild:!0,disableOutsidePointerEvents:i,onEscapeKeyDown:l,onPointerDownOutside:f,onFocusOutside:s,onInteractOutside:p,onDismiss:b},n.createElement(Cn,v({asChild:!0},k,{dir:w.dir,orientation:"vertical",loop:r,currentTabStopId:oe,onCurrentTabStopIdChange:G,onEntryFocus:g(d,$=>{w.isUsingKeyboardRef.current||$.preventDefault()})}),n.createElement(cn,v({role:"menu","aria-orientation":"vertical","data-state":We(I.open),"data-radix-menu-content":"",dir:w.dir},E,h,{ref:re,style:{outline:"none",...h.style},onKeyDown:g(h.onKeyDown,$=>{const C=$.target.closest("[data-radix-menu-content]")===$.currentTarget,F=$.ctrlKey||$.altKey||$.metaKey,B=$.key.length===1;C&&($.key==="Tab"&&$.preventDefault(),!F&&B&&Je($.key));const se=x.current;if($.target!==se||!Rn.includes($.key))return;$.preventDefault();const J=V().filter(Y=>!Y.disabled).map(Y=>Y.ref.current);ke.includes($.key)&&J.reverse(),zn(J)}),onBlur:g(e.onBlur,$=>{$.currentTarget.contains($.target)||(window.clearTimeout(T.current),P.current="")}),onPointerMove:g(e.onPointerMove,H($=>{const M=$.target,C=j.current!==$.clientX;if($.currentTarget.contains(M)&&C){const F=$.clientX>j.current?"right":"left";ae.current=F,j.current=$.clientX}}))})))))))}),le="MenuItem",Ee="menu.itemSelect",qn=n.forwardRef((e,t)=>{const{disabled:o=!1,onSelect:r,...a}=e,c=n.useRef(null),u=Z(le,e.__scopeMenu),i=_e(le,e.__scopeMenu),d=q(t,c),l=n.useRef(!1),f=()=>{const s=c.current;if(!o&&s){const p=new CustomEvent(Ee,{bubbles:!0,cancelable:!0});s.addEventListener(Ee,b=>r==null?void 0:r(b),{once:!0}),nn(s,p),p.defaultPrevented?l.current=!1:u.onClose()}};return n.createElement(je,v({},a,{ref:d,disabled:o,onClick:g(e.onClick,f),onPointerDown:s=>{var p;(p=e.onPointerDown)===null||p===void 0||p.call(e,s),l.current=!0},onPointerUp:g(e.onPointerUp,s=>{var p;l.current||(p=s.currentTarget)===null||p===void 0||p.click()}),onKeyDown:g(e.onKeyDown,s=>{const p=i.searchRef.current!=="";o||p&&s.key===" "||de.includes(s.key)&&(s.currentTarget.click(),s.preventDefault())})}))}),je=n.forwardRef((e,t)=>{const{__scopeMenu:o,disabled:r=!1,textValue:a,...c}=e,u=_e(le,o),i=Le(o),d=n.useRef(null),l=q(t,d),[f,s]=n.useState(!1),[p,b]=n.useState("");return n.useEffect(()=>{const m=d.current;if(m){var h;b(((h=m.textContent)!==null&&h!==void 0?h:"").trim())}},[c.children]),n.createElement(X.ItemSlot,{scope:o,disabled:r,textValue:a??p},n.createElement(yn,v({asChild:!0},i,{focusable:!r}),n.createElement(z.div,v({role:"menuitem","data-highlighted":f?"":void 0,"aria-disabled":r||void 0,"data-disabled":r?"":void 0},c,{ref:l,onPointerMove:g(e.onPointerMove,H(m=>{r?u.onItemLeave(m):(u.onItemEnter(m),m.defaultPrevented||m.currentTarget.focus())})),onPointerLeave:g(e.onPointerLeave,H(m=>u.onItemLeave(m))),onFocus:g(e.onFocus,()=>s(!0)),onBlur:g(e.onBlur,()=>s(!1))}))))}),Gn="MenuRadioGroup";A(Gn,{value:void 0,onValueChange:()=>{}});const Un="MenuItemIndicator";A(Un,{checked:!1});const jn=n.forwardRef((e,t)=>{const{__scopeMenu:o,...r}=e;return n.createElement(z.div,v({role:"separator","aria-orientation":"horizontal"},r,{ref:t}))}),Be="MenuSub",[Bn,Ye]=A(Be),Yn=e=>{const{__scopeMenu:t,children:o,open:r=!1,onOpenChange:a}=e,c=D(Be,t),u=te(t),[i,d]=n.useState(null),[l,f]=n.useState(null),s=me(a);return n.useEffect(()=>(c.open===!1&&s(!1),()=>s(!1)),[c.open,s]),n.createElement(Pe,u,n.createElement(Ke,{scope:t,open:r,onOpenChange:s,content:l,onContentChange:f},n.createElement(Bn,{scope:t,contentId:W(),triggerId:W(),trigger:i,onTriggerChange:d},o)))},Q="MenuSubTrigger",Wn=n.forwardRef((e,t)=>{const o=D(Q,e.__scopeMenu),r=Z(Q,e.__scopeMenu),a=Ye(Q,e.__scopeMenu),c=_e(Q,e.__scopeMenu),u=n.useRef(null),{pointerGraceTimerRef:i,onPointerGraceIntentChange:d}=c,l={__scopeMenu:e.__scopeMenu},f=n.useCallback(()=>{u.current&&window.clearTimeout(u.current),u.current=null},[]);return n.useEffect(()=>f,[f]),n.useEffect(()=>{const s=i.current;return()=>{window.clearTimeout(s),d(null)}},[i,d]),n.createElement(qe,v({asChild:!0},l),n.createElement(je,v({id:a.triggerId,"aria-haspopup":"menu","aria-expanded":o.open,"aria-controls":a.contentId,"data-state":We(o.open)},e,{ref:Oe(t,a.onTriggerChange),onClick:s=>{var p;(p=e.onClick)===null||p===void 0||p.call(e,s),!(e.disabled||s.defaultPrevented)&&(s.currentTarget.focus(),o.open||o.onOpenChange(!0))},onPointerMove:g(e.onPointerMove,H(s=>{c.onItemEnter(s),!s.defaultPrevented&&!e.disabled&&!o.open&&!u.current&&(c.onPointerGraceIntentChange(null),u.current=window.setTimeout(()=>{o.onOpenChange(!0),f()},100))})),onPointerLeave:g(e.onPointerLeave,H(s=>{var p;f();const b=(p=o.content)===null||p===void 0?void 0:p.getBoundingClientRect();if(b){var m;const h=(m=o.content)===null||m===void 0?void 0:m.dataset.side,I=h==="right",w=I?-5:5,E=b[I?"left":"right"],k=b[I?"right":"left"];c.onPointerGraceIntentChange({area:[{x:s.clientX+w,y:s.clientY},{x:E,y:b.top},{x:k,y:b.top},{x:k,y:b.bottom},{x:E,y:b.bottom}],side:h}),window.clearTimeout(i.current),i.current=window.setTimeout(()=>c.onPointerGraceIntentChange(null),300)}else{if(c.onTriggerLeave(s),s.defaultPrevented)return;c.onPointerGraceIntentChange(null)}})),onKeyDown:g(e.onKeyDown,s=>{const p=c.searchRef.current!=="";if(!(e.disabled||p&&s.key===" ")&&On[r.dir].includes(s.key)){var b;o.onOpenChange(!0),(b=o.content)===null||b===void 0||b.focus(),s.preventDefault()}})})))}),Xn="MenuSubContent",Hn=n.forwardRef((e,t)=>{const o=Ue(y,e.__scopeMenu),{forceMount:r=o.forceMount,...a}=e,c=D(y,e.__scopeMenu),u=Z(y,e.__scopeMenu),i=Ye(Xn,e.__scopeMenu),d=n.useRef(null),l=q(t,d);return n.createElement(X.Provider,{scope:e.__scopeMenu},n.createElement(ge,{present:r||c.open},n.createElement(X.Slot,{scope:e.__scopeMenu},n.createElement(he,v({id:i.contentId,"aria-labelledby":i.triggerId},a,{ref:l,align:"start",side:u.dir==="rtl"?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:f=>{var s;u.isUsingKeyboardRef.current&&((s=d.current)===null||s===void 0||s.focus()),f.preventDefault()},onCloseAutoFocus:f=>f.preventDefault(),onFocusOutside:g(e.onFocusOutside,f=>{f.target!==i.trigger&&c.onOpenChange(!1)}),onEscapeKeyDown:g(e.onEscapeKeyDown,f=>{u.onClose(),f.preventDefault()}),onKeyDown:g(e.onKeyDown,f=>{const s=f.currentTarget.contains(f.target),p=Sn[u.dir].includes(f.key);if(s&&p){var b;c.onOpenChange(!1),(b=i.trigger)===null||b===void 0||b.focus(),f.preventDefault()}})})))))});function We(e){return e?"open":"closed"}function zn(e){const t=document.activeElement;for(const o of e)if(o===t||(o.focus(),document.activeElement!==t))return}function Zn(e,t){return e.map((o,r)=>e[(t+r)%e.length])}function Jn(e,t,o){const a=t.length>1&&Array.from(t).every(l=>l===t[0])?t[0]:t,c=o?e.indexOf(o):-1;let u=Zn(e,Math.max(c,0));a.length===1&&(u=u.filter(l=>l!==o));const d=u.find(l=>l.toLowerCase().startsWith(a.toLowerCase()));return d!==o?d:void 0}function Qn(e,t){const{x:o,y:r}=e;let a=!1;for(let c=0,u=t.length-1;c<t.length;u=c++){const i=t[c].x,d=t[c].y,l=t[u].x,f=t[u].y;d>r!=f>r&&o<(l-i)*(r-d)/(f-d)+i&&(a=!a)}return a}function et(e,t){if(!t)return!1;const o={x:e.clientX,y:e.clientY};return Qn(o,t)}function H(e){return t=>t.pointerType==="mouse"?e(t):void 0}const nt=Fn,tt=qe,ot=An,rt=Vn,ct=qn,at=jn,st=Yn,ut=Wn,it=Hn,Xe="DropdownMenu",[dt,Wt]=$e(Xe,[Ve]),S=Ve(),[lt,He]=dt(Xe),ft=e=>{const{__scopeDropdownMenu:t,children:o,dir:r,open:a,defaultOpen:c,onOpenChange:u,modal:i=!0}=e,d=S(t),l=n.useRef(null),[f=!1,s]=be({prop:a,defaultProp:c,onChange:u});return n.createElement(lt,{scope:t,triggerId:W(),triggerRef:l,contentId:W(),open:f,onOpenChange:s,onOpenToggle:n.useCallback(()=>s(p=>!p),[s]),modal:i},n.createElement(nt,v({},d,{open:f,onOpenChange:s,dir:r,modal:i}),o))},pt="DropdownMenuTrigger",$t=n.forwardRef((e,t)=>{const{__scopeDropdownMenu:o,disabled:r=!1,...a}=e,c=He(pt,o),u=S(o);return n.createElement(tt,v({asChild:!0},u),n.createElement(z.button,v({type:"button",id:c.triggerId,"aria-haspopup":"menu","aria-expanded":c.open,"aria-controls":c.open?c.contentId:void 0,"data-state":c.open?"open":"closed","data-disabled":r?"":void 0,disabled:r},a,{ref:Oe(t,c.triggerRef),onPointerDown:g(e.onPointerDown,i=>{!r&&i.button===0&&i.ctrlKey===!1&&(c.onOpenToggle(),c.open||i.preventDefault())}),onKeyDown:g(e.onKeyDown,i=>{r||(["Enter"," "].includes(i.key)&&c.onOpenToggle(),i.key==="ArrowDown"&&c.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(i.key)&&i.preventDefault())})})))}),mt=e=>{const{__scopeDropdownMenu:t,...o}=e,r=S(t);return n.createElement(ot,v({},r,o))},bt="DropdownMenuContent",gt=n.forwardRef((e,t)=>{const{__scopeDropdownMenu:o,...r}=e,a=He(bt,o),c=S(o),u=n.useRef(!1);return n.createElement(rt,v({id:a.contentId,"aria-labelledby":a.triggerId},c,r,{ref:t,onCloseAutoFocus:g(e.onCloseAutoFocus,i=>{var d;u.current||(d=a.triggerRef.current)===null||d===void 0||d.focus(),u.current=!1,i.preventDefault()}),onInteractOutside:g(e.onInteractOutside,i=>{const d=i.detail.originalEvent,l=d.button===0&&d.ctrlKey===!0,f=d.button===2||l;(!a.modal||f)&&(u.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),vt=n.forwardRef((e,t)=>{const{__scopeDropdownMenu:o,...r}=e,a=S(o);return n.createElement(ct,v({},a,r,{ref:t}))}),_t=n.forwardRef((e,t)=>{const{__scopeDropdownMenu:o,...r}=e,a=S(o);return n.createElement(at,v({},a,r,{ref:t}))}),ht=e=>{const{__scopeDropdownMenu:t,children:o,open:r,onOpenChange:a,defaultOpen:c}=e,u=S(t),[i=!1,d]=be({prop:r,defaultProp:c,onChange:a});return n.createElement(st,v({},u,{open:i,onOpenChange:d}),o)},xt=n.forwardRef((e,t)=>{const{__scopeDropdownMenu:o,...r}=e,a=S(o);return n.createElement(ut,v({},a,r,{ref:t}))}),Mt=n.forwardRef((e,t)=>{const{__scopeDropdownMenu:o,...r}=e,a=S(o);return n.createElement(it,v({},a,r,{ref:t,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),wt=ft,Et=$t,ze=mt,Ct=gt,yt=vt,It=_t,Rt=ht,Ot=xt,St=Mt;var Pt="_1cquml1",Dt="_1cquml5";const Ce=({children:e,items:t,portalOptions:o,rootOptions:r,contentOptions:{className:a="",...c}={}})=>_.jsxs(wt,{...r,children:[_.jsx(Et,{asChild:!0,children:e}),_.jsx(ze,{...o,children:_.jsx(Ct,{className:n.useMemo(()=>N(Pt,a),[a]),sideOffset:5,align:"start",...c,children:t})})]});try{Ce.displayName="Menu",Ce.__docgenInfo={description:"",displayName:"Menu",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"ReactNode"}},portalOptions:{defaultValue:null,description:"",name:"portalOptions",required:!1,type:{name:'Omit<MenuPortalProps, "children">'}},rootOptions:{defaultValue:null,description:"",name:"rootOptions",required:!1,type:{name:'Omit<DropdownMenuProps, "children">'}},contentOptions:{defaultValue:null,description:"",name:"contentOptions",required:!1,type:{name:'Omit<Pick<MenuContentProps & RefAttributes<HTMLDivElement>, "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | ... 281 more ... | "onInteractOutside">, "children">'}}}}}catch{}var Tt="_1cquml1",Ft="_1cquml2",Nt="_1cquml4",At="_1cquml3",kt="_1cquml6",Vt="var(--_1cquml0)";const K=n.forwardRef(({children:e,icon:t,position:o="start",className:r,...a},c)=>_.jsx("div",{ref:c,className:n.useMemo(()=>N(Nt,{end:o==="end",start:o==="start"},r),[r,o]),...a,children:t||e}));K.displayName="MenuIcon";try{K.displayName="MenuIcon",K.__docgenInfo={description:"",displayName:"MenuIcon",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},position:{defaultValue:{value:"start"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"end"'}]}}}}}catch{}const ee=({children:e,type:t="default",className:o,preFix:r,endFix:a,checked:c,selected:u})=>{const i=n.useMemo(()=>N(Ft,{danger:t==="danger",warning:t==="warning",checked:c,selected:u},o),[c,o,t]);return{children:n.useMemo(()=>_.jsxs(_.Fragment,{children:[r,_.jsx("span",{className:At,children:e}),a,c||u?_.jsx(K,{position:"end",className:N({selected:u,checked:c}),children:_.jsx(pe.DoneIcon,{})}):null]}),[a,r,e]),className:i}};try{ee.displayName="useMenuItem",ee.__docgenInfo={description:"",displayName:"useMenuItem",props:{type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"warning"'},{value:'"danger"'}]}},className:{defaultValue:null,description:"",name:"className",required:!0,type:{name:"string | undefined"}},preFix:{defaultValue:null,description:"",name:"preFix",required:!0,type:{name:"ReactNode"}},endFix:{defaultValue:null,description:"",name:"endFix",required:!0,type:{name:"ReactNode"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean"}}}}}catch{}const ye=({children:e,type:t="default",className:o,preFix:r,endFix:a,checked:c,selected:u,...i})=>{const{className:d,children:l}=ee({children:e,className:o,type:t,preFix:r,endFix:a,checked:c,selected:u});return _.jsx(yt,{className:d,...i,children:l})};try{ye.displayName="MenuItem",ye.__docgenInfo={description:"",displayName:"MenuItem",props:{type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"warning"'},{value:'"danger"'}]}},preFix:{defaultValue:null,description:"",name:"preFix",required:!1,type:{name:"ReactNode"}},endFix:{defaultValue:null,description:"",name:"endFix",required:!1,type:{name:"ReactNode"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean"}}}}}catch{}const Ie=({className:e,...t})=>_.jsx(It,{className:n.useMemo(()=>N(Dt,e),[e]),...t});try{Ie.displayName="MenuSeparator",Ie.__docgenInfo={description:"",displayName:"MenuSeparator",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const Re=({children:e,items:t,portalOptions:o,subOptions:r,triggerOptions:{className:a,preFix:c,endFix:u,type:i,...d}={},subContentOptions:{className:l="",...f}={}})=>{const{className:s,children:p}=ee({children:e,className:a,type:i,preFix:c,endFix:u});return _.jsxs(Rt,{...r,children:[_.jsxs(Ot,{className:s,...d,children:[p,_.jsx(K,{position:"end",children:_.jsx(pe.ArrowRightSmallIcon,{})})]}),_.jsx(ze,{...o,children:_.jsx(St,{sideOffset:10,className:n.useMemo(()=>N(Tt,l),[l]),...f,children:t})})]})};try{Re.displayName="MenuSub",Re.__docgenInfo={description:"",displayName:"MenuSub",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"ReactNode"}},triggerOptions:{defaultValue:null,description:"",name:"triggerOptions",required:!1,type:{name:'Omit<MenuItemProps, "children" | "onSelect">'}},portalOptions:{defaultValue:null,description:"",name:"portalOptions",required:!1,type:{name:'Omit<MenuPortalProps, "children">'}},subOptions:{defaultValue:null,description:"",name:"subOptions",required:!1,type:{name:'Omit<DropdownMenuSubProps, "children">'}},subContentOptions:{defaultValue:null,description:"",name:"subContentOptions",required:!1,type:{name:'Omit<Pick<MenuSubContentProps & RefAttributes<HTMLDivElement>, "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | ... 277 more ... | "onInteractOutside">, "children">'}}}}}catch{}const fe=n.forwardRef(({disabled:e,noBorder:t=!1,className:o,status:r="default",size:a="default",preFix:c,endFix:u,block:i=!1,children:d,width:l,style:f={},...s},p)=>_.jsxs("button",{ref:p,style:{...Qe({[Vt]:l?typeof l=="number"?`${l}px`:l:"auto"}),...f},className:N(kt,o,{block:i,disabled:e,"no-border":t,error:r==="error",success:r==="success",warning:r==="warning",default:r==="default",large:a==="large","extra-large":a==="extraLarge"}),...s,children:[c,d,u,_.jsx(K,{position:"end",children:_.jsx(pe.ArrowDownSmallIcon,{})})]}));fe.displayName="MenuTrigger";try{fe.displayName="MenuTrigger",fe.__docgenInfo={description:"",displayName:"MenuTrigger",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"Width<string | number>"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},noBorder:{defaultValue:{value:"false"},description:"",name:"noBorder",required:!1,type:{name:"boolean"}},status:{defaultValue:{value:"default"},description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"warning"'},{value:'"success"'}]}},size:{defaultValue:{value:"default"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"large"'},{value:'"extraLarge"'}]}},preFix:{defaultValue:null,description:"",name:"preFix",required:!1,type:{name:"ReactNode"}},endFix:{defaultValue:null,description:"",name:"endFix",required:!1,type:{name:"ReactNode"}},block:{defaultValue:{value:"false"},description:"",name:"block",required:!1,type:{name:"boolean"}}}}}catch{}export{Ce as M,fe as a,K as b,Re as c,Ie as d,ye as e};
//# sourceMappingURL=menu-trigger-1ac80853.js.map
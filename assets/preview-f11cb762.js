import{j as L}from"./jsx-runtime-4ca860c5.js";import{r as m,R as k}from"./index-61bf1805.js";import{s as be}from"./index-d475d2ea.js";import{g as Oe}from"./_commonjsHelpers-de833af9.js";const M=["light","dark"],te="(prefers-color-scheme: dark)",Te=typeof window>"u",re=m.createContext(void 0),Ee={setTheme:e=>{},themes:[]},je=()=>{var e;return(e=m.useContext(re))!==null&&e!==void 0?e:Ee},Pe=e=>m.useContext(re)?k.createElement(m.Fragment,null,e.children):k.createElement(Ae,e),Ie=["light","dark"],Ae=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:r=!0,enableColorScheme:a=!0,storageKey:n="theme",themes:o=Ie,defaultTheme:i=r?"system":"light",attribute:l="data-theme",value:s,children:u,nonce:c})=>{const[f,d]=m.useState(()=>oe(n,i)),[S,y]=m.useState(()=>oe(n)),w=s?Object.values(s):o,x=m.useCallback(h=>{let b=h;if(!b)return;h==="system"&&r&&(b=ie());const A=s?s[b]:b,ne=t?$e():null,E=document.documentElement;if(l==="class"?(E.classList.remove(...w),A&&E.classList.add(A)):A?E.setAttribute(l,A):E.removeAttribute(l),a){const Ce=M.includes(i)?i:null,ke=M.includes(b)?b:Ce;E.style.colorScheme=ke}ne==null||ne()},[]),g=m.useCallback(h=>{d(h);try{localStorage.setItem(n,h)}catch{}},[e]),F=m.useCallback(h=>{const b=ie(h);y(b),f==="system"&&r&&!e&&x("system")},[f,e]);m.useEffect(()=>{const h=window.matchMedia(te);return h.addListener(F),F(h),()=>h.removeListener(F)},[F]),m.useEffect(()=>{const h=b=>{b.key===n&&g(b.newValue||i)};return window.addEventListener("storage",h),()=>window.removeEventListener("storage",h)},[g]),m.useEffect(()=>{x(e??f)},[e,f]);const O=m.useMemo(()=>({theme:f,setTheme:g,forcedTheme:e,resolvedTheme:f==="system"?S:f,themes:r?[...o,"system"]:o,systemTheme:r?S:void 0}),[f,g,e,S,r,o]);return k.createElement(re.Provider,{value:O},k.createElement(Re,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:r,enableColorScheme:a,storageKey:n,themes:o,defaultTheme:i,attribute:l,value:s,children:u,attrs:w,nonce:c}),u)},Re=m.memo(({forcedTheme:e,storageKey:t,attribute:r,enableSystem:a,enableColorScheme:n,defaultTheme:o,value:i,attrs:l,nonce:s})=>{const u=o==="system",c=r==="class"?`var d=document.documentElement,c=d.classList;c.remove(${l.map(y=>`'${y}'`).join(",")});`:`var d=document.documentElement,n='${r}',s='setAttribute';`,f=n?M.includes(o)&&o?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${o}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",d=(y,w=!1,x=!0)=>{const g=i?i[y]:y,F=w?y+"|| ''":`'${g}'`;let O="";return n&&x&&!w&&M.includes(y)&&(O+=`d.style.colorScheme = '${y}';`),r==="class"?O+=w||g?`c.add(${F})`:"null":g&&(O+=`d[s](n,${F})`),O},S=e?`!function(){${c}${d(e)}}()`:a?`!function(){try{${c}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${te}',m=window.matchMedia(t);if(m.media!==t||m.matches){${d("dark")}}else{${d("light")}}}else if(e){${i?`var x=${JSON.stringify(i)};`:""}${d(i?"x[e]":"e",!0)}}${u?"":"else{"+d(o,!1,!1)+"}"}${f}}catch(e){}}()`:`!function(){try{${c}var e=localStorage.getItem('${t}');if(e){${i?`var x=${JSON.stringify(i)};`:""}${d(i?"x[e]":"e",!0)}}else{${d(o,!1,!1)};}${f}}catch(t){}}();`;return k.createElement("script",{nonce:s,dangerouslySetInnerHTML:{__html:S}})},()=>!0),oe=(e,t)=>{if(Te)return;let r;try{r=localStorage.getItem(e)||void 0}catch{}return r||t},$e=()=>{const e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},ie=e=>(e||(e=window.matchMedia(te)),e.matches?"dark":"light");var se="DARK_MODE";__STORYBOOK_MODULE_CLIENT_LOGGER__;function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},T.apply(this,arguments)}function _e(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e,t){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},j(e,t)}function Me(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,j(e,t)}function J(e){return J=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},J(e)}function Be(e){return Function.toString.call(e).indexOf("[native code]")!==-1}function De(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function _(e,t,r){return De()?_=Reflect.construct.bind():_=function(a,n,o){var i=[null];i.push.apply(i,n);var l=Function.bind.apply(a,i),s=new l;return o&&j(s,o.prototype),s},_.apply(null,arguments)}function Q(e){var t=typeof Map=="function"?new Map:void 0;return Q=function(r){if(r===null||!Be(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof t<"u"){if(t.has(r))return t.get(r);t.set(r,a)}function a(){return _(r,arguments,J(this).constructor)}return a.prototype=Object.create(r.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),j(a,r)},Q(e)}var ze={1:`Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,2:`Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,3:`Passed an incorrect argument to a color function, please pass a string representation of a color.

`,4:`Couldn't generate valid rgb string from %s, it returned %s.

`,5:`Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,6:`Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,7:`Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,8:`Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,9:`Please provide a number of steps to the modularScale helper.

`,10:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,11:`Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,12:`Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,13:`Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,14:`Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,15:`Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,16:`You must provide a template to this method.

`,17:`You passed an unsupported selector state to this method.

`,18:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,19:`fromSize and toSize must be provided as stringified numbers with the same units.

`,20:`expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,21:"expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",22:"expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",23:`fontFace expects a name of a font-family.

`,24:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,25:`fontFace expects localFonts to be an array.

`,26:`fontFace expects fileFormats to be an array.

`,27:`radialGradient requries at least 2 color-stops to properly render.

`,28:`Please supply a filename to retinaImage() as the first argument.

`,29:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,30:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",31:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,32:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,33:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,34:`borderRadius expects a radius value as a string or number as the second argument.

`,35:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,36:`Property must be a string value.

`,37:`Syntax Error at %s.

`,38:`Formula contains a function that needs parentheses at %s.

`,39:`Formula is missing closing parenthesis at %s.

`,40:`Formula has too many closing parentheses at %s.

`,41:`All values in a formula must have the same unit or be unitless.

`,42:`Please provide a number of steps to the modularScale helper.

`,43:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,44:`Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,45:`Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,46:`Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,47:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,48:`fromSize and toSize must be provided as stringified numbers with the same units.

`,49:`Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,50:`Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,51:`Expects the first argument object to have the properties prop, fromSize, and toSize.

`,52:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,53:`fontFace expects localFonts to be an array.

`,54:`fontFace expects fileFormats to be an array.

`,55:`fontFace expects a name of a font-family.

`,56:`linearGradient requries at least 2 color-stops to properly render.

`,57:`radialGradient requries at least 2 color-stops to properly render.

`,58:`Please supply a filename to retinaImage() as the first argument.

`,59:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,60:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",61:`Property must be a string value.

`,62:`borderRadius expects a radius value as a string or number as the second argument.

`,63:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,64:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,65:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,66:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,67:`You must provide a template to this method.

`,68:`You passed an unsupported selector state to this method.

`,69:`Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,70:`Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,71:`Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,72:`Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,73:`Please provide a valid CSS variable.

`,74:`CSS variable not found and no default was provided.

`,75:`important requires a valid style object, got a %s instead.

`,76:`fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,77:`remToPx expects a value in "rem" but you provided it in "%s".

`,78:`base must be set in "px" or "%" but you set it in "%s".
`};function He(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var a=t[0],n=[],o;for(o=1;o<t.length;o+=1)n.push(t[o]);return n.forEach(function(i){a=a.replace(/%[a-z]/,i)}),a}var v=function(e){Me(t,e);function t(r){for(var a,n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return a=e.call(this,He.apply(void 0,[ze[r]].concat(o)))||this,_e(a)}return t}(Q(Error));function K(e){return Math.round(e*255)}function Ne(e,t,r){return K(e)+","+K(t)+","+K(r)}function P(e,t,r,a){if(a===void 0&&(a=Ne),t===0)return a(r,r,r);var n=(e%360+360)%360/60,o=(1-Math.abs(2*r-1))*t,i=o*(1-Math.abs(n%2-1)),l=0,s=0,u=0;n>=0&&n<1?(l=o,s=i):n>=1&&n<2?(l=i,s=o):n>=2&&n<3?(s=o,u=i):n>=3&&n<4?(s=i,u=o):n>=4&&n<5?(l=i,u=o):n>=5&&n<6&&(l=o,u=i);var c=r-o/2,f=l+c,d=s+c,S=u+c;return a(f,d,S)}var le={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function qe(e){if(typeof e!="string")return e;var t=e.toLowerCase();return le[t]?"#"+le[t]:e}var Le=/^#[a-fA-F0-9]{6}$/,Ke=/^#[a-fA-F0-9]{8}$/,Ge=/^#[a-fA-F0-9]{3}$/,Ye=/^#[a-fA-F0-9]{4}$/,G=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,Ue=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,We=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,Je=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function H(e){if(typeof e!="string")throw new v(3);var t=qe(e);if(t.match(Le))return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16)};if(t.match(Ke)){var r=parseFloat((parseInt(""+t[7]+t[8],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16),alpha:r}}if(t.match(Ge))return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16)};if(t.match(Ye)){var a=parseFloat((parseInt(""+t[4]+t[4],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16),alpha:a}}var n=G.exec(t);if(n)return{red:parseInt(""+n[1],10),green:parseInt(""+n[2],10),blue:parseInt(""+n[3],10)};var o=Ue.exec(t.substring(0,50));if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10),alpha:parseFloat(""+o[4])>1?parseFloat(""+o[4])/100:parseFloat(""+o[4])};var i=We.exec(t);if(i){var l=parseInt(""+i[1],10),s=parseInt(""+i[2],10)/100,u=parseInt(""+i[3],10)/100,c="rgb("+P(l,s,u)+")",f=G.exec(c);if(!f)throw new v(4,t,c);return{red:parseInt(""+f[1],10),green:parseInt(""+f[2],10),blue:parseInt(""+f[3],10)}}var d=Je.exec(t.substring(0,50));if(d){var S=parseInt(""+d[1],10),y=parseInt(""+d[2],10)/100,w=parseInt(""+d[3],10)/100,x="rgb("+P(S,y,w)+")",g=G.exec(x);if(!g)throw new v(4,t,x);return{red:parseInt(""+g[1],10),green:parseInt(""+g[2],10),blue:parseInt(""+g[3],10),alpha:parseFloat(""+d[4])>1?parseFloat(""+d[4])/100:parseFloat(""+d[4])}}throw new v(5)}function Qe(e){var t=e.red/255,r=e.green/255,a=e.blue/255,n=Math.max(t,r,a),o=Math.min(t,r,a),i=(n+o)/2;if(n===o)return e.alpha!==void 0?{hue:0,saturation:0,lightness:i,alpha:e.alpha}:{hue:0,saturation:0,lightness:i};var l,s=n-o,u=i>.5?s/(2-n-o):s/(n+o);switch(n){case t:l=(r-a)/s+(r<a?6:0);break;case r:l=(a-t)/s+2;break;default:l=(t-r)/s+4;break}return l*=60,e.alpha!==void 0?{hue:l,saturation:u,lightness:i,alpha:e.alpha}:{hue:l,saturation:u,lightness:i}}function ye(e){return Qe(H(e))}var Xe=function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e},X=Xe;function C(e){var t=e.toString(16);return t.length===1?"0"+t:t}function Y(e){return C(Math.round(e*255))}function Ze(e,t,r){return X("#"+Y(e)+Y(t)+Y(r))}function B(e,t,r){return P(e,t,r,Ze)}function Ve(e,t,r){if(typeof e=="number"&&typeof t=="number"&&typeof r=="number")return B(e,t,r);if(typeof e=="object"&&t===void 0&&r===void 0)return B(e.hue,e.saturation,e.lightness);throw new v(1)}function et(e,t,r,a){if(typeof e=="number"&&typeof t=="number"&&typeof r=="number"&&typeof a=="number")return a>=1?B(e,t,r):"rgba("+P(e,t,r)+","+a+")";if(typeof e=="object"&&t===void 0&&r===void 0&&a===void 0)return e.alpha>=1?B(e.hue,e.saturation,e.lightness):"rgba("+P(e.hue,e.saturation,e.lightness)+","+e.alpha+")";throw new v(2)}function Z(e,t,r){if(typeof e=="number"&&typeof t=="number"&&typeof r=="number")return X("#"+C(e)+C(t)+C(r));if(typeof e=="object"&&t===void 0&&r===void 0)return X("#"+C(e.red)+C(e.green)+C(e.blue));throw new v(6)}function ae(e,t,r,a){if(typeof e=="string"&&typeof t=="number"){var n=H(e);return"rgba("+n.red+","+n.green+","+n.blue+","+t+")"}else{if(typeof e=="number"&&typeof t=="number"&&typeof r=="number"&&typeof a=="number")return a>=1?Z(e,t,r):"rgba("+e+","+t+","+r+","+a+")";if(typeof e=="object"&&t===void 0&&r===void 0&&a===void 0)return e.alpha>=1?Z(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")"}throw new v(7)}var tt=function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},rt=function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&typeof e.alpha=="number"},at=function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},nt=function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&typeof e.alpha=="number"};function ve(e){if(typeof e!="object")throw new v(8);if(rt(e))return ae(e);if(tt(e))return Z(e);if(nt(e))return et(e);if(at(e))return Ve(e);throw new v(8)}function Se(e,t,r){return function(){var a=r.concat(Array.prototype.slice.call(arguments));return a.length>=t?e.apply(this,a):Se(e,t,a)}}function N(e){return Se(e,e.length,[])}function q(e,t,r){return Math.max(e,Math.min(t,r))}function ot(e,t){if(t==="transparent")return t;var r=ye(t);return ve(T({},r,{lightness:q(0,1,r.lightness-parseFloat(e))}))}N(ot);function it(e,t){if(t==="transparent")return t;var r=ye(t);return ve(T({},r,{lightness:q(0,1,r.lightness+parseFloat(e))}))}N(it);function st(e,t){if(t==="transparent")return t;var r=H(t),a=typeof r.alpha=="number"?r.alpha:1,n=T({},r,{alpha:q(0,1,(a*100+parseFloat(e)*100)/100)});return ae(n)}N(st);function lt(e,t){if(t==="transparent")return t;var r=H(t),a=typeof r.alpha=="number"?r.alpha:1,n=T({},r,{alpha:q(0,1,+(a*100-parseFloat(e)*100).toFixed(2)/100)});return ae(n)}var ut=N(lt),ft=ut,p={primary:"#FF4785",secondary:"#029CFD",tertiary:"#FAFBFC",ancillary:"#22a699",orange:"#FC521F",gold:"#FFAE00",green:"#66BF3C",seafoam:"#37D5D3",purple:"#6F2CAC",ultraviolet:"#2A0481",lightest:"#FFFFFF",lighter:"#F7FAFC",light:"#EEF3F6",mediumlight:"#ECF4F9",medium:"#D9E8F2",mediumdark:"#73828C",dark:"#5C6870",darker:"#454E54",darkest:"#2E3438",border:"hsla(203, 50%, 30%, 0.15)",positive:"#66BF3C",negative:"#FF4400",warning:"#E69D00",critical:"#FFFFFF",defaultText:"#2E3438",inverseText:"#FFFFFF",positiveText:"#448028",negativeText:"#D43900",warningText:"#A15C20"},ue={app:"#F6F9FC",bar:p.lightest,content:p.lightest,gridCellSize:10,hoverable:ft(.93,p.secondary),positive:"#E1FFD4",negative:"#FEDED2",warning:"#FFF5CF",critical:"#FF4400"},D={fonts:{base:['"Nunito Sans"',"-apple-system",'".SFNSText-Regular"','"San Francisco"',"BlinkMacSystemFont",'"Segoe UI"','"Helvetica Neue"',"Helvetica","Arial","sans-serif"].join(", "),mono:["ui-monospace","Menlo","Monaco",'"Roboto Mono"','"Oxygen Mono"','"Ubuntu Monospace"','"Source Code Pro"','"Droid Sans Mono"','"Courier New"',"monospace"].join(", ")},weight:{regular:400,bold:700},size:{s1:12,s2:14,s3:16,m1:20,m2:24,m3:28,l1:32,l2:40,l3:48,code:90}},dt={base:"light",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:ue.app,appContentBg:p.lightest,appBorderColor:p.border,appBorderRadius:4,fontBase:D.fonts.base,fontCode:D.fonts.mono,textColor:p.darkest,textInverseColor:p.lightest,textMutedColor:p.mediumdark,barTextColor:p.mediumdark,barSelectedColor:p.secondary,barBg:p.lightest,buttonBg:ue.app,buttonBorder:p.medium,booleanBg:p.mediumlight,booleanSelectedBg:p.lightest,inputBg:p.lightest,inputBorder:p.border,inputTextColor:p.darkest,inputBorderRadius:4},fe=dt,pt={base:"dark",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:"#222425",appContentBg:"#1B1C1D",appBorderColor:"rgba(255,255,255,.1)",appBorderRadius:4,fontBase:D.fonts.base,fontCode:D.fonts.mono,textColor:"#C9CDCF",textInverseColor:"#222425",textMutedColor:"#798186",barTextColor:"#798186",barSelectedColor:p.secondary,barBg:"#292C2E",buttonBg:"#222425",buttonBorder:"rgba(255,255,255,.1)",booleanBg:"#222425",booleanSelectedBg:"#2E3438",inputBg:"#1B1C1D",inputBorder:"rgba(255,255,255,.1)",inputTextColor:p.lightest,inputBorderRadius:4},ct=pt,{window:U}=be,mt=()=>!U||!U.matchMedia?"light":U.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",de={light:fe,dark:ct,normal:fe};mt();var ht=function e(t,r){if(t===r)return!0;if(t&&r&&typeof t=="object"&&typeof r=="object"){if(t.constructor!==r.constructor)return!1;var a,n,o;if(Array.isArray(t)){if(a=t.length,a!=r.length)return!1;for(n=a;n--!==0;)if(!e(t[n],r[n]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if(o=Object.keys(t),a=o.length,a!==Object.keys(r).length)return!1;for(n=a;n--!==0;)if(!Object.prototype.hasOwnProperty.call(r,o[n]))return!1;for(n=a;n--!==0;){var i=o[n];if(!e(t[i],r[i]))return!1}return!0}return t!==t&&r!==r};const pe=Oe(ht);function I(e){"@babel/helpers - typeof";return I=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(e)}var W;function ce(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,a)}return r}function me(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ce(Object(r),!0).forEach(function(a){gt(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ce(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}function gt(e,t,r){return t=bt(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function bt(e){var t=yt(e,"string");return I(t)==="symbol"?t:String(t)}function yt(e,t){if(I(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var a=r.call(e,t||"default");if(I(a)!=="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function R(e){return xt(e)||wt(e)||St(e)||vt()}function vt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function St(e,t){if(e){if(typeof e=="string")return V(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return V(e,t)}}function wt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function xt(e){if(Array.isArray(e))return V(e)}function V(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}__STORYBOOK_MODULE_CORE_EVENTS__;var we=be,Ft=we.document,z=we.window,xe="sb-addon-themes-3";(W=z.matchMedia)===null||W===void 0||W.call(z,"(prefers-color-scheme: dark)");var ee={classTarget:"body",dark:de.dark,darkClass:["dark"],light:de.light,lightClass:["light"],stylePreview:!1,userHasExplicitlySetTheTheme:!1},he=function(t){z.localStorage.setItem(xe,JSON.stringify(t))},Ct=function(t,r){var a=r.current,n=r.darkClass,o=n===void 0?ee.darkClass:n,i=r.lightClass,l=i===void 0?ee.lightClass:i;if(a==="dark"){var s,u;(s=t.classList).remove.apply(s,R($(l))),(u=t.classList).add.apply(u,R($(o)))}else{var c,f;(c=t.classList).remove.apply(c,R($(o))),(f=t.classList).add.apply(f,R($(l)))}},$=function(t){var r=[];return r.concat(t).map(function(a){return a})},kt=function(t){var r=Ft.querySelector(t.classTarget);r&&Ct(r,t)},Fe=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=z.localStorage.getItem(xe);if(typeof r=="string"){var a=JSON.parse(r);return t&&(t.dark&&!pe(a.dark,t.dark)&&(a.dark=t.dark,he(a)),t.light&&!pe(a.light,t.light)&&(a.light=t.light,he(a))),a}return me(me({},ee),t)};kt(Fe());function Ot(e,t){return Pt(e)||jt(e,t)||Et(e,t)||Tt()}function Tt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Et(e,t){if(e){if(typeof e=="string")return ge(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ge(e,t)}}function ge(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function jt(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var a,n,o,i,l=[],s=!0,u=!1;try{if(o=(r=r.call(e)).next,t===0){if(Object(r)!==r)return;s=!1}else for(;!(s=(a=o.call(r)).done)&&(l.push(a.value),l.length!==t);s=!0);}catch(c){u=!0,n=c}finally{try{if(!s&&r.return!=null&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw n}}return l}}function Pt(e){if(Array.isArray(e))return e}const{addons:It}=__STORYBOOK_MODULE_ADDONS__;function At(){var e=k.useState(Fe().current==="dark"),t=Ot(e,2),r=t[0],a=t[1];return k.useEffect(function(){var n=It.getChannel();return n.on(se,a),function(){return n.off(se,a)}},[]),r}const Dt={argTypes:{param:{table:{category:"Group"}}},globalTypes:{theme:{description:"Global theme for components",defaultValue:"light",toolbar:{title:"Theme",icon:"circlehollow",items:["light","dark"],dynamicTitle:!0}}}},Rt=()=>{const e=At(),t=je();return m.useEffect(()=>{t.setTheme(e?"dark":"light")},[e]),null},zt=[e=>L.jsxs(Pe,{children:[L.jsx(Rt,{}),L.jsx(e,{})]})];export{zt as decorators,Dt as parameters};
//# sourceMappingURL=preview-f11cb762.js.map

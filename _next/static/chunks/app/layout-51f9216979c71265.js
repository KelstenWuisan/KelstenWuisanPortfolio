(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{8972:function(e,t,n){Promise.resolve().then(n.bind(n,3241)),Promise.resolve().then(n.t.bind(n,6088,23)),Promise.resolve().then(n.t.bind(n,5220,23)),Promise.resolve().then(n.t.bind(n,8877,23))},3241:function(e,t,n){"use strict";n.d(t,{ThemeProvider:function(){return y}});var a=n(7437),c=n(2265),o=["light","dark"],l="(prefers-color-scheme: dark)",s="undefined"==typeof window,r=c.createContext(void 0),i=e=>c.useContext(r)?e.children:c.createElement(d,{...e}),m=["light","dark"],d=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:a=!0,enableColorScheme:s=!0,storageKey:i="theme",themes:d=m,defaultTheme:y=a?"system":"light",attribute:_="data-theme",value:b,children:g,nonce:S}=e,[p,k]=c.useState(()=>h(i,y)),[w,C]=c.useState(()=>h(i)),E=b?Object.values(b):d,T=c.useCallback(e=>{let t=e;if(!t)return;"system"===e&&a&&(t=v());let c=b?b[t]:t,l=n?f():null,r=document.documentElement;if("class"===_?(r.classList.remove(...E),c&&r.classList.add(c)):c?r.setAttribute(_,c):r.removeAttribute(_),s){let e=o.includes(y)?y:null,n=o.includes(t)?t:e;r.style.colorScheme=n}null==l||l()},[]),x=c.useCallback(e=>{let t="function"==typeof e?e(e):e;k(t);try{localStorage.setItem(i,t)}catch(e){}},[t]),N=c.useCallback(e=>{C(v(e)),"system"===p&&a&&!t&&T("system")},[p,t]);c.useEffect(()=>{let e=window.matchMedia(l);return e.addListener(N),N(e),()=>e.removeListener(N)},[N]),c.useEffect(()=>{let e=e=>{e.key===i&&x(e.newValue||y)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[x]),c.useEffect(()=>{T(null!=t?t:p)},[t,p]);let L=c.useMemo(()=>({theme:p,setTheme:x,forcedTheme:t,resolvedTheme:"system"===p?w:p,themes:a?[...d,"system"]:d,systemTheme:a?w:void 0}),[p,x,t,w,a,d]);return c.createElement(r.Provider,{value:L},c.createElement(u,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:a,enableColorScheme:s,storageKey:i,themes:d,defaultTheme:y,attribute:_,value:b,children:g,attrs:E,nonce:S}),g)},u=c.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:a,enableSystem:s,enableColorScheme:r,defaultTheme:i,value:m,attrs:d,nonce:u}=e,h="system"===i,f="class"===a?"var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(d.map(e=>"'".concat(e,"'")).join(","),")"),";"):"var d=document.documentElement,n='".concat(a,"',s='setAttribute';"),v=r?(o.includes(i)?i:null)?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(i,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",y=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],c=m?m[e]:e,l=t?e+"|| ''":"'".concat(c,"'"),s="";return r&&n&&!t&&o.includes(e)&&(s+="d.style.colorScheme = '".concat(e,"';")),"class"===a?t||c?s+="c.add(".concat(l,")"):s+="null":c&&(s+="d[s](n,".concat(l,")")),s},_=t?"!function(){".concat(f).concat(y(t),"}()"):s?"!function(){try{".concat(f,"var e=localStorage.getItem('").concat(n,"');if('system'===e||(!e&&").concat(h,")){var t='").concat(l,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(y("dark"),"}else{").concat(y("light"),"}}else if(e){").concat(m?"var x=".concat(JSON.stringify(m),";"):"").concat(y(m?"x[e]":"e",!0),"}").concat(h?"":"else{"+y(i,!1,!1)+"}").concat(v,"}catch(e){}}()"):"!function(){try{".concat(f,"var e=localStorage.getItem('").concat(n,"');if(e){").concat(m?"var x=".concat(JSON.stringify(m),";"):"").concat(y(m?"x[e]":"e",!0),"}else{").concat(y(i,!1,!1),";}").concat(v,"}catch(t){}}();");return c.createElement("script",{nonce:u,dangerouslySetInnerHTML:{__html:_}})}),h=(e,t)=>{let n;if(!s){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},f=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},v=e=>(e||(e=window.matchMedia(l)),e.matches?"dark":"light");function y(e){let{children:t,...n}=e;return(0,a.jsx)(i,{...n,children:t})}},8877:function(){},5220:function(e){e.exports={style:{fontFamily:"'__geistMono_c3aa02', '__geistMono_Fallback_c3aa02'"},className:"__className_c3aa02",variable:"__variable_c3aa02"}},6088:function(e){e.exports={style:{fontFamily:"'__geistSans_1e4310', '__geistSans_Fallback_1e4310'"},className:"__className_1e4310",variable:"__variable_1e4310"}}},function(e){e.O(0,[229,971,23,744],function(){return e(e.s=8972)}),_N_E=e.O()}]);
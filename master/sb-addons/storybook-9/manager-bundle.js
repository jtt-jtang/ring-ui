try{
(()=>{var Br=Object.create;var Ge=Object.defineProperty;var Dr=Object.getOwnPropertyDescriptor;var qr=Object.getOwnPropertyNames;var Wr=Object.getPrototypeOf,jr=Object.prototype.hasOwnProperty;var ve=(o,e)=>()=>(o&&(e=o(o=0)),e);var b=(o,e)=>()=>(e||o((e={exports:{}}).exports,e),e.exports);var Gr=(o,e,r,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of qr(e))!jr.call(o,a)&&a!==r&&Ge(o,a,{get:()=>e[a],enumerable:!(t=Dr(e,a))||t.enumerable});return o};var F=(o,e,r)=>(r=o!=null?Br(Wr(o)):{},Gr(e||!o||!o.__esModule?Ge(r,"default",{value:o,enumerable:!0}):r,o));var n=ve(()=>{});var i=ve(()=>{});var s=ve(()=>{});var xe=b((rn,te)=>{n();i();s();(function(){"use strict";var o={}.hasOwnProperty,e="[native code]";function r(){for(var t=[],a=0;a<arguments.length;a++){var c=arguments[a];if(c){var d=typeof c;if(d==="string"||d==="number")t.push(c);else if(Array.isArray(c)){if(c.length){var g=r.apply(null,c);g&&t.push(g)}}else if(d==="object"){if(c.toString!==Object.prototype.toString&&!c.toString.toString().includes("[native code]")){t.push(c.toString());continue}for(var f in c)o.call(c,f)&&c[f]&&t.push(f)}}}return t.join(" ")}typeof te<"u"&&te.exports?(r.default=r,te.exports=r):typeof define=="function"&&typeof define.amd=="object"&&define.amd?define("classnames",[],function(){return r}):window.classNames=r})()});var Je=b((_n,Xe)=>{"use strict";n();i();s();var Ur="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";Xe.exports=Ur});var oo=b((Sn,eo)=>{"use strict";n();i();s();var zr=Je();function Ze(){}function Qe(){}Qe.resetWarningCache=Ze;eo.exports=function(){function o(t,a,c,d,g,f){if(f!==zr){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}o.isRequired=o;function e(){return o}var r={array:o,bigint:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:e,element:o,elementType:o,instanceOf:e,node:o,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Qe,resetWarningCache:Ze};return r.PropTypes=r,r}});var K=b((Ln,ro)=>{n();i();s();ro.exports=oo()();var Mn,Rn});var po=b((ni,co)=>{"use strict";n();i();s();co.exports=function(o,e,r){var t=this;return o=o instanceof Array?o:[o],t.bindMultiple(o,e,r),t}});var uo=b((ci,lo)=>{"use strict";n();i();s();lo.exports=function(o,e,r){for(var t=this,a=0;a<o.length;++a)t.bindSingle(o[a],e,r)}});var fo=b((di,go)=>{"use strict";n();i();s();go.exports=function(o,e){var r=this;return r.bind(o,function(){},e)}});var ho=b((hi,mo)=>{"use strict";n();i();s();mo.exports=function(o,e){var r=this;return r.directMap[o+":"+e]&&r.directMap[o+":"+e]({},o),this}});var vo=b((xi,bo)=>{"use strict";n();i();s();bo.exports=function(){var o=this;return o.callbacks={},o.directMap={},this}});var xo=b((wi,yo)=>{"use strict";n();i();s();yo.exports=function(o,e){if((" "+e.className+" ").indexOf(" combokeys ")>-1)return!1;var r=e.tagName.toLowerCase();return r==="input"||r==="select"||r==="textarea"||e.isContentEditable}});var ae=b((ki,To)=>{"use strict";n();i();s();To.exports=function(o){return o==="shift"||o==="ctrl"||o==="alt"||o==="meta"}});var Eo=b((Li,_o)=>{"use strict";n();i();s();_o.exports=function(o,e,r){var t=this,a,c,d={},g=0,f=!1,h,m;for(a=t.getMatches(o,e,r),c=0;c<a.length;++c)a[c].seq&&(g=Math.max(g,a[c].level));for(c=0;c<a.length;++c){if(a[c].seq){if(a[c].level!==g)continue;f=!0,d[a[c].seq]=1,t.fireCallback(a[c].callback,r,a[c].combo,a[c].seq);continue}f||t.fireCallback(a[c].callback,r,a[c].combo)}m=r.type==="keypress"&&t.ignoreNextKeypress,h=ae(),r.type===t.nextExpectedAction&&!h(o)&&!m&&t.resetSequences(d),t.ignoreNextKeypress=f&&r.type==="keydown"}});var Oe=b((Ii,ce)=>{n();i();s();ce.exports=wo;ce.exports.on=wo;ce.exports.off=Jr;function wo(o,e,r,t){return!o.addEventListener&&(e="on"+e),(o.addEventListener||o.attachEvent).call(o,e,r,t),r}function Jr(o,e,r,t){return!o.removeEventListener&&(e="on"+e),(o.removeEventListener||o.detachEvent).call(o,e,r,t),r}});var Se=b((qi,pe)=>{"use strict";n();i();s();pe.exports={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",173:"minus",187:"plus",189:"minus",224:"meta"};for(M=1;M<20;++M)pe.exports[111+M]="f"+M;var M;for(M=0;M<=9;++M)pe.exports[M+96]=M});var So=b((Ki,Oo)=>{"use strict";n();i();s();Oo.exports={106:"*",107:"plus",109:"minus",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"}});var Ce=b((Yi,Co)=>{"use strict";n();i();s();Co.exports=function(o){var e,r;if(e=Se(),r=So(),o.type==="keypress"){var t=String.fromCharCode(o.which);return o.shiftKey||(t=t.toLowerCase()),t}return e[o.which]!==void 0?e[o.which]:r[o.which]!==void 0?r[o.which]:String.fromCharCode(o.which).toLowerCase()}});var Po=b((Zi,ko)=>{"use strict";n();i();s();ko.exports=function(o){var e=[];return o.shiftKey&&e.push("shift"),o.altKey&&e.push("alt"),o.ctrlKey&&e.push("ctrl"),o.metaKey&&e.push("meta"),e}});var Ro=b((rs,Mo)=>{"use strict";n();i();s();Mo.exports=function(o){var e=this,r,t;typeof o.which!="number"&&(o.which=o.keyCode),r=Ce();var a=r(o);if(a!==void 0){if(o.type==="keyup"&&e.ignoreNextKeyup===a){e.ignoreNextKeyup=!1;return}t=Po(),e.handleKey(a,t(o),o)}}});var Ao=b((ss,Lo)=>{"use strict";n();i();s();Lo.exports=function(){var o=this,e=Oe(),r=o.element;o.eventHandler=Ro().bind(o),e(r,"keypress",o.eventHandler),e(r,"keydown",o.eventHandler),e(r,"keyup",o.eventHandler)}});var Fo=b((ls,Ho)=>{"use strict";n();i();s();Ho.exports=function(o,e,r,t,a){var c=this;c.directMap[o+":"+r]=e,o=o.replace(/\s+/g," ");var d=o.split(" "),g;if(d.length>1){c.bindSequence(o,d,e,r);return}g=c.getKeyInfo(o,r),c.callbacks[g.key]=c.callbacks[g.key]||[],c.getMatches(g.key,g.modifiers,{type:g.action},t,o,a),c.callbacks[g.key][t?"unshift":"push"]({callback:e,modifiers:g.modifiers,action:g.action,seq:t,level:a,combo:o})}});var No=b((fs,Io)=>{"use strict";n();i();s();Io.exports=function(o){return o==="+"?["+"]:o.split("+")}});var Do=b((vs,Bo)=>{"use strict";n();i();s();Bo.exports={option:"alt",command:"meta",return:"enter",escape:"esc",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"}});var Wo=b((_s,qo)=>{"use strict";n();i();s();qo.exports={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"}});var Go=b((Ss,jo)=>{"use strict";n();i();s();jo.exports=function(o,e){var r=this,t,a,c,d,g=[],f,h,m;for(t=No(),a=t(o),f=Do(),h=Wo(),m=ae(),d=0;d<a.length;++d)c=a[d],f[c]&&(c=f[c]),e&&e!=="keypress"&&h[c]&&(c=h[c],g.push("shift")),m(c)&&g.push(c);return e=r.pickBestAction(c,g,e),{key:c,modifiers:g,action:e}}});var Uo=b((Ms,Ko)=>{"use strict";n();i();s();Ko.exports=function(o,e,r){var t=this;return r||(r=t.getReverseMap()[o]?"keydown":"keypress"),r==="keypress"&&e.length&&(r="keydown"),r}});var Vo=b((Hs,zo)=>{"use strict";n();i();s();zo.exports=function(){var o=this,e=o.constructor,r;if(!e.REVERSE_MAP){e.REVERSE_MAP={},r=Se();for(var t in r)t>95&&t<112||r.hasOwnProperty(t)&&(e.REVERSE_MAP[r[t]]=t)}return e.REVERSE_MAP}});var $o=b((Bs,Yo)=>{"use strict";n();i();s();Yo.exports=function(o,e){return o.sort().join(",")===e.sort().join(",")}});var Jo=b((js,Xo)=>{"use strict";n();i();s();Xo.exports=function(o,e,r,t,a,c){var d=this,g,f,h=[],m=r.type,T,y;if(m==="keypress"&&!(r.code&&r.code.slice(0,5)==="Arrow")){var _=d.callbacks["any-character"]||[];_.forEach(function(I){h.push(I)})}if(!d.callbacks[o])return h;for(T=ae(),m==="keyup"&&T(o)&&(e=[o]),g=0;g<d.callbacks[o].length;++g)if(f=d.callbacks[o][g],!(!t&&f.seq&&d.sequenceLevels[f.seq]!==f.level)&&m===f.action&&(y=$o(),m==="keypress"&&!r.metaKey&&!r.ctrlKey||y(e,f.modifiers))){var P=!t&&f.combo===a,L=t&&f.seq===t&&f.level===c;(P||L)&&d.callbacks[o].splice(g,1),h.push(f)}return h}});var Qo=b((zs,Zo)=>{"use strict";n();i();s();Zo.exports=function(o){var e=this;o=o||{};var r=!1,t;for(t in e.sequenceLevels){if(o[t]){r=!0;continue}e.sequenceLevels[t]=0}r||(e.nextExpectedAction=!1)}});var or=b((Xs,er)=>{"use strict";n();i();s();er.exports=function(o){if(o.preventDefault){o.preventDefault();return}o.returnValue=!1}});var tr=b((ea,rr)=>{"use strict";n();i();s();rr.exports=function(o){if(o.stopPropagation){o.stopPropagation();return}o.cancelBubble=!0}});var ir=b((na,nr)=>{"use strict";n();i();s();nr.exports=function(o,e,r,t){var a=this,c,d;a.stopCallback(e,e.target||e.srcElement,r,t)||o(e,r)===!1&&(c=or(),c(e),d=tr(),d(e))}});var ar=b((ca,sr)=>{"use strict";n();i();s();sr.exports=function(o,e,r,t){var a=this;a.sequenceLevels[o]=0;function c(m){return function(){a.nextExpectedAction=m,++a.sequenceLevels[o],a.resetSequenceTimer()}}function d(m){var T;a.fireCallback(r,m,o),t!=="keyup"&&(T=Ce(),a.ignoreNextKeyup=T(m)),setTimeout(function(){a.resetSequences()},10)}for(var g=0;g<e.length;++g){var f=g+1===e.length,h=f?d:c(t||a.getKeyInfo(e[g+1]).action);a.bindSingle(e[g],h,t,o,g)}}});var pr=b((da,cr)=>{"use strict";n();i();s();cr.exports=function(){var o=this;clearTimeout(o.resetTimer),o.resetTimer=setTimeout(function(){o.resetSequences()},1e3)}});var ur=b((ha,lr)=>{n();i();s();var ke=Oe().off;lr.exports=function(){var o=this,e=o.element;ke(e,"keypress",o.eventHandler),ke(e,"keydown",o.eventHandler),ke(e,"keyup",o.eventHandler)}});var gr=b((xa,dr)=>{"use strict";n();i();s();dr.exports=function(){var o=this;o.instances.forEach(function(e){e.reset()})}});var fr=b((wa,E)=>{"use strict";n();i();s();E.exports=function(o,e){var r=this,t=r.constructor;return r.options=Object.assign({storeInstancesGlobally:!0},e||{}),r.callbacks={},r.directMap={},r.sequenceLevels={},r.resetTimer=null,r.ignoreNextKeyup=!1,r.ignoreNextKeypress=!1,r.nextExpectedAction=!1,r.element=o,r.addEvents(),r.options.storeInstancesGlobally&&t.instances.push(r),r};E.exports.prototype.bind=po();E.exports.prototype.bindMultiple=uo();E.exports.prototype.unbind=fo();E.exports.prototype.trigger=ho();E.exports.prototype.reset=vo();E.exports.prototype.stopCallback=xo();E.exports.prototype.handleKey=Eo();E.exports.prototype.addEvents=Ao();E.exports.prototype.bindSingle=Fo();E.exports.prototype.getKeyInfo=Go();E.exports.prototype.pickBestAction=Uo();E.exports.prototype.getReverseMap=Vo();E.exports.prototype.getMatches=Jo();E.exports.prototype.resetSequences=Qo();E.exports.prototype.fireCallback=ir();E.exports.prototype.bindSequence=ar();E.exports.prototype.resetSequenceTimer=pr();E.exports.prototype.detach=ur();E.exports.instances=[];E.exports.reset=gr();E.exports.REVERSE_MAP=null});var hr=b((S,mr)=>{n();i();s();typeof window<"u"&&(window.exports=window.exports||{});var Me=S&&S.__assign||function(){return Me=Object.assign||function(o){for(var e,r=1,t=arguments.length;r<t;r++){e=arguments[r];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(o[a]=e[a])}return o},Me.apply(this,arguments)};Object.defineProperty(S,"__esModule",{value:!0});S.RecognizedBrowser=S.Device=S.OS=S.Browser=void 0;var x;(function(o){o.Firefox="firefox",o.Chrome="chrome",o.InternetExplorer="ie",o.Safari="safari",o.Edge="edge",o.Android="com.android.browser",o.Opera="opera",o.OperaMini="opera.mini",o.Blackberry="blackberry",o.Iceweasel="iceweasel",o.Yandex="yandex",o.SeaMonkey="seamonkey"})(x||(S.Browser=x={}));var O;(function(o){o.Linux="linux",o.MacOS="macos",o.Windows="windows",o.iOS="ios",o.OpenBSD="openbsd",o.ChromeOS="chromeos",o.Android="android",o.FirefoxOS="firefoxos",o.WindowsPhone="windows.phone",o.WindowsMobile="windows.mobile",o.BlackberryOS="blackberryos"})(O||(S.OS=O={}));var k;(function(o){o.iPad="ipad",o.iPhone="iphone",o.Lumia="lumia",o.HTC="htc",o.Nexus="nexus",o.GalaxyNexus="galaxy.nexus",o.Nokia="nokia",o.Galaxy="galaxy",o.XBox="xbox",o.Blackberry="blackberry"})(k||(S.Device=k={}));var Zr=[[/msie ([\.\_\d]+)/,x.InternetExplorer],[/trident\/.*?rv:([\.\_\d]+)/,x.InternetExplorer],[/firefox\/([\.\_\d]+)/,x.Firefox],[/fxios\/([\.\_\d]+)/,x.Firefox],[/chrome\/([\.\_\d]+)/,x.Chrome],[/version\/([\.\_\d]+).*?safari/,x.Safari],[/mobile safari ([\.\_\d]+)/,x.Safari],[/android.*?version\/([\.\_\d]+).*?safari/,x.Android],[/crios\/([\.\_\d]+).*?safari/,x.Chrome],[/opera/,x.Opera],[/opera\/([\.\_\d]+)/,x.Opera],[/opera ([\.\_\d]+)/,x.Opera],[/opera mini.*?version\/([\.\_\d]+)/,x.OperaMini],[/opr\/([\.\_\d]+)/,x.Opera],[/opios\/([a-z\.\_\d]+)/,x.Opera],[/blackberry/,x.Blackberry],[/blackberry.*?version\/([\.\_\d]+)/,x.Blackberry],[/bb\d+.*?version\/([\.\_\d]+)/,x.Blackberry],[/rim.*?version\/([\.\_\d]+)/,x.Blackberry],[/iceweasel\/([\.\_\d]+)/,x.Iceweasel],[/edge\/([\.\d]+)/,x.Edge],[/edg\/([\.\d]+)/,x.Edge],[/yabrowser\/([\.\d]+)/,x.Yandex],[/seamonkey\/([\.\d]+)/,x.SeaMonkey]],Qr=[[/cros\s*\S+\s*([\.\_\d]+)/,O.ChromeOS],[/linux ()([a-z\.\_\d]+)/,O.Linux],[/mac os x/,O.MacOS],[/mac os x.*?([\.\_\d]+)/,O.MacOS],[/os ([\.\_\d]+) like mac os/,O.iOS],[/openbsd ()([a-z\.\_\d]+)/,O.OpenBSD],[/android/,O.Android],[/android ([a-z\.\_\d]+);/,O.Android],[/mozilla\/[a-z\.\_\d]+ \((?:mobile)|(?:tablet)/,O.FirefoxOS],[/windows\s*(?:nt)?\s*([\.\_\d]+)/,O.Windows],[/windows phone.*?([\.\_\d]+)/,O.WindowsPhone],[/windows mobile/,O.WindowsMobile],[/blackberry/,O.BlackberryOS],[/bb\d+/,O.BlackberryOS],[/rim.*?os\s*([\.\_\d]+)/,O.BlackberryOS]],et=[[/ipad/,k.iPad],[/iphone/,k.iPhone],[/lumia/,k.Lumia],[/htc/,k.HTC],[/nexus/,k.Nexus],[/galaxy nexus/,k.GalaxyNexus],[/nokia/,k.Nokia],[/ gt\-/,k.Galaxy],[/ sm\-/,k.Galaxy],[/xbox/,k.XBox],[/(?:bb\d+)|(?:blackberry)|(?: rim )/,k.Blackberry]],Re="Unknown",B={name:Re,version:[],versionString:Re};function ot(o){return o.split(/[\._]/).map(function(e){return parseInt(e)}).filter(function(e){return!isNaN(e)})}function Pe(o,e){var r=Me({},B);return o.forEach(function(t){var a=t[0],c=t[1],d=e.match(a);d&&(r.name=c,d[2]?(r.versionString=d[2],r.version=[]):d[1]?(r.versionString=d[1].replace(/_/g,"."),r.version=ot(d[1])):(r.versionString=Re,r.version=[]))}),r}var Le=typeof window<"u",Ae=function(){function o(){this.os=B,this.device=B,this.browser=B}return o.prototype.sniff=function(e){var r=Le?navigator.userAgent:"",t=(e||r).toLowerCase();return this.os=Pe(Qr,t),this.device=Pe(et,t),this.browser=Pe(Zr,t),this},o}();S.default=Ae;S.RecognizedBrowser={os:B,browser:B,device:B};Le&&(le=new Ae().sniff(navigator.userAgent),S.RecognizedBrowser.os=le.os,S.RecognizedBrowser.device=le.device,S.RecognizedBrowser.browser=le.browser);var le;Le&&typeof mr>"u"&&(window.Sniffr=new Ae,window.Sniffr.sniff(navigator.userAgent))});n();i();s();n();i();s();n();i();s();var wt=__STORYBOOK_ADDONS__,{addons:Ke,types:Ot,mockChannel:St}=__STORYBOOK_ADDONS__;var ee={};n();i();s();n();i();s();var w=__REACT__,{Children:Lt,Component:Ue,Fragment:At,Profiler:Ht,PureComponent:oe,StrictMode:Ft,Suspense:It,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Nt,cloneElement:Bt,createContext:ze,createElement:Dt,createFactory:qt,createRef:Wt,forwardRef:re,isValidElement:jt,lazy:Gt,memo:Kt,useCallback:Ut,useContext:Ve,useDebugValue:zt,useEffect:ye,useImperativeHandle:Vt,useLayoutEffect:Yt,useMemo:Ye,useReducer:$t,useRef:Xt,useState:$e,version:Jt}=__REACT__;var De=F(xe());n();i();s();var an=__REACT_DOM__,{__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:cn,createPortal:ne,findDOMNode:pn,flushSync:ln,hydrate:un,render:dn,unmountComponentAtNode:gn,unstable_batchedUpdates:fn,unstable_createPortal:mn,unstable_renderSubtreeIntoContainer:hn,version:bn}=__REACT_DOM__;n();i();s();var U=F(K()),z=ze(void 0),V=re(function({id:e,children:r,...t},a){let c=w.createElement("div",{...t,"data-portaltarget":e,ref:a},typeof r!="function"&&r);return w.createElement(z.Provider,{value:e},typeof r=="function"?r(c):c)});V.propTypes={id:U.default.string.isRequired,children:U.default.oneOfType([U.default.node,U.default.func])};n();i();s();var v=F(K()),Or=F(xe());n();i();s();var Te={};function Vr(){return(Date.now()*Math.random()).toString(36).substring(0,4)}var Yr=Vr();function Y(o){if(!o)throw Error('Argument "name" is required in getUID()');Te[o]||(Te[o]=0);let e=String(Te[o]++);return`${o}${e}-${Yr}`}n();i();s();function _e(o){let e,r,t=!1;function a(){r=window.requestAnimationFrame(()=>{e?.(),t?(t=!1,a()):(r=null,e=null)})}return function(d){e=d,r?o&&(t=!0):a()}}n();i();s();var to=window.getComputedStyle.bind(window);function Ee(o){return o===document?!0:o instanceof Node&&document.documentElement.contains(o.parentNode)}var $r={top:0,right:0,bottom:0,left:0,width:0,height:0};function se(o){if(o instanceof Range||o!=null&&Ee(o)){let{top:e,right:r,bottom:t,left:a,width:c,height:d}=o.getBoundingClientRect();return{top:e,right:r,bottom:t,left:a,width:c,height:d}}else return Object.assign({},$r)}function we(){return window.innerHeight}function Xr(){return window.innerWidth}function no(o){let{top:e,bottom:r,left:t,right:a}=se(o);return!(r<0||a<0||we()-e<0||Xr()-t<0)}function io(){return document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop}function so(){return document.documentElement&&document.documentElement.scrollLeft||document.body.scrollLeft}var ao=o=>(e,r="")=>{r.split(/\s+/g).filter(t=>!!t).forEach(t=>e[o](t))},Zn=ao("add"),Qn=ao("remove");var ie=class{_all=new Set;add(e,r,t,a){e.addEventListener(r,t,a);let c=()=>e.removeEventListener(r,t,a);return this._all.add(c),c}remove(e){e(),this._all.delete(e)}removeAll(){this._all.forEach(e=>this.remove(e))}};n();i();s();var q=F(K());n();i();s();var xr=F(fr());n();i();s();var br=F(hr()),vr=new br.default;vr.sniff();var yr=vr;var He=class{ALLOW_SHORTCUTS_SELECTOR=".ring-js-shortcuts";ROOT_SCOPE={scopeId:"ROOT",options:{}};_scopes={};_scopeChain=[];combokeys=new xr.default(document.documentElement);trigger=e=>this.combokeys.trigger(e);constructor(){this.setFilter(),this.setScope()}_dispatcher=(e,r)=>{let t;for(let a=this._scopeChain.length-1;a>=0;a--){let c=this._scopeChain[a];if(t=this._scopes[c.scopeId],t&&r!=null&&t[r]){let d=t[r](e,r,c.scopeId);if(d!==!0)return d}if(c.options.modal)return!0}};bind(e){if(!(e instanceof Object)||typeof e.handler!="function")throw new Error("Shortcut handler should exist");if(e.scope||(e.scope=this.ROOT_SCOPE.scopeId),Array.isArray(e.key)){for(let t=0;t<e.key.length;t++)this.bind(Object.assign({},e,{key:e.key[t]}));return}if(typeof e.key!="string")throw new Error("Shortcut key should exist");let r=this._scopes[e.scope];r||(r=this._scopes[e.scope]={}),r[e.key]=e.handler,this.combokeys.bind(e.key,this._dispatcher,this._getKeyboardEventType(e))}bindMap(e,r){if(!(e instanceof Object))throw new Error("Shortcuts map shouldn't be empty");for(let t in e)e.hasOwnProperty(t)&&this.bind(Object.assign({},r||{},{key:t,handler:e[t]}))}unbindScope(e){this._scopes[e]=null}getScope(){return this._scopeChain.slice(1)}hasScope(e){return this.indexOfScope(e)!==-1}pushScope(e,r={}){if(e){let t=this.indexOfScope(e);t!==-1&&this._scopeChain.splice(t,1),this._scopeChain.push(this.wrapScope(e,r))}}popScope(e){if(e){let r=this.indexOfScope(e);if(r!==-1)return this._scopeChain.splice(r,this._scopeChain.length-1)}}spliceScope(e){if(e){let r=this.indexOfScope(e);r!==-1&&this._scopeChain.splice(r,1)}}setScope(e){if(e){let r;if(typeof e=="string"||!Array.isArray(e)&&typeof e=="object"&&e!==null?r=[e]:r=e,!Array.isArray(r))return;let t=r.map(a=>typeof a=="string"?this.wrapScope(a):a);this._scopeChain=[this.ROOT_SCOPE].concat(t)}else this._scopeChain=[this.ROOT_SCOPE]}wrapScope(e,r={}){return{scopeId:e,options:r}}hasKey(e,r){return!!this._scopes[r]?.[e]}_defaultFilter=(e,r,t)=>r===document||!(r instanceof HTMLElement)||t==null||r.matches(this.ALLOW_SHORTCUTS_SELECTOR)||(r.dataset.enabledShortcuts!=null?r.dataset.enabledShortcuts.split(",").includes(t):r.closest(this.ALLOW_SHORTCUTS_SELECTOR)!=null)?!1:r.matches("input:not([type=checkbox]),select,textarea")||r.contentEditable==="true";_getKeyboardEventType(e){return!e.type&&yr.os.name==="windows"&&typeof e.key=="string"&&e.key.match(/ctrl/i)&&e.key.match(/shift/i)&&e.key.match(/[0-9]/)?"keyup":e.type}setFilter(e){this.combokeys.stopCallback=typeof e=="function"?e:this._defaultFilter}indexOfScope(e){return this._scopeChain.findIndex(r=>r.scopeId===e)}reset(){this._scopes={},this.setScope(),this.combokeys.reset()}},D=new He;var $=class extends oe{static propTypes={map:q.default.object.isRequired,scope:q.default.string.isRequired,options:q.default.object,disabled:q.default.bool,children:q.default.node};static defaultProps={options:{}};componentDidMount(){this.props.disabled||this.turnShorcutsOn()}componentDidUpdate(e){let{disabled:r,map:t}=this.props;!e.disabled&&r&&this.turnShorcutsOff(),e.disabled&&!r&&this.turnShorcutsOn(),e.map!==t&&D.bindMap(t,this.props)}componentWillUnmount(){this.props.disabled||this.turnShorcutsOff()}turnShorcutsOn(){let{map:e,scope:r,options:t}=this.props;D.bindMap(e,this.props),D.pushScope(r,t)}turnShorcutsOff(){let{scope:e}=this.props;D.unbindScope(e),D.spliceScope(e)}render(){return this.props.children||null}};n();i();s();function rt(o){return Object.entries(o).reduce((e,[r,t])=>t?[...e,r]:e,[])}function Fe(...o){return o.reduce((e,r)=>r?typeof r=="object"?[...e,...rt(r)]:[...e,r]:e,[]).join(" ")}n();i();s();var W=F(K());var Tr={};var nt="input, button, select, textarea, a[href], *[tabindex]:not([data-trap-button]):not([data-scrollable-container])",X=class extends Ue{static propTypes={children:W.default.node.isRequired,trapDisabled:W.default.bool,autoFocusFirst:W.default.bool,focusBackOnClose:W.default.bool,focusBackOnExit:W.default.bool};static defaultProps={trapDisabled:!1,autoFocusFirst:!0,focusBackOnClose:!0,focusBackOnExit:!1};componentDidMount(){this.previousFocusedNode=document.activeElement,this.props.autoFocusFirst?this.focusFirst():!this.props.trapDisabled&&(!this.node||!this.node.contains(this.previousFocusedNode))&&(this.trapWithoutFocus=!0,this.trapButtonNode?.focus())}componentWillUnmount(){this.props.focusBackOnClose&&this.restoreFocus()}previousFocusedNode;trapWithoutFocus;restoreFocus=()=>{let{previousFocusedNode:e}=this;e instanceof HTMLElement&&e.focus&&no(e)&&e.focus({preventScroll:!0})};node;containerRef=e=>{e&&(this.node=e)};focusElement=(e=!0)=>{let{node:r}=this;if(!r)return;let t=[...r.querySelectorAll(nt)].filter(c=>c.tabIndex>=0),a=e?t[0]:t[t.length-1];a&&a.focus()};focusFirst=()=>this.focusElement(!0);focusLast=()=>this.focusElement(!1);focusLastIfEnabled=e=>{if(!this.trapWithoutFocus)if(this.props.focusBackOnExit){let r=e.nativeEvent.relatedTarget;r!=null&&this.node!=null&&r instanceof Element&&this.node.contains(r)&&this.restoreFocus()}else this.focusLast()};handleBlurIfWithoutFocus=e=>{if(!this.trapWithoutFocus)return;this.trapWithoutFocus=!1;let r=e.nativeEvent.relatedTarget;r&&(r instanceof Element&&this.node?.contains(r)||this.focusLast())};trapButtonNode;trapButtonRef=e=>{e&&(this.trapButtonNode=e)};render(){let{children:e,trapDisabled:r,autoFocusFirst:t,focusBackOnClose:a,focusBackOnExit:c,...d}=this.props;return r?w.createElement("div",{ref:this.containerRef,...d},e):w.createElement("div",{ref:this.containerRef,...d},w.createElement("div",{tabIndex:0,ref:this.trapButtonRef,className:Tr.trapButton,onFocus:this.focusLastIfEnabled,onBlur:this.handleBlurIfWithoutFocus,"data-trap-button":!0}),e,w.createElement("div",{tabIndex:0,onFocus:c?this.restoreFocus:this.focusFirst,"data-trap-button":!0}))}};n();i();s();n();i();s();var J=(y=>(y.BOTTOM_RIGHT="BOTTOM_RIGHT",y.BOTTOM_LEFT="BOTTOM_LEFT",y.BOTTOM_CENTER="BOTTOM_CENTER",y.TOP_LEFT="TOP_LEFT",y.TOP_RIGHT="TOP_RIGHT",y.TOP_CENTER="TOP_CENTER",y.RIGHT_TOP="RIGHT_TOP",y.RIGHT_BOTTOM="RIGHT_BOTTOM",y.RIGHT_CENTER="RIGHT_CENTER",y.LEFT_TOP="LEFT_TOP",y.LEFT_BOTTOM="LEFT_BOTTOM",y.LEFT_CENTER="LEFT_CENTER",y))(J||{}),_r=["BOTTOM_RIGHT","BOTTOM_LEFT","TOP_LEFT","TOP_RIGHT","RIGHT_TOP","RIGHT_BOTTOM","LEFT_TOP","LEFT_BOTTOM"],ue=(r=>(r[r.MARGIN=16]="MARGIN",r[r.BORDER_WIDTH=1]="BORDER_WIDTH",r))(ue||{}),de=(e=>(e[e.TARGET=-1]="TARGET",e))(de||{}),ge=(e=>(e[e.SCREEN=-1]="SCREEN",e))(ge||{});function it(o){return o!==null?{top:o.scrollTop,left:o.scrollLeft}:{top:io(),left:so()}}function st(o,e,r,t,a){let c=o.offsetWidth,d=o.offsetHeight,g=t+e.height,f=r+e.width,h=r-c,m=t-d,T=f-c,y=r+e.width/2-c/2,_=t+e.height/2-d/2,P=g-d;return{BOTTOM_RIGHT:{left:r,top:g+a},BOTTOM_LEFT:{left:T,top:g+a},BOTTOM_CENTER:{left:y,top:g+a},TOP_RIGHT:{left:r,top:m-a},TOP_LEFT:{left:T,top:m-a},TOP_CENTER:{left:y,top:m-a},LEFT_BOTTOM:{left:h-a,top:t},LEFT_TOP:{left:h-a,top:P},LEFT_CENTER:{left:h-a,top:_},RIGHT_BOTTOM:{left:f+a,top:t},RIGHT_TOP:{left:f+a,top:P},RIGHT_CENTER:{left:f+a,top:_}}}function Er(o,e,r){let t=r.container!==null?r.container.clientHeight:we(),a=e.top+r.sidePadding,c=e.top+t-r.sidePadding,d=Math.max(a-o.top,0),g=r.popup.clientHeight,f=o.top+g-c,h=Math.max(f,0);return d+h}function wr(o,e,r){let t=r.container!==null?r.container.clientWidth:window.innerWidth,a=e.left+r.sidePadding,c=e.left+t-r.sidePadding,d=Math.max(a-o.left,0),g=r.popup.clientWidth,f=o.left+g-c,h=Math.max(f,0);return d+h}var at={top:0,left:0};function ct({sidePadding:o,styles:e,anchorRect:r,maxHeight:t,popupScrollHeight:a,direction:c,scroll:d}){let{TOP_LEFT:f,TOP_RIGHT:h,TOP_CENTER:m,RIGHT_TOP:T,LEFT_TOP:y}=J;if(!(c!=null&&[f,h,m,T,y].includes(c)))return e;let L=c!=null&&[f,m,h].includes(c)?r.top:r.bottom,I=t&&typeof t=="number"?Math.min(a,t):a;return L-I<=o&&(e.top=o+d.top,e.maxHeight=L-o+1),e}function Ie(o){let{popup:e,anchor:r,container:t,directions:a,autoPositioning:c,sidePadding:d,top:g,left:f,offset:h,maxHeight:m,minWidth:T,autoCorrectTopOverflow:y=!0}=o,_={top:0,left:0},P=null,L=t!==null?se(t):at,I=t!==null?t:document.body,A=se(Ee(r)?r:I),H=it(t),Hr=A.left+H.left+f-L.left,Fr=A.top+H.top+g-L.top;if(e){let Q={...o,popup:e},be=st(e,A,Hr,Fr,h);if(!c||a.length===1)_=be[a[0]],P=a[0];else{let G=a.concat(a[0]).filter(N=>be[N]).map(N=>({styles:be[N],direction:N})).sort(({styles:N},{styles:je})=>{let Ir=Er(N,H,Q)+wr(N,H,Q),Nr=Er(je,H,Q)+wr(je,H,Q);return Ir-Nr});_=G[0].styles,P=G[0].direction}["left","top"].forEach(G=>{_[G]<0&&(_[G]=0)})}return m===-1||m==="screen"?_.maxHeight=window.innerHeight+H.top-_.top-16:m&&(_.maxHeight=m),y&&(_=ct({sidePadding:d,styles:_,anchorRect:A,maxHeight:m,direction:P,popupScrollHeight:e?.scrollHeight??0,scroll:H})),T===-1||T==="target"?_.minWidth=A.width:T&&(_.minWidth=A.width<T?T:A.width),{styles:_,direction:P}}var Z={};var lt=o=>o.stopPropagation(),Ne=o=>typeof o=="string"?document.querySelector(`[data-portaltarget=${o}]`):o,fe=class extends oe{static defaultProps={shortcuts:!0,hidden:!1,onOutsideClick(){},onEscPress(){},onCloseAttempt(){},dontCloseOnAnchorClick:!1,keepMounted:!1,directions:_r,autoPositioning:!0,autoPositioningOnScroll:!0,autoCorrectTopOverflow:!0,left:0,top:0,offset:0,sidePadding:8,attached:!1,trapFocus:!1,autoFocusFirst:!1,legacy:!1};state={display:1};componentDidMount(){this.props.client||this.setState({client:!0}),this.props.hidden||this._setListenersEnabled(!0)}componentDidUpdate(e,r){let{hidden:t}=this.props;this.props!==e&&(e.hidden!==t&&this._setListenersEnabled(!t),this._redraw()),this.props.onShow&&!t&&this.state.display===2&&(e.hidden||r.display!==2)&&this.props.onShow()}componentWillUnmount(){this._setListenersEnabled(!1)}popup;node;parent;container;ringPopupTarget;shouldUseShortcuts(){let{shortcuts:e,hidden:r}=this.props;return e&&!r}listeners=new ie;redrawScheduler=_e(!0);uid=Y("popup-");calculateDisplay=e=>({...e,display:this.props.hidden?1:2});static PopupProps={Directions:J,Dimension:ue,MinWidth:de,MaxHeight:ge};portalRef=e=>{this.node=e,this.parent=e&&e.parentElement,e&&this.getContainer()&&this._redraw()};popupRef=e=>{this.popup=e,this._redraw()};containerRef=e=>{this.container=e};getContainer(){let e=this.props.target||this.ringPopupTarget;return e&&Ne(e)}position(){let{directions:e,autoPositioning:r,autoCorrectTopOverflow:t,sidePadding:a,top:c,left:d,offset:g,maxHeight:f,minWidth:h}=this.props,m=this.getContainer();return Ie({popup:this.popup,container:m&&to(m).position!=="static"?m:null,anchor:this._getAnchor(),directions:e,autoPositioning:r,autoCorrectTopOverflow:t,sidePadding:a,top:c,left:d,offset:g,maxHeight:f,minWidth:h})}_updateDirection=e=>{this.state.direction!==e&&(this.setState({direction:e}),this.props.onDirectionChange&&this.props.onDirectionChange(e))};_updatePosition=()=>{let e=this.popup;if(e){if(e.style.position="absolute",this.isVisible()){let{styles:r,direction:t}=this.position();Object.entries(r).forEach(([a,c])=>{let d=a;typeof c=="number"?e.style[d]=`${c}px`:e.style[d]=c.toString()}),t!=null&&this._updateDirection(t)}this.setState(this.calculateDisplay)}};_redraw=()=>{this.isVisible()&&this.redrawScheduler(this._updatePosition)};_getAnchor(){return this.props.anchorElement||this.parent}_listenersEnabled;_setListenersEnabled(e){if(e&&!this._listenersEnabled){setTimeout(()=>{this._listenersEnabled=!0,this.listeners.add(window,"resize",this._redraw),this.props.autoPositioningOnScroll&&this.listeners.add(window,"scroll",this._redraw),this.listeners.add(document,"pointerdown",this._onDocumentClick,!0);let r=this._getAnchor();for(;r;)this.listeners.add(r,"scroll",this._redraw),r=r.parentElement},0);return}!e&&this._listenersEnabled&&(this.listeners.removeAll(),this._listenersEnabled=!1)}isVisible(){return!this.props.hidden}_onCloseAttempt(e,r){this.props.onCloseAttempt(e,r)}_onEscPress=e=>{this.props.onEscPress(e),this._onCloseAttempt(e,!0)};_onDocumentClick=e=>{this.container&&e.target instanceof Node&&this.container.contains(e.target)||!this._listenersEnabled||this.props.dontCloseOnAnchorClick&&e.target instanceof Node&&this._getAnchor()?.contains(e.target)||(this.props.onOutsideClick(e),this._onCloseAttempt(e,!1))};getInternalContent(){let{trapFocus:e,autoFocusFirst:r,children:t}=this.props;return e?w.createElement(X,{autoFocusFirst:r,focusBackOnExit:!0},t):t}shortcutsScope=this.uid;shortcutsMap={esc:this._onEscPress};render(){let{className:e,style:r,hidden:t,attached:a,keepMounted:c,client:d,onMouseDown:g,onMouseUp:f,onMouseOver:h,onMouseOut:m,onContextMenu:T,"data-test":y}=this.props,_=this.state.display===1,P=(0,Or.default)(e,Z.popup,{[Z.attached]:a,[Z.hidden]:t,[Z.showing]:_}),L=(this.state.direction||"").toLowerCase().replace(/[_]/g,"-");return w.createElement(z.Consumer,null,I=>(this.ringPopupTarget=I,w.createElement("span",{onClick:lt,role:"presentation",ref:this.portalRef},this.shouldUseShortcuts()&&w.createElement($,{map:this.shortcutsMap,scope:this.shortcutsScope}),(d||this.state.client)&&(c||!t)&&ne(w.createElement(V,{id:this.uid,ref:this.containerRef,onMouseOver:h,onFocus:h,onMouseOut:m,onBlur:m,onContextMenu:T},w.createElement("div",{"data-test":Fe("ring-popup",y),"data-test-shown":!t&&!_,"data-test-direction":L,ref:this.popupRef,className:P,style:r,onMouseDown:g,onMouseUp:f,role:"presentation"},this.getInternalContent())),this.getContainer()||document.body))))}};fe.propTypes={anchorElement:v.default.instanceOf(Node),target:v.default.oneOfType([v.default.string,v.default.instanceOf(Element)]),className:v.default.string,style:v.default.object,hidden:v.default.bool.isRequired,onOutsideClick:v.default.func,onEscPress:v.default.func,onCloseAttempt:v.default.func,children:v.default.node.isRequired,dontCloseOnAnchorClick:v.default.bool,shortcuts:v.default.bool,keepMounted:v.default.bool,"data-test":v.default.string,client:v.default.bool,directions:v.default.arrayOf(v.default.string),autoPositioning:v.default.bool,autoCorrectTopOverflow:v.default.bool,left:v.default.number,top:v.default.number,maxHeight:v.default.oneOfType([v.default.string,v.default.number]),minWidth:v.default.number,sidePadding:v.default.number,attached:v.default.bool,onMouseDown:v.default.func,onMouseUp:v.default.func,onMouseOver:v.default.func,onMouseOut:v.default.func,onContextMenu:v.default.func,onDirectionChange:v.default.func,onShow:v.default.func,trapFocus:v.default.bool,autoFocusFirst:v.default.bool};var me={};var Sr=(t=>(t.AUTO="auto",t.LIGHT="light",t.DARK="dark",t))(Sr||{}),Be=window.matchMedia("(prefers-color-scheme: dark)");function Cr(){let[o,e]=$e(Be.matches);return ye(()=>{let r=t=>e(t.matches);return Be.addEventListener("change",r),()=>Be.removeEventListener("change",r)},[]),o?"dark":"light"}function dt(o){let e=Cr(),r=o==="auto"?e:o;return(0,De.default)({[me.dark]:r==="dark",[ee.light]:r==="light"})}function qe(o,e){o==="dark"?(e.classList.remove(ee.light),e.classList.add(me.dark),e.classList.add("ring-ui-theme-dark")):(e.classList.remove(me.dark),e.classList.remove("ring-ui-theme-dark"),e.classList.add(ee.light))}var Qc=re(function({theme:e="auto",className:r,passToPopups:t,children:a,target:c,...d},g){let f=Cr(),h=e==="auto"?f:e,m=Ye(()=>Y("popups-with-theme-"),[]);ye(()=>{c!=null&&qe(h,c)},[h,c]);let T=dt(e),y=Ve(z);return w.createElement("div",{ref:g,className:c!=null?void 0:(0,De.default)(r,T),...d},t?w.createElement(V,{id:m},_=>w.createElement(w.Fragment,null,a,ne(w.createElement("div",{className:T},_),y&&Ne(y)||document.body))):a)}),kr=Sr;n();i();s();n();i();s();n();i();s();n();i();s();var C=function(){return C=Object.assign||function(e){for(var r,t=1,a=arguments.length;t<a;t++){r=arguments[t];for(var c in r)Object.prototype.hasOwnProperty.call(r,c)&&(e[c]=r[c])}return e},C.apply(this,arguments)};n();i();s();n();i();s();n();i();s();function Pr(o){return o.toLowerCase()}var gt=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],ft=/[^A-Z0-9]+/gi;function j(o,e){e===void 0&&(e={});for(var r=e.splitRegexp,t=r===void 0?gt:r,a=e.stripRegexp,c=a===void 0?ft:a,d=e.transform,g=d===void 0?Pr:d,f=e.delimiter,h=f===void 0?" ":f,m=Mr(Mr(o,t,"$1\0$2"),c,"\0"),T=0,y=m.length;m.charAt(T)==="\0";)T++;for(;m.charAt(y-1)==="\0";)y--;return m.slice(T,y).split("\0").map(g).join(h)}function Mr(o,e,r){return e instanceof RegExp?o.replace(e,r):e.reduce(function(t,a){return t.replace(a,r)},o)}n();i();s();n();i();s();n();i();s();n();i();s();n();i();s();function he(o,e){return e===void 0&&(e={}),j(o,C({delimiter:"."},e))}n();i();s();n();i();s();function Rr(o,e){return e===void 0&&(e={}),he(o,C({delimiter:"-"},e))}n();i();s();n();i();s();n();i();s();n();i();s();var eu=__STORYBOOK_THEMING__,{CacheProvider:ou,ClassNames:ru,Global:tu,ThemeProvider:nu,background:iu,color:su,convert:au,create:Lr,createCache:cu,createGlobal:pu,createReset:lu,css:uu,darken:du,ensure:gu,ignoreSsrWarning:fu,isPropValid:mu,jsx:hu,keyframes:bu,lighten:vu,styled:yu,themes:xu,typography:Tu,useTheme:_u,withTheme:Eu}=__STORYBOOK_THEMING__;var We=window.matchMedia("(prefers-color-scheme: dark)"),R=window.Proxy?new Proxy({},{get:(o,e)=>getComputedStyle(document.documentElement).getPropertyValue(`--ring-${Rr(e)}`).trim()}):{},ht=R.textColor!=null,Ar=Lr({base:We.matches?"dark":"light",brandTitle:"JetBrains Ring UI",...ht?{colorSecondary:R.mainColor,appBorderColor:R.lineColor,appBorderRadius:parseInt(R.borderRadius,10),fontBase:R.fontFamily,fontCode:R.fontFamilyMonospace,barTextColor:R.secondaryColor,barSelectedColor:R.mainColor,inputBorder:R.bordersColor,inputTextColor:R.textColor}:{}});We.matches&&qe(kr.DARK,document.documentElement);Ke.setConfig({theme:Ar});})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }

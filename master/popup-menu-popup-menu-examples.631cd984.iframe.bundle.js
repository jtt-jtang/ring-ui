(self.webpackChunk_jetbrains_ring_ui=self.webpackChunk_jetbrains_ring_ui||[]).push([[6036],{"./.storybook/react-decorator.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom_client__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/client.js"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("@storybook/preview-api");const reactDecorator=(StoryFn,context)=>{const node=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>document.createElement("div")),[context.kind,context.name]),root=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>(0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(node)),[node]);return(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>()=>root.unmount()),[root]),root.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(StoryFn,null))),node};__webpack_exports__.Z=()=>reactDecorator},"./src/popup-menu/popup-menu.examples.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{basic:function(){return basic}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_decorator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.storybook/react-decorator.tsx"),_popup_menu__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/popup-menu/popup-menu.tsx");__webpack_exports__.default={title:"Components/PopupMenu",decorators:[(0,_storybook_react_decorator__WEBPACK_IMPORTED_MODULE_1__.Z)()],parameters:{storySource:{source:"import React from 'react';\n\nimport reactDecorator from '../../.storybook/react-decorator';\n\nimport PopupMenu, {ListProps} from './popup-menu';\n\nexport default {\n  title: 'Components/PopupMenu',\n  decorators: [reactDecorator()],\n\n  parameters: {\n    notes: 'Displays a popup menu.',\n    hermione: {captureSelector: '*[data-test~=ring-popup]'},\n    a11y: {element: '#storybook-root,*[data-test~=ring-popup]'}\n  }\n};\n\nexport const basic = () => {\n  const data = [\n    {label: 'Item'},\n    {label: 'Link to jetbrains.com', href: 'http://www.jetbrains.com'},\n    {rgItemType: ListProps.Type.SEPARATOR},\n    {rgItemType: ListProps.Type.LINK, label: 'Link Item'},\n    {\n      rgItemType: ListProps.Type.LINK,\n      label: 'Link Item With Additional Class',\n      className: 'test'\n    },\n    {rgItemType: ListProps.Type.SEPARATOR, description: 'Separator With Description'},\n    {rgItemType: ListProps.Type.TITLE, label: 'Title'},\n    {rgItemType: ListProps.Type.ITEM, label: '1 Element in group'},\n    {rgItemType: ListProps.Type.ITEM, label: '2 Element in group'}\n  ];\n\n  return <PopupMenu data={data}/>;\n};\n\nbasic.storyName = 'PopupMenu';\n",locationsMap:{basic:{startLoc:{col:21,line:18},endLoc:{col:1,line:36},startBody:{col:21,line:18},endBody:{col:1,line:36}}}},notes:"Displays a popup menu.",hermione:{captureSelector:"*[data-test~=ring-popup]"},a11y:{element:"#storybook-root,*[data-test~=ring-popup]"}}};const basic=()=>{const data=[{label:"Item"},{label:"Link to jetbrains.com",href:"http://www.jetbrains.com"},{rgItemType:_popup_menu__WEBPACK_IMPORTED_MODULE_2__.P.Type.SEPARATOR},{rgItemType:_popup_menu__WEBPACK_IMPORTED_MODULE_2__.P.Type.LINK,label:"Link Item"},{rgItemType:_popup_menu__WEBPACK_IMPORTED_MODULE_2__.P.Type.LINK,label:"Link Item With Additional Class",className:"test"},{rgItemType:_popup_menu__WEBPACK_IMPORTED_MODULE_2__.P.Type.SEPARATOR,description:"Separator With Description"},{rgItemType:_popup_menu__WEBPACK_IMPORTED_MODULE_2__.P.Type.TITLE,label:"Title"},{rgItemType:_popup_menu__WEBPACK_IMPORTED_MODULE_2__.P.Type.ITEM,label:"1 Element in group"},{rgItemType:_popup_menu__WEBPACK_IMPORTED_MODULE_2__.P.Type.ITEM,label:"2 Element in group"}];return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_popup_menu__WEBPACK_IMPORTED_MODULE_2__.default,{data:data})};basic.storyName="PopupMenu",basic.__docgenInfo={description:"",methods:[],displayName:"basic"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/popup-menu/popup-menu.examples.tsx"]={name:"basic",docgenInfo:basic.__docgenInfo,path:"src/popup-menu/popup-menu.examples.tsx"})},"./src/global/memoize.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function memoize(fn){const primitiveCache=new Map,objectCache=new WeakMap;return function memoized(arg){const key=null!=arg?arg:"__singleValue__",cache=key instanceof Object?objectCache:primitiveCache,cached=cache.get(key);if(null!=cached)return cached;const value=fn(arg);return cache.set(key,value),value}}__webpack_require__.d(__webpack_exports__,{Z:function(){return memoize}})},"./src/icon/icon.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{ZP:function(){return Icon}});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),browser=__webpack_require__("./node_modules/util-deprecate/browser.js"),browser_default=__webpack_require__.n(browser),icon_constants=__webpack_require__("./src/icon/icon__constants.ts"),icon=__webpack_require__("./src/icon/icon.css"),icon_default=__webpack_require__.n(icon);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function extractSVGProps(svgNode){const map=svgNode.attributes;return map.length>0?function serializeAttrs(map){const res={};for(let i=0;i<map.length;i++){const key=map[i].name;let prop=key;"class"===key?prop="className":key.startsWith("data-")||(prop=key.replace(/[-|:]([a-z])/g,(g=>g[1].toUpperCase()))),res[prop]=map[i].value}return res}(map):null}const getSVGFromSource=(0,__webpack_require__("./src/global/memoize.ts").Z)((src=>{const svgContainer=document.createElement("div");svgContainer.innerHTML=src;const svg=svgContainer.firstElementChild;return svg.remove?svg.remove():svgContainer.removeChild(svg),{props:extractSVGProps(svg),html:svg.innerHTML}}));function isCompatibilityMode(iconSrc){const hasWidth=/width="[\d\.]+"/gi.test(iconSrc),hasHeight=/height="[\d\.]+"/gi.test(iconSrc);return!hasWidth||!hasHeight}function IconSVG(_ref){let{src:src,className:className,...rest}=_ref;const glyphClasses=classnames_default()(icon_default().glyph,{[icon_default().compatibilityMode]:isCompatibilityMode(src)},className),{props:props,html:html}=getSVGFromSource(src);return react.createElement("svg",_extends({},props,rest,{className:glyphClasses,dangerouslySetInnerHTML:{__html:html}}))}IconSVG.propTypes={className:prop_types_default().string,src:prop_types_default().string.isRequired,style:prop_types_default().object},IconSVG.__docgenInfo={description:"",methods:[],displayName:"IconSVG",props:{className:{type:{name:"string"},required:!1,description:""},src:{type:{name:"string"},required:!0,description:"",tsType:{name:"string"}},style:{type:{name:"object"},required:!1,description:""}},composes:["SVGAttributes"]};var icon_svg=(0,react.memo)(IconSVG);function icon_extends(){return icon_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},icon_extends.apply(this,arguments)}"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icon/icon__svg.tsx"]={name:"IconSVG",docgenInfo:IconSVG.__docgenInfo,path:"src/icon/icon__svg.tsx"});const warnSize=browser_default()((()=>{}),"`size`, `width` and `height` props are not recommended to use in Ring UI `Icon` component. The intrinsic sizes of SVG icon (`width` and `height` SVG attributes) are used instead.\n\nWe strongly recommend to use icons handcrafted for particular sizes. If your icon doesn't exist in the desired size, please ask your designer to draw one. \"Responsive\" checkmark should be unchecked when exporting icon.'");class Icon extends react.PureComponent{static propTypes={className:prop_types_default().string,color:prop_types_default().string,glyph:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().elementType]).isRequired,height:prop_types_default().number,size:prop_types_default().number,width:prop_types_default().number,loading:prop_types_default().bool,suppressSizeWarning:prop_types_default().bool};static defaultProps={className:"",color:icon_constants.I.DEFAULT,glyph:""};static Color=icon_constants.I;static Size=icon_constants.$;warnSize(){this.props.suppressSizeWarning||warnSize()}getStyle(){const{size:size,width:width,height:height}=this.props;return width||height?(this.warnSize(),{width:width,height:height}):size?(this.warnSize(),{width:size,height:size}):void 0}render(){const{className:className,size:size,color:color,loading:loading,glyph:Glyph,width:width,height:height,suppressSizeWarning:suppressSizeWarning,...restProps}=this.props;if(!Glyph)return null;const classes=classnames_default()(icon_default().icon,{[icon_default()[color]]:!!color,[icon_default().loading]:loading},className);return react.createElement("span",icon_extends({},restProps,{className:classes}),"string"==typeof Glyph?react.createElement(icon_svg,{src:Glyph,style:this.getStyle()}):react.createElement(Glyph,{className:icon_default().glyph,style:this.getStyle()}))}}Icon.__docgenInfo={description:"",methods:[{name:"warnSize",docblock:null,modifiers:[],params:[],returns:null},{name:"getStyle",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Icon",props:{className:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},color:{defaultValue:{value:"Color.DEFAULT",computed:!0},type:{name:"string"},required:!1,description:"",tsType:{name:"Color"}},glyph:{defaultValue:{value:"''",computed:!1},type:{name:"union",value:[{name:"string"},{name:"elementType"}]},required:!1,description:"",tsType:{name:"union",raw:"string | IconType | null",elements:[{name:"string"},{name:"ComponentType",elements:[{name:"SVGAttributes",elements:[{name:"SVGSVGElement"}],raw:"SVGAttributes<SVGSVGElement>"}],raw:"ComponentType<SVGAttributes<SVGSVGElement>>"},{name:"null"}]}},height:{type:{name:"number"},required:!1,description:"",tsType:{name:"union",raw:"number | undefined",elements:[{name:"number"},{name:"undefined"}]}},size:{type:{name:"number"},required:!1,description:"",tsType:{name:"union",raw:"Size | number | null | undefined",elements:[{name:"Size"},{name:"number"},{name:"null"},{name:"undefined"}]}},width:{type:{name:"number"},required:!1,description:"",tsType:{name:"union",raw:"number | undefined",elements:[{name:"number"},{name:"undefined"}]}},loading:{type:{name:"bool"},required:!1,description:"",tsType:{name:"union",raw:"boolean | null | undefined",elements:[{name:"boolean"},{name:"null"},{name:"undefined"}]}},suppressSizeWarning:{type:{name:"bool"},required:!1,description:"",tsType:{name:"union",raw:"boolean | null | undefined",elements:[{name:"boolean"},{name:"null"},{name:"undefined"}]}}},composes:["HTMLAttributes"]},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icon/icon.tsx"]={name:"Icon",docgenInfo:Icon.__docgenInfo,path:"src/icon/icon.tsx"})},"./src/icon/icon__constants.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{$:function(){return Size},I:function(){return Color}});let Color=function(Color){return Color.BLUE="blue",Color.DEFAULT="",Color.GRAY="gray",Color.GREEN="green",Color.MAGENTA="magenta",Color.RED="red",Color.WHITE="white",Color}({}),Size=function(Size){return Size[Size.Size12=12]="Size12",Size[Size.Size14=14]="Size14",Size[Size.Size16=16]="Size16",Size[Size.Size18=18]="Size18",Size[Size.Size20=20]="Size20",Size[Size.Size24=24]="Size24",Size[Size.Size32=32]="Size32",Size[Size.Size40=40]="Size40",Size[Size.Size48=48]="Size48",Size[Size.Size64=64]="Size64",Size[Size.Size96=96]="Size96",Size[Size.Size128=128]="Size128",Size}({})},"./src/link/clickableLink.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return ClickableLink}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}class ClickableLink extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{static propTypes={onClick:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,onPlainLeftClick:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,onConditionalClick:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,activeClassName:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,href:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired,children:prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired};onClick=e=>{const{onClick:onClick,onConditionalClick:onConditionalClick,onPlainLeftClick:onPlainLeftClick}=this.props,isPlainLeft=(e=>!(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey))(e);onClick&&onClick(e),onConditionalClick&&onConditionalClick(isPlainLeft,e),onPlainLeftClick&&isPlainLeft&&(e.preventDefault(),onPlainLeftClick(e))};render(){const{onConditionalClick:onConditionalClick,onPlainLeftClick:onPlainLeftClick,activeClassName:activeClassName,href:href,children:children,...restProps}=this.props;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",_extends({href:href},restProps,{onClick:this.onClick}),children)}}ClickableLink.__docgenInfo={description:"",methods:[{name:"onClick",docblock:null,modifiers:[],params:[{name:"e",type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLAnchorElement>",elements:[{name:"HTMLAnchorElement"}]}}],returns:null}],displayName:"ClickableLink",props:{onClick:{type:{name:"func"},required:!1,description:""},onPlainLeftClick:{type:{name:"func"},required:!1,description:"",tsType:{name:"union",raw:"((e: React.MouseEvent<HTMLAnchorElement>) => void) | null | undefined",elements:[{name:"unknown"},{name:"null"},{name:"undefined"}]}},onConditionalClick:{type:{name:"func"},required:!1,description:"",tsType:{name:"union",raw:"| ((isPlainLeft: boolean, e: React.MouseEvent<HTMLAnchorElement>) => void)\n| null\n| undefined",elements:[{name:"unknown"},{name:"null"},{name:"undefined"}]}},activeClassName:{type:{name:"string"},required:!1,description:"",tsType:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]}},href:{type:{name:"string"},required:!0,description:""},children:{type:{name:"node"},required:!0,description:""},disabled:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""}},composes:["AnchorHTMLAttributes"]},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/link/clickableLink.tsx"]={name:"ClickableLink",docgenInfo:ClickableLink.__docgenInfo,path:"src/link/clickableLink.tsx"})},"./src/popup-menu/popup-menu.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{P:function(){return ListProps},default:function(){return PopupMenu}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),_popup_popup__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/popup/popup.tsx"),_list_list__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/list/list.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const{children:children,...popupPropTypes}=_popup_popup__WEBPACK_IMPORTED_MODULE_1__.default.propTypes||{};class PopupMenu extends _popup_popup__WEBPACK_IMPORTED_MODULE_1__.default{static isItemType=_list_list__WEBPACK_IMPORTED_MODULE_2__.default.isItemType;static ListProps=_list_list__WEBPACK_IMPORTED_MODULE_2__.default.ListProps;static defaultProps={..._list_list__WEBPACK_IMPORTED_MODULE_2__.default.defaultProps,..._popup_popup__WEBPACK_IMPORTED_MODULE_1__.default.defaultProps,renderOptimization:!1,closeOnSelect:!1};onSelect=(item,event)=>{this.props.closeOnSelect&&this._onCloseAttempt(event),this.props.onSelect(item,event)};list;listRef=el=>{this.list=el};getInternalContent(){const{className:className,...props}=this.props;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_list_list__WEBPACK_IMPORTED_MODULE_2__.default,_extends({ref:this.listRef},props,{maxHeight:this.popup&&parseFloat(this.popup.style.maxHeight),shortcuts:this.shouldUseShortcuts(),onSelect:this.onSelect})))}}PopupMenu.propTypes={...popupPropTypes,..._list_list__WEBPACK_IMPORTED_MODULE_2__.default.propTypes,closeOnSelect:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool};const{ListProps:ListProps}=_list_list__WEBPACK_IMPORTED_MODULE_2__.default},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/icon/icon.css":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/global/global.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__.default),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default,"",!0),___CSS_LOADER_EXPORT___.push([module.id,'.icon_d5a3 {\n  display: inline-block;\n\n  fill: currentColor;\n}\n\n.glyph_ffd8 {\n  display: inline-flex;\n\n  margin-right: -1px;\n  margin-left: -1px;\n\n  pointer-events: none;\n}\n\n.glyph_ffd8[width="10"] {\n    vertical-align: -1px;\n  }\n\n.glyph_ffd8[width="14"] {\n    margin-right: -2px;\n    margin-left: 0;\n\n    vertical-align: -3px;\n  }\n\n.glyph_ffd8[width="16"] {\n    vertical-align: -3px;\n  }\n\n.glyph_ffd8[width="20"] {\n    vertical-align: -2px;\n  }\n\n.glyph_ffd8.compatibilityMode_a8ae {\n    width: 16px;\n    height: 16px;\n    margin-right: 0;\n    margin-left: 0;\n  }\n\n/* HACK: This media query hack makes styles applied for WebKit browsers only */\n/* stylelint-disable-next-line media-feature-name-no-vendor-prefix */\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  .glyph_ffd8 {\n    width: auto; /* Safari size bug workaround, see https://youtrack.jetbrains.com/issue/RG-1983 */\n  }\n}\n\n.gray_cf30 {\n  color: var(--ring-icon-secondary-color);\n}\n\n.hover_ab0b {\n  color: var(--ring-icon-hover-color);\n}\n\n.green_ea54 {\n  color: var(--ring-icon-success-color);\n}\n\n.magenta_bbdf {\n  color: var(--ring-link-hover-color);\n}\n\n.red_e064 {\n  color: var(--ring-icon-error-color);\n}\n\n.blue_d783 {\n  color: var(--ring-main-color);\n}\n\n.white_d5e6 {\n  color: var(--ring-white-text-color);\n}\n\n.loading_f519 {\n  animation-name: icon-loading_cf30;\n  animation-duration: 1200ms;\n  animation-iteration-count: infinite;\n}\n\n@keyframes icon-loading_cf30 {\n  0% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: scale(0.9);\n\n    opacity: 0.5;\n  }\n\n  100% {\n    transform: scale(1);\n  }\n}\n',"",{version:3,sources:["webpack://./src/icon/icon.css"],names:[],mappings:"AAIA;EACE,qBAAqB;;EAErB,kBAAkB;AACpB;;AAEA;EACE,oBAAoB;;EAEpB,kBAAkB;EAClB,iBAAiB;;EAEjB,oBAAoB;AA2BtB;;AAzBE;IACE,oBAAoB;EACtB;;AAEA;IACE,kBAAkB;IAClB,cAAc;;IAEd,oBAAoB;EACtB;;AAEA;IACE,oBAAoB;EACtB;;AAEA;IACE,oBAAoB;EACtB;;AAEA;IACE,WAAqB;IACrB,YAAsB;IACtB,eAAe;IACf,cAAc;EAChB;;AAGF,8EAA8E;AAC9E,oEAAoE;AACpE;EACE;IACE,WAAW,EAAE,iFAAiF;EAChG;AACF;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,iCAA4B;EAC5B,0BAA0B;EAC1B,mCAAmC;AACrC;;AAEA;EACE;IACE,mBAAmB;EACrB;;EAEA;IACE,qBAAqB;;IAErB,YAAY;EACd;;EAEA;IACE,mBAAmB;EACrB;AACF",sourcesContent:['@import "../global/variables.css";\n\n@value unit from "../global/global.css";\n\n.icon {\n  display: inline-block;\n\n  fill: currentColor;\n}\n\n.glyph {\n  display: inline-flex;\n\n  margin-right: -1px;\n  margin-left: -1px;\n\n  pointer-events: none;\n\n  &[width="10"] {\n    vertical-align: -1px;\n  }\n\n  &[width="14"] {\n    margin-right: -2px;\n    margin-left: 0;\n\n    vertical-align: -3px;\n  }\n\n  &[width="16"] {\n    vertical-align: -3px;\n  }\n\n  &[width="20"] {\n    vertical-align: -2px;\n  }\n\n  &.compatibilityMode {\n    width: calc(unit * 2);\n    height: calc(unit * 2);\n    margin-right: 0;\n    margin-left: 0;\n  }\n}\n\n/* HACK: This media query hack makes styles applied for WebKit browsers only */\n/* stylelint-disable-next-line media-feature-name-no-vendor-prefix */\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  .glyph {\n    width: auto; /* Safari size bug workaround, see https://youtrack.jetbrains.com/issue/RG-1983 */\n  }\n}\n\n.gray {\n  color: var(--ring-icon-secondary-color);\n}\n\n.hover {\n  color: var(--ring-icon-hover-color);\n}\n\n.green {\n  color: var(--ring-icon-success-color);\n}\n\n.magenta {\n  color: var(--ring-link-hover-color);\n}\n\n.red {\n  color: var(--ring-icon-error-color);\n}\n\n.blue {\n  color: var(--ring-main-color);\n}\n\n.white {\n  color: var(--ring-white-text-color);\n}\n\n.loading {\n  animation-name: icon-loading;\n  animation-duration: 1200ms;\n  animation-iteration-count: infinite;\n}\n\n@keyframes icon-loading {\n  0% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: scale(0.9);\n\n    opacity: 0.5;\n  }\n\n  100% {\n    transform: scale(1);\n  }\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={unit:""+_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.unit,icon:"icon_d5a3",glyph:"glyph_ffd8",compatibilityMode:"compatibilityMode_a8ae",gray:"gray_cf30",hover:"hover_ab0b",green:"green_ea54",magenta:"magenta_bbdf",red:"red_e064",blue:"blue_d783",white:"white_d5e6",loading:"loading_f519","icon-loading":"icon-loading_cf30"},__webpack_exports__.default=___CSS_LOADER_EXPORT___},"./src/icon/icon.css":function(module,__unused_webpack_exports,__webpack_require__){var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/icon/icon.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}},"./node_modules/util-deprecate/browser.js":function(module,__unused_webpack_exports,__webpack_require__){function config(name){try{if(!__webpack_require__.g.localStorage)return!1}catch(_){return!1}var val=__webpack_require__.g.localStorage[name];return null!=val&&"true"===String(val).toLowerCase()}module.exports=function deprecate(fn,msg){if(config("noDeprecation"))return fn;var warned=!1;return function deprecated(){if(!warned){if(config("throwDeprecation"))throw new Error(msg);config("traceDeprecation")?console.trace(msg):console.warn(msg),warned=!0}return fn.apply(this,arguments)}}}}]);
(self.webpackChunk_jetbrains_ring_ui=self.webpackChunk_jetbrains_ring_ui||[]).push([[5076],{"./node_modules/@jetbrains/icons/chevron-10px.js":function(module){module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"><g><polygon points="5 7.99 1.5 4.5 2.5 3.5 5 6.01 7.5 3.5 8.49 4.5 5 7.99"/></g></svg>'},"./node_modules/@jetbrains/icons/gift.js":function(module){module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g><path d="M3,15H7.3V9H3ZM9.79,5a2.5,2.5,0,0,0,0-5A2.48,2.48,0,0,0,8,.76,2.48,2.48,0,0,0,6.21,0a2.5,2.5,0,0,0,0,5H2V8H7.3V5H8.7V8H14V5ZM7.29,2.5V3.6H6.21A1.1,1.1,0,1,1,7.3,2.46S7.29,2.49,7.29,2.5Zm1.41,0A1.1,1.1,0,1,1,9.79,3.6H8.71V2.5S8.7,2.47,8.7,2.46ZM8.7,15H13V9H8.7Z"/></g></svg>'},"./node_modules/@jetbrains/icons/search.js":function(module){module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g><path d="M14.64,13.36,10.13,8.85A4.94,4.94,0,0,0,11,6a5,5,0,1,0-2.17,4.12l4.51,4.51ZM2.42,6A3.6,3.6,0,1,1,6,9.61,3.6,3.6,0,0,1,2.42,6Z"/></g></svg>'},"./.storybook/react-decorator.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom_client__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/client.js"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("@storybook/preview-api");const reactDecorator=(StoryFn,context)=>{const node=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>document.createElement("div")),[context.kind,context.name]),root=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>(0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(node)),[node]);return(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>()=>root.unmount()),[root]),root.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(StoryFn,null))),node};__webpack_exports__.Z=()=>reactDecorator},"./src/message/message.examples.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{basic:function(){return basic},default:function(){return message_examples},light:function(){return light},wishNarrowAnchor:function(){return wishNarrowAnchor},withOnDissmiss:function(){return withOnDissmiss}});var react=__webpack_require__("./node_modules/react/index.js"),search=__webpack_require__("./node_modules/@jetbrains/icons/search.js"),search_default=__webpack_require__.n(search),react_decorator=__webpack_require__("./.storybook/react-decorator.tsx"),popup=__webpack_require__("./src/popup/popup.tsx"),icon_icon=__webpack_require__("./src/icon/icon.tsx"),global_theme=__webpack_require__("./src/global/theme.tsx"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),gift=__webpack_require__("./node_modules/@jetbrains/icons/gift.js"),gift_default=__webpack_require__.n(gift),popup_consts=__webpack_require__("./src/popup/popup.consts.ts"),button_button=__webpack_require__("./src/button/button.tsx"),variables_dark=__webpack_require__("./src/global/variables_dark.css"),variables_dark_default=__webpack_require__.n(variables_dark),message=__webpack_require__("./src/message/message.css"),message_default=__webpack_require__.n(message);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}class Message extends react.Component{static defaultProps={icon:gift_default(),directions:[popup_consts.Directions.TOP_RIGHT,popup_consts.Directions.TOP_LEFT,popup_consts.Directions.TOP_CENTER,popup_consts.Directions.BOTTOM_RIGHT,popup_consts.Directions.BOTTOM_LEFT,popup_consts.Directions.BOTTOM_CENTER,popup_consts.Directions.RIGHT_TOP,popup_consts.Directions.RIGHT_BOTTOM,popup_consts.Directions.RIGHT_CENTER,popup_consts.Directions.LEFT_TOP,popup_consts.Directions.LEFT_BOTTOM,popup_consts.Directions.LEFT_CENTER],translations:{gotIt:"Got it",dismiss:"Dismiss"},theme:global_theme.ZP.DARK};state={};static Directions=popup_consts.Directions;static PopupProps=popup.default.PopupProps;_onDirectionChange=direction=>this.setState({direction:direction});popup;node;popupRef=el=>{this.popup=el,this.node=this.popup?.node};getTailOffset(){const{popupProps:popupProps}=this.props;if(null!=this.props.tailOffset)return this.props.tailOffset;const anchor=popupProps?.anchorElement||this.popup?.parent;if(!anchor)return 32;const offset=Math.floor(anchor.offsetWidth/2),isOpenedToRight=null!=this.state.direction&&[popup_consts.Directions.TOP_RIGHT,popup_consts.Directions.BOTTOM_RIGHT].includes(this.state.direction);return popupProps?.left&&isOpenedToRight?offset-popupProps?.left:offset}render(){const{children:children,className:className,tailClassName:tailClassName,title:title,icon:icon,popupProps:popupProps,buttonProps:buttonProps,onClose:onClose,onDismiss:onDismiss,translations:translations,theme:theme}=this.props,classes=classnames_default()(message_default().message,className,{[variables_dark_default().dark]:theme===global_theme.ZP.DARK}),tailClasses=classnames_default()(message_default().tail,tailClassName),popupDirections=this.props.direction?[this.props.direction]:this.props.directions,{direction:direction}=this.state;return react.createElement(global_theme.bG,{theme:theme},(themeClasses=>{return react.createElement(popup.default,_extends({ref:this.popupRef,hidden:!1,directions:popupDirections,className:classnames_default()(classes,themeClasses),offset:16,onDirectionChange:this._onDirectionChange},popupProps),react.createElement(global_theme.f6,{theme:theme,passToPopups:!0},direction&&react.createElement("div",{className:tailClasses,style:(offset=this.getTailOffset(),{[popup_consts.Directions.BOTTOM_RIGHT]:{top:0,left:offset+8,transform:"rotate(135deg)"},[popup_consts.Directions.BOTTOM_LEFT]:{top:0,right:offset-8-11,transform:"rotate(135deg)"},[popup_consts.Directions.BOTTOM_CENTER]:{top:0,left:offset+8,transform:"rotate(135deg)"},[popup_consts.Directions.TOP_RIGHT]:{bottom:-11,left:offset-8,transform:"rotate(-45deg)"},[popup_consts.Directions.TOP_LEFT]:{bottom:-11,right:offset+8-11,transform:"rotate(-45deg)"},[popup_consts.Directions.TOP_CENTER]:{bottom:-11,left:offset-8,transform:"rotate(-45deg)"},[popup_consts.Directions.RIGHT_TOP]:{bottom:offset+8-11,left:0,transform:"rotate(45deg)"},[popup_consts.Directions.RIGHT_BOTTOM]:{top:offset-8,left:0,transform:"rotate(45deg)"},[popup_consts.Directions.RIGHT_CENTER]:{top:offset-8,left:0,transform:"rotate(45deg)"},[popup_consts.Directions.LEFT_TOP]:{bottom:offset-8-11,right:-11,transform:"rotate(-135deg)"},[popup_consts.Directions.LEFT_BOTTOM]:{top:offset+8,right:-11,transform:"rotate(-135deg)"},[popup_consts.Directions.LEFT_CENTER]:{top:offset+8,right:-11,transform:"rotate(-135deg)"}})[direction]}),icon&&react.createElement(icon_icon.ZP,{className:message_default().icon,glyph:icon}),title&&react.createElement("h1",{"data-test":"rgMessageTitle",className:message_default().title},title),children&&react.createElement("div",{className:message_default().description},children),(onClose||buttonProps)&&react.createElement(button_button.ZP,_extends({className:message_default().button,onClick:onClose,primary:!0},buttonProps),translations.gotIt),onDismiss&&react.createElement(button_button.ZP,{onClick:onDismiss,text:!0},translations.dismiss)));var offset}))}}Message.propTypes={children:prop_types_default().node,className:prop_types_default().string,tailClassName:prop_types_default().string,title:prop_types_default().string,icon:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().elementType]),directions:prop_types_default().arrayOf(prop_types_default().string),direction:prop_types_default().string,popupProps:prop_types_default().object,buttonProps:prop_types_default().object,tailOffset:prop_types_default().number,onClose:prop_types_default().func,onDismiss:prop_types_default().func,translations:prop_types_default().object},Message.__docgenInfo={description:"Displays a popup containing a message.",methods:[{name:"popupRef",docblock:null,modifiers:[],params:[{name:"el",type:{name:"union",raw:"Popup | null",elements:[{name:"Popup"},{name:"null"}]}}],returns:null},{name:"getTailOffset",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Message",props:{icon:{defaultValue:{value:"gift",computed:!0},required:!1,tsType:{name:"union",raw:"string | IconType | null",elements:[{name:"string"},{name:"IconType"},{name:"null"}]},description:""},directions:{defaultValue:{value:"[\n  Directions.TOP_RIGHT, Directions.TOP_LEFT, Directions.TOP_CENTER,\n  Directions.BOTTOM_RIGHT, Directions.BOTTOM_LEFT, Directions.BOTTOM_CENTER,\n  Directions.RIGHT_TOP, Directions.RIGHT_BOTTOM, Directions.RIGHT_CENTER,\n  Directions.LEFT_TOP, Directions.LEFT_BOTTOM, Directions.LEFT_CENTER\n]",computed:!1},required:!1,tsType:{name:"unknown"},description:""},translations:{defaultValue:{value:"{\n  gotIt: 'Got it',\n  dismiss: 'Dismiss'\n}",computed:!1},required:!1,tsType:{name:"MessageTranslations"},description:""},theme:{defaultValue:{value:"Theme.DARK",computed:!0},required:!1,tsType:{name:"Theme"},description:""},title:{required:!1,tsType:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]},description:""},tailClassName:{required:!1,tsType:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]},description:""},direction:{required:!1,tsType:{name:"union",raw:"Directions | null | undefined",elements:[{name:"Directions"},{name:"null"},{name:"undefined"}]},description:""},popupProps:{required:!1,tsType:{name:"union",raw:"Partial<PopupAttrs> | null | undefined",elements:[{name:"Partial",elements:[{name:"PopupAttrs"}],raw:"Partial<PopupAttrs>"},{name:"null"},{name:"undefined"}]},description:""},buttonProps:{required:!1,tsType:{name:"union",raw:"ButtonAttrs | null | undefined",elements:[{name:"ButtonAttrs"},{name:"null"},{name:"undefined"}]},description:""},tailOffset:{required:!1,tsType:{name:"union",raw:"number | null | undefined",elements:[{name:"number"},{name:"null"},{name:"undefined"}]},description:""},onClose:{required:!1,tsType:{name:"union",raw:"(() => void) | undefined",elements:[{name:"unknown"},{name:"undefined"}]},description:""},onDismiss:{required:!1,tsType:{name:"union",raw:"(() => void) | null | undefined",elements:[{name:"unknown"},{name:"null"},{name:"undefined"}]},description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/message/message.tsx"]={name:"Message",docgenInfo:Message.__docgenInfo,path:"src/message/message.tsx"});const{Directions:Directions}=popup.default.PopupProps;var message_examples={title:"Components/Message",decorators:[(0,react_decorator.Z)()],parameters:{storySource:{source:"import React from 'react';\nimport searchIcon from '@jetbrains/icons/search';\n\nimport {Story} from '@storybook/react';\n\nimport reactDecorator from '../../.storybook/react-decorator';\n\nimport Popup from '../popup/popup';\nimport Icon from '../icon/icon';\n\nimport Theme from '../global/theme';\n\nimport Message, {MessageAttrs} from './message';\n\nconst {Directions} = Popup.PopupProps;\n\nexport default {\n  title: 'Components/Message',\n  decorators: [reactDecorator()],\n\n  parameters: {\n    component: Message,\n    framework: 'react'\n  },\n  args: {\n    title: 'This is title',\n    direction: Directions.TOP_RIGHT,\n    children: 'This is long long long long long long long long long long long long long long long long long long description'\n  }\n};\n\nexport const basic: Story<MessageAttrs> = args => (\n  <div style={{padding: 200}} id=\"message-example\">\n    <span>\n      Anchor\n      <Message {...args}/>\n    </span>\n  </div>\n);\n\nbasic.storyName = 'basic';\nbasic.args = {\n  tailOffset: 32,\n  onClose: () => {}\n};\n\nexport const light: Story<MessageAttrs> = args => (\n  <div style={{padding: 200}} id=\"message-example\">\n    <span>\n      Anchor\n      <Message {...args}/>\n    </span>\n  </div>\n);\nlight.args = {\n  theme: Theme.LIGHT,\n  onClose: () => {},\n  onDismiss: () => {}\n};\n\nexport const withOnDissmiss: Story<MessageAttrs> = args => (\n  <div style={{padding: 200}} id=\"message-example\">\n    <span>\n      Anchor\n      <Message {...args}/>\n    </span>\n  </div>\n);\n\nwithOnDissmiss.storyName = 'with onDissmiss';\nwithOnDissmiss.args = {\n  tailOffset: 32,\n  onClose: () => {},\n  onDismiss: () => {}\n};\n\nexport const wishNarrowAnchor: Story<MessageAttrs> = args => (\n  <div style={{padding: 200}}>\n    <span>\n      <Icon glyph={searchIcon}/>\n      <Message {...args}/>\n    </span>\n  </div>\n);\n\nwishNarrowAnchor.storyName = 'with narrow anchor';\nwishNarrowAnchor.args = {\n  popupProps: {left: -8}\n};\n",locationsMap:{basic:{startLoc:{col:42,line:32},endLoc:{col:1,line:39},startBody:{col:42,line:32},endBody:{col:1,line:39}},light:{startLoc:{col:42,line:47},endLoc:{col:1,line:54},startBody:{col:42,line:47},endBody:{col:1,line:54}},"with-on-dissmiss":{startLoc:{col:51,line:61},endLoc:{col:1,line:68},startBody:{col:51,line:61},endBody:{col:1,line:68}},"wish-narrow-anchor":{startLoc:{col:53,line:77},endLoc:{col:1,line:84},startBody:{col:53,line:77},endBody:{col:1,line:84}}}},component:Message,framework:"react"},args:{title:"This is title",direction:Directions.TOP_RIGHT,children:"This is long long long long long long long long long long long long long long long long long long description"}};const basic=args=>react.createElement("div",{style:{padding:200},id:"message-example"},react.createElement("span",null,"Anchor",react.createElement(Message,args)));basic.storyName="basic",basic.args={tailOffset:32,onClose:()=>{}};const light=args=>react.createElement("div",{style:{padding:200},id:"message-example"},react.createElement("span",null,"Anchor",react.createElement(Message,args)));light.args={theme:global_theme.ZP.LIGHT,onClose:()=>{},onDismiss:()=>{}};const withOnDissmiss=args=>react.createElement("div",{style:{padding:200},id:"message-example"},react.createElement("span",null,"Anchor",react.createElement(Message,args)));withOnDissmiss.storyName="with onDissmiss",withOnDissmiss.args={tailOffset:32,onClose:()=>{},onDismiss:()=>{}};const wishNarrowAnchor=args=>react.createElement("div",{style:{padding:200}},react.createElement("span",null,react.createElement(icon_icon.ZP,{glyph:search_default()}),react.createElement(Message,args)));wishNarrowAnchor.storyName="with narrow anchor",wishNarrowAnchor.args={popupProps:{left:-8}},basic.__docgenInfo={description:"",methods:[],displayName:"basic"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/message/message.examples.tsx"]={name:"basic",docgenInfo:basic.__docgenInfo,path:"src/message/message.examples.tsx"}),light.__docgenInfo={description:"",methods:[],displayName:"light"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/message/message.examples.tsx"]={name:"light",docgenInfo:light.__docgenInfo,path:"src/message/message.examples.tsx"}),withOnDissmiss.__docgenInfo={description:"",methods:[],displayName:"withOnDissmiss"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/message/message.examples.tsx"]={name:"withOnDissmiss",docgenInfo:withOnDissmiss.__docgenInfo,path:"src/message/message.examples.tsx"}),wishNarrowAnchor.__docgenInfo={description:"",methods:[],displayName:"wishNarrowAnchor"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/message/message.examples.tsx"]={name:"wishNarrowAnchor",docgenInfo:wishNarrowAnchor.__docgenInfo,path:"src/message/message.examples.tsx"})},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/message/message.css":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/global/global.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__.default),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default,"",!0),___CSS_LOADER_EXPORT___.push([module.id,".container_ccd4 {\n  display: inline;\n}\n\n.message_d038 {\n  overflow: visible;\n\n  max-width: 320px;\n\n  padding: 12px 12px 16px 40px;\n\n  text-align: left;\n\n  color: var(--ring-active-text-color);\n\n  background-color: var(--ring-popup-background-color);\n}\n\n.icon_b1bb {\n  position: absolute;\n  top: 10px;\n  left: 12px;\n}\n\n.title_dfb2 {\n\n  margin: 0;\n\n  font-weight: normal;\n}\n\n.description_d2ac {\n  margin: 4px 0 0;\n\n  color: var(--ring-text-color);\n\n  font-size: var(--ring-font-size-smaller);\n  line-height: var(--ring-line-height-lowest);\n}\n\n.button_df64 {\n  margin-top: 12px;\n}\n\n.tail_df54 {\n  position: absolute;\n\n  box-sizing: border-box;\n  width: 11px;\n  height: 11px;\n\n  transform-origin: 0 0;\n\n  border: 1px solid;\n  border-color: transparent transparent var(--ring-popup-border-color) var(--ring-popup-border-color);\n\n  background-color: var(--ring-popup-background-color);\n}\n","",{version:3,sources:["webpack://./src/message/message.css"],names:[],mappings:"AAKA;EACE,eAAe;AACjB;;AAEA;EACE,iBAAiB;;EAEjB,gBAA0B;;EAE1B,4BAAsD;;EAEtD,gBAAgB;;EAEhB,oCAAoC;;EAEpC,oDAAoD;AACtD;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,UAAa;AACf;;AAEA;;EAGE,SAAS;;EAET,mBAAmB;AACrB;;AAEA;EACE,eAA0B;;EAE1B,6BAA6B;;EAE7B,wCAAwC;EACxC,2CAA2C;AAC7C;;AAEA;EACE,gBAAmB;AACrB;;AAEA;EACE,kBAAkB;;EAElB,sBAAsB;EACtB,WAAW;EACX,YAAY;;EAEZ,qBAAqB;;EAErB,iBAAiB;EACjB,mGAAmG;;EAEnG,oDAAoD;AACtD",sourcesContent:['@import "../global/variables.css";\n\n@value unit from "../global/global.css";\n@value padding: calc(unit * 1.5);\n\n.container {\n  display: inline;\n}\n\n.message {\n  overflow: visible;\n\n  max-width: calc(unit * 40);\n\n  padding: padding padding calc(unit * 2) calc(unit * 5);\n\n  text-align: left;\n\n  color: var(--ring-active-text-color);\n\n  background-color: var(--ring-popup-background-color);\n}\n\n.icon {\n  position: absolute;\n  top: 10px;\n  left: padding;\n}\n\n.title {\n  composes: font-lower from "../global/global.css";\n\n  margin: 0;\n\n  font-weight: normal;\n}\n\n.description {\n  margin: calc(unit / 2) 0 0;\n\n  color: var(--ring-text-color);\n\n  font-size: var(--ring-font-size-smaller);\n  line-height: var(--ring-line-height-lowest);\n}\n\n.button {\n  margin-top: padding;\n}\n\n.tail {\n  position: absolute;\n\n  box-sizing: border-box;\n  width: 11px;\n  height: 11px;\n\n  transform-origin: 0 0;\n\n  border: 1px solid;\n  border-color: transparent transparent var(--ring-popup-border-color) var(--ring-popup-border-color);\n\n  background-color: var(--ring-popup-background-color);\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={unit:""+_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.unit,padding:"12px",container:"container_ccd4",message:"message_d038",icon:"icon_b1bb",title:"title_dfb2 "+_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default.locals["font-lower"],description:"description_d2ac",button:"button_df64",tail:"tail_df54"},__webpack_exports__.default=___CSS_LOADER_EXPORT___},"./node_modules/focus-visible/dist/focus-visible.js":function(){!function(){"use strict";function applyFocusVisiblePolyfill(scope){var hadKeyboardEvent=!0,hadFocusVisibleRecently=!1,hadFocusVisibleRecentlyTimeout=null,inputTypesAllowlist={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function isValidFocusTarget(el){return!!(el&&el!==document&&"HTML"!==el.nodeName&&"BODY"!==el.nodeName&&"classList"in el&&"contains"in el.classList)}function focusTriggersKeyboardModality(el){var type=el.type,tagName=el.tagName;return!("INPUT"!==tagName||!inputTypesAllowlist[type]||el.readOnly)||"TEXTAREA"===tagName&&!el.readOnly||!!el.isContentEditable}function addFocusVisibleClass(el){el.classList.contains("focus-visible")||(el.classList.add("focus-visible"),el.setAttribute("data-focus-visible-added",""))}function removeFocusVisibleClass(el){el.hasAttribute("data-focus-visible-added")&&(el.classList.remove("focus-visible"),el.removeAttribute("data-focus-visible-added"))}function onKeyDown(e){e.metaKey||e.altKey||e.ctrlKey||(isValidFocusTarget(scope.activeElement)&&addFocusVisibleClass(scope.activeElement),hadKeyboardEvent=!0)}function onPointerDown(e){hadKeyboardEvent=!1}function onFocus(e){isValidFocusTarget(e.target)&&(hadKeyboardEvent||focusTriggersKeyboardModality(e.target))&&addFocusVisibleClass(e.target)}function onBlur(e){isValidFocusTarget(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(hadFocusVisibleRecently=!0,window.clearTimeout(hadFocusVisibleRecentlyTimeout),hadFocusVisibleRecentlyTimeout=window.setTimeout((function(){hadFocusVisibleRecently=!1}),100),removeFocusVisibleClass(e.target))}function onVisibilityChange(e){"hidden"===document.visibilityState&&(hadFocusVisibleRecently&&(hadKeyboardEvent=!0),addInitialPointerMoveListeners())}function addInitialPointerMoveListeners(){document.addEventListener("mousemove",onInitialPointerMove),document.addEventListener("mousedown",onInitialPointerMove),document.addEventListener("mouseup",onInitialPointerMove),document.addEventListener("pointermove",onInitialPointerMove),document.addEventListener("pointerdown",onInitialPointerMove),document.addEventListener("pointerup",onInitialPointerMove),document.addEventListener("touchmove",onInitialPointerMove),document.addEventListener("touchstart",onInitialPointerMove),document.addEventListener("touchend",onInitialPointerMove)}function removeInitialPointerMoveListeners(){document.removeEventListener("mousemove",onInitialPointerMove),document.removeEventListener("mousedown",onInitialPointerMove),document.removeEventListener("mouseup",onInitialPointerMove),document.removeEventListener("pointermove",onInitialPointerMove),document.removeEventListener("pointerdown",onInitialPointerMove),document.removeEventListener("pointerup",onInitialPointerMove),document.removeEventListener("touchmove",onInitialPointerMove),document.removeEventListener("touchstart",onInitialPointerMove),document.removeEventListener("touchend",onInitialPointerMove)}function onInitialPointerMove(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(hadKeyboardEvent=!1,removeInitialPointerMoveListeners())}document.addEventListener("keydown",onKeyDown,!0),document.addEventListener("mousedown",onPointerDown,!0),document.addEventListener("pointerdown",onPointerDown,!0),document.addEventListener("touchstart",onPointerDown,!0),document.addEventListener("visibilitychange",onVisibilityChange,!0),addInitialPointerMoveListeners(),scope.addEventListener("focus",onFocus,!0),scope.addEventListener("blur",onBlur,!0),scope.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&scope.host?scope.host.setAttribute("data-js-focus-visible",""):scope.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var event;window.applyFocusVisiblePolyfill=applyFocusVisiblePolyfill;try{event=new CustomEvent("focus-visible-polyfill-ready")}catch(error){(event=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(event)}"undefined"!=typeof document&&applyFocusVisiblePolyfill(document)}()},"./src/message/message.css":function(module,__unused_webpack_exports,__webpack_require__){var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/message/message.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}},"./node_modules/util-deprecate/browser.js":function(module,__unused_webpack_exports,__webpack_require__){function config(name){try{if(!__webpack_require__.g.localStorage)return!1}catch(_){return!1}var val=__webpack_require__.g.localStorage[name];return null!=val&&"true"===String(val).toLowerCase()}module.exports=function deprecate(fn,msg){if(config("noDeprecation"))return fn;var warned=!1;return function deprecated(){if(!warned){if(config("throwDeprecation"))throw new Error(msg);config("traceDeprecation")?console.trace(msg):console.warn(msg),warned=!0}return fn.apply(this,arguments)}}}}]);
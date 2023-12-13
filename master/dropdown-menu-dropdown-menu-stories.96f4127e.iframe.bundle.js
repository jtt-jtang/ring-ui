(globalThis.webpackChunk_jetbrains_ring_ui=globalThis.webpackChunk_jetbrains_ring_ui||[]).push([[7917],{"./node_modules/@jetbrains/icons/chevron-10px.js":module=>{module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"><g><polygon points="5 7.99 1.5 4.5 2.5 3.5 5 6.01 7.5 3.5 8.49 4.5 5 7.99"/></g></svg>'},"./src/dropdown-menu/dropdown-menu.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{basic:()=>basic,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/dropdown-menu/dropdown-menu.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/DropdownMenu",parameters:{storySource:{source:"import React from 'react';\n\n\nimport DropdownMenu from './dropdown-menu';\n\nexport default {\n  title: 'Components/DropdownMenu',\n\n  parameters: {\n    notes: 'Displays a menu in a dropdown.',\n    hermione: {\n      actions: [\n        {type: 'click', selector: '[data-test~=ring-dropdown]'},\n        {\n          type: 'capture',\n          name: 'dropdown',\n          selector: ['[data-test~=ring-dropdown]', '[data-test~=ring-popup]']\n        }\n      ]\n    },\n    a11y: {element: '#storybook-root,*[data-test~=ring-dropdown]'}\n  }\n};\n\nexport const basic = () => {\n  const data = [\n    {label: 'Item'},\n    {label: 'Link to jetbrains.com', href: 'http://www.jetbrains.com'},\n    {rgItemType: DropdownMenu.ListProps.Type.SEPARATOR},\n    {rgItemType: DropdownMenu.ListProps.Type.LINK, label: 'Link Item'},\n    {\n      rgItemType: DropdownMenu.ListProps.Type.LINK,\n      label: 'Link Item With Additional Class',\n      className: 'test'\n    },\n    {rgItemType: DropdownMenu.ListProps.Type.SEPARATOR, description: 'Separator With Description'},\n    {rgItemType: DropdownMenu.ListProps.Type.TITLE, label: 'Title'},\n    {rgItemType: DropdownMenu.ListProps.Type.ITEM, label: '1 Element in group'},\n    {rgItemType: DropdownMenu.ListProps.Type.ITEM, label: '2 Element in group'}\n  ];\n\n  return <DropdownMenu data={data} anchor={'Click me!'}/>;\n};\n\nbasic.storyName = 'DropdownMenu';\n",locationsMap:{basic:{startLoc:{col:21,line:25},endLoc:{col:1,line:43},startBody:{col:21,line:25},endBody:{col:1,line:43}}}},notes:"Displays a menu in a dropdown.",hermione:{actions:[{type:"click",selector:"[data-test~=ring-dropdown]"},{type:"capture",name:"dropdown",selector:["[data-test~=ring-dropdown]","[data-test~=ring-popup]"]}]},a11y:{element:"#storybook-root,*[data-test~=ring-dropdown]"}}},basic=()=>{const data=[{label:"Item"},{label:"Link to jetbrains.com",href:"http://www.jetbrains.com"},{rgItemType:_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.Z.ListProps.Type.SEPARATOR},{rgItemType:_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.Z.ListProps.Type.LINK,label:"Link Item"},{rgItemType:_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.Z.ListProps.Type.LINK,label:"Link Item With Additional Class",className:"test"},{rgItemType:_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.Z.ListProps.Type.SEPARATOR,description:"Separator With Description"},{rgItemType:_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.Z.ListProps.Type.TITLE,label:"Title"},{rgItemType:_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.Z.ListProps.Type.ITEM,label:"1 Element in group"},{rgItemType:_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.Z.ListProps.Type.ITEM,label:"2 Element in group"}];return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.Z,{data,anchor:"Click me!"})};basic.storyName="DropdownMenu"},"./src/dropdown-menu/dropdown-menu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),_list_list__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/list/list.tsx"),_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/dropdown/dropdown.tsx"),_popup_menu_popup_menu__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/popup-menu/popup-menu.tsx"),_global_get_uid__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/global/get-uid.ts"),_dropdown_anchor__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/dropdown/anchor.tsx"),_global_typescript_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/global/typescript-utils.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const{children,...dropdownPropTypes}=_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_1__.Z.propTypes||{},{id:idPropType,data:dataPropType,ariaLabel:ariaLabelPropType,onSelect:onSelectPropType}=_popup_menu_popup_menu__WEBPACK_IMPORTED_MODULE_2__.default.propTypes||{};function DropdownAnchorWrapper({anchor,pinned,active,activeListItemId,listId,...restProps}){const anchorAriaProps=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({...listId?{"aria-haspopup":!0}:{},...activeListItemId?{"aria-activedescendant":activeListItemId,"aria-owns":listId}:{},...active?{"aria-expanded":!0}:{}})),[active,activeListItemId,listId]),anchorProps=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({active,pinned,...restProps,...anchorAriaProps})),[pinned,active,restProps,anchorAriaProps]),anchorComponentProps=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({...anchorProps,pinned:`${anchorProps.pinned}`})),[anchorProps]);return"string"==typeof anchor?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_dropdown_anchor__WEBPACK_IMPORTED_MODULE_3__.Z,anchorComponentProps,anchor):"function"==typeof anchor?anchor({active,pinned,...restProps},anchorAriaProps):(0,_global_typescript_utils__WEBPACK_IMPORTED_MODULE_4__.k)(anchor)?react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",anchorAriaProps,anchor):(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(anchor,"string"==typeof anchor.type?anchorAriaProps:anchorComponentProps)}DropdownAnchorWrapper.propTypes={anchor:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default().node,prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,prop_types__WEBPACK_IMPORTED_MODULE_5___default().func]).isRequired,pinned:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,active:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,activeListItemId:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,listId:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string};const DropdownMenu=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function DropdownMenu({id,anchor,ariaLabel,data,onSelect,menuProps,...restDropdownProps},forwardedRef){const listId=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>id||(0,_global_get_uid__WEBPACK_IMPORTED_MODULE_6__.Z)("dropdown-menu-list")),[id]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_list_list__WEBPACK_IMPORTED_MODULE_7__.t.Provider,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_1__.Z,_extends({anchor:({pinned,active,...restAnchorProps})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_list_list__WEBPACK_IMPORTED_MODULE_7__.t.ValueContext.Consumer,null,(activeItemId=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(DropdownAnchorWrapper,_extends({anchor,pinned,active,activeListItemId:activeItemId,listId},restAnchorProps))))},restDropdownProps),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_popup_menu_popup_menu__WEBPACK_IMPORTED_MODULE_2__.default,_extends({ref:forwardedRef,id:listId,ariaLabel:ariaLabel||"Dropdown menu",closeOnSelect:!0,activateFirstItem:!0,data,onSelect},menuProps))))}));DropdownMenu.propTypes={id:idPropType,data:dataPropType,ariaLabel:ariaLabelPropType,onSelect:onSelectPropType,menuProps:prop_types__WEBPACK_IMPORTED_MODULE_5___default().object,...dropdownPropTypes};const __WEBPACK_DEFAULT_EXPORT__=Object.assign(DropdownMenu,{ListProps:_list_list__WEBPACK_IMPORTED_MODULE_7__.default.ListProps})},"./src/dropdown/anchor.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__),_jetbrains_icons_chevron_10px__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@jetbrains/icons/chevron-10px.js"),_jetbrains_icons_chevron_10px__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_jetbrains_icons_chevron_10px__WEBPACK_IMPORTED_MODULE_1__),classnames__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),_icon_icon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/icon/icon.tsx"),_button_button__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/button/button.tsx"),_dropdown_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/dropdown/dropdown.css"),_dropdown_css__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_dropdown_css__WEBPACK_IMPORTED_MODULE_3__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Anchor=({children,className,...restProps})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_button_button__WEBPACK_IMPORTED_MODULE_4__.ZP,_extends({"data-test-ring-dropdown-anchor":!0,text:!0,className:classnames__WEBPACK_IMPORTED_MODULE_2___default()(_dropdown_css__WEBPACK_IMPORTED_MODULE_3___default().anchor,className)},restProps),children,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_5__.ZP,{glyph:_jetbrains_icons_chevron_10px__WEBPACK_IMPORTED_MODULE_1___default(),className:_dropdown_css__WEBPACK_IMPORTED_MODULE_3___default().chevron}));Anchor.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_6___default().node,className:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string};const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(Anchor)},"./src/dropdown/dropdown.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Dropdown});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_global_data_tests__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/global/data-tests.ts"),_global_typescript_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/global/typescript-utils.ts"),_anchor__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/dropdown/anchor.tsx"),_dropdown_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/dropdown/dropdown.css"),_dropdown_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_dropdown_css__WEBPACK_IMPORTED_MODULE_2__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}class Dropdown extends react__WEBPACK_IMPORTED_MODULE_0__.Component{static propTypes={anchor:prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().node,prop_types__WEBPACK_IMPORTED_MODULE_3___default().func]).isRequired,children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().element,prop_types__WEBPACK_IMPORTED_MODULE_3___default().func]).isRequired,initShown:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,className:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,activeClassName:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,clickMode:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,hoverMode:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,hoverShowTimeOut:prop_types__WEBPACK_IMPORTED_MODULE_3___default().number,hoverHideTimeOut:prop_types__WEBPACK_IMPORTED_MODULE_3___default().number,disabled:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,onShow:prop_types__WEBPACK_IMPORTED_MODULE_3___default().func,onHide:prop_types__WEBPACK_IMPORTED_MODULE_3___default().func,onMouseEnter:prop_types__WEBPACK_IMPORTED_MODULE_3___default().func,onMouseLeave:prop_types__WEBPACK_IMPORTED_MODULE_3___default().func,"data-test":prop_types__WEBPACK_IMPORTED_MODULE_3___default().string};static defaultProps={initShown:!1,clickMode:!0,hoverMode:!1,hoverShowTimeOut:300,hoverHideTimeOut:600,disabled:!1,onShow:()=>{},onHide:()=>{},onMouseEnter:()=>{},onMouseLeave:()=>{}};state={show:this.props.initShown,pinned:!1};onClick=()=>{if(this.props.disabled)return;const{show,pinned}=this.state;let nextPinned=pinned;if(this.props.hoverMode)if(pinned)nextPinned=!1;else if(nextPinned=!0,show)return void this.setState({pinned:!0});this._toggle(!show,nextPinned)};onChildCloseAttempt=()=>{let nextPinned=this.state.pinned;this.props.hoverMode&&(nextPinned=!1),this._toggle(!1,nextPinned)};hoverTimer;onMouseEnter=event=>{this.props.disabled||(this._clearTimer(),this.props.onMouseEnter?.(event),this.hoverTimer=window.setTimeout((()=>{this.state.show||this._toggle(!0)}),this.props.hoverShowTimeOut))};onMouseLeave=event=>{this.props.disabled||(this.props.onMouseLeave?.(event),this.state.pinned||(this._clearTimer(),this.hoverTimer=window.setTimeout((()=>{this.state.show&&this._toggle(!1)}),this.props.hoverHideTimeOut)))};handlePopupInteraction=()=>{this.setState((({pinned})=>pinned?null:{pinned:!0}))};toggle(show=!this.state.show){this._toggle(show)}_toggle(show,pinned=this.state.pinned){this.setState({show,pinned},(()=>show?this.props.onShow():this.props.onHide()))}_clearTimer(){this.hoverTimer&&(clearTimeout(this.hoverTimer),this.hoverTimer=null)}render(){const{show,pinned}=this.state,{initShown,onShow,onHide,hoverShowTimeOut,hoverHideTimeOut,children,anchor,className,activeClassName,hoverMode,clickMode,"data-test":dataTest,disabled,...restProps}=this.props,classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()(_dropdown_css__WEBPACK_IMPORTED_MODULE_2___default().dropdown,className,{[null!=activeClassName?activeClassName:""]:null!=activeClassName&&show});let anchorElement;const active=hoverMode?pinned:show;switch(typeof anchor){case"string":anchorElement=react__WEBPACK_IMPORTED_MODULE_0__.createElement(_anchor__WEBPACK_IMPORTED_MODULE_4__.Z,{active},anchor);break;case"function":anchorElement=anchor({active:show,pinned});break;default:anchorElement=(0,_global_typescript_utils__WEBPACK_IMPORTED_MODULE_5__.k)(anchor)||"string"==typeof anchor.type?anchor:(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(anchor,{active})}const childProps={hidden:!show,onCloseAttempt:this.onChildCloseAttempt,onMouseDown:hoverMode?this.handlePopupInteraction:void 0,onContextMenu:hoverMode?this.handlePopupInteraction:void 0,dontCloseOnAnchorClick:!0};return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_extends({"data-test":(0,_global_data_tests__WEBPACK_IMPORTED_MODULE_6__.Z)("ring-dropdown",dataTest)},restProps,{onClick:clickMode?this.onClick:void 0,role:"presentation",onMouseEnter:hoverMode?this.onMouseEnter:void 0,onMouseLeave:hoverMode?this.onMouseLeave:void 0,className:classes}),anchorElement,"function"==typeof children?children(childProps):(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(children,childProps))}}},"./src/global/composeRefs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=(...refs)=>value=>refs.forEach((ref=>{"function"==typeof ref?ref(value):null!=ref&&(ref.current=value)}))},"./src/global/prop-types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{J:()=>refObject});var prop_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);const refObject=value=>prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({current:value})},"./src/global/typescript-utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>isTruthy,k:()=>isArray});const isArray=arg=>Array.isArray(arg),isTruthy=arg=>Boolean(arg)},"./src/popup-menu/popup-menu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{P:()=>ListProps,default:()=>PopupMenu});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),_popup_popup__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/popup/popup.tsx"),_list_list__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/list/list.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const{children,...popupPropTypes}=_popup_popup__WEBPACK_IMPORTED_MODULE_1__.default.propTypes||{};class PopupMenu extends _popup_popup__WEBPACK_IMPORTED_MODULE_1__.default{static isItemType=_list_list__WEBPACK_IMPORTED_MODULE_2__.default.isItemType;static ListProps=_list_list__WEBPACK_IMPORTED_MODULE_2__.default.ListProps;static defaultProps={..._list_list__WEBPACK_IMPORTED_MODULE_2__.default.defaultProps,..._popup_popup__WEBPACK_IMPORTED_MODULE_1__.default.defaultProps,renderOptimization:!1,closeOnSelect:!1};onSelect=(item,event)=>{this.props.closeOnSelect&&this._onCloseAttempt(event),this.props.onSelect(item,event)};list;listRef=el=>{this.list=el};getInternalContent(){const{className,...props}=this.props;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_list_list__WEBPACK_IMPORTED_MODULE_2__.default,_extends({ref:this.listRef},props,{maxHeight:this.popup&&parseFloat(this.popup.style.maxHeight),shortcuts:this.shouldUseShortcuts(),onSelect:this.onSelect})))}}PopupMenu.propTypes={...popupPropTypes,..._list_list__WEBPACK_IMPORTED_MODULE_2__.default.propTypes,closeOnSelect:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool};const{ListProps}=_list_list__WEBPACK_IMPORTED_MODULE_2__.default},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/dropdown/dropdown.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__.default),___CSS_LOADER_EXPORT___.push([module.id,".dropdown_c237 {\n  display: inline-block;\n}\n\n.anchor_dff2.anchor_dff2 {\n  margin: 0 -3px;\n  padding: 0 3px;\n\n  font: inherit;\n}\n\n.chevron_a400 {\n  margin-left: 2px;\n\n  line-height: normal;\n}\n","",{version:3,sources:["webpack://./src/dropdown/dropdown.css"],names:[],mappings:"AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,cAAc;EACd,cAAc;;EAEd,aAAa;AACf;;AAEA;EACE,gBAAgB;;EAEhB,mBAAmB;AACrB",sourcesContent:['@import "../global/variables.css";\n\n.dropdown {\n  display: inline-block;\n}\n\n.anchor.anchor {\n  margin: 0 -3px;\n  padding: 0 3px;\n\n  font: inherit;\n}\n\n.chevron {\n  margin-left: 2px;\n\n  line-height: normal;\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={dropdown:"dropdown_c237",anchor:"anchor_dff2",chevron:"chevron_a400"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/dropdown/dropdown.css":(module,__unused_webpack_exports,__webpack_require__)=>{var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/dropdown/dropdown.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}},"./node_modules/util-deprecate/browser.js":(module,__unused_webpack_exports,__webpack_require__)=>{function config(name){try{if(!__webpack_require__.g.localStorage)return!1}catch(_){return!1}var val=__webpack_require__.g.localStorage[name];return null!=val&&"true"===String(val).toLowerCase()}module.exports=function deprecate(fn,msg){if(config("noDeprecation"))return fn;var warned=!1;return function deprecated(){if(!warned){if(config("throwDeprecation"))throw new Error(msg);config("traceDeprecation")?console.trace(msg):console.warn(msg),warned=!0}return fn.apply(this,arguments)}}}}]);
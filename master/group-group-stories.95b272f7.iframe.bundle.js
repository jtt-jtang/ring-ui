(globalThis.webpackChunk_jetbrains_ring_ui=globalThis.webpackChunk_jetbrains_ring_ui||[]).push([[4855],{"./src/group/group.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{basic:()=>basic,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_badge_badge__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/badge/badge.tsx"),_link_link__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/link/link.tsx"),_group__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/group/group.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Group",parameters:{storySource:{source:"import React from 'react';\n\n\nimport Badge from '../badge/badge';\nimport Link from '../link/link';\n\nimport Group from './group';\n\nexport default {\n  title: 'Components/Group',\n\n  parameters: {\n    notes: 'Places inner components with fixed spacing between them.'\n  }\n};\n\nexport const basic = () => (\n  <Group>\n    <Badge valid>Badge</Badge>\n    <span>Text</span>\n    <Link>Link</Link>\n  </Group>\n);\n\nbasic.storyName = 'Group';\n",locationsMap:{basic:{startLoc:{col:21,line:17},endLoc:{col:1,line:23},startBody:{col:21,line:17},endBody:{col:1,line:23}}}},notes:"Places inner components with fixed spacing between them."}},basic=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_group__WEBPACK_IMPORTED_MODULE_1__.Z,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_badge_badge__WEBPACK_IMPORTED_MODULE_2__.Z,{valid:!0},"Badge"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,"Text"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_link_link__WEBPACK_IMPORTED_MODULE_3__.Z,null,"Link"));basic.storyName="Group"},"./src/badge/badge.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Badge});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_global_data_tests__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/global/data-tests.ts"),_badge_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/badge/badge.css"),_badge_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_badge_css__WEBPACK_IMPORTED_MODULE_2__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}class Badge extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{static propTypes={gray:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,valid:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,invalid:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,disabled:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,className:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().node,"data-test":prop_types__WEBPACK_IMPORTED_MODULE_3___default().string};render(){const{gray,valid,invalid,disabled,className,children,"data-test":dataTest,...props}=this.props,classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()(_badge_css__WEBPACK_IMPORTED_MODULE_2___default().badge,className,{[_badge_css__WEBPACK_IMPORTED_MODULE_2___default().gray]:gray,[_badge_css__WEBPACK_IMPORTED_MODULE_2___default().valid]:valid,[_badge_css__WEBPACK_IMPORTED_MODULE_2___default().invalid]:invalid,[_badge_css__WEBPACK_IMPORTED_MODULE_2___default().disabled]:disabled});return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",_extends({},props,{"data-test":(0,_global_data_tests__WEBPACK_IMPORTED_MODULE_4__.Z)("ring-badge",dataTest),className:classes}),children)}}},"./src/group/group.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Group});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_group_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/group/group.css"),_group_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_group_css__WEBPACK_IMPORTED_MODULE_2__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}class Group extends react__WEBPACK_IMPORTED_MODULE_0__.Component{static propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().node,className:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string};render(){const{children,className,...restProps}=this.props,classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()(_group_css__WEBPACK_IMPORTED_MODULE_2___default().group,className);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",_extends({},restProps,{className:classes}),children)}}},"./src/link/clickableLink.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>ClickableLink});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}class ClickableLink extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{static propTypes={onClick:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,onPlainLeftClick:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,onConditionalClick:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,activeClassName:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,href:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired,children:prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired};onClick=e=>{const{onClick,onConditionalClick,onPlainLeftClick}=this.props,isPlainLeft=(e=>!(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey))(e);onClick&&onClick(e),onConditionalClick&&onConditionalClick(isPlainLeft,e),onPlainLeftClick&&isPlainLeft&&(e.preventDefault(),onPlainLeftClick(e))};render(){const{onConditionalClick,onPlainLeftClick,activeClassName,href,children,...restProps}=this.props;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",_extends({href},restProps,{onClick:this.onClick}),children)}}},"./src/link/link.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,g:()=>linkHOC});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_global_data_tests__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/global/data-tests.ts"),_clickableLink__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/link/clickableLink.tsx"),_link_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/link/link.css"),_link_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_link_css__WEBPACK_IMPORTED_MODULE_2__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function linkHOC(ComposedComponent){const isCustom="string"!=typeof ComposedComponent&&ComposedComponent!==_clickableLink__WEBPACK_IMPORTED_MODULE_3__.Z;return class Link extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{static propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,active:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,inherit:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,pseudo:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,hover:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().node,"data-test":prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,href:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,onPlainLeftClick:prop_types__WEBPACK_IMPORTED_MODULE_4___default().func,onClick:prop_types__WEBPACK_IMPORTED_MODULE_4___default().func};render(){const{active,inherit,pseudo,hover,className,"data-test":dataTest,href,children,onPlainLeftClick,onClick,...restProps}=this.props,useButton=pseudo||!isCustom&&null==href,classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()(_link_css__WEBPACK_IMPORTED_MODULE_2___default().link,className,{[_link_css__WEBPACK_IMPORTED_MODULE_2___default().active]:active,[_link_css__WEBPACK_IMPORTED_MODULE_2___default().inherit]:inherit,[_link_css__WEBPACK_IMPORTED_MODULE_2___default().hover]:hover,[_link_css__WEBPACK_IMPORTED_MODULE_2___default().pseudo]:useButton});let props=restProps;return isCustom&&!props.activeClassName&&(props={...props,activeClassName:_link_css__WEBPACK_IMPORTED_MODULE_2___default().active}),useButton?react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",_extends({type:"button"},props,{className:classes,onClick:onClick||onPlainLeftClick,"data-test":(0,_global_data_tests__WEBPACK_IMPORTED_MODULE_5__.Z)("ring-link",dataTest)}),children):react__WEBPACK_IMPORTED_MODULE_0__.createElement(ComposedComponent,_extends({},props,{href,className:classes,onClick,onPlainLeftClick,"data-test":(0,_global_data_tests__WEBPACK_IMPORTED_MODULE_5__.Z)("ring-link",dataTest)}),children)}}}const __WEBPACK_DEFAULT_EXPORT__=linkHOC(_clickableLink__WEBPACK_IMPORTED_MODULE_3__.Z)},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/badge/badge.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__.default),___CSS_LOADER_EXPORT___.push([module.id,".badge_f068 {\n  display: inline-block;\n\n  box-sizing: border-box;\n  height: 20px;\n  padding: 0 var(--ring-unit);\n\n  cursor: default;\n\n  vertical-align: baseline;\n\n  color: var(--ring-secondary-color);\n  border: 1px var(--ring-line-color) solid;\n  border-radius: var(--ring-border-radius);\n  background-color: var(--ring-content-background-color);\n\n  font-size: var(--ring-font-size-smaller);\n  font-weight: normal;\n  font-style: normal;\n  line-height: 17px;\n}\n\n.badge_f068.gray_b28f {\n    color: var(--ring-text-color);\n    background-color: var(--ring-tag-background-color);\n  }\n\n.badge_f068.valid_d412 {\n    color: var(--ring-success-color);\n  }\n\n.badge_f068.invalid_bfa3 {\n    color: var(--ring-error-color);\n  }\n\n.badge_f068.disabled_a43e {\n    /* Deprecated: duplicates invalid */\n\n    color: var(--ring-error-color);\n  }\n","",{version:3,sources:["webpack://./src/badge/badge.css"],names:[],mappings:"AAEA;EACE,qBAAqB;;EAErB,sBAAsB;EACtB,YAAY;EACZ,2BAA2B;;EAE3B,eAAe;;EAEf,wBAAwB;;EAExB,kCAAkC;EAClC,wCAAwC;EACxC,wCAAwC;EACxC,sDAAsD;;EAEtD,wCAAwC;EACxC,mBAAmB;EACnB,kBAAkB;EAClB,iBAAiB;AAoBnB;;AAlBE;IACE,6BAA6B;IAC7B,kDAAkD;EACpD;;AAEA;IACE,gCAAgC;EAClC;;AAEA;IACE,8BAA8B;EAChC;;AAEA;IACE,mCAAmC;;IAEnC,8BAA8B;EAChC",sourcesContent:['@import "../global/variables.css";\n\n.badge {\n  display: inline-block;\n\n  box-sizing: border-box;\n  height: 20px;\n  padding: 0 var(--ring-unit);\n\n  cursor: default;\n\n  vertical-align: baseline;\n\n  color: var(--ring-secondary-color);\n  border: 1px var(--ring-line-color) solid;\n  border-radius: var(--ring-border-radius);\n  background-color: var(--ring-content-background-color);\n\n  font-size: var(--ring-font-size-smaller);\n  font-weight: normal;\n  font-style: normal;\n  line-height: 17px;\n\n  &.gray {\n    color: var(--ring-text-color);\n    background-color: var(--ring-tag-background-color);\n  }\n\n  &.valid {\n    color: var(--ring-success-color);\n  }\n\n  &.invalid {\n    color: var(--ring-error-color);\n  }\n\n  &.disabled {\n    /* Deprecated: duplicates invalid */\n\n    color: var(--ring-error-color);\n  }\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={badge:"badge_f068",gray:"gray_b28f",valid:"valid_d412",invalid:"invalid_bfa3",disabled:"disabled_a43e"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/group/group.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__.default),___CSS_LOADER_EXPORT___.push([module.id,".group_ba3b > *:not(:last-child) {\n    margin-right: var(--ring-unit);\n  }\n","",{version:3,sources:["webpack://./src/group/group.css"],names:[],mappings:"AAGE;IACE,8BAA8B;EAChC",sourcesContent:['@import "../global/variables.css";\n\n.group {\n  & > *:not(:last-child) {\n    margin-right: var(--ring-unit);\n  }\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={group:"group_ba3b"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/link/link.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__.default),___CSS_LOADER_EXPORT___.push([module.id,".link_c73c,\n.withLinks_a3f8 a {\n  cursor: pointer;\n  transition: color var(--ring-fast-ease);\n\n  color: var(--ring-link-color);\n\n  outline: none;\n\n  text-decoration-line: none;\n  text-decoration-thickness: 1px;\n  text-underline-offset: 3px;\n}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {:is(.link_c73c,.withLinks_a3f8 a):hover {\n    text-decoration-line: underline;\n\n    transition: none;\n\n    color: var(--ring-link-hover-color);\n  }}\n\n@media (min-resolution: 2dppx) {\n\n.link_c73c,\n.withLinks_a3f8 a {\n    text-decoration-thickness: 0.5px;\n}\n  }\n\n.hover_e4ca:is(.link_c73c,.withLinks_a3f8 a) {\n    text-decoration-line: underline;\n\n    transition: none;\n\n    color: var(--ring-link-hover-color);\n  }\n\n/* stylelint-disable-next-line selector-max-specificity */\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.pseudo_cb40:is(.link_c73c,.withLinks_a3f8 a):hover {\n    text-decoration: none;\n  }}\n\n:is(.link_c73c,.withLinks_a3f8 a):focus-visible {\n    box-shadow: 0 0 0 2px var(--ring-border-hover-color);\n  }\n\n.link_c73c.active_eef2 {\n  color: inherit;\n}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.inherit_c3d7:not(:hover) {\n  color: inherit;\n}}\n\n.pseudo_cb40 {\n  margin: 0;\n  padding: 0;\n\n  text-align: left;\n\n  border: 0;\n\n  background: transparent;\n\n  font: inherit;\n}\n\n.pseudo_cb40::-moz-focus-inner {\n    padding: 0;\n\n    border: 0;\n  }\n","",{version:3,sources:["webpack://./src/link/link.css","<no source>"],names:[],mappings:"AAEA;;EAEE,eAAe;EACf,uCAAuC;;EAEvC,6BAA6B;;EAE7B,aAAa;;EAEb,0BAA0B;EAC1B,8BAA8B;EAC9B,0BAA0B;AAuB5B;;ACpCA,wGAAA;IAAA,gCAAA;;IAAA,iBAAA;;IAAA,oCAAA;GAAA,CAAA;;ADeE;;AAbF;;IAcI,gCAAgC;AAoBpC;EAnBE;;AAEA;IAEE,+BAA+B;;IAE/B,gBAAgB;;IAEhB,mCAAmC;EACrC;;AAEA,yDAAyD;;AC5B3D,wGAAA;IAAA,sBAAA;GAAA,CAAA;;ADiCE;IACE,oDAAoD;EACtD;;AAGF;EACE,cAAc;AAChB;;ACxCA,wGAAA;EAAA,eAAA;CAAA,CAAA;;AD8CA;EACE,SAAS;EACT,UAAU;;EAEV,gBAAgB;;EAEhB,SAAS;;EAET,uBAAuB;;EAEvB,aAAa;AAOf;;AALE;IACE,UAAU;;IAEV,SAAS;EACX",sourcesContent:['@import "../global/variables.css";\n\n.link,\n.withLinks a {\n  cursor: pointer;\n  transition: color var(--ring-fast-ease);\n\n  color: var(--ring-link-color);\n\n  outline: none;\n\n  text-decoration-line: none;\n  text-decoration-thickness: 1px;\n  text-underline-offset: 3px;\n\n  @media (min-resolution: 2dppx) {\n    text-decoration-thickness: 0.5px;\n  }\n\n  &:hover,\n  &.hover {\n    text-decoration-line: underline;\n\n    transition: none;\n\n    color: var(--ring-link-hover-color);\n  }\n\n  /* stylelint-disable-next-line selector-max-specificity */\n  &.pseudo:hover {\n    text-decoration: none;\n  }\n\n  &:focus-visible {\n    box-shadow: 0 0 0 2px var(--ring-border-hover-color);\n  }\n}\n\n.link.active {\n  color: inherit;\n}\n\n.inherit:not(:hover) {\n  color: inherit;\n}\n\n.pseudo {\n  margin: 0;\n  padding: 0;\n\n  text-align: left;\n\n  border: 0;\n\n  background: transparent;\n\n  font: inherit;\n\n  &::-moz-focus-inner {\n    padding: 0;\n\n    border: 0;\n  }\n}\n',null],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={link:"link_c73c",withLinks:"withLinks_a3f8",hover:"hover_e4ca",pseudo:"pseudo_cb40",active:"active_eef2",inherit:"inherit_c3d7"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/badge/badge.css":(module,__unused_webpack_exports,__webpack_require__)=>{var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/badge/badge.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}},"./src/group/group.css":(module,__unused_webpack_exports,__webpack_require__)=>{var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/group/group.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}},"./src/link/link.css":(module,__unused_webpack_exports,__webpack_require__)=>{var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/link/link.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}}}]);
(self.webpackChunk_jetbrains_ring_ui=self.webpackChunk_jetbrains_ring_ui||[]).push([[4656],{"./node_modules/@jetbrains/icons/chevron-10px.js":function(module){module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"><g><polygon points="5 7.99 1.5 4.5 2.5 3.5 5 6.01 7.5 3.5 8.49 4.5 5 7.99"/></g></svg>'},"./.storybook/react-decorator.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom_client__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/client.js"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("@storybook/preview-api");const reactDecorator=(StoryFn,context)=>{const node=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>document.createElement("div")),[context.kind,context.name]),root=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>(0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(node)),[node]);return(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>()=>root.unmount()),[root]),root.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(StoryFn,null))),node};__webpack_exports__.Z=()=>reactDecorator},"./src/alert-service/alert-service.examples.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{alertService:function(){return alertService}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_decorator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./.storybook/react-decorator.tsx"),_button_button__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/button/button.tsx"),_button_toolbar_button_toolbar__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/button-toolbar/button-toolbar.tsx"),_global_theme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/global/theme.tsx"),_alert_service__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/alert-service/alert-service.tsx"),_alert_service_examples_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/alert-service/alert-service.examples.css"),_alert_service_examples_css__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_alert_service_examples_css__WEBPACK_IMPORTED_MODULE_1__);__webpack_exports__.default={title:"Services/Alert Service",decorators:[(0,_storybook_react_decorator__WEBPACK_IMPORTED_MODULE_2__.Z)()],parameters:{storySource:{source:"import React from 'react';\n\nimport reactDecorator from '../../.storybook/react-decorator';\n\n\nimport Button from '../button/button';\nimport ButtonToolbar from '../button-toolbar/button-toolbar';\n\nimport Theme from '../global/theme';\n\nimport alert from './alert-service';\n\nimport styles from './alert-service.examples.css';\n\nexport default {\n  title: 'Services/Alert Service',\n  decorators: [reactDecorator()],\n\n  parameters: {\n    notes: 'Service for managing a stack of alerts.',\n    hermione: {skip: true}\n  }\n};\n\nexport const alertService = () => {\n  const MSG_TIMEOUT = 5000;\n  const MSG_LONG_TIMEOUT = 30000;\n\n  class AlertServiceDemo extends React.Component {\n    componentDidMount() {\n      setTimeout(() => {\n        alert.message('A initial message', MSG_TIMEOUT);\n        alert.error('Error message');\n        this.showCustomMessage();\n      });\n    }\n\n    componentWillUnmount() {\n      alert._getShowingAlerts().forEach(item => alert.removeWithoutAnimation(item.key));\n    }\n\n    lastKey?: string | number;\n\n    showCustomMessage = () => {\n      this.lastKey = alert.addAlert(\n        <div className={styles.customAlert}>\n          <h1>Hello!</h1>\n          <p>{'This is a custom message'}</p>\n        </div>,\n        undefined,\n        0,\n        {\n          className: styles.customAlert,\n          closeButtonClassName: styles.closeButton,\n          theme: Theme.LIGHT\n        }\n      );\n    };\n\n    showError = () => {\n      this.lastKey = alert.error('Something wrong happened');\n    };\n\n    showRandomWarning = () => {\n      this.lastKey = alert.warning(\n        `Warning! Something bad is going to happen (${Math.random()})`,\n        MSG_LONG_TIMEOUT\n      );\n    };\n\n    showMessage = () => {\n      this.lastKey = alert.message('This is just a message', MSG_TIMEOUT);\n    };\n\n    removeLastAlert = () => {\n      alert.remove(this.lastKey);\n    };\n\n    render() {\n      return (\n        <ButtonToolbar>\n          <Button onClick={this.showError}>Show error</Button>\n          <Button onClick={this.showMessage} primary>\n            Show message\n          </Button>\n          <Button onClick={this.showCustomMessage}>\n            Show custom message\n          </Button>\n          <Button onClick={this.showRandomWarning}>Show warning</Button>\n          <Button onClick={this.removeLastAlert}>Remove last alert</Button>\n        </ButtonToolbar>\n      );\n    }\n  }\n\n  return <AlertServiceDemo/>;\n};\n",locationsMap:{"alert-service":{startLoc:{col:28,line:25},endLoc:{col:1,line:97},startBody:{col:28,line:25},endBody:{col:1,line:97}}}},notes:"Service for managing a stack of alerts.",hermione:{skip:!0}}};const alertService=()=>{class AlertServiceDemo extends react__WEBPACK_IMPORTED_MODULE_0__.Component{componentDidMount(){setTimeout((()=>{_alert_service__WEBPACK_IMPORTED_MODULE_3__.Z.message("A initial message",5e3),_alert_service__WEBPACK_IMPORTED_MODULE_3__.Z.error("Error message"),this.showCustomMessage()}))}componentWillUnmount(){_alert_service__WEBPACK_IMPORTED_MODULE_3__.Z._getShowingAlerts().forEach((item=>_alert_service__WEBPACK_IMPORTED_MODULE_3__.Z.removeWithoutAnimation(item.key)))}lastKey;showCustomMessage=()=>{this.lastKey=_alert_service__WEBPACK_IMPORTED_MODULE_3__.Z.addAlert(react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:_alert_service_examples_css__WEBPACK_IMPORTED_MODULE_1___default().customAlert},react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",null,"Hello!"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"This is a custom message")),void 0,0,{className:_alert_service_examples_css__WEBPACK_IMPORTED_MODULE_1___default().customAlert,closeButtonClassName:_alert_service_examples_css__WEBPACK_IMPORTED_MODULE_1___default().closeButton,theme:_global_theme__WEBPACK_IMPORTED_MODULE_4__.ZP.LIGHT})};showError=()=>{this.lastKey=_alert_service__WEBPACK_IMPORTED_MODULE_3__.Z.error("Something wrong happened")};showRandomWarning=()=>{this.lastKey=_alert_service__WEBPACK_IMPORTED_MODULE_3__.Z.warning(`Warning! Something bad is going to happen (${Math.random()})`,3e4)};showMessage=()=>{this.lastKey=_alert_service__WEBPACK_IMPORTED_MODULE_3__.Z.message("This is just a message",5e3)};removeLastAlert=()=>{_alert_service__WEBPACK_IMPORTED_MODULE_3__.Z.remove(this.lastKey)};render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_button_toolbar_button_toolbar__WEBPACK_IMPORTED_MODULE_5__.Z,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_button_button__WEBPACK_IMPORTED_MODULE_6__.ZP,{onClick:this.showError},"Show error"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_button_button__WEBPACK_IMPORTED_MODULE_6__.ZP,{onClick:this.showMessage,primary:!0},"Show message"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_button_button__WEBPACK_IMPORTED_MODULE_6__.ZP,{onClick:this.showCustomMessage},"Show custom message"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_button_button__WEBPACK_IMPORTED_MODULE_6__.ZP,{onClick:this.showRandomWarning},"Show warning"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_button_button__WEBPACK_IMPORTED_MODULE_6__.ZP,{onClick:this.removeLastAlert},"Remove last alert"))}}return react__WEBPACK_IMPORTED_MODULE_0__.createElement(AlertServiceDemo,null)};alertService.__docgenInfo={description:"",methods:[],displayName:"alertService"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/alert-service/alert-service.examples.tsx"]={name:"alertService",docgenInfo:alertService.__docgenInfo,path:"src/alert-service/alert-service.examples.tsx"})},"./src/alert-service/alert-service.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_global_react_render_adapter__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/global/react-render-adapter.ts"),_global_get_uid__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/global/get-uid.ts"),_alert_alert__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/alert/container.tsx"),_alert_alert__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/alert/alert.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const alertService=new class AlertService{defaultTimeout=0;showingAlerts=[];containerElement=document.createElement("div");_getShowingAlerts(){return[...this.showingAlerts]}renderAlertContainer(alerts){return 0===alerts.length?react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null):react__WEBPACK_IMPORTED_MODULE_0__.createElement(_alert_alert__WEBPACK_IMPORTED_MODULE_1__.Z,null,alerts.map((alert=>{const{message:message,key:key,...rest}=alert;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_alert_alert__WEBPACK_IMPORTED_MODULE_2__.ZP,_extends({key:key},rest),message)})))}renderAlerts(){(0,_global_react_render_adapter__WEBPACK_IMPORTED_MODULE_3__.sY)(this.renderAlertContainer(this.showingAlerts),this.containerElement)}findSameAlert(message,type){return this.showingAlerts.filter((it=>it.type===type&&it.message===message))[0]}startAlertClosing(alert){alert.isClosing=!0,this.renderAlerts()}remove(key){const alertToClose=this.showingAlerts.filter((alert=>alert.key===key))[0];alertToClose&&this.startAlertClosing(alertToClose)}removeWithoutAnimation(key){this.showingAlerts=this.showingAlerts.filter((alert=>alert.key!==key)),this.renderAlerts()}stopShakingWhenAnimationDone(shakingAlert){setTimeout((()=>{shakingAlert.showWithAnimation=!1,shakingAlert.isShaking=!1,this.renderAlerts()}),_alert_alert__WEBPACK_IMPORTED_MODULE_2__.o)}addAlert(message,type){let timeout=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.defaultTimeout,options=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const{onCloseRequest:onCloseRequest,onClose:onClose,...restOptions}=options,sameAlert=this.findSameAlert(message,type);if(sameAlert)return sameAlert.isShaking=!0,this.renderAlerts(),this.stopShakingWhenAnimationDone(sameAlert),sameAlert.key;const alert={key:(0,_global_get_uid__WEBPACK_IMPORTED_MODULE_4__.Z)("alert-service-"),message:message,type:type,timeout:timeout,isClosing:!1,onCloseRequest:()=>{onCloseRequest&&onCloseRequest(),this.startAlertClosing(alert)},onClose:()=>{onClose&&onClose(),this.removeWithoutAnimation(alert.key)},...restOptions};return this.showingAlerts=[alert,...this.showingAlerts],this.renderAlerts(),alert.key}setDefaultTimeout(timeout){this.defaultTimeout=timeout}error(message,timeout){return this.addAlert(message,_alert_alert__WEBPACK_IMPORTED_MODULE_2__.ZP.Type.ERROR,timeout)}message(message,timeout){return this.addAlert(message,_alert_alert__WEBPACK_IMPORTED_MODULE_2__.ZP.Type.MESSAGE,timeout)}warning(message,timeout){return this.addAlert(message,_alert_alert__WEBPACK_IMPORTED_MODULE_2__.ZP.Type.WARNING,timeout)}successMessage(message,timeout){return this.addAlert(message,_alert_alert__WEBPACK_IMPORTED_MODULE_2__.ZP.Type.SUCCESS,timeout)}loadingMessage(message,timeout){return this.addAlert(message,_alert_alert__WEBPACK_IMPORTED_MODULE_2__.ZP.Type.LOADING,timeout)}};__webpack_exports__.Z=alertService},"./src/button-toolbar/button-toolbar.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return ButtonToolbar}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_global_data_tests__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/global/data-tests.ts"),_button_toolbar_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/button-toolbar/button-toolbar.css"),_button_toolbar_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_button_toolbar_css__WEBPACK_IMPORTED_MODULE_2__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}class ButtonToolbar extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{static propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().node,className:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,"data-test":prop_types__WEBPACK_IMPORTED_MODULE_3___default().string};render(){const{className:className,"data-test":dataTest,...restProps}=this.props,classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()(_button_toolbar_css__WEBPACK_IMPORTED_MODULE_2___default().buttonToolbar,className);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_extends({},restProps,{"data-test":(0,_global_data_tests__WEBPACK_IMPORTED_MODULE_4__.Z)("ring-button-toolbar",dataTest),className:classes}))}}ButtonToolbar.__docgenInfo={description:"@name Button Toolbar",methods:[],displayName:"ButtonToolbar",props:{children:{type:{name:"node"},required:!1,description:""},className:{type:{name:"string"},required:!1,description:""},"data-test":{type:{name:"string"},required:!1,description:"",tsType:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]}}},composes:["HTMLAttributes"]},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/button-toolbar/button-toolbar.tsx"]={name:"ButtonToolbar",docgenInfo:ButtonToolbar.__docgenInfo,path:"src/button-toolbar/button-toolbar.tsx"})},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/alert-service/alert-service.examples.css":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/global.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_button_button_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/button/button.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_4__.default),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default,"",!0),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_button_button_css__WEBPACK_IMPORTED_MODULE_3__.default,"",!0),___CSS_LOADER_EXPORT___.push([module.id,"@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.closeButton_c015:hover ."+_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_button_button_css__WEBPACK_IMPORTED_MODULE_3__.default.locals.icon+" {\n  color: var(--ring-white-text-color);\n}}\n\n.customAlert_e993 {\n  color: var(--ring-white-text-color);\n  background: var(--ring-main-color);\n}\n\n.closeButton_c015 ."+_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_button_button_css__WEBPACK_IMPORTED_MODULE_3__.default.locals.icon+" {\n  color: var(--ring-white-text-color);\n}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.closeButton_c015:hover {\n  opacity: 0.8;\n}}\n","",{version:3,sources:["<no source>","webpack://./src/alert-service/alert-service.examples.css"],names:[],mappings:"AAAA,wGAAA;EAAA,oCAAA;CAAA,CAAA;;ACOA;EACE,mCAAmC;EACnC,kCAAkC;AACpC;;AAEA;EAEE,mCAAmC;AACrC;;ADfA,wGAAA;EAAA,aAAA;CAAA,CAAA",sourcesContent:[null,'@import "../global/variables.css";\n\n@value unit from "../global/global.css";\n@value icon from "../button/button.css";\n@value animation-duration: 300ms;\n@value animation-easing: ease-out;\n\n.customAlert {\n  color: var(--ring-white-text-color);\n  background: var(--ring-main-color);\n}\n\n.closeButton .icon,\n.closeButton:hover .icon {\n  color: var(--ring-white-text-color);\n}\n\n.closeButton:hover {\n  opacity: 0.8;\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={unit:""+_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.unit,icon:""+_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_button_button_css__WEBPACK_IMPORTED_MODULE_3__.default.locals.icon,"animation-duration":"300ms","animation-easing":"ease-out",closeButton:"closeButton_c015",customAlert:"customAlert_e993"},__webpack_exports__.default=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/button-toolbar/button-toolbar.css":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/global.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_button_button_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/button/button.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_4__.default),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default,"",!0),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_button_button_css__WEBPACK_IMPORTED_MODULE_3__.default,"",!0),___CSS_LOADER_EXPORT___.push([module.id,".buttonToolbar_e0e1 {\n  display: inline-block;\n\n  white-space: nowrap;\n\n  font-size: 0;\n  line-height: 0;\n}\n\n.buttonToolbar_e0e1 > "+_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_button_button_css__WEBPACK_IMPORTED_MODULE_3__.default.locals.button+",\n.buttonToolbar_e0e1 > .ring-button-group,\n.buttonToolbar_e0e1 > ."+_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_button_button_css__WEBPACK_IMPORTED_MODULE_3__.default.locals.button+",\n.buttonToolbar_e0e1 > .buttonGroup_e16e,\n.buttonToolbar_e0e1 > .split_e19c,\n.buttonToolbar_e0e1 > .buttonToolbar_e0e1 {\n  margin-right: 8px;\n}\n\n.buttonToolbar_e0e1 > :last-child {\n  margin-right: 0;\n}\n","",{version:3,sources:["webpack://./src/button-toolbar/button-toolbar.css"],names:[],mappings:"AAKA;EACE,qBAAqB;;EAErB,mBAAmB;;EAEnB,YAAY;EACZ,cAAc;AAChB;;AAEA;;;;;;EAME,iBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB",sourcesContent:['@import "../global/variables.css";\n\n@value unit from "../global/global.css";\n@value button from "../button/button.css";\n\n.buttonToolbar {\n  display: inline-block;\n\n  white-space: nowrap;\n\n  font-size: 0;\n  line-height: 0;\n}\n\n.buttonToolbar > button,\n.buttonToolbar > :global(.ring-button-group),\n.buttonToolbar > .button,\n.buttonToolbar > .buttonGroup,\n.buttonToolbar > .split,\n.buttonToolbar > .buttonToolbar {\n  margin-right: unit;\n}\n\n.buttonToolbar > :last-child {\n  margin-right: 0;\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={unit:""+_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.unit,button:""+_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_button_button_css__WEBPACK_IMPORTED_MODULE_3__.default.locals.button,buttonToolbar:"buttonToolbar_e0e1",buttonGroup:"buttonGroup_e16e",split:"split_e19c"},__webpack_exports__.default=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/link/link.css":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__.default),___CSS_LOADER_EXPORT___.push([module.id,".link_c73c {\n  cursor: pointer;\n  transition: color var(--ring-fast-ease);\n\n  color: var(--ring-link-color);\n\n  outline: none;\n}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_c73c:hover {\n    transition: none;\n\n    color: var(--ring-link-hover-color);\n  }}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_c73c:hover {\n    text-decoration: none;\n  }}\n\n.link_c73c {\n    text-decoration: none;\n  }\n\n.link_c73c.hover_e4ca {\n    transition: none;\n\n    color: var(--ring-link-hover-color);\n  }\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_c73c:hover .inner_d16b {\n    border-width: 0;\n    border-bottom: 2px solid;\n    border-image-source: linear-gradient(currentcolor 50%, transparent 50%);\n    border-image-slice: 0 0 100% 0;\n  }}\n\n.link_c73c.active_eef2 {\n    color: inherit;\n  }\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_c73c.compatibilityUnderlineMode_a632:hover {\n    text-decoration: underline;\n\n    /* stylelint-disable-next-line selector-max-specificity */\n  }\n    .link_c73c.compatibilityUnderlineMode_a632:hover .inner_d16b {\n      border: none;\n    }}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_c73c.pseudo_cb40:hover {\n    text-decoration: none;\n\n    /* stylelint-disable-next-line selector-max-specificity */\n  }\n    .link_c73c.pseudo_cb40:hover .inner_d16b {\n      border: none;\n    }}\n\n.link_c73c:focus-visible {\n    box-shadow: 0 0 0 2px var(--ring-border-hover-color);\n  }\n\n@media (min-resolution: 2dppx) {@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_c73c:hover .inner_d16b {\n    border-bottom-width: 1px;\n  }}\n}\n\n.text_e0fe {\n  border-radius: var(--ring-border-radius);\n}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.inherit_c3d7:not(:hover) {\n  color: inherit;\n}}\n\n.pseudo_cb40 {\n  margin: 0;\n  padding: 0;\n\n  text-align: left;\n\n  border: 0;\n\n  background: transparent;\n\n  font: inherit;\n}\n\n.pseudo_cb40::-moz-focus-inner {\n    padding: 0;\n\n    border: 0;\n  }\n","",{version:3,sources:["webpack://./src/link/link.css","<no source>"],names:[],mappings:"AAEA;EACE,eAAe;EACf,uCAAuC;;EAEvC,6BAA6B;;EA2C7B,aAAa;AAKf;;ACtDA,wGAAA;IAAA,iBAAA;;IAAA,oCAAA;GAAA,CAAA;;AAAA,wGAAA;IAAA,sBAAA;GAAA,CAAA;;ADQE;IAEE,qBAAqB;EACvB;;AAEA;IAEE,gBAAgB;;IAEhB,mCAAmC;EACrC;;AClBF,wGAAA;IAAA,gBAAA;IAAA,yBAAA;IAAA,wEAAA;IAAA,+BAAA;GAAA,CAAA;;AD2BE;IACE,cAAc;EAChB;;AC7BF,wGAAA;IAAA,2BAAA;;IAAA,0DAAA;GAAA;IAAA;MAAA,aAAA;KAAA,CAAA;;AAAA,wGAAA;IAAA,sBAAA;;IAAA,0DAAA;GAAA;IAAA;MAAA,aAAA;KAAA,CAAA;;ADmDE;IACE,oDAAoD;EACtD;;AAGF,gCCxDA,wGAAA;IAAA,yBAAA;GAAA,CAAA;AD4DA;;AAEA;EACE,wCAAwC;AAC1C;;AChEA,wGAAA;EAAA,eAAA;CAAA,CAAA;;ADsEA;EACE,SAAS;EACT,UAAU;;EAEV,gBAAgB;;EAEhB,SAAS;;EAET,uBAAuB;;EAEvB,aAAa;AAOf;;AALE;IACE,UAAU;;IAEV,SAAS;EACX",sourcesContent:['@import "../global/variables.css";\n\n.link {\n  cursor: pointer;\n  transition: color var(--ring-fast-ease);\n\n  color: var(--ring-link-color);\n\n  &,\n  &:hover {\n    text-decoration: none;\n  }\n\n  &:hover,\n  &.hover {\n    transition: none;\n\n    color: var(--ring-link-hover-color);\n  }\n\n  &:hover .inner {\n    border-width: 0;\n    border-bottom: 2px solid;\n    border-image-source: linear-gradient(currentcolor 50%, transparent 50%);\n    border-image-slice: 0 0 100% 0;\n  }\n\n  &.active {\n    color: inherit;\n  }\n\n  &.compatibilityUnderlineMode:hover {\n    text-decoration: underline;\n\n    /* stylelint-disable-next-line selector-max-specificity */\n    & .inner {\n      border: none;\n    }\n  }\n\n  &.pseudo:hover {\n    text-decoration: none;\n\n    /* stylelint-disable-next-line selector-max-specificity */\n    & .inner {\n      border: none;\n    }\n  }\n\n  outline: none;\n\n  &:focus-visible {\n    box-shadow: 0 0 0 2px var(--ring-border-hover-color);\n  }\n}\n\n@media (min-resolution: 2dppx) {\n  .link:hover .inner {\n    border-bottom-width: 1px;\n  }\n}\n\n.text {\n  border-radius: var(--ring-border-radius);\n}\n\n.inherit:not(:hover) {\n  color: inherit;\n}\n\n.pseudo {\n  margin: 0;\n  padding: 0;\n\n  text-align: left;\n\n  border: 0;\n\n  background: transparent;\n\n  font: inherit;\n\n  &::-moz-focus-inner {\n    padding: 0;\n\n    border: 0;\n  }\n}\n',null],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={link:"link_c73c",hover:"hover_e4ca",inner:"inner_d16b",active:"active_eef2",compatibilityUnderlineMode:"compatibilityUnderlineMode_a632",pseudo:"pseudo_cb40",text:"text_e0fe",inherit:"inherit_c3d7"},__webpack_exports__.default=___CSS_LOADER_EXPORT___},"./src/alert-service/alert-service.examples.css":function(module,__unused_webpack_exports,__webpack_require__){var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/alert-service/alert-service.examples.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}},"./src/button-toolbar/button-toolbar.css":function(module,__unused_webpack_exports,__webpack_require__){var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/button-toolbar/button-toolbar.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}},"./node_modules/util-deprecate/browser.js":function(module,__unused_webpack_exports,__webpack_require__){function config(name){try{if(!__webpack_require__.g.localStorage)return!1}catch(_){return!1}var val=__webpack_require__.g.localStorage[name];return null!=val&&"true"===String(val).toLowerCase()}module.exports=function deprecate(fn,msg){if(config("noDeprecation"))return fn;var warned=!1;return function deprecated(){if(!warned){if(config("throwDeprecation"))throw new Error(msg);config("traceDeprecation")?console.trace(msg):console.warn(msg),warned=!0}return fn.apply(this,arguments)}}}}]);
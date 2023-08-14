(self.webpackChunk_jetbrains_ring_ui=self.webpackChunk_jetbrains_ring_ui||[]).push([[6210],{"./node_modules/@jetbrains/icons/chevron-down.js":function(module){module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g><polygon points="8 10.99 3.5 6.5 4.5 5.5 8 9.01 11.51 5.5 12.49 6.5 8 10.99"/></g></svg>'},"./.storybook/angular-decorator.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{i:function(){return APP_NAME}});var angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/angular/index.js"),angular__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("@storybook/preview-api");const APP_NAME="ring-ui.story.app",angularDecorator=story=>{const node=document.createElement("div");node.innerHTML=story();const app=angular__WEBPACK_IMPORTED_MODULE_0___default().bootstrap(node,[APP_NAME],{strictDi:!0});return(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>()=>{app.get("$rootScope").$destroy(),node.innerHTML=""})),node};__webpack_exports__.Z=()=>angularDecorator},"./src/global/ring-angular-component.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return RingAngularComponent}});class RingAngularComponent{static get controller(){return this}$inject={};constructor(){for(var _this$constructor$$in,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];(null!==(_this$constructor$$in=this.constructor.$inject)&&void 0!==_this$constructor$$in?_this$constructor$$in:[]).forEach(((injectName,i)=>{this.$inject[injectName]=args[i]}))}}},"./src/loader-inline/loader-inline.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),_global_data_tests__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/global/data-tests.ts"),_loader_inline_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/loader-inline/loader-inline.css"),_loader_inline_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_loader_inline_css__WEBPACK_IMPORTED_MODULE_2__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}class LoaderInline extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{static propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,"data-test":prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().node};render(){const{className:className,"data-test":dataTest,children:children,...restProps}=this.props,classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()(_loader_inline_css__WEBPACK_IMPORTED_MODULE_2___default().loader,className),loader=react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_extends({},restProps,{"data-test":(0,_global_data_tests__WEBPACK_IMPORTED_MODULE_4__.Z)("ring-loader-inline",dataTest),className:classes}));return children?react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,loader,react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:_loader_inline_css__WEBPACK_IMPORTED_MODULE_2___default().children},children)):loader}}LoaderInline.__docgenInfo={description:"@name Loader Inline",methods:[],displayName:"LoaderInline",props:{className:{type:{name:"string"},required:!1,description:""},"data-test":{type:{name:"string"},required:!1,description:"",tsType:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]}},children:{type:{name:"node"},required:!1,description:""}},composes:["HTMLAttributes"]},__webpack_exports__.Z=LoaderInline,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/loader-inline/loader-inline.tsx"]={name:"LoaderInline",docgenInfo:LoaderInline.__docgenInfo,path:"src/loader-inline/loader-inline.tsx"})},"./src/message-bundle-ng/message-bundle-ng.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/angular/index.js");const angularModule=__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__)().module("Ring.message-bundle",[]);angularModule.factory("ringI18n",(function emptyI18n(){return str=>str})),angularModule.service("RingMessageBundle",["ringI18n",function RingMessageBundle(ringI18n){const i18n=ringI18n;this.form_required=()=>i18n("Value is required"),this.form_invalid=()=>i18n("Value is invalid"),this.form_url=()=>i18n("Should be a valid URL"),this.form_email=()=>i18n("Should be a valid email"),this.form_number=()=>i18n("Should be a number"),this.form_maxlength=()=>i18n("Is too long"),this.form_minlength=()=>i18n("Is too short"),this.form_pattern=()=>i18n("Doesn't match the pattern"),this.form_equalvalue=()=>i18n("Is not the same"),this.form_unique=()=>i18n("Is not unique"),this.form_max=()=>i18n("Is out of range"),this.form_min=()=>i18n("Is out of range"),this.form_save=()=>i18n("Save"),this.form_saved=()=>i18n("Saved"),this.form_cancel=()=>i18n("Cancel"),this.avatareditor_nosupport=()=>i18n("Sorry, your browser doesn't support File API"),this.avatareditor_noselected=()=>i18n("No image file was selected"),this.avatareditor_delete=()=>i18n("Delete Image"),this.avatareditor_add=()=>i18n("Add Image"),this.errorpage_seriouslywrong=()=>i18n("Oh-oh... Something went seriously wrong."),this.errorpage_offline=()=>i18n("There's nothing we can do: The server seems to be offline."),this.errorpage_disconnected=()=>i18n("Disconnected"),this.errorpage_disconnectedmsg=()=>i18n("No, no one's there."),this.errorpage_401=()=>i18n("Authorization required"),this.errorpage_401msg=()=>i18n("You have requested access to a page that requires authorization, but the request is missing valid authentication credentials. It can also mean that your account has been banned."),this.errorpage_403=()=>i18n("Woah, you can't touch this!"),this.errorpage_403msg=()=>i18n("Unfortunately, you are not allowed to access the page you've requested. It seems you don't have sufficient permissions."),this.errorpage_404=()=>i18n("Nope, can't find it!"),this.errorpage_404msg=()=>i18n("Despite our best efforts, there's nothing here to show you with the URL you requested. Most likely the URL is invalid or you don't have permissions to access the page."),this.errorpage_500=()=>i18n("Oh-oh... Something went seriously wrong"),this.errorpage_500msg=()=>i18n("Despite our best efforts, the server is not working properly."),this.select_options_not_found=()=>i18n("No options found"),this.select_loading=()=>i18n("Loading..."),this.select_label=()=>i18n("Select an option"),this.previous_page=()=>i18n("previous"),this.next_page=()=>i18n("next page"),this.first_page=()=>i18n("First page"),this.last_page=()=>i18n("Last page"),this.items_per_page=()=>i18n("per page"),this.confirmation_ok=()=>i18n("Ok"),this.confirmation_cancel=()=>i18n("Cancel")}]),__webpack_exports__.Z=angularModule.name},"./src/select-ng/select-ng.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return select_ng}});var angular=__webpack_require__("./node_modules/angular/index.js"),angular_default=__webpack_require__.n(angular),react=__webpack_require__("./node_modules/react/index.js"),react_render_adapter=__webpack_require__("./src/global/react-render-adapter.ts"),get_event_key=__webpack_require__("./src/global/get-event-key.ts"),select_select=__webpack_require__("./src/select/select.tsx"),message_bundle_ng=__webpack_require__("./src/message-bundle-ng/message-bundle-ng.js"),controls_height=__webpack_require__("./src/global/controls-height.tsx"),deep_equal=__webpack_require__("./node_modules/deep-equal/index.js"),deep_equal_default=__webpack_require__.n(deep_equal);class Options{static OPTIONS_REGEXP=/^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+select\s+as\s+(.*?))?(?:\s+describe\sas\s+(.*?))?(?:\s+for\s+)?([$\w]+)\s+in\s+(.*?)(?:\s+track\sby\s+(.*?))?$/;static MATCHES={ITEM:1,LABEL:2,SELECTED_LABEL:3,DESCRIPTION:4,OPTION:5,ITEMS:6,TRACK:7};static defaultKeyField="key";static defaultLabelField="label";static defaultSelectedLabelField="selectedLabel";static defaultDescriptionField="description";constructor(scope,optionsString){this.scope=scope;const $parse=this.constructor.$parse,MATCHES=this.constructor.MATCHES;let match;if(!(match=optionsString.match(this.constructor.OPTIONS_REGEXP)))throw new Error(`Bad rgSelect expression format. Expected: [{item}] [[as] item.text] [select as item.selectLabel] [describe as {item.description}] [for] {item} in {items|dataSource(query)} [track by item.id], Received: ${optionsString}`);this.hasItemGetter=Boolean(match[MATCHES.ITEM]&&match[MATCHES.LABEL]),this.itemGetter=$parse(match[MATCHES.ITEM]),this.labelGetter=match[MATCHES.LABEL]&&$parse(match[MATCHES.LABEL])||this.itemGetter,this.selectedLabelGetter=match[MATCHES.SELECTED_LABEL]&&$parse(match[MATCHES.SELECTED_LABEL]),this.descriptionGetter=match[MATCHES.DESCRIPTION]&&$parse(match[MATCHES.DESCRIPTION]),this.optionVariableName=match[MATCHES.OPTION],this.datasourceGetter=$parse(match[MATCHES.ITEMS]),this.trackByGetter=match[MATCHES.TRACK]&&$parse(match[MATCHES.TRACK]),this.datasourceIsFunction=match[MATCHES.ITEMS].indexOf("(")>0}getProperty(option,getter){if(getter){const locals={};return locals[this.optionVariableName]=option,getter.call(this,this.scope,locals)}}getValue(option){if(!this.hasItemGetter)return option;const value=this.getProperty(option,this.itemGetter);return void 0===value?option:value}getOptionByValue(value,options){if(!this.hasItemGetter)return value;const matchedOptions=options.filter((option=>{const optionValue=this.getValue(option);return"object"==typeof value?deep_equal_default()(optionValue,value):optionValue===value}));if(matchedOptions.length>1)throw new Error(`Error(rg-select): You can not have two options with same value(${function toString(it){return"object"==typeof it?JSON.stringify(it):String(it)}(value)})`);return matchedOptions[0]}getKey(option){return this.getProperty(option,this.trackByGetter)||option[this.constructor.defaultKeyField]||option}getLabel(option){const optionStringValue="string"==typeof option?option:null;return this.getProperty(option,this.labelGetter)||option[this.constructor.defaultLabelField]||optionStringValue}getSelectedLabel(option){return this.getProperty(option,this.selectedLabelGetter)||option[this.constructor.defaultSelectedLabelField]}getDescription(option){return this.getProperty(option,this.descriptionGetter)||option[this.constructor.defaultDescriptionField]}getOptions(query,skip){return this.datasourceGetter(this.scope,{query:query,skip:skip})}}const angularModule=angular_default().module("Ring.select.options",[]);angularModule.factory("SelectOptions",["$parse",function SelectOptionsFactory($parse){return Options.$parse=$parse,Options}]);var select_ng_options=angularModule.name;function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var select_ng_lazy=class SelectLazy{constructor(container,props,ctrl,type,selectRef){this.container=container,this.ctrl=ctrl,this.props=props||{},this.type=type,this.node=container,this.selectInstance=null,this.selectRef=node=>{this.selectInstance=node,selectRef(node)},this._popup={isVisible:angular_default().noop},this.attachEvents(),this.render()}onClick=()=>{this._clickHandler()};rerender(){let props=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(const prop in props)if(props.hasOwnProperty(prop)){if(props[prop]==this.props[prop])break;return void this.render(props)}}attachEvents(){this.container.addEventListener("click",this.onClick,{capture:!0})}detachEvents(){this.container.removeEventListener("click",this.onClick,{capture:!0})}render(props){if(this.reactSelect=react.createElement(select_select.r,_extends({},Object.assign({},this.props,props||{}),{ref:this.selectRef})),this.props=this.reactSelect.props,"dropdown"!==this.type){const ReactDOMServer=__webpack_require__("./node_modules/react-dom/server.browser.js");this.container.innerHTML=ReactDOMServer.renderToString(this.reactSelect)}}_clickHandler(){this.detachEvents(),"dropdown"===this.type?(0,react_render_adapter.sY)((0,react.cloneElement)(this.reactSelect,{ref:node=>{this.selectRef(node),node?._openPopupIfClosed?.()}}),this.container):(0,react_render_adapter.ZB)(this.reactSelect,this.container)}};function select_ng_extends(){return select_ng_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},select_ng_extends.apply(this,arguments)}const select_ng_angularModule=angular_default().module("Ring.select",[select_ng_options,message_bundle_ng.Z]);select_ng_angularModule.directive("rgSelect",(function rgSelectDirective(){const types={input:select_select.default.Type.INPUT,button:select_select.default.Type.BUTTON,dropdown:select_select.default.Type.CUSTOM,suggest:select_select.default.Type.INPUT},sizes={FULL:select_select.default.Size.FULL,S:select_select.default.Size.S,M:select_select.default.Size.M,L:select_select.default.Size.L};return{scope:{ngModel:"=",selectType:"@",lazy:"=?",withInfiniteScroll:"=?",infiniteScrollPackSize:"@",options:"@",optionsScope:"=",label:"@",selectedLabel:"@",externalFilter:"=?",filter:"=?",tags:"=?",multiple:"=?",clear:"=?",onSelect:"&",onDeselect:"&",onOpen:"&",onClose:"&",onChange:"&",notFoundMessage:"@",loadingMessage:"@",config:"=?",configAutoUpdate:"=",selectInstance:"=?",size:"@",dir:"@"},bindToController:!0,controllerAs:"selectCtrl",require:["?ngModel","rgSelect"],link:function link(scope,iElement,iAttrs,ctrls){const ngModelCtrl=ctrls[0];ctrls[1].setNgModelCtrl(ngModelCtrl)},controller:["$q","$scope","$element","$attrs","$timeout","SelectOptions","RingMessageBundle",function controller($q,$scope,$element,$attrs,$timeout,SelectOptions,RingMessageBundle){const ctrl=this,element=$element[0],container=document.createElement("span"),infiniteScrollPackSize=Number(ctrl.infiniteScrollPackSize)||(ctrl.withInfiniteScroll?50:0);ctrl.selectInstance=null,ctrl.ngModelCtrl=null,ctrl.query=null,ctrl.dataReceived=!1,ctrl.skipNextModelSync=!1;const scope=ctrl.optionsScope?ctrl.optionsScope:$scope.$parent;function memorizeOptions(options,skip){return ctrl.loadedOptions&&skip>0?(ctrl.loadedOptions=ctrl.loadedOptions.concat(options),ctrl.stopLoadingNewOptions=0===options.length&&infiniteScrollPackSize):ctrl.loadedOptions=options,ctrl.lastSkip=skip,ctrl.loadedOptions}function getType(){return ctrl.selectType||$attrs.type}function isInDialog(){const dialogContainer=document.querySelector("[data-anchor=dialog-container][data-in-sidebar=false]");return dialogContainer&&dialogContainer.contains(element)}ctrl.setNgModelCtrl=ngModelCtrl=>{ctrl.ngModelCtrl=ngModelCtrl},ctrl.syncSelectToNgModel=selectedValue=>{function valueOf(option){return option&&option.originalModel?ctrl.optionsParser.getValue(option.originalModel):ctrl.optionsParser.getValue(option)}ctrl.ngModelCtrl&&(ctrl.skipNextModelSync=!0,"suggest"===getType()?ctrl.ngModelCtrl.$setViewValue(selectedValue.label):Array.isArray(selectedValue)?ctrl.ngModelCtrl.$setViewValue(selectedValue.map(valueOf)):ctrl.ngModelCtrl.$setViewValue(valueOf(selectedValue)))},ctrl.convertNgModelToSelect=model=>{function convertItem(modelValue){let item=ctrl.optionsParser.getOptionByValue(modelValue,ctrl.loadedOptions||[]);return void 0===item&&(item=modelValue),angular_default().extend({key:ctrl.optionsParser.getKey(item),label:ctrl.optionsParser.getLabel(item),selectedLabel:ctrl.optionsParser.getSelectedLabel(item),description:ctrl.optionsParser.getDescription(item),originalModel:item},"object"==typeof item?item:null)}if(null!=model)return Array.isArray(model)?model.map(convertItem):convertItem(model)};let lastQuery=null,inProcessQueries=0;ctrl.getOptions=(query,skip)=>$q.when(ctrl.optionsParser.getOptions(query,skip));let loaderDelayTimeout=null;function setSelectModel(newValue){ctrl.skipNextModelSync?ctrl.skipNextModelSync=!1:ctrl.ngModelCtrl&&reRenderSelect({selected:ctrl.convertNgModelToSelect(newValue)})}function isSelectPopupOpen(){return ctrl.selectInstance._popup.isVisible()}function selectRef(instance){null!=instance&&(ctrl.selectInstance=instance)}function reRenderSelect(props){ctrl.selectInstance?.node&&ctrl.selectInstance.rerender({...props,ref:selectRef})}function optionsWatcher(newValue,value){memorizeOptions(newValue,0),newValue!==value&&ctrl.ngModelCtrl&&setSelectModel(ctrl.ngModelCtrl.$modelValue)}function createDefaultConfig(){const defaultConfig={label:ctrl.label||RingMessageBundle.select_label(),selectedLabel:ctrl.selectedLabel,allowAny:"suggest"===getType(),hideArrow:"suggest"===getType(),filter:ctrl.filter,tags:ctrl.tags,dir:ctrl.dir,multiple:ctrl.multiple,popupClassName:$attrs.popupClass,clear:ctrl.clear,ringPopupTarget:isInDialog()?"dialog-ng-popup-container":null,renderOptimization:"dropdown"!==getType(),type:types[getType()]||types.material,loadingMessage:ctrl.loadingMessage||RingMessageBundle.select_loading(),notFoundMessage:ctrl.notFoundMessage||RingMessageBundle.select_options_not_found(),targetElement:"dropdown"===getType()?element:null,size:sizes[ctrl.size]||sizes.FULL,height:controls_height.oW.S,onBeforeOpen:()=>{!function resetMemorizedOptions(){ctrl.lastSkip=-1,ctrl.loadedOptions=[],ctrl.stopLoadingNewOptions=!1}(),ctrl.loadOptionsToSelect(ctrl.query),$scope.$evalAsync((()=>{}))},onOpen:()=>{$scope.$evalAsync((()=>{ctrl.onOpen()}))},onClose:()=>{ctrl.query=null,$scope.$evalAsync((()=>{ctrl.onClose()}))},onSelect:(selected,event)=>{$scope.$evalAsync((()=>{ctrl.onSelect({selected:selected,event:event})}))},onDeselect:(deselected,event)=>{$scope.$evalAsync((()=>{ctrl.onDeselect({deselected:deselected,event:event})}))},onChange:(selected,event)=>{ctrl.syncSelectToNgModel(selected),$scope.$evalAsync((()=>{ctrl.onChange({selected:selected,event:event})}))},onFilter:query=>{$scope.$evalAsync((()=>{ctrl.query=query,ctrl.externalFilter&&ctrl.loadOptionsToSelect(query),ctrl.onFilter&&ctrl.onFilter(query)}))},reloadOptions:query=>{$scope.$evalAsync((()=>{ctrl.loadOptionsToSelect(query||ctrl.query)}))},getLoadedOptions:()=>ctrl.loadedOptions};return infiniteScrollPackSize&&(defaultConfig.onLoadMore=()=>{0===inProcessQueries&&$scope.$evalAsync((()=>{ctrl.loadOptionsToSelect(ctrl.query)}))}),defaultConfig}ctrl.showLoader=()=>{"suggest"!==getType()&&reRenderSelect({loading:!0})},ctrl.loadOptionsToSelect=query=>{if(ctrl.stopLoadingNewOptions&&query===lastQuery)return $q.resolve();ctrl.stopLoadingNewOptions=!1;const skip=function getCurrentSkipParameter(query,prevQuery){return infiniteScrollPackSize&&query===prevQuery&&ctrl.loadedOptions?ctrl.lastSkip<0?0:ctrl.lastSkip+infiniteScrollPackSize:0}(query,lastQuery);return lastQuery=query,$timeout.cancel(loaderDelayTimeout),ctrl.dataReceived?loaderDelayTimeout=$timeout(ctrl.showLoader,150):ctrl.showLoader(),inProcessQueries++,ctrl.getOptions(query,skip).then((results=>{if(inProcessQueries--,query!==lastQuery)return;if(skip&&-1!==ctrl.lastSkip&&skip!==ctrl.lastSkip+infiniteScrollPackSize&&ctrl.infiniteScrollPackSize)return;const items=memorizeOptions(results.data||results,skip).map(ctrl.convertNgModelToSelect);$timeout.cancel(loaderDelayTimeout),ctrl.dataReceived=!0,reRenderSelect({data:items,loading:!1})})).catch((error=>(inProcessQueries--,$timeout.cancel(loaderDelayTimeout),reRenderSelect({loading:!1}),$q.reject(error))))},ctrl.$onDestroy=()=>{(0,react_render_adapter.uy)(container),function removeDefaultConfigPropFromUserConfig(){ctrl.defaultConfig&&ctrl.config&&Object.keys(ctrl.defaultConfig).filter((propName=>ctrl.config[propName]===ctrl.defaultConfig[propName])).forEach((propName=>{delete ctrl.config[propName]}))}()},ctrl.$onInit=()=>{ctrl.optionsParser=new SelectOptions(scope,ctrl.options),ctrl.lazy=!ctrl.hasOwnProperty("lazy")||ctrl.lazy,ctrl.externalFilter&&(ctrl.filter=ctrl.filter||{},ctrl.filter.fn=()=>!0),ctrl.defaultConfig=createDefaultConfig(),ctrl.config=angular_default().extend({},ctrl.defaultConfig,ctrl.config||{}),"suggest"===getType()||"input"===getType()?(0,react_render_adapter.sY)(react.createElement(select_select.r,select_ng_extends({ref:selectRef},ctrl.config)),container):ctrl.selectInstance=new select_ng_lazy(container,ctrl.config,ctrl,getType(),selectRef),element.appendChild(container),ctrl.lazy||(ctrl.optionsParser.datasourceIsFunction?ctrl.loadOptionsToSelect(ctrl.query):$scope.$watch((()=>ctrl.optionsParser.getOptions(ctrl.query,0)),optionsWatcher,!0)),function syncNgModelToSelect(){$scope.$watch((()=>ctrl.ngModelCtrl&&ctrl.ngModelCtrl.$modelValue),setSelectModel,!0)}(),function syncDisabled(){$attrs.$observe("disabled",(newValue=>{reRenderSelect({disabled:newValue})}))}(),function syncMultiple(){$scope.$watch((()=>ctrl.multiple),(()=>{angular_default().isDefined(ctrl.multiple)&&reRenderSelect({multiple:ctrl.multiple})}))}(),ctrl.configAutoUpdate&&function syncConfig(){$scope.$watchCollection((()=>ctrl.config),((config,old)=>{config!==old&&reRenderSelect(config)}))}(),function attachDropdownIfNeeded(){if("dropdown"===getType()){const handler=()=>{ctrl.selectInstance._clickHandler()};element.addEventListener("click",handler),element.addEventListener("keydown",(event=>{const key=(0,get_event_key.Z)(event),modifier=event.ctrlKey||event.altKey||event.metaKey||event.shiftKey;("Enter"===key&&!modifier||" "===key)&&(isSelectPopupOpen()||(handler(),event.preventDefault(),event.stopPropagation()))}))}}(),function listenToRouteChanges(){$scope.$on("$locationChangeSuccess",(()=>{isSelectPopupOpen()&&ctrl.selectInstance._hidePopup()}))}()}}]}}));var select_ng=select_ng_angularModule.name},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/loader-inline/loader-inline.css":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_dark_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/variables_dark.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/global.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_4__.default),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_dark_css__WEBPACK_IMPORTED_MODULE_2__.default,"",!0),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_3__.default,"",!0),___CSS_LOADER_EXPORT___.push([module.id,":root {\n  /* stylelint-disable-next-line color-no-hex */\n  --ring-loader-inline-stops: #ff00eb, #bd3bff, #008eff, #58ba00, #f48700, #ff00eb;\n}\n\n."+_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_dark_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.dark+',\n.ring-ui-theme-dark {\n  /* stylelint-disable-next-line color-no-hex */\n  --ring-loader-inline-stops: #ff2eef, #d178ff, #289fff, #88d444, #ffe000, #ff2eef;\n}\n\n@keyframes spin_c5fc {\n  0% {\n    transform: rotate(0);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes pulse_d8f9 {\n  0% {\n    transform: scale(1);\n  }\n\n  100% {\n    transform: scale(1.41667);\n  }\n}\n\n.loader_f65a,\n.ring-loader-inline {\n  /* needed for better backward-compatibility */\n\n  position: relative;\n\n  display: inline-block;\n\n  overflow: hidden;\n\n  transform: rotate(0);\n  animation: spin_c5fc 1s linear infinite;\n  vertical-align: -3px;\n\n  border-radius: 8px;\n}\n\n.loader_f65a,\n  .ring-loader-inline,\n  .loader_f65a::after,\n  .ring-loader-inline::after {\n    transform-origin: 50% 50%;\n  }\n\n.loader_f65a::after, .ring-loader-inline::after {\n    display: block;\n\n    width: 16px;\n    height: 16px;\n\n    content: "";\n    animation: pulse_d8f9 0.85s cubic-bezier(0.68, 0, 0.74, 0.74) infinite alternate;\n\n    background-image: conic-gradient(#ff00eb, #bd3bff, #008eff, #58ba00, #f48700, #ff00eb);\n\n    background-image: conic-gradient(var(--ring-loader-inline-stops));\n    -webkit-mask-image: radial-gradient(8px, transparent 71.875%, var(--ring-content-background-color) 71.875%);\n            mask-image: radial-gradient(8px, transparent 71.875%, var(--ring-content-background-color) 71.875%);\n  }\n\n.children_d816 {\n  margin-left: 4px;\n}\n',"",{version:3,sources:["webpack://./src/loader-inline/loader-inline.css"],names:[],mappings:"AAKA;EACE,6CAA6C;EAC7C,gFAAgF;AAClF;;AAEA;;EAEE,6CAA6C;EAC7C,gFAAgF;AAClF;;AAEA;EACE;IACE,oBAAoB;EACtB;;EAEA;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE;IACE,mBAAmB;EACrB;;EAEA;IACE,yBAA+B;EACjC;AACF;;AAEA;;EAEE,6CAA6C;;EAE7C,kBAAkB;;EAElB,qBAAqB;;EAErB,gBAAgB;;EAEhB,oBAAoB;EACpB,uCAAkC;EAClC,oBAAoB;;EAEpB,kBAAmB;AAmBrB;;AAjBE;;;;IAEE,yBAAyB;EAC3B;;AAEA;IACE,cAAc;;IAEd,WAAqB;IACrB,YAAsB;;IAEtB,WAAW;IACX,gFAA2E;;IAE3E,sFAAiE;;IAAjE,iEAAiE;IACjE,2GAAoG;YAApG,mGAAoG;EACtG;;AAGF;EACE,gBAA2B;AAC7B",sourcesContent:['@import "../global/variables.css";\n\n@value dark from "../global/variables_dark.css";\n@value unit from "../global/global.css";\n\n:root {\n  /* stylelint-disable-next-line color-no-hex */\n  --ring-loader-inline-stops: #ff00eb, #bd3bff, #008eff, #58ba00, #f48700, #ff00eb;\n}\n\n.dark,\n:global(.ring-ui-theme-dark) {\n  /* stylelint-disable-next-line color-no-hex */\n  --ring-loader-inline-stops: #ff2eef, #d178ff, #289fff, #88d444, #ffe000, #ff2eef;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes pulse {\n  0% {\n    transform: scale(1);\n  }\n\n  100% {\n    transform: scale(calc(17 / 12));\n  }\n}\n\n.loader,\n:global(.ring-loader-inline) {\n  /* needed for better backward-compatibility */\n\n  position: relative;\n\n  display: inline-block;\n\n  overflow: hidden;\n\n  transform: rotate(0);\n  animation: spin 1s linear infinite;\n  vertical-align: -3px;\n\n  border-radius: unit;\n\n  &,\n  &::after {\n    transform-origin: 50% 50%;\n  }\n\n  &::after {\n    display: block;\n\n    width: calc(unit * 2);\n    height: calc(unit * 2);\n\n    content: "";\n    animation: pulse 0.85s cubic-bezier(0.68, 0, 0.74, 0.74) infinite alternate;\n\n    background-image: conic-gradient(var(--ring-loader-inline-stops));\n    mask-image: radial-gradient(unit, transparent 71.875%, var(--ring-content-background-color) 71.875%);\n  }\n}\n\n.children {\n  margin-left: calc(unit / 2);\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={dark:""+_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_dark_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.dark,unit:""+_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_3__.default.locals.unit,loader:"loader_f65a",spin:"spin_c5fc",pulse:"pulse_d8f9",children:"children_d816"},__webpack_exports__.default=___CSS_LOADER_EXPORT___},"./src/loader-inline/loader-inline.css":function(module,__unused_webpack_exports,__webpack_require__){var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/loader-inline/loader-inline.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}}}]);
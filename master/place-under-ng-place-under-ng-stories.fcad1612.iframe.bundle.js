"use strict";(globalThis.webpackChunk_jetbrains_ring_ui=globalThis.webpackChunk_jetbrains_ring_ui||[]).push([[6500],{"./.storybook/angular-decorator.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,i:()=>APP_NAME});var angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/angular/index.js"),angular__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("@storybook/preview-api");const APP_NAME="ring-ui.story.app",angularDecorator=story=>{const node=document.createElement("div");node.innerHTML=story();const app=angular__WEBPACK_IMPORTED_MODULE_0___default().bootstrap(node,[APP_NAME],{strictDi:!0});return(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>()=>{app.get("$rootScope").$destroy(),node.innerHTML=""})),node},__WEBPACK_DEFAULT_EXPORT__=()=>angularDecorator},"./src/place-under-ng/place-under-ng.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{basic:()=>basic,default:()=>__WEBPACK_DEFAULT_EXPORT__});var angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/angular/index.js"),angular__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__),_storybook_angular_decorator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.storybook/angular-decorator.js"),_global_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/global/dom.ts"),_place_under_ng__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/place-under-ng/place-under-ng.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Legacy Angular/Place Under Ng",decorators:[(0,_storybook_angular_decorator__WEBPACK_IMPORTED_MODULE_1__.Z)()],parameters:{storySource:{source:"import angular from 'angular';\n\nimport angularDecorator, {APP_NAME} from '../../.storybook/angular-decorator';\n\nimport {getDocumentScrollTop} from '../global/dom';\n\nimport RingPlaceUnder from './place-under-ng';\n\nexport default {\n  title: 'Legacy Angular/Place Under Ng',\n  decorators: [angularDecorator()],\n\n  parameters: {\n    notes: `\nDisplays a sidebar that fills the entire right half of its container.\nTo make sidebar have fixed positioning under some other element (e.g. toolbar),\na selector for that element should be passed as placeUnderSibling parameter.\n    `\n  }\n};\n\nexport const basic = () => {\n  angular.module(APP_NAME, [RingPlaceUnder]);\n\n  window.addEventListener('scroll', () => {\n    const target = document.querySelector('.target-element');\n\n    const scrolledTop = getDocumentScrollTop();\n    if (scrolledTop > 30) {\n      target.style.position = 'fixed';\n    } else {\n      target.style.position = 'static';\n    }\n  });\n\n  return `\n      <div class=\"head\">Scroll down to see the effect</div>\n      <div rg-place-under=\".target-element\" class=\"place-under\">\n        Element to be positioned under test element\n      </div>\n\n      <div class=\"target-element\">\n        Test element to sync with.\n      </div>\n\n      <div class=\"scrollable\">\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n        tempor\n        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n        quis nostrud\n        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n        dolore eu fugiat nulla pariatur.\n        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n        officia deserunt mollit anim id est laborum.\n      </div>\n    `;\n};\n\nbasic.storyName = 'Place Under Ng';\n\nbasic.parameters = {\n  storyStyles: `\n<style>\n  .place-under {\n    position: fixed;\n    top: 0;\n    right: 0;\n    width: 50%;\n    padding: 16px;\n    background-color: var(--ring-selected-background-color);\n  }\n\n  .head {\n    height: 30px;\n  }\n\n  .target-element {\n    position: static;\n    top: 0;\n    width: 100%;\n    padding: 16px;\n    background-color: var(--ring-hover-background-color);\n  }\n\n  .scrollable {\n    height: 1000px;\n    padding: 16px;\n    padding-top: 64px;\n    background-color: var(--ring-sidebar-background-color);\n  }\n</style>\n      `\n};\n",locationsMap:{basic:{startLoc:{col:21,line:22},endLoc:{col:1,line:58},startBody:{col:21,line:22},endBody:{col:1,line:58}}}},notes:"\nDisplays a sidebar that fills the entire right half of its container.\nTo make sidebar have fixed positioning under some other element (e.g. toolbar),\na selector for that element should be passed as placeUnderSibling parameter.\n    "}},basic=()=>(angular__WEBPACK_IMPORTED_MODULE_0___default().module(_storybook_angular_decorator__WEBPACK_IMPORTED_MODULE_1__.i,[_place_under_ng__WEBPACK_IMPORTED_MODULE_2__.Z]),window.addEventListener("scroll",(()=>{const target=document.querySelector(".target-element"),scrolledTop=(0,_global_dom__WEBPACK_IMPORTED_MODULE_3__.c6)();target.style.position=scrolledTop>30?"fixed":"static"})),'\n      <div class="head">Scroll down to see the effect</div>\n      <div rg-place-under=".target-element" class="place-under">\n        Element to be positioned under test element\n      </div>\n\n      <div class="target-element">\n        Test element to sync with.\n      </div>\n\n      <div class="scrollable">\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n        tempor\n        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n        quis nostrud\n        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n        dolore eu fugiat nulla pariatur.\n        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n        officia deserunt mollit anim id est laborum.\n      </div>\n    ');basic.storyName="Place Under Ng",basic.parameters={storyStyles:"\n<style>\n  .place-under {\n    position: fixed;\n    top: 0;\n    right: 0;\n    width: 50%;\n    padding: 16px;\n    background-color: var(--ring-selected-background-color);\n  }\n\n  .head {\n    height: 30px;\n  }\n\n  .target-element {\n    position: static;\n    top: 0;\n    width: 100%;\n    padding: 16px;\n    background-color: var(--ring-hover-background-color);\n  }\n\n  .scrollable {\n    height: 1000px;\n    padding: 16px;\n    padding-top: 64px;\n    background-color: var(--ring-sidebar-background-color);\n  }\n</style>\n      "}},"./src/place-under-ng/place-under-ng.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/angular/index.js"),angular__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__),just_debounce_it__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/just-debounce-it/index.mjs"),element_resize_detector__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/element-resize-detector/src/element-resize-detector.js"),element_resize_detector__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(element_resize_detector__WEBPACK_IMPORTED_MODULE_1__),_global_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/global/dom.ts");const resizeDetector=element_resize_detector__WEBPACK_IMPORTED_MODULE_1___default()(),angularModule=angular__WEBPACK_IMPORTED_MODULE_0___default().module("Ring.place-under",[]);angularModule.directive("rgPlaceUnder",["$window","getClosestElementWithCommonParent","rgPlaceUnderHelper",function rgPlaceUnderDirective($window,getClosestElementWithCommonParent,rgPlaceUnderHelper){return{restrict:"A",link:function link(scope,iElement,iAttrs){const element=iElement[0],synchronizer=rgPlaceUnderHelper.createPositionSynchronizer(element,iAttrs,scope);iAttrs.$observe("rgPlaceUnder",(function startSyncing(placeUnderSelector){placeUnderSelector&&scope.$evalAsync((()=>{const syncWith=getClosestElementWithCommonParent(element,placeUnderSelector);if(!syncWith)throw new Error("rgPlaceUnder cannot find element to sync with.");synchronizer.syncPositionWith(syncWith)}))}))}}}]),angularModule.factory("getClosestElementWithCommonParent",(function getClosestElementWithCommonParentFactory(){return function getClosestElementWithCommonParent(currentElement,selector){const parent=currentElement.parentNode;return parent?parent.querySelector(selector)||getClosestElementWithCommonParent(parent,selector):null}})),angularModule.factory("rgPlaceUnderHelper",["$window",$window=>({DEBOUNCE_INTERVAL:10,AFTER_SCROLL_RECHECK_INTERVAL:50,HEIGHT_CHECK_INTERVAL:50,createPositionSynchronizer:(element,iAttrs,scope)=>{const topOffset=parseInt(iAttrs.placeTopOffset,10)||0,syncHeight=iAttrs.syncHeight;let syncBottom=[],removeScrollListener=[];function removeScrollListeners(){removeScrollListener.map((cb=>cb())),removeScrollListener=[]}return iAttrs.syncBottom&&(syncBottom=iAttrs.syncBottom.split(",")),scope.$on("$destroy",removeScrollListeners),{waitForNonZeroHeight:function waitForNonZeroHeight(elementToCheck){return new Promise((resolve=>{!function checkElementHeight(){0===elementToCheck.offsetHeight?$window.setTimeout(checkElementHeight,50):resolve()}()}))},onScroll:function onScroll(syncElement){const documentScrollTop=(0,_global_dom__WEBPACK_IMPORTED_MODULE_2__.c6)(),documentOffsetHeight=$window.document.documentElement&&$window.document.documentElement.offsetHeight||$window.document.body.offsetHeight,syncedElementHeight=syncElement.offsetHeight,bottom=syncElement.getBoundingClientRect().top+documentScrollTop+syncedElementHeight,margin=Math.max(bottom-documentScrollTop,syncedElementHeight);if(element.style.marginTop=`${margin+topOffset}px`,syncHeight){let bottomOffset=0;if(syncBottom.length)for(let i=0;i<syncBottom.length;i++){const syncBottomParams=syncBottom[i].split(";"),elem=$window.document.querySelector(syncBottomParams[0]),extraMargin=syncBottomParams[1]?parseInt(syncBottomParams[1],10):0;if(elem){const boundingRect=elem.getBoundingClientRect();if(0===boundingRect.top)continue;const marginTop=parseInt($window.getComputedStyle(elem).getPropertyValue("margin-top"),10);bottomOffset=documentOffsetHeight-boundingRect.top+marginTop+extraMargin,bottomOffset<0&&(bottomOffset=0);break}}element.style.height=`calc(100% - ${parseInt(element.style.marginTop,10)+bottomOffset}px)`}},syncPositionWith:function syncPositionWith(syncElement){removeScrollListeners();const afterScrollFinishRecheck=(0,just_debounce_it__WEBPACK_IMPORTED_MODULE_3__.Z)((()=>this.onScroll(syncElement)),50),sidebarScrollListener=(0,just_debounce_it__WEBPACK_IMPORTED_MODULE_3__.Z)((()=>{this.onScroll(syncElement),afterScrollFinishRecheck()}),10);this.waitForNonZeroHeight(syncElement).then(sidebarScrollListener),$window.addEventListener("scroll",sidebarScrollListener),removeScrollListener.push((()=>{$window.removeEventListener("scroll",sidebarScrollListener)})),removeScrollListener.push(scope.$watch("show",sidebarScrollListener)),removeScrollListener.push(scope.$on("rgPlaceUnder:sync",sidebarScrollListener));const elementToHeightListening=iAttrs.listenToHeightChange?$window.document.querySelector(iAttrs.listenToHeightChange):$window.document.body;resizeDetector.listenTo(elementToHeightListening,sidebarScrollListener),removeScrollListener.push((()=>resizeDetector.removeAllListeners(elementToHeightListening)))}}}})]);const __WEBPACK_DEFAULT_EXPORT__=angularModule.name},"./node_modules/just-debounce-it/index.mjs":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>functionDebounce});var functionDebounce=function debounce(fn,wait,callFirst){var timeout=null,debouncedFn=null,clear=function(){timeout&&(clearTimeout(timeout),debouncedFn=null,timeout=null)},debounceWrapper=function(){if(!wait)return fn.apply(this,arguments);var context=this,args=arguments,callNow=callFirst&&!timeout;return clear(),debouncedFn=function(){fn.apply(context,args)},timeout=setTimeout((function(){if(timeout=null,!callNow){var call=debouncedFn;return debouncedFn=null,call()}}),wait),callNow?debouncedFn():void 0};return debounceWrapper.cancel=clear,debounceWrapper.flush=function(){var call=debouncedFn;clear(),call&&call()},debounceWrapper}}}]);
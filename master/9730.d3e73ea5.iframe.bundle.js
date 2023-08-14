/*! For license information please see 9730.d3e73ea5.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_jetbrains_ring_ui=self.webpackChunk_jetbrains_ring_ui||[]).push([[9730],{"./node_modules/@jetbrains/icons/search.js":function(module){module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g><path d="M14.64,13.36,10.13,8.85A4.94,4.94,0,0,0,11,6a5,5,0,1,0-2.17,4.12l4.51,4.51ZM2.42,6A3.6,3.6,0,1,1,6,9.61,3.6,3.6,0,0,1,2.42,6Z"/></g></svg>'},"./node_modules/focus-trap/dist/focus-trap.esm.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{v:function(){return createFocusTrap}});var candidateSelectors=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],candidateSelector=candidateSelectors.join(","),NoElement="undefined"==typeof Element,matches=NoElement?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,getRootNode=!NoElement&&Element.prototype.getRootNode?function(element){var _element$getRootNode;return null==element||null===(_element$getRootNode=element.getRootNode)||void 0===_element$getRootNode?void 0:_element$getRootNode.call(element)}:function(element){return null==element?void 0:element.ownerDocument},isInert=function isInert(node,lookUp){var _node$getAttribute;void 0===lookUp&&(lookUp=!0);var inertAtt=null==node||null===(_node$getAttribute=node.getAttribute)||void 0===_node$getAttribute?void 0:_node$getAttribute.call(node,"inert");return""===inertAtt||"true"===inertAtt||lookUp&&node&&isInert(node.parentNode)},getCandidates=function getCandidates(el,includeContainer,filter){if(isInert(el))return[];var candidates=Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));return includeContainer&&matches.call(el,candidateSelector)&&candidates.unshift(el),candidates=candidates.filter(filter)},getCandidatesIteratively=function getCandidatesIteratively(elements,includeContainer,options){for(var candidates=[],elementsToCheck=Array.from(elements);elementsToCheck.length;){var element=elementsToCheck.shift();if(!isInert(element,!1))if("SLOT"===element.tagName){var assigned=element.assignedElements(),nestedCandidates=getCandidatesIteratively(assigned.length?assigned:element.children,!0,options);options.flatten?candidates.push.apply(candidates,nestedCandidates):candidates.push({scopeParent:element,candidates:nestedCandidates})}else{matches.call(element,candidateSelector)&&options.filter(element)&&(includeContainer||!elements.includes(element))&&candidates.push(element);var shadowRoot=element.shadowRoot||"function"==typeof options.getShadowRoot&&options.getShadowRoot(element),validShadowRoot=!isInert(shadowRoot,!1)&&(!options.shadowRootFilter||options.shadowRootFilter(element));if(shadowRoot&&validShadowRoot){var _nestedCandidates=getCandidatesIteratively(!0===shadowRoot?element.children:shadowRoot.children,!0,options);options.flatten?candidates.push.apply(candidates,_nestedCandidates):candidates.push({scopeParent:element,candidates:_nestedCandidates})}else elementsToCheck.unshift.apply(elementsToCheck,element.children)}}return candidates},hasTabIndex=function hasTabIndex(node){return!isNaN(parseInt(node.getAttribute("tabindex"),10))},getTabIndex=function getTabIndex(node){if(!node)throw new Error("No node provided");return node.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName)||function isContentEditable(node){var _node$getAttribute2,attValue=null==node||null===(_node$getAttribute2=node.getAttribute)||void 0===_node$getAttribute2?void 0:_node$getAttribute2.call(node,"contenteditable");return""===attValue||"true"===attValue}(node))&&!hasTabIndex(node)?0:node.tabIndex},sortOrderedTabbables=function sortOrderedTabbables(a,b){return a.tabIndex===b.tabIndex?a.documentOrder-b.documentOrder:a.tabIndex-b.tabIndex},isInput=function isInput(node){return"INPUT"===node.tagName},isNonTabbableRadio=function isNonTabbableRadio(node){return function isRadio(node){return isInput(node)&&"radio"===node.type}(node)&&!function isTabbableRadio(node){if(!node.name)return!0;var radioSet,radioScope=node.form||getRootNode(node),queryRadios=function queryRadios(name){return radioScope.querySelectorAll('input[type="radio"][name="'+name+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)radioSet=queryRadios(window.CSS.escape(node.name));else try{radioSet=queryRadios(node.name)}catch(err){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",err.message),!1}var checked=function getCheckedRadio(nodes,form){for(var i=0;i<nodes.length;i++)if(nodes[i].checked&&nodes[i].form===form)return nodes[i]}(radioSet,node.form);return!checked||checked===node}(node)},isZeroArea=function isZeroArea(node){var _node$getBoundingClie=node.getBoundingClientRect(),width=_node$getBoundingClie.width,height=_node$getBoundingClie.height;return 0===width&&0===height},isHidden=function isHidden(node,_ref){var displayCheck=_ref.displayCheck,getShadowRoot=_ref.getShadowRoot;if("hidden"===getComputedStyle(node).visibility)return!0;var nodeUnderDetails=matches.call(node,"details>summary:first-of-type")?node.parentElement:node;if(matches.call(nodeUnderDetails,"details:not([open]) *"))return!0;if(displayCheck&&"full"!==displayCheck&&"legacy-full"!==displayCheck){if("non-zero-area"===displayCheck)return isZeroArea(node)}else{if("function"==typeof getShadowRoot){for(var originalNode=node;node;){var parentElement=node.parentElement,rootNode=getRootNode(node);if(parentElement&&!parentElement.shadowRoot&&!0===getShadowRoot(parentElement))return isZeroArea(node);node=node.assignedSlot?node.assignedSlot:parentElement||rootNode===node.ownerDocument?parentElement:rootNode.host}node=originalNode}if(function isNodeAttached(node){var _nodeRoot,_nodeRootHost,_nodeRootHost$ownerDo,_node$ownerDocument,nodeRoot=node&&getRootNode(node),nodeRootHost=null===(_nodeRoot=nodeRoot)||void 0===_nodeRoot?void 0:_nodeRoot.host,attached=!1;if(nodeRoot&&nodeRoot!==node)for(attached=!!(null!==(_nodeRootHost=nodeRootHost)&&void 0!==_nodeRootHost&&null!==(_nodeRootHost$ownerDo=_nodeRootHost.ownerDocument)&&void 0!==_nodeRootHost$ownerDo&&_nodeRootHost$ownerDo.contains(nodeRootHost)||null!=node&&null!==(_node$ownerDocument=node.ownerDocument)&&void 0!==_node$ownerDocument&&_node$ownerDocument.contains(node));!attached&&nodeRootHost;){var _nodeRoot2,_nodeRootHost2,_nodeRootHost2$ownerD;attached=!(null===(_nodeRootHost2=nodeRootHost=null===(_nodeRoot2=nodeRoot=getRootNode(nodeRootHost))||void 0===_nodeRoot2?void 0:_nodeRoot2.host)||void 0===_nodeRootHost2||null===(_nodeRootHost2$ownerD=_nodeRootHost2.ownerDocument)||void 0===_nodeRootHost2$ownerD||!_nodeRootHost2$ownerD.contains(nodeRootHost))}return attached}(node))return!node.getClientRects().length;if("legacy-full"!==displayCheck)return!0}return!1},isNodeMatchingSelectorFocusable=function isNodeMatchingSelectorFocusable(options,node){return!(node.disabled||isInert(node)||function isHiddenInput(node){return isInput(node)&&"hidden"===node.type}(node)||isHidden(node,options)||function isDetailsWithSummary(node){return"DETAILS"===node.tagName&&Array.prototype.slice.apply(node.children).some((function(child){return"SUMMARY"===child.tagName}))}(node)||function isDisabledFromFieldset(node){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName))for(var parentNode=node.parentElement;parentNode;){if("FIELDSET"===parentNode.tagName&&parentNode.disabled){for(var i=0;i<parentNode.children.length;i++){var child=parentNode.children.item(i);if("LEGEND"===child.tagName)return!!matches.call(parentNode,"fieldset[disabled] *")||!child.contains(node)}return!0}parentNode=parentNode.parentElement}return!1}(node))},isNodeMatchingSelectorTabbable=function isNodeMatchingSelectorTabbable(options,node){return!(isNonTabbableRadio(node)||getTabIndex(node)<0||!isNodeMatchingSelectorFocusable(options,node))},isValidShadowRootTabbable=function isValidShadowRootTabbable(shadowHostNode){var tabIndex=parseInt(shadowHostNode.getAttribute("tabindex"),10);return!!(isNaN(tabIndex)||tabIndex>=0)},sortByOrder=function sortByOrder(candidates){var regularTabbables=[],orderedTabbables=[];return candidates.forEach((function(item,i){var isScope=!!item.scopeParent,element=isScope?item.scopeParent:item,candidateTabindex=function getSortOrderTabIndex(node,isScope){var tabIndex=getTabIndex(node);return tabIndex<0&&isScope&&!hasTabIndex(node)?0:tabIndex}(element,isScope),elements=isScope?sortByOrder(item.candidates):element;0===candidateTabindex?isScope?regularTabbables.push.apply(regularTabbables,elements):regularTabbables.push(element):orderedTabbables.push({documentOrder:i,tabIndex:candidateTabindex,item:item,isScope:isScope,content:elements})})),orderedTabbables.sort(sortOrderedTabbables).reduce((function(acc,sortable){return sortable.isScope?acc.push.apply(acc,sortable.content):acc.push(sortable.content),acc}),[]).concat(regularTabbables)},isTabbable=function isTabbable(node,options){if(options=options||{},!node)throw new Error("No node provided");return!1!==matches.call(node,candidateSelector)&&isNodeMatchingSelectorTabbable(options,node)},focusableCandidateSelector=candidateSelectors.concat("iframe").join(","),isFocusable=function isFocusable(node,options){if(options=options||{},!node)throw new Error("No node provided");return!1!==matches.call(node,focusableCandidateSelector)&&isNodeMatchingSelectorFocusable(options,node)};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var activeFocusTraps_activateTrap=function activateTrap(trapStack,trap){if(trapStack.length>0){var activeTrap=trapStack[trapStack.length-1];activeTrap!==trap&&activeTrap.pause()}var trapIndex=trapStack.indexOf(trap);-1===trapIndex||trapStack.splice(trapIndex,1),trapStack.push(trap)},activeFocusTraps_deactivateTrap=function deactivateTrap(trapStack,trap){var trapIndex=trapStack.indexOf(trap);-1!==trapIndex&&trapStack.splice(trapIndex,1),trapStack.length>0&&trapStack[trapStack.length-1].unpause()},isTabEvent=function isTabEvent(e){return"Tab"===(null==e?void 0:e.key)||9===(null==e?void 0:e.keyCode)},isKeyForward=function isKeyForward(e){return isTabEvent(e)&&!e.shiftKey},isKeyBackward=function isKeyBackward(e){return isTabEvent(e)&&e.shiftKey},delay=function delay(fn){return setTimeout(fn,0)},findIndex=function findIndex(arr,fn){var idx=-1;return arr.every((function(value,i){return!fn(value)||(idx=i,!1)})),idx},valueOrHandler=function valueOrHandler(value){for(var _len=arguments.length,params=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)params[_key-1]=arguments[_key];return"function"==typeof value?value.apply(void 0,params):value},getActualTarget=function getActualTarget(event){return event.target.shadowRoot&&"function"==typeof event.composedPath?event.composedPath()[0]:event.target},internalTrapStack=[],createFocusTrap=function createFocusTrap(elements,userOptions){var trap,doc=(null==userOptions?void 0:userOptions.document)||document,trapStack=(null==userOptions?void 0:userOptions.trapStack)||internalTrapStack,config=_objectSpread2({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:isKeyForward,isKeyBackward:isKeyBackward},userOptions),state={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},getOption=function getOption(configOverrideOptions,optionName,configOptionName){return configOverrideOptions&&void 0!==configOverrideOptions[optionName]?configOverrideOptions[optionName]:config[configOptionName||optionName]},findContainerIndex=function findContainerIndex(element,event){var composedPath="function"==typeof(null==event?void 0:event.composedPath)?event.composedPath():void 0;return state.containerGroups.findIndex((function(_ref){var container=_ref.container,tabbableNodes=_ref.tabbableNodes;return container.contains(element)||(null==composedPath?void 0:composedPath.includes(container))||tabbableNodes.find((function(node){return node===element}))}))},getNodeForOption=function getNodeForOption(optionName){var optionValue=config[optionName];if("function"==typeof optionValue){for(var _len2=arguments.length,params=new Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++)params[_key2-1]=arguments[_key2];optionValue=optionValue.apply(void 0,params)}if(!0===optionValue&&(optionValue=void 0),!optionValue){if(void 0===optionValue||!1===optionValue)return optionValue;throw new Error("`".concat(optionName,"` was specified but was not a node, or did not return a node"))}var node=optionValue;if("string"==typeof optionValue&&!(node=doc.querySelector(optionValue)))throw new Error("`".concat(optionName,"` as selector refers to no known node"));return node},getInitialFocusNode=function getInitialFocusNode(){var node=getNodeForOption("initialFocus");if(!1===node)return!1;if(void 0===node||!isFocusable(node,config.tabbableOptions))if(findContainerIndex(doc.activeElement)>=0)node=doc.activeElement;else{var firstTabbableGroup=state.tabbableGroups[0];node=firstTabbableGroup&&firstTabbableGroup.firstTabbableNode||getNodeForOption("fallbackFocus")}if(!node)throw new Error("Your focus-trap needs to have at least one focusable element");return node},updateTabbableNodes=function updateTabbableNodes(){if(state.containerGroups=state.containers.map((function(container){var tabbableNodes=function tabbable(container,options){var candidates;return candidates=(options=options||{}).getShadowRoot?getCandidatesIteratively([container],options.includeContainer,{filter:isNodeMatchingSelectorTabbable.bind(null,options),flatten:!1,getShadowRoot:options.getShadowRoot,shadowRootFilter:isValidShadowRootTabbable}):getCandidates(container,options.includeContainer,isNodeMatchingSelectorTabbable.bind(null,options)),sortByOrder(candidates)}(container,config.tabbableOptions),focusableNodes=function focusable(container,options){return(options=options||{}).getShadowRoot?getCandidatesIteratively([container],options.includeContainer,{filter:isNodeMatchingSelectorFocusable.bind(null,options),flatten:!0,getShadowRoot:options.getShadowRoot}):getCandidates(container,options.includeContainer,isNodeMatchingSelectorFocusable.bind(null,options))}(container,config.tabbableOptions),firstTabbableNode=tabbableNodes.length>0?tabbableNodes[0]:void 0,lastTabbableNode=tabbableNodes.length>0?tabbableNodes[tabbableNodes.length-1]:void 0,firstDomTabbableNode=focusableNodes.find((function(node){return isTabbable(node)})),lastDomTabbableNode=focusableNodes.slice().reverse().find((function(node){return isTabbable(node)})),posTabIndexesFound=!!tabbableNodes.find((function(node){return getTabIndex(node)>0}));return{container:container,tabbableNodes:tabbableNodes,focusableNodes:focusableNodes,posTabIndexesFound:posTabIndexesFound,firstTabbableNode:firstTabbableNode,lastTabbableNode:lastTabbableNode,firstDomTabbableNode:firstDomTabbableNode,lastDomTabbableNode:lastDomTabbableNode,nextTabbableNode:function nextTabbableNode(node){var forward=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],nodeIdx=tabbableNodes.indexOf(node);return nodeIdx<0?forward?focusableNodes.slice(focusableNodes.indexOf(node)+1).find((function(el){return isTabbable(el)})):focusableNodes.slice(0,focusableNodes.indexOf(node)).reverse().find((function(el){return isTabbable(el)})):tabbableNodes[nodeIdx+(forward?1:-1)]}}})),state.tabbableGroups=state.containerGroups.filter((function(group){return group.tabbableNodes.length>0})),state.tabbableGroups.length<=0&&!getNodeForOption("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(state.containerGroups.find((function(g){return g.posTabIndexesFound}))&&state.containerGroups.length>1)throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")},tryFocus=function tryFocus(node){!1!==node&&node!==doc.activeElement&&(node&&node.focus?(node.focus({preventScroll:!!config.preventScroll}),state.mostRecentlyFocusedNode=node,function isSelectableInput(node){return node.tagName&&"input"===node.tagName.toLowerCase()&&"function"==typeof node.select}(node)&&node.select()):tryFocus(getInitialFocusNode()))},getReturnFocusNode=function getReturnFocusNode(previousActiveElement){var node=getNodeForOption("setReturnFocus",previousActiveElement);return node||!1!==node&&previousActiveElement},findNextNavNode=function findNextNavNode(_ref2){var target=_ref2.target,event=_ref2.event,_ref2$isBackward=_ref2.isBackward,isBackward=void 0!==_ref2$isBackward&&_ref2$isBackward;target=target||getActualTarget(event),updateTabbableNodes();var destinationNode=null;if(state.tabbableGroups.length>0){var containerIndex=findContainerIndex(target,event),containerGroup=containerIndex>=0?state.containerGroups[containerIndex]:void 0;if(containerIndex<0)destinationNode=isBackward?state.tabbableGroups[state.tabbableGroups.length-1].lastTabbableNode:state.tabbableGroups[0].firstTabbableNode;else if(isBackward){var startOfGroupIndex=findIndex(state.tabbableGroups,(function(_ref3){var firstTabbableNode=_ref3.firstTabbableNode;return target===firstTabbableNode}));if(startOfGroupIndex<0&&(containerGroup.container===target||isFocusable(target,config.tabbableOptions)&&!isTabbable(target,config.tabbableOptions)&&!containerGroup.nextTabbableNode(target,!1))&&(startOfGroupIndex=containerIndex),startOfGroupIndex>=0){var destinationGroupIndex=0===startOfGroupIndex?state.tabbableGroups.length-1:startOfGroupIndex-1,destinationGroup=state.tabbableGroups[destinationGroupIndex];destinationNode=getTabIndex(target)>=0?destinationGroup.lastTabbableNode:destinationGroup.lastDomTabbableNode}else isTabEvent(event)||(destinationNode=containerGroup.nextTabbableNode(target,!1))}else{var lastOfGroupIndex=findIndex(state.tabbableGroups,(function(_ref4){var lastTabbableNode=_ref4.lastTabbableNode;return target===lastTabbableNode}));if(lastOfGroupIndex<0&&(containerGroup.container===target||isFocusable(target,config.tabbableOptions)&&!isTabbable(target,config.tabbableOptions)&&!containerGroup.nextTabbableNode(target))&&(lastOfGroupIndex=containerIndex),lastOfGroupIndex>=0){var _destinationGroupIndex=lastOfGroupIndex===state.tabbableGroups.length-1?0:lastOfGroupIndex+1,_destinationGroup=state.tabbableGroups[_destinationGroupIndex];destinationNode=getTabIndex(target)>=0?_destinationGroup.firstTabbableNode:_destinationGroup.firstDomTabbableNode}else isTabEvent(event)||(destinationNode=containerGroup.nextTabbableNode(target))}}else destinationNode=getNodeForOption("fallbackFocus");return destinationNode},checkPointerDown=function checkPointerDown(e){var target=getActualTarget(e);findContainerIndex(target,e)>=0||(valueOrHandler(config.clickOutsideDeactivates,e)?trap.deactivate({returnFocus:config.returnFocusOnDeactivate}):valueOrHandler(config.allowOutsideClick,e)||e.preventDefault())},checkFocusIn=function checkFocusIn(event){var target=getActualTarget(event),targetContained=findContainerIndex(target,event)>=0;if(targetContained||target instanceof Document)targetContained&&(state.mostRecentlyFocusedNode=target);else{var nextNode;event.stopImmediatePropagation();var navAcrossContainers=!0;if(state.mostRecentlyFocusedNode)if(getTabIndex(state.mostRecentlyFocusedNode)>0){var mruContainerIdx=findContainerIndex(state.mostRecentlyFocusedNode),tabbableNodes=state.containerGroups[mruContainerIdx].tabbableNodes;if(tabbableNodes.length>0){var mruTabIdx=tabbableNodes.findIndex((function(node){return node===state.mostRecentlyFocusedNode}));mruTabIdx>=0&&(config.isKeyForward(state.recentNavEvent)?mruTabIdx+1<tabbableNodes.length&&(nextNode=tabbableNodes[mruTabIdx+1],navAcrossContainers=!1):mruTabIdx-1>=0&&(nextNode=tabbableNodes[mruTabIdx-1],navAcrossContainers=!1))}}else state.containerGroups.some((function(g){return g.tabbableNodes.some((function(n){return getTabIndex(n)>0}))}))||(navAcrossContainers=!1);else navAcrossContainers=!1;navAcrossContainers&&(nextNode=findNextNavNode({target:state.mostRecentlyFocusedNode,isBackward:config.isKeyBackward(state.recentNavEvent)})),tryFocus(nextNode||(state.mostRecentlyFocusedNode||getInitialFocusNode()))}state.recentNavEvent=void 0},checkKey=function checkKey(event){if(function isEscapeEvent(e){return"Escape"===(null==e?void 0:e.key)||"Esc"===(null==e?void 0:e.key)||27===(null==e?void 0:e.keyCode)}(event)&&!1!==valueOrHandler(config.escapeDeactivates,event))return event.preventDefault(),void trap.deactivate();(config.isKeyForward(event)||config.isKeyBackward(event))&&function checkKeyNav(event){var isBackward=arguments.length>1&&void 0!==arguments[1]&&arguments[1];state.recentNavEvent=event;var destinationNode=findNextNavNode({event:event,isBackward:isBackward});destinationNode&&(isTabEvent(event)&&event.preventDefault(),tryFocus(destinationNode))}(event,config.isKeyBackward(event))},checkClick=function checkClick(e){var target=getActualTarget(e);findContainerIndex(target,e)>=0||valueOrHandler(config.clickOutsideDeactivates,e)||valueOrHandler(config.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())},addListeners=function addListeners(){if(state.active)return activeFocusTraps_activateTrap(trapStack,trap),state.delayInitialFocusTimer=config.delayInitialFocus?delay((function(){tryFocus(getInitialFocusNode())})):tryFocus(getInitialFocusNode()),doc.addEventListener("focusin",checkFocusIn,!0),doc.addEventListener("mousedown",checkPointerDown,{capture:!0,passive:!1}),doc.addEventListener("touchstart",checkPointerDown,{capture:!0,passive:!1}),doc.addEventListener("click",checkClick,{capture:!0,passive:!1}),doc.addEventListener("keydown",checkKey,{capture:!0,passive:!1}),trap},removeListeners=function removeListeners(){if(state.active)return doc.removeEventListener("focusin",checkFocusIn,!0),doc.removeEventListener("mousedown",checkPointerDown,!0),doc.removeEventListener("touchstart",checkPointerDown,!0),doc.removeEventListener("click",checkClick,!0),doc.removeEventListener("keydown",checkKey,!0),trap},mutationObserver="undefined"!=typeof window&&"MutationObserver"in window?new MutationObserver((function checkDomRemoval(mutations){mutations.some((function(mutation){return Array.from(mutation.removedNodes).some((function(node){return node===state.mostRecentlyFocusedNode}))}))&&tryFocus(getInitialFocusNode())})):void 0,updateObservedNodes=function updateObservedNodes(){mutationObserver&&(mutationObserver.disconnect(),state.active&&!state.paused&&state.containers.map((function(container){mutationObserver.observe(container,{subtree:!0,childList:!0})})))};return(trap={get active(){return state.active},get paused(){return state.paused},activate:function activate(activateOptions){if(state.active)return this;var onActivate=getOption(activateOptions,"onActivate"),onPostActivate=getOption(activateOptions,"onPostActivate"),checkCanFocusTrap=getOption(activateOptions,"checkCanFocusTrap");checkCanFocusTrap||updateTabbableNodes(),state.active=!0,state.paused=!1,state.nodeFocusedBeforeActivation=doc.activeElement,null==onActivate||onActivate();var finishActivation=function finishActivation(){checkCanFocusTrap&&updateTabbableNodes(),addListeners(),updateObservedNodes(),null==onPostActivate||onPostActivate()};return checkCanFocusTrap?(checkCanFocusTrap(state.containers.concat()).then(finishActivation,finishActivation),this):(finishActivation(),this)},deactivate:function deactivate(deactivateOptions){if(!state.active)return this;var options=_objectSpread2({onDeactivate:config.onDeactivate,onPostDeactivate:config.onPostDeactivate,checkCanReturnFocus:config.checkCanReturnFocus},deactivateOptions);clearTimeout(state.delayInitialFocusTimer),state.delayInitialFocusTimer=void 0,removeListeners(),state.active=!1,state.paused=!1,updateObservedNodes(),activeFocusTraps_deactivateTrap(trapStack,trap);var onDeactivate=getOption(options,"onDeactivate"),onPostDeactivate=getOption(options,"onPostDeactivate"),checkCanReturnFocus=getOption(options,"checkCanReturnFocus"),returnFocus=getOption(options,"returnFocus","returnFocusOnDeactivate");null==onDeactivate||onDeactivate();var finishDeactivation=function finishDeactivation(){delay((function(){returnFocus&&tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation)),null==onPostDeactivate||onPostDeactivate()}))};return returnFocus&&checkCanReturnFocus?(checkCanReturnFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation)).then(finishDeactivation,finishDeactivation),this):(finishDeactivation(),this)},pause:function pause(pauseOptions){if(state.paused||!state.active)return this;var onPause=getOption(pauseOptions,"onPause"),onPostPause=getOption(pauseOptions,"onPostPause");return state.paused=!0,null==onPause||onPause(),removeListeners(),updateObservedNodes(),null==onPostPause||onPostPause(),this},unpause:function unpause(unpauseOptions){if(!state.paused||!state.active)return this;var onUnpause=getOption(unpauseOptions,"onUnpause"),onPostUnpause=getOption(unpauseOptions,"onPostUnpause");return state.paused=!1,null==onUnpause||onUnpause(),updateTabbableNodes(),addListeners(),updateObservedNodes(),null==onPostUnpause||onPostUnpause(),this},updateContainerElements:function updateContainerElements(containerElements){var elementsAsArray=[].concat(containerElements).filter(Boolean);return state.containers=elementsAsArray.map((function(element){return"string"==typeof element?doc.querySelector(element):element})),state.active&&updateTabbableNodes(),updateObservedNodes(),this}}).updateContainerElements(elements),trap}},"./node_modules/scrollbar-width/scrollbar-width.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;(function(){"use strict";var getScrollbarWidth,scrollbarWidth;scrollbarWidth=null,getScrollbarWidth=function(recalculate){var div1,div2;return null==recalculate&&(recalculate=!1),null==scrollbarWidth||recalculate?"loading"===document.readyState?null:(div1=document.createElement("div"),div2=document.createElement("div"),div1.style.width=div2.style.width=div1.style.height=div2.style.height="100px",div1.style.overflow="scroll",div2.style.overflow="hidden",document.body.appendChild(div1),document.body.appendChild(div2),scrollbarWidth=Math.abs(div1.scrollHeight-div2.scrollHeight),document.body.removeChild(div1),document.body.removeChild(div2),scrollbarWidth):scrollbarWidth},void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return getScrollbarWidth}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}).call(this)}}]);
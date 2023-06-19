(globalThis.webpackChunk_jetbrains_ring_ui=globalThis.webpackChunk_jetbrains_ring_ui||[]).push([[9709],{"./node_modules/@jetbrains/icons/chevron-down.js":module=>{module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g><polygon points="8 10.99 3.5 6.5 4.5 5.5 8 9.01 11.51 5.5 12.49 6.5 8 10.99"/></g></svg>'},"./node_modules/@jetbrains/icons/chevron-right.js":module=>{module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g><polygon points="6.5 12.49 5.5 11.51 9.01 8 5.5 4.5 6.5 3.5 10.99 8 6.5 12.49"/></g></svg>'},"./node_modules/@jetbrains/icons/drag.js":module=>{module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g><path d="M8,6.5A1.5,1.5,0,1,0,9.5,8,1.5,1.5,0,0,0,8,6.5Zm0,5A1.5,1.5,0,1,0,9.5,13,1.5,1.5,0,0,0,8,11.47ZM8,4.53A1.5,1.5,0,1,0,6.5,3,1.5,1.5,0,0,0,8,4.53Z"/></g></svg>'},"./node_modules/@jetbrains/icons/unsorted-10px.js":module=>{module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"><g><path d="M5,8,3,6,2,7l3,3L8,7,7,6ZM5,2,7,4,8,3,5,0,2,3,3,4Z"/></g></svg>'},"./node_modules/react-movable/lib/index.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{aV:()=>lib_List,Rp:()=>arrayMove});var react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js");function arrayMove(array,from,to){return(array=array.slice()).splice(to<0?array.length+to:to,0,array.splice(from,1)[0]),array}function getTranslateOffset(element){const style=window.getComputedStyle(element);return Math.max(parseInt(style["margin-top"],10),parseInt(style["margin-bottom"],10))+element.getBoundingClientRect().height}function transformItem(element,offsetY=0,offsetX=0){element&&(null!==offsetY&&null!==offsetX?element.style.transform=`translate(${offsetX}px, ${offsetY}px)`:element.style.removeProperty("transform"))}function setItemTransition(element,duration,timing){element&&(element.style.transition=`transform ${duration}ms${timing?` ${timing}`:""}`)}const schd=fn=>{let lastArgs=[],frameId=null;const wrapperFn=(...args)=>{lastArgs=args,frameId||(frameId=requestAnimationFrame((()=>{frameId=null,fn(...lastArgs)})))};return wrapperFn.cancel=()=>{frameId&&cancelAnimationFrame(frameId)},wrapperFn};function checkIfInteractive(target,rootElement){const DISABLED_ELEMENTS=["input","textarea","select","option","optgroup","video","audio","button","a"],DISABLED_ROLES=["button","link","checkbox","tab"];for(;target!==rootElement;){if(target.getAttribute("data-movable-handle"))return!1;if(DISABLED_ELEMENTS.includes(target.tagName.toLowerCase()))return!0;const role=target.getAttribute("role");if(role&&DISABLED_ROLES.includes(role.toLowerCase()))return!0;if("label"===target.tagName.toLowerCase()&&target.hasAttribute("for"))return!0;target.tagName&&(target=target.parentElement)}return!1}class List extends react.Component{constructor(props){super(props),this.listRef=react.createRef(),this.ghostRef=react.createRef(),this.topOffsets=[],this.itemTranslateOffsets=[],this.initialYOffset=0,this.lastScroll=0,this.lastYOffset=0,this.lastListYOffset=0,this.needle=-1,this.afterIndex=-2,this.state={itemDragged:-1,itemDraggedOutOfBounds:-1,selectedItem:-1,initialX:0,initialY:0,targetX:0,targetY:0,targetHeight:0,targetWidth:0,liveText:"",scrollingSpeed:0,scrollWindow:!1},this.doScrolling=()=>{const{scrollingSpeed,scrollWindow}=this.state,listEl=this.listRef.current;window.requestAnimationFrame((()=>{scrollWindow?window.scrollTo(window.pageXOffset,window.pageYOffset+1.5*scrollingSpeed):listEl.scrollTop+=scrollingSpeed,0!==scrollingSpeed&&this.doScrolling()}))},this.getChildren=()=>this.listRef&&this.listRef.current?Array.from(this.listRef.current.children):(console.warn("No items found in the List container. Did you forget to pass & spread the `props` param in renderList?"),[]),this.calculateOffsets=()=>{this.topOffsets=this.getChildren().map((item=>item.getBoundingClientRect().top)),this.itemTranslateOffsets=this.getChildren().map((item=>getTranslateOffset(item)))},this.getTargetIndex=e=>this.getChildren().findIndex((child=>child===e.target||child.contains(e.target))),this.onMouseOrTouchStart=e=>{this.dropTimeout&&this.state.itemDragged>-1&&(window.clearTimeout(this.dropTimeout),this.finishDrop());const isTouch=function isTouchEvent(event){return event.touches&&event.touches.length||event.changedTouches&&event.changedTouches.length}(e);if(!isTouch&&0!==e.button)return;const index=this.getTargetIndex(e);if(-1===index||this.props.values[index]&&this.props.values[index].disabled)return void(-1!==this.state.selectedItem&&(this.setState({selectedItem:-1}),this.finishDrop()));const listItemTouched=this.getChildren()[index],handle=listItemTouched.querySelector("[data-movable-handle]");if((!handle||handle.contains(e.target))&&!checkIfInteractive(e.target,listItemTouched)){if(e.preventDefault(),this.props.beforeDrag&&this.props.beforeDrag({elements:this.getChildren(),index}),isTouch){const opts={passive:!1};listItemTouched.style.touchAction="none",document.addEventListener("touchend",this.schdOnEnd,opts),document.addEventListener("touchmove",this.schdOnTouchMove,opts),document.addEventListener("touchcancel",this.schdOnEnd,opts)}else{document.addEventListener("mousemove",this.schdOnMouseMove),document.addEventListener("mouseup",this.schdOnEnd);const listItemDragged=this.getChildren()[this.state.itemDragged];listItemDragged&&listItemDragged.style&&(listItemDragged.style.touchAction="")}this.onStart(listItemTouched,isTouch?e.touches[0].clientX:e.clientX,isTouch?e.touches[0].clientY:e.clientY,index)}},this.getYOffset=()=>{const listScroll=this.listRef.current?this.listRef.current.scrollTop:0;return window.pageYOffset+listScroll},this.onStart=(target,clientX,clientY,index)=>{this.state.selectedItem>-1&&(this.setState({selectedItem:-1}),this.needle=-1);const targetRect=target.getBoundingClientRect(),targetStyles=window.getComputedStyle(target);this.calculateOffsets(),this.initialYOffset=this.getYOffset(),this.lastYOffset=window.pageYOffset,this.lastListYOffset=this.listRef.current.scrollTop,this.setState({itemDragged:index,targetX:targetRect.left-parseInt(targetStyles["margin-left"],10),targetY:targetRect.top-parseInt(targetStyles["margin-top"],10),targetHeight:targetRect.height,targetWidth:targetRect.width,initialX:clientX,initialY:clientY})},this.onMouseMove=e=>{e.cancelable&&e.preventDefault(),this.onMove(e.clientX,e.clientY)},this.onTouchMove=e=>{e.cancelable&&e.preventDefault(),this.onMove(e.touches[0].clientX,e.touches[0].clientY)},this.onWheel=e=>{this.state.itemDragged<0||(this.lastScroll=this.listRef.current.scrollTop+=e.deltaY,this.moveOtherItems())},this.onMove=(clientX,clientY)=>{if(-1===this.state.itemDragged)return null;transformItem(this.ghostRef.current,clientY-this.state.initialY,this.props.lockVertically?0:clientX-this.state.initialX),this.autoScrolling(clientY),this.moveOtherItems()},this.moveOtherItems=()=>{const targetRect=this.ghostRef.current.getBoundingClientRect(),itemVerticalCenter=targetRect.top+targetRect.height/2,offset=getTranslateOffset(this.getChildren()[this.state.itemDragged]),currentYOffset=this.getYOffset();this.initialYOffset!==currentYOffset&&(this.topOffsets=this.topOffsets.map((offset=>offset-(currentYOffset-this.initialYOffset))),this.initialYOffset=currentYOffset),this.isDraggedItemOutOfBounds()&&this.props.removableByMove?this.afterIndex=this.topOffsets.length+1:this.afterIndex=function binarySearch(array,targetValue){let guess,min=0,max=array.length-1;for(;min<=max;){if(guess=Math.floor((max+min)/2),!array[guess+1]||array[guess]<=targetValue&&array[guess+1]>=targetValue)return guess;array[guess]<targetValue&&array[guess+1]<targetValue?min=guess+1:max=guess-1}return-1}(this.topOffsets,itemVerticalCenter),this.animateItems(-1===this.afterIndex?0:this.afterIndex,this.state.itemDragged,offset)},this.autoScrolling=clientY=>{const{top,bottom,height}=this.listRef.current.getBoundingClientRect(),viewportHeight=window.innerHeight||document.documentElement.clientHeight;if(bottom>viewportHeight&&viewportHeight-clientY<200)this.setState({scrollingSpeed:Math.round((200-(viewportHeight-clientY))/10),scrollWindow:!0});else if(top<0&&clientY<200)this.setState({scrollingSpeed:Math.round((200-clientY)/-10),scrollWindow:!0});else if(this.state.scrollWindow&&0!==this.state.scrollingSpeed&&this.setState({scrollingSpeed:0,scrollWindow:!1}),height+20<this.listRef.current.scrollHeight){let scrollingSpeed=0;clientY-top<200?scrollingSpeed=Math.round((200-(clientY-top))/-10):bottom-clientY<200&&(scrollingSpeed=Math.round((200-(bottom-clientY))/10)),this.state.scrollingSpeed!==scrollingSpeed&&this.setState({scrollingSpeed})}},this.animateItems=(needle,movedItem,offset,animateMovedItem=!1)=>{this.getChildren().forEach(((item,i)=>{if(setItemTransition(item,this.props.transitionDuration),movedItem===i&&animateMovedItem){if(movedItem===needle)return transformItem(item,null);transformItem(item,movedItem<needle?this.itemTranslateOffsets.slice(movedItem+1,needle+1).reduce(((a,b)=>a+b),0):-1*this.itemTranslateOffsets.slice(needle,movedItem).reduce(((a,b)=>a+b),0))}else transformItem(item,movedItem<needle&&i>movedItem&&i<=needle?-offset:i<movedItem&&movedItem>needle&&i>=needle?offset:null)}))},this.isDraggedItemOutOfBounds=()=>{const initialRect=this.getChildren()[this.state.itemDragged].getBoundingClientRect(),targetRect=this.ghostRef.current.getBoundingClientRect();return Math.abs(initialRect.left-targetRect.left)>targetRect.width?(-1===this.state.itemDraggedOutOfBounds&&this.setState({itemDraggedOutOfBounds:this.state.itemDragged}),!0):(this.state.itemDraggedOutOfBounds>-1&&this.setState({itemDraggedOutOfBounds:-1}),!1)},this.onEnd=e=>{e.cancelable&&e.preventDefault(),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchup",this.schdOnEnd),document.removeEventListener("touchcancel",this.schdOnEnd);const removeItem=this.props.removableByMove&&this.isDraggedItemOutOfBounds();!removeItem&&this.props.transitionDuration>0&&-2!==this.afterIndex&&schd((()=>{setItemTransition(this.ghostRef.current,this.props.transitionDuration,"cubic-bezier(.2,1,.1,1)"),this.afterIndex<1&&0===this.state.itemDragged?transformItem(this.ghostRef.current,0,0):transformItem(this.ghostRef.current,-(window.pageYOffset-this.lastYOffset)-(this.listRef.current.scrollTop-this.lastListYOffset)+(this.state.itemDragged<this.afterIndex?this.itemTranslateOffsets.slice(this.state.itemDragged+1,this.afterIndex+1).reduce(((a,b)=>a+b),0):-1*this.itemTranslateOffsets.slice(this.afterIndex<0?0:this.afterIndex,this.state.itemDragged).reduce(((a,b)=>a+b),0)),0)}))(),this.dropTimeout=window.setTimeout(this.finishDrop,removeItem||-2===this.afterIndex?0:this.props.transitionDuration)},this.finishDrop=()=>{const removeItem=this.props.removableByMove&&this.isDraggedItemOutOfBounds();(removeItem||this.afterIndex>-2&&this.state.itemDragged!==this.afterIndex)&&this.props.onChange({oldIndex:this.state.itemDragged,newIndex:removeItem?-1:Math.max(this.afterIndex,0),targetRect:this.ghostRef.current.getBoundingClientRect()}),this.getChildren().forEach((item=>{setItemTransition(item,0),transformItem(item,null),item.style.touchAction=""})),this.setState({itemDragged:-1,scrollingSpeed:0}),this.afterIndex=-2,this.lastScroll>0&&(this.listRef.current.scrollTop=this.lastScroll,this.lastScroll=0)},this.onKeyDown=e=>{const selectedItem=this.state.selectedItem,index=this.getTargetIndex(e);if(!checkIfInteractive(e.target,e.currentTarget)&&-1!==index){if(" "===e.key&&(e.preventDefault(),selectedItem===index?(selectedItem!==this.needle&&(this.getChildren().forEach((item=>{setItemTransition(item,0),transformItem(item,null)})),this.props.onChange({oldIndex:selectedItem,newIndex:this.needle,targetRect:this.getChildren()[this.needle].getBoundingClientRect()}),this.getChildren()[this.needle].focus()),this.setState({selectedItem:-1,liveText:this.props.voiceover.dropped(selectedItem+1,this.needle+1)}),this.needle=-1):(this.setState({selectedItem:index,liveText:this.props.voiceover.lifted(index+1)}),this.needle=index,this.calculateOffsets())),("ArrowDown"===e.key||"j"===e.key)&&selectedItem>-1&&this.needle<this.props.values.length-1){e.preventDefault();const offset=getTranslateOffset(this.getChildren()[selectedItem]);this.needle++,this.animateItems(this.needle,selectedItem,offset,!0),this.setState({liveText:this.props.voiceover.moved(this.needle+1,!1)})}if(("ArrowUp"===e.key||"k"===e.key)&&selectedItem>-1&&this.needle>0){e.preventDefault();const offset=getTranslateOffset(this.getChildren()[selectedItem]);this.needle--,this.animateItems(this.needle,selectedItem,offset,!0),this.setState({liveText:this.props.voiceover.moved(this.needle+1,!0)})}"Escape"===e.key&&selectedItem>-1&&(this.getChildren().forEach((item=>{setItemTransition(item,0),transformItem(item,null)})),this.setState({selectedItem:-1,liveText:this.props.voiceover.canceled(selectedItem+1)}),this.needle=-1),("Tab"===e.key||"Enter"===e.key)&&selectedItem>-1&&e.preventDefault()}},this.schdOnMouseMove=schd(this.onMouseMove),this.schdOnTouchMove=schd(this.onTouchMove),this.schdOnEnd=schd(this.onEnd)}componentDidMount(){this.calculateOffsets(),document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1,capture:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart)}componentDidUpdate(_prevProps,prevState){prevState.scrollingSpeed!==this.state.scrollingSpeed&&0===prevState.scrollingSpeed&&this.doScrolling()}componentWillUnmount(){document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mousedown",this.onMouseOrTouchStart),this.dropTimeout&&window.clearTimeout(this.dropTimeout),this.schdOnMouseMove.cancel(),this.schdOnTouchMove.cancel(),this.schdOnEnd.cancel()}render(){const baseStyle={userSelect:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",boxSizing:"border-box",position:"relative"},ghostStyle={...baseStyle,top:this.state.targetY,left:this.state.targetX,width:this.state.targetWidth,height:this.state.targetHeight,position:"fixed",marginTop:0};return react.createElement(react.Fragment,null,this.props.renderList({children:this.props.values.map(((value,index)=>{const isHidden=index===this.state.itemDragged,isSelected=index===this.state.selectedItem,props={key:index,tabIndex:this.props.values[index]&&this.props.values[index].disabled?-1:0,"aria-roledescription":this.props.voiceover.item(index+1),onKeyDown:this.onKeyDown,style:{...baseStyle,visibility:isHidden?"hidden":void 0,zIndex:isSelected?5e3:0}};return this.props.renderItem({value,props,index,isDragged:!1,isSelected,isOutOfBounds:!1})})),isDragged:this.state.itemDragged>-1,props:{ref:this.listRef}}),this.state.itemDragged>-1&&react_dom.createPortal(this.props.renderItem({value:this.props.values[this.state.itemDragged],props:{ref:this.ghostRef,style:ghostStyle,onWheel:this.onWheel},index:this.state.itemDragged,isDragged:!0,isSelected:!1,isOutOfBounds:this.state.itemDraggedOutOfBounds>-1}),this.props.container||document.body),react.createElement("div",{"aria-live":"assertive",role:"log","aria-atomic":"true",style:{position:"absolute",width:"1px",height:"1px",margin:"-1px",border:"0px",padding:"0px",overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)",clipPath:"inset(100%)"}},this.state.liveText))}}List.defaultProps={transitionDuration:300,lockVertically:!1,removableByMove:!1,voiceover:{item:position=>`You are currently at a draggable item at position ${position}. Press space bar to lift.`,lifted:position=>`You have lifted item at position ${position}. Press j to move down, k to move up, space bar to drop and escape to cancel.`,moved:(position,up)=>`You have moved the lifted item ${up?"up":"down"} to position ${position}. Press j to move down, k to move up, space bar to drop and escape to cancel.`,dropped:(from,to)=>`You have dropped the item. It has moved from position ${from} to ${to}.`,canceled:position=>`You have cancelled the movement. The item has returned to its starting position of ${position}.`}};const lib_List=List}}]);
"use strict";(self.webpackChunk_jetbrains_ring_ui=self.webpackChunk_jetbrains_ring_ui||[]).push([[2340],{"./.storybook/react-decorator.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom_client__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/client.js"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("@storybook/preview-api");const reactDecorator=(StoryFn,context)=>{const node=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>document.createElement("div")),[context.kind,context.name]),root=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>(0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(node)),[node]);return(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>()=>root.unmount()),[root]),root.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(StoryFn,null))),node};__webpack_exports__.Z=()=>reactDecorator},"./src/popup/popup.examples.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{autoPositioning:function(){return autoPositioning},basic:function(){return basic},fitsScreen:function(){return fitsScreen},insideAScrollableContainer:function(){return insideAScrollableContainer},popupInAPopup:function(){return popupInAPopup}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_storybook_react_decorator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./.storybook/react-decorator.tsx"),_popup__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/popup/popup.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_exports__.default={title:"Components/Popup",decorators:[(0,_storybook_react_decorator__WEBPACK_IMPORTED_MODULE_2__.Z)()],parameters:{storySource:{source:"import React, {Component, ReactNode} from 'react';\nimport classNames from 'classnames';\n\nimport reactDecorator from '../../.storybook/react-decorator';\n\nimport Popup from './popup';\n\nexport default {\n  title: 'Components/Popup',\n  decorators: [reactDecorator()],\n\n  parameters: {\n    notes: 'Displays a popup.'\n  }\n};\n\ninterface PopupDemoState {\n  topLeft?: boolean\n  topRight?: boolean\n  bottomLeft?: boolean\n  bottomRight?: boolean\n}\nexport const basic = () => {\n  const {Directions} = Popup.PopupProps;\n\n  const directionMap = {\n    topLeft: Directions.BOTTOM_RIGHT,\n    topRight: Directions.BOTTOM_LEFT,\n    bottomLeft: Directions.TOP_RIGHT,\n    bottomRight: Directions.TOP_LEFT\n  };\n\n  const directionKeys = Object.keys(directionMap) as (keyof typeof directionMap)[];\n  const initialState = directionKeys.reduce((acc: PopupDemoState, key) => {\n    acc[key] = true;\n    return acc;\n  }, {});\n\n  class PopupDemo extends Component {\n    state = initialState;\n\n    renderPopup = (key: keyof PopupDemoState) => (\n      <div className={classNames('anchor', key)} key={key}>\n        <Popup\n          hidden={!this.state[key]}\n          onCloseAttempt={() => this.setState({[key]: false})}\n          directions={[directionMap[key]]}\n        >\n          <span>Hello, world!</span>\n        </Popup>\n      </div>\n    );\n\n    showAgain = () =>\n      setTimeout(() => {\n        this.setState({bottomLeft: true});\n      });\n\n    render() {\n      return (\n        <div>\n          {directionKeys.map(this.renderPopup)}\n          <button className=\"button\" type=\"button\" onClick={this.showAgain}>\n            Show again\n          </button>\n        </div>\n      );\n    }\n  }\n\n  return <PopupDemo/>;\n};\n\nbasic.storyName = 'basic';\n\nbasic.parameters = {\n  hermione: {captureSelector: ['.topLeft', '.topRight', '.bottomLeft', '.bottomRight']},\n  a11y: {element: '#storybook-root,.topLeft,.topRight,.bottomLeft,.bottomRight'},\n  storyStyles: `\n<style>\n  body {\n    overflow: hidden;\n  }\n\n  .button {\n    position: absolute;\n    left: 50px;\n    bottom: 50px;\n  }\n\n  .anchor {\n    position: absolute;\n    width: 10px;\n    height: 10px;\n  }\n\n  .topLeft {\n    left: 0;\n    top: 0;\n    background-color: red;\n  }\n\n  .topRight {\n    right: 0;\n    top: 0;\n    background-color: blue;\n  }\n\n  .bottomLeft {\n    left: 0;\n    bottom: 0;\n    background-color: green;\n  }\n\n  .bottomRight {\n    right: 0;\n    bottom: 0;\n    background-color: orange;\n  }\n</style>\n      `\n};\n\nexport const autoPositioning = () => {\n  const Directions = Popup.PopupProps.Directions;\n\n  const content = <span className=\"popup\">This is a popup</span>;\n  const PopupDemo = (\n    <div>\n      <div className=\"message\">\n        Popup should change open direction when reaching window borders\n        <Popup directions={[Directions.TOP_CENTER]}>{content}</Popup>\n      </div>\n      <div className=\"message vert\">\n        Popup should change open direction when reaching window borders\n        <Popup directions={[Directions.RIGHT_CENTER]}>{content}</Popup>\n      </div>\n      <div className=\"anchor left\">\n        Left side open popup\n        <Popup directions={[Directions.LEFT_BOTTOM, Directions.RIGHT_BOTTOM]}>{content}</Popup>\n      </div>\n      <div className=\"anchor right\">\n        Right side open popup\n        <Popup directions={[Directions.RIGHT_BOTTOM, Directions.LEFT_BOTTOM]}>{content}</Popup>\n      </div>\n      <div className=\"anchor bottom\">\n        Downside open popup\n        <Popup directions={[Directions.BOTTOM_RIGHT, Directions.TOP_LEFT]}>{content}</Popup>\n      </div>\n      <div className=\"anchor top\">\n        Upside open popup\n        <Popup directions={[Directions.TOP_LEFT, Directions.BOTTOM_RIGHT]}>{content}</Popup>\n      </div>\n    </div>\n  );\n\n  return PopupDemo;\n};\n\nautoPositioning.storyName = 'auto-positioning';\n\nautoPositioning.parameters = {\n  hermione: {captureSelector: 'body'},\n  a11y: {element: '#storybook-root,.left,.right,.bottom,.top'},\n  storyStyles: `\n<style>\n  html, body {\n    height: 100%;\n    margin: 0 !important;\n  }\n\n  .message {\n    position: absolute;\n\n    top: 50%;\n    left: 300px;\n  }\n\n  .vert {\n    top: 20%;\n    width: 150px;\n  }\n\n  .anchor {\n    position: absolute;\n  }\n\n  .left {\n    left: 0;\n    top: 50px;\n  }\n\n  .right {\n    right: 0;\n    top: 50px;\n  }\n\n  .bottom {\n    left: 150px;\n    bottom: 0;\n  }\n\n  .top {\n    right: 150px;\n    top: 0;\n  }\n</style>\n      `\n};\n\nexport const popupInAPopup = () => {\n  interface PopupBoxProps {\n    children?: ReactNode\n  }\n  class PopupBox extends Component<PopupBoxProps> {\n    state = {hidden: false};\n\n    render() {\n      return (\n        <Popup {...this.state} onCloseAttempt={() => this.setState({hidden: true})}>\n          {this.props.children}\n        </Popup>\n      );\n    }\n  }\n\n  const PopupDemo = (\n    <div>\n      Parent popup anchor\n      <PopupBox>\n        <div className=\"parent-popup\">\n          This is a parent popup\n          <PopupBox>\n            <div className=\"child-popup\">This is a child popup</div>\n          </PopupBox>\n        </div>\n      </PopupBox>\n    </div>\n  );\n\n  return PopupDemo;\n};\n\npopupInAPopup.storyName = 'popup in a popup';\n\npopupInAPopup.parameters = {\n  hermione: {captureSelector: 'body'},\n  storyStyles: `\n<style>\n  body {\n    min-height: 400px !important;\n  }\n\n  .parent-popup {\n    width: 100px;\n    height: 100px;\n    text-align: center;\n  }\n\n  .child-popup {\n    background-color: red;\n    text-align: center;\n    margin: 8px;\n  }\n</style>\n      `\n};\n\nexport const insideAScrollableContainer = () => (\n  // Scrollable\n  \n  <div className=\"container\" tabIndex={0}>\n    <div className=\"example\">\n      <div className=\"anchor\">\n        Popup anchor\n        <Popup>Popup content</Popup>\n      </div>\n    </div>\n  </div>\n);\n\ninsideAScrollableContainer.storyName = 'inside a scrollable container';\n\ninsideAScrollableContainer.parameters = {\n  hermione: {skip: true},\n  storyStyles: `\n<style>\n    body {\n      margin: 0 !important;\n    }\n\n    .container {\n      height: 100vh;\n      overflow: auto;\n    }\n\n    .example {\n      height: 200vh;\n      display: inline-block;\n    }\n\n    .anchor {\n      display: inline-block;\n    }\n</style>\n      `\n};\n\nexport const fitsScreen = () => {\n  const PopupDemo = (\n    <div className=\"anchorBottom\">\n      Popup anchor on bottom\n      <Popup maxHeight={1380}>\n        <div className=\"popupContent\">\n          <div>Popup top</div>\n          <div>popup bottom</div>\n        </div>\n      </Popup>\n    </div>\n  );\n\n  return PopupDemo;\n};\n\nfitsScreen.storyName = 'fits screen';\n\nfitsScreen.parameters = {\n  hermione: {captureSelector: 'body'},\n  storyStyles: `\n<style>\n    body {\n      margin: 0 !important;\n    }\n\n    html,\n    body {\n      height: 100%;\n    }\n\n    .popupContent {\n      height: 1300px;\n      padding: 8px;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n    }\n\n    .anchorBottom {\n      position: absolute;\n      bottom: 20px;\n    }\n</style>\n      `\n};\n",locationsMap:{basic:{startLoc:{col:21,line:23},endLoc:{col:1,line:72},startBody:{col:21,line:23},endBody:{col:1,line:72}},"auto-positioning":{startLoc:{col:31,line:124},endLoc:{col:1,line:158},startBody:{col:31,line:124},endBody:{col:1,line:158}},"popup-in-a-popup":{startLoc:{col:29,line:211},endLoc:{col:1,line:242},startBody:{col:29,line:211},endBody:{col:1,line:242}},"inside-a-scrollable-container":{startLoc:{col:42,line:269},endLoc:{col:1,line:280},startBody:{col:42,line:269},endBody:{col:1,line:280}},"fits-screen":{startLoc:{col:26,line:309},endLoc:{col:1,line:323},startBody:{col:26,line:309},endBody:{col:1,line:323}}}},notes:"Displays a popup."}};const basic=()=>{const{Directions:Directions}=_popup__WEBPACK_IMPORTED_MODULE_3__.default.PopupProps,directionMap={topLeft:Directions.BOTTOM_RIGHT,topRight:Directions.BOTTOM_LEFT,bottomLeft:Directions.TOP_RIGHT,bottomRight:Directions.TOP_LEFT},directionKeys=Object.keys(directionMap),initialState=directionKeys.reduce(((acc,key)=>(acc[key]=!0,acc)),{});class PopupDemo extends react__WEBPACK_IMPORTED_MODULE_0__.Component{state=initialState;renderPopup=key=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("anchor",key),key:key},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_popup__WEBPACK_IMPORTED_MODULE_3__.default,{hidden:!this.state[key],onCloseAttempt:()=>this.setState({[key]:!1}),directions:[directionMap[key]]},react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,"Hello, world!")));showAgain=()=>setTimeout((()=>{this.setState({bottomLeft:!0})}));render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,directionKeys.map(this.renderPopup),react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{className:"button",type:"button",onClick:this.showAgain},"Show again"))}}return react__WEBPACK_IMPORTED_MODULE_0__.createElement(PopupDemo,null)};basic.storyName="basic",basic.parameters={hermione:{captureSelector:[".topLeft",".topRight",".bottomLeft",".bottomRight"]},a11y:{element:"#storybook-root,.topLeft,.topRight,.bottomLeft,.bottomRight"},storyStyles:"\n<style>\n  body {\n    overflow: hidden;\n  }\n\n  .button {\n    position: absolute;\n    left: 50px;\n    bottom: 50px;\n  }\n\n  .anchor {\n    position: absolute;\n    width: 10px;\n    height: 10px;\n  }\n\n  .topLeft {\n    left: 0;\n    top: 0;\n    background-color: red;\n  }\n\n  .topRight {\n    right: 0;\n    top: 0;\n    background-color: blue;\n  }\n\n  .bottomLeft {\n    left: 0;\n    bottom: 0;\n    background-color: green;\n  }\n\n  .bottomRight {\n    right: 0;\n    bottom: 0;\n    background-color: orange;\n  }\n</style>\n      "};const autoPositioning=()=>{const Directions=_popup__WEBPACK_IMPORTED_MODULE_3__.default.PopupProps.Directions,content=react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"popup"},"This is a popup");return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"message"},"Popup should change open direction when reaching window borders",react__WEBPACK_IMPORTED_MODULE_0__.createElement(_popup__WEBPACK_IMPORTED_MODULE_3__.default,{directions:[Directions.TOP_CENTER]},content)),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"message vert"},"Popup should change open direction when reaching window borders",react__WEBPACK_IMPORTED_MODULE_0__.createElement(_popup__WEBPACK_IMPORTED_MODULE_3__.default,{directions:[Directions.RIGHT_CENTER]},content)),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"anchor left"},"Left side open popup",react__WEBPACK_IMPORTED_MODULE_0__.createElement(_popup__WEBPACK_IMPORTED_MODULE_3__.default,{directions:[Directions.LEFT_BOTTOM,Directions.RIGHT_BOTTOM]},content)),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"anchor right"},"Right side open popup",react__WEBPACK_IMPORTED_MODULE_0__.createElement(_popup__WEBPACK_IMPORTED_MODULE_3__.default,{directions:[Directions.RIGHT_BOTTOM,Directions.LEFT_BOTTOM]},content)),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"anchor bottom"},"Downside open popup",react__WEBPACK_IMPORTED_MODULE_0__.createElement(_popup__WEBPACK_IMPORTED_MODULE_3__.default,{directions:[Directions.BOTTOM_RIGHT,Directions.TOP_LEFT]},content)),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"anchor top"},"Upside open popup",react__WEBPACK_IMPORTED_MODULE_0__.createElement(_popup__WEBPACK_IMPORTED_MODULE_3__.default,{directions:[Directions.TOP_LEFT,Directions.BOTTOM_RIGHT]},content)))};autoPositioning.storyName="auto-positioning",autoPositioning.parameters={hermione:{captureSelector:"body"},a11y:{element:"#storybook-root,.left,.right,.bottom,.top"},storyStyles:"\n<style>\n  html, body {\n    height: 100%;\n    margin: 0 !important;\n  }\n\n  .message {\n    position: absolute;\n\n    top: 50%;\n    left: 300px;\n  }\n\n  .vert {\n    top: 20%;\n    width: 150px;\n  }\n\n  .anchor {\n    position: absolute;\n  }\n\n  .left {\n    left: 0;\n    top: 50px;\n  }\n\n  .right {\n    right: 0;\n    top: 50px;\n  }\n\n  .bottom {\n    left: 150px;\n    bottom: 0;\n  }\n\n  .top {\n    right: 150px;\n    top: 0;\n  }\n</style>\n      "};const popupInAPopup=()=>{class PopupBox extends react__WEBPACK_IMPORTED_MODULE_0__.Component{state={hidden:!1};render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_popup__WEBPACK_IMPORTED_MODULE_3__.default,_extends({},this.state,{onCloseAttempt:()=>this.setState({hidden:!0})}),this.props.children)}}return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"Parent popup anchor",react__WEBPACK_IMPORTED_MODULE_0__.createElement(PopupBox,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"parent-popup"},"This is a parent popup",react__WEBPACK_IMPORTED_MODULE_0__.createElement(PopupBox,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"child-popup"},"This is a child popup")))))};popupInAPopup.storyName="popup in a popup",popupInAPopup.parameters={hermione:{captureSelector:"body"},storyStyles:"\n<style>\n  body {\n    min-height: 400px !important;\n  }\n\n  .parent-popup {\n    width: 100px;\n    height: 100px;\n    text-align: center;\n  }\n\n  .child-popup {\n    background-color: red;\n    text-align: center;\n    margin: 8px;\n  }\n</style>\n      "};const insideAScrollableContainer=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"container",tabIndex:0},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"example"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"anchor"},"Popup anchor",react__WEBPACK_IMPORTED_MODULE_0__.createElement(_popup__WEBPACK_IMPORTED_MODULE_3__.default,null,"Popup content"))));insideAScrollableContainer.storyName="inside a scrollable container",insideAScrollableContainer.parameters={hermione:{skip:!0},storyStyles:"\n<style>\n    body {\n      margin: 0 !important;\n    }\n\n    .container {\n      height: 100vh;\n      overflow: auto;\n    }\n\n    .example {\n      height: 200vh;\n      display: inline-block;\n    }\n\n    .anchor {\n      display: inline-block;\n    }\n</style>\n      "};const fitsScreen=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"anchorBottom"},"Popup anchor on bottom",react__WEBPACK_IMPORTED_MODULE_0__.createElement(_popup__WEBPACK_IMPORTED_MODULE_3__.default,{maxHeight:1380},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"popupContent"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"Popup top"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"popup bottom"))));fitsScreen.storyName="fits screen",fitsScreen.parameters={hermione:{captureSelector:"body"},storyStyles:"\n<style>\n    body {\n      margin: 0 !important;\n    }\n\n    html,\n    body {\n      height: 100%;\n    }\n\n    .popupContent {\n      height: 1300px;\n      padding: 8px;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n    }\n\n    .anchorBottom {\n      position: absolute;\n      bottom: 20px;\n    }\n</style>\n      "},basic.__docgenInfo={description:"",methods:[],displayName:"basic"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/popup/popup.examples.tsx"]={name:"basic",docgenInfo:basic.__docgenInfo,path:"src/popup/popup.examples.tsx"}),autoPositioning.__docgenInfo={description:"",methods:[],displayName:"autoPositioning"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/popup/popup.examples.tsx"]={name:"autoPositioning",docgenInfo:autoPositioning.__docgenInfo,path:"src/popup/popup.examples.tsx"}),popupInAPopup.__docgenInfo={description:"",methods:[],displayName:"popupInAPopup"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/popup/popup.examples.tsx"]={name:"popupInAPopup",docgenInfo:popupInAPopup.__docgenInfo,path:"src/popup/popup.examples.tsx"}),insideAScrollableContainer.__docgenInfo={description:"",methods:[],displayName:"insideAScrollableContainer"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/popup/popup.examples.tsx"]={name:"insideAScrollableContainer",docgenInfo:insideAScrollableContainer.__docgenInfo,path:"src/popup/popup.examples.tsx"}),fitsScreen.__docgenInfo={description:"",methods:[],displayName:"fitsScreen"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/popup/popup.examples.tsx"]={name:"fitsScreen",docgenInfo:fitsScreen.__docgenInfo,path:"src/popup/popup.examples.tsx"})}}]);
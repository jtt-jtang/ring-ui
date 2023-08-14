(self.webpackChunk_jetbrains_ring_ui=self.webpackChunk_jetbrains_ring_ui||[]).push([[618],{"./node_modules/@jetbrains/icons/chevron-down.js":function(module){module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g><polygon points="8 10.99 3.5 6.5 4.5 5.5 8 9.01 11.51 5.5 12.49 6.5 8 10.99"/></g></svg>'},"./node_modules/@jetbrains/icons/chevron-right.js":function(module){module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g><polygon points="6.5 12.49 5.5 11.51 9.01 8 5.5 4.5 6.5 3.5 10.99 8 6.5 12.49"/></g></svg>'},"./node_modules/@jetbrains/icons/search.js":function(module){module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g><path d="M14.64,13.36,10.13,8.85A4.94,4.94,0,0,0,11,6a5,5,0,1,0-2.17,4.12l4.51,4.51ZM2.42,6A3.6,3.6,0,1,1,6,9.61,3.6,3.6,0,0,1,2.42,6Z"/></g></svg>'},"./.storybook/react-decorator.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom_client__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/client.js"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("@storybook/preview-api");const reactDecorator=(StoryFn,context)=>{const node=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>document.createElement("div")),[context.kind,context.name]),root=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>(0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(node)),[node]);return(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>()=>root.unmount()),[root]),root.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(StoryFn,null))),node};__webpack_exports__.Z=()=>reactDecorator},"./src/pager/pager.examples.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{basic:function(){return basic},customFrameSize:function(){return customFrameSize},customFrameSize2:function(){return customFrameSize2},customFrameSize3:function(){return customFrameSize3},openTotal:function(){return openTotal},openTotalAndHistorySupport:function(){return openTotalAndHistorySupport},pageSizeSelector:function(){return pageSizeSelector},reloadOnCurrentPageChange:function(){return reloadOnCurrentPageChange}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_decorator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.storybook/react-decorator.tsx"),_pager__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/pager/pager.tsx");function getDataFromUrl(name,defaultValue){const value=new URLSearchParams(location.search).get(name);return value?parseInt(value,10):defaultValue}function hrefGenerator(linkPageNumber,pageSize){const params=new URLSearchParams(location.search);return params.set("page",String(linkPageNumber)),pageSize&&params.set("pageSize",String(linkPageNumber)),`${location.pathname}?${params}`}__webpack_exports__.default={title:"Components/Pager",decorators:[(0,_storybook_react_decorator__WEBPACK_IMPORTED_MODULE_1__.Z)()],parameters:{storySource:{source:"import React, {Component} from 'react';\n\nimport reactDecorator from '../../.storybook/react-decorator';\n\nimport Pager from './pager';\n\nfunction getDataFromUrl(name: string, defaultValue: number) {\n  const params = new URLSearchParams(location.search);\n  const value = params.get(name);\n  return value ? parseInt(value, 10) : defaultValue;\n}\n\nfunction hrefGenerator(linkPageNumber: number, pageSize?: number) {\n  const params = new URLSearchParams(location.search);\n  params.set('page', String(linkPageNumber));\n  if (pageSize) {\n    params.set('pageSize', String(linkPageNumber));\n  }\n  return `${location.pathname}?${params}`;\n}\n\nexport default {\n  title: 'Components/Pager',\n  decorators: [reactDecorator()],\n\n  parameters: {\n    notes: 'Displays a pager.',\n    hermione: {captureSelector: '*[data-test~=ring-pager]'}\n  }\n};\n\nexport const basic = () => {\n  class PagerDemo extends Component {\n    state = {\n      total: 750,\n      currentPage: 1\n    };\n\n    render() {\n      const {total, currentPage} = this.state;\n      return (\n        <Pager\n          total={total}\n          currentPage={currentPage}\n          disablePageSizeSelector\n          onPageChange={cp => this.setState({currentPage: cp})}\n        />\n      );\n    }\n  }\n\n  return <PagerDemo/>;\n};\n\nbasic.storyName = 'basic';\n\nexport const customFrameSize = () => {\n  class PagerDemo extends Component {\n    state = {\n      total: 750,\n      currentPage: 1\n    };\n\n    render() {\n      const {total, currentPage} = this.state;\n      return (\n        <Pager\n          total={total}\n          currentPage={currentPage}\n          visiblePagesLimit={3}\n          disablePageSizeSelector\n          onPageChange={cp => this.setState({currentPage: cp})}\n        />\n      );\n    }\n  }\n\n  return <PagerDemo/>;\n};\n\ncustomFrameSize.storyName = 'custom frame size';\ncustomFrameSize.parameters = {hermione: {skip: true}};\n\nexport const customFrameSize2 = () => {\n  class PagerDemo extends Component {\n    state = {\n      total: 250,\n      currentPage: 1\n    };\n\n    render() {\n      const {total, currentPage} = this.state;\n      return (\n        <Pager\n          total={total}\n          currentPage={currentPage}\n          visiblePagesLimit={5}\n          disablePageSizeSelector\n          onPageChange={cp => this.setState({currentPage: cp})}\n        />\n      );\n    }\n  }\n\n  return <PagerDemo/>;\n};\n\ncustomFrameSize2.storyName = 'custom frame size #2';\ncustomFrameSize2.parameters = {hermione: {skip: true}};\n\nexport const customFrameSize3 = () => {\n  class PagerDemo extends Component {\n    state = {\n      total: 400,\n      currentPage: 1\n    };\n\n    render() {\n      const {total, currentPage} = this.state;\n      return (\n        <Pager\n          total={total}\n          currentPage={currentPage}\n          visiblePagesLimit={5}\n          disablePageSizeSelector\n          onPageChange={cp => this.setState({currentPage: cp})}\n        />\n      );\n    }\n  }\n\n  return <PagerDemo/>;\n};\n\ncustomFrameSize3.storyName = 'custom frame size #3';\ncustomFrameSize3.parameters = {hermione: {skip: true}};\n\nexport const pageSizeSelector = () => {\n  class PagerDemo extends Component {\n    state = {\n      total: 100,\n      currentPage: 1,\n      pageSize: 50\n    };\n\n    render() {\n      const {total, currentPage, pageSize} = this.state;\n      return (\n        <Pager\n          total={total}\n          currentPage={currentPage}\n          pageSize={pageSize}\n          onPageChange={cp => this.setState({currentPage: cp})}\n          onPageSizeChange={ps => this.setState({pageSize: ps})}\n        />\n      );\n    }\n  }\n\n  return <PagerDemo/>;\n};\n\npageSizeSelector.storyName = 'page size selector';\n\nexport const openTotal = () => {\n  class PagerDemo extends Component {\n    state = {\n      total: 10,\n      currentPage: 1,\n      pageSize: 10\n    };\n\n    render() {\n      const {total, currentPage, pageSize} = this.state;\n      return (\n        <Pager\n          total={total}\n          currentPage={currentPage}\n          pageSize={pageSize}\n          openTotal={total < 100}\n          onPageChange={cp => this.setState({currentPage: cp})}\n          onLoadPage={cp => this.setState({currentPage: cp, total: total + 10})}\n          visiblePagesLimit={5}\n          disablePageSizeSelector\n        />\n      );\n    }\n  }\n\n  return <PagerDemo/>;\n};\n\nopenTotal.storyName = 'open total';\n\nexport const openTotalAndHistorySupport = () => {\n  interface PagerDemoState {\n    total: number\n    currentPage: number\n    pageSize: number\n  }\n\n  class PagerDemo extends Component {\n    state = {\n      total: 999,\n      currentPage: getDataFromUrl('page', 1),\n      pageSize: getDataFromUrl('pageSize', 20)\n    };\n\n    componentDidMount() {\n      history.replaceState(\n        this.state,\n        '',\n        hrefGenerator(this.state.currentPage, this.state.pageSize)\n      );\n      window.addEventListener('popstate', this.onPopstate);\n    }\n\n    componentWillUnmount() {\n      window.removeEventListener('popstate', this.onPopstate);\n    }\n\n    onPopstate = () => {\n      if (\n        window.history.state &&\n        window.history.state.currentPage &&\n        window.history.state.pageSize\n      ) {\n        this.setState({\n          pageSize: window.history.state.pageSize,\n          currentPage: window.history.state.currentPage\n        });\n      }\n    };\n\n    handlePageChange(\n      update: Partial<PagerDemoState> | ((prevState: PagerDemoState) => Partial<PagerDemoState>)\n    ) {\n      this.setState(update, () =>\n        history.pushState(\n          this.state,\n          '',\n          hrefGenerator(this.state.currentPage, this.state.pageSize)\n        )\n      );\n    }\n\n    render() {\n      const {total, currentPage, pageSize} = this.state;\n      return (\n        <Pager\n          total={total}\n          currentPage={currentPage}\n          pageSize={pageSize}\n          hrefFunc={hrefGenerator}\n          visiblePagesLimit={5}\n          openTotal={total < 2000}\n          onPageChange={cp => this.handlePageChange({currentPage: cp})}\n          onPageSizeChange={ps => this.handlePageChange({currentPage: 1, pageSize: ps})}\n          onLoadPage={cp =>\n            this.handlePageChange(prevState => ({currentPage: cp, total: prevState.total + 500}))\n          }\n        />\n      );\n    }\n  }\n\n  return <PagerDemo/>;\n};\n\nopenTotalAndHistorySupport.storyName = 'open total and history support';\nopenTotalAndHistorySupport.parameters = {hermione: {skip: true}};\n\nexport const reloadOnCurrentPageChange = () => {\n  class PagerDemo extends Component {\n    state = {\n      total: 120,\n      currentPage: getDataFromUrl('page', 1),\n      pageSize: getDataFromUrl('pageSize', 20)\n    };\n\n    render() {\n      const {total, currentPage, pageSize} = this.state;\n      return (\n        <Pager\n          total={total}\n          currentPage={currentPage}\n          pageSize={pageSize}\n          hrefFunc={hrefGenerator}\n          visiblePagesLimit={5}\n        />\n      );\n    }\n  }\n\n  return <PagerDemo/>;\n};\n\nreloadOnCurrentPageChange.storyName = 'reload on current page change';\nreloadOnCurrentPageChange.parameters = {hermione: {skip: true}};\n",locationsMap:{basic:{startLoc:{col:21,line:32},endLoc:{col:1,line:53},startBody:{col:21,line:32},endBody:{col:1,line:53}},"custom-frame-size":{startLoc:{col:31,line:57},endLoc:{col:1,line:79},startBody:{col:31,line:57},endBody:{col:1,line:79}},"custom-frame-size-2":{startLoc:{col:32,line:84},endLoc:{col:1,line:106},startBody:{col:32,line:84},endBody:{col:1,line:106}},"custom-frame-size-3":{startLoc:{col:32,line:111},endLoc:{col:1,line:133},startBody:{col:32,line:111},endBody:{col:1,line:133}},"page-size-selector":{startLoc:{col:32,line:138},endLoc:{col:1,line:161},startBody:{col:32,line:138},endBody:{col:1,line:161}},"open-total":{startLoc:{col:25,line:165},endLoc:{col:1,line:191},startBody:{col:25,line:165},endBody:{col:1,line:191}},"open-total-and-history-support":{startLoc:{col:42,line:195},endLoc:{col:1,line:268},startBody:{col:42,line:195},endBody:{col:1,line:268}},"reload-on-current-page-change":{startLoc:{col:41,line:273},endLoc:{col:1,line:296},startBody:{col:41,line:273},endBody:{col:1,line:296}}}},notes:"Displays a pager.",hermione:{captureSelector:"*[data-test~=ring-pager]"}}};const basic=()=>{class PagerDemo extends react__WEBPACK_IMPORTED_MODULE_0__.Component{state={total:750,currentPage:1};render(){const{total:total,currentPage:currentPage}=this.state;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pager__WEBPACK_IMPORTED_MODULE_2__.Z,{total:total,currentPage:currentPage,disablePageSizeSelector:!0,onPageChange:cp=>this.setState({currentPage:cp})})}}return react__WEBPACK_IMPORTED_MODULE_0__.createElement(PagerDemo,null)};basic.storyName="basic";const customFrameSize=()=>{class PagerDemo extends react__WEBPACK_IMPORTED_MODULE_0__.Component{state={total:750,currentPage:1};render(){const{total:total,currentPage:currentPage}=this.state;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pager__WEBPACK_IMPORTED_MODULE_2__.Z,{total:total,currentPage:currentPage,visiblePagesLimit:3,disablePageSizeSelector:!0,onPageChange:cp=>this.setState({currentPage:cp})})}}return react__WEBPACK_IMPORTED_MODULE_0__.createElement(PagerDemo,null)};customFrameSize.storyName="custom frame size",customFrameSize.parameters={hermione:{skip:!0}};const customFrameSize2=()=>{class PagerDemo extends react__WEBPACK_IMPORTED_MODULE_0__.Component{state={total:250,currentPage:1};render(){const{total:total,currentPage:currentPage}=this.state;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pager__WEBPACK_IMPORTED_MODULE_2__.Z,{total:total,currentPage:currentPage,visiblePagesLimit:5,disablePageSizeSelector:!0,onPageChange:cp=>this.setState({currentPage:cp})})}}return react__WEBPACK_IMPORTED_MODULE_0__.createElement(PagerDemo,null)};customFrameSize2.storyName="custom frame size #2",customFrameSize2.parameters={hermione:{skip:!0}};const customFrameSize3=()=>{class PagerDemo extends react__WEBPACK_IMPORTED_MODULE_0__.Component{state={total:400,currentPage:1};render(){const{total:total,currentPage:currentPage}=this.state;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pager__WEBPACK_IMPORTED_MODULE_2__.Z,{total:total,currentPage:currentPage,visiblePagesLimit:5,disablePageSizeSelector:!0,onPageChange:cp=>this.setState({currentPage:cp})})}}return react__WEBPACK_IMPORTED_MODULE_0__.createElement(PagerDemo,null)};customFrameSize3.storyName="custom frame size #3",customFrameSize3.parameters={hermione:{skip:!0}};const pageSizeSelector=()=>{class PagerDemo extends react__WEBPACK_IMPORTED_MODULE_0__.Component{state={total:100,currentPage:1,pageSize:50};render(){const{total:total,currentPage:currentPage,pageSize:pageSize}=this.state;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pager__WEBPACK_IMPORTED_MODULE_2__.Z,{total:total,currentPage:currentPage,pageSize:pageSize,onPageChange:cp=>this.setState({currentPage:cp}),onPageSizeChange:ps=>this.setState({pageSize:ps})})}}return react__WEBPACK_IMPORTED_MODULE_0__.createElement(PagerDemo,null)};pageSizeSelector.storyName="page size selector";const openTotal=()=>{class PagerDemo extends react__WEBPACK_IMPORTED_MODULE_0__.Component{state={total:10,currentPage:1,pageSize:10};render(){const{total:total,currentPage:currentPage,pageSize:pageSize}=this.state;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pager__WEBPACK_IMPORTED_MODULE_2__.Z,{total:total,currentPage:currentPage,pageSize:pageSize,openTotal:total<100,onPageChange:cp=>this.setState({currentPage:cp}),onLoadPage:cp=>this.setState({currentPage:cp,total:total+10}),visiblePagesLimit:5,disablePageSizeSelector:!0})}}return react__WEBPACK_IMPORTED_MODULE_0__.createElement(PagerDemo,null)};openTotal.storyName="open total";const openTotalAndHistorySupport=()=>{class PagerDemo extends react__WEBPACK_IMPORTED_MODULE_0__.Component{state={total:999,currentPage:getDataFromUrl("page",1),pageSize:getDataFromUrl("pageSize",20)};componentDidMount(){history.replaceState(this.state,"",hrefGenerator(this.state.currentPage,this.state.pageSize)),window.addEventListener("popstate",this.onPopstate)}componentWillUnmount(){window.removeEventListener("popstate",this.onPopstate)}onPopstate=()=>{window.history.state&&window.history.state.currentPage&&window.history.state.pageSize&&this.setState({pageSize:window.history.state.pageSize,currentPage:window.history.state.currentPage})};handlePageChange(update){this.setState(update,(()=>history.pushState(this.state,"",hrefGenerator(this.state.currentPage,this.state.pageSize))))}render(){const{total:total,currentPage:currentPage,pageSize:pageSize}=this.state;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pager__WEBPACK_IMPORTED_MODULE_2__.Z,{total:total,currentPage:currentPage,pageSize:pageSize,hrefFunc:hrefGenerator,visiblePagesLimit:5,openTotal:total<2e3,onPageChange:cp=>this.handlePageChange({currentPage:cp}),onPageSizeChange:ps=>this.handlePageChange({currentPage:1,pageSize:ps}),onLoadPage:cp=>this.handlePageChange((prevState=>({currentPage:cp,total:prevState.total+500})))})}}return react__WEBPACK_IMPORTED_MODULE_0__.createElement(PagerDemo,null)};openTotalAndHistorySupport.storyName="open total and history support",openTotalAndHistorySupport.parameters={hermione:{skip:!0}};const reloadOnCurrentPageChange=()=>{class PagerDemo extends react__WEBPACK_IMPORTED_MODULE_0__.Component{state={total:120,currentPage:getDataFromUrl("page",1),pageSize:getDataFromUrl("pageSize",20)};render(){const{total:total,currentPage:currentPage,pageSize:pageSize}=this.state;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pager__WEBPACK_IMPORTED_MODULE_2__.Z,{total:total,currentPage:currentPage,pageSize:pageSize,hrefFunc:hrefGenerator,visiblePagesLimit:5})}}return react__WEBPACK_IMPORTED_MODULE_0__.createElement(PagerDemo,null)};reloadOnCurrentPageChange.storyName="reload on current page change",reloadOnCurrentPageChange.parameters={hermione:{skip:!0}},basic.__docgenInfo={description:"",methods:[],displayName:"basic"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pager/pager.examples.tsx"]={name:"basic",docgenInfo:basic.__docgenInfo,path:"src/pager/pager.examples.tsx"}),customFrameSize.__docgenInfo={description:"",methods:[],displayName:"customFrameSize"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pager/pager.examples.tsx"]={name:"customFrameSize",docgenInfo:customFrameSize.__docgenInfo,path:"src/pager/pager.examples.tsx"}),customFrameSize2.__docgenInfo={description:"",methods:[],displayName:"customFrameSize2"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pager/pager.examples.tsx"]={name:"customFrameSize2",docgenInfo:customFrameSize2.__docgenInfo,path:"src/pager/pager.examples.tsx"}),customFrameSize3.__docgenInfo={description:"",methods:[],displayName:"customFrameSize3"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pager/pager.examples.tsx"]={name:"customFrameSize3",docgenInfo:customFrameSize3.__docgenInfo,path:"src/pager/pager.examples.tsx"}),pageSizeSelector.__docgenInfo={description:"",methods:[],displayName:"pageSizeSelector"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pager/pager.examples.tsx"]={name:"pageSizeSelector",docgenInfo:pageSizeSelector.__docgenInfo,path:"src/pager/pager.examples.tsx"}),openTotal.__docgenInfo={description:"",methods:[],displayName:"openTotal"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pager/pager.examples.tsx"]={name:"openTotal",docgenInfo:openTotal.__docgenInfo,path:"src/pager/pager.examples.tsx"}),openTotalAndHistorySupport.__docgenInfo={description:"",methods:[],displayName:"openTotalAndHistorySupport"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pager/pager.examples.tsx"]={name:"openTotalAndHistorySupport",docgenInfo:openTotalAndHistorySupport.__docgenInfo,path:"src/pager/pager.examples.tsx"}),reloadOnCurrentPageChange.__docgenInfo={description:"",methods:[],displayName:"reloadOnCurrentPageChange"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pager/pager.examples.tsx"]={name:"reloadOnCurrentPageChange",docgenInfo:reloadOnCurrentPageChange.__docgenInfo,path:"src/pager/pager.examples.tsx"})},"./src/loader-inline/loader-inline.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),_global_data_tests__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/global/data-tests.ts"),_loader_inline_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/loader-inline/loader-inline.css"),_loader_inline_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_loader_inline_css__WEBPACK_IMPORTED_MODULE_2__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}class LoaderInline extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{static propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,"data-test":prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().node};render(){const{className:className,"data-test":dataTest,children:children,...restProps}=this.props,classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()(_loader_inline_css__WEBPACK_IMPORTED_MODULE_2___default().loader,className),loader=react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_extends({},restProps,{"data-test":(0,_global_data_tests__WEBPACK_IMPORTED_MODULE_4__.Z)("ring-loader-inline",dataTest),className:classes}));return children?react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,loader,react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:_loader_inline_css__WEBPACK_IMPORTED_MODULE_2___default().children},children)):loader}}LoaderInline.__docgenInfo={description:"@name Loader Inline",methods:[],displayName:"LoaderInline",props:{className:{type:{name:"string"},required:!1,description:""},"data-test":{type:{name:"string"},required:!1,description:"",tsType:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]}},children:{type:{name:"node"},required:!1,description:""}},composes:["HTMLAttributes"]},__webpack_exports__.Z=LoaderInline,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/loader-inline/loader-inline.tsx"]={name:"LoaderInline",docgenInfo:LoaderInline.__docgenInfo,path:"src/loader-inline/loader-inline.tsx"})},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/loader-inline/loader-inline.css":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_dark_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/variables_dark.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/global.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_4__.default),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_dark_css__WEBPACK_IMPORTED_MODULE_2__.default,"",!0),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_3__.default,"",!0),___CSS_LOADER_EXPORT___.push([module.id,":root {\n  /* stylelint-disable-next-line color-no-hex */\n  --ring-loader-inline-stops: #ff00eb, #bd3bff, #008eff, #58ba00, #f48700, #ff00eb;\n}\n\n."+_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_dark_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.dark+',\n.ring-ui-theme-dark {\n  /* stylelint-disable-next-line color-no-hex */\n  --ring-loader-inline-stops: #ff2eef, #d178ff, #289fff, #88d444, #ffe000, #ff2eef;\n}\n\n@keyframes spin_c5fc {\n  0% {\n    transform: rotate(0);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes pulse_d8f9 {\n  0% {\n    transform: scale(1);\n  }\n\n  100% {\n    transform: scale(1.41667);\n  }\n}\n\n.loader_f65a,\n.ring-loader-inline {\n  /* needed for better backward-compatibility */\n\n  position: relative;\n\n  display: inline-block;\n\n  overflow: hidden;\n\n  transform: rotate(0);\n  animation: spin_c5fc 1s linear infinite;\n  vertical-align: -3px;\n\n  border-radius: 8px;\n}\n\n.loader_f65a,\n  .ring-loader-inline,\n  .loader_f65a::after,\n  .ring-loader-inline::after {\n    transform-origin: 50% 50%;\n  }\n\n.loader_f65a::after, .ring-loader-inline::after {\n    display: block;\n\n    width: 16px;\n    height: 16px;\n\n    content: "";\n    animation: pulse_d8f9 0.85s cubic-bezier(0.68, 0, 0.74, 0.74) infinite alternate;\n\n    background-image: conic-gradient(#ff00eb, #bd3bff, #008eff, #58ba00, #f48700, #ff00eb);\n\n    background-image: conic-gradient(var(--ring-loader-inline-stops));\n    -webkit-mask-image: radial-gradient(8px, transparent 71.875%, var(--ring-content-background-color) 71.875%);\n            mask-image: radial-gradient(8px, transparent 71.875%, var(--ring-content-background-color) 71.875%);\n  }\n\n.children_d816 {\n  margin-left: 4px;\n}\n',"",{version:3,sources:["webpack://./src/loader-inline/loader-inline.css"],names:[],mappings:"AAKA;EACE,6CAA6C;EAC7C,gFAAgF;AAClF;;AAEA;;EAEE,6CAA6C;EAC7C,gFAAgF;AAClF;;AAEA;EACE;IACE,oBAAoB;EACtB;;EAEA;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE;IACE,mBAAmB;EACrB;;EAEA;IACE,yBAA+B;EACjC;AACF;;AAEA;;EAEE,6CAA6C;;EAE7C,kBAAkB;;EAElB,qBAAqB;;EAErB,gBAAgB;;EAEhB,oBAAoB;EACpB,uCAAkC;EAClC,oBAAoB;;EAEpB,kBAAmB;AAmBrB;;AAjBE;;;;IAEE,yBAAyB;EAC3B;;AAEA;IACE,cAAc;;IAEd,WAAqB;IACrB,YAAsB;;IAEtB,WAAW;IACX,gFAA2E;;IAE3E,sFAAiE;;IAAjE,iEAAiE;IACjE,2GAAoG;YAApG,mGAAoG;EACtG;;AAGF;EACE,gBAA2B;AAC7B",sourcesContent:['@import "../global/variables.css";\n\n@value dark from "../global/variables_dark.css";\n@value unit from "../global/global.css";\n\n:root {\n  /* stylelint-disable-next-line color-no-hex */\n  --ring-loader-inline-stops: #ff00eb, #bd3bff, #008eff, #58ba00, #f48700, #ff00eb;\n}\n\n.dark,\n:global(.ring-ui-theme-dark) {\n  /* stylelint-disable-next-line color-no-hex */\n  --ring-loader-inline-stops: #ff2eef, #d178ff, #289fff, #88d444, #ffe000, #ff2eef;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes pulse {\n  0% {\n    transform: scale(1);\n  }\n\n  100% {\n    transform: scale(calc(17 / 12));\n  }\n}\n\n.loader,\n:global(.ring-loader-inline) {\n  /* needed for better backward-compatibility */\n\n  position: relative;\n\n  display: inline-block;\n\n  overflow: hidden;\n\n  transform: rotate(0);\n  animation: spin 1s linear infinite;\n  vertical-align: -3px;\n\n  border-radius: unit;\n\n  &,\n  &::after {\n    transform-origin: 50% 50%;\n  }\n\n  &::after {\n    display: block;\n\n    width: calc(unit * 2);\n    height: calc(unit * 2);\n\n    content: "";\n    animation: pulse 0.85s cubic-bezier(0.68, 0, 0.74, 0.74) infinite alternate;\n\n    background-image: conic-gradient(var(--ring-loader-inline-stops));\n    mask-image: radial-gradient(unit, transparent 71.875%, var(--ring-content-background-color) 71.875%);\n  }\n}\n\n.children {\n  margin-left: calc(unit / 2);\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={dark:""+_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_dark_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.dark,unit:""+_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_3__.default.locals.unit,loader:"loader_f65a",spin:"spin_c5fc",pulse:"pulse_d8f9",children:"children_d816"},__webpack_exports__.default=___CSS_LOADER_EXPORT___},"./src/loader-inline/loader-inline.css":function(module,__unused_webpack_exports,__webpack_require__){var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/loader-inline/loader-inline.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}}}]);
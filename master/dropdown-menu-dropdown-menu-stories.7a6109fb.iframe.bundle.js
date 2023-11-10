(globalThis.webpackChunk_jetbrains_ring_ui=globalThis.webpackChunk_jetbrains_ring_ui||[]).push([[7917],{"./node_modules/@jetbrains/icons/chevron-10px.js":module=>{module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"><g><polygon points="5 7.99 1.5 4.5 2.5 3.5 5 6.01 7.5 3.5 8.49 4.5 5 7.99"/></g></svg>'},"./src/dropdown-menu/dropdown-menu.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{basic:()=>basic,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_decorator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.storybook/react-decorator.tsx"),_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/dropdown-menu/dropdown-menu.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/DropdownMenu",decorators:[(0,_storybook_react_decorator__WEBPACK_IMPORTED_MODULE_1__.Z)()],parameters:{storySource:{source:"import React from 'react';\n\nimport reactDecorator from '../../.storybook/react-decorator';\n\nimport DropdownMenu from './dropdown-menu';\n\nexport default {\n  title: 'Components/DropdownMenu',\n  decorators: [reactDecorator()],\n\n  parameters: {\n    notes: 'Displays a menu in a dropdown.',\n    hermione: {\n      actions: [\n        {type: 'click', selector: '[data-test~=ring-dropdown]'},\n        {\n          type: 'capture',\n          name: 'dropdown',\n          selector: ['[data-test~=ring-dropdown]', '[data-test~=ring-popup]']\n        }\n      ]\n    },\n    a11y: {element: '#storybook-root,*[data-test~=ring-dropdown]'}\n  }\n};\n\nexport const basic = () => {\n  const data = [\n    {label: 'Item'},\n    {label: 'Link to jetbrains.com', href: 'http://www.jetbrains.com'},\n    {rgItemType: DropdownMenu.ListProps.Type.SEPARATOR},\n    {rgItemType: DropdownMenu.ListProps.Type.LINK, label: 'Link Item'},\n    {\n      rgItemType: DropdownMenu.ListProps.Type.LINK,\n      label: 'Link Item With Additional Class',\n      className: 'test'\n    },\n    {rgItemType: DropdownMenu.ListProps.Type.SEPARATOR, description: 'Separator With Description'},\n    {rgItemType: DropdownMenu.ListProps.Type.TITLE, label: 'Title'},\n    {rgItemType: DropdownMenu.ListProps.Type.ITEM, label: '1 Element in group'},\n    {rgItemType: DropdownMenu.ListProps.Type.ITEM, label: '2 Element in group'}\n  ];\n\n  return <DropdownMenu data={data} anchor={'Click me!'}/>;\n};\n\nbasic.storyName = 'DropdownMenu';\n",locationsMap:{basic:{startLoc:{col:21,line:27},endLoc:{col:1,line:45},startBody:{col:21,line:27},endBody:{col:1,line:45}}}},notes:"Displays a menu in a dropdown.",hermione:{actions:[{type:"click",selector:"[data-test~=ring-dropdown]"},{type:"capture",name:"dropdown",selector:["[data-test~=ring-dropdown]","[data-test~=ring-popup]"]}]},a11y:{element:"#storybook-root,*[data-test~=ring-dropdown]"}}},basic=()=>{const data=[{label:"Item"},{label:"Link to jetbrains.com",href:"http://www.jetbrains.com"},{rgItemType:_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.Z.ListProps.Type.SEPARATOR},{rgItemType:_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.Z.ListProps.Type.LINK,label:"Link Item"},{rgItemType:_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.Z.ListProps.Type.LINK,label:"Link Item With Additional Class",className:"test"},{rgItemType:_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.Z.ListProps.Type.SEPARATOR,description:"Separator With Description"},{rgItemType:_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.Z.ListProps.Type.TITLE,label:"Title"},{rgItemType:_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.Z.ListProps.Type.ITEM,label:"1 Element in group"},{rgItemType:_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.Z.ListProps.Type.ITEM,label:"2 Element in group"}];return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.Z,{data,anchor:"Click me!"})};basic.storyName="DropdownMenu",basic.__docgenInfo={description:"",methods:[],displayName:"basic"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/dropdown-menu/dropdown-menu.stories.tsx"]={name:"basic",docgenInfo:basic.__docgenInfo,path:"src/dropdown-menu/dropdown-menu.stories.tsx"})},"./node_modules/util-deprecate/browser.js":(module,__unused_webpack_exports,__webpack_require__)=>{function config(name){try{if(!__webpack_require__.g.localStorage)return!1}catch(_){return!1}var val=__webpack_require__.g.localStorage[name];return null!=val&&"true"===String(val).toLowerCase()}module.exports=function deprecate(fn,msg){if(config("noDeprecation"))return fn;var warned=!1;return function deprecated(){if(!warned){if(config("throwDeprecation"))throw new Error(msg);config("traceDeprecation")?console.trace(msg):console.warn(msg),warned=!0}return fn.apply(this,arguments)}}}}]);
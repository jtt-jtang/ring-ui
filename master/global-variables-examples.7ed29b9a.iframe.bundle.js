"use strict";(self.webpackChunk_jetbrains_ring_ui=self.webpackChunk_jetbrains_ring_ui||[]).push([[5838],{"./src/global/variables.examples.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{basic:function(){return basic}});var _get_uid__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/global/get-uid.ts");function renderColorItem(propName){const id=(0,_get_uid__WEBPACK_IMPORTED_MODULE_0__.Z)("color-value-");return`\n    <div class="color-item">\n      <div class="color-square" style="background-color: var(${propName})"></div>\n      <div class="color-info">\n        <div>${propName}</div>\n        <div class="color-value" id="${id}"></div>\n        <script>\n          {\n            const formatColorPropertyValue = (value) => {\n              if (value.indexOf('RGB(') > -1 && value.indexOf(')') > 0) {\n                const rgbComponents = value.\n                  substring(value.indexOf('RGB(') + 'RGB('.length, value.indexOf(')')).\n                  split(',').\n                  map((it) => {\n                    try {\n                      return Number.parseInt(it.trim(), 10);\n                    } catch (err) {\n                      return 0;\n                    }\n                  }).\n                  map((it) => it.toString(16)).\n                  map((it) => (it.length === 1 ? ('0' + it) : it)).\n                  join('').toUpperCase();\n                return '#' + rgbComponents + ' - ' + value;\n              }\n              return value;\n            };\n\n            const div = document.getElementById('${id}');\n            const value = getComputedStyle(div).getPropertyValue('${propName}').toUpperCase();\n            div.textContent = formatColorPropertyValue(value);\n          }\n        <\/script>\n      </div>\n    </div>\n  `}__webpack_exports__.default={title:"Style-only/Theme palette",parameters:{storySource:{source:"import getUID from './get-uid';\n\nexport default {\n  title: 'Style-only/Theme palette',\n\n  parameters: {\n    notes: `\nRing UI colors are based on CSS custom properties spec. You can use them in you markup directly.\n    `,\n    hermione: {skip: true}\n  }\n};\n\nfunction renderColorItem(propName: string) {\n  const id = getUID('color-value-');\n  return `\n    <div class=\"color-item\">\n      <div class=\"color-square\" style=\"background-color: var(${propName})\"></div>\n      <div class=\"color-info\">\n        <div>${propName}</div>\n        <div class=\"color-value\" id=\"${id}\"></div>\n        <script>\n          {\n            const formatColorPropertyValue = (value) => {\n              if (value.indexOf('RGB(') > -1 && value.indexOf(')') > 0) {\n                const rgbComponents = value.\n                  substring(value.indexOf('RGB(') + 'RGB('.length, value.indexOf(')')).\n                  split(',').\n                  map((it) => {\n                    try {\n                      return Number.parseInt(it.trim(), 10);\n                    } catch (err) {\n                      return 0;\n                    }\n                  }).\n                  map((it) => it.toString(16)).\n                  map((it) => (it.length === 1 ? ('0' + it) : it)).\n                  join('').toUpperCase();\n                return '#' + rgbComponents + ' - ' + value;\n              }\n              return value;\n            };\n\n            const div = document.getElementById('${id}');\n            const value = getComputedStyle(div).getPropertyValue('${propName}').toUpperCase();\n            div.textContent = formatColorPropertyValue(value);\n          }\n        <\/script>\n      </div>\n    </div>\n  `;\n}\n\nconst renderColors = () => `\n  <div class=\"container\">\n    <h3>Element colors:</h3>\n    <div class=\"colors-group\">\n      ${renderColorItem('--ring-line-color')}\n      ${renderColorItem('--ring-borders-color')}\n      ${renderColorItem('--ring-icon-color')}\n      ${renderColorItem('--ring-icon-secondary-color')}\n      ${renderColorItem('--ring-border-disabled-color')}\n      ${renderColorItem('--ring-border-unselected-disabled-color')}\n      ${renderColorItem('--ring-icon-disabled-color')}\n      ${renderColorItem('--ring-border-hover-color')}\n      ${renderColorItem('--ring-icon-hover-color')}\n      ${renderColorItem('--ring-main-color')}\n      ${renderColorItem('--ring-action-link-color')}\n      ${renderColorItem('--ring-main-hover-color')}\n      ${renderColorItem('--ring-icon-error-color')}\n      ${renderColorItem('--ring-icon-warning-color')}\n      ${renderColorItem('--ring-icon-success-color')}\n      ${renderColorItem('--ring-pale-control-color')}\n      ${renderColorItem('--ring-popup-border-color')}\n      ${renderColorItem('--ring-popup-shadow-color')}\n      ${renderColorItem('--ring-message-shadow-color')}\n      ${renderColorItem('--ring-button-danger-hover-color')}\n      ${renderColorItem('--ring-button-primary-border-color')}\n    </div>\n\n    <h3>Text colors:</h3>\n    <div class=\"colors-group\">\n      ${renderColorItem('--ring-search-color')}\n      ${renderColorItem('--ring-hint-color')}\n      ${renderColorItem('--ring-link-color')}\n      ${renderColorItem('--ring-link-hover-color')}\n      ${renderColorItem('--ring-error-color')}\n      ${renderColorItem('--ring-warning-color')}\n      ${renderColorItem('--ring-success-color')}\n      ${renderColorItem('--ring-text-color')}\n      ${renderColorItem('--ring-active-text-color')}\n      ${renderColorItem('--ring-heading-color')}\n      ${renderColorItem('--ring-secondary-color')}\n      ${renderColorItem('--ring-disabled-color')}\n      ${renderColorItem('--ring-white-text-color')}\n    </div>\n\n    <h3>Background colors:</h3>\n    <div class=\"colors-group\">\n      ${renderColorItem('--ring-content-background-color')}\n      ${renderColorItem('--ring-popup-background-color')}\n      ${renderColorItem('--ring-sidebar-background-color')}\n      ${renderColorItem('--ring-selected-background-color')}\n      ${renderColorItem('--ring-hover-background-color')}\n      ${renderColorItem('--ring-navigation-background-color')}\n      ${renderColorItem('--ring-removed-background-color')}\n      ${renderColorItem('--ring-warning-background-color')}\n      ${renderColorItem('--ring-added-background-color')}\n      ${renderColorItem('--ring-tag-background-color')}\n      ${renderColorItem('--ring-tag-hover-background-color')}\n      ${renderColorItem('--ring-disabled-background-color')}\n      ${renderColorItem('--ring-disabled-selected-background-color')}\n      ${renderColorItem('--ring-button-danger-active-color')}\n      ${renderColorItem('--ring-button-loader-background')}\n      ${renderColorItem('--ring-button-primary-background-color')}\n    </div>\n  </div>\n`;\n\nexport const basic = () => `\n  <div>\n    <h2>Default theme</h2>\n    ${renderColors()}\n  </div>\n`;\n\nbasic.storyName = 'Theme palette';\n\nbasic.parameters = {\n  storyStyles: `\n<style>\n  .container {\n    background-color: var(--ring-content-background-color);\n    color: var(--ring-text-color);\n    font-family: var(--ring-font-family);\n  }\n\n  .colors-group {\n    display: flex;\n    flex-wrap: wrap;\n    font-family: var(--ring-font-family-monospace);\n  }\n\n  .color-square {\n    width: calc(var(--ring-unit) * 4);\n    height: calc(var(--ring-unit) * 4);\n    border-radius: var(--ring-border-radius);\n  }\n\n  .color-info {\n    margin-left: var(--ring-unit);\n  }\n\n  .color-value {\n    font-size: var(--ring-font-size-smaller);\n    color: var(--ring-secondary-color);\n  }\n\n  .color-item {\n    display: flex;\n    flex-basis: 30%;\n    padding: 4px var(--ring-unit);\n    align-items: center;\n  }\n</style>\n      `\n};\n",locationsMap:{basic:{startLoc:{col:21,line:120},endLoc:{col:1,line:125},startBody:{col:21,line:120},endBody:{col:1,line:125}}}},notes:"\nRing UI colors are based on CSS custom properties spec. You can use them in you markup directly.\n    ",hermione:{skip:!0}}};const basic=()=>`\n  <div>\n    <h2>Default theme</h2>\n    \n  <div class="container">\n    <h3>Element colors:</h3>\n    <div class="colors-group">\n      ${renderColorItem("--ring-line-color")}\n      ${renderColorItem("--ring-borders-color")}\n      ${renderColorItem("--ring-icon-color")}\n      ${renderColorItem("--ring-icon-secondary-color")}\n      ${renderColorItem("--ring-border-disabled-color")}\n      ${renderColorItem("--ring-border-unselected-disabled-color")}\n      ${renderColorItem("--ring-icon-disabled-color")}\n      ${renderColorItem("--ring-border-hover-color")}\n      ${renderColorItem("--ring-icon-hover-color")}\n      ${renderColorItem("--ring-main-color")}\n      ${renderColorItem("--ring-action-link-color")}\n      ${renderColorItem("--ring-main-hover-color")}\n      ${renderColorItem("--ring-icon-error-color")}\n      ${renderColorItem("--ring-icon-warning-color")}\n      ${renderColorItem("--ring-icon-success-color")}\n      ${renderColorItem("--ring-pale-control-color")}\n      ${renderColorItem("--ring-popup-border-color")}\n      ${renderColorItem("--ring-popup-shadow-color")}\n      ${renderColorItem("--ring-message-shadow-color")}\n      ${renderColorItem("--ring-button-danger-hover-color")}\n      ${renderColorItem("--ring-button-primary-border-color")}\n    </div>\n\n    <h3>Text colors:</h3>\n    <div class="colors-group">\n      ${renderColorItem("--ring-search-color")}\n      ${renderColorItem("--ring-hint-color")}\n      ${renderColorItem("--ring-link-color")}\n      ${renderColorItem("--ring-link-hover-color")}\n      ${renderColorItem("--ring-error-color")}\n      ${renderColorItem("--ring-warning-color")}\n      ${renderColorItem("--ring-success-color")}\n      ${renderColorItem("--ring-text-color")}\n      ${renderColorItem("--ring-active-text-color")}\n      ${renderColorItem("--ring-heading-color")}\n      ${renderColorItem("--ring-secondary-color")}\n      ${renderColorItem("--ring-disabled-color")}\n      ${renderColorItem("--ring-white-text-color")}\n    </div>\n\n    <h3>Background colors:</h3>\n    <div class="colors-group">\n      ${renderColorItem("--ring-content-background-color")}\n      ${renderColorItem("--ring-popup-background-color")}\n      ${renderColorItem("--ring-sidebar-background-color")}\n      ${renderColorItem("--ring-selected-background-color")}\n      ${renderColorItem("--ring-hover-background-color")}\n      ${renderColorItem("--ring-navigation-background-color")}\n      ${renderColorItem("--ring-removed-background-color")}\n      ${renderColorItem("--ring-warning-background-color")}\n      ${renderColorItem("--ring-added-background-color")}\n      ${renderColorItem("--ring-tag-background-color")}\n      ${renderColorItem("--ring-tag-hover-background-color")}\n      ${renderColorItem("--ring-disabled-background-color")}\n      ${renderColorItem("--ring-disabled-selected-background-color")}\n      ${renderColorItem("--ring-button-danger-active-color")}\n      ${renderColorItem("--ring-button-loader-background")}\n      ${renderColorItem("--ring-button-primary-background-color")}\n    </div>\n  </div>\n\n  </div>\n`;basic.storyName="Theme palette",basic.parameters={storyStyles:"\n<style>\n  .container {\n    background-color: var(--ring-content-background-color);\n    color: var(--ring-text-color);\n    font-family: var(--ring-font-family);\n  }\n\n  .colors-group {\n    display: flex;\n    flex-wrap: wrap;\n    font-family: var(--ring-font-family-monospace);\n  }\n\n  .color-square {\n    width: calc(var(--ring-unit) * 4);\n    height: calc(var(--ring-unit) * 4);\n    border-radius: var(--ring-border-radius);\n  }\n\n  .color-info {\n    margin-left: var(--ring-unit);\n  }\n\n  .color-value {\n    font-size: var(--ring-font-size-smaller);\n    color: var(--ring-secondary-color);\n  }\n\n  .color-item {\n    display: flex;\n    flex-basis: 30%;\n    padding: 4px var(--ring-unit);\n    align-items: center;\n  }\n</style>\n      "}}}]);
(self.webpackChunk_jetbrains_ring_ui=self.webpackChunk_jetbrains_ring_ui||[]).push([[7212],{"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/error-bubble/error-bubble-legacy.css":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/global.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default,"",!0),___CSS_LOADER_EXPORT___.push([module.id,'.ring-error-bubble {\n  position: absolute;\n  z-index: 2;\n  top: 0;\n  left: calc(100% + 2px);\n\n  display: none;\n\n  box-sizing: border-box;\n  min-height: 24px;\n  padding-right: 16px;\n  padding-left: 16px;\n\n  white-space: nowrap;\n\n  color: var(--ring-error-color);\n  border: 1px solid var(--ring-popup-border-color);\n\n  border-radius: var(--ring-border-radius);\n  background: var(--ring-popup-background-color);\n  box-shadow: var(--ring-popup-shadow);\n\n  font-family: var(--ring-font-family);\n\n  font-size: 12px;\n\n  line-height: 22px;\n}\n\n.ring-error-bubble.active {\n  display: inline-block;\n}\n\n.ring-error-bubble::before {\n  position: absolute;\n  z-index: var(--ring-invisible-element-z-index);\n  top: 7px;\n  left: -5px;\n\n  display: block;\n\n  width: 8px;\n  height: 8px;\n\n  content: "";\n  transform: rotate(45deg);\n\n  border: 1px solid var(--ring-popup-border-color);\n  border-top: none;\n  border-right: none;\n\n  background: var(--ring-popup-background-color);\n}\n\n.ring-error-bubble_material {\n  padding-left: 8px;\n\n  border: 0;\n  background: transparent none;\n  box-shadow: none;\n}\n\n.ring-error-bubble_material::before {\n  display: none;\n}\n\n.ring-form__control .ring-error-bubble {\n  top: 1px;\n}\n\n/**\n * .ring-error-bubble requires a position: relative container.\n * Use this class if your markup doesn\'t have one.\n */\n.ring-error-bubble-wrapper {\n  position: relative;\n}\n',"",{version:3,sources:["webpack://./src/error-bubble/error-bubble-legacy.css"],names:[],mappings:"AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,MAAM;EACN,sBAAsB;;EAEtB,aAAa;;EAEb,sBAAsB;EACtB,gBAA0B;EAC1B,mBAA6B;EAC7B,kBAA4B;;EAE5B,mBAAmB;;EAEnB,8BAA8B;EAC9B,gDAAgD;;EAEhD,wCAAwC;EACxC,8CAA8C;EAC9C,oCAAoC;;EAEpC,oCAAoC;;EAEpC,eAAe;;EAEf,iBAAiB;AACnB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,8CAA8C;EAC9C,QAAQ;EACR,UAAU;;EAEV,cAAc;;EAEd,UAAW;EACX,WAAY;;EAEZ,WAAW;EACX,wBAAwB;;EAExB,gDAAgD;EAChD,gBAAgB;EAChB,kBAAkB;;EAElB,8CAA8C;AAChD;;AAEA;EACE,iBAAkB;;EAElB,SAAS;EACT,4BAA4B;EAC5B,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,QAAQ;AACV;;AAEA;;;EAGE;AACF;EACE,kBAAkB;AACpB",sourcesContent:['@value unit from "../global/global.css";\n\n:global(.ring-error-bubble) {\n  position: absolute;\n  z-index: 2;\n  top: 0;\n  left: calc(100% + 2px);\n\n  display: none;\n\n  box-sizing: border-box;\n  min-height: calc(3 * unit);\n  padding-right: calc(2 * unit);\n  padding-left: calc(2 * unit);\n\n  white-space: nowrap;\n\n  color: var(--ring-error-color);\n  border: 1px solid var(--ring-popup-border-color);\n\n  border-radius: var(--ring-border-radius);\n  background: var(--ring-popup-background-color);\n  box-shadow: var(--ring-popup-shadow);\n\n  font-family: var(--ring-font-family);\n\n  font-size: 12px;\n\n  line-height: 22px;\n}\n\n:global(.ring-error-bubble.active) {\n  display: inline-block;\n}\n\n:global(.ring-error-bubble::before) {\n  position: absolute;\n  z-index: var(--ring-invisible-element-z-index);\n  top: 7px;\n  left: -5px;\n\n  display: block;\n\n  width: unit;\n  height: unit;\n\n  content: "";\n  transform: rotate(45deg);\n\n  border: 1px solid var(--ring-popup-border-color);\n  border-top: none;\n  border-right: none;\n\n  background: var(--ring-popup-background-color);\n}\n\n:global(.ring-error-bubble_material) {\n  padding-left: unit;\n\n  border: 0;\n  background: transparent none;\n  box-shadow: none;\n}\n\n:global(.ring-error-bubble_material::before) {\n  display: none;\n}\n\n:global(.ring-form__control .ring-error-bubble) {\n  top: 1px;\n}\n\n/**\n * .ring-error-bubble requires a position: relative container.\n * Use this class if your markup doesn\'t have one.\n */\n:global(.ring-error-bubble-wrapper) {\n  position: relative;\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={unit:""+_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.unit},__webpack_exports__.default=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/form/form.css":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/global.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__.default),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default,"",!0),___CSS_LOADER_EXPORT___.push([module.id,'/**\n * @name Form\n*/\n\n.ring-form {\n  color: var(--ring-text-color);\n\n  font-family: var(--ring-font-family);\n  font-size: var(--ring-font-size);\n}\n\n.ring-form_white-bg {\n  background: var(--ring-content-background-color);\n}\n\n.ring-form_border {\n  border: 1px solid var(--ring-disabled-color);\n  border-radius: 2px;\n}\n\n.ring-form_rows .ring-form__label {\n  float: none;\n\n  max-width: none;\n}\n\n.ring-form_rows.ring-form__control {\n  width: 336px;\n  margin-left: 0;\n}\n\n.ring-form__wrap {\n  margin-bottom: 0;\n  padding: 24px 32px 0 32px;\n}\n\n.ring-form__header {\n  min-height: 13px;\n  padding-bottom: 16px;\n}\n\n.ring-form__control__description {\n  display: block;\n\n  max-width: 900px;\n  padding-top: 4px;\n\n  color: var(--ring-secondary-color);\n\n  font-size: var(--ring-font-size-smaller);\n  line-height: 16px !important;\n}\n\n.ring-form__title-img {\n  float: left;\n\n  height: 32px;\n\n  border: 0;\n}\n\n.ring-form__title {\n  display: block;\n\n  margin-bottom: 8px;\n\n  font-weight: bold;\n}\n\n.ring-form__main-title {\n  color: var(--ring-text-color);\n\n  font-family: var(--ring-font-family);\n  font-size: 19px;\n}\n\n.ring-form__title_separated {\n  margin: 24px 0;\n}\n\n.ring-form__group {\n  position: relative;\n\n  margin: 16px 0;\n}\n\n.ring-form__group:first-child {\n  margin-top: 0;\n}\n\n.ring-form__group::after {\n  display: block;\n  clear: both;\n\n  content: "";\n}\n\n.ring-form__group_united {\n  padding-bottom: 0;\n}\n\n.ring-form__group .ring_form__group {\n  padding-top: 0;\n  padding-left: 16px;\n}\n\n.ring-form__group .ring_form__group .ring-form__control {\n  margin-left: 144px;\n}\n\n.ring-form__group_nested {\n  padding-top: 0;\n  padding-left: 16px;\n}\n\n.ring-form__group_nested .ring-form__control {\n  margin-left: 144px;\n}\n\n.ring-form__label {\n  position: relative;\n  top: 0;\n\n  display: inline-block;\n  float: left;\n\n  max-width: 144px;\n  padding-top: 4px;\n\n  vertical-align: top;\n\n  line-height: 16px;\n}\n\n.ring-form__label .ring-radio-btn__label {\n  top: -2px;\n}\n\n.ring-form__label .ring-checkbox__label {\n  top: -2px;\n}\n\n/* End of special fix */\n\n.ring-form__label_title {\n  font-weight: bold;\n}\n\n.ring-form__control {\n  position: relative;\n\n  width: auto;\n  min-height: 24px;\n  margin-left: 160px;\n\n  vertical-align: top;\n\n  line-height: 24px;\n}\n\n.ring-form__control_text::after {\n  display: inline-block;\n\n  height: 24px;\n\n  content: "";\n  vertical-align: middle;\n}\n\n/* Temporary solution, proper grid is necessary */\n.ring-form__control_secondary {\n  position: absolute;\n  top: 8px;\n  left: 216px;\n}\n\n.ring-form__control_on {\n  color: var(--ring-success-color);\n}\n\n.ring-form__control_off {\n  color: var(--ring-secondary-color);\n}\n\n.ring-form__control-link {\n  position: relative;\n  top: 6px;\n}\n\n.ring-form__control_small {\n  margin-left: 128px !important;\n}\n\n.ring-form__info {\n  width: 680px;\n  margin-bottom: -6px;\n  margin-left: 160px;\n\n  line-height: 20px;\n}\n\n.ring-form__control__part {\n  margin-right: 8px;\n}\n\n/* Form for key-value data\n\n You can add "ring-form\\__group_short" to "ring-form\\__group" to make the left column shorter\n\n Markup:\n <form class="ring-form">\n  <div class="ring-form__group ring-form__group_short">\n    <label class="ring-form__label">\n      <input class="ring-radio-btn" type="radio" name="find-type" id="breakout-checkbox-1"/>\n      <label class="ring-radio-btn__label" for="breakout-checkbox-1"></label>\n    </label>\n    <div class="ring-form__control">\n      <label for="breakout-checkbox-1">Users with same emails and similar names</label>\n    </div>\n  </div>\n  <div class="ring-form__group ring-form__group_short">\n    <label class="ring-form__label">\n      <input class="ring-radio-btn" type="radio" name="find-type" id="breakout-checkbox-2"/>\n      <label class="ring-radio-btn__label" for="breakout-checkbox-2"></label>\n    </label>\n    <div class="ring-form__control">\n      <label for="breakout-checkbox-2">Users with same emails</label>\n    </div>\n  </div>\n  <div class="ring-form__group ring-form__group_short">\n    <label class="ring-form__label">\n        <input id="short-checkbox-1" class="ring-checkbox" type="checkbox" name="example">\n        <label class="ring-checkbox__label" for="short-checkbox-1"></label>\n    </label>\n    <div class="ring-form__control">\n      <label class="ring-label" for="breakout-checkbox-3">Users having at least something in common</label>\n    </div>\n  </div>\n  <div class="ring-form__footer">\n    <button class="ring-button ring-button_blue">Save</button>\n    <button class="ring-button">Cancel</button>\n  </div>\n </form> */\n\n.ring-form__group_short {\n  padding-top: 4px;\n  padding-bottom: 0;\n}\n\n.ring-form__group_short:last-child {\n  padding-bottom: 8px;\n}\n\n.ring-form__group_short.ring-form__control {\n  margin-left: 24px;\n}\n\n.ring-form_small .ring-form__label {\n  max-width: 96px;\n}\n\n.ring-form_small .ring-form__control {\n  margin-left: 128px;\n}\n',"",{version:3,sources:["webpack://./src/form/form.css"],names:[],mappings:"AAIA;;CAEC;;AAED;EACE,6BAA6B;;EAE7B,oCAAoC;EACpC,gCAAgC;AAClC;;AAEA;EACE,gDAAgD;AAClD;;AAEA;EACE,4CAA4C;EAC5C,kBAAkB;AACpB;;AAEA;EACE,WAAW;;EAEX,eAAe;AACjB;;AAEA;EACE,YAAsB;EACtB,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,yBAAuD;AACzD;;AAEA;EACE,gBAAgB;EAChB,oBAA8B;AAChC;;AAEA;EACE,cAAc;;EAEd,gBAAgB;EAChB,gBAA2B;;EAE3B,kCAAkC;;EAElC,wCAAwC;EACxC,4BAA4B;AAC9B;;AAEA;EACE,WAAW;;EAEX,YAAsB;;EAEtB,SAAS;AACX;;AAEA;EACE,cAAc;;EAEd,kBAAyB;;EAEzB,iBAAiB;AACnB;;AAEA;EACE,6BAA6B;;EAE7B,oCAAoC;EACpC,eAAe;AACjB;;AAEA;EACE,cAAwB;AAC1B;;AAEA;EACE,kBAAkB;;EAElB,cAAwB;AAC1B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;EACd,WAAW;;EAEX,WAAW;AACb;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,kBAA4B;AAC9B;;AAEA;EACE,kBAA4B;AAC9B;;AAEA;EACE,cAAc;EACd,kBAA4B;AAC9B;;AAEA;EACE,kBAA4B;AAC9B;;AAEA;EACE,kBAAkB;EAClB,MAAM;;EAEN,qBAAqB;EACrB,WAAW;;EAEX,gBAA0B;EAC1B,gBAA2B;;EAE3B,mBAAmB;;EAEnB,iBAA2B;AAC7B;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,SAAS;AACX;;AAEA,uBAAuB;;AAEvB;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;;EAElB,WAAW;EACX,gBAA0B;EAC1B,kBAA4B;;EAE5B,mBAAmB;;EAEnB,iBAA2B;AAC7B;;AAEA;EACE,qBAAqB;;EAErB,YAAsB;;EAEtB,WAAW;EACX,sBAAsB;AACxB;;AAEA,iDAAiD;AACjD;EACE,kBAAkB;EAClB,QAAS;EACT,WAAqB;AACvB;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,kBAAkB;EAClB,QAAQ;AACV;;AAEA;EACE,6BAAuC;AACzC;;AAEA;EACE,YAAsB;EACtB,mBAAoC;EACpC,kBAA4B;;EAE5B,iBAAiB;AACnB;;AAEA;EACE,iBAAkB;AACpB;;AAEA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAqCU;;AAEV;EACE,gBAA2B;EAC3B,iBAAiB;AACnB;;AAEA;EACE,mBAAoB;AACtB;;AAEA;EACE,iBAA2B;AAC7B;;AAEA;EACE,eAA0B;AAC5B;;AAEA;EACE,kBAA4B;AAC9B",sourcesContent:['@import "../global/variables.css";\n\n@value unit from "../global/global.css";\n\n/**\n * @name Form\n*/\n\n:global(.ring-form) {\n  color: var(--ring-text-color);\n\n  font-family: var(--ring-font-family);\n  font-size: var(--ring-font-size);\n}\n\n:global(.ring-form_white-bg) {\n  background: var(--ring-content-background-color);\n}\n\n:global(.ring-form_border) {\n  border: 1px solid var(--ring-disabled-color);\n  border-radius: 2px;\n}\n\n:global(.ring-form_rows .ring-form__label) {\n  float: none;\n\n  max-width: none;\n}\n\n:global(.ring-form_rows.ring-form__control) {\n  width: calc(42 * unit);\n  margin-left: 0;\n}\n\n:global(.ring-form__wrap) {\n  margin-bottom: 0;\n  padding: calc(3 * unit) calc(4 * unit) 0 calc(4 * unit);\n}\n\n:global(.ring-form__header) {\n  min-height: 13px;\n  padding-bottom: calc(2 * unit);\n}\n\n:global(.ring-form__control__description) {\n  display: block;\n\n  max-width: 900px;\n  padding-top: calc(unit / 2);\n\n  color: var(--ring-secondary-color);\n\n  font-size: var(--ring-font-size-smaller);\n  line-height: 16px !important;\n}\n\n:global(.ring-form__title-img) {\n  float: left;\n\n  height: calc(4 * unit);\n\n  border: 0;\n}\n\n:global(.ring-form__title) {\n  display: block;\n\n  margin-bottom: calc(unit);\n\n  font-weight: bold;\n}\n\n:global(.ring-form__main-title) {\n  color: var(--ring-text-color);\n\n  font-family: var(--ring-font-family);\n  font-size: 19px;\n}\n\n:global(.ring-form__title_separated) {\n  margin: calc(unit * 3) 0;\n}\n\n:global(.ring-form__group) {\n  position: relative;\n\n  margin: calc(unit * 2) 0;\n}\n\n:global(.ring-form__group:first-child) {\n  margin-top: 0;\n}\n\n:global(.ring-form__group::after) {\n  display: block;\n  clear: both;\n\n  content: "";\n}\n\n:global(.ring-form__group_united) {\n  padding-bottom: 0;\n}\n\n:global(.ring-form__group .ring_form__group) {\n  padding-top: 0;\n  padding-left: calc(unit * 2);\n}\n\n:global(.ring-form__group .ring_form__group .ring-form__control) {\n  margin-left: calc(18 * unit);\n}\n\n:global(.ring-form__group_nested) {\n  padding-top: 0;\n  padding-left: calc(unit * 2);\n}\n\n:global(.ring-form__group_nested .ring-form__control) {\n  margin-left: calc(18 * unit);\n}\n\n:global(.ring-form__label) {\n  position: relative;\n  top: 0;\n\n  display: inline-block;\n  float: left;\n\n  max-width: calc(18 * unit);\n  padding-top: calc(unit / 2);\n\n  vertical-align: top;\n\n  line-height: calc(2 * unit);\n}\n\n:global(.ring-form__label .ring-radio-btn__label) {\n  top: -2px;\n}\n\n:global(.ring-form__label .ring-checkbox__label) {\n  top: -2px;\n}\n\n/* End of special fix */\n\n:global(.ring-form__label_title) {\n  font-weight: bold;\n}\n\n:global(.ring-form__control) {\n  position: relative;\n\n  width: auto;\n  min-height: calc(3 * unit);\n  margin-left: calc(20 * unit);\n\n  vertical-align: top;\n\n  line-height: calc(3 * unit);\n}\n\n:global(.ring-form__control_text::after) {\n  display: inline-block;\n\n  height: calc(unit * 3);\n\n  content: "";\n  vertical-align: middle;\n}\n\n/* Temporary solution, proper grid is necessary */\n:global(.ring-form__control_secondary) {\n  position: absolute;\n  top: unit;\n  left: calc(27 * unit);\n}\n\n:global(.ring-form__control_on) {\n  color: var(--ring-success-color);\n}\n\n:global(.ring-form__control_off) {\n  color: var(--ring-secondary-color);\n}\n\n:global(.ring-form__control-link) {\n  position: relative;\n  top: 6px;\n}\n\n:global(.ring-form__control_small) {\n  margin-left: calc(16 * unit) !important;\n}\n\n:global(.ring-form__info) {\n  width: calc(85 * unit);\n  margin-bottom: calc(-1 * unit + 2px);\n  margin-left: calc(20 * unit);\n\n  line-height: 20px;\n}\n\n:global(.ring-form__control__part) {\n  margin-right: unit;\n}\n\n/* Form for key-value data\n\n You can add "ring-form\\__group_short" to "ring-form\\__group" to make the left column shorter\n\n Markup:\n <form class="ring-form">\n  <div class="ring-form__group ring-form__group_short">\n    <label class="ring-form__label">\n      <input class="ring-radio-btn" type="radio" name="find-type" id="breakout-checkbox-1"/>\n      <label class="ring-radio-btn__label" for="breakout-checkbox-1"></label>\n    </label>\n    <div class="ring-form__control">\n      <label for="breakout-checkbox-1">Users with same emails and similar names</label>\n    </div>\n  </div>\n  <div class="ring-form__group ring-form__group_short">\n    <label class="ring-form__label">\n      <input class="ring-radio-btn" type="radio" name="find-type" id="breakout-checkbox-2"/>\n      <label class="ring-radio-btn__label" for="breakout-checkbox-2"></label>\n    </label>\n    <div class="ring-form__control">\n      <label for="breakout-checkbox-2">Users with same emails</label>\n    </div>\n  </div>\n  <div class="ring-form__group ring-form__group_short">\n    <label class="ring-form__label">\n        <input id="short-checkbox-1" class="ring-checkbox" type="checkbox" name="example">\n        <label class="ring-checkbox__label" for="short-checkbox-1"></label>\n    </label>\n    <div class="ring-form__control">\n      <label class="ring-label" for="breakout-checkbox-3">Users having at least something in common</label>\n    </div>\n  </div>\n  <div class="ring-form__footer">\n    <button class="ring-button ring-button_blue">Save</button>\n    <button class="ring-button">Cancel</button>\n  </div>\n </form> */\n\n:global(.ring-form__group_short) {\n  padding-top: calc(unit / 2);\n  padding-bottom: 0;\n}\n\n:global(.ring-form__group_short:last-child) {\n  padding-bottom: unit;\n}\n\n:global(.ring-form__group_short.ring-form__control) {\n  margin-left: calc(unit * 3);\n}\n\n:global(.ring-form_small .ring-form__label) {\n  max-width: calc(12 * unit);\n}\n\n:global(.ring-form_small .ring-form__control) {\n  margin-left: calc(16 * unit);\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={unit:""+_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.unit},__webpack_exports__.default=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/input/input-legacy.css":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/global.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__.default),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default,"",!0),___CSS_LOADER_EXPORT___.push([module.id,'/*\nInput\n\n Markup:\n <input class="{$modifiers} ring-input" type="text" placeholder="placeholder">\n\n :disabled            - Disabled state, also available as the `.ring-input_disabled` class name.\n :active              - Active state, also available as the `.ring-input_active` class name.\n :focus               - Focus state, also available as the `.ring-input_focus` class name.\n .ring-input_correct  - The entered value is correct.\n .ring-input_error    - The entered value is incorrect.\n */\n\n.ring-input {\n  /* .heightS */\n  --ring-input-padding-block: 1px;\n  --ring-input-padding-inline: 8px;\n  --ring-input-padding-start: var(--ring-input-padding-inline);\n  --ring-input-padding-end: var(--ring-input-padding-inline);\n\n  /* stylelint-disable order/properties-order */\n\n  box-sizing: border-box;\n\n  font: inherit;\n  font-size: var(--ring-font-size);\n  line-height: var(--ring-line-height);\n\n  width: 100%;\n\n  margin: 0;\n  padding-top: 1px;\n  padding-top: var(--ring-input-padding-block);\n  padding-right: 8px;\n  padding-right: var(--ring-input-padding-end);\n  padding-bottom: 1px;\n  padding-bottom: var(--ring-input-padding-block);\n  padding-left: 8px;\n  padding-left: var(--ring-input-padding-start);\n\n  transition: border-color var(--ring-ease);\n\n  color: var(--ring-text-color);\n  border: 1px solid var(--ring-borders-color);\n  border-radius: var(--ring-border-radius);\n  outline: none;\n  background-color: var(--ring-content-background-color);\n\n  caret-color: var(--ring-main-color);\n\n  /* stylelint-enable order/properties-order */\n}\n\n[dir="rtl"] .ring-input {\n    padding-right: var(--ring-input-padding-start);\n    padding-left: var(--ring-input-padding-end);\n  }\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.ring-input:hover {\n    transition: none;\n\n    border-color: var(--ring-border-hover-color);\n  }}\n\n.error_dbb7 .ring-input {\n    border-color: var(--ring-icon-error-color);\n  }\n\n.ring-input:focus {\n    transition: none;\n\n    border-color: var(--ring-main-color);\n  }\n\n[disabled].ring-input {\n    color: var(--ring-disabled-color);\n    border-color: var(--ring-border-disabled-color);\n    background-color: var(--ring-disabled-background-color);\n\n    -webkit-text-fill-color: var(--ring-disabled-color); /* Required for Safari, see RG-2063 for details */\n  }\n\n/*\n    Kill yellow/blue webkit autocomplete\n    https://css-tricks.com/snippets/css/change-autocomplete-styles-webkit-browsers/\n  */\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.ring-input:-webkit-autofill:hover {\n      -webkit-transition: background-color 50000s ease-in-out 0s;\n      transition: background-color 50000s ease-in-out 0s;\n    }}\n\n.ring-input:-webkit-autofill,\n    .ring-input:-webkit-autofill:focus {\n      -webkit-transition: background-color 50000s ease-in-out 0s;\n      transition: background-color 50000s ease-in-out 0s;\n    }\n\n.ring-input_error {\n  border-color: var(--ring-icon-error-color);\n}\n\n.ring-input_filter-popup {\n  width: 100%;\n  min-width: 200px;\n}\n\n.ring-input.ring-input:disabled,\n.ring-input.ring-input[disabled],\n.ring-input.ring-input_disabled {\n  color: var(--ring-disabled-color);\n  border-color: var(--ring-border-disabled-color);\n  background-color: var(--ring-disabled-background-color);\n\n  -webkit-text-fill-color: var(--ring-disabled-color); /* Required for Safari, see RG-2063 for details */\n}\n\ntextarea.ring-input {\n  box-sizing: border-box;\n\n  min-height: 64px;\n\n  resize: none;\n}\n\n/* https://stackoverflow.com/questions/7144843/extra-space-under-textarea-differs-along-browsers */\n.ring-input::placeholder {\n  color: var(--ring-disabled-color);\n}\n',"",{version:3,sources:["webpack://./src/input/input-legacy.css","<no source>"],names:[],mappings:"AAIA;;;;;;;;;;;EAWE;;AAEF;EACE,aAAa;EACb,+BAA+B;EAC/B,gCAAiC;EACjC,4DAA4D;EAC5D,0DAA0D;;EAE1D,6CAA6C;;EAE7C,sBAAsB;;EAEtB,aAAa;EACb,gCAAgC;EAChC,oCAAoC;;EAEpC,WAAW;;EAEX,SAAS;EACT,gBAA4C;EAA5C,4CAA4C;EAC5C,kBAA4C;EAA5C,4CAA4C;EAC5C,mBAA+C;EAA/C,+CAA+C;EAC/C,iBAA6C;EAA7C,6CAA6C;;EAE7C,yCAAyC;;EAEzC,6BAA6B;EAC7B,2CAA2C;EAC3C,wCAAwC;EACxC,aAAa;EACb,sDAAsD;;EAEtD,mCAAmC;;EAEnC,4CAA4C;AA0C9C;;AAxCE;IACE,8CAA8C;IAC9C,2CAA2C;EAC7C;;ACvDF,wGAAA;IAAA,iBAAA;;IAAA,6CAAA;GAAA,CAAA;;AD+DE;IACE,0CAA0C;EAC5C;;AAEA;IACE,gBAAgB;;IAEhB,oCAAoC;EACtC;;AAEA;IACE,iCAAiC;IACjC,+CAA+C;IAC/C,uDAAuD;;IAEvD,mDAAmD,EAAE,iDAAiD;EACxG;;AAEA;;;GAGC;;ACpFH,wGAAA;MAAA,2DAAA;MAAA,mDAAA;KAAA,CAAA;;ADsFI;;MAGE,0DAAkD;MAAlD,kDAAkD;IACpD;;AAIJ;EACE,0CAA0C;AAC5C;;AAEA;EACE,WAAW;EACX,gBAAgB;AAClB;;AAEA;;;EAGE,iCAAiC;EACjC,+CAA+C;EAC/C,uDAAuD;;EAEvD,mDAAmD,EAAE,iDAAiD;AACxG;;AAEA;EACE,sBAAsB;;EAEtB,gBAA0B;;EAE1B,YAAY;AACd;;AAEA,kGAAkG;AAClG;EACE,iCAAiC;AACnC",sourcesContent:['@import "../global/variables.css";\n\n@value unit from "../global/global.css";\n\n/*\nInput\n\n Markup:\n <input class="{$modifiers} ring-input" type="text" placeholder="placeholder">\n\n :disabled            - Disabled state, also available as the `.ring-input_disabled` class name.\n :active              - Active state, also available as the `.ring-input_active` class name.\n :focus               - Focus state, also available as the `.ring-input_focus` class name.\n .ring-input_correct  - The entered value is correct.\n .ring-input_error    - The entered value is incorrect.\n */\n\n:global(.ring-input) {\n  /* .heightS */\n  --ring-input-padding-block: 1px;\n  --ring-input-padding-inline: unit;\n  --ring-input-padding-start: var(--ring-input-padding-inline);\n  --ring-input-padding-end: var(--ring-input-padding-inline);\n\n  /* stylelint-disable order/properties-order */\n\n  box-sizing: border-box;\n\n  font: inherit;\n  font-size: var(--ring-font-size);\n  line-height: var(--ring-line-height);\n\n  width: 100%;\n\n  margin: 0;\n  padding-top: var(--ring-input-padding-block);\n  padding-right: var(--ring-input-padding-end);\n  padding-bottom: var(--ring-input-padding-block);\n  padding-left: var(--ring-input-padding-start);\n\n  transition: border-color var(--ring-ease);\n\n  color: var(--ring-text-color);\n  border: 1px solid var(--ring-borders-color);\n  border-radius: var(--ring-border-radius);\n  outline: none;\n  background-color: var(--ring-content-background-color);\n\n  caret-color: var(--ring-main-color);\n\n  /* stylelint-enable order/properties-order */\n\n  [dir="rtl"] & {\n    padding-right: var(--ring-input-padding-start);\n    padding-left: var(--ring-input-padding-end);\n  }\n\n  &:hover {\n    transition: none;\n\n    border-color: var(--ring-border-hover-color);\n  }\n\n  .error & {\n    border-color: var(--ring-icon-error-color);\n  }\n\n  &:focus {\n    transition: none;\n\n    border-color: var(--ring-main-color);\n  }\n\n  &[disabled] {\n    color: var(--ring-disabled-color);\n    border-color: var(--ring-border-disabled-color);\n    background-color: var(--ring-disabled-background-color);\n\n    -webkit-text-fill-color: var(--ring-disabled-color); /* Required for Safari, see RG-2063 for details */\n  }\n\n  /*\n    Kill yellow/blue webkit autocomplete\n    https://css-tricks.com/snippets/css/change-autocomplete-styles-webkit-browsers/\n  */\n  &:-webkit-autofill {\n    &,\n    &:hover,\n    &:focus {\n      transition: background-color 50000s ease-in-out 0s;\n    }\n  }\n}\n\n:global(.ring-input_error) {\n  border-color: var(--ring-icon-error-color);\n}\n\n:global(.ring-input_filter-popup) {\n  width: 100%;\n  min-width: 200px;\n}\n\n:global(.ring-input.ring-input:disabled),\n:global(.ring-input.ring-input[disabled]),\n:global(.ring-input.ring-input_disabled) {\n  color: var(--ring-disabled-color);\n  border-color: var(--ring-border-disabled-color);\n  background-color: var(--ring-disabled-background-color);\n\n  -webkit-text-fill-color: var(--ring-disabled-color); /* Required for Safari, see RG-2063 for details */\n}\n\n:global(textarea.ring-input) {\n  box-sizing: border-box;\n\n  min-height: calc(8 * unit);\n\n  resize: none;\n}\n\n/* https://stackoverflow.com/questions/7144843/extra-space-under-textarea-differs-along-browsers */\n:global(.ring-input::placeholder) {\n  color: var(--ring-disabled-color);\n}\n',null],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={unit:""+_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.unit,error:"error_dbb7"},__webpack_exports__.default=___CSS_LOADER_EXPORT___},"./src/error-bubble/error-bubble-legacy.css":function(module,__unused_webpack_exports,__webpack_require__){var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/error-bubble/error-bubble-legacy.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}},"./src/form/form.css":function(module,__unused_webpack_exports,__webpack_require__){var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/form/form.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}},"./src/input/input-legacy.css":function(module,__unused_webpack_exports,__webpack_require__){var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/input/input-legacy.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}}}]);
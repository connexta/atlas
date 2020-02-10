(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./atoms sync recursive \\.stories\\.(j|t)sx?$":
/*!*****************************************!*\
  !*** ./atoms sync \.stories\.(j|t)sx?$ ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./button/button.stories.tsx": "./atoms/button/button.stories.tsx",
	"./card/card.stories.tsx": "./atoms/card/card.stories.tsx",
	"./input/async-select.stories.tsx": "./atoms/input/async-select.stories.tsx",
	"./input/input.stories.tsx": "./atoms/input/input.stories.tsx",
	"./input/select.stories.tsx": "./atoms/input/select.stories.tsx",
	"./modal/modal.stories.tsx": "./atoms/modal/modal.stories.tsx",
	"./pickers/keyboard-date-time-picker.stories.tsx": "./atoms/pickers/keyboard-date-time-picker.stories.tsx",
	"./progress/progress.stories.tsx": "./atoms/progress/progress.stories.tsx",
	"./snackbar/snackbar.stories.tsx": "./atoms/snackbar/snackbar.stories.tsx",
	"./timeline-circles-deprecated/timeline-circles.stories.tsx": "./atoms/timeline-circles-deprecated/timeline-circles.stories.tsx",
	"./timeline/timeline.stories.tsx": "./atoms/timeline/timeline.stories.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./atoms sync recursive \\.stories\\.(j|t)sx?$";

/***/ }),

/***/ "./atoms/button/button.stories.tsx":
/*!*****************************************!*\
  !*** ./atoms/button/button.stories.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const addon_knobs_1 = __webpack_require__(/*! @connexta/ace/@storybook/addon-knobs */ "./node_modules/@connexta/ace/@storybook/addon-knobs.tsx");
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const storybook_1 = __webpack_require__(/*! ../../storybook */ "./storybook/index.tsx");
const _1 = __webpack_require__(/*! ./ */ "./atoms/button/index.tsx");
const stories = storybook_1.storiesOf('Components|Button', module);
stories.add('Default', () => {
    const variant = addon_knobs_1.select('Variant', {
        Text: 'text',
        Outlined: 'outlined',
        Contained: 'contained',
    }, 'outlined');
    const size = addon_knobs_1.select('Size', {
        Small: 'small',
        Medium: 'medium',
        Large: 'large',
    }, 'small');
    const color = addon_knobs_1.select('Color', {
        Default: 'default',
        Inherit: 'inherit',
        Primary: 'primary',
        Secondary: 'secondary',
    }, 'default');
    return (React.createElement(_1.Button, { variant: variant, size: size, color: color }, "Click Me"));
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/@storybook/core/node_modules/webpack/buildin/module.js */ "./node_modules/@storybook/core/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./atoms/button/button.tsx":
/*!*********************************!*\
  !*** ./atoms/button/button.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const Button_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js"));
const IconButton_1 = __importDefault(__webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js"));
const Badge_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Badge */ "./node_modules/@material-ui/core/esm/Badge/index.js"));
const styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
exports.WrappedButton = styled_components_1.default(React.forwardRef((props, ref) => {
    return React.createElement(Button_1.default, Object.assign({}, props, { ref: ref }));
})) ``;
exports.WrappedIconButton = styled_components_1.default(React.forwardRef((props, ref) => {
    return React.createElement(IconButton_1.default, Object.assign({}, props, { ref: ref }));
})) ``;
exports.WrappedBadge = styled_components_1.default(React.forwardRef((props, ref) => {
    return React.createElement(Badge_1.default, Object.assign({}, props, { ref: ref }));
})) ``;


/***/ }),

/***/ "./atoms/button/index.tsx":
/*!********************************!*\
  !*** ./atoms/button/index.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var button_1 = __webpack_require__(/*! ./button */ "./atoms/button/button.tsx");
exports.Button = button_1.WrappedButton;
exports.IconButton = button_1.WrappedIconButton;
exports.Badge = button_1.WrappedBadge;


/***/ }),

/***/ "./atoms/card/card.stories.tsx":
/*!*************************************!*\
  !*** ./atoms/card/card.stories.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const storybook_1 = __webpack_require__(/*! ../../storybook */ "./storybook/index.tsx");
const _1 = __webpack_require__(/*! ./ */ "./atoms/card/index.tsx");
const styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
const stories = storybook_1.storiesOf('Components | Card', module);
const Wrapper = styled_components_1.default.div `
  width: 20%;
`;
stories.add('Create Card', () => (React.createElement(Wrapper, null,
    React.createElement(_1.CreateCard, { text: "Add Card" }))));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/@storybook/core/node_modules/webpack/buildin/module.js */ "./node_modules/@storybook/core/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./atoms/card/card.tsx":
/*!*****************************!*\
  !*** ./atoms/card/card.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const Card_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js"));
const CardHeader_1 = __importDefault(__webpack_require__(/*! @material-ui/core/CardHeader */ "./node_modules/@material-ui/core/esm/CardHeader/index.js"));
const CardActions_1 = __importDefault(__webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js"));
const CardContent_1 = __importDefault(__webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js"));
const CardActionArea_1 = __importDefault(__webpack_require__(/*! @material-ui/core/CardActionArea */ "./node_modules/@material-ui/core/esm/CardActionArea/index.js"));
const Typography_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js"));
const styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
const AddBox_1 = __importDefault(__webpack_require__(/*! @material-ui/icons/AddBox */ "./node_modules/@material-ui/icons/AddBox.js"));
const zero_width_space_1 = __webpack_require__(/*! ../zero-width-space/zero-width-space */ "./atoms/zero-width-space/zero-width-space.tsx");
exports.WrappedHeader = (_a) => {
    var { title } = _a, otherProps = __rest(_a, ["title"]);
    return (React.createElement(CardHeader_1.default, Object.assign({ title: React.createElement(React.Fragment, null,
            title,
            React.createElement(zero_width_space_1.ZeroWidthSpace, null)) }, otherProps)));
};
exports.WrappedCard = styled_components_1.default(React.forwardRef((props, ref) => {
    return React.createElement(Card_1.default, Object.assign({}, props, { ref: ref }));
})) ``;
exports.WrappedCardActions = styled_components_1.default(React.forwardRef((props, ref) => {
    return React.createElement(CardActions_1.default, Object.assign({}, props, { ref: ref }));
})) ``;
exports.WrappedCardContent = styled_components_1.default(React.forwardRef((props, ref) => {
    return React.createElement(CardContent_1.default, Object.assign({}, props, { ref: ref }));
})) ``;
exports.WrappedCardContentLabel = (props) => {
    return React.createElement(Typography_1.default, Object.assign({}, props, { noWrap: true, style: { opacity: 0.6 } }));
};
exports.WrappedCardContentValue = (_a) => {
    var { children } = _a, otherProps = __rest(_a, ["children"]);
    return (React.createElement(Typography_1.default, Object.assign({}, otherProps, { noWrap: true }),
        children,
        React.createElement(zero_width_space_1.ZeroWidthSpace, null)));
};
exports.WrappedCardActionArea = styled_components_1.default(React.forwardRef((props, ref) => {
    return React.createElement(CardActionArea_1.default, Object.assign({}, props, { buttonRef: ref }));
})) ``;
exports.CreateCard = styled_components_1.default(React.forwardRef((props, ref) => {
    return (React.createElement(exports.WrappedCard, Object.assign({}, props.cardProps, { ref: ref }),
        React.createElement(exports.WrappedCardActionArea, { style: {
                height: '100%',
                textAlign: 'center',
            } },
            React.createElement(exports.WrappedCardContent, null,
                React.createElement(AddBox_1.default, { style: {
                        fontSize: '7rem',
                    } }),
                React.createElement("h1", null, props.text)))));
})) ``;
try {
    // @ts-ignore
    exports.WrappedHeader.displayName = "WrappedHeader";
    // @ts-ignore
    exports.WrappedHeader.__docgenInfo = { "description": "", "displayName": "WrappedHeader", "props": { "aria-activedescendant": { "defaultValue": null, "description": "Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.", "name": "aria-activedescendant", "required": false, "type": { "name": "string" } }, "aria-atomic": { "defaultValue": null, "description": "Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.", "name": "aria-atomic", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-autocomplete": { "defaultValue": null, "description": "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\npresented if they are made.", "name": "aria-autocomplete", "required": false, "type": { "name": "\"none\" | \"inline\" | \"list\" | \"both\"" } }, "aria-busy": { "defaultValue": null, "description": "Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.", "name": "aria-busy", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-checked": { "defaultValue": null, "description": "Indicates the current \"checked\" state of checkboxes, radio buttons, and other widgets.\n@see aria-pressed\n@see aria-selected.", "name": "aria-checked", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"mixed\"" } }, "aria-colcount": { "defaultValue": null, "description": "Defines the total number of columns in a table, grid, or treegrid.\n@see aria-colindex.", "name": "aria-colcount", "required": false, "type": { "name": "number" } }, "aria-colindex": { "defaultValue": null, "description": "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.\n@see aria-colcount\n@see aria-colspan.", "name": "aria-colindex", "required": false, "type": { "name": "number" } }, "aria-colspan": { "defaultValue": null, "description": "Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-colindex\n@see aria-rowspan.", "name": "aria-colspan", "required": false, "type": { "name": "number" } }, "aria-controls": { "defaultValue": null, "description": "Identifies the element (or elements) whose contents or presence are controlled by the current element.\n@see aria-owns.", "name": "aria-controls", "required": false, "type": { "name": "string" } }, "aria-current": { "defaultValue": null, "description": "Indicates the element that represents the current item within a container or set of related elements.", "name": "aria-current", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"page\" | \"step\" | \"location\" | \"date\" | \"time\"" } }, "aria-describedby": { "defaultValue": null, "description": "Identifies the element (or elements) that describes the object.\n@see aria-labelledby", "name": "aria-describedby", "required": false, "type": { "name": "string" } }, "aria-details": { "defaultValue": null, "description": "Identifies the element that provides a detailed, extended description for the object.\n@see aria-describedby.", "name": "aria-details", "required": false, "type": { "name": "string" } }, "aria-disabled": { "defaultValue": null, "description": "Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.\n@see aria-hidden\n@see aria-readonly.", "name": "aria-disabled", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-dropeffect": { "defaultValue": null, "description": "Indicates what functions can be performed when a dragged object is released on the drop target.\n@deprecated in ARIA 1.1", "name": "aria-dropeffect", "required": false, "type": { "name": "\"none\" | \"copy\" | \"execute\" | \"link\" | \"move\" | \"popup\"" } }, "aria-errormessage": { "defaultValue": null, "description": "Identifies the element that provides an error message for the object.\n@see aria-invalid\n@see aria-describedby.", "name": "aria-errormessage", "required": false, "type": { "name": "string" } }, "aria-expanded": { "defaultValue": null, "description": "Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.", "name": "aria-expanded", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-flowto": { "defaultValue": null, "description": "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\nallows assistive technology to override the general default of reading in document source order.", "name": "aria-flowto", "required": false, "type": { "name": "string" } }, "aria-grabbed": { "defaultValue": null, "description": "Indicates an element's \"grabbed\" state in a drag-and-drop operation.\n@deprecated in ARIA 1.1", "name": "aria-grabbed", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-haspopup": { "defaultValue": null, "description": "Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.", "name": "aria-haspopup", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"menu\" | \"listbox\" | \"tree\" | \"grid\" | \"dialog\"" } }, "aria-hidden": { "defaultValue": null, "description": "Indicates whether the element is exposed to an accessibility API.\n@see aria-disabled.", "name": "aria-hidden", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-invalid": { "defaultValue": null, "description": "Indicates the entered value does not conform to the format expected by the application.\n@see aria-errormessage.", "name": "aria-invalid", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\"" } }, "aria-keyshortcuts": { "defaultValue": null, "description": "Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.", "name": "aria-keyshortcuts", "required": false, "type": { "name": "string" } }, "aria-label": { "defaultValue": null, "description": "Defines a string value that labels the current element.\n@see aria-labelledby.", "name": "aria-label", "required": false, "type": { "name": "string" } }, "aria-labelledby": { "defaultValue": null, "description": "Identifies the element (or elements) that labels the current element.\n@see aria-describedby.", "name": "aria-labelledby", "required": false, "type": { "name": "string" } }, "aria-level": { "defaultValue": null, "description": "Defines the hierarchical level of an element within a structure.", "name": "aria-level", "required": false, "type": { "name": "number" } }, "aria-live": { "defaultValue": null, "description": "Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.", "name": "aria-live", "required": false, "type": { "name": "\"off\" | \"assertive\" | \"polite\"" } }, "aria-modal": { "defaultValue": null, "description": "Indicates whether an element is modal when displayed.", "name": "aria-modal", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-multiline": { "defaultValue": null, "description": "Indicates whether a text box accepts multiple lines of input or only a single line.", "name": "aria-multiline", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-multiselectable": { "defaultValue": null, "description": "Indicates that the user may select more than one item from the current selectable descendants.", "name": "aria-multiselectable", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-orientation": { "defaultValue": null, "description": "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.", "name": "aria-orientation", "required": false, "type": { "name": "\"horizontal\" | \"vertical\"" } }, "aria-owns": { "defaultValue": null, "description": "Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.\n@see aria-controls.", "name": "aria-owns", "required": false, "type": { "name": "string" } }, "aria-placeholder": { "defaultValue": null, "description": "Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\nA hint could be a sample value or a brief description of the expected format.", "name": "aria-placeholder", "required": false, "type": { "name": "string" } }, "aria-posinset": { "defaultValue": null, "description": "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-setsize.", "name": "aria-posinset", "required": false, "type": { "name": "number" } }, "aria-pressed": { "defaultValue": null, "description": "Indicates the current \"pressed\" state of toggle buttons.\n@see aria-checked\n@see aria-selected.", "name": "aria-pressed", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"mixed\"" } }, "aria-readonly": { "defaultValue": null, "description": "Indicates that the element is not editable, but is otherwise operable.\n@see aria-disabled.", "name": "aria-readonly", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-relevant": { "defaultValue": null, "description": "Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.\n@see aria-atomic.", "name": "aria-relevant", "required": false, "type": { "name": "\"additions\" | \"additions text\" | \"all\" | \"removals\" | \"text\"" } }, "aria-required": { "defaultValue": null, "description": "Indicates that user input is required on the element before a form may be submitted.", "name": "aria-required", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-roledescription": { "defaultValue": null, "description": "Defines a human-readable, author-localized description for the role of an element.", "name": "aria-roledescription", "required": false, "type": { "name": "string" } }, "aria-rowcount": { "defaultValue": null, "description": "Defines the total number of rows in a table, grid, or treegrid.\n@see aria-rowindex.", "name": "aria-rowcount", "required": false, "type": { "name": "number" } }, "aria-rowindex": { "defaultValue": null, "description": "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.\n@see aria-rowcount\n@see aria-rowspan.", "name": "aria-rowindex", "required": false, "type": { "name": "number" } }, "aria-rowspan": { "defaultValue": null, "description": "Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-rowindex\n@see aria-colspan.", "name": "aria-rowspan", "required": false, "type": { "name": "number" } }, "aria-selected": { "defaultValue": null, "description": "Indicates the current \"selected\" state of various widgets.\n@see aria-checked\n@see aria-pressed.", "name": "aria-selected", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-setsize": { "defaultValue": null, "description": "Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-posinset.", "name": "aria-setsize", "required": false, "type": { "name": "number" } }, "aria-sort": { "defaultValue": null, "description": "Indicates if items in a table or grid are sorted in ascending or descending order.", "name": "aria-sort", "required": false, "type": { "name": "\"none\" | \"ascending\" | \"descending\" | \"other\"" } }, "aria-valuemax": { "defaultValue": null, "description": "Defines the maximum allowed value for a range widget.", "name": "aria-valuemax", "required": false, "type": { "name": "number" } }, "aria-valuemin": { "defaultValue": null, "description": "Defines the minimum allowed value for a range widget.", "name": "aria-valuemin", "required": false, "type": { "name": "number" } }, "aria-valuenow": { "defaultValue": null, "description": "Defines the current value for a range widget.\n@see aria-valuetext.", "name": "aria-valuenow", "required": false, "type": { "name": "number" } }, "aria-valuetext": { "defaultValue": null, "description": "Defines the human readable text alternative of aria-valuenow for a range widget.", "name": "aria-valuetext", "required": false, "type": { "name": "string" } }, "classes": { "defaultValue": null, "description": "Override or extend the styles applied to the component.", "name": "classes", "required": false, "type": { "name": "Partial<Record<CardHeaderClassKey, string>>" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["atoms/card/card.tsx#WrappedHeader"] = { docgenInfo: exports.WrappedHeader.__docgenInfo, name: "WrappedHeader", path: "atoms/card/card.tsx#WrappedHeader" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    exports.WrappedCardContentLabel.displayName = "WrappedCardContentLabel";
    // @ts-ignore
    exports.WrappedCardContentLabel.__docgenInfo = { "description": "", "displayName": "WrappedCardContentLabel", "props": { "aria-activedescendant": { "defaultValue": null, "description": "Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.", "name": "aria-activedescendant", "required": false, "type": { "name": "string" } }, "aria-atomic": { "defaultValue": null, "description": "Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.", "name": "aria-atomic", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-autocomplete": { "defaultValue": null, "description": "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\npresented if they are made.", "name": "aria-autocomplete", "required": false, "type": { "name": "\"none\" | \"inline\" | \"list\" | \"both\"" } }, "aria-busy": { "defaultValue": null, "description": "Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.", "name": "aria-busy", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-checked": { "defaultValue": null, "description": "Indicates the current \"checked\" state of checkboxes, radio buttons, and other widgets.\n@see aria-pressed\n@see aria-selected.", "name": "aria-checked", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"mixed\"" } }, "aria-colcount": { "defaultValue": null, "description": "Defines the total number of columns in a table, grid, or treegrid.\n@see aria-colindex.", "name": "aria-colcount", "required": false, "type": { "name": "number" } }, "aria-colindex": { "defaultValue": null, "description": "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.\n@see aria-colcount\n@see aria-colspan.", "name": "aria-colindex", "required": false, "type": { "name": "number" } }, "aria-colspan": { "defaultValue": null, "description": "Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-colindex\n@see aria-rowspan.", "name": "aria-colspan", "required": false, "type": { "name": "number" } }, "aria-controls": { "defaultValue": null, "description": "Identifies the element (or elements) whose contents or presence are controlled by the current element.\n@see aria-owns.", "name": "aria-controls", "required": false, "type": { "name": "string" } }, "aria-current": { "defaultValue": null, "description": "Indicates the element that represents the current item within a container or set of related elements.", "name": "aria-current", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"page\" | \"step\" | \"location\" | \"date\" | \"time\"" } }, "aria-describedby": { "defaultValue": null, "description": "Identifies the element (or elements) that describes the object.\n@see aria-labelledby", "name": "aria-describedby", "required": false, "type": { "name": "string" } }, "aria-details": { "defaultValue": null, "description": "Identifies the element that provides a detailed, extended description for the object.\n@see aria-describedby.", "name": "aria-details", "required": false, "type": { "name": "string" } }, "aria-disabled": { "defaultValue": null, "description": "Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.\n@see aria-hidden\n@see aria-readonly.", "name": "aria-disabled", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-dropeffect": { "defaultValue": null, "description": "Indicates what functions can be performed when a dragged object is released on the drop target.\n@deprecated in ARIA 1.1", "name": "aria-dropeffect", "required": false, "type": { "name": "\"none\" | \"copy\" | \"execute\" | \"link\" | \"move\" | \"popup\"" } }, "aria-errormessage": { "defaultValue": null, "description": "Identifies the element that provides an error message for the object.\n@see aria-invalid\n@see aria-describedby.", "name": "aria-errormessage", "required": false, "type": { "name": "string" } }, "aria-expanded": { "defaultValue": null, "description": "Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.", "name": "aria-expanded", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-flowto": { "defaultValue": null, "description": "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\nallows assistive technology to override the general default of reading in document source order.", "name": "aria-flowto", "required": false, "type": { "name": "string" } }, "aria-grabbed": { "defaultValue": null, "description": "Indicates an element's \"grabbed\" state in a drag-and-drop operation.\n@deprecated in ARIA 1.1", "name": "aria-grabbed", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-haspopup": { "defaultValue": null, "description": "Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.", "name": "aria-haspopup", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"menu\" | \"listbox\" | \"tree\" | \"grid\" | \"dialog\"" } }, "aria-hidden": { "defaultValue": null, "description": "Indicates whether the element is exposed to an accessibility API.\n@see aria-disabled.", "name": "aria-hidden", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-invalid": { "defaultValue": null, "description": "Indicates the entered value does not conform to the format expected by the application.\n@see aria-errormessage.", "name": "aria-invalid", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\"" } }, "aria-keyshortcuts": { "defaultValue": null, "description": "Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.", "name": "aria-keyshortcuts", "required": false, "type": { "name": "string" } }, "aria-label": { "defaultValue": null, "description": "Defines a string value that labels the current element.\n@see aria-labelledby.", "name": "aria-label", "required": false, "type": { "name": "string" } }, "aria-labelledby": { "defaultValue": null, "description": "Identifies the element (or elements) that labels the current element.\n@see aria-describedby.", "name": "aria-labelledby", "required": false, "type": { "name": "string" } }, "aria-level": { "defaultValue": null, "description": "Defines the hierarchical level of an element within a structure.", "name": "aria-level", "required": false, "type": { "name": "number" } }, "aria-live": { "defaultValue": null, "description": "Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.", "name": "aria-live", "required": false, "type": { "name": "\"off\" | \"assertive\" | \"polite\"" } }, "aria-modal": { "defaultValue": null, "description": "Indicates whether an element is modal when displayed.", "name": "aria-modal", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-multiline": { "defaultValue": null, "description": "Indicates whether a text box accepts multiple lines of input or only a single line.", "name": "aria-multiline", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-multiselectable": { "defaultValue": null, "description": "Indicates that the user may select more than one item from the current selectable descendants.", "name": "aria-multiselectable", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-orientation": { "defaultValue": null, "description": "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.", "name": "aria-orientation", "required": false, "type": { "name": "\"horizontal\" | \"vertical\"" } }, "aria-owns": { "defaultValue": null, "description": "Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.\n@see aria-controls.", "name": "aria-owns", "required": false, "type": { "name": "string" } }, "aria-placeholder": { "defaultValue": null, "description": "Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\nA hint could be a sample value or a brief description of the expected format.", "name": "aria-placeholder", "required": false, "type": { "name": "string" } }, "aria-posinset": { "defaultValue": null, "description": "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-setsize.", "name": "aria-posinset", "required": false, "type": { "name": "number" } }, "aria-pressed": { "defaultValue": null, "description": "Indicates the current \"pressed\" state of toggle buttons.\n@see aria-checked\n@see aria-selected.", "name": "aria-pressed", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"mixed\"" } }, "aria-readonly": { "defaultValue": null, "description": "Indicates that the element is not editable, but is otherwise operable.\n@see aria-disabled.", "name": "aria-readonly", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-relevant": { "defaultValue": null, "description": "Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.\n@see aria-atomic.", "name": "aria-relevant", "required": false, "type": { "name": "\"additions\" | \"additions text\" | \"all\" | \"removals\" | \"text\"" } }, "aria-required": { "defaultValue": null, "description": "Indicates that user input is required on the element before a form may be submitted.", "name": "aria-required", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-roledescription": { "defaultValue": null, "description": "Defines a human-readable, author-localized description for the role of an element.", "name": "aria-roledescription", "required": false, "type": { "name": "string" } }, "aria-rowcount": { "defaultValue": null, "description": "Defines the total number of rows in a table, grid, or treegrid.\n@see aria-rowindex.", "name": "aria-rowcount", "required": false, "type": { "name": "number" } }, "aria-rowindex": { "defaultValue": null, "description": "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.\n@see aria-rowcount\n@see aria-rowspan.", "name": "aria-rowindex", "required": false, "type": { "name": "number" } }, "aria-rowspan": { "defaultValue": null, "description": "Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-rowindex\n@see aria-colspan.", "name": "aria-rowspan", "required": false, "type": { "name": "number" } }, "aria-selected": { "defaultValue": null, "description": "Indicates the current \"selected\" state of various widgets.\n@see aria-checked\n@see aria-pressed.", "name": "aria-selected", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-setsize": { "defaultValue": null, "description": "Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-posinset.", "name": "aria-setsize", "required": false, "type": { "name": "number" } }, "aria-sort": { "defaultValue": null, "description": "Indicates if items in a table or grid are sorted in ascending or descending order.", "name": "aria-sort", "required": false, "type": { "name": "\"none\" | \"ascending\" | \"descending\" | \"other\"" } }, "aria-valuemax": { "defaultValue": null, "description": "Defines the maximum allowed value for a range widget.", "name": "aria-valuemax", "required": false, "type": { "name": "number" } }, "aria-valuemin": { "defaultValue": null, "description": "Defines the minimum allowed value for a range widget.", "name": "aria-valuemin", "required": false, "type": { "name": "number" } }, "aria-valuenow": { "defaultValue": null, "description": "Defines the current value for a range widget.\n@see aria-valuetext.", "name": "aria-valuenow", "required": false, "type": { "name": "number" } }, "aria-valuetext": { "defaultValue": null, "description": "Defines the human readable text alternative of aria-valuenow for a range widget.", "name": "aria-valuetext", "required": false, "type": { "name": "string" } }, "classes": { "defaultValue": null, "description": "Override or extend the styles applied to the component.", "name": "classes", "required": false, "type": { "name": "Partial<Record<TypographyClassKey, string>>" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["atoms/card/card.tsx#WrappedCardContentLabel"] = { docgenInfo: exports.WrappedCardContentLabel.__docgenInfo, name: "WrappedCardContentLabel", path: "atoms/card/card.tsx#WrappedCardContentLabel" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    exports.WrappedCardContentValue.displayName = "WrappedCardContentValue";
    // @ts-ignore
    exports.WrappedCardContentValue.__docgenInfo = { "description": "", "displayName": "WrappedCardContentValue", "props": { "aria-activedescendant": { "defaultValue": null, "description": "Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.", "name": "aria-activedescendant", "required": false, "type": { "name": "string" } }, "aria-atomic": { "defaultValue": null, "description": "Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.", "name": "aria-atomic", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-autocomplete": { "defaultValue": null, "description": "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\npresented if they are made.", "name": "aria-autocomplete", "required": false, "type": { "name": "\"none\" | \"inline\" | \"list\" | \"both\"" } }, "aria-busy": { "defaultValue": null, "description": "Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.", "name": "aria-busy", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-checked": { "defaultValue": null, "description": "Indicates the current \"checked\" state of checkboxes, radio buttons, and other widgets.\n@see aria-pressed\n@see aria-selected.", "name": "aria-checked", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"mixed\"" } }, "aria-colcount": { "defaultValue": null, "description": "Defines the total number of columns in a table, grid, or treegrid.\n@see aria-colindex.", "name": "aria-colcount", "required": false, "type": { "name": "number" } }, "aria-colindex": { "defaultValue": null, "description": "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.\n@see aria-colcount\n@see aria-colspan.", "name": "aria-colindex", "required": false, "type": { "name": "number" } }, "aria-colspan": { "defaultValue": null, "description": "Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-colindex\n@see aria-rowspan.", "name": "aria-colspan", "required": false, "type": { "name": "number" } }, "aria-controls": { "defaultValue": null, "description": "Identifies the element (or elements) whose contents or presence are controlled by the current element.\n@see aria-owns.", "name": "aria-controls", "required": false, "type": { "name": "string" } }, "aria-current": { "defaultValue": null, "description": "Indicates the element that represents the current item within a container or set of related elements.", "name": "aria-current", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"page\" | \"step\" | \"location\" | \"date\" | \"time\"" } }, "aria-describedby": { "defaultValue": null, "description": "Identifies the element (or elements) that describes the object.\n@see aria-labelledby", "name": "aria-describedby", "required": false, "type": { "name": "string" } }, "aria-details": { "defaultValue": null, "description": "Identifies the element that provides a detailed, extended description for the object.\n@see aria-describedby.", "name": "aria-details", "required": false, "type": { "name": "string" } }, "aria-disabled": { "defaultValue": null, "description": "Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.\n@see aria-hidden\n@see aria-readonly.", "name": "aria-disabled", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-dropeffect": { "defaultValue": null, "description": "Indicates what functions can be performed when a dragged object is released on the drop target.\n@deprecated in ARIA 1.1", "name": "aria-dropeffect", "required": false, "type": { "name": "\"none\" | \"copy\" | \"execute\" | \"link\" | \"move\" | \"popup\"" } }, "aria-errormessage": { "defaultValue": null, "description": "Identifies the element that provides an error message for the object.\n@see aria-invalid\n@see aria-describedby.", "name": "aria-errormessage", "required": false, "type": { "name": "string" } }, "aria-expanded": { "defaultValue": null, "description": "Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.", "name": "aria-expanded", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-flowto": { "defaultValue": null, "description": "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\nallows assistive technology to override the general default of reading in document source order.", "name": "aria-flowto", "required": false, "type": { "name": "string" } }, "aria-grabbed": { "defaultValue": null, "description": "Indicates an element's \"grabbed\" state in a drag-and-drop operation.\n@deprecated in ARIA 1.1", "name": "aria-grabbed", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-haspopup": { "defaultValue": null, "description": "Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.", "name": "aria-haspopup", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"menu\" | \"listbox\" | \"tree\" | \"grid\" | \"dialog\"" } }, "aria-hidden": { "defaultValue": null, "description": "Indicates whether the element is exposed to an accessibility API.\n@see aria-disabled.", "name": "aria-hidden", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-invalid": { "defaultValue": null, "description": "Indicates the entered value does not conform to the format expected by the application.\n@see aria-errormessage.", "name": "aria-invalid", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\"" } }, "aria-keyshortcuts": { "defaultValue": null, "description": "Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.", "name": "aria-keyshortcuts", "required": false, "type": { "name": "string" } }, "aria-label": { "defaultValue": null, "description": "Defines a string value that labels the current element.\n@see aria-labelledby.", "name": "aria-label", "required": false, "type": { "name": "string" } }, "aria-labelledby": { "defaultValue": null, "description": "Identifies the element (or elements) that labels the current element.\n@see aria-describedby.", "name": "aria-labelledby", "required": false, "type": { "name": "string" } }, "aria-level": { "defaultValue": null, "description": "Defines the hierarchical level of an element within a structure.", "name": "aria-level", "required": false, "type": { "name": "number" } }, "aria-live": { "defaultValue": null, "description": "Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.", "name": "aria-live", "required": false, "type": { "name": "\"off\" | \"assertive\" | \"polite\"" } }, "aria-modal": { "defaultValue": null, "description": "Indicates whether an element is modal when displayed.", "name": "aria-modal", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-multiline": { "defaultValue": null, "description": "Indicates whether a text box accepts multiple lines of input or only a single line.", "name": "aria-multiline", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-multiselectable": { "defaultValue": null, "description": "Indicates that the user may select more than one item from the current selectable descendants.", "name": "aria-multiselectable", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-orientation": { "defaultValue": null, "description": "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.", "name": "aria-orientation", "required": false, "type": { "name": "\"horizontal\" | \"vertical\"" } }, "aria-owns": { "defaultValue": null, "description": "Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.\n@see aria-controls.", "name": "aria-owns", "required": false, "type": { "name": "string" } }, "aria-placeholder": { "defaultValue": null, "description": "Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\nA hint could be a sample value or a brief description of the expected format.", "name": "aria-placeholder", "required": false, "type": { "name": "string" } }, "aria-posinset": { "defaultValue": null, "description": "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-setsize.", "name": "aria-posinset", "required": false, "type": { "name": "number" } }, "aria-pressed": { "defaultValue": null, "description": "Indicates the current \"pressed\" state of toggle buttons.\n@see aria-checked\n@see aria-selected.", "name": "aria-pressed", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"mixed\"" } }, "aria-readonly": { "defaultValue": null, "description": "Indicates that the element is not editable, but is otherwise operable.\n@see aria-disabled.", "name": "aria-readonly", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-relevant": { "defaultValue": null, "description": "Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.\n@see aria-atomic.", "name": "aria-relevant", "required": false, "type": { "name": "\"additions\" | \"additions text\" | \"all\" | \"removals\" | \"text\"" } }, "aria-required": { "defaultValue": null, "description": "Indicates that user input is required on the element before a form may be submitted.", "name": "aria-required", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-roledescription": { "defaultValue": null, "description": "Defines a human-readable, author-localized description for the role of an element.", "name": "aria-roledescription", "required": false, "type": { "name": "string" } }, "aria-rowcount": { "defaultValue": null, "description": "Defines the total number of rows in a table, grid, or treegrid.\n@see aria-rowindex.", "name": "aria-rowcount", "required": false, "type": { "name": "number" } }, "aria-rowindex": { "defaultValue": null, "description": "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.\n@see aria-rowcount\n@see aria-rowspan.", "name": "aria-rowindex", "required": false, "type": { "name": "number" } }, "aria-rowspan": { "defaultValue": null, "description": "Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-rowindex\n@see aria-colspan.", "name": "aria-rowspan", "required": false, "type": { "name": "number" } }, "aria-selected": { "defaultValue": null, "description": "Indicates the current \"selected\" state of various widgets.\n@see aria-checked\n@see aria-pressed.", "name": "aria-selected", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-setsize": { "defaultValue": null, "description": "Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-posinset.", "name": "aria-setsize", "required": false, "type": { "name": "number" } }, "aria-sort": { "defaultValue": null, "description": "Indicates if items in a table or grid are sorted in ascending or descending order.", "name": "aria-sort", "required": false, "type": { "name": "\"none\" | \"ascending\" | \"descending\" | \"other\"" } }, "aria-valuemax": { "defaultValue": null, "description": "Defines the maximum allowed value for a range widget.", "name": "aria-valuemax", "required": false, "type": { "name": "number" } }, "aria-valuemin": { "defaultValue": null, "description": "Defines the minimum allowed value for a range widget.", "name": "aria-valuemin", "required": false, "type": { "name": "number" } }, "aria-valuenow": { "defaultValue": null, "description": "Defines the current value for a range widget.\n@see aria-valuetext.", "name": "aria-valuenow", "required": false, "type": { "name": "number" } }, "aria-valuetext": { "defaultValue": null, "description": "Defines the human readable text alternative of aria-valuenow for a range widget.", "name": "aria-valuetext", "required": false, "type": { "name": "string" } }, "classes": { "defaultValue": null, "description": "Override or extend the styles applied to the component.", "name": "classes", "required": false, "type": { "name": "Partial<Record<TypographyClassKey, string>>" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["atoms/card/card.tsx#WrappedCardContentValue"] = { docgenInfo: exports.WrappedCardContentValue.__docgenInfo, name: "WrappedCardContentValue", path: "atoms/card/card.tsx#WrappedCardContentValue" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    exports.WrappedCardActionArea.displayName = "WrappedCardActionArea";
    // @ts-ignore
    exports.WrappedCardActionArea.__docgenInfo = { "description": "", "displayName": "WrappedCardActionArea", "props": { "classes": { "defaultValue": null, "description": "Override or extend the styles applied to the component.", "name": "classes", "required": false, "type": { "name": "Partial<Record<CardActionAreaClassKey, string>>" } }, "aria-activedescendant": { "defaultValue": null, "description": "Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.", "name": "aria-activedescendant", "required": false, "type": { "name": "string" } }, "aria-atomic": { "defaultValue": null, "description": "Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.", "name": "aria-atomic", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-autocomplete": { "defaultValue": null, "description": "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\npresented if they are made.", "name": "aria-autocomplete", "required": false, "type": { "name": "\"none\" | \"inline\" | \"list\" | \"both\"" } }, "aria-busy": { "defaultValue": null, "description": "Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.", "name": "aria-busy", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-checked": { "defaultValue": null, "description": "Indicates the current \"checked\" state of checkboxes, radio buttons, and other widgets.\n@see aria-pressed\n@see aria-selected.", "name": "aria-checked", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"mixed\"" } }, "aria-colcount": { "defaultValue": null, "description": "Defines the total number of columns in a table, grid, or treegrid.\n@see aria-colindex.", "name": "aria-colcount", "required": false, "type": { "name": "number" } }, "aria-colindex": { "defaultValue": null, "description": "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.\n@see aria-colcount\n@see aria-colspan.", "name": "aria-colindex", "required": false, "type": { "name": "number" } }, "aria-colspan": { "defaultValue": null, "description": "Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-colindex\n@see aria-rowspan.", "name": "aria-colspan", "required": false, "type": { "name": "number" } }, "aria-controls": { "defaultValue": null, "description": "Identifies the element (or elements) whose contents or presence are controlled by the current element.\n@see aria-owns.", "name": "aria-controls", "required": false, "type": { "name": "string" } }, "aria-current": { "defaultValue": null, "description": "Indicates the element that represents the current item within a container or set of related elements.", "name": "aria-current", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"page\" | \"step\" | \"location\" | \"date\" | \"time\"" } }, "aria-describedby": { "defaultValue": null, "description": "Identifies the element (or elements) that describes the object.\n@see aria-labelledby", "name": "aria-describedby", "required": false, "type": { "name": "string" } }, "aria-details": { "defaultValue": null, "description": "Identifies the element that provides a detailed, extended description for the object.\n@see aria-describedby.", "name": "aria-details", "required": false, "type": { "name": "string" } }, "aria-disabled": { "defaultValue": null, "description": "Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.\n@see aria-hidden\n@see aria-readonly.", "name": "aria-disabled", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-dropeffect": { "defaultValue": null, "description": "Indicates what functions can be performed when a dragged object is released on the drop target.\n@deprecated in ARIA 1.1", "name": "aria-dropeffect", "required": false, "type": { "name": "\"none\" | \"copy\" | \"execute\" | \"link\" | \"move\" | \"popup\"" } }, "aria-errormessage": { "defaultValue": null, "description": "Identifies the element that provides an error message for the object.\n@see aria-invalid\n@see aria-describedby.", "name": "aria-errormessage", "required": false, "type": { "name": "string" } }, "aria-expanded": { "defaultValue": null, "description": "Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.", "name": "aria-expanded", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-flowto": { "defaultValue": null, "description": "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\nallows assistive technology to override the general default of reading in document source order.", "name": "aria-flowto", "required": false, "type": { "name": "string" } }, "aria-grabbed": { "defaultValue": null, "description": "Indicates an element's \"grabbed\" state in a drag-and-drop operation.\n@deprecated in ARIA 1.1", "name": "aria-grabbed", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-haspopup": { "defaultValue": null, "description": "Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.", "name": "aria-haspopup", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"menu\" | \"listbox\" | \"tree\" | \"grid\" | \"dialog\"" } }, "aria-hidden": { "defaultValue": null, "description": "Indicates whether the element is exposed to an accessibility API.\n@see aria-disabled.", "name": "aria-hidden", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-invalid": { "defaultValue": null, "description": "Indicates the entered value does not conform to the format expected by the application.\n@see aria-errormessage.", "name": "aria-invalid", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\"" } }, "aria-keyshortcuts": { "defaultValue": null, "description": "Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.", "name": "aria-keyshortcuts", "required": false, "type": { "name": "string" } }, "aria-label": { "defaultValue": null, "description": "Defines a string value that labels the current element.\n@see aria-labelledby.", "name": "aria-label", "required": false, "type": { "name": "string" } }, "aria-labelledby": { "defaultValue": null, "description": "Identifies the element (or elements) that labels the current element.\n@see aria-describedby.", "name": "aria-labelledby", "required": false, "type": { "name": "string" } }, "aria-level": { "defaultValue": null, "description": "Defines the hierarchical level of an element within a structure.", "name": "aria-level", "required": false, "type": { "name": "number" } }, "aria-live": { "defaultValue": null, "description": "Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.", "name": "aria-live", "required": false, "type": { "name": "\"off\" | \"assertive\" | \"polite\"" } }, "aria-modal": { "defaultValue": null, "description": "Indicates whether an element is modal when displayed.", "name": "aria-modal", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-multiline": { "defaultValue": null, "description": "Indicates whether a text box accepts multiple lines of input or only a single line.", "name": "aria-multiline", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-multiselectable": { "defaultValue": null, "description": "Indicates that the user may select more than one item from the current selectable descendants.", "name": "aria-multiselectable", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-orientation": { "defaultValue": null, "description": "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.", "name": "aria-orientation", "required": false, "type": { "name": "\"horizontal\" | \"vertical\"" } }, "aria-owns": { "defaultValue": null, "description": "Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.\n@see aria-controls.", "name": "aria-owns", "required": false, "type": { "name": "string" } }, "aria-placeholder": { "defaultValue": null, "description": "Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\nA hint could be a sample value or a brief description of the expected format.", "name": "aria-placeholder", "required": false, "type": { "name": "string" } }, "aria-posinset": { "defaultValue": null, "description": "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-setsize.", "name": "aria-posinset", "required": false, "type": { "name": "number" } }, "aria-pressed": { "defaultValue": null, "description": "Indicates the current \"pressed\" state of toggle buttons.\n@see aria-checked\n@see aria-selected.", "name": "aria-pressed", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"mixed\"" } }, "aria-readonly": { "defaultValue": null, "description": "Indicates that the element is not editable, but is otherwise operable.\n@see aria-disabled.", "name": "aria-readonly", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-relevant": { "defaultValue": null, "description": "Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.\n@see aria-atomic.", "name": "aria-relevant", "required": false, "type": { "name": "\"additions\" | \"additions text\" | \"all\" | \"removals\" | \"text\"" } }, "aria-required": { "defaultValue": null, "description": "Indicates that user input is required on the element before a form may be submitted.", "name": "aria-required", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-roledescription": { "defaultValue": null, "description": "Defines a human-readable, author-localized description for the role of an element.", "name": "aria-roledescription", "required": false, "type": { "name": "string" } }, "aria-rowcount": { "defaultValue": null, "description": "Defines the total number of rows in a table, grid, or treegrid.\n@see aria-rowindex.", "name": "aria-rowcount", "required": false, "type": { "name": "number" } }, "aria-rowindex": { "defaultValue": null, "description": "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.\n@see aria-rowcount\n@see aria-rowspan.", "name": "aria-rowindex", "required": false, "type": { "name": "number" } }, "aria-rowspan": { "defaultValue": null, "description": "Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-rowindex\n@see aria-colspan.", "name": "aria-rowspan", "required": false, "type": { "name": "number" } }, "aria-selected": { "defaultValue": null, "description": "Indicates the current \"selected\" state of various widgets.\n@see aria-checked\n@see aria-pressed.", "name": "aria-selected", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-setsize": { "defaultValue": null, "description": "Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-posinset.", "name": "aria-setsize", "required": false, "type": { "name": "number" } }, "aria-sort": { "defaultValue": null, "description": "Indicates if items in a table or grid are sorted in ascending or descending order.", "name": "aria-sort", "required": false, "type": { "name": "\"none\" | \"ascending\" | \"descending\" | \"other\"" } }, "aria-valuemax": { "defaultValue": null, "description": "Defines the maximum allowed value for a range widget.", "name": "aria-valuemax", "required": false, "type": { "name": "number" } }, "aria-valuemin": { "defaultValue": null, "description": "Defines the minimum allowed value for a range widget.", "name": "aria-valuemin", "required": false, "type": { "name": "number" } }, "aria-valuenow": { "defaultValue": null, "description": "Defines the current value for a range widget.\n@see aria-valuetext.", "name": "aria-valuenow", "required": false, "type": { "name": "number" } }, "aria-valuetext": { "defaultValue": null, "description": "Defines the human readable text alternative of aria-valuenow for a range widget.", "name": "aria-valuetext", "required": false, "type": { "name": "string" } }, "buttonRef": { "defaultValue": null, "description": "Prefer `ref` instead.", "name": "buttonRef", "required": false, "type": { "name": "Ref<unknown>" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["atoms/card/card.tsx#WrappedCardActionArea"] = { docgenInfo: exports.WrappedCardActionArea.__docgenInfo, name: "WrappedCardActionArea", path: "atoms/card/card.tsx#WrappedCardActionArea" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    exports.CreateCard.displayName = "CreateCard";
    // @ts-ignore
    exports.CreateCard.__docgenInfo = { "description": "", "displayName": "CreateCard", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["atoms/card/card.tsx#CreateCard"] = { docgenInfo: exports.CreateCard.__docgenInfo, name: "CreateCard", path: "atoms/card/card.tsx#CreateCard" };
}
catch (__react_docgen_typescript_loader_error) { }


/***/ }),

/***/ "./atoms/card/index.tsx":
/*!******************************!*\
  !*** ./atoms/card/index.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var card_1 = __webpack_require__(/*! ./card */ "./atoms/card/card.tsx");
exports.Card = card_1.WrappedCard;
exports.CardActions = card_1.WrappedCardActions;
exports.CardContent = card_1.WrappedCardContent;
exports.CardHeader = card_1.WrappedHeader;
exports.CardActionArea = card_1.WrappedCardActionArea;
exports.CardContentLabel = card_1.WrappedCardContentLabel;
exports.CardContentValue = card_1.WrappedCardContentValue;
exports.CreateCard = card_1.CreateCard;


/***/ }),

/***/ "./atoms/divider/divider.tsx":
/*!***********************************!*\
  !*** ./atoms/divider/divider.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const Divider_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js"));
exports.WrappedDivider = (props) => {
    return React.createElement(Divider_1.default, Object.assign({}, props));
};
try {
    // @ts-ignore
    exports.WrappedDivider.displayName = "WrappedDivider";
    // @ts-ignore
    exports.WrappedDivider.__docgenInfo = { "description": "", "displayName": "WrappedDivider", "props": { "classes": { "defaultValue": null, "description": "Override or extend the styles applied to the component.", "name": "classes", "required": false, "type": { "name": "Partial<Record<DividerClassKey, string>>" } }, "aria-activedescendant": { "defaultValue": null, "description": "Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.", "name": "aria-activedescendant", "required": false, "type": { "name": "string" } }, "aria-atomic": { "defaultValue": null, "description": "Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.", "name": "aria-atomic", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-autocomplete": { "defaultValue": null, "description": "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\npresented if they are made.", "name": "aria-autocomplete", "required": false, "type": { "name": "\"none\" | \"inline\" | \"list\" | \"both\"" } }, "aria-busy": { "defaultValue": null, "description": "Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.", "name": "aria-busy", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-checked": { "defaultValue": null, "description": "Indicates the current \"checked\" state of checkboxes, radio buttons, and other widgets.\n@see aria-pressed\n@see aria-selected.", "name": "aria-checked", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"mixed\"" } }, "aria-colcount": { "defaultValue": null, "description": "Defines the total number of columns in a table, grid, or treegrid.\n@see aria-colindex.", "name": "aria-colcount", "required": false, "type": { "name": "number" } }, "aria-colindex": { "defaultValue": null, "description": "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.\n@see aria-colcount\n@see aria-colspan.", "name": "aria-colindex", "required": false, "type": { "name": "number" } }, "aria-colspan": { "defaultValue": null, "description": "Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-colindex\n@see aria-rowspan.", "name": "aria-colspan", "required": false, "type": { "name": "number" } }, "aria-controls": { "defaultValue": null, "description": "Identifies the element (or elements) whose contents or presence are controlled by the current element.\n@see aria-owns.", "name": "aria-controls", "required": false, "type": { "name": "string" } }, "aria-current": { "defaultValue": null, "description": "Indicates the element that represents the current item within a container or set of related elements.", "name": "aria-current", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"page\" | \"step\" | \"location\" | \"date\" | \"time\"" } }, "aria-describedby": { "defaultValue": null, "description": "Identifies the element (or elements) that describes the object.\n@see aria-labelledby", "name": "aria-describedby", "required": false, "type": { "name": "string" } }, "aria-details": { "defaultValue": null, "description": "Identifies the element that provides a detailed, extended description for the object.\n@see aria-describedby.", "name": "aria-details", "required": false, "type": { "name": "string" } }, "aria-disabled": { "defaultValue": null, "description": "Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.\n@see aria-hidden\n@see aria-readonly.", "name": "aria-disabled", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-dropeffect": { "defaultValue": null, "description": "Indicates what functions can be performed when a dragged object is released on the drop target.\n@deprecated in ARIA 1.1", "name": "aria-dropeffect", "required": false, "type": { "name": "\"none\" | \"copy\" | \"execute\" | \"link\" | \"move\" | \"popup\"" } }, "aria-errormessage": { "defaultValue": null, "description": "Identifies the element that provides an error message for the object.\n@see aria-invalid\n@see aria-describedby.", "name": "aria-errormessage", "required": false, "type": { "name": "string" } }, "aria-expanded": { "defaultValue": null, "description": "Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.", "name": "aria-expanded", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-flowto": { "defaultValue": null, "description": "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\nallows assistive technology to override the general default of reading in document source order.", "name": "aria-flowto", "required": false, "type": { "name": "string" } }, "aria-grabbed": { "defaultValue": null, "description": "Indicates an element's \"grabbed\" state in a drag-and-drop operation.\n@deprecated in ARIA 1.1", "name": "aria-grabbed", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-haspopup": { "defaultValue": null, "description": "Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.", "name": "aria-haspopup", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"menu\" | \"listbox\" | \"tree\" | \"grid\" | \"dialog\"" } }, "aria-hidden": { "defaultValue": null, "description": "Indicates whether the element is exposed to an accessibility API.\n@see aria-disabled.", "name": "aria-hidden", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-invalid": { "defaultValue": null, "description": "Indicates the entered value does not conform to the format expected by the application.\n@see aria-errormessage.", "name": "aria-invalid", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\"" } }, "aria-keyshortcuts": { "defaultValue": null, "description": "Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.", "name": "aria-keyshortcuts", "required": false, "type": { "name": "string" } }, "aria-label": { "defaultValue": null, "description": "Defines a string value that labels the current element.\n@see aria-labelledby.", "name": "aria-label", "required": false, "type": { "name": "string" } }, "aria-labelledby": { "defaultValue": null, "description": "Identifies the element (or elements) that labels the current element.\n@see aria-describedby.", "name": "aria-labelledby", "required": false, "type": { "name": "string" } }, "aria-level": { "defaultValue": null, "description": "Defines the hierarchical level of an element within a structure.", "name": "aria-level", "required": false, "type": { "name": "number" } }, "aria-live": { "defaultValue": null, "description": "Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.", "name": "aria-live", "required": false, "type": { "name": "\"off\" | \"assertive\" | \"polite\"" } }, "aria-modal": { "defaultValue": null, "description": "Indicates whether an element is modal when displayed.", "name": "aria-modal", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-multiline": { "defaultValue": null, "description": "Indicates whether a text box accepts multiple lines of input or only a single line.", "name": "aria-multiline", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-multiselectable": { "defaultValue": null, "description": "Indicates that the user may select more than one item from the current selectable descendants.", "name": "aria-multiselectable", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-orientation": { "defaultValue": null, "description": "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.", "name": "aria-orientation", "required": false, "type": { "name": "\"horizontal\" | \"vertical\"" } }, "aria-owns": { "defaultValue": null, "description": "Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.\n@see aria-controls.", "name": "aria-owns", "required": false, "type": { "name": "string" } }, "aria-placeholder": { "defaultValue": null, "description": "Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\nA hint could be a sample value or a brief description of the expected format.", "name": "aria-placeholder", "required": false, "type": { "name": "string" } }, "aria-posinset": { "defaultValue": null, "description": "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-setsize.", "name": "aria-posinset", "required": false, "type": { "name": "number" } }, "aria-pressed": { "defaultValue": null, "description": "Indicates the current \"pressed\" state of toggle buttons.\n@see aria-checked\n@see aria-selected.", "name": "aria-pressed", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"mixed\"" } }, "aria-readonly": { "defaultValue": null, "description": "Indicates that the element is not editable, but is otherwise operable.\n@see aria-disabled.", "name": "aria-readonly", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-relevant": { "defaultValue": null, "description": "Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.\n@see aria-atomic.", "name": "aria-relevant", "required": false, "type": { "name": "\"additions\" | \"additions text\" | \"all\" | \"removals\" | \"text\"" } }, "aria-required": { "defaultValue": null, "description": "Indicates that user input is required on the element before a form may be submitted.", "name": "aria-required", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-roledescription": { "defaultValue": null, "description": "Defines a human-readable, author-localized description for the role of an element.", "name": "aria-roledescription", "required": false, "type": { "name": "string" } }, "aria-rowcount": { "defaultValue": null, "description": "Defines the total number of rows in a table, grid, or treegrid.\n@see aria-rowindex.", "name": "aria-rowcount", "required": false, "type": { "name": "number" } }, "aria-rowindex": { "defaultValue": null, "description": "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.\n@see aria-rowcount\n@see aria-rowspan.", "name": "aria-rowindex", "required": false, "type": { "name": "number" } }, "aria-rowspan": { "defaultValue": null, "description": "Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-rowindex\n@see aria-colspan.", "name": "aria-rowspan", "required": false, "type": { "name": "number" } }, "aria-selected": { "defaultValue": null, "description": "Indicates the current \"selected\" state of various widgets.\n@see aria-checked\n@see aria-pressed.", "name": "aria-selected", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-setsize": { "defaultValue": null, "description": "Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-posinset.", "name": "aria-setsize", "required": false, "type": { "name": "number" } }, "aria-sort": { "defaultValue": null, "description": "Indicates if items in a table or grid are sorted in ascending or descending order.", "name": "aria-sort", "required": false, "type": { "name": "\"none\" | \"ascending\" | \"descending\" | \"other\"" } }, "aria-valuemax": { "defaultValue": null, "description": "Defines the maximum allowed value for a range widget.", "name": "aria-valuemax", "required": false, "type": { "name": "number" } }, "aria-valuemin": { "defaultValue": null, "description": "Defines the minimum allowed value for a range widget.", "name": "aria-valuemin", "required": false, "type": { "name": "number" } }, "aria-valuenow": { "defaultValue": null, "description": "Defines the current value for a range widget.\n@see aria-valuetext.", "name": "aria-valuenow", "required": false, "type": { "name": "number" } }, "aria-valuetext": { "defaultValue": null, "description": "Defines the human readable text alternative of aria-valuenow for a range widget.", "name": "aria-valuetext", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["atoms/divider/divider.tsx#WrappedDivider"] = { docgenInfo: exports.WrappedDivider.__docgenInfo, name: "WrappedDivider", path: "atoms/divider/divider.tsx#WrappedDivider" };
}
catch (__react_docgen_typescript_loader_error) { }


/***/ }),

/***/ "./atoms/divider/index.tsx":
/*!*********************************!*\
  !*** ./atoms/divider/index.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var divider_1 = __webpack_require__(/*! ./divider */ "./atoms/divider/divider.tsx");
exports.Divider = divider_1.WrappedDivider;


/***/ }),

/***/ "./atoms/grid/grid.tsx":
/*!*****************************!*\
  !*** ./atoms/grid/grid.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const Grid_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js"));
const styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
exports.WrappedGrid = styled_components_1.default(React.forwardRef((props, ref) => {
    return React.createElement(Grid_1.default, Object.assign({}, props, { ref: ref }));
})) ``;
const GridItem = styled_components_1.default(exports.WrappedGrid) `
  > * {
    height: 100%;
  }
`;
exports.WrappedCardGridItem = ({ children, gridItemProps, }) => {
    return (
    // @ts-ignore
    React.createElement(GridItem, Object.assign({}, gridItemProps, { item: true, xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }), children));
};
exports.WrappedCardGrid = styled_components_1.default(({ gridProps, children }) => {
    return (
    // @ts-ignore
    React.createElement(exports.WrappedGrid, Object.assign({ container: true, spacing: 3, direction: "row", justify: "flex-start", wrap: "wrap" }, gridProps), children));
}) ``;
try {
    // @ts-ignore
    exports.WrappedCardGridItem.displayName = "WrappedCardGridItem";
    // @ts-ignore
    exports.WrappedCardGridItem.__docgenInfo = { "description": "", "displayName": "WrappedCardGridItem", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["atoms/grid/grid.tsx#WrappedCardGridItem"] = { docgenInfo: exports.WrappedCardGridItem.__docgenInfo, name: "WrappedCardGridItem", path: "atoms/grid/grid.tsx#WrappedCardGridItem" };
}
catch (__react_docgen_typescript_loader_error) { }


/***/ }),

/***/ "./atoms/grid/index.tsx":
/*!******************************!*\
  !*** ./atoms/grid/index.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var grid_1 = __webpack_require__(/*! ./grid */ "./atoms/grid/grid.tsx");
exports.Grid = grid_1.WrappedGrid;
exports.CardGrid = grid_1.WrappedCardGrid;
exports.CardGridItem = grid_1.WrappedCardGridItem;


/***/ }),

/***/ "./atoms/icons/index.tsx":
/*!*******************************!*\
  !*** ./atoms/icons/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ViewHeadline_1 = __importDefault(__webpack_require__(/*! @material-ui/icons/ViewHeadline */ "./node_modules/@material-ui/icons/ViewHeadline.js"));
const ViewModule_1 = __importDefault(__webpack_require__(/*! @material-ui/icons/ViewModule */ "./node_modules/@material-ui/icons/ViewModule.js"));
const Close_1 = __importDefault(__webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js"));
const Error_1 = __importDefault(__webpack_require__(/*! @material-ui/icons/Error */ "./node_modules/@material-ui/icons/Error.js"));
const ArrowBackIos_1 = __importDefault(__webpack_require__(/*! @material-ui/icons/ArrowBackIos */ "./node_modules/@material-ui/icons/ArrowBackIos.js"));
const Remove_1 = __importDefault(__webpack_require__(/*! @material-ui/icons/Remove */ "./node_modules/@material-ui/icons/Remove.js"));
const Info_1 = __importDefault(__webpack_require__(/*! @material-ui/icons/Info */ "./node_modules/@material-ui/icons/Info.js"));
const Add_1 = __importDefault(__webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js"));
const Menu_1 = __importDefault(__webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js"));
const ChevronLeft_1 = __importDefault(__webpack_require__(/*! @material-ui/icons/ChevronLeft */ "./node_modules/@material-ui/icons/ChevronLeft.js"));
const ChevronRight_1 = __importDefault(__webpack_require__(/*! @material-ui/icons/ChevronRight */ "./node_modules/@material-ui/icons/ChevronRight.js"));
const MenuBook_1 = __importDefault(__webpack_require__(/*! @material-ui/icons/MenuBook */ "./node_modules/@material-ui/icons/MenuBook.js"));
const Apps_1 = __importDefault(__webpack_require__(/*! @material-ui/icons/Apps */ "./node_modules/@material-ui/icons/Apps.js"));
const SettingsApplications_1 = __importDefault(__webpack_require__(/*! @material-ui/icons/SettingsApplications */ "./node_modules/@material-ui/icons/SettingsApplications.js"));
const Notifications_1 = __importDefault(__webpack_require__(/*! @material-ui/icons/Notifications */ "./node_modules/@material-ui/icons/Notifications.js"));
const Settings_1 = __importDefault(__webpack_require__(/*! @material-ui/icons/Settings */ "./node_modules/@material-ui/icons/Settings.js"));
exports.ListModeIcon = ViewHeadline_1.default;
exports.CardModeIcon = ViewModule_1.default;
exports.CloseIcon = Close_1.default;
exports.ErrorIcon = Error_1.default;
exports.BackIcon = ArrowBackIos_1.default;
exports.RemoveIcon = Remove_1.default;
exports.InfoIcon = Info_1.default;
exports.AddIcon = Add_1.default;
exports.MenuIcon = Menu_1.default;
exports.ChevronLeftIcon = ChevronLeft_1.default;
exports.ChevronRightIcon = ChevronRight_1.default;
exports.BookIcon = MenuBook_1.default;
exports.AppsIcon = Apps_1.default;
exports.InstallerIcon = SettingsApplications_1.default;
exports.NotificationsIcon = Notifications_1.default;
exports.SettingsIcon = Settings_1.default;
try {
    // @ts-ignore
    exports.ListModeIcon.displayName = "ListModeIcon";
    // @ts-ignore
    exports.ListModeIcon.__docgenInfo = { "description": "", "displayName": "ListModeIcon", "props": { "children": { "defaultValue": null, "description": "Node passed into the SVG element.", "name": "children", "required": false, "type": { "name": "ReactNode" } }, "color": { "defaultValue": null, "description": "The color of the component. It supports those theme colors that make sense for this component.\nYou can use the `htmlColor` prop to apply a color attribute to the SVG element.", "name": "color", "required": false, "type": { "name": "\"inherit\" | \"primary\" | \"secondary\" | \"action\" | \"disabled\" | \"error\"" } }, "component": { "defaultValue": null, "description": "The component used for the root node.\nEither a string to use a DOM element or a component.", "name": "component", "required": false, "type": { "name": "ElementType<SVGProps<SVGSVGElement>>" } }, "fontSize": { "defaultValue": null, "description": "The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.", "name": "fontSize", "required": false, "type": { "name": "\"inherit\" | \"small\" | \"default\" | \"large\"" } }, "htmlColor": { "defaultValue": null, "description": "Applies a color attribute to the SVG element.", "name": "htmlColor", "required": false, "type": { "name": "string" } }, "shapeRendering": { "defaultValue": null, "description": "The shape-rendering attribute. The behavior of the different options is described on the\n[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).\nIf you are having issues with blurry icons you should investigate this property.\n@document", "name": "shapeRendering", "required": false, "type": { "name": "string" } }, "titleAccess": { "defaultValue": null, "description": "Provides a human-readable title for the element that contains it.\nhttps://www.w3.org/TR/SVG-access/#Equivalent", "name": "titleAccess", "required": false, "type": { "name": "string" } }, "viewBox": { "defaultValue": null, "description": "Allows you to redefine what the coordinates without units mean inside an SVG element.\nFor example, if the SVG element is 500 (width) by 200 (height),\nand you pass viewBox=\"0 0 50 20\",\nthis means that the coordinates inside the SVG will go from the top left corner (0,0)\nto bottom right (50,20) and each unit will be worth 10px.", "name": "viewBox", "required": false, "type": { "name": "string" } }, "aria-activedescendant": { "defaultValue": null, "description": "Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.", "name": "aria-activedescendant", "required": false, "type": { "name": "string" } }, "aria-atomic": { "defaultValue": null, "description": "Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.", "name": "aria-atomic", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-autocomplete": { "defaultValue": null, "description": "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\npresented if they are made.", "name": "aria-autocomplete", "required": false, "type": { "name": "\"none\" | \"inline\" | \"list\" | \"both\"" } }, "aria-busy": { "defaultValue": null, "description": "Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.", "name": "aria-busy", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-checked": { "defaultValue": null, "description": "Indicates the current \"checked\" state of checkboxes, radio buttons, and other widgets.\n@see aria-pressed\n@see aria-selected.", "name": "aria-checked", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"mixed\"" } }, "aria-colcount": { "defaultValue": null, "description": "Defines the total number of columns in a table, grid, or treegrid.\n@see aria-colindex.", "name": "aria-colcount", "required": false, "type": { "name": "number" } }, "aria-colindex": { "defaultValue": null, "description": "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.\n@see aria-colcount\n@see aria-colspan.", "name": "aria-colindex", "required": false, "type": { "name": "number" } }, "aria-colspan": { "defaultValue": null, "description": "Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-colindex\n@see aria-rowspan.", "name": "aria-colspan", "required": false, "type": { "name": "number" } }, "aria-controls": { "defaultValue": null, "description": "Identifies the element (or elements) whose contents or presence are controlled by the current element.\n@see aria-owns.", "name": "aria-controls", "required": false, "type": { "name": "string" } }, "aria-current": { "defaultValue": null, "description": "Indicates the element that represents the current item within a container or set of related elements.", "name": "aria-current", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"page\" | \"step\" | \"location\" | \"date\" | \"time\"" } }, "aria-describedby": { "defaultValue": null, "description": "Identifies the element (or elements) that describes the object.\n@see aria-labelledby", "name": "aria-describedby", "required": false, "type": { "name": "string" } }, "aria-details": { "defaultValue": null, "description": "Identifies the element that provides a detailed, extended description for the object.\n@see aria-describedby.", "name": "aria-details", "required": false, "type": { "name": "string" } }, "aria-disabled": { "defaultValue": null, "description": "Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.\n@see aria-hidden\n@see aria-readonly.", "name": "aria-disabled", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-dropeffect": { "defaultValue": null, "description": "Indicates what functions can be performed when a dragged object is released on the drop target.\n@deprecated in ARIA 1.1", "name": "aria-dropeffect", "required": false, "type": { "name": "\"none\" | \"copy\" | \"execute\" | \"link\" | \"move\" | \"popup\"" } }, "aria-errormessage": { "defaultValue": null, "description": "Identifies the element that provides an error message for the object.\n@see aria-invalid\n@see aria-describedby.", "name": "aria-errormessage", "required": false, "type": { "name": "string" } }, "aria-expanded": { "defaultValue": null, "description": "Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.", "name": "aria-expanded", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-flowto": { "defaultValue": null, "description": "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\nallows assistive technology to override the general default of reading in document source order.", "name": "aria-flowto", "required": false, "type": { "name": "string" } }, "aria-grabbed": { "defaultValue": null, "description": "Indicates an element's \"grabbed\" state in a drag-and-drop operation.\n@deprecated in ARIA 1.1", "name": "aria-grabbed", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-haspopup": { "defaultValue": null, "description": "Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.", "name": "aria-haspopup", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"menu\" | \"listbox\" | \"tree\" | \"grid\" | \"dialog\"" } }, "aria-hidden": { "defaultValue": null, "description": "Indicates whether the element is exposed to an accessibility API.\n@see aria-disabled.", "name": "aria-hidden", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-invalid": { "defaultValue": null, "description": "Indicates the entered value does not conform to the format expected by the application.\n@see aria-errormessage.", "name": "aria-invalid", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\"" } }, "aria-keyshortcuts": { "defaultValue": null, "description": "Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.", "name": "aria-keyshortcuts", "required": false, "type": { "name": "string" } }, "aria-label": { "defaultValue": null, "description": "Defines a string value that labels the current element.\n@see aria-labelledby.", "name": "aria-label", "required": false, "type": { "name": "string" } }, "aria-labelledby": { "defaultValue": null, "description": "Identifies the element (or elements) that labels the current element.\n@see aria-describedby.", "name": "aria-labelledby", "required": false, "type": { "name": "string" } }, "aria-level": { "defaultValue": null, "description": "Defines the hierarchical level of an element within a structure.", "name": "aria-level", "required": false, "type": { "name": "number" } }, "aria-live": { "defaultValue": null, "description": "Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.", "name": "aria-live", "required": false, "type": { "name": "\"off\" | \"assertive\" | \"polite\"" } }, "aria-modal": { "defaultValue": null, "description": "Indicates whether an element is modal when displayed.", "name": "aria-modal", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-multiline": { "defaultValue": null, "description": "Indicates whether a text box accepts multiple lines of input or only a single line.", "name": "aria-multiline", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-multiselectable": { "defaultValue": null, "description": "Indicates that the user may select more than one item from the current selectable descendants.", "name": "aria-multiselectable", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-orientation": { "defaultValue": null, "description": "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.", "name": "aria-orientation", "required": false, "type": { "name": "\"horizontal\" | \"vertical\"" } }, "aria-owns": { "defaultValue": null, "description": "Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.\n@see aria-controls.", "name": "aria-owns", "required": false, "type": { "name": "string" } }, "aria-placeholder": { "defaultValue": null, "description": "Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\nA hint could be a sample value or a brief description of the expected format.", "name": "aria-placeholder", "required": false, "type": { "name": "string" } }, "aria-posinset": { "defaultValue": null, "description": "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-setsize.", "name": "aria-posinset", "required": false, "type": { "name": "number" } }, "aria-pressed": { "defaultValue": null, "description": "Indicates the current \"pressed\" state of toggle buttons.\n@see aria-checked\n@see aria-selected.", "name": "aria-pressed", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"mixed\"" } }, "aria-readonly": { "defaultValue": null, "description": "Indicates that the element is not editable, but is otherwise operable.\n@see aria-disabled.", "name": "aria-readonly", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-relevant": { "defaultValue": null, "description": "Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.\n@see aria-atomic.", "name": "aria-relevant", "required": false, "type": { "name": "\"additions\" | \"additions text\" | \"all\" | \"removals\" | \"text\"" } }, "aria-required": { "defaultValue": null, "description": "Indicates that user input is required on the element before a form may be submitted.", "name": "aria-required", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-roledescription": { "defaultValue": null, "description": "Defines a human-readable, author-localized description for the role of an element.", "name": "aria-roledescription", "required": false, "type": { "name": "string" } }, "aria-rowcount": { "defaultValue": null, "description": "Defines the total number of rows in a table, grid, or treegrid.\n@see aria-rowindex.", "name": "aria-rowcount", "required": false, "type": { "name": "number" } }, "aria-rowindex": { "defaultValue": null, "description": "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.\n@see aria-rowcount\n@see aria-rowspan.", "name": "aria-rowindex", "required": false, "type": { "name": "number" } }, "aria-rowspan": { "defaultValue": null, "description": "Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-rowindex\n@see aria-colspan.", "name": "aria-rowspan", "required": false, "type": { "name": "number" } }, "aria-selected": { "defaultValue": null, "description": "Indicates the current \"selected\" state of various widgets.\n@see aria-checked\n@see aria-pressed.", "name": "aria-selected", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-setsize": { "defaultValue": null, "description": "Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-posinset.", "name": "aria-setsize", "required": false, "type": { "name": "number" } }, "aria-sort": { "defaultValue": null, "description": "Indicates if items in a table or grid are sorted in ascending or descending order.", "name": "aria-sort", "required": false, "type": { "name": "\"none\" | \"ascending\" | \"descending\" | \"other\"" } }, "aria-valuemax": { "defaultValue": null, "description": "Defines the maximum allowed value for a range widget.", "name": "aria-valuemax", "required": false, "type": { "name": "number" } }, "aria-valuemin": { "defaultValue": null, "description": "Defines the minimum allowed value for a range widget.", "name": "aria-valuemin", "required": false, "type": { "name": "number" } }, "aria-valuenow": { "defaultValue": null, "description": "Defines the current value for a range widget.\n@see aria-valuetext.", "name": "aria-valuenow", "required": false, "type": { "name": "number" } }, "aria-valuetext": { "defaultValue": null, "description": "Defines the human readable text alternative of aria-valuenow for a range widget.", "name": "aria-valuetext", "required": false, "type": { "name": "string" } }, "classes": { "defaultValue": null, "description": "Override or extend the styles applied to the component.", "name": "classes", "required": false, "type": { "name": "Partial<Record<SvgIconClassKey, string>>" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["atoms/icons/index.tsx#ListModeIcon"] = { docgenInfo: exports.ListModeIcon.__docgenInfo, name: "ListModeIcon", path: "atoms/icons/index.tsx#ListModeIcon" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    exports.CardModeIcon.displayName = "CardModeIcon";
    // @ts-ignore
    exports.CardModeIcon.__docgenInfo = { "description": "", "displayName": "CardModeIcon", "props": { "children": { "defaultValue": null, "description": "Node passed into the SVG element.", "name": "children", "required": false, "type": { "name": "ReactNode" } }, "color": { "defaultValue": null, "description": "The color of the component. It supports those theme colors that make sense for this component.\nYou can use the `htmlColor` prop to apply a color attribute to the SVG element.", "name": "color", "required": false, "type": { "name": "\"inherit\" | \"primary\" | \"secondary\" | \"action\" | \"disabled\" | \"error\"" } }, "component": { "defaultValue": null, "description": "The component used for the root node.\nEither a string to use a DOM element or a component.", "name": "component", "required": false, "type": { "name": "ElementType<SVGProps<SVGSVGElement>>" } }, "fontSize": { "defaultValue": null, "description": "The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.", "name": "fontSize", "required": false, "type": { "name": "\"inherit\" | \"small\" | \"default\" | \"large\"" } }, "htmlColor": { "defaultValue": null, "description": "Applies a color attribute to the SVG element.", "name": "htmlColor", "required": false, "type": { "name": "string" } }, "shapeRendering": { "defaultValue": null, "description": "The shape-rendering attribute. The behavior of the different options is described on the\n[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).\nIf you are having issues with blurry icons you should investigate this property.\n@document", "name": "shapeRendering", "required": false, "type": { "name": "string" } }, "titleAccess": { "defaultValue": null, "description": "Provides a human-readable title for the element that contains it.\nhttps://www.w3.org/TR/SVG-access/#Equivalent", "name": "titleAccess", "required": false, "type": { "name": "string" } }, "viewBox": { "defaultValue": null, "description": "Allows you to redefine what the coordinates without units mean inside an SVG element.\nFor example, if the SVG element is 500 (width) by 200 (height),\nand you pass viewBox=\"0 0 50 20\",\nthis means that the coordinates inside the SVG will go from the top left corner (0,0)\nto bottom right (50,20) and each unit will be worth 10px.", "name": "viewBox", "required": false, "type": { "name": "string" } }, "aria-activedescendant": { "defaultValue": null, "description": "Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.", "name": "aria-activedescendant", "required": false, "type": { "name": "string" } }, "aria-atomic": { "defaultValue": null, "description": "Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.", "name": "aria-atomic", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-autocomplete": { "defaultValue": null, "description": "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\npresented if they are made.", "name": "aria-autocomplete", "required": false, "type": { "name": "\"none\" | \"inline\" | \"list\" | \"both\"" } }, "aria-busy": { "defaultValue": null, "description": "Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.", "name": "aria-busy", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-checked": { "defaultValue": null, "description": "Indicates the current \"checked\" state of checkboxes, radio buttons, and other widgets.\n@see aria-pressed\n@see aria-selected.", "name": "aria-checked", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"mixed\"" } }, "aria-colcount": { "defaultValue": null, "description": "Defines the total number of columns in a table, grid, or treegrid.\n@see aria-colindex.", "name": "aria-colcount", "required": false, "type": { "name": "number" } }, "aria-colindex": { "defaultValue": null, "description": "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.\n@see aria-colcount\n@see aria-colspan.", "name": "aria-colindex", "required": false, "type": { "name": "number" } }, "aria-colspan": { "defaultValue": null, "description": "Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-colindex\n@see aria-rowspan.", "name": "aria-colspan", "required": false, "type": { "name": "number" } }, "aria-controls": { "defaultValue": null, "description": "Identifies the element (or elements) whose contents or presence are controlled by the current element.\n@see aria-owns.", "name": "aria-controls", "required": false, "type": { "name": "string" } }, "aria-current": { "defaultValue": null, "description": "Indicates the element that represents the current item within a container or set of related elements.", "name": "aria-current", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"page\" | \"step\" | \"location\" | \"date\" | \"time\"" } }, "aria-describedby": { "defaultValue": null, "description": "Identifies the element (or elements) that describes the object.\n@see aria-labelledby", "name": "aria-describedby", "required": false, "type": { "name": "string" } }, "aria-details": { "defaultValue": null, "description": "Identifies the element that provides a detailed, extended description for the object.\n@see aria-describedby.", "name": "aria-details", "required": false, "type": { "name": "string" } }, "aria-disabled": { "defaultValue": null, "description": "Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.\n@see aria-hidden\n@see aria-readonly.", "name": "aria-disabled", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-dropeffect": { "defaultValue": null, "description": "Indicates what functions can be performed when a dragged object is released on the drop target.\n@deprecated in ARIA 1.1", "name": "aria-dropeffect", "required": false, "type": { "name": "\"none\" | \"copy\" | \"execute\" | \"link\" | \"move\" | \"popup\"" } }, "aria-errormessage": { "defaultValue": null, "description": "Identifies the element that provides an error message for the object.\n@see aria-invalid\n@see aria-describedby.", "name": "aria-errormessage", "required": false, "type": { "name": "string" } }, "aria-expanded": { "defaultValue": null, "description": "Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.", "name": "aria-expanded", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-flowto": { "defaultValue": null, "description": "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\nallows assistive technology to override the general default of reading in document source order.", "name": "aria-flowto", "required": false, "type": { "name": "string" } }, "aria-grabbed": { "defaultValue": null, "description": "Indicates an element's \"grabbed\" state in a drag-and-drop operation.\n@deprecated in ARIA 1.1", "name": "aria-grabbed", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-haspopup": { "defaultValue": null, "description": "Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.", "name": "aria-haspopup", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"menu\" | \"listbox\" | \"tree\" | \"grid\" | \"dialog\"" } }, "aria-hidden": { "defaultValue": null, "description": "Indicates whether the element is exposed to an accessibility API.\n@see aria-disabled.", "name": "aria-hidden", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-invalid": { "defaultValue": null, "description": "Indicates the entered value does not conform to the format expected by the application.\n@see aria-errormessage.", "name": "aria-invalid", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\"" } }, "aria-keyshortcuts": { "defaultValue": null, "description": "Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.", "name": "aria-keyshortcuts", "required": false, "type": { "name": "string" } }, "aria-label": { "defaultValue": null, "description": "Defines a string value that labels the current element.\n@see aria-labelledby.", "name": "aria-label", "required": false, "type": { "name": "string" } }, "aria-labelledby": { "defaultValue": null, "description": "Identifies the element (or elements) that labels the current element.\n@see aria-describedby.", "name": "aria-labelledby", "required": false, "type": { "name": "string" } }, "aria-level": { "defaultValue": null, "description": "Defines the hierarchical level of an element within a structure.", "name": "aria-level", "required": false, "type": { "name": "number" } }, "aria-live": { "defaultValue": null, "description": "Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.", "name": "aria-live", "required": false, "type": { "name": "\"off\" | \"assertive\" | \"polite\"" } }, "aria-modal": { "defaultValue": null, "description": "Indicates whether an element is modal when displayed.", "name": "aria-modal", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-multiline": { "defaultValue": null, "description": "Indicates whether a text box accepts multiple lines of input or only a single line.", "name": "aria-multiline", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-multiselectable": { "defaultValue": null, "description": "Indicates that the user may select more than one item from the current selectable descendants.", "name": "aria-multiselectable", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-orientation": { "defaultValue": null, "description": "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.", "name": "aria-orientation", "required": false, "type": { "name": "\"horizontal\" | \"vertical\"" } }, "aria-owns": { "defaultValue": null, "description": "Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.\n@see aria-controls.", "name": "aria-owns", "required": false, "type": { "name": "string" } }, "aria-placeholder": { "defaultValue": null, "description": "Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\nA hint could be a sample value or a brief description of the expected format.", "name": "aria-placeholder", "required": false, "type": { "name": "string" } }, "aria-posinset": { "defaultValue": null, "description": "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-setsize.", "name": "aria-posinset", "required": false, "type": { "name": "number" } }, "aria-pressed": { "defaultValue": null, "description": "Indicates the current \"pressed\" state of toggle buttons.\n@see aria-checked\n@see aria-selected.", "name": "aria-pressed", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"mixed\"" } }, "aria-readonly": { "defaultValue": null, "description": "Indicates that the element is not editable, but is otherwise operable.\n@see aria-disabled.", "name": "aria-readonly", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-relevant": { "defaultValue": null, "description": "Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.\n@see aria-atomic.", "name": "aria-relevant", "required": false, "type": { "name": "\"additions\" | \"additions text\" | \"all\" | \"removals\" | \"text\"" } }, "aria-required": { "defaultValue": null, "description": "Indicates that user input is required on the element before a form may be submitted.", "name": "aria-required", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-roledescription": { "defaultValue": null, "description": "Defines a human-readable, author-localized description for the role of an element.", "name": "aria-roledescription", "required": false, "type": { "name": "string" } }, "aria-rowcount": { "defaultValue": null, "description": "Defines the total number of rows in a table, grid, or treegrid.\n@see aria-rowindex.", "name": "aria-rowcount", "required": false, "type": { "name": "number" } }, "aria-rowindex": { "defaultValue": null, "description": "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.\n@see aria-rowcount\n@see aria-rowspan.", "name": "aria-rowindex", "required": false, "type": { "name": "number" } }, "aria-rowspan": { "defaultValue": null, "description": "Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-rowindex\n@see aria-colspan.", "name": "aria-rowspan", "required": false, "type": { "name": "number" } }, "aria-selected": { "defaultValue": null, "description": "Indicates the current \"selected\" state of various widgets.\n@see aria-checked\n@see aria-pressed.", "name": "aria-selected", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-setsize": { "defaultValue": null, "description": "Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-posinset.", "name": "aria-setsize", "required": false, "type": { "name": "number" } }, "aria-sort": { "defaultValue": null, "description": "Indicates if items in a table or grid are sorted in ascending or descending order.", "name": "aria-sort", "required": false, "type": { "name": "\"none\" | \"ascending\" | \"descending\" | \"other\"" } }, "aria-valuemax": { "defaultValue": null, "description": "Defines the maximum allowed value for a range widget.", "name": "aria-valuemax", "required": false, "type": { "name": "number" } }, "aria-valuemin": { "defaultValue": null, "description": "Defines the minimum allowed value for a range widget.", "name": "aria-valuemin", "required": false, "type": { "name": "number" } }, "aria-valuenow": { "defaultValue": null, "description": "Defines the current value for a range widget.\n@see aria-valuetext.", "name": "aria-valuenow", "required": false, "type": { "name": "number" } }, "aria-valuetext": { "defaultValue": null, "description": "Defines the human readable text alternative of aria-valuenow for a range widget.", "name": "aria-valuetext", "required": false, "type": { "name": "string" } }, "classes": { "defaultValue": null, "description": "Override or extend the styles applied to the component.", "name": "classes", "required": false, "type": { "name": "Partial<Record<SvgIconClassKey, string>>" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["atoms/icons/index.tsx#CardModeIcon"] = { docgenInfo: exports.CardModeIcon.__docgenInfo, name: "CardModeIcon", path: "atoms/icons/index.tsx#CardModeIcon" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    exports.CloseIcon.displayName = "CloseIcon";
    // @ts-ignore
    exports.CloseIcon.__docgenInfo = { "description": "", "displayName": "CloseIcon", "props": { "children": { "defaultValue": null, "description": "Node passed into the SVG element.", "name": "children", "required": false, "type": { "name": "ReactNode" } }, "color": { "defaultValue": null, "description": "The color of the component. It supports those theme colors that make sense for this component.\nYou can use the `htmlColor` prop to apply a color attribute to the SVG element.", "name": "color", "required": false, "type": { "name": "\"inherit\" | \"primary\" | \"secondary\" | \"action\" | \"disabled\" | \"error\"" } }, "component": { "defaultValue": null, "description": "The component used for the root node.\nEither a string to use a DOM element or a component.", "name": "component", "required": false, "type": { "name": "ElementType<SVGProps<SVGSVGElement>>" } }, "fontSize": { "defaultValue": null, "description": "The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.", "name": "fontSize", "required": false, "type": { "name": "\"inherit\" | \"small\" | \"default\" | \"large\"" } }, "htmlColor": { "defaultValue": null, "description": "Applies a color attribute to the SVG element.", "name": "htmlColor", "required": false, "type": { "name": "string" } }, "shapeRendering": { "defaultValue": null, "description": "The shape-rendering attribute. The behavior of the different options is described on the\n[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).\nIf you are having issues with blurry icons you should investigate this property.\n@document", "name": "shapeRendering", "required": false, "type": { "name": "string" } }, "titleAccess": { "defaultValue": null, "description": "Provides a human-readable title for the element that contains it.\nhttps://www.w3.org/TR/SVG-access/#Equivalent", "name": "titleAccess", "required": false, "type": { "name": "string" } }, "viewBox": { "defaultValue": null, "description": "Allows you to redefine what the coordinates without units mean inside an SVG element.\nFor example, if the SVG element is 500 (width) by 200 (height),\nand you pass viewBox=\"0 0 50 20\",\nthis means that the coordinates inside the SVG will go from the top left corner (0,0)\nto bottom right (50,20) and each unit will be worth 10px.", "name": "viewBox", "required": false, "type": { "name": "string" } }, "aria-activedescendant": { "defaultValue": null, "description": "Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.", "name": "aria-activedescendant", "required": false, "type": { "name": "string" } }, "aria-atomic": { "defaultValue": null, "description": "Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.", "name": "aria-atomic", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-autocomplete": { "defaultValue": null, "description": "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\npresented if they are made.", "name": "aria-autocomplete", "required": false, "type": { "name": "\"none\" | \"inline\" | \"list\" | \"both\"" } }, "aria-busy": { "defaultValue": null, "description": "Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.", "name": "aria-busy", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-checked": { "defaultValue": null, "description": "Indicates the current \"checked\" state of checkboxes, radio buttons, and other widgets.\n@see aria-pressed\n@see aria-selected.", "name": "aria-checked", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"mixed\"" } }, "aria-colcount": { "defaultValue": null, "description": "Defines the total number of columns in a table, grid, or treegrid.\n@see aria-colindex.", "name": "aria-colcount", "required": false, "type": { "name": "number" } }, "aria-colindex": { "defaultValue": null, "description": "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.\n@see aria-colcount\n@see aria-colspan.", "name": "aria-colindex", "required": false, "type": { "name": "number" } }, "aria-colspan": { "defaultValue": null, "description": "Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-colindex\n@see aria-rowspan.", "name": "aria-colspan", "required": false, "type": { "name": "number" } }, "aria-controls": { "defaultValue": null, "description": "Identifies the element (or elements) whose contents or presence are controlled by the current element.\n@see aria-owns.", "name": "aria-controls", "required": false, "type": { "name": "string" } }, "aria-current": { "defaultValue": null, "description": "Indicates the element that represents the current item within a container or set of related elements.", "name": "aria-current", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"page\" | \"step\" | \"location\" | \"date\" | \"time\"" } }, "aria-describedby": { "defaultValue": null, "description": "Identifies the element (or elements) that describes the object.\n@see aria-labelledby", "name": "aria-describedby", "required": false, "type": { "name": "string" } }, "aria-details": { "defaultValue": null, "description": "Identifies the element that provides a detailed, extended description for the object.\n@see aria-describedby.", "name": "aria-details", "required": false, "type": { "name": "string" } }, "aria-disabled": { "defaultValue": null, "description": "Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.\n@see aria-hidden\n@see aria-readonly.", "name": "aria-disabled", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-dropeffect": { "defaultValue": null, "description": "Indicates what functions can be performed when a dragged object is released on the drop target.\n@deprecated in ARIA 1.1", "name": "aria-dropeffect", "required": false, "type": { "name": "\"none\" | \"copy\" | \"execute\" | \"link\" | \"move\" | \"popup\"" } }, "aria-errormessage": { "defaultValue": null, "description": "Identifies the element that provides an error message for the object.\n@see aria-invalid\n@see aria-describedby.", "name": "aria-errormessage", "required": false, "type": { "name": "string" } }, "aria-expanded": { "defaultValue": null, "description": "Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.", "name": "aria-expanded", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-flowto": { "defaultValue": null, "description": "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\nallows assistive technology to override the general default of reading in document source order.", "name": "aria-flowto", "required": false, "type": { "name": "string" } }, "aria-grabbed": { "defaultValue": null, "description": "Indicates an element's \"grabbed\" state in a drag-and-drop operation.\n@deprecated in ARIA 1.1", "name": "aria-grabbed", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-haspopup": { "defaultValue": null, "description": "Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.", "name": "aria-haspopup", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"menu\" | \"listbox\" | \"tree\" | \"grid\" | \"dialog\"" } }, "aria-hidden": { "defaultValue": null, "description": "Indicates whether the element is exposed to an accessibility API.\n@see aria-disabled.", "name": "aria-hidden", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-invalid": { "defaultValue": null, "description": "Indicates the entered value does not conform to the format expected by the application.\n@see aria-errormessage.", "name": "aria-invalid", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\"" } }, "aria-keyshortcuts": { "defaultValue": null, "description": "Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.", "name": "aria-keyshortcuts", "required": false, "type": { "name": "string" } }, "aria-label": { "defaultValue": null, "description": "Defines a string value that labels the current element.\n@see aria-labelledby.", "name": "aria-label", "required": false, "type": { "name": "string" } }, "aria-labelledby": { "defaultValue": null, "description": "Identifies the element (or elements) that labels the current element.\n@see aria-describedby.", "name": "aria-labelledby", "required": false, "type": { "name": "string" } }, "aria-level": { "defaultValue": null, "description": "Defines the hierarchical level of an element within a structure.", "name": "aria-level", "required": false, "type": { "name": "number" } }, "aria-live": { "defaultValue": null, "description": "Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.", "name": "aria-live", "required": false, "type": { "name": "\"off\" | \"assertive\" | \"polite\"" } }, "aria-modal": { "defaultValue": null, "description": "Indicates whether an element is modal when displayed.", "name": "aria-modal", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-multiline": { "defaultValue": null, "description": "Indicates whether a text box accepts multiple lines of input or only a single line.", "name": "aria-multiline", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-multiselectable": { "defaultValue": null, "description": "Indicates that the user may select more than one item from the current selectable descendants.", "name": "aria-multiselectable", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-orientation": { "defaultValue": null, "description": "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.", "name": "aria-orientation", "required": false, "type": { "name": "\"horizontal\" | \"vertical\"" } }, "aria-owns": { "defaultValue": null, "description": "Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.\n@see aria-controls.", "name": "aria-owns", "required": false, "type": { "name": "string" } }, "aria-placeholder": { "defaultValue": null, "description": "Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\nA hint could be a sample value or a brief description of the expected format.", "name": "aria-placeholder", "required": false, "type": { "name": "string" } }, "aria-posinset": { "defaultValue": null, "description": "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-setsize.", "name": "aria-posinset", "required": false, "type": { "name": "number" } }, "aria-pressed": { "defaultValue": null, "description": "Indicates the current \"pressed\" state of toggle buttons.\n@see aria-checked\n@see aria-selected.", "name": "aria-pressed", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"mixed\"" } }, "aria-readonly": { "defaultValue": null, "description": "Indicates that the element is not editable, but is otherwise operable.\n@see aria-disabled.", "name": "aria-readonly", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-relevant": { "defaultValue": null, "description": "Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.\n@see aria-atomic.", "name": "aria-relevant", "required": false, "type": { "name": "\"additions\" | \"additions text\" | \"all\" | \"removals\" | \"text\"" } }, "aria-required": { "defaultValue": null, "description": "Indicates that user input is required on the element before a form may be submitted.", "name": "aria-required", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-roledescription": { "defaultValue": null, "description": "Defines a human-readable, author-localized description for the role of an element.", "name": "aria-roledescription", "required": false, "type": { "name": "string" } }, "aria-rowcount": { "defaultValue": null, "description": "Defines the total number of rows in a table, grid, or treegrid.\n@see aria-rowindex.", "name": "aria-rowcount", "required": false, "type": { "name": "number" } }, "aria-rowindex": { "defaultValue": null, "description": "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.\n@see aria-rowcount\n@see aria-rowspan.", "name": "aria-rowindex", "required": false, "type": { "name": "number" } }, "aria-rowspan": { "defaultValue": null, "description": "Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-rowindex\n@see aria-colspan.", "name": "aria-rowspan", "required": false, "type": { "name": "number" } }, "aria-selected": { "defaultValue": null, "description": "Indicates the current \"selected\" state of various widgets.\n@see aria-checked\n@see aria-pressed.", "name": "aria-selected", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-setsize": { "defaultValue": null, "description": "Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-posinset.", "name": "aria-setsize", "required": false, "type": { "name": "number" } }, "aria-sort": { "defaultValue": null, "description": "Indicates if items in a table or grid are sorted in ascending or descending order.", "name": "aria-sort", "required": false, "type": { "name": "\"none\" | \"ascending\" | \"descending\" | \"other\"" } }, "aria-valuemax": { "defaultValue": null, "description": "Defines the maximum allowed value for a range widget.", "name": "aria-valuemax", "required": false, "type": { "name": "number" } }, "aria-valuemin": { "defaultValue": null, "description": "Defines the minimum allowed value for a range widget.", "name": "aria-valuemin", "required": false, "type": { "name": "number" } }, "aria-valuenow": { "defaultValue": null, "description": "Defines the current value for a range widget.\n@see aria-valuetext.", "name": "aria-valuenow", "required": false, "type": { "name": "number" } }, "aria-valuetext": { "defaultValue": null, "description": "Defines the human readable text alternative of aria-valuenow for a range widget.", "name": "aria-valuetext", "required": false, "type": { "name": "string" } }, "classes": { "defaultValue": null, "description": "Override or extend the styles applied to the component.", "name": "classes", "required": false, "type": { "name": "Partial<Record<SvgIconClassKey, string>>" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["atoms/icons/index.tsx#CloseIcon"] = { docgenInfo: exports.CloseIcon.__docgenInfo, name: "CloseIcon", path: "atoms/icons/index.tsx#CloseIcon" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    exports.ErrorIcon.displayName = "ErrorIcon";
    // @ts-ignore
    exports.ErrorIcon.__docgenInfo = { "description": "", "displayName": "ErrorIcon", "props": { "children": { "defaultValue": null, "description": "Node passed into the SVG element.", "name": "children", "required": false, "type": { "name": "ReactNode" } }, "color": { "defaultValue": null, "description": "The color of the component. It supports those theme colors that make sense for this component.\nYou can use the `htmlColor` prop to apply a color attribute to the SVG element.", "name": "color", "required": false, "type": { "name": "\"inherit\" | \"primary\" | \"secondary\" | \"action\" | \"disabled\" | \"error\"" } }, "component": { "defaultValue": null, "description": "The component used for the root node.\nEither a string to use a DOM element or a component.", "name": "component", "required": false, "type": { "name": "ElementType<SVGProps<SVGSVGElement>>" } }, "fontSize": { "defaultValue": null, "description": "The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.", "name": "fontSize", "required": false, "type": { "name": "\"inherit\" | \"small\" | \"default\" | \"large\"" } }, "htmlColor": { "defaultValue": null, "description": "Applies a color attribute to the SVG element.", "name": "htmlColor", "required": false, "type": { "name": "string" } }, "shapeRendering": { "defaultValue": null, "description": "The shape-rendering attribute. The behavior of the different options is described on the\n[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).\nIf you are having issues with blurry icons you should investigate this property.\n@document", "name": "shapeRendering", "required": false, "type": { "name": "string" } }, "titleAccess": { "defaultValue": null, "description": "Provides a human-readable title for the element that contains it.\nhttps://www.w3.org/TR/SVG-access/#Equivalent", "name": "titleAccess", "required": false, "type": { "name": "string" } }, "viewBox": { "defaultValue": null, "description": "Allows you to redefine what the coordinates without units mean inside an SVG element.\nFor example, if the SVG element is 500 (width) by 200 (height),\nand you pass viewBox=\"0 0 50 20\",\nthis means that the coordinates inside the SVG will go from the top left corner (0,0)\nto bottom right (50,20) and each unit will be worth 10px.", "name": "viewBox", "required": false, "type": { "name": "string" } }, "aria-activedescendant": { "defaultValue": null, "description": "Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.", "name": "aria-activedescendant", "required": false, "type": { "name": "string" } }, "aria-atomic": { "defaultValue": null, "description": "Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.", "name": "aria-atomic", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-autocomplete": { "defaultValue": null, "description": "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\npresented if they are made.", "name": "aria-autocomplete", "required": false, "type": { "name": "\"none\" | \"inline\" | \"list\" | \"both\"" } }, "aria-busy": { "defaultValue": null, "description": "Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.", "name": "aria-busy", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-checked": { "defaultValue": null, "description": "Indicates the current \"checked\" state of checkboxes, radio buttons, and other widgets.\n@see aria-pressed\n@see aria-selected.", "name": "aria-checked", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"mixed\"" } }, "aria-colcount": { "defaultValue": null, "description": "Defines the total number of columns in a table, grid, or treegrid.\n@see aria-colindex.", "name": "aria-colcount", "required": false, "type": { "name": "number" } }, "aria-colindex": { "defaultValue": null, "description": "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.\n@see aria-colcount\n@see aria-colspan.", "name": "aria-colindex", "required": false, "type": { "name": "number" } }, "aria-colspan": { "defaultValue": null, "description": "Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-colindex\n@see aria-rowspan.", "name": "aria-colspan", "required": false, "type": { "name": "number" } }, "aria-controls": { "defaultValue": null, "description": "Identifies the element (or elements) whose contents or presence are controlled by the current element.\n@see aria-owns.", "name": "aria-controls", "required": false, "type": { "name": "string" } }, "aria-current": { "defaultValue": null, "description": "Indicates the element that represents the current item within a container or set of related elements.", "name": "aria-current", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"page\" | \"step\" | \"location\" | \"date\" | \"time\"" } }, "aria-describedby": { "defaultValue": null, "description": "Identifies the element (or elements) that describes the object.\n@see aria-labelledby", "name": "aria-describedby", "required": false, "type": { "name": "string" } }, "aria-details": { "defaultValue": null, "description": "Identifies the element that provides a detailed, extended description for the object.\n@see aria-describedby.", "name": "aria-details", "required": false, "type": { "name": "string" } }, "aria-disabled": { "defaultValue": null, "description": "Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.\n@see aria-hidden\n@see aria-readonly.", "name": "aria-disabled", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-dropeffect": { "defaultValue": null, "description": "Indicates what functions can be performed when a dragged object is released on the drop target.\n@deprecated in ARIA 1.1", "name": "aria-dropeffect", "required": false, "type": { "name": "\"none\" | \"copy\" | \"execute\" | \"link\" | \"move\" | \"popup\"" } }, "aria-errormessage": { "defaultValue": null, "description": "Identifies the element that provides an error message for the object.\n@see aria-invalid\n@see aria-describedby.", "name": "aria-errormessage", "required": false, "type": { "name": "string" } }, "aria-expanded": { "defaultValue": null, "description": "Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.", "name": "aria-expanded", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-flowto": { "defaultValue": null, "description": "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\nallows assistive technology to override the general default of reading in document source order.", "name": "aria-flowto", "required": false, "type": { "name": "string" } }, "aria-grabbed": { "defaultValue": null, "description": "Indicates an element's \"grabbed\" state in a drag-and-drop operation.\n@deprecated in ARIA 1.1", "name": "aria-grabbed", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-haspopup": { "defaultValue": null, "description": "Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.", "name": "aria-haspopup", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"menu\" | \"listbox\" | \"tree\" | \"grid\" | \"dialog\"" } }, "aria-hidden": { "defaultValue": null, "description": "Indicates whether the element is exposed to an accessibility API.\n@see aria-disabled.", "name": "aria-hidden", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-invalid": { "defaultValue": null, "description": "Indicates the entered value does not conform to the format expected by the application.\n@see aria-errormessage.", "name": "aria-invalid", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\"" } }, "aria-keyshortcuts": { "defaultValue": null, "description": "Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.", "name": "aria-keyshortcuts", "required": false, "type": { "name": "string" } }, "aria-label": { "defaultValue": null, "description": "Defines a string value that labels the current element.\n@see aria-labelledby.", "name": "aria-label", "required": false, "type": { "name": "string" } }, "aria-labelledby": { "defaultValue": null, "description": "Identifies the element (or elements) that labels the current element.\n@see aria-describedby.", "name": "aria-labelledby", "required": false, "type": { "name": "string" } }, "aria-level": { "defaultValue": null, "description": "Defines the hierarchical level of an element within a structure.", "name": "aria-level", "required": false, "type": { "name": "number" } }, "aria-live": { "defaultValue": null, "description": "Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.", "name": "aria-live", "required": false, "type": { "name": "\"off\" | \"assertive\" | \"polite\"" } }, "aria-modal": { "defaultValue": null, "description": "Indicates whether an element is modal when displayed.", "name": "aria-modal", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-multiline": { "defaultValue": null, "description": "Indicates whether a text box accepts multiple lines of input or only a single line.", "name": "aria-multiline", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-multiselectable": { "defaultValue": null, "description": "Indicates that the user may select more than one item from the current selectable descendants.", "name": "aria-multiselectable", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-orientation": { "defaultValue": null, "description": "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.", "name": "aria-orientation", "required": false, "type": { "name": "\"horizontal\" | \"vertical\"" } }, "aria-owns": { "defaultValue": null, "description": "Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.\n@see aria-controls.", "name": "aria-owns", "required": false, "type": { "name": "string" } }, "aria-placeholder": { "defaultValue": null, "description": "Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\nA hint could be a sample value or a brief description of the expected format.", "name": "aria-placeholder", "required": false, "type": { "name": "string" } }, "aria-posinset": { "defaultValue": null, "description": "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-setsize.", "name": "aria-posinset", "required": false, "type": { "name": "number" } }, "aria-pressed": { "defaultValue": null, "description": "Indicates the current \"pressed\" state of toggle buttons.\n@see aria-checked\n@see aria-selected.", "name": "aria-pressed", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"mixed\"" } }, "aria-readonly": { "defaultValue": null, "description": "Indicates that the element is not editable, but is otherwise operable.\n@see aria-disabled.", "name": "aria-readonly", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-relevant": { "defaultValue": null, "description": "Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.\n@see aria-atomic.", "name": "aria-relevant", "required": false, "type": { "name": "\"additions\" | \"additions text\" | \"all\" | \"removals\" | \"text\"" } }, "aria-required": { "defaultValue": null, "description": "Indicates that user input is required on the element before a form may be submitted.", "name": "aria-required", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-roledescription": { "defaultValue": null, "description": "Defines a human-readable, author-localized description for the role of an element.", "name": "aria-roledescription", "required": false, "type": { "name": "string" } }, "aria-rowcount": { "defaultValue": null, "description": "Defines the total number of rows in a table, grid, or treegrid.\n@see aria-rowindex.", "name": "aria-rowcount", "required": false, "type": { "name": "number" } }, "aria-rowindex": { "defaultValue": null, "description": "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.\n@see aria-rowcount\n@see aria-rowspan.", "name": "aria-rowindex", "required": false, "type": { "name": "number" } }, "aria-rowspan": { "defaultValue": null, "description": "Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-rowindex\n@see aria-colspan.", "name": "aria-rowspan", "required": false, "type": { "name": "number" } }, "aria-selected": { "defaultValue": null, "description": "Indicates the current \"selected\" state of various widgets.\n@see aria-checked\n@see aria-pressed.", "name": "aria-selected", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-setsize": { "defaultValue": null, "description": "Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-posinset.", "name": "aria-setsize", "required": false, "type": { "name": "number" } }, "aria-sort": { "defaultValue": null, "description": "Indicates if items in a table or grid are sorted in ascending or descending order.", "name": "aria-sort", "required": false, "type": { "name": "\"none\" | \"ascending\" | \"descending\" | \"other\"" } }, "aria-valuemax": { "defaultValue": null, "description": "Defines the maximum allowed value for a range widget.", "name": "aria-valuemax", "required": false, "type": { "name": "number" } }, "aria-valuemin": { "defaultValue": null, "description": "Defines the minimum allowed value for a range widget.", "name": "aria-valuemin", "required": false, "type": { "name": "number" } }, "aria-valuenow": { "defaultValue": null, "description": "Defines the current value for a range widget.\n@see aria-valuetext.", "name": "aria-valuenow", "required": false, "type": { "name": "number" } }, "aria-valuetext": { "defaultValue": null, "description": "Defines the human readable text alternative of aria-valuenow for a range widget.", "name": "aria-valuetext", "required": false, "type": { "name": "string" } }, "classes": { "defaultValue": null, "description": "Override or extend the styles applied to the component.", "name": "classes", "required": false, "type": { "name": "Partial<Record<SvgIconClassKey, string>>" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["atoms/icons/index.tsx#ErrorIcon"] = { docgenInfo: exports.ErrorIcon.__docgenInfo, name: "ErrorIcon", path: "atoms/icons/index.tsx#ErrorIcon" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    exports.BackIcon.displayName = "BackIcon";
    // @ts-ignore
    exports.BackIcon.__docgenInfo = { "description": "", "displayName": "BackIcon", "props": { "children": { "defaultValue": null, "description": "Node passed into the SVG element.", "name": "children", "required": false, "type": { "name": "ReactNode" } }, "color": { "defaultValue": null, "description": "The color of the component. It supports those theme colors that make sense for this component.\nYou can use the `htmlColor` prop to apply a color attribute to the SVG element.", "name": "color", "required": false, "type": { "name": "\"inherit\" | \"primary\" | \"secondary\" | \"action\" | \"disabled\" | \"error\"" } }, "component": { "defaultValue": null, "description": "The component used for the root node.\nEither a string to use a DOM element or a component.", "name": "component", "required": false, "type": { "name": "ElementType<SVGProps<SVGSVGElement>>" } }, "fontSize": { "defaultValue": null, "description": "The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.", "name": "fontSize", "required": false, "type": { "name": "\"inherit\" | \"small\" | \"default\" | \"large\"" } }, "htmlColor": { "defaultValue": null, "description": "Applies a color attribute to the SVG element.", "name": "htmlColor", "required": false, "type": { "name": "string" } }, "shapeRendering": { "defaultValue": null, "description": "The shape-rendering attribute. The behavior of the different options is described on the\n[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).\nIf you are having issues with blurry icons you should investigate this property.\n@document", "name": "shapeRendering", "required": false, "type": { "name": "string" } }, "titleAccess": { "defaultValue": null, "description": "Provides a human-readable title for the element that contains it.\nhttps://www.w3.org/TR/SVG-access/#Equivalent", "name": "titleAccess", "required": false, "type": { "name": "string" } }, "viewBox": { "defaultValue": null, "description": "Allows you to redefine what the coordinates without units mean inside an SVG element.\nFor example, if the SVG element is 500 (width) by 200 (height),\nand you pass viewBox=\"0 0 50 20\",\nthis means that the coordinates inside the SVG will go from the top left corner (0,0)\nto bottom right (50,20) and each unit will be worth 10px.", "name": "viewBox", "required": false, "type": { "name": "string" } }, "aria-activedescendant": { "defaultValue": null, "description": "Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.", "name": "aria-activedescendant", "required": false, "type": { "name": "string" } }, "aria-atomic": { "defaultValue": null, "description": "Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.", "name": "aria-atomic", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-autocomplete": { "defaultValue": null, "description": "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\npresented if they are made.", "name": "aria-autocomplete", "required": false, "type": { "name": "\"none\" | \"inline\" | \"list\" | \"both\"" } }, "aria-busy": { "defaultValue": null, "description": "Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.", "name": "aria-busy", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-checked": { "defaultValue": null, "description": "Indicates the current \"checked\" state of checkboxes, radio buttons, and other widgets.\n@see aria-pressed\n@see aria-selected.", "name": "aria-checked", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"mixed\"" } }, "aria-colcount": { "defaultValue": null, "description": "Defines the total number of columns in a table, grid, or treegrid.\n@see aria-colindex.", "name": "aria-colcount", "required": false, "type": { "name": "number" } }, "aria-colindex": { "defaultValue": null, "description": "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.\n@see aria-colcount\n@see aria-colspan.", "name": "aria-colindex", "required": false, "type": { "name": "number" } }, "aria-colspan": { "defaultValue": null, "description": "Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-colindex\n@see aria-rowspan.", "name": "aria-colspan", "required": false, "type": { "name": "number" } }, "aria-controls": { "defaultValue": null, "description": "Identifies the element (or elements) whose contents or presence are controlled by the current element.\n@see aria-owns.", "name": "aria-controls", "required": false, "type": { "name": "string" } }, "aria-current": { "defaultValue": null, "description": "Indicates the element that represents the current item within a container or set of related elements.", "name": "aria-current", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"page\" | \"step\" | \"location\" | \"date\" | \"time\"" } }, "aria-describedby": { "defaultValue": null, "description": "Identifies the element (or elements) that describes the object.\n@see aria-labelledby", "name": "aria-describedby", "required": false, "type": { "name": "string" } }, "aria-details": { "defaultValue": null, "description": "Identifies the element that provides a detailed, extended description for the object.\n@see aria-describedby.", "name": "aria-details", "required": false, "type": { "name": "string" } }, "aria-disabled": { "defaultValue": null, "description": "Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.\n@see aria-hidden\n@see aria-readonly.", "name": "aria-disabled", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-dropeffect": { "defaultValue": null, "description": "Indicates what functions can be performed when a dragged object is released on the drop target.\n@deprecated in ARIA 1.1", "name": "aria-dropeffect", "required": false, "type": { "name": "\"none\" | \"copy\" | \"execute\" | \"link\" | \"move\" | \"popup\"" } }, "aria-errormessage": { "defaultValue": null, "description": "Identifies the element that provides an error message for the object.\n@see aria-invalid\n@see aria-describedby.", "name": "aria-errormessage", "required": false, "type": { "name": "string" } }, "aria-expanded": { "defaultValue": null, "description": "Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.", "name": "aria-expanded", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-flowto": { "defaultValue": null, "description": "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\nallows assistive technology to override the general default of reading in document source order.", "name": "aria-flowto", "required": false, "type": { "name": "string" } }, "aria-grabbed": { "defaultValue": null, "description": "Indicates an element's \"grabbed\" state in a drag-and-drop operation.\n@deprecated in ARIA 1.1", "name": "aria-grabbed", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-haspopup": { "defaultValue": null, "description": "Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.", "name": "aria-haspopup", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"menu\" | \"listbox\" | \"tree\" | \"grid\" | \"dialog\"" } }, "aria-hidden": { "defaultValue": null, "description": "Indicates whether the element is exposed to an accessibility API.\n@see aria-disabled.", "name": "aria-hidden", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-invalid": { "defaultValue": null, "description": "Indicates the entered value does not conform to the format expected by the application.\n@see aria-errormessage.", "name": "aria-invalid", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\"" } }, "aria-keyshortcuts": { "defaultValue": null, "description": "Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.", "name": "aria-keyshortcuts", "required": false, "type": { "name": "string" } }, "aria-label": { "defaultValue": null, "description": "Defines a string value that labels the current element.\n@see aria-labelledby.", "name": "aria-label", "required": false, "type": { "name": "string" } }, "aria-labelledby": { "defaultValue": null, "description": "Identifies the element (or elements) that labels the current element.\n@see aria-describedby.", "name": "aria-labelledby", "required": false, "type": { "name": "string" } }, "aria-level": { "defaultValue": null, "description": "Defines the hierarchical level of an element within a structure.", "name": "aria-level", "required": false, "type": { "name": "number" } }, "aria-live": { "defaultValue": null, "description": "Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.", "name": "aria-live", "required": false, "type": { "name": "\"off\" | \"assertive\" | \"polite\"" } }, "aria-modal": { "defaultValue": null, "description": "Indicates whether an element is modal when displayed.", "name": "aria-modal", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-multiline": { "defaultValue": null, "description": "Indicates whether a text box accepts multiple lines of input or only a single line.", "name": "aria-multiline", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-multiselectable": { "defaultValue": null, "description": "Indicates that the user may select more than one item from the current selectable descendants.", "name": "aria-multiselectable", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-orientation": { "defaultValue": null, "description": "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.", "name": "aria-orientation", "required": false, "type": { "name": "\"horizontal\" | \"vertical\"" } }, "aria-owns": { "defaultValue": null, "description": "Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.\n@see aria-controls.", "name": "aria-owns", "required": false, "type": { "name": "string" } }, "aria-placeholder": { "defaultValue": null, "description": "Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\nA hint could be a sample value or a brief description of the expected format.", "name": "aria-placeholder", "required": false, "type": { "name": "string" } }, "aria-posinset": { "defaultValue": null, "description": "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-setsize.", "name": "aria-posinset", "required": false, "type": { "name": "number" } }, "aria-pressed": { "defaultValue": null, "description": "Indicates the current \"pressed\" state of toggle buttons.\n@see aria-checked\n@see aria-selected.", "name": "aria-pressed", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"mixed\"" } }, "aria-readonly": { "defaultValue": null, "description": "Indicates that the element is not editable, but is otherwise operable.\n@see aria-disabled.", "name": "aria-readonly", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-relevant": { "defaultValue": null, "description": "Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.\n@see aria-atomic.", "name": "aria-relevant", "required": false, "type": { "name": "\"additions\" | \"additions text\" | \"all\" | \"removals\" | \"text\"" } }, "aria-required": { "defaultValue": null, "description": "Indicates that user input is required on the element before a form may be submitted.", "name": "aria-required", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-roledescription": { "defaultValue": null, "description": "Defines a human-readable, author-localized description for the role of an element.", "name": "aria-roledescription", "required": false, "type": { "name": "string" } }, "aria-rowcount": { "defaultValue": null, "description": "Defines the total number of rows in a table, grid, or treegrid.\n@see aria-rowindex.", "name": "aria-rowcount", "required": false, "type": { "name": "number" } }, "aria-rowindex": { "defaultValue": null, "description": "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.\n@see aria-rowcount\n@see aria-rowspan.", "name": "aria-rowindex", "required": false, "type": { "name": "number" } }, "aria-rowspan": { "defaultValue": null, "description": "Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-rowindex\n@see aria-colspan.", "name": "aria-rowspan", "required": false, "type": { "name": "number" } }, "aria-selected": { "defaultValue": null, "description": "Indicates the current \"selected\" state of various widgets.\n@see aria-checked\n@see aria-pressed.", "name": "aria-selected", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-setsize": { "defaultValue": null, "description": "Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-posinset.", "name": "aria-setsize", "required": false, "type": { "name": "number" } }, "aria-sort": { "defaultValue": null, "description": "Indicates if items in a table or grid are sorted in ascending or descending order.", "name": "aria-sort", "required": false, "type": { "name": "\"none\" | \"ascending\" | \"descending\" | \"other\"" } }, "aria-valuemax": { "defaultValue": null, "description": "Defines the maximum allowed value for a range widget.", "name": "aria-valuemax", "required": false, "type": { "name": "number" } }, "aria-valuemin": { "defaultValue": null, "description": "Defines the minimum allowed value for a range widget.", "name": "aria-valuemin", "required": false, "type": { "name": "number" } }, "aria-valuenow": { "defaultValue": null, "description": "Defines the current value for a range widget.\n@see aria-valuetext.", "name": "aria-valuenow", "required": false, "type": { "name": "number" } }, "aria-valuetext": { "defaultValue": null, "description": "Defines the human readable text alternative of aria-valuenow for a range widget.", "name": "aria-valuetext", "required": false, "type": { "name": "string" } }, "classes": { "defaultValue": null, "description": "Override or extend the styles applied to the component.", "name": "classes", "required": false, "type": { "name": "Partial<Record<SvgIconClassKey, string>>" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["atoms/icons/index.tsx#BackIcon"] = { docgenInfo: exports.BackIcon.__docgenInfo, name: "BackIcon", path: "atoms/icons/index.tsx#BackIcon" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    exports.RemoveIcon.displayName = "RemoveIcon";
    // @ts-ignore
    exports.RemoveIcon.__docgenInfo = { "description": "", "displayName": "RemoveIcon", "props": { "children": { "defaultValue": null, "description": "Node passed into the SVG element.", "name": "children", "required": false, "type": { "name": "ReactNode" } }, "color": { "defaultValue": null, "description": "The color of the component. It supports those theme colors that make sense for this component.\nYou can use the `htmlColor` prop to apply a color attribute to the SVG element.", "name": "color", "required": false, "type": { "name": "\"inherit\" | \"primary\" | \"secondary\" | \"action\" | \"disabled\" | \"error\"" } }, "component": { "defaultValue": null, "description": "The component used for the root node.\nEither a string to use a DOM element or a component.", "name": "component", "required": false, "type": { "name": "ElementType<SVGProps<SVGSVGElement>>" } }, "fontSize": { "defaultValue": null, "description": "The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.", "name": "fontSize", "required": false, "type": { "name": "\"inherit\" | \"small\" | \"default\" | \"large\"" } }, "htmlColor": { "defaultValue": null, "description": "Applies a color attribute to the SVG element.", "name": "htmlColor", "required": false, "type": { "name": "string" } }, "shapeRendering": { "defaultValue": null, "description": "The shape-rendering attribute. The behavior of the different options is described on the\n[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).\nIf you are having issues with blurry icons you should investigate this property.\n@document", "name": "shapeRendering", "required": false, "type": { "name": "string" } }, "titleAccess": { "defaultValue": null, "description": "Provides a human-readable title for the element that contains it.\nhttps://www.w3.org/TR/SVG-access/#Equivalent", "name": "titleAccess", "required": false, "type": { "name": "string" } }, "viewBox": { "defaultValue": null, "description": "Allows you to redefine what the coordinates without units mean inside an SVG element.\nFor example, if the SVG element is 500 (width) by 200 (height),\nand you pass viewBox=\"0 0 50 20\",\nthis means that the coordinates inside the SVG will go from the top left corner (0,0)\nto bottom right (50,20) and each unit will be worth 10px.", "name": "viewBox", "required": false, "type": { "name": "string" } }, "aria-activedescendant": { "defaultValue": null, "description": "Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.", "name": "aria-activedescendant", "required": false, "type": { "name": "string" } }, "aria-atomic": { "defaultValue": null, "description": "Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.", "name": "aria-atomic", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-autocomplete": { "defaultValue": null, "description": "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\npresented if they are made.", "name": "aria-autocomplete", "required": false, "type": { "name": "\"none\" | \"inline\" | \"list\" | \"both\"" } }, "aria-busy": { "defaultValue": null, "description": "Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.", "name": "aria-busy", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-checked": { "defaultValue": null, "description": "Indicates the current \"checked\" state of checkboxes, radio buttons, and other widgets.\n@see aria-pressed\n@see aria-selected.", "name": "aria-checked", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"mixed\"" } }, "aria-colcount": { "defaultValue": null, "description": "Defines the total number of columns in a table, grid, or treegrid.\n@see aria-colindex.", "name": "aria-colcount", "required": false, "type": { "name": "number" } }, "aria-colindex": { "defaultValue": null, "description": "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.\n@see aria-colcount\n@see aria-colspan.", "name": "aria-colindex", "required": false, "type": { "name": "number" } }, "aria-colspan": { "defaultValue": null, "description": "Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-colindex\n@see aria-rowspan.", "name": "aria-colspan", "required": false, "type": { "name": "number" } }, "aria-controls": { "defaultValue": null, "description": "Identifies the element (or elements) whose contents or presence are controlled by the current element.\n@see aria-owns.", "name": "aria-controls", "required": false, "type": { "name": "string" } }, "aria-current": { "defaultValue": null, "description": "Indicates the element that represents the current item within a container or set of related elements.", "name": "aria-current", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"page\" | \"step\" | \"location\" | \"date\" | \"time\"" } }, "aria-describedby": { "defaultValue": null, "description": "Identifies the element (or elements) that describes the object.\n@see aria-labelledby", "name": "aria-describedby", "required": false, "type": { "name": "string" } }, "aria-details": { "defaultValue": null, "description": "Identifies the element that provides a detailed, extended description for the object.\n@see aria-describedby.", "name": "aria-details", "required": false, "type": { "name": "string" } }, "aria-disabled": { "defaultValue": null, "description": "Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.\n@see aria-hidden\n@see aria-readonly.", "name": "aria-disabled", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-dropeffect": { "defaultValue": null, "description": "Indicates what functions can be performed when a dragged object is released on the drop target.\n@deprecated in ARIA 1.1", "name": "aria-dropeffect", "required": false, "type": { "name": "\"none\" | \"copy\" | \"execute\" | \"link\" | \"move\" | \"popup\"" } }, "aria-errormessage": { "defaultValue": null, "description": "Identifies the element that provides an error message for the object.\n@see aria-invalid\n@see aria-describedby.", "name": "aria-errormessage", "required": false, "type": { "name": "string" } }, "aria-expanded": { "defaultValue": null, "description": "Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.", "name": "aria-expanded", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-flowto": { "defaultValue": null, "description": "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\nallows assistive technology to override the general default of reading in document source order.", "name": "aria-flowto", "required": false, "type": { "name": "string" } }, "aria-grabbed": { "defaultValue": null, "description": "Indicates an element's \"grabbed\" state in a drag-and-drop operation.\n@deprecated in ARIA 1.1", "name": "aria-grabbed", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-haspopup": { "defaultValue": null, "description": "Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.", "name": "aria-haspopup", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"menu\" | \"listbox\" | \"tree\" | \"grid\" | \"dialog\"" } }, "aria-hidden": { "defaultValue": null, "description": "Indicates whether the element is exposed to an accessibility API.\n@see aria-disabled.", "name": "aria-hidden", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-invalid": { "defaultValue": null, "description": "Indicates the entered value does not conform to the format expected by the application.\n@see aria-errormessage.", "name": "aria-invalid", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\"" } }, "aria-keyshortcuts": { "defaultValue": null, "description": "Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.", "name": "aria-keyshortcuts", "required": false, "type": { "name": "string" } }, "aria-label": { "defaultValue": null, "description": "Defines a string value that labels the current element.\n@see aria-labelledby.", "name": "aria-label", "required": false, "type": { "name": "string" } }, "aria-labelledby": { "defaultValue": null, "description": "Identifies the element (or elements) that labels the current element.\n@see aria-describedby.", "name": "aria-labelledby", "required": false, "type": { "name": "string" } }, "aria-level": { "defaultValue": null, "description": "Defines the hierarchical level of an element within a structure.", "name": "aria-level", "required": false, "type": { "name": "number" } }, "aria-live": { "defaultValue": null, "description": "Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.", "name": "aria-live", "required": false, "type": { "name": "\"off\" | \"assertive\" | \"polite\"" } }, "aria-modal": { "defaultValue": null, "description": "Indicates whether an element is modal when displayed.", "name": "aria-modal", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-multiline": { "defaultValue": null, "description": "Indicates whether a text box accepts multiple lines of input or only a single line.", "name": "aria-multiline", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-multiselectable": { "defaultValue": null, "description": "Indicates that the user may select more than one item from the current selectable descendants.", "name": "aria-multiselectable", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-orientation": { "defaultValue": null, "description": "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.", "name": "aria-orientation", "required": false, "type": { "name": "\"horizontal\" | \"vertical\"" } }, "aria-owns": { "defaultValue": null, "description": "Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.\n@see aria-controls.", "name": "aria-owns", "required": false, "type": { "name": "string" } }, "aria-placeholder": { "defaultValue": null, "description": "Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\nA hint could be a sample value or a brief description of the expected format.", "name": "aria-placeholder", "required": false, "type": { "name": "string" } }, "aria-posinset": { "defaultValue": null, "description": "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-setsize.", "name": "aria-posinset", "required": false, "type": { "name": "number" } }, "aria-pressed": { "defaultValue": null, "description": "Indicates the current \"pressed\" state of toggle buttons.\n@see aria-checked\n@see aria-selected.", "name": "aria-pressed", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"mixed\"" } }, "aria-readonly": { "defaultValue": null, "description": "Indicates that the element is not editable, but is otherwise operable.\n@see aria-disabled.", "name": "aria-readonly", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-relevant": { "defaultValue": null, "description": "Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.\n@see aria-atomic.", "name": "aria-relevant", "required": false, "type": { "name": "\"additions\" | \"additions text\" | \"all\" | \"removals\" | \"text\"" } }, "aria-required": { "defaultValue": null, "description": "Indicates that user input is required on the element before a form may be submitted.", "name": "aria-required", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-roledescription": { "defaultValue": null, "description": "Defines a human-readable, author-localized description for the role of an element.", "name": "aria-roledescription", "required": false, "type": { "name": "string" } }, "aria-rowcount": { "defaultValue": null, "description": "Defines the total number of rows in a table, grid, or treegrid.\n@see aria-rowindex.", "name": "aria-rowcount", "required": false, "type": { "name": "number" } }, "aria-rowindex": { "defaultValue": null, "description": "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.\n@see aria-rowcount\n@see aria-rowspan.", "name": "aria-rowindex", "required": false, "type": { "name": "number" } }, "aria-rowspan": { "defaultValue": null, "description": "Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-rowindex\n@see aria-colspan.", "name": "aria-rowspan", "required": false, "type": { "name": "number" } }, "aria-selected": { "defaultValue": null, "description": "Indicates the current \"selected\" state of various widgets.\n@see aria-checked\n@see aria-pressed.", "name": "aria-selected", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-setsize": { "defaultValue": null, "description": "Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-posinset.", "name": "aria-setsize", "required": false, "type": { "name": "number" } }, "aria-sort": { "defaultValue": null, "description": "Indicates if items in a table or grid are sorted in ascending or descending order.", "name": "aria-sort", "required": false, "type": { "name": "\"none\" | \"ascending\" | \"descending\" | \"other\"" } }, "aria-valuemax": { "defaultValue": null, "description": "Defines the maximum allowed value for a range widget.", "name": "aria-valuemax", "required": false, "type": { "name": "number" } }, "aria-valuemin": { "defaultValue": null, "description": "Defines the minimum allowed value for a range widget.", "name": "aria-valuemin", "required": false, "type": { "name": "number" } }, "aria-valuenow": { "defaultValue": null, "description": "Defines the current value for a range widget.\n@see aria-valuetext.", "name": "aria-valuenow", "required": false, "type": { "name": "number" } }, "aria-valuetext": { "defaultValue": null, "description": "Defines the human readable text alternative of aria-valuenow for a range widget.", "name": "aria-valuetext", "required": false, "type": { "name": "string" } }, "classes": { "defaultValue": null, "description": "Override or extend the styles applied to the component.", "name": "classes", "required": false, "type": { "name": "Partial<Record<SvgIconClassKey, string>>" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["atoms/icons/index.tsx#RemoveIcon"] = { docgenInfo: exports.RemoveIcon.__docgenInfo, name: "RemoveIcon", path: "atoms/icons/index.tsx#RemoveIcon" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    exports.InfoIcon.displayName = "InfoIcon";
    // @ts-ignore
    exports.InfoIcon.__docgenInfo = { "description": "", "displayName": "InfoIcon", "props": { "children": { "defaultValue": null, "description": "Node passed into the SVG element.", "name": "children", "required": false, "type": { "name": "ReactNode" } }, "color": { "defaultValue": null, "description": "The color of the component. It supports those theme colors that make sense for this component.\nYou can use the `htmlColor` prop to apply a color attribute to the SVG element.", "name": "color", "required": false, "type": { "name": "\"inherit\" | \"primary\" | \"secondary\" | \"action\" | \"disabled\" | \"error\"" } }, "component": { "defaultValue": null, "description": "The component used for the root node.\nEither a string to use a DOM element or a component.", "name": "component", "required": false, "type": { "name": "ElementType<SVGProps<SVGSVGElement>>" } }, "fontSize": { "defaultValue": null, "description": "The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.", "name": "fontSize", "required": false, "type": { "name": "\"inherit\" | \"small\" | \"default\" | \"large\"" } }, "htmlColor": { "defaultValue": null, "description": "Applies a color attribute to the SVG element.", "name": "htmlColor", "required": false, "type": { "name": "string" } }, "shapeRendering": { "defaultValue": null, "description": "The shape-rendering attribute. The behavior of the different options is described on the\n[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).\nIf you are having issues with blurry icons you should investigate this property.\n@document", "name": "shapeRendering", "required": false, "type": { "name": "string" } }, "titleAccess": { "defaultValue": null, "description": "Provides a human-readable title for the element that contains it.\nhttps://www.w3.org/TR/SVG-access/#Equivalent", "name": "titleAccess", "required": false, "type": { "name": "string" } }, "viewBox": { "defaultValue": null, "description": "Allows you to redefine what the coordinates without units mean inside an SVG element.\nFor example, if the SVG element is 500 (width) by 200 (height),\nand you pass viewBox=\"0 0 50 20\",\nthis means that the coordinates inside the SVG will go from the top left corner (0,0)\nto bottom right (50,20) and each unit will be worth 10px.", "name": "viewBox", "required": false, "type": { "name": "string" } }, "aria-activedescendant": { "defaultValue": null, "description": "Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.", "name": "aria-activedescendant", "required": false, "type": { "name": "string" } }, "aria-atomic": { "defaultValue": null, "description": "Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.", "name": "aria-atomic", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-autocomplete": { "defaultValue": null, "description": "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\npresented if they are made.", "name": "aria-autocomplete", "required": false, "type": { "name": "\"none\" | \"inline\" | \"list\" | \"both\"" } }, "aria-busy": { "defaultValue": null, "description": "Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.", "name": "aria-busy", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-checked": { "defaultValue": null, "description": "Indicates the current \"checked\" state of checkboxes, radio buttons, and other widgets.\n@see aria-pressed\n@see aria-selected.", "name": "aria-checked", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"mixed\"" } }, "aria-colcount": { "defaultValue": null, "description": "Defines the total number of columns in a table, grid, or treegrid.\n@see aria-colindex.", "name": "aria-colcount", "required": false, "type": { "name": "number" } }, "aria-colindex": { "defaultValue": null, "description": "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.\n@see aria-colcount\n@see aria-colspan.", "name": "aria-colindex", "required": false, "type": { "name": "number" } }, "aria-colspan": { "defaultValue": null, "description": "Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-colindex\n@see aria-rowspan.", "name": "aria-colspan", "required": false, "type": { "name": "number" } }, "aria-controls": { "defaultValue": null, "description": "Identifies the element (or elements) whose contents or presence are controlled by the current element.\n@see aria-owns.", "name": "aria-controls", "required": false, "type": { "name": "string" } }, "aria-current": { "defaultValue": null, "description": "Indicates the element that represents the current item within a container or set of related elements.", "name": "aria-current", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"page\" | \"step\" | \"location\" | \"date\" | \"time\"" } }, "aria-describedby": { "defaultValue": null, "description": "Identifies the element (or elements) that describes the object.\n@see aria-labelledby", "name": "aria-describedby", "required": false, "type": { "name": "string" } }, "aria-details": { "defaultValue": null, "description": "Identifies the element that provides a detailed, extended description for the object.\n@see aria-describedby.", "name": "aria-details", "required": false, "type": { "name": "string" } }, "aria-disabled": { "defaultValue": null, "description": "Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.\n@see aria-hidden\n@see aria-readonly.", "name": "aria-disabled", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-dropeffect": { "defaultValue": null, "description": "Indicates what functions can be performed when a dragged object is released on the drop target.\n@deprecated in ARIA 1.1", "name": "aria-dropeffect", "required": false, "type": { "name": "\"none\" | \"copy\" | \"execute\" | \"link\" | \"move\" | \"popup\"" } }, "aria-errormessage": { "defaultValue": null, "description": "Identifies the element that provides an error message for the object.\n@see aria-invalid\n@see aria-describedby.", "name": "aria-errormessage", "required": false, "type": { "name": "string" } }, "aria-expanded": { "defaultValue": null, "description": "Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.", "name": "aria-expanded", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-flowto": { "defaultValue": null, "description": "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\nallows assistive technology to override the general default of reading in document source order.", "name": "aria-flowto", "required": false, "type": { "name": "string" } }, "aria-grabbed": { "defaultValue": null, "description": "Indicates an element's \"grabbed\" state in a drag-and-drop operation.\n@deprecated in ARIA 1.1", "name": "aria-grabbed", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-haspopup": { "defaultValue": null, "description": "Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.", "name": "aria-haspopup", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"menu\" | \"listbox\" | \"tree\" | \"grid\" | \"dialog\"" } }, "aria-hidden": { "defaultValue": null, "description": "Indicates whether the element is exposed to an accessibility API.\n@see aria-disabled.", "name": "aria-hidden", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-invalid": { "defaultValue": null, "description": "Indicates the entered value does not conform to the format expected by the application.\n@see aria-errormessage.", "name": "aria-invalid", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\"" } }, "aria-keyshortcuts": { "defaultValue": null, "description": "Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.", "name": "aria-keyshortcuts", "required": false, "type": { "name": "string" } }, "aria-label": { "defaultValue": null, "description": "Defines a string value that labels the current element.\n@see aria-labelledby.", "name": "aria-label", "required": false, "type": { "name": "string" } }, "aria-labelledby": { "defaultValue": null, "description": "Identifies the element (or elements) that labels the current element.\n@see aria-describedby.", "name": "aria-labelledby", "required": false, "type": { "name": "string" } }, "aria-level": { "defaultValue": null, "description": "Defines the hierarchical level of an element within a structure.", "name": "aria-level", "required": false, "type": { "name": "number" } }, "aria-live": { "defaultValue": null, "description": "Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.", "name": "aria-live", "required": false, "type": { "name": "\"off\" | \"assertive\" | \"polite\"" } }, "aria-modal": { "defaultValue": null, "description": "Indicates whether an element is modal when displayed.", "name": "aria-modal", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-multiline": { "defaultValue": null, "description": "Indicates whether a text box accepts multiple lines of input or only a single line.", "name": "aria-multiline", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-multiselectable": { "defaultValue": null, "description": "Indicates that the user may select more than one item from the current selectable descendants.", "name": "aria-multiselectable", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-orientation": { "defaultValue": null, "description": "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.", "name": "aria-orientation", "required": false, "type": { "name": "\"horizontal\" | \"vertical\"" } }, "aria-owns": { "defaultValue": null, "description": "Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.\n@see aria-controls.", "name": "aria-owns", "required": false, "type": { "name": "string" } }, "aria-placeholder": { "defaultValue": null, "description": "Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\nA hint could be a sample value or a brief description of the expected format.", "name": "aria-placeholder", "required": false, "type": { "name": "string" } }, "aria-posinset": { "defaultValue": null, "description": "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-setsize.", "name": "aria-posinset", "required": false, "type": { "name": "number" } }, "aria-pressed": { "defaultValue": null, "description": "Indicates the current \"pressed\" state of toggle buttons.\n@see aria-checked\n@see aria-selected.", "name": "aria-pressed", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"mixed\"" } }, "aria-readonly": { "defaultValue": null, "description": "Indicates that the element is not editable, but is otherwise operable.\n@see aria-disabled.", "name": "aria-readonly", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-relevant": { "defaultValue": null, "description": "Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.\n@see aria-atomic.", "name": "aria-relevant", "required": false, "type": { "name": "\"additions\" | \"additions text\" | \"all\" | \"removals\" | \"text\"" } }, "aria-required": { "defaultValue": null, "description": "Indicates that user input is required on the element before a form may be submitted.", "name": "aria-required", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-roledescription": { "defaultValue": null, "description": "Defines a human-readable, author-localized description for the role of an element.", "name": "aria-roledescription", "required": false, "type": { "name": "string" } }, "aria-rowcount": { "defaultValue": null, "description": "Defines the total number of rows in a table, grid, or treegrid.\n@see aria-rowindex.", "name": "aria-rowcount", "required": false, "type": { "name": "number" } }, "aria-rowindex": { "defaultValue": null, "description": "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.\n@see aria-rowcount\n@see aria-rowspan.", "name": "aria-rowindex", "required": false, "type": { "name": "number" } }, "aria-rowspan": { "defaultValue": null, "description": "Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-rowindex\n@see aria-colspan.", "name": "aria-rowspan", "required": false, "type": { "name": "number" } }, "aria-selected": { "defaultValue": null, "description": "Indicates the current \"selected\" state of various widgets.\n@see aria-checked\n@see aria-pressed.", "name": "aria-selected", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-setsize": { "defaultValue": null, "description": "Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-posinset.", "name": "aria-setsize", "required": false, "type": { "name": "number" } }, "aria-sort": { "defaultValue": null, "description": "Indicates if items in a table or grid are sorted in ascending or descending order.", "name": "aria-sort", "required": false, "type": { "name": "\"none\" | \"ascending\" | \"descending\" | \"other\"" } }, "aria-valuemax": { "defaultValue": null, "description": "Defines the maximum allowed value for a range widget.", "name": "aria-valuemax", "required": false, "type": { "name": "number" } }, "aria-valuemin": { "defaultValue": null, "description": "Defines the minimum allowed value for a range widget.", "name": "aria-valuemin", "required": false, "type": { "name": "number" } }, "aria-valuenow": { "defaultValue": null, "description": "Defines the current value for a range widget.\n@see aria-valuetext.", "name": "aria-valuenow", "required": false, "type": { "name": "number" } }, "aria-valuetext": { "defaultValue": null, "description": "Defines the human readable text alternative of aria-valuenow for a range widget.", "name": "aria-valuetext", "required": false, "type": { "name": "string" } }, "classes": { "defaultValue": null, "description": "Override or extend the styles applied to the component.", "name": "classes", "required": false, "type": { "name": "Partial<Record<SvgIconClassKey, string>>" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["atoms/icons/index.tsx#InfoIcon"] = { docgenInfo: exports.InfoIcon.__docgenInfo, name: "InfoIcon", path: "atoms/icons/index.tsx#InfoIcon" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    exports.AddIcon.displayName = "AddIcon";
    // @ts-ignore
    exports.AddIcon.__docgenInfo = { "description": "", "displayName": "AddIcon", "props": { "children": { "defaultValue": null, "description": "Node passed into the SVG element.", "name": "children", "required": false, "type": { "name": "ReactNode" } }, "color": { "defaultValue": null, "description": "The color of the component. It supports those theme colors that make sense for this component.\nYou can use the `htmlColor` prop to apply a color attribute to the SVG element.", "name": "color", "required": false, "type": { "name": "\"inherit\" | \"primary\" | \"secondary\" | \"action\" | \"disabled\" | \"error\"" } }, "component": { "defaultValue": null, "description": "The component used for the root node.\nEither a string to use a DOM element or a component.", "name": "component", "required": false, "type": { "name": "ElementType<SVGProps<SVGSVGElement>>" } }, "fontSize": { "defaultValue": null, "description": "The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.", "name": "fontSize", "required": false, "type": { "name": "\"inherit\" | \"small\" | \"default\" | \"large\"" } }, "htmlColor": { "defaultValue": null, "description": "Applies a color attribute to the SVG element.", "name": "htmlColor", "required": false, "type": { "name": "string" } }, "shapeRendering": { "defaultValue": null, "description": "The shape-rendering attribute. The behavior of the different options is described on the\n[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).\nIf you are having issues with blurry icons you should investigate this property.\n@document", "name": "shapeRendering", "required": false, "type": { "name": "string" } }, "titleAccess": { "defaultValue": null, "description": "Provides a human-readable title for the element that contains it.\nhttps://www.w3.org/TR/SVG-access/#Equivalent", "name": "titleAccess", "required": false, "type": { "name": "string" } }, "viewBox": { "defaultValue": null, "description": "Allows you to redefine what the coordinates without units mean inside an SVG element.\nFor example, if the SVG element is 500 (width) by 200 (height),\nand you pass viewBox=\"0 0 50 20\",\nthis means that the coordinates inside the SVG will go from the top left corner (0,0)\nto bottom right (50,20) and each unit will be worth 10px.", "name": "viewBox", "required": false, "type": { "name": "string" } }, "aria-activedescendant": { "defaultValue": null, "description": "Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.", "name": "aria-activedescendant", "required": false, "type": { "name": "string" } }, "aria-atomic": { "defaultValue": null, "description": "Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.", "name": "aria-atomic", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-autocomplete": { "defaultValue": null, "description": "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\npresented if they are made.", "name": "aria-autocomplete", "required": false, "type": { "name": "\"none\" | \"inline\" | \"list\" | \"both\"" } }, "aria-busy": { "defaultValue": null, "description": "Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.", "name": "aria-busy", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-checked": { "defaultValue": null, "description": "Indicates the current \"checked\" state of checkboxes, radio buttons, and other widgets.\n@see aria-pressed\n@see aria-selected.", "name": "aria-checked", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"mixed\"" } }, "aria-colcount": { "defaultValue": null, "description": "Defines the total number of columns in a table, grid, or treegrid.\n@see aria-colindex.", "name": "aria-colcount", "required": false, "type": { "name": "number" } }, "aria-colindex": { "defaultValue": null, "description": "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.\n@see aria-colcount\n@see aria-colspan.", "name": "aria-colindex", "required": false, "type": { "name": "number" } }, "aria-colspan": { "defaultValue": null, "description": "Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-colindex\n@see aria-rowspan.", "name": "aria-colspan", "required": false, "type": { "name": "number" } }, "aria-controls": { "defaultValue": null, "description": "Identifies the element (or elements) whose contents or presence are controlled by the current element.\n@see aria-owns.", "name": "aria-controls", "required": false, "type": { "name": "string" } }, "aria-current": { "defaultValue": null, "description": "Indicates the element that represents the current item within a container or set of related elements.", "name": "aria-current", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"page\" | \"step\" | \"location\" | \"date\" | \"time\"" } }, "aria-describedby": { "defaultValue": null, "description": "Identifies the element (or elements) that describes the object.\n@see aria-labelledby", "name": "aria-describedby", "required": false, "type": { "name": "string" } }, "aria-details": { "defaultValue": null, "description": "Identifies the element that provides a detailed, extended description for the object.\n@see aria-describedby.", "name": "aria-details", "required": false, "type": { "name": "string" } }, "aria-disabled": { "defaultValue": null, "description": "Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.\n@see aria-hidden\n@see aria-readonly.", "name": "aria-disabled", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-dropeffect": { "defaultValue": null, "description": "Indicates what functions can be performed when a dragged object is released on the drop target.\n@deprecated in ARIA 1.1", "name": "aria-dropeffect", "required": false, "type": { "name": "\"none\" | \"copy\" | \"execute\" | \"link\" | \"move\" | \"popup\"" } }, "aria-errormessage": { "defaultValue": null, "description": "Identifies the element that provides an error message for the object.\n@see aria-invalid\n@see aria-describedby.", "name": "aria-errormessage", "required": false, "type": { "name": "string" } }, "aria-expanded": { "defaultValue": null, "description": "Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.", "name": "aria-expanded", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-flowto": { "defaultValue": null, "description": "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\nallows assistive technology to override the general default of reading in document source order.", "name": "aria-flowto", "required": false, "type": { "name": "string" } }, "aria-grabbed": { "defaultValue": null, "description": "Indicates an element's \"grabbed\" state in a drag-and-drop operation.\n@deprecated in ARIA 1.1", "name": "aria-grabbed", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-haspopup": { "defaultValue": null, "description": "Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.", "name": "aria-haspopup", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"menu\" | \"listbox\" | \"tree\" | \"grid\" | \"dialog\"" } }, "aria-hidden": { "defaultValue": null, "description": "Indicates whether the element is exposed to an accessibility API.\n@see aria-disabled.", "name": "aria-hidden", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-invalid": { "defaultValue": null, "description": "Indicates the entered value does not conform to the format expected by the application.\n@see aria-errormessage.", "name": "aria-invalid", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\"" } }, "aria-keyshortcuts": { "defaultValue": null, "description": "Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.", "name": "aria-keyshortcuts", "required": false, "type": { "name": "string" } }, "aria-label": { "defaultValue": null, "description": "Defines a string value that labels the current element.\n@see aria-labelledby.", "name": "aria-label", "required": false, "type": { "name": "string" } }, "aria-labelledby": { "defaultValue": null, "description": "Identifies the element (or elements) that labels the current element.\n@see aria-describedby.", "name": "aria-labelledby", "required": false, "type": { "name": "string" } }, "aria-level": { "defaultValue": null, "description": "Defines the hierarchical level of an element within a structure.", "name": "aria-level", "required": false, "type": { "name": "number" } }, "aria-live": { "defaultValue": null, "description": "Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.", "name": "aria-live", "required": false, "type": { "name": "\"off\" | \"assertive\" | \"polite\"" } }, "aria-modal": { "defaultValue": null, "description": "Indicates whether an element is modal when displayed.", "name": "aria-modal", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-multiline": { "defaultValue": null, "description": "Indicates whether a text box accepts multiple lines of input or only a single line.", "name": "aria-multiline", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-multiselectable": { "defaultValue": null, "description": "Indicates that the user may select more than one item from the current selectable descendants.", "name": "aria-multiselectable", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-orientation": { "defaultValue": null, "description": "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.", "name": "aria-orientation", "required": false, "type": { "name": "\"horizontal\" | \"vertical\"" } }, "aria-owns": { "defaultValue": null, "description": "Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.\n@see aria-controls.", "name": "aria-owns", "required": false, "type": { "name": "string" } }, "aria-placeholder": { "defaultValue": null, "description": "Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\nA hint could be a sample value or a brief description of the expected format.", "name": "aria-placeholder", "required": false, "type": { "name": "string" } }, "aria-posinset": { "defaultValue": null, "description": "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-setsize.", "name": "aria-posinset", "required": false, "type": { "name": "number" } }, "aria-pressed": { "defaultValue": null, "description": "Indicates the current \"pressed\" state of toggle buttons.\n@see aria-checked\n@see aria-selected.", "name": "aria-pressed", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"mixed\"" } }, "aria-readonly": { "defaultValue": null, "description": "Indicates that the element is not editable, but is otherwise operable.\n@see aria-disabled.", "name": "aria-readonly", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-relevant": { "defaultValue": null, "description": "Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.\n@see aria-atomic.", "name": "aria-relevant", "required": false, "type": { "name": "\"additions\" | \"additions text\" | \"all\" | \"removals\" | \"text\"" } }, "aria-required": { "defaultValue": null, "description": "Indicates that user input is required on the element before a form may be submitted.", "name": "aria-required", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-roledescription": { "defaultValue": null, "description": "Defines a human-readable, author-localized description for the role of an element.", "name": "aria-roledescription", "required": false, "type": { "name": "string" } }, "aria-rowcount": { "defaultValue": null, "description": "Defines the total number of rows in a table, grid, or treegrid.\n@see aria-rowindex.", "name": "aria-rowcount", "required": false, "type": { "name": "number" } }, "aria-rowindex": { "defaultValue": null, "description": "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.\n@see aria-rowcount\n@see aria-rowspan.", "name": "aria-rowindex", "required": false, "type": { "name": "number" } }, "aria-rowspan": { "defaultValue": null, "description": "Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-rowindex\n@see aria-colspan.", "name": "aria-rowspan", "required": false, "type": { "name": "number" } }, "aria-selected": { "defaultValue": null, "description": "Indicates the current \"selected\" state of various widgets.\n@see aria-checked\n@see aria-pressed.", "name": "aria-selected", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-setsize": { "defaultValue": null, "description": "Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-posinset.", "name": "aria-setsize", "required": false, "type": { "name": "number" } }, "aria-sort": { "defaultValue": null, "description": "Indicates if items in a table or grid are sorted in ascending or descending order.", "name": "aria-sort", "required": false, "type": { "name": "\"none\" | \"ascending\" | \"descending\" | \"other\"" } }, "aria-valuemax": { "defaultValue": null, "description": "Defines the maximum allowed value for a range widget.", "name": "aria-valuemax", "required": false, "type": { "name": "number" } }, "aria-valuemin": { "defaultValue": null, "description": "Defines the minimum allowed value for a range widget.", "name": "aria-valuemin", "required": false, "type": { "name": "number" } }, "aria-valuenow": { "defaultValue": null, "description": "Defines the current value for a range widget.\n@see aria-valuetext.", "name": "aria-valuenow", "required": false, "type": { "name": "number" } }, "aria-valuetext": { "defaultValue": null, "description": "Defines the human readable text alternative of aria-valuenow for a range widget.", "name": "aria-valuetext", "required": false, "type": { "name": "string" } }, "classes": { "defaultValue": null, "description": "Override or extend the styles applied to the component.", "name": "classes", "required": false, "type": { "name": "Partial<Record<SvgIconClassKey, string>>" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["atoms/icons/index.tsx#AddIcon"] = { docgenInfo: exports.AddIcon.__docgenInfo, name: "AddIcon", path: "atoms/icons/index.tsx#AddIcon" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    exports.MenuIcon.displayName = "MenuIcon";
    // @ts-ignore
    exports.MenuIcon.__docgenInfo = { "description": "", "displayName": "MenuIcon", "props": { "children": { "defaultValue": null, "description": "Node passed into the SVG element.", "name": "children", "required": false, "type": { "name": "ReactNode" } }, "color": { "defaultValue": null, "description": "The color of the component. It supports those theme colors that make sense for this component.\nYou can use the `htmlColor` prop to apply a color attribute to the SVG element.", "name": "color", "required": false, "type": { "name": "\"inherit\" | \"primary\" | \"secondary\" | \"action\" | \"disabled\" | \"error\"" } }, "component": { "defaultValue": null, "description": "The component used for the root node.\nEither a string to use a DOM element or a component.", "name": "component", "required": false, "type": { "name": "ElementType<SVGProps<SVGSVGElement>>" } }, "fontSize": { "defaultValue": null, "description": "The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.", "name": "fontSize", "required": false, "type": { "name": "\"inherit\" | \"small\" | \"default\" | \"large\"" } }, "htmlColor": { "defaultValue": null, "description": "Applies a color attribute to the SVG element.", "name": "htmlColor", "required": false, "type": { "name": "string" } }, "shapeRendering": { "defaultValue": null, "description": "The shape-rendering attribute. The behavior of the different options is described on the\n[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).\nIf you are having issues with blurry icons you should investigate this property.\n@document", "name": "shapeRendering", "required": false, "type": { "name": "string" } }, "titleAccess": { "defaultValue": null, "description": "Provides a human-readable title for the element that contains it.\nhttps://www.w3.org/TR/SVG-access/#Equivalent", "name": "titleAccess", "required": false, "type": { "name": "string" } }, "viewBox": { "defaultValue": null, "description": "Allows you to redefine what the coordinates without units mean inside an SVG element.\nFor example, if the SVG element is 500 (width) by 200 (height),\nand you pass viewBox=\"0 0 50 20\",\nthis means that the coordinates inside the SVG will go from the top left corner (0,0)\nto bottom right (50,20) and each unit will be worth 10px.", "name": "viewBox", "required": false, "type": { "name": "string" } }, "aria-activedescendant": { "defaultValue": null, "description": "Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.", "name": "aria-activedescendant", "required": false, "type": { "name": "string" } }, "aria-atomic": { "defaultValue": null, "description": "Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.", "name": "aria-atomic", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-autocomplete": { "defaultValue": null, "description": "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\npresented if they are made.", "name": "aria-autocomplete", "required": false, "type": { "name": "\"none\" | \"inline\" | \"list\" | \"both\"" } }, "aria-busy": { "defaultValue": null, "description": "Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.", "name": "aria-busy", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-checked": { "defaultValue": null, "description": "Indicates the current \"checked\" state of checkboxes, radio buttons, and other widgets.\n@see aria-pressed\n@see aria-selected.", "name": "aria-checked", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"mixed\"" } }, "aria-colcount": { "defaultValue": null, "description": "Defines the total number of columns in a table, grid, or treegrid.\n@see aria-colindex.", "name": "aria-colcount", "required": false, "type": { "name": "number" } }, "aria-colindex": { "defaultValue": null, "description": "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.\n@see aria-colcount\n@see aria-colspan.", "name": "aria-colindex", "required": false, "type": { "name": "number" } }, "aria-colspan": { "defaultValue": null, "description": "Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-colindex\n@see aria-rowspan.", "name": "aria-colspan", "required": false, "type": { "name": "number" } }, "aria-controls": { "defaultValue": null, "description": "Identifies the element (or elements) whose contents or presence are controlled by the current element.\n@see aria-owns.", "name": "aria-controls", "required": false, "type": { "name": "string" } }, "aria-current": { "defaultValue": null, "description": "Indicates the element that represents the current item within a container or set of related elements.", "name": "aria-current", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"page\" | \"step\" | \"location\" | \"date\" | \"time\"" } }, "aria-describedby": { "defaultValue": null, "description": "Identifies the element (or elements) that describes the object.\n@see aria-labelledby", "name": "aria-describedby", "required": false, "type": { "name": "string" } }, "aria-details": { "defaultValue": null, "description": "Identifies the element that provides a detailed, extended description for the object.\n@see aria-describedby.", "name": "aria-details", "required": false, "type": { "name": "string" } }, "aria-disabled": { "defaultValue": null, "description": "Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.\n@see aria-hidden\n@see aria-readonly.", "name": "aria-disabled", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-dropeffect": { "defaultValue": null, "description": "Indicates what functions can be performed when a dragged object is released on the drop target.\n@deprecated in ARIA 1.1", "name": "aria-dropeffect", "required": false, "type": { "name": "\"none\" | \"copy\" | \"execute\" | \"link\" | \"move\" | \"popup\"" } }, "aria-errormessage": { "defaultValue": null, "description": "Identifies the element that provides an error message for the object.\n@see aria-invalid\n@see aria-describedby.", "name": "aria-errormessage", "required": false, "type": { "name": "string" } }, "aria-expanded": { "defaultValue": null, "description": "Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.", "name": "aria-expanded", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-flowto": { "defaultValue": null, "description": "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\nallows assistive technology to override the general default of reading in document source order.", "name": "aria-flowto", "required": false, "type": { "name": "string" } }, "aria-grabbed": { "defaultValue": null, "description": "Indicates an element's \"grabbed\" state in a drag-and-drop operation.\n@deprecated in ARIA 1.1", "name": "aria-grabbed", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-haspopup": { "defaultValue": null, "description": "Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.", "name": "aria-haspopup", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"menu\" | \"listbox\" | \"tree\" | \"grid\" | \"dialog\"" } }, "aria-hidden": { "defaultValue": null, "description": "Indicates whether the element is exposed to an accessibility API.\n@see aria-disabled.", "name": "aria-hidden", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-invalid": { "defaultValue": null, "description": "Indicates the entered value does not conform to the format expected by the application.\n@see aria-errormessage.", "name": "aria-invalid", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\"" } }, "aria-keyshortcuts": { "defaultValue": null, "description": "Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.", "name": "aria-keyshortcuts", "required": false, "type": { "name": "string" } }, "aria-label": { "defaultValue": null, "description": "Defines a string value that labels the current element.\n@see aria-labelledby.", "name": "aria-label", "required": false, "type": { "name": "string" } }, "aria-labelledby": { "defaultValue": null, "description": "Identifies the element (or elements) that labels the current element.\n@see aria-describedby.", "name": "aria-labelledby", "required": false, "type": { "name": "string" } }, "aria-level": { "defaultValue": null, "description": "Defines the hierarchical level of an element within a structure.", "name": "aria-level", "required": false, "type": { "name": "number" } }, "aria-live": { "defaultValue": null, "description": "Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.", "name": "aria-live", "required": false, "type": { "name": "\"off\" | \"assertive\" | \"polite\"" } }, "aria-modal": { "defaultValue": null, "description": "Indicates whether an element is modal when displayed.", "name": "aria-modal", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-multiline": { "defaultValue": null, "description": "Indicates whether a text box accepts multiple lines of input or only a single line.", "name": "aria-multiline", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-multiselectable": { "defaultValue": null, "description": "Indicates that the user may select more than one item from the current selectable descendants.", "name": "aria-multiselectable", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-orientation": { "defaultValue": null, "description": "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.", "name": "aria-orientation", "required": false, "type": { "name": "\"horizontal\" | \"vertical\"" } }, "aria-owns": { "defaultValue": null, "description": "Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.\n@see aria-controls.", "name": "aria-owns", "required": false, "type": { "name": "string" } }, "aria-placeholder": { "defaultValue": null, "description": "Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\nA hint could be a sample value or a brief description of the expected format.", "name": "aria-placeholder", "required": false, "type": { "name": "string" } }, "aria-posinset": { "defaultValue": null, "description": "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-setsize.", "name": "aria-posinset", "required": false, "type": { "name": "number" } }, "aria-pressed": { "defaultValue": null, "description": "Indicates the current \"pressed\" state of toggle buttons.\n@see aria-checked\n@see aria-selected.", "name": "aria-pressed", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"mixed\"" } }, "aria-readonly": { "defaultValue": null, "description": "Indicates that the element is not editable, but is otherwise operable.\n@see aria-disabled.", "name": "aria-readonly", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-relevant": { "defaultValue": null, "description": "Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.\n@see aria-atomic.", "name": "aria-relevant", "required": false, "type": { "name": "\"additions\" | \"additions text\" | \"all\" | \"removals\" | \"text\"" } }, "aria-required": { "defaultValue": null, "description": "Indicates that user input is required on the element before a form may be submitted.", "name": "aria-required", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-roledescription": { "defaultValue": null, "description": "Defines a human-readable, author-localized description for the role of an element.", "name": "aria-roledescription", "required": false, "type": { "name": "string" } }, "aria-rowcount": { "defaultValue": null, "description": "Defines the total number of rows in a table, grid, or treegrid.\n@see aria-rowindex.", "name": "aria-rowcount", "required": false, "type": { "name": "number" } }, "aria-rowindex": { "defaultValue": null, "description": "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.\n@see aria-rowcount\n@see aria-rowspan.", "name": "aria-rowindex", "required": false, "type": { "name": "number" } }, "aria-rowspan": { "defaultValue": null, "description": "Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-rowindex\n@see aria-colspan.", "name": "aria-rowspan", "required": false, "type": { "name": "number" } }, "aria-selected": { "defaultValue": null, "description": "Indicates the current \"selected\" state of various widgets.\n@see aria-checked\n@see aria-pressed.", "name": "aria-selected", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-setsize": { "defaultValue": null, "description": "Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-posinset.", "name": "aria-setsize", "required": false, "type": { "name": "number" } }, "aria-sort": { "defaultValue": null, "description": "Indicates if items in a table or grid are sorted in ascending or descending order.", "name": "aria-sort", "required": false, "type": { "name": "\"none\" | \"ascending\" | \"descending\" | \"other\"" } }, "aria-valuemax": { "defaultValue": null, "description": "Defines the maximum allowed value for a range widget.", "name": "aria-valuemax", "required": false, "type": { "name": "number" } }, "aria-valuemin": { "defaultValue": null, "description": "Defines the minimum allowed value for a range widget.", "name": "aria-valuemin", "required": false, "type": { "name": "number" } }, "aria-valuenow": { "defaultValue": null, "description": "Defines the current value for a range widget.\n@see aria-valuetext.", "name": "aria-valuenow", "required": false, "type": { "name": "number" } }, "aria-valuetext": { "defaultValue": null, "description": "Defines the human readable text alternative of aria-valuenow for a range widget.", "name": "aria-valuetext", "required": false, "type": { "name": "string" } }, "classes": { "defaultValue": null, "description": "Override or extend the styles applied to the component.", "name": "classes", "required": false, "type": { "name": "Partial<Record<SvgIconClassKey, string>>" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["atoms/icons/index.tsx#MenuIcon"] = { docgenInfo: exports.MenuIcon.__docgenInfo, name: "MenuIcon", path: "atoms/icons/index.tsx#MenuIcon" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    exports.ChevronLeftIcon.displayName = "ChevronLeftIcon";
    // @ts-ignore
    exports.ChevronLeftIcon.__docgenInfo = { "description": "", "displayName": "ChevronLeftIcon", "props": { "children": { "defaultValue": null, "description": "Node passed into the SVG element.", "name": "children", "required": false, "type": { "name": "ReactNode" } }, "color": { "defaultValue": null, "description": "The color of the component. It supports those theme colors that make sense for this component.\nYou can use the `htmlColor` prop to apply a color attribute to the SVG element.", "name": "color", "required": false, "type": { "name": "\"inherit\" | \"primary\" | \"secondary\" | \"action\" | \"disabled\" | \"error\"" } }, "component": { "defaultValue": null, "description": "The component used for the root node.\nEither a string to use a DOM element or a component.", "name": "component", "required": false, "type": { "name": "ElementType<SVGProps<SVGSVGElement>>" } }, "fontSize": { "defaultValue": null, "description": "The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.", "name": "fontSize", "required": false, "type": { "name": "\"inherit\" | \"small\" | \"default\" | \"large\"" } }, "htmlColor": { "defaultValue": null, "description": "Applies a color attribute to the SVG element.", "name": "htmlColor", "required": false, "type": { "name": "string" } }, "shapeRendering": { "defaultValue": null, "description": "The shape-rendering attribute. The behavior of the different options is described on the\n[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).\nIf you are having issues with blurry icons you should investigate this property.\n@document", "name": "shapeRendering", "required": false, "type": { "name": "string" } }, "titleAccess": { "defaultValue": null, "description": "Provides a human-readable title for the element that contains it.\nhttps://www.w3.org/TR/SVG-access/#Equivalent", "name": "titleAccess", "required": false, "type": { "name": "string" } }, "viewBox": { "defaultValue": null, "description": "Allows you to redefine what the coordinates without units mean inside an SVG element.\nFor example, if the SVG element is 500 (width) by 200 (height),\nand you pass viewBox=\"0 0 50 20\",\nthis means that the coordinates inside the SVG will go from the top left corner (0,0)\nto bottom right (50,20) and each unit will be worth 10px.", "name": "viewBox", "required": false, "type": { "name": "string" } }, "aria-activedescendant": { "defaultValue": null, "description": "Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.", "name": "aria-activedescendant", "required": false, "type": { "name": "string" } }, "aria-atomic": { "defaultValue": null, "description": "Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.", "name": "aria-atomic", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-autocomplete": { "defaultValue": null, "description": "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\npresented if they are made.", "name": "aria-autocomplete", "required": false, "type": { "name": "\"none\" | \"inline\" | \"list\" | \"both\"" } }, "aria-busy": { "defaultValue": null, "description": "Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.", "name": "aria-busy", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-checked": { "defaultValue": null, "description": "Indicates the current \"checked\" state of checkboxes, radio buttons, and other widgets.\n@see aria-pressed\n@see aria-selected.", "name": "aria-checked", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"mixed\"" } }, "aria-colcount": { "defaultValue": null, "description": "Defines the total number of columns in a table, grid, or treegrid.\n@see aria-colindex.", "name": "aria-colcount", "required": false, "type": { "name": "number" } }, "aria-colindex": { "defaultValue": null, "description": "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.\n@see aria-colcount\n@see aria-colspan.", "name": "aria-colindex", "required": false, "type": { "name": "number" } }, "aria-colspan": { "defaultValue": null, "description": "Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-colindex\n@see aria-rowspan.", "name": "aria-colspan", "required": false, "type": { "name": "number" } }, "aria-controls": { "defaultValue": null, "description": "Identifies the element (or elements) whose contents or presence are controlled by the current element.\n@see aria-owns.", "name": "aria-controls", "required": false, "type": { "name": "string" } }, "aria-current": { "defaultValue": null, "description": "Indicates the element that represents the current item within a container or set of related elements.", "name": "aria-current", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"page\" | \"step\" | \"location\" | \"date\" | \"time\"" } }, "aria-describedby": { "defaultValue": null, "description": "Identifies the element (or elements) that describes the object.\n@see aria-labelledby", "name": "aria-describedby", "required": false, "type": { "name": "string" } }, "aria-details": { "defaultValue": null, "description": "Identifies the element that provides a detailed, extended description for the object.\n@see aria-describedby.", "name": "aria-details", "required": false, "type": { "name": "string" } }, "aria-disabled": { "defaultValue": null, "description": "Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.\n@see aria-hidden\n@see aria-readonly.", "name": "aria-disabled", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-dropeffect": { "defaultValue": null, "description": "Indicates what functions can be performed when a dragged object is released on the drop target.\n@deprecated in ARIA 1.1", "name": "aria-dropeffect", "required": false, "type": { "name": "\"none\" | \"copy\" | \"execute\" | \"link\" | \"move\" | \"popup\"" } }, "aria-errormessage": { "defaultValue": null, "description": "Identifies the element that provides an error message for the object.\n@see aria-invalid\n@see aria-describedby.", "name": "aria-errormessage", "required": false, "type": { "name": "string" } }, "aria-expanded": { "defaultValue": null, "description": "Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.", "name": "aria-expanded", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-flowto": { "defaultValue": null, "description": "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\nallows assistive technology to override the general default of reading in document source order.", "name": "aria-flowto", "required": false, "type": { "name": "string" } }, "aria-grabbed": { "defaultValue": null, "description": "Indicates an element's \"grabbed\" state in a drag-and-drop operation.\n@deprecated in ARIA 1.1", "name": "aria-grabbed", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-haspopup": { "defaultValue": null, "description": "Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.", "name": "aria-haspopup", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"menu\" | \"listbox\" | \"tree\" | \"grid\" | \"dialog\"" } }, "aria-hidden": { "defaultValue": null, "description": "Indicates whether the element is exposed to an accessibility API.\n@see aria-disabled.", "name": "aria-hidden", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-invalid": { "defaultValue": null, "description": "Indicates the entered value does not conform to the format expected by the application.\n@see aria-errormessage.", "name": "aria-invalid", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\"" } }, "aria-keyshortcuts": { "defaultValue": null, "description": "Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.", "name": "aria-keyshortcuts", "required": false, "type": { "name": "string" } }, "aria-label": { "defaultValue": null, "description": "Defines a string value that labels the current element.\n@see aria-labelledby.", "name": "aria-label", "required": false, "type": { "name": "string" } }, "aria-labelledby": { "defaultValue": null, "description": "Identifies the element (or elements) that labels the current element.\n@see aria-describedby.", "name": "aria-labelledby", "required": false, "type": { "name": "string" } }, "aria-level": { "defaultValue": null, "description": "Defines the hierarchical level of an element within a structure.", "name": "aria-level", "required": false, "type": { "name": "number" } }, "aria-live": { "defaultValue": null, "description": "Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.", "name": "aria-live", "required": false, "type": { "name": "\"off\" | \"assertive\" | \"polite\"" } }, "aria-modal": { "defaultValue": null, "description": "Indicates whether an element is modal when displayed.", "name": "aria-modal", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-multiline": { "defaultValue": null, "description": "Indicates whether a text box accepts multiple lines of input or only a single line.", "name": "aria-multiline", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-multiselectable": { "defaultValue": null, "description": "Indicates that the user may select more than one item from the current selectable descendants.", "name": "aria-multiselectable", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-orientation": { "defaultValue": null, "description": "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.", "name": "aria-orientation", "required": false, "type": { "name": "\"horizontal\" | \"vertical\"" } }, "aria-owns": { "defaultValue": null, "description": "Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.\n@see aria-controls.", "name": "aria-owns", "required": false, "type": { "name": "string" } }, "aria-placeholder": { "defaultValue": null, "description": "Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\nA hint could be a sample value or a brief description of the expected format.", "name": "aria-placeholder", "required": false, "type": { "name": "string" } }, "aria-posinset": { "defaultValue": null, "description": "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-setsize.", "name": "aria-posinset", "required": false, "type": { "name": "number" } }, "aria-pressed": { "defaultValue": null, "description": "Indicates the current \"pressed\" state of toggle buttons.\n@see aria-checked\n@see aria-selected.", "name": "aria-pressed", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"mixed\"" } }, "aria-readonly": { "defaultValue": null, "description": "Indicates that the element is not editable, but is otherwise operable.\n@see aria-disabled.", "name": "aria-readonly", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-relevant": { "defaultValue": null, "description": "Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.\n@see aria-atomic.", "name": "aria-relevant", "required": false, "type": { "name": "\"additions\" | \"additions text\" | \"all\" | \"removals\" | \"text\"" } }, "aria-required": { "defaultValue": null, "description": "Indicates that user input is required on the element before a form may be submitted.", "name": "aria-required", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-roledescription": { "defaultValue": null, "description": "Defines a human-readable, author-localized description for the role of an element.", "name": "aria-roledescription", "required": false, "type": { "name": "string" } }, "aria-rowcount": { "defaultValue": null, "description": "Defines the total number of rows in a table, grid, or treegrid.\n@see aria-rowindex.", "name": "aria-rowcount", "required": false, "type": { "name": "number" } }, "aria-rowindex": { "defaultValue": null, "description": "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.\n@see aria-rowcount\n@see aria-rowspan.", "name": "aria-rowindex", "required": false, "type": { "name": "number" } }, "aria-rowspan": { "defaultValue": null, "description": "Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-rowindex\n@see aria-colspan.", "name": "aria-rowspan", "required": false, "type": { "name": "number" } }, "aria-selected": { "defaultValue": null, "description": "Indicates the current \"selected\" state of various widgets.\n@see aria-checked\n@see aria-pressed.", "name": "aria-selected", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-setsize": { "defaultValue": null, "description": "Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-posinset.", "name": "aria-setsize", "required": false, "type": { "name": "number" } }, "aria-sort": { "defaultValue": null, "description": "Indicates if items in a table or grid are sorted in ascending or descending order.", "name": "aria-sort", "required": false, "type": { "name": "\"none\" | \"ascending\" | \"descending\" | \"other\"" } }, "aria-valuemax": { "defaultValue": null, "description": "Defines the maximum allowed value for a range widget.", "name": "aria-valuemax", "required": false, "type": { "name": "number" } }, "aria-valuemin": { "defaultValue": null, "description": "Defines the minimum allowed value for a range widget.", "name": "aria-valuemin", "required": false, "type": { "name": "number" } }, "aria-valuenow": { "defaultValue": null, "description": "Defines the current value for a range widget.\n@see aria-valuetext.", "name": "aria-valuenow", "required": false, "type": { "name": "number" } }, "aria-valuetext": { "defaultValue": null, "description": "Defines the human readable text alternative of aria-valuenow for a range widget.", "name": "aria-valuetext", "required": false, "type": { "name": "string" } }, "classes": { "defaultValue": null, "description": "Override or extend the styles applied to the component.", "name": "classes", "required": false, "type": { "name": "Partial<Record<SvgIconClassKey, string>>" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["atoms/icons/index.tsx#ChevronLeftIcon"] = { docgenInfo: exports.ChevronLeftIcon.__docgenInfo, name: "ChevronLeftIcon", path: "atoms/icons/index.tsx#ChevronLeftIcon" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    exports.ChevronRightIcon.displayName = "ChevronRightIcon";
    // @ts-ignore
    exports.ChevronRightIcon.__docgenInfo = { "description": "", "displayName": "ChevronRightIcon", "props": { "children": { "defaultValue": null, "description": "Node passed into the SVG element.", "name": "children", "required": false, "type": { "name": "ReactNode" } }, "color": { "defaultValue": null, "description": "The color of the component. It supports those theme colors that make sense for this component.\nYou can use the `htmlColor` prop to apply a color attribute to the SVG element.", "name": "color", "required": false, "type": { "name": "\"inherit\" | \"primary\" | \"secondary\" | \"action\" | \"disabled\" | \"error\"" } }, "component": { "defaultValue": null, "description": "The component used for the root node.\nEither a string to use a DOM element or a component.", "name": "component", "required": false, "type": { "name": "ElementType<SVGProps<SVGSVGElement>>" } }, "fontSize": { "defaultValue": null, "description": "The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.", "name": "fontSize", "required": false, "type": { "name": "\"inherit\" | \"small\" | \"default\" | \"large\"" } }, "htmlColor": { "defaultValue": null, "description": "Applies a color attribute to the SVG element.", "name": "htmlColor", "required": false, "type": { "name": "string" } }, "shapeRendering": { "defaultValue": null, "description": "The shape-rendering attribute. The behavior of the different options is described on the\n[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).\nIf you are having issues with blurry icons you should investigate this property.\n@document", "name": "shapeRendering", "required": false, "type": { "name": "string" } }, "titleAccess": { "defaultValue": null, "description": "Provides a human-readable title for the element that contains it.\nhttps://www.w3.org/TR/SVG-access/#Equivalent", "name": "titleAccess", "required": false, "type": { "name": "string" } }, "viewBox": { "defaultValue": null, "description": "Allows you to redefine what the coordinates without units mean inside an SVG element.\nFor example, if the SVG element is 500 (width) by 200 (height),\nand you pass viewBox=\"0 0 50 20\",\nthis means that the coordinates inside the SVG will go from the top left corner (0,0)\nto bottom right (50,20) and each unit will be worth 10px.", "name": "viewBox", "required": false, "type": { "name": "string" } }, "aria-activedescendant": { "defaultValue": null, "description": "Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.", "name": "aria-activedescendant", "required": false, "type": { "name": "string" } }, "aria-atomic": { "defaultValue": null, "description": "Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.", "name": "aria-atomic", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-autocomplete": { "defaultValue": null, "description": "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\npresented if they are made.", "name": "aria-autocomplete", "required": false, "type": { "name": "\"none\" | \"inline\" | \"list\" | \"both\"" } }, "aria-busy": { "defaultValue": null, "description": "Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.", "name": "aria-busy", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-checked": { "defaultValue": null, "description": "Indicates the current \"checked\" state of checkboxes, radio buttons, and other widgets.\n@see aria-pressed\n@see aria-selected.", "name": "aria-checked", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"mixed\"" } }, "aria-colcount": { "defaultValue": null, "description": "Defines the total number of columns in a table, grid, or treegrid.\n@see aria-colindex.", "name": "aria-colcount", "required": false, "type": { "name": "number" } }, "aria-colindex": { "defaultValue": null, "description": "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.\n@see aria-colcount\n@see aria-colspan.", "name": "aria-colindex", "required": false, "type": { "name": "number" } }, "aria-colspan": { "defaultValue": null, "description": "Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-colindex\n@see aria-rowspan.", "name": "aria-colspan", "required": false, "type": { "name": "number" } }, "aria-controls": { "defaultValue": null, "description": "Identifies the element (or elements) whose contents or presence are controlled by the current element.\n@see aria-owns.", "name": "aria-controls", "required": false, "type": { "name": "string" } }, "aria-current": { "defaultValue": null, "description": "Indicates the element that represents the current item within a container or set of related elements.", "name": "aria-current", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"page\" | \"step\" | \"location\" | \"date\" | \"time\"" } }, "aria-describedby": { "defaultValue": null, "description": "Identifies the element (or elements) that describes the object.\n@see aria-labelledby", "name": "aria-describedby", "required": false, "type": { "name": "string" } }, "aria-details": { "defaultValue": null, "description": "Identifies the element that provides a detailed, extended description for the object.\n@see aria-describedby.", "name": "aria-details", "required": false, "type": { "name": "string" } }, "aria-disabled": { "defaultValue": null, "description": "Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.\n@see aria-hidden\n@see aria-readonly.", "name": "aria-disabled", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-dropeffect": { "defaultValue": null, "description": "Indicates what functions can be performed when a dragged object is released on the drop target.\n@deprecated in ARIA 1.1", "name": "aria-dropeffect", "required": false, "type": { "name": "\"none\" | \"copy\" | \"execute\" | \"link\" | \"move\" | \"popup\"" } }, "aria-errormessage": { "defaultValue": null, "description": "Identifies the element that provides an error message for the object.\n@see aria-invalid\n@see aria-describedby.", "name": "aria-errormessage", "required": false, "type": { "name": "string" } }, "aria-expanded": { "defaultValue": null, "description": "Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.", "name": "aria-expanded", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-flowto": { "defaultValue": null, "description": "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\nallows assistive technology to override the general default of reading in document source order.", "name": "aria-flowto", "required": false, "type": { "name": "string" } }, "aria-grabbed": { "defaultValue": null, "description": "Indicates an element's \"grabbed\" state in a drag-and-drop operation.\n@deprecated in ARIA 1.1", "name": "aria-grabbed", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-haspopup": { "defaultValue": null, "description": "Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.", "name": "aria-haspopup", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"menu\" | \"listbox\" | \"tree\" | \"grid\" | \"dialog\"" } }, "aria-hidden": { "defaultValue": null, "description": "Indicates whether the element is exposed to an accessibility API.\n@see aria-disabled.", "name": "aria-hidden", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-invalid": { "defaultValue": null, "description": "Indicates the entered value does not conform to the format expected by the application.\n@see aria-errormessage.", "name": "aria-invalid", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\"" } }, "aria-keyshortcuts": { "defaultValue": null, "description": "Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.", "name": "aria-keyshortcuts", "required": false, "type": { "name": "string" } }, "aria-label": { "defaultValue": null, "description": "Defines a string value that labels the current element.\n@see aria-labelledby.", "name": "aria-label", "required": false, "type": { "name": "string" } }, "aria-labelledby": { "defaultValue": null, "description": "Identifies the element (or elements) that labels the current element.\n@see aria-describedby.", "name": "aria-labelledby", "required": false, "type": { "name": "string" } }, "aria-level": { "defaultValue": null, "description": "Defines the hierarchical level of an element within a structure.", "name": "aria-level", "required": false, "type": { "name": "number" } }, "aria-live": { "defaultValue": null, "description": "Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.", "name": "aria-live", "required": false, "type": { "name": "\"off\" | \"assertive\" | \"polite\"" } }, "aria-modal": { "defaultValue": null, "description": "Indicates whether an element is modal when displayed.", "name": "aria-modal", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-multiline": { "defaultValue": null, "description": "Indicates whether a text box accepts multiple lines of input or only a single line.", "name": "aria-multiline", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-multiselectable": { "defaultValue": null, "description": "Indicates that the user may select more than one item from the current selectable descendants.", "name": "aria-multiselectable", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-orientation": { "defaultValue": null, "description": "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.", "name": "aria-orientation", "required": false, "type": { "name": "\"horizontal\" | \"vertical\"" } }, "aria-owns": { "defaultValue": null, "description": "Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.\n@see aria-controls.", "name": "aria-owns", "required": false, "type": { "name": "string" } }, "aria-placeholder": { "defaultValue": null, "description": "Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\nA hint could be a sample value or a brief description of the expected format.", "name": "aria-placeholder", "required": false, "type": { "name": "string" } }, "aria-posinset": { "defaultValue": null, "description": "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-setsize.", "name": "aria-posinset", "required": false, "type": { "name": "number" } }, "aria-pressed": { "defaultValue": null, "description": "Indicates the current \"pressed\" state of toggle buttons.\n@see aria-checked\n@see aria-selected.", "name": "aria-pressed", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"mixed\"" } }, "aria-readonly": { "defaultValue": null, "description": "Indicates that the element is not editable, but is otherwise operable.\n@see aria-disabled.", "name": "aria-readonly", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-relevant": { "defaultValue": null, "description": "Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.\n@see aria-atomic.", "name": "aria-relevant", "required": false, "type": { "name": "\"additions\" | \"additions text\" | \"all\" | \"removals\" | \"text\"" } }, "aria-required": { "defaultValue": null, "description": "Indicates that user input is required on the element before a form may be submitted.", "name": "aria-required", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-roledescription": { "defaultValue": null, "description": "Defines a human-readable, author-localized description for the role of an element.", "name": "aria-roledescription", "required": false, "type": { "name": "string" } }, "aria-rowcount": { "defaultValue": null, "description": "Defines the total number of rows in a table, grid, or treegrid.\n@see aria-rowindex.", "name": "aria-rowcount", "required": false, "type": { "name": "number" } }, "aria-rowindex": { "defaultValue": null, "description": "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.\n@see aria-rowcount\n@see aria-rowspan.", "name": "aria-rowindex", "required": false, "type": { "name": "number" } }, "aria-rowspan": { "defaultValue": null, "description": "Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-rowindex\n@see aria-colspan.", "name": "aria-rowspan", "required": false, "type": { "name": "number" } }, "aria-selected": { "defaultValue": null, "description": "Indicates the current \"selected\" state of various widgets.\n@see aria-checked\n@see aria-pressed.", "name": "aria-selected", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-setsize": { "defaultValue": null, "description": "Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-posinset.", "name": "aria-setsize", "required": false, "type": { "name": "number" } }, "aria-sort": { "defaultValue": null, "description": "Indicates if items in a table or grid are sorted in ascending or descending order.", "name": "aria-sort", "required": false, "type": { "name": "\"none\" | \"ascending\" | \"descending\" | \"other\"" } }, "aria-valuemax": { "defaultValue": null, "description": "Defines the maximum allowed value for a range widget.", "name": "aria-valuemax", "required": false, "type": { "name": "number" } }, "aria-valuemin": { "defaultValue": null, "description": "Defines the minimum allowed value for a range widget.", "name": "aria-valuemin", "required": false, "type": { "name": "number" } }, "aria-valuenow": { "defaultValue": null, "description": "Defines the current value for a range widget.\n@see aria-valuetext.", "name": "aria-valuenow", "required": false, "type": { "name": "number" } }, "aria-valuetext": { "defaultValue": null, "description": "Defines the human readable text alternative of aria-valuenow for a range widget.", "name": "aria-valuetext", "required": false, "type": { "name": "string" } }, "classes": { "defaultValue": null, "description": "Override or extend the styles applied to the component.", "name": "classes", "required": false, "type": { "name": "Partial<Record<SvgIconClassKey, string>>" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["atoms/icons/index.tsx#ChevronRightIcon"] = { docgenInfo: exports.ChevronRightIcon.__docgenInfo, name: "ChevronRightIcon", path: "atoms/icons/index.tsx#ChevronRightIcon" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    exports.BookIcon.displayName = "BookIcon";
    // @ts-ignore
    exports.BookIcon.__docgenInfo = { "description": "", "displayName": "BookIcon", "props": { "children": { "defaultValue": null, "description": "Node passed into the SVG element.", "name": "children", "required": false, "type": { "name": "ReactNode" } }, "color": { "defaultValue": null, "description": "The color of the component. It supports those theme colors that make sense for this component.\nYou can use the `htmlColor` prop to apply a color attribute to the SVG element.", "name": "color", "required": false, "type": { "name": "\"inherit\" | \"primary\" | \"secondary\" | \"action\" | \"disabled\" | \"error\"" } }, "component": { "defaultValue": null, "description": "The component used for the root node.\nEither a string to use a DOM element or a component.", "name": "component", "required": false, "type": { "name": "ElementType<SVGProps<SVGSVGElement>>" } }, "fontSize": { "defaultValue": null, "description": "The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.", "name": "fontSize", "required": false, "type": { "name": "\"inherit\" | \"small\" | \"default\" | \"large\"" } }, "htmlColor": { "defaultValue": null, "description": "Applies a color attribute to the SVG element.", "name": "htmlColor", "required": false, "type": { "name": "string" } }, "shapeRendering": { "defaultValue": null, "description": "The shape-rendering attribute. The behavior of the different options is described on the\n[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).\nIf you are having issues with blurry icons you should investigate this property.\n@document", "name": "shapeRendering", "required": false, "type": { "name": "string" } }, "titleAccess": { "defaultValue": null, "description": "Provides a human-readable title for the element that contains it.\nhttps://www.w3.org/TR/SVG-access/#Equivalent", "name": "titleAccess", "required": false, "type": { "name": "string" } }, "viewBox": { "defaultValue": null, "description": "Allows you to redefine what the coordinates without units mean inside an SVG element.\nFor example, if the SVG element is 500 (width) by 200 (height),\nand you pass viewBox=\"0 0 50 20\",\nthis means that the coordinates inside the SVG will go from the top left corner (0,0)\nto bottom right (50,20) and each unit will be worth 10px.", "name": "viewBox", "required": false, "type": { "name": "string" } }, "aria-activedescendant": { "defaultValue": null, "description": "Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.", "name": "aria-activedescendant", "required": false, "type": { "name": "string" } }, "aria-atomic": { "defaultValue": null, "description": "Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.", "name": "aria-atomic", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-autocomplete": { "defaultValue": null, "description": "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\npresented if they are made.", "name": "aria-autocomplete", "required": false, "type": { "name": "\"none\" | \"inline\" | \"list\" | \"both\"" } }, "aria-busy": { "defaultValue": null, "description": "Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.", "name": "aria-busy", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-checked": { "defaultValue": null, "description": "Indicates the current \"checked\" state of checkboxes, radio buttons, and other widgets.\n@see aria-pressed\n@see aria-selected.", "name": "aria-checked", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"mixed\"" } }, "aria-colcount": { "defaultValue": null, "description": "Defines the total number of columns in a table, grid, or treegrid.\n@see aria-colindex.", "name": "aria-colcount", "required": false, "type": { "name": "number" } }, "aria-colindex": { "defaultValue": null, "description": "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.\n@see aria-colcount\n@see aria-colspan.", "name": "aria-colindex", "required": false, "type": { "name": "number" } }, "aria-colspan": { "defaultValue": null, "description": "Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-colindex\n@see aria-rowspan.", "name": "aria-colspan", "required": false, "type": { "name": "number" } }, "aria-controls": { "defaultValue": null, "description": "Identifies the element (or elements) whose contents or presence are controlled by the current element.\n@see aria-owns.", "name": "aria-controls", "required": false, "type": { "name": "string" } }, "aria-current": { "defaultValue": null, "description": "Indicates the element that represents the current item within a container or set of related elements.", "name": "aria-current", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"page\" | \"step\" | \"location\" | \"date\" | \"time\"" } }, "aria-describedby": { "defaultValue": null, "description": "Identifies the element (or elements) that describes the object.\n@see aria-labelledby", "name": "aria-describedby", "required": false, "type": { "name": "string" } }, "aria-details": { "defaultValue": null, "description": "Identifies the element that provides a detailed, extended description for the object.\n@see aria-describedby.", "name": "aria-details", "required": false, "type": { "name": "string" } }, "aria-disabled": { "defaultValue": null, "description": "Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.\n@see aria-hidden\n@see aria-readonly.", "name": "aria-disabled", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-dropeffect": { "defaultValue": null, "description": "Indicates what functions can be performed when a dragged object is released on the drop target.\n@deprecated in ARIA 1.1", "name": "aria-dropeffect", "required": false, "type": { "name": "\"none\" | \"copy\" | \"execute\" | \"link\" | \"move\" | \"popup\"" } }, "aria-errormessage": { "defaultValue": null, "description": "Identifies the element that provides an error message for the object.\n@see aria-invalid\n@see aria-describedby.", "name": "aria-errormessage", "required": false, "type": { "name": "string" } }, "aria-expanded": { "defaultValue": null, "description": "Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.", "name": "aria-expanded", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-flowto": { "defaultValue": null, "description": "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\nallows assistive technology to override the general default of reading in document source order.", "name": "aria-flowto", "required": false, "type": { "name": "string" } }, "aria-grabbed": { "defaultValue": null, "description": "Indicates an element's \"grabbed\" state in a drag-and-drop operation.\n@deprecated in ARIA 1.1", "name": "aria-grabbed", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-haspopup": { "defaultValue": null, "description": "Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.", "name": "aria-haspopup", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"menu\" | \"listbox\" | \"tree\" | \"grid\" | \"dialog\"" } }, "aria-hidden": { "defaultValue": null, "description": "Indicates whether the element is exposed to an accessibility API.\n@see aria-disabled.", "name": "aria-hidden", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-invalid": { "defaultValue": null, "description": "Indicates the entered value does not conform to the format expected by the application.\n@see aria-errormessage.", "name": "aria-invalid", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\"" } }, "aria-keyshortcuts": { "defaultValue": null, "description": "Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.", "name": "aria-keyshortcuts", "required": false, "type": { "name": "string" } }, "aria-label": { "defaultValue": null, "description": "Defines a string value that labels the current element.\n@see aria-labelledby.", "name": "aria-label", "required": false, "type": { "name": "string" } }, "aria-labelledby": { "defaultValue": null, "description": "Identifies the element (or elements) that labels the current element.\n@see aria-describedby.", "name": "aria-labelledby", "required": false, "type": { "name": "string" } }, "aria-level": { "defaultValue": null, "description": "Defines the hierarchical level of an element within a structure.", "name": "aria-level", "required": false, "type": { "name": "number" } }, "aria-live": { "defaultValue": null, "description": "Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.", "name": "aria-live", "required": false, "type": { "name": "\"off\" | \"assertive\" | \"polite\"" } }, "aria-modal": { "defaultValue": null, "description": "Indicates whether an element is modal when displayed.", "name": "aria-modal", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-multiline": { "defaultValue": null, "description": "Indicates whether a text box accepts multiple lines of input or only a single line.", "name": "aria-multiline", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-multiselectable": { "defaultValue": null, "description": "Indicates that the user may select more than one item from the current selectable descendants.", "name": "aria-multiselectable", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-orientation": { "defaultValue": null, "description": "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.", "name": "aria-orientation", "required": false, "type": { "name": "\"horizontal\" | \"vertical\"" } }, "aria-owns": { "defaultValue": null, "description": "Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.\n@see aria-controls.", "name": "aria-owns", "required": false, "type": { "name": "string" } }, "aria-placeholder": { "defaultValue": null, "description": "Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\nA hint could be a sample value or a brief description of the expected format.", "name": "aria-placeholder", "required": false, "type": { "name": "string" } }, "aria-posinset": { "defaultValue": null, "description": "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-setsize.", "name": "aria-posinset", "required": false, "type": { "name": "number" } }, "aria-pressed": { "defaultValue": null, "description": "Indicates the current \"pressed\" state of toggle buttons.\n@see aria-checked\n@see aria-selected.", "name": "aria-pressed", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"mixed\"" } }, "aria-readonly": { "defaultValue": null, "description": "Indicates that the element is not editable, but is otherwise operable.\n@see aria-disabled.", "name": "aria-readonly", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-relevant": { "defaultValue": null, "description": "Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.\n@see aria-atomic.", "name": "aria-relevant", "required": false, "type": { "name": "\"additions\" | \"additions text\" | \"all\" | \"removals\" | \"text\"" } }, "aria-required": { "defaultValue": null, "description": "Indicates that user input is required on the element before a form may be submitted.", "name": "aria-required", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-roledescription": { "defaultValue": null, "description": "Defines a human-readable, author-localized description for the role of an element.", "name": "aria-roledescription", "required": false, "type": { "name": "string" } }, "aria-rowcount": { "defaultValue": null, "description": "Defines the total number of rows in a table, grid, or treegrid.\n@see aria-rowindex.", "name": "aria-rowcount", "required": false, "type": { "name": "number" } }, "aria-rowindex": { "defaultValue": null, "description": "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.\n@see aria-rowcount\n@see aria-rowspan.", "name": "aria-rowindex", "required": false, "type": { "name": "number" } }, "aria-rowspan": { "defaultValue": null, "description": "Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-rowindex\n@see aria-colspan.", "name": "aria-rowspan", "required": false, "type": { "name": "number" } }, "aria-selected": { "defaultValue": null, "description": "Indicates the current \"selected\" state of various widgets.\n@see aria-checked\n@see aria-pressed.", "name": "aria-selected", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-setsize": { "defaultValue": null, "description": "Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-posinset.", "name": "aria-setsize", "required": false, "type": { "name": "number" } }, "aria-sort": { "defaultValue": null, "description": "Indicates if items in a table or grid are sorted in ascending or descending order.", "name": "aria-sort", "required": false, "type": { "name": "\"none\" | \"ascending\" | \"descending\" | \"other\"" } }, "aria-valuemax": { "defaultValue": null, "description": "Defines the maximum allowed value for a range widget.", "name": "aria-valuemax", "required": false, "type": { "name": "number" } }, "aria-valuemin": { "defaultValue": null, "description": "Defines the minimum allowed value for a range widget.", "name": "aria-valuemin", "required": false, "type": { "name": "number" } }, "aria-valuenow": { "defaultValue": null, "description": "Defines the current value for a range widget.\n@see aria-valuetext.", "name": "aria-valuenow", "required": false, "type": { "name": "number" } }, "aria-valuetext": { "defaultValue": null, "description": "Defines the human readable text alternative of aria-valuenow for a range widget.", "name": "aria-valuetext", "required": false, "type": { "name": "string" } }, "classes": { "defaultValue": null, "description": "Override or extend the styles applied to the component.", "name": "classes", "required": false, "type": { "name": "Partial<Record<SvgIconClassKey, string>>" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["atoms/icons/index.tsx#BookIcon"] = { docgenInfo: exports.BookIcon.__docgenInfo, name: "BookIcon", path: "atoms/icons/index.tsx#BookIcon" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    exports.AppsIcon.displayName = "AppsIcon";
    // @ts-ignore
    exports.AppsIcon.__docgenInfo = { "description": "", "displayName": "AppsIcon", "props": { "children": { "defaultValue": null, "description": "Node passed into the SVG element.", "name": "children", "required": false, "type": { "name": "ReactNode" } }, "color": { "defaultValue": null, "description": "The color of the component. It supports those theme colors that make sense for this component.\nYou can use the `htmlColor` prop to apply a color attribute to the SVG element.", "name": "color", "required": false, "type": { "name": "\"inherit\" | \"primary\" | \"secondary\" | \"action\" | \"disabled\" | \"error\"" } }, "component": { "defaultValue": null, "description": "The component used for the root node.\nEither a string to use a DOM element or a component.", "name": "component", "required": false, "type": { "name": "ElementType<SVGProps<SVGSVGElement>>" } }, "fontSize": { "defaultValue": null, "description": "The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.", "name": "fontSize", "required": false, "type": { "name": "\"inherit\" | \"small\" | \"default\" | \"large\"" } }, "htmlColor": { "defaultValue": null, "description": "Applies a color attribute to the SVG element.", "name": "htmlColor", "required": false, "type": { "name": "string" } }, "shapeRendering": { "defaultValue": null, "description": "The shape-rendering attribute. The behavior of the different options is described on the\n[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).\nIf you are having issues with blurry icons you should investigate this property.\n@document", "name": "shapeRendering", "required": false, "type": { "name": "string" } }, "titleAccess": { "defaultValue": null, "description": "Provides a human-readable title for the element that contains it.\nhttps://www.w3.org/TR/SVG-access/#Equivalent", "name": "titleAccess", "required": false, "type": { "name": "string" } }, "viewBox": { "defaultValue": null, "description": "Allows you to redefine what the coordinates without units mean inside an SVG element.\nFor example, if the SVG element is 500 (width) by 200 (height),\nand you pass viewBox=\"0 0 50 20\",\nthis means that the coordinates inside the SVG will go from the top left corner (0,0)\nto bottom right (50,20) and each unit will be worth 10px.", "name": "viewBox", "required": false, "type": { "name": "string" } }, "aria-activedescendant": { "defaultValue": null, "description": "Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.", "name": "aria-activedescendant", "required": false, "type": { "name": "string" } }, "aria-atomic": { "defaultValue": null, "description": "Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.", "name": "aria-atomic", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-autocomplete": { "defaultValue": null, "description": "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\npresented if they are made.", "name": "aria-autocomplete", "required": false, "type": { "name": "\"none\" | \"inline\" | \"list\" | \"both\"" } }, "aria-busy": { "defaultValue": null, "description": "Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.", "name": "aria-busy", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-checked": { "defaultValue": null, "description": "Indicates the current \"checked\" state of checkboxes, radio buttons, and other widgets.\n@see aria-pressed\n@see aria-selected.", "name": "aria-checked", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"mixed\"" } }, "aria-colcount": { "defaultValue": null, "description": "Defines the total number of columns in a table, grid, or treegrid.\n@see aria-colindex.", "name": "aria-colcount", "required": false, "type": { "name": "number" } }, "aria-colindex": { "defaultValue": null, "description": "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.\n@see aria-colcount\n@see aria-colspan.", "name": "aria-colindex", "required": false, "type": { "name": "number" } }, "aria-colspan": { "defaultValue": null, "description": "Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-colindex\n@see aria-rowspan.", "name": "aria-colspan", "required": false, "type": { "name": "number" } }, "aria-controls": { "defaultValue": null, "description": "Identifies the element (or elements) whose contents or presence are controlled by the current element.\n@see aria-owns.", "name": "aria-controls", "required": false, "type": { "name": "string" } }, "aria-current": { "defaultValue": null, "description": "Indicates the element that represents the current item within a container or set of related elements.", "name": "aria-current", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"page\" | \"step\" | \"location\" | \"date\" | \"time\"" } }, "aria-describedby": { "defaultValue": null, "description": "Identifies the element (or elements) that describes the object.\n@see aria-labelledby", "name": "aria-describedby", "required": false, "type": { "name": "string" } }, "aria-details": { "defaultValue": null, "description": "Identifies the element that provides a detailed, extended description for the object.\n@see aria-describedby.", "name": "aria-details", "required": false, "type": { "name": "string" } }, "aria-disabled": { "defaultValue": null, "description": "Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.\n@see aria-hidden\n@see aria-readonly.", "name": "aria-disabled", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-dropeffect": { "defaultValue": null, "description": "Indicates what functions can be performed when a dragged object is released on the drop target.\n@deprecated in ARIA 1.1", "name": "aria-dropeffect", "required": false, "type": { "name": "\"none\" | \"copy\" | \"execute\" | \"link\" | \"move\" | \"popup\"" } }, "aria-errormessage": { "defaultValue": null, "description": "Identifies the element that provides an error message for the object.\n@see aria-invalid\n@see aria-describedby.", "name": "aria-errormessage", "required": false, "type": { "name": "string" } }, "aria-expanded": { "defaultValue": null, "description": "Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.", "name": "aria-expanded", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-flowto": { "defaultValue": null, "description": "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\nallows assistive technology to override the general default of reading in document source order.", "name": "aria-flowto", "required": false, "type": { "name": "string" } }, "aria-grabbed": { "defaultValue": null, "description": "Indicates an element's \"grabbed\" state in a drag-and-drop operation.\n@deprecated in ARIA 1.1", "name": "aria-grabbed", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-haspopup": { "defaultValue": null, "description": "Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.", "name": "aria-haspopup", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"menu\" | \"listbox\" | \"tree\" | \"grid\" | \"dialog\"" } }, "aria-hidden": { "defaultValue": null, "description": "Indicates whether the element is exposed to an accessibility API.\n@see aria-disabled.", "name": "aria-hidden", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-invalid": { "defaultValue": null, "description": "Indicates the entered value does not conform to the format expected by the application.\n@see aria-errormessage.", "name": "aria-invalid", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\"" } }, "aria-keyshortcuts": { "defaultValue": null, "description": "Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.", "name": "aria-keyshortcuts", "required": false, "type": { "name": "string" } }, "aria-label": { "defaultValue": null, "description": "Defines a string value that labels the current element.\n@see aria-labelledby.", "name": "aria-label", "required": false, "type": { "name": "string" } }, "aria-labelledby": { "defaultValue": null, "description": "Identifies the element (or elements) that labels the current element.\n@see aria-describedby.", "name": "aria-labelledby", "required": false, "type": { "name": "string" } }, "aria-level": { "defaultValue": null, "description": "Defines the hierarchical level of an element within a structure.", "name": "aria-level", "required": false, "type": { "name": "number" } }, "aria-live": { "defaultValue": null, "description": "Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.", "name": "aria-live", "required": false, "type": { "name": "\"off\" | \"assertive\" | \"polite\"" } }, "aria-modal": { "defaultValue": null, "description": "Indicates whether an element is modal when displayed.", "name": "aria-modal", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-multiline": { "defaultValue": null, "description": "Indicates whether a text box accepts multiple lines of input or only a single line.", "name": "aria-multiline", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-multiselectable": { "defaultValue": null, "description": "Indicates that the user may select more than one item from the current selectable descendants.", "name": "aria-multiselectable", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-orientation": { "defaultValue": null, "description": "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.", "name": "aria-orientation", "required": false, "type": { "name": "\"horizontal\" | \"vertical\"" } }, "aria-owns": { "defaultValue": null, "description": "Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.\n@see aria-controls.", "name": "aria-owns", "required": false, "type": { "name": "string" } }, "aria-placeholder": { "defaultValue": null, "description": "Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\nA hint could be a sample value or a brief description of the expected format.", "name": "aria-placeholder", "required": false, "type": { "name": "string" } }, "aria-posinset": { "defaultValue": null, "description": "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-setsize.", "name": "aria-posinset", "required": false, "type": { "name": "number" } }, "aria-pressed": { "defaultValue": null, "description": "Indicates the current \"pressed\" state of toggle buttons.\n@see aria-checked\n@see aria-selected.", "name": "aria-pressed", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"mixed\"" } }, "aria-readonly": { "defaultValue": null, "description": "Indicates that the element is not editable, but is otherwise operable.\n@see aria-disabled.", "name": "aria-readonly", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-relevant": { "defaultValue": null, "description": "Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.\n@see aria-atomic.", "name": "aria-relevant", "required": false, "type": { "name": "\"additions\" | \"additions text\" | \"all\" | \"removals\" | \"text\"" } }, "aria-required": { "defaultValue": null, "description": "Indicates that user input is required on the element before a form may be submitted.", "name": "aria-required", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-roledescription": { "defaultValue": null, "description": "Defines a human-readable, author-localized description for the role of an element.", "name": "aria-roledescription", "required": false, "type": { "name": "string" } }, "aria-rowcount": { "defaultValue": null, "description": "Defines the total number of rows in a table, grid, or treegrid.\n@see aria-rowindex.", "name": "aria-rowcount", "required": false, "type": { "name": "number" } }, "aria-rowindex": { "defaultValue": null, "description": "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.\n@see aria-rowcount\n@see aria-rowspan.", "name": "aria-rowindex", "required": false, "type": { "name": "number" } }, "aria-rowspan": { "defaultValue": null, "description": "Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-rowindex\n@see aria-colspan.", "name": "aria-rowspan", "required": false, "type": { "name": "number" } }, "aria-selected": { "defaultValue": null, "description": "Indicates the current \"selected\" state of various widgets.\n@see aria-checked\n@see aria-pressed.", "name": "aria-selected", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-setsize": { "defaultValue": null, "description": "Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-posinset.", "name": "aria-setsize", "required": false, "type": { "name": "number" } }, "aria-sort": { "defaultValue": null, "description": "Indicates if items in a table or grid are sorted in ascending or descending order.", "name": "aria-sort", "required": false, "type": { "name": "\"none\" | \"ascending\" | \"descending\" | \"other\"" } }, "aria-valuemax": { "defaultValue": null, "description": "Defines the maximum allowed value for a range widget.", "name": "aria-valuemax", "required": false, "type": { "name": "number" } }, "aria-valuemin": { "defaultValue": null, "description": "Defines the minimum allowed value for a range widget.", "name": "aria-valuemin", "required": false, "type": { "name": "number" } }, "aria-valuenow": { "defaultValue": null, "description": "Defines the current value for a range widget.\n@see aria-valuetext.", "name": "aria-valuenow", "required": false, "type": { "name": "number" } }, "aria-valuetext": { "defaultValue": null, "description": "Defines the human readable text alternative of aria-valuenow for a range widget.", "name": "aria-valuetext", "required": false, "type": { "name": "string" } }, "classes": { "defaultValue": null, "description": "Override or extend the styles applied to the component.", "name": "classes", "required": false, "type": { "name": "Partial<Record<SvgIconClassKey, string>>" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["atoms/icons/index.tsx#AppsIcon"] = { docgenInfo: exports.AppsIcon.__docgenInfo, name: "AppsIcon", path: "atoms/icons/index.tsx#AppsIcon" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    exports.InstallerIcon.displayName = "InstallerIcon";
    // @ts-ignore
    exports.InstallerIcon.__docgenInfo = { "description": "", "displayName": "InstallerIcon", "props": { "children": { "defaultValue": null, "description": "Node passed into the SVG element.", "name": "children", "required": false, "type": { "name": "ReactNode" } }, "color": { "defaultValue": null, "description": "The color of the component. It supports those theme colors that make sense for this component.\nYou can use the `htmlColor` prop to apply a color attribute to the SVG element.", "name": "color", "required": false, "type": { "name": "\"inherit\" | \"primary\" | \"secondary\" | \"action\" | \"disabled\" | \"error\"" } }, "component": { "defaultValue": null, "description": "The component used for the root node.\nEither a string to use a DOM element or a component.", "name": "component", "required": false, "type": { "name": "ElementType<SVGProps<SVGSVGElement>>" } }, "fontSize": { "defaultValue": null, "description": "The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.", "name": "fontSize", "required": false, "type": { "name": "\"inherit\" | \"small\" | \"default\" | \"large\"" } }, "htmlColor": { "defaultValue": null, "description": "Applies a color attribute to the SVG element.", "name": "htmlColor", "required": false, "type": { "name": "string" } }, "shapeRendering": { "defaultValue": null, "description": "The shape-rendering attribute. The behavior of the different options is described on the\n[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).\nIf you are having issues with blurry icons you should investigate this property.\n@document", "name": "shapeRendering", "required": false, "type": { "name": "string" } }, "titleAccess": { "defaultValue": null, "description": "Provides a human-readable title for the element that contains it.\nhttps://www.w3.org/TR/SVG-access/#Equivalent", "name": "titleAccess", "required": false, "type": { "name": "string" } }, "viewBox": { "defaultValue": null, "description": "Allows you to redefine what the coordinates without units mean inside an SVG element.\nFor example, if the SVG element is 500 (width) by 200 (height),\nand you pass viewBox=\"0 0 50 20\",\nthis means that the coordinates inside the SVG will go from the top left corner (0,0)\nto bottom right (50,20) and each unit will be worth 10px.", "name": "viewBox", "required": false, "type": { "name": "string" } }, "aria-activedescendant": { "defaultValue": null, "description": "Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.", "name": "aria-activedescendant", "required": false, "type": { "name": "string" } }, "aria-atomic": { "defaultValue": null, "description": "Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.", "name": "aria-atomic", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-autocomplete": { "defaultValue": null, "description": "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\npresented if they are made.", "name": "aria-autocomplete", "required": false, "type": { "name": "\"none\" | \"inline\" | \"list\" | \"both\"" } }, "aria-busy": { "defaultValue": null, "description": "Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.", "name": "aria-busy", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-checked": { "defaultValue": null, "description": "Indicates the current \"checked\" state of checkboxes, radio buttons, and other widgets.\n@see aria-pressed\n@see aria-selected.", "name": "aria-checked", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"mixed\"" } }, "aria-colcount": { "defaultValue": null, "description": "Defines the total number of columns in a table, grid, or treegrid.\n@see aria-colindex.", "name": "aria-colcount", "required": false, "type": { "name": "number" } }, "aria-colindex": { "defaultValue": null, "description": "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.\n@see aria-colcount\n@see aria-colspan.", "name": "aria-colindex", "required": false, "type": { "name": "number" } }, "aria-colspan": { "defaultValue": null, "description": "Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-colindex\n@see aria-rowspan.", "name": "aria-colspan", "required": false, "type": { "name": "number" } }, "aria-controls": { "defaultValue": null, "description": "Identifies the element (or elements) whose contents or presence are controlled by the current element.\n@see aria-owns.", "name": "aria-controls", "required": false, "type": { "name": "string" } }, "aria-current": { "defaultValue": null, "description": "Indicates the element that represents the current item within a container or set of related elements.", "name": "aria-current", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"page\" | \"step\" | \"location\" | \"date\" | \"time\"" } }, "aria-describedby": { "defaultValue": null, "description": "Identifies the element (or elements) that describes the object.\n@see aria-labelledby", "name": "aria-describedby", "required": false, "type": { "name": "string" } }, "aria-details": { "defaultValue": null, "description": "Identifies the element that provides a detailed, extended description for the object.\n@see aria-describedby.", "name": "aria-details", "required": false, "type": { "name": "string" } }, "aria-disabled": { "defaultValue": null, "description": "Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.\n@see aria-hidden\n@see aria-readonly.", "name": "aria-disabled", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-dropeffect": { "defaultValue": null, "description": "Indicates what functions can be performed when a dragged object is released on the drop target.\n@deprecated in ARIA 1.1", "name": "aria-dropeffect", "required": false, "type": { "name": "\"none\" | \"copy\" | \"execute\" | \"link\" | \"move\" | \"popup\"" } }, "aria-errormessage": { "defaultValue": null, "description": "Identifies the element that provides an error message for the object.\n@see aria-invalid\n@see aria-describedby.", "name": "aria-errormessage", "required": false, "type": { "name": "string" } }, "aria-expanded": { "defaultValue": null, "description": "Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.", "name": "aria-expanded", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-flowto": { "defaultValue": null, "description": "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\nallows assistive technology to override the general default of reading in document source order.", "name": "aria-flowto", "required": false, "type": { "name": "string" } }, "aria-grabbed": { "defaultValue": null, "description": "Indicates an element's \"grabbed\" state in a drag-and-drop operation.\n@deprecated in ARIA 1.1", "name": "aria-grabbed", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-haspopup": { "defaultValue": null, "description": "Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.", "name": "aria-haspopup", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"menu\" | \"listbox\" | \"tree\" | \"grid\" | \"dialog\"" } }, "aria-hidden": { "defaultValue": null, "description": "Indicates whether the element is exposed to an accessibility API.\n@see aria-disabled.", "name": "aria-hidden", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-invalid": { "defaultValue": null, "description": "Indicates the entered value does not conform to the format expected by the application.\n@see aria-errormessage.", "name": "aria-invalid", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\"" } }, "aria-keyshortcuts": { "defaultValue": null, "description": "Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.", "name": "aria-keyshortcuts", "required": false, "type": { "name": "string" } }, "aria-label": { "defaultValue": null, "description": "Defines a string value that labels the current element.\n@see aria-labelledby.", "name": "aria-label", "required": false, "type": { "name": "string" } }, "aria-labelledby": { "defaultValue": null, "description": "Identifies the element (or elements) that labels the current element.\n@see aria-describedby.", "name": "aria-labelledby", "required": false, "type": { "name": "string" } }, "aria-level": { "defaultValue": null, "description": "Defines the hierarchical level of an element within a structure.", "name": "aria-level", "required": false, "type": { "name": "number" } }, "aria-live": { "defaultValue": null, "description": "Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.", "name": "aria-live", "required": false, "type": { "name": "\"off\" | \"assertive\" | \"polite\"" } }, "aria-modal": { "defaultValue": null, "description": "Indicates whether an element is modal when displayed.", "name": "aria-modal", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-multiline": { "defaultValue": null, "description": "Indicates whether a text box accepts multiple lines of input or only a single line.", "name": "aria-multiline", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-multiselectable": { "defaultValue": null, "description": "Indicates that the user may select more than one item from the current selectable descendants.", "name": "aria-multiselectable", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-orientation": { "defaultValue": null, "description": "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.", "name": "aria-orientation", "required": false, "type": { "name": "\"horizontal\" | \"vertical\"" } }, "aria-owns": { "defaultValue": null, "description": "Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.\n@see aria-controls.", "name": "aria-owns", "required": false, "type": { "name": "string" } }, "aria-placeholder": { "defaultValue": null, "description": "Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\nA hint could be a sample value or a brief description of the expected format.", "name": "aria-placeholder", "required": false, "type": { "name": "string" } }, "aria-posinset": { "defaultValue": null, "description": "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-setsize.", "name": "aria-posinset", "required": false, "type": { "name": "number" } }, "aria-pressed": { "defaultValue": null, "description": "Indicates the current \"pressed\" state of toggle buttons.\n@see aria-checked\n@see aria-selected.", "name": "aria-pressed", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"mixed\"" } }, "aria-readonly": { "defaultValue": null, "description": "Indicates that the element is not editable, but is otherwise operable.\n@see aria-disabled.", "name": "aria-readonly", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-relevant": { "defaultValue": null, "description": "Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.\n@see aria-atomic.", "name": "aria-relevant", "required": false, "type": { "name": "\"additions\" | \"additions text\" | \"all\" | \"removals\" | \"text\"" } }, "aria-required": { "defaultValue": null, "description": "Indicates that user input is required on the element before a form may be submitted.", "name": "aria-required", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-roledescription": { "defaultValue": null, "description": "Defines a human-readable, author-localized description for the role of an element.", "name": "aria-roledescription", "required": false, "type": { "name": "string" } }, "aria-rowcount": { "defaultValue": null, "description": "Defines the total number of rows in a table, grid, or treegrid.\n@see aria-rowindex.", "name": "aria-rowcount", "required": false, "type": { "name": "number" } }, "aria-rowindex": { "defaultValue": null, "description": "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.\n@see aria-rowcount\n@see aria-rowspan.", "name": "aria-rowindex", "required": false, "type": { "name": "number" } }, "aria-rowspan": { "defaultValue": null, "description": "Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-rowindex\n@see aria-colspan.", "name": "aria-rowspan", "required": false, "type": { "name": "number" } }, "aria-selected": { "defaultValue": null, "description": "Indicates the current \"selected\" state of various widgets.\n@see aria-checked\n@see aria-pressed.", "name": "aria-selected", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-setsize": { "defaultValue": null, "description": "Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-posinset.", "name": "aria-setsize", "required": false, "type": { "name": "number" } }, "aria-sort": { "defaultValue": null, "description": "Indicates if items in a table or grid are sorted in ascending or descending order.", "name": "aria-sort", "required": false, "type": { "name": "\"none\" | \"ascending\" | \"descending\" | \"other\"" } }, "aria-valuemax": { "defaultValue": null, "description": "Defines the maximum allowed value for a range widget.", "name": "aria-valuemax", "required": false, "type": { "name": "number" } }, "aria-valuemin": { "defaultValue": null, "description": "Defines the minimum allowed value for a range widget.", "name": "aria-valuemin", "required": false, "type": { "name": "number" } }, "aria-valuenow": { "defaultValue": null, "description": "Defines the current value for a range widget.\n@see aria-valuetext.", "name": "aria-valuenow", "required": false, "type": { "name": "number" } }, "aria-valuetext": { "defaultValue": null, "description": "Defines the human readable text alternative of aria-valuenow for a range widget.", "name": "aria-valuetext", "required": false, "type": { "name": "string" } }, "classes": { "defaultValue": null, "description": "Override or extend the styles applied to the component.", "name": "classes", "required": false, "type": { "name": "Partial<Record<SvgIconClassKey, string>>" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["atoms/icons/index.tsx#InstallerIcon"] = { docgenInfo: exports.InstallerIcon.__docgenInfo, name: "InstallerIcon", path: "atoms/icons/index.tsx#InstallerIcon" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    exports.NotificationsIcon.displayName = "NotificationsIcon";
    // @ts-ignore
    exports.NotificationsIcon.__docgenInfo = { "description": "", "displayName": "NotificationsIcon", "props": { "children": { "defaultValue": null, "description": "Node passed into the SVG element.", "name": "children", "required": false, "type": { "name": "ReactNode" } }, "color": { "defaultValue": null, "description": "The color of the component. It supports those theme colors that make sense for this component.\nYou can use the `htmlColor` prop to apply a color attribute to the SVG element.", "name": "color", "required": false, "type": { "name": "\"inherit\" | \"primary\" | \"secondary\" | \"action\" | \"disabled\" | \"error\"" } }, "component": { "defaultValue": null, "description": "The component used for the root node.\nEither a string to use a DOM element or a component.", "name": "component", "required": false, "type": { "name": "ElementType<SVGProps<SVGSVGElement>>" } }, "fontSize": { "defaultValue": null, "description": "The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.", "name": "fontSize", "required": false, "type": { "name": "\"inherit\" | \"small\" | \"default\" | \"large\"" } }, "htmlColor": { "defaultValue": null, "description": "Applies a color attribute to the SVG element.", "name": "htmlColor", "required": false, "type": { "name": "string" } }, "shapeRendering": { "defaultValue": null, "description": "The shape-rendering attribute. The behavior of the different options is described on the\n[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).\nIf you are having issues with blurry icons you should investigate this property.\n@document", "name": "shapeRendering", "required": false, "type": { "name": "string" } }, "titleAccess": { "defaultValue": null, "description": "Provides a human-readable title for the element that contains it.\nhttps://www.w3.org/TR/SVG-access/#Equivalent", "name": "titleAccess", "required": false, "type": { "name": "string" } }, "viewBox": { "defaultValue": null, "description": "Allows you to redefine what the coordinates without units mean inside an SVG element.\nFor example, if the SVG element is 500 (width) by 200 (height),\nand you pass viewBox=\"0 0 50 20\",\nthis means that the coordinates inside the SVG will go from the top left corner (0,0)\nto bottom right (50,20) and each unit will be worth 10px.", "name": "viewBox", "required": false, "type": { "name": "string" } }, "aria-activedescendant": { "defaultValue": null, "description": "Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.", "name": "aria-activedescendant", "required": false, "type": { "name": "string" } }, "aria-atomic": { "defaultValue": null, "description": "Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.", "name": "aria-atomic", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-autocomplete": { "defaultValue": null, "description": "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\npresented if they are made.", "name": "aria-autocomplete", "required": false, "type": { "name": "\"none\" | \"inline\" | \"list\" | \"both\"" } }, "aria-busy": { "defaultValue": null, "description": "Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.", "name": "aria-busy", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-checked": { "defaultValue": null, "description": "Indicates the current \"checked\" state of checkboxes, radio buttons, and other widgets.\n@see aria-pressed\n@see aria-selected.", "name": "aria-checked", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"mixed\"" } }, "aria-colcount": { "defaultValue": null, "description": "Defines the total number of columns in a table, grid, or treegrid.\n@see aria-colindex.", "name": "aria-colcount", "required": false, "type": { "name": "number" } }, "aria-colindex": { "defaultValue": null, "description": "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.\n@see aria-colcount\n@see aria-colspan.", "name": "aria-colindex", "required": false, "type": { "name": "number" } }, "aria-colspan": { "defaultValue": null, "description": "Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-colindex\n@see aria-rowspan.", "name": "aria-colspan", "required": false, "type": { "name": "number" } }, "aria-controls": { "defaultValue": null, "description": "Identifies the element (or elements) whose contents or presence are controlled by the current element.\n@see aria-owns.", "name": "aria-controls", "required": false, "type": { "name": "string" } }, "aria-current": { "defaultValue": null, "description": "Indicates the element that represents the current item within a container or set of related elements.", "name": "aria-current", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"page\" | \"step\" | \"location\" | \"date\" | \"time\"" } }, "aria-describedby": { "defaultValue": null, "description": "Identifies the element (or elements) that describes the object.\n@see aria-labelledby", "name": "aria-describedby", "required": false, "type": { "name": "string" } }, "aria-details": { "defaultValue": null, "description": "Identifies the element that provides a detailed, extended description for the object.\n@see aria-describedby.", "name": "aria-details", "required": false, "type": { "name": "string" } }, "aria-disabled": { "defaultValue": null, "description": "Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.\n@see aria-hidden\n@see aria-readonly.", "name": "aria-disabled", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-dropeffect": { "defaultValue": null, "description": "Indicates what functions can be performed when a dragged object is released on the drop target.\n@deprecated in ARIA 1.1", "name": "aria-dropeffect", "required": false, "type": { "name": "\"none\" | \"copy\" | \"execute\" | \"link\" | \"move\" | \"popup\"" } }, "aria-errormessage": { "defaultValue": null, "description": "Identifies the element that provides an error message for the object.\n@see aria-invalid\n@see aria-describedby.", "name": "aria-errormessage", "required": false, "type": { "name": "string" } }, "aria-expanded": { "defaultValue": null, "description": "Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.", "name": "aria-expanded", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-flowto": { "defaultValue": null, "description": "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\nallows assistive technology to override the general default of reading in document source order.", "name": "aria-flowto", "required": false, "type": { "name": "string" } }, "aria-grabbed": { "defaultValue": null, "description": "Indicates an element's \"grabbed\" state in a drag-and-drop operation.\n@deprecated in ARIA 1.1", "name": "aria-grabbed", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-haspopup": { "defaultValue": null, "description": "Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.", "name": "aria-haspopup", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"menu\" | \"listbox\" | \"tree\" | \"grid\" | \"dialog\"" } }, "aria-hidden": { "defaultValue": null, "description": "Indicates whether the element is exposed to an accessibility API.\n@see aria-disabled.", "name": "aria-hidden", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-invalid": { "defaultValue": null, "description": "Indicates the entered value does not conform to the format expected by the application.\n@see aria-errormessage.", "name": "aria-invalid", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\"" } }, "aria-keyshortcuts": { "defaultValue": null, "description": "Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.", "name": "aria-keyshortcuts", "required": false, "type": { "name": "string" } }, "aria-label": { "defaultValue": null, "description": "Defines a string value that labels the current element.\n@see aria-labelledby.", "name": "aria-label", "required": false, "type": { "name": "string" } }, "aria-labelledby": { "defaultValue": null, "description": "Identifies the element (or elements) that labels the current element.\n@see aria-describedby.", "name": "aria-labelledby", "required": false, "type": { "name": "string" } }, "aria-level": { "defaultValue": null, "description": "Defines the hierarchical level of an element within a structure.", "name": "aria-level", "required": false, "type": { "name": "number" } }, "aria-live": { "defaultValue": null, "description": "Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.", "name": "aria-live", "required": false, "type": { "name": "\"off\" | \"assertive\" | \"polite\"" } }, "aria-modal": { "defaultValue": null, "description": "Indicates whether an element is modal when displayed.", "name": "aria-modal", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-multiline": { "defaultValue": null, "description": "Indicates whether a text box accepts multiple lines of input or only a single line.", "name": "aria-multiline", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-multiselectable": { "defaultValue": null, "description": "Indicates that the user may select more than one item from the current selectable descendants.", "name": "aria-multiselectable", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-orientation": { "defaultValue": null, "description": "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.", "name": "aria-orientation", "required": false, "type": { "name": "\"horizontal\" | \"vertical\"" } }, "aria-owns": { "defaultValue": null, "description": "Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.\n@see aria-controls.", "name": "aria-owns", "required": false, "type": { "name": "string" } }, "aria-placeholder": { "defaultValue": null, "description": "Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\nA hint could be a sample value or a brief description of the expected format.", "name": "aria-placeholder", "required": false, "type": { "name": "string" } }, "aria-posinset": { "defaultValue": null, "description": "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-setsize.", "name": "aria-posinset", "required": false, "type": { "name": "number" } }, "aria-pressed": { "defaultValue": null, "description": "Indicates the current \"pressed\" state of toggle buttons.\n@see aria-checked\n@see aria-selected.", "name": "aria-pressed", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"mixed\"" } }, "aria-readonly": { "defaultValue": null, "description": "Indicates that the element is not editable, but is otherwise operable.\n@see aria-disabled.", "name": "aria-readonly", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-relevant": { "defaultValue": null, "description": "Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.\n@see aria-atomic.", "name": "aria-relevant", "required": false, "type": { "name": "\"additions\" | \"additions text\" | \"all\" | \"removals\" | \"text\"" } }, "aria-required": { "defaultValue": null, "description": "Indicates that user input is required on the element before a form may be submitted.", "name": "aria-required", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-roledescription": { "defaultValue": null, "description": "Defines a human-readable, author-localized description for the role of an element.", "name": "aria-roledescription", "required": false, "type": { "name": "string" } }, "aria-rowcount": { "defaultValue": null, "description": "Defines the total number of rows in a table, grid, or treegrid.\n@see aria-rowindex.", "name": "aria-rowcount", "required": false, "type": { "name": "number" } }, "aria-rowindex": { "defaultValue": null, "description": "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.\n@see aria-rowcount\n@see aria-rowspan.", "name": "aria-rowindex", "required": false, "type": { "name": "number" } }, "aria-rowspan": { "defaultValue": null, "description": "Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-rowindex\n@see aria-colspan.", "name": "aria-rowspan", "required": false, "type": { "name": "number" } }, "aria-selected": { "defaultValue": null, "description": "Indicates the current \"selected\" state of various widgets.\n@see aria-checked\n@see aria-pressed.", "name": "aria-selected", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-setsize": { "defaultValue": null, "description": "Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-posinset.", "name": "aria-setsize", "required": false, "type": { "name": "number" } }, "aria-sort": { "defaultValue": null, "description": "Indicates if items in a table or grid are sorted in ascending or descending order.", "name": "aria-sort", "required": false, "type": { "name": "\"none\" | \"ascending\" | \"descending\" | \"other\"" } }, "aria-valuemax": { "defaultValue": null, "description": "Defines the maximum allowed value for a range widget.", "name": "aria-valuemax", "required": false, "type": { "name": "number" } }, "aria-valuemin": { "defaultValue": null, "description": "Defines the minimum allowed value for a range widget.", "name": "aria-valuemin", "required": false, "type": { "name": "number" } }, "aria-valuenow": { "defaultValue": null, "description": "Defines the current value for a range widget.\n@see aria-valuetext.", "name": "aria-valuenow", "required": false, "type": { "name": "number" } }, "aria-valuetext": { "defaultValue": null, "description": "Defines the human readable text alternative of aria-valuenow for a range widget.", "name": "aria-valuetext", "required": false, "type": { "name": "string" } }, "classes": { "defaultValue": null, "description": "Override or extend the styles applied to the component.", "name": "classes", "required": false, "type": { "name": "Partial<Record<SvgIconClassKey, string>>" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["atoms/icons/index.tsx#NotificationsIcon"] = { docgenInfo: exports.NotificationsIcon.__docgenInfo, name: "NotificationsIcon", path: "atoms/icons/index.tsx#NotificationsIcon" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    exports.SettingsIcon.displayName = "SettingsIcon";
    // @ts-ignore
    exports.SettingsIcon.__docgenInfo = { "description": "", "displayName": "SettingsIcon", "props": { "children": { "defaultValue": null, "description": "Node passed into the SVG element.", "name": "children", "required": false, "type": { "name": "ReactNode" } }, "color": { "defaultValue": null, "description": "The color of the component. It supports those theme colors that make sense for this component.\nYou can use the `htmlColor` prop to apply a color attribute to the SVG element.", "name": "color", "required": false, "type": { "name": "\"inherit\" | \"primary\" | \"secondary\" | \"action\" | \"disabled\" | \"error\"" } }, "component": { "defaultValue": null, "description": "The component used for the root node.\nEither a string to use a DOM element or a component.", "name": "component", "required": false, "type": { "name": "ElementType<SVGProps<SVGSVGElement>>" } }, "fontSize": { "defaultValue": null, "description": "The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.", "name": "fontSize", "required": false, "type": { "name": "\"inherit\" | \"small\" | \"default\" | \"large\"" } }, "htmlColor": { "defaultValue": null, "description": "Applies a color attribute to the SVG element.", "name": "htmlColor", "required": false, "type": { "name": "string" } }, "shapeRendering": { "defaultValue": null, "description": "The shape-rendering attribute. The behavior of the different options is described on the\n[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).\nIf you are having issues with blurry icons you should investigate this property.\n@document", "name": "shapeRendering", "required": false, "type": { "name": "string" } }, "titleAccess": { "defaultValue": null, "description": "Provides a human-readable title for the element that contains it.\nhttps://www.w3.org/TR/SVG-access/#Equivalent", "name": "titleAccess", "required": false, "type": { "name": "string" } }, "viewBox": { "defaultValue": null, "description": "Allows you to redefine what the coordinates without units mean inside an SVG element.\nFor example, if the SVG element is 500 (width) by 200 (height),\nand you pass viewBox=\"0 0 50 20\",\nthis means that the coordinates inside the SVG will go from the top left corner (0,0)\nto bottom right (50,20) and each unit will be worth 10px.", "name": "viewBox", "required": false, "type": { "name": "string" } }, "aria-activedescendant": { "defaultValue": null, "description": "Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.", "name": "aria-activedescendant", "required": false, "type": { "name": "string" } }, "aria-atomic": { "defaultValue": null, "description": "Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.", "name": "aria-atomic", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-autocomplete": { "defaultValue": null, "description": "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\npresented if they are made.", "name": "aria-autocomplete", "required": false, "type": { "name": "\"none\" | \"inline\" | \"list\" | \"both\"" } }, "aria-busy": { "defaultValue": null, "description": "Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.", "name": "aria-busy", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-checked": { "defaultValue": null, "description": "Indicates the current \"checked\" state of checkboxes, radio buttons, and other widgets.\n@see aria-pressed\n@see aria-selected.", "name": "aria-checked", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"mixed\"" } }, "aria-colcount": { "defaultValue": null, "description": "Defines the total number of columns in a table, grid, or treegrid.\n@see aria-colindex.", "name": "aria-colcount", "required": false, "type": { "name": "number" } }, "aria-colindex": { "defaultValue": null, "description": "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.\n@see aria-colcount\n@see aria-colspan.", "name": "aria-colindex", "required": false, "type": { "name": "number" } }, "aria-colspan": { "defaultValue": null, "description": "Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-colindex\n@see aria-rowspan.", "name": "aria-colspan", "required": false, "type": { "name": "number" } }, "aria-controls": { "defaultValue": null, "description": "Identifies the element (or elements) whose contents or presence are controlled by the current element.\n@see aria-owns.", "name": "aria-controls", "required": false, "type": { "name": "string" } }, "aria-current": { "defaultValue": null, "description": "Indicates the element that represents the current item within a container or set of related elements.", "name": "aria-current", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"page\" | \"step\" | \"location\" | \"date\" | \"time\"" } }, "aria-describedby": { "defaultValue": null, "description": "Identifies the element (or elements) that describes the object.\n@see aria-labelledby", "name": "aria-describedby", "required": false, "type": { "name": "string" } }, "aria-details": { "defaultValue": null, "description": "Identifies the element that provides a detailed, extended description for the object.\n@see aria-describedby.", "name": "aria-details", "required": false, "type": { "name": "string" } }, "aria-disabled": { "defaultValue": null, "description": "Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.\n@see aria-hidden\n@see aria-readonly.", "name": "aria-disabled", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-dropeffect": { "defaultValue": null, "description": "Indicates what functions can be performed when a dragged object is released on the drop target.\n@deprecated in ARIA 1.1", "name": "aria-dropeffect", "required": false, "type": { "name": "\"none\" | \"copy\" | \"execute\" | \"link\" | \"move\" | \"popup\"" } }, "aria-errormessage": { "defaultValue": null, "description": "Identifies the element that provides an error message for the object.\n@see aria-invalid\n@see aria-describedby.", "name": "aria-errormessage", "required": false, "type": { "name": "string" } }, "aria-expanded": { "defaultValue": null, "description": "Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.", "name": "aria-expanded", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-flowto": { "defaultValue": null, "description": "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\nallows assistive technology to override the general default of reading in document source order.", "name": "aria-flowto", "required": false, "type": { "name": "string" } }, "aria-grabbed": { "defaultValue": null, "description": "Indicates an element's \"grabbed\" state in a drag-and-drop operation.\n@deprecated in ARIA 1.1", "name": "aria-grabbed", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-haspopup": { "defaultValue": null, "description": "Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.", "name": "aria-haspopup", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"menu\" | \"listbox\" | \"tree\" | \"grid\" | \"dialog\"" } }, "aria-hidden": { "defaultValue": null, "description": "Indicates whether the element is exposed to an accessibility API.\n@see aria-disabled.", "name": "aria-hidden", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-invalid": { "defaultValue": null, "description": "Indicates the entered value does not conform to the format expected by the application.\n@see aria-errormessage.", "name": "aria-invalid", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\"" } }, "aria-keyshortcuts": { "defaultValue": null, "description": "Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.", "name": "aria-keyshortcuts", "required": false, "type": { "name": "string" } }, "aria-label": { "defaultValue": null, "description": "Defines a string value that labels the current element.\n@see aria-labelledby.", "name": "aria-label", "required": false, "type": { "name": "string" } }, "aria-labelledby": { "defaultValue": null, "description": "Identifies the element (or elements) that labels the current element.\n@see aria-describedby.", "name": "aria-labelledby", "required": false, "type": { "name": "string" } }, "aria-level": { "defaultValue": null, "description": "Defines the hierarchical level of an element within a structure.", "name": "aria-level", "required": false, "type": { "name": "number" } }, "aria-live": { "defaultValue": null, "description": "Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.", "name": "aria-live", "required": false, "type": { "name": "\"off\" | \"assertive\" | \"polite\"" } }, "aria-modal": { "defaultValue": null, "description": "Indicates whether an element is modal when displayed.", "name": "aria-modal", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-multiline": { "defaultValue": null, "description": "Indicates whether a text box accepts multiple lines of input or only a single line.", "name": "aria-multiline", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-multiselectable": { "defaultValue": null, "description": "Indicates that the user may select more than one item from the current selectable descendants.", "name": "aria-multiselectable", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-orientation": { "defaultValue": null, "description": "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.", "name": "aria-orientation", "required": false, "type": { "name": "\"horizontal\" | \"vertical\"" } }, "aria-owns": { "defaultValue": null, "description": "Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.\n@see aria-controls.", "name": "aria-owns", "required": false, "type": { "name": "string" } }, "aria-placeholder": { "defaultValue": null, "description": "Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\nA hint could be a sample value or a brief description of the expected format.", "name": "aria-placeholder", "required": false, "type": { "name": "string" } }, "aria-posinset": { "defaultValue": null, "description": "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-setsize.", "name": "aria-posinset", "required": false, "type": { "name": "number" } }, "aria-pressed": { "defaultValue": null, "description": "Indicates the current \"pressed\" state of toggle buttons.\n@see aria-checked\n@see aria-selected.", "name": "aria-pressed", "required": false, "type": { "name": "boolean | \"false\" | \"true\" | \"mixed\"" } }, "aria-readonly": { "defaultValue": null, "description": "Indicates that the element is not editable, but is otherwise operable.\n@see aria-disabled.", "name": "aria-readonly", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-relevant": { "defaultValue": null, "description": "Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.\n@see aria-atomic.", "name": "aria-relevant", "required": false, "type": { "name": "\"additions\" | \"additions text\" | \"all\" | \"removals\" | \"text\"" } }, "aria-required": { "defaultValue": null, "description": "Indicates that user input is required on the element before a form may be submitted.", "name": "aria-required", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-roledescription": { "defaultValue": null, "description": "Defines a human-readable, author-localized description for the role of an element.", "name": "aria-roledescription", "required": false, "type": { "name": "string" } }, "aria-rowcount": { "defaultValue": null, "description": "Defines the total number of rows in a table, grid, or treegrid.\n@see aria-rowindex.", "name": "aria-rowcount", "required": false, "type": { "name": "number" } }, "aria-rowindex": { "defaultValue": null, "description": "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.\n@see aria-rowcount\n@see aria-rowspan.", "name": "aria-rowindex", "required": false, "type": { "name": "number" } }, "aria-rowspan": { "defaultValue": null, "description": "Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-rowindex\n@see aria-colspan.", "name": "aria-rowspan", "required": false, "type": { "name": "number" } }, "aria-selected": { "defaultValue": null, "description": "Indicates the current \"selected\" state of various widgets.\n@see aria-checked\n@see aria-pressed.", "name": "aria-selected", "required": false, "type": { "name": "boolean | \"false\" | \"true\"" } }, "aria-setsize": { "defaultValue": null, "description": "Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-posinset.", "name": "aria-setsize", "required": false, "type": { "name": "number" } }, "aria-sort": { "defaultValue": null, "description": "Indicates if items in a table or grid are sorted in ascending or descending order.", "name": "aria-sort", "required": false, "type": { "name": "\"none\" | \"ascending\" | \"descending\" | \"other\"" } }, "aria-valuemax": { "defaultValue": null, "description": "Defines the maximum allowed value for a range widget.", "name": "aria-valuemax", "required": false, "type": { "name": "number" } }, "aria-valuemin": { "defaultValue": null, "description": "Defines the minimum allowed value for a range widget.", "name": "aria-valuemin", "required": false, "type": { "name": "number" } }, "aria-valuenow": { "defaultValue": null, "description": "Defines the current value for a range widget.\n@see aria-valuetext.", "name": "aria-valuenow", "required": false, "type": { "name": "number" } }, "aria-valuetext": { "defaultValue": null, "description": "Defines the human readable text alternative of aria-valuenow for a range widget.", "name": "aria-valuetext", "required": false, "type": { "name": "string" } }, "classes": { "defaultValue": null, "description": "Override or extend the styles applied to the component.", "name": "classes", "required": false, "type": { "name": "Partial<Record<SvgIconClassKey, string>>" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["atoms/icons/index.tsx#SettingsIcon"] = { docgenInfo: exports.SettingsIcon.__docgenInfo, name: "SettingsIcon", path: "atoms/icons/index.tsx#SettingsIcon" };
}
catch (__react_docgen_typescript_loader_error) { }


/***/ }),

/***/ "./atoms/input/async-select.stories.tsx":
/*!**********************************************!*\
  !*** ./atoms/input/async-select.stories.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const storybook_1 = __webpack_require__(/*! ../../storybook */ "./storybook/index.tsx");
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const _1 = __webpack_require__(/*! ./ */ "./atoms/input/index.tsx");
const addon_knobs_1 = __webpack_require__(/*! @connexta/ace/@storybook/addon-knobs */ "./node_modules/@connexta/ace/@storybook/addon-knobs.tsx");
const addon_actions_1 = __webpack_require__(/*! @connexta/ace/@storybook/addon-actions */ "./node_modules/@connexta/ace/@storybook/addon-actions.tsx");
const stories = storybook_1.storiesOf('Components | Input', module);
stories.add('Async Select', () => {
    const debounceInMsKnob = addon_knobs_1.number('Debounce (ms)', 500);
    const networkInMs = addon_knobs_1.number('Network Time (ms)', 1000);
    const loadOptions = (input, callback) => {
        const suggestions = [
            { label: 'Person 1', value: 'value 1' },
            { label: 'Person 2', value: 'value 2' },
            { label: 'Person 3', value: 'value 3' },
            { label: 'Person 4', value: 'value 4' },
        ];
        new Promise(resolve => {
            addon_actions_1.action('Making Network Request')();
            setTimeout(() => {
                addon_actions_1.action('Network Request Resolved with: ')(suggestions);
                resolve(suggestions);
            }, networkInMs);
        }).then(result => callback(result));
    };
    return (React.createElement("div", { style: { maxWidth: '30%' } },
        React.createElement(_1.AsyncSelect, { label: "Choose an option", debounce: debounceInMsKnob, onInputChange: (value) => {
                addon_actions_1.action('onInputChange')(value);
            }, onChange: (value) => {
                addon_actions_1.action('onChange')(value);
            }, loadOptions: loadOptions })));
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/@storybook/core/node_modules/webpack/buildin/module.js */ "./node_modules/@storybook/core/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./atoms/input/autocomplete.tsx":
/*!**************************************!*\
  !*** ./atoms/input/autocomplete.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const clsx_1 = __importDefault(__webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js"));
const creatable_1 = __importDefault(__webpack_require__(/*! react-select/creatable */ "./node_modules/react-select/creatable/dist/react-select.browser.esm.js"));
const async_creatable_1 = __importDefault(__webpack_require__(/*! react-select/async-creatable */ "./node_modules/react-select/async-creatable/dist/react-select.browser.esm.js"));
const async_1 = __importDefault(__webpack_require__(/*! react-select/async */ "./node_modules/react-select/async/dist/react-select.browser.esm.js"));
const styles_1 = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
const Typography_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js"));
const TextField_1 = __importDefault(__webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js"));
const Paper_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js"));
const Chip_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Chip */ "./node_modules/@material-ui/core/esm/Chip/index.js"));
const MenuItem_1 = __importDefault(__webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js"));
const Cancel_1 = __importDefault(__webpack_require__(/*! @material-ui/icons/Cancel */ "./node_modules/@material-ui/icons/Cancel.js"));
const _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
const useStyles = styles_1.makeStyles(theme => ({
    input: {
        display: 'flex',
        padding: 0,
        height: 'auto',
    },
    valueContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flex: 1,
        alignItems: 'center',
        overflow: 'hidden',
    },
    chip: {
        margin: theme.spacing(0.5, 0.25),
    },
    chipFocused: {
        backgroundColor: styles_1.emphasize(theme.palette.type === 'light'
            ? theme.palette.grey[300]
            : theme.palette.grey[700], 0.08),
    },
    noOptionsMessage: {
        padding: theme.spacing(1, 2),
    },
    singleValue: {
        fontSize: 16,
    },
    placeholder: {
        position: 'absolute',
        left: 2,
        bottom: 6,
        fontSize: 16,
    },
    paper: {
        position: 'absolute',
        zIndex: 1,
        marginTop: theme.spacing(1),
        left: 0,
        right: 0,
    },
    divider: {
        height: theme.spacing(2),
    },
}));
function NoOptionsMessage(props) {
    return (React.createElement(Typography_1.default, Object.assign({ color: "textSecondary", className: props.selectProps.classes.noOptionsMessage }, props.innerProps), props.children));
}
function inputComponent(_a) {
    var { inputRef } = _a, props = __rest(_a, ["inputRef"]);
    return React.createElement("div", Object.assign({ ref: inputRef }, props));
}
function Control(props) {
    const { children, innerProps, innerRef, selectProps: { classes, TextFieldProps }, } = props;
    return (React.createElement(TextField_1.default, Object.assign({ fullWidth: true, InputProps: {
            inputComponent,
            inputProps: Object.assign({ className: classes.input, ref: innerRef, children }, innerProps),
        } }, TextFieldProps)));
}
function Option(props) {
    return (React.createElement(MenuItem_1.default, Object.assign({ ref: props.innerRef, selected: props.isFocused, component: "div", style: {
            fontWeight: props.isSelected ? 500 : 400,
        } }, props.innerProps), props.children));
}
function Placeholder(props) {
    const { selectProps, innerProps = {}, children } = props;
    return (React.createElement(Typography_1.default, Object.assign({ color: "textSecondary", className: selectProps.classes.placeholder }, innerProps), children));
}
function SingleValue(props) {
    return (React.createElement(Typography_1.default, Object.assign({ className: props.selectProps.classes.singleValue }, props.innerProps), props.children));
}
function ValueContainer(props) {
    return (React.createElement("div", { className: props.selectProps.classes.valueContainer }, props.children));
}
function MultiValue(props) {
    return (React.createElement(Chip_1.default, { tabIndex: -1, label: props.children, className: clsx_1.default(props.selectProps.classes.chip, {
            [props.selectProps.classes.chipFocused]: props.isFocused,
        }), onDelete: props.removeProps.onClick, deleteIcon: React.createElement(Cancel_1.default, Object.assign({}, props.removeProps)) }));
}
function Menu(props) {
    return (React.createElement(Paper_1.default, Object.assign({ square: true, className: props.selectProps.classes.paper }, props.innerProps), props.children));
}
const components = {
    Control,
    Menu,
    MultiValue,
    NoOptionsMessage,
    Option,
    Placeholder,
    SingleValue,
    ValueContainer,
};
/**
 * Very important note when using async options: Because `onInputChange` for some reason is an 'interceptor' rather than a handler that ignores
 * the callback's return value (https://github.com/JedWatson/react-select/issues/1760), if you inline the method like
 * <CreatableSelect onInputChange={(value) => handleValue(value)}
 * and handleValue is an asynchronous function, it will attempt to alter the input value with the return value of handleValue, which will
 * immediately be a promise, causing CreatableSelect to throw an error (in my case `str.replace is not a function`)
 *
 * TLDR: You must not use the shorthand arrow syntax to auto return.
 * <CreatableSelect onInputChange={(value) => {handleValue(value)}} would work without issues.
 */
exports.WrappedCreatableSelect = (props) => {
    const classes = useStyles();
    const theme = styles_1.useTheme();
    const selectStyles = {
        input: (base) => (Object.assign({}, base, { color: theme.palette.text.primary, '& input': {
                font: 'inherit',
            } })),
    };
    const { label, styles } = props, baseProps = __rest(props, ["label", "styles"]);
    return (React.createElement(creatable_1.default, Object.assign({ components: components, classes: classes, styles: Object.assign({}, selectStyles), TextFieldProps: {
            label,
            InputLabelProps: {
                htmlFor: 'react-select-multiple',
                shrink: true,
            },
        } }, baseProps)));
};
exports.WrappedAsyncCreatableSelect = (props) => {
    const classes = useStyles();
    const theme = styles_1.useTheme();
    const selectStyles = {
        input: (base) => (Object.assign({}, base, { color: theme.palette.text.primary, '& input': {
                font: 'inherit',
            } })),
    };
    const { label, styles, loadOptions, debounce = 0 } = props, baseProps = __rest(props, ["label", "styles", "loadOptions", "debounce"]);
    const debouncedLoadOptions = _.debounce(loadOptions, debounce);
    return (React.createElement(async_creatable_1.default, Object.assign({ loadOptions: debouncedLoadOptions, components: components, classes: classes, styles: Object.assign({}, selectStyles), TextFieldProps: {
            label,
            InputLabelProps: {
                htmlFor: 'react-select-multiple',
                shrink: true,
            },
        } }, baseProps)));
};
exports.WrappedAsyncSelect = (props) => {
    const classes = useStyles();
    const theme = styles_1.useTheme();
    const selectStyles = {
        input: (base) => (Object.assign({}, base, { color: theme.palette.text.primary, '& input': {
                font: 'inherit',
            } })),
    };
    const { label, styles, debounce, loadOptions, components: customComponents } = props, baseProps = __rest(props, ["label", "styles", "debounce", "loadOptions", "components"]);
    const debouncedLoadOptions = _.debounce(loadOptions, debounce);
    return (React.createElement(async_1.default, Object.assign({ loadOptions: debouncedLoadOptions, components: Object.assign({}, components, customComponents), classes: classes, styles: Object.assign({}, selectStyles), TextFieldProps: {
            label,
            InputLabelProps: {
                htmlFor: 'react-select',
                shrink: true,
            },
        } }, baseProps)));
};
try {
    // @ts-ignore
    exports.WrappedCreatableSelect.displayName = "WrappedCreatableSelect";
    // @ts-ignore
    exports.WrappedCreatableSelect.__docgenInfo = { "description": "Very important note when using async options: Because `onInputChange` for some reason is an 'interceptor' rather than a handler that ignores\nthe callback's return value (https://github.com/JedWatson/react-select/issues/1760), if you inline the method like\n<CreatableSelect onInputChange={(value) => handleValue(value)}\nand handleValue is an asynchronous function, it will attempt to alter the input value with the return value of handleValue, which will\nimmediately be a promise, causing CreatableSelect to throw an error (in my case `str.replace is not a function`)\n\nTLDR: You must not use the shorthand arrow syntax to auto return.\n<CreatableSelect onInputChange={(value) => {handleValue(value)}} would work without issues.", "displayName": "WrappedCreatableSelect", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["atoms/input/autocomplete.tsx#WrappedCreatableSelect"] = { docgenInfo: exports.WrappedCreatableSelect.__docgenInfo, name: "WrappedCreatableSelect", path: "atoms/input/autocomplete.tsx#WrappedCreatableSelect" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    exports.WrappedAsyncCreatableSelect.displayName = "WrappedAsyncCreatableSelect";
    // @ts-ignore
    exports.WrappedAsyncCreatableSelect.__docgenInfo = { "description": "", "displayName": "WrappedAsyncCreatableSelect", "props": { "debounce": { "defaultValue": null, "description": "Time in ms to debounce load options call.", "name": "debounce", "required": false, "type": { "name": "number" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["atoms/input/autocomplete.tsx#WrappedAsyncCreatableSelect"] = { docgenInfo: exports.WrappedAsyncCreatableSelect.__docgenInfo, name: "WrappedAsyncCreatableSelect", path: "atoms/input/autocomplete.tsx#WrappedAsyncCreatableSelect" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    exports.WrappedAsyncSelect.displayName = "WrappedAsyncSelect";
    // @ts-ignore
    exports.WrappedAsyncSelect.__docgenInfo = { "description": "", "displayName": "WrappedAsyncSelect", "props": { "debounce": { "defaultValue": null, "description": "Time in ms to debounce load options call.", "name": "debounce", "required": false, "type": { "name": "number" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["atoms/input/autocomplete.tsx#WrappedAsyncSelect"] = { docgenInfo: exports.WrappedAsyncSelect.__docgenInfo, name: "WrappedAsyncSelect", path: "atoms/input/autocomplete.tsx#WrappedAsyncSelect" };
}
catch (__react_docgen_typescript_loader_error) { }


/***/ }),

/***/ "./atoms/input/checkbox.tsx":
/*!**********************************!*\
  !*** ./atoms/input/checkbox.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const Checkbox_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js"));
const styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
exports.WrappedCheckbox = styled_components_1.default(React.forwardRef((props, ref) => {
    return React.createElement(Checkbox_1.default, Object.assign({}, props, { ref: ref }));
})) ``;


/***/ }),

/***/ "./atoms/input/form-control.tsx":
/*!**************************************!*\
  !*** ./atoms/input/form-control.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const FormControl_1 = __importDefault(__webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js"));
const FormControlLabel_1 = __importDefault(__webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js"));
const FormGroup_1 = __importDefault(__webpack_require__(/*! @material-ui/core/FormGroup */ "./node_modules/@material-ui/core/esm/FormGroup/index.js"));
const FormHelperText_1 = __importDefault(__webpack_require__(/*! @material-ui/core/FormHelperText */ "./node_modules/@material-ui/core/esm/FormHelperText/index.js"));
const FormLabel_1 = __importDefault(__webpack_require__(/*! @material-ui/core/FormLabel */ "./node_modules/@material-ui/core/esm/FormLabel/index.js"));
const styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
exports.WrappedFormControl = styled_components_1.default(React.forwardRef((props, ref) => {
    return React.createElement(FormControl_1.default, Object.assign({}, props, { ref: ref }));
})) ``;
exports.WrappedFormControlLabel = styled_components_1.default(React.forwardRef((props, ref) => {
    return React.createElement(FormControlLabel_1.default, Object.assign({}, props, { ref: ref }));
})) ``;
exports.WrappedFormGroup = styled_components_1.default(React.forwardRef((props, ref) => {
    return React.createElement(FormGroup_1.default, Object.assign({}, props, { ref: ref }));
})) ``;
exports.WrappedFormHelperText = styled_components_1.default(React.forwardRef((props, ref) => {
    return React.createElement(FormHelperText_1.default, Object.assign({}, props, { ref: ref }));
})) ``;
exports.WrappedFormLabel = styled_components_1.default(React.forwardRef((props, ref) => {
    return React.createElement(FormLabel_1.default, Object.assign({}, props, { ref: ref }));
})) ``;


/***/ }),

/***/ "./atoms/input/index.tsx":
/*!*******************************!*\
  !*** ./atoms/input/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var text_1 = __webpack_require__(/*! ./text */ "./atoms/input/text.tsx");
exports.TextField = text_1.WrappedTextField;
var select_1 = __webpack_require__(/*! ./select */ "./atoms/input/select.tsx");
exports.Select = select_1.WrappedSelect;
exports.MenuItem = select_1.WrappedMenuItem;
exports.OutlinedSelect = select_1.OutlinedSelect;
var label_1 = __webpack_require__(/*! ./label */ "./atoms/input/label.tsx");
exports.InputLabel = label_1.WrappedInputLabel;
var input_1 = __webpack_require__(/*! ./input */ "./atoms/input/input.tsx");
exports.OutlinedInput = input_1.WrappedOutlinedInput;
var input_base_1 = __webpack_require__(/*! ./input-base */ "./atoms/input/input-base.tsx");
exports.InputBase = input_base_1.WrappedInputBase;
var form_control_1 = __webpack_require__(/*! ./form-control */ "./atoms/input/form-control.tsx");
exports.FormControl = form_control_1.WrappedFormControl;
exports.FormControlLabel = form_control_1.WrappedFormControlLabel;
exports.FormGroup = form_control_1.WrappedFormGroup;
exports.FormHelperText = form_control_1.WrappedFormHelperText;
exports.FormLabel = form_control_1.WrappedFormLabel;
var radio_1 = __webpack_require__(/*! ./radio */ "./atoms/input/radio.tsx");
exports.RadioGroup = radio_1.WrappedRadioGroup;
exports.Radio = radio_1.WrappedRadio;
var checkbox_1 = __webpack_require__(/*! ./checkbox */ "./atoms/input/checkbox.tsx");
exports.Checkbox = checkbox_1.WrappedCheckbox;
var autocomplete_1 = __webpack_require__(/*! ./autocomplete */ "./atoms/input/autocomplete.tsx");
exports.CreatableSelect = autocomplete_1.WrappedCreatableSelect;
exports.AsyncCreatableSelect = autocomplete_1.WrappedAsyncCreatableSelect;
exports.AsyncSelect = autocomplete_1.WrappedAsyncSelect;


/***/ }),

/***/ "./atoms/input/input-base.tsx":
/*!************************************!*\
  !*** ./atoms/input/input-base.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const InputBase_1 = __importDefault(__webpack_require__(/*! @material-ui/core/InputBase */ "./node_modules/@material-ui/core/esm/InputBase/index.js"));
const styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
exports.WrappedInputBase = styled_components_1.default(React.forwardRef((props, ref) => {
    return React.createElement(InputBase_1.default, Object.assign({}, props, { ref: ref }));
})) ``;


/***/ }),

/***/ "./atoms/input/input.stories.tsx":
/*!***************************************!*\
  !*** ./atoms/input/input.stories.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const storybook_1 = __webpack_require__(/*! ../../storybook */ "./storybook/index.tsx");
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const _1 = __webpack_require__(/*! ./ */ "./atoms/input/index.tsx");
const addon_knobs_1 = __webpack_require__(/*! @connexta/ace/@storybook/addon-knobs */ "./node_modules/@connexta/ace/@storybook/addon-knobs.tsx");
const addon_actions_1 = __webpack_require__(/*! @connexta/ace/@storybook/addon-actions */ "./node_modules/@connexta/ace/@storybook/addon-actions.tsx");
const stories = storybook_1.storiesOf('Components | Input', module);
stories.add('AutoComplete', () => {
    const [selectValues, setSelectValues] = React.useState([]);
    const [suggestions, setSuggestions] = React.useState([]);
    return (React.createElement("div", { style: { maxWidth: '30%' } },
        React.createElement(_1.CreatableSelect, { isMulti: true, value: selectValues, onChange: (values) => setSelectValues(values), onInputChange: () => {
                setSuggestions([
                    {
                        label: 'Group 1',
                        options: [{ label: 'Person 1', value: 'value 1' }],
                    },
                    {
                        label: 'Group 2',
                        options: [{ label: 'Person 2', value: 'value 2' }],
                    },
                ]);
            }, options: suggestions })));
});
stories.add('AutoComplete (Async)', () => {
    const [selectValues, setSelectValues] = React.useState([]);
    const debounceInMsKnob = addon_knobs_1.number('Debounce (ms)', 500);
    const networkInMs = addon_knobs_1.number('Network Time (ms)', 1000);
    const getOptions = (input, callback) => {
        const suggestions = [
            {
                label: 'Group 1',
                options: [{ label: 'Person 1', value: 'value 1' }],
            },
            {
                label: 'Group 2',
                options: [{ label: 'Person 2', value: 'value 2' }],
            },
            {
                label: 'Group 3',
                options: [{ label: 'Person 2', value: 'value 2' }],
            },
        ];
        new Promise(resolve => {
            addon_actions_1.action('Making Network Request')();
            setTimeout(() => {
                addon_actions_1.action('Network Request Resolved with: ')(suggestions);
                resolve(suggestions);
            }, networkInMs);
        }).then(result => callback(result));
    };
    return (React.createElement("div", { style: { maxWidth: '30%' } },
        React.createElement(_1.AsyncCreatableSelect, { isMulti: true, value: selectValues, onChange: (values) => setSelectValues(values), loadOptions: getOptions, debounce: debounceInMsKnob })));
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/@storybook/core/node_modules/webpack/buildin/module.js */ "./node_modules/@storybook/core/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./atoms/input/input.tsx":
/*!*******************************!*\
  !*** ./atoms/input/input.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const OutlinedInput_1 = __importDefault(__webpack_require__(/*! @material-ui/core/OutlinedInput */ "./node_modules/@material-ui/core/esm/OutlinedInput/index.js"));
const styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
exports.WrappedOutlinedInput = styled_components_1.default(React.forwardRef((props, ref) => {
    return React.createElement(OutlinedInput_1.default, Object.assign({}, props, { ref: ref }));
})) ``;


/***/ }),

/***/ "./atoms/input/label.tsx":
/*!*******************************!*\
  !*** ./atoms/input/label.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const InputLabel_1 = __importDefault(__webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js"));
const styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
exports.WrappedInputLabel = styled_components_1.default(React.forwardRef((props, ref) => {
    return React.createElement(InputLabel_1.default, Object.assign({}, props, { ref: ref }));
})) ``;


/***/ }),

/***/ "./atoms/input/radio.tsx":
/*!*******************************!*\
  !*** ./atoms/input/radio.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const Radio_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Radio */ "./node_modules/@material-ui/core/esm/Radio/index.js"));
const RadioGroup_1 = __importDefault(__webpack_require__(/*! @material-ui/core/RadioGroup */ "./node_modules/@material-ui/core/esm/RadioGroup/index.js"));
const styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
exports.WrappedRadio = styled_components_1.default(React.forwardRef((props, ref) => {
    return React.createElement(Radio_1.default, Object.assign({}, props, { ref: ref }));
})) ``;
exports.WrappedRadioGroup = styled_components_1.default(React.forwardRef((props, ref) => {
    return React.createElement(RadioGroup_1.default, Object.assign({}, props, { ref: ref }));
})) ``;


/***/ }),

/***/ "./atoms/input/select.stories.tsx":
/*!****************************************!*\
  !*** ./atoms/input/select.stories.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const addon_knobs_1 = __webpack_require__(/*! @connexta/ace/@storybook/addon-knobs */ "./node_modules/@connexta/ace/@storybook/addon-knobs.tsx");
const storybook_1 = __webpack_require__(/*! ../../storybook */ "./storybook/index.tsx");
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const _1 = __webpack_require__(/*! ./ */ "./atoms/input/index.tsx");
const stories = storybook_1.storiesOf('Components | Select', module);
stories.add('OutlinedSelect', () => {
    const [value, setValue] = React.useState();
    const margin = addon_knobs_1.select('Margin', {
        Normal: 'normal',
        Dense: 'dense',
        None: 'none',
    }, 'outlined');
    return (React.createElement(_1.FormControl, { variant: "outlined", margin: margin, style: { minWidth: '100px' } },
        React.createElement(_1.OutlinedSelect, { value: value, onChange: e => setValue(e.target.value), label: "Select" },
            React.createElement(_1.MenuItem, { value: '' }, "Reset"),
            React.createElement(_1.MenuItem, { value: '1' }, "Choice 1"),
            React.createElement(_1.MenuItem, { value: '2' }, "Choice 2"))));
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/@storybook/core/node_modules/webpack/buildin/module.js */ "./node_modules/@storybook/core/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./atoms/input/select.tsx":
/*!********************************!*\
  !*** ./atoms/input/select.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const Select_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js"));
const MenuItem_1 = __importDefault(__webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js"));
const styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
const _1 = __webpack_require__(/*! ./ */ "./atoms/input/index.tsx");
exports.WrappedSelect = styled_components_1.default(React.forwardRef((props, ref) => {
    return React.createElement(Select_1.default, Object.assign({}, props, { ref: ref }));
})) ``;
exports.WrappedMenuItem = styled_components_1.default(React.forwardRef((props, ref) => {
    //@ts-ignore
    return React.createElement(MenuItem_1.default, Object.assign({}, props, { ref: ref }));
})) ``;
exports.OutlinedSelect = styled_components_1.default(React.forwardRef((props, ref) => {
    const inputLabelRef = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabelRef.current.offsetWidth);
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement(_1.InputLabel, { ref: inputLabelRef }, props.label),
        React.createElement(Select_1.default, Object.assign({}, props, { input: React.createElement(_1.OutlinedInput, { labelWidth: labelWidth }), ref: ref }), props.children)));
})) ``;


/***/ }),

/***/ "./atoms/input/text.tsx":
/*!******************************!*\
  !*** ./atoms/input/text.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const TextField_1 = __importDefault(__webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js"));
const styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
exports.WrappedTextField = styled_components_1.default(React.forwardRef((props, ref) => {
    return React.createElement(TextField_1.default, Object.assign({}, props, { ref: ref }));
})) ``;


/***/ }),

/***/ "./atoms/modal/index.tsx":
/*!*******************************!*\
  !*** ./atoms/modal/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var modal_1 = __webpack_require__(/*! ./modal */ "./atoms/modal/modal.tsx");
exports.Modal = modal_1.WrappedModal;
exports.ControlledModal = modal_1.ControlledModal;
exports.ModalHeader = modal_1.ModalHeader;


/***/ }),

/***/ "./atoms/modal/modal.stories.tsx":
/*!***************************************!*\
  !*** ./atoms/modal/modal.stories.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const storybook_1 = __webpack_require__(/*! ../../storybook */ "./storybook/index.tsx");
const _1 = __webpack_require__(/*! ./ */ "./atoms/modal/index.tsx");
const button_1 = __webpack_require__(/*! ../button */ "./atoms/button/index.tsx");
const stories = storybook_1.storiesOf('Components | Modal', module);
stories.add('Single Modal', () => {
    return (React.createElement(_1.ControlledModal, { modalChildren: childrenProps => {
            return (React.createElement(React.Fragment, null,
                React.createElement(_1.ModalHeader, null, 'Modal Header'),
                React.createElement("div", null, "Modal Content"),
                React.createElement(button_1.Button, { onClick: () => childrenProps.setOpen(false) }, "Close Modal")));
        } }, renderProps => {
        return (React.createElement(button_1.Button, { onClick: () => renderProps.setOpen(true) }, "Open Modal"));
    }));
});
stories.add('Two Modals', () => {
    return (React.createElement(_1.ControlledModal, { modalChildren: modalOneChildrenProps => {
            return (React.createElement(React.Fragment, null,
                React.createElement(_1.ModalHeader, null, 'Modal One Header'),
                React.createElement("div", null, "Modal One Content"),
                React.createElement(button_1.Button, { onClick: () => modalOneChildrenProps.setOpen(false) }, "Close Modal")));
        } }, topModalRenderProps => {
        return (React.createElement(React.Fragment, null,
            React.createElement(_1.ControlledModal, { modalChildren: modalTwoChildrenProps => {
                    return (React.createElement(React.Fragment, null,
                        React.createElement(_1.ModalHeader, null, 'Modal Two Header'),
                        React.createElement("div", null, "Modal Two Content"),
                        React.createElement(button_1.Button, { onClick: () => modalTwoChildrenProps.setOpen(false) }, "Close Modal")));
                } }, bottomModalRenderProps => {
                return (React.createElement(React.Fragment, null,
                    React.createElement(button_1.Button, { onClick: () => topModalRenderProps.setOpen(true) }, "Open Modal One"),
                    React.createElement(button_1.Button, { onClick: () => bottomModalRenderProps.setOpen(true) }, "Open Modal Two")));
            })));
    }));
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/@storybook/core/node_modules/webpack/buildin/module.js */ "./node_modules/@storybook/core/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./atoms/modal/modal.tsx":
/*!*******************************!*\
  !*** ./atoms/modal/modal.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const Modal_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Modal */ "./node_modules/@material-ui/core/esm/Modal/index.js"));
const paper_1 = __webpack_require__(/*! ../paper */ "./atoms/paper/index.tsx");
const typography_1 = __webpack_require__(/*! ../typography */ "./atoms/typography/index.tsx");
const divider_1 = __webpack_require__(/*! ../divider */ "./atoms/divider/index.tsx");
const button_1 = __webpack_require__(/*! ../button */ "./atoms/button/index.tsx");
const icons_1 = __webpack_require__(/*! ../icons */ "./atoms/icons/index.tsx");
const grid_1 = __webpack_require__(/*! ../grid */ "./atoms/grid/index.tsx");
const styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
exports.WrappedModal = styled_components_1.default(React.forwardRef((props, ref) => {
    return React.createElement(Modal_1.default, Object.assign({}, props, { ref: ref }));
})) ``;
const CustomPaper = styled_components_1.default(paper_1.Paper) `
  min-width: 20vw;
  margin: 100px auto auto auto;
  padding: 10px;
  max-height: calc(100% - 200px);
  overflow: auto;
  position: relative;
  max-width: ${({ width }) => (width ? width : '70vw')};
`;
const HeaderTitle = styled_components_1.default(typography_1.Typography) `
  flex-grow: 1;
`;
const ModalContext = React.createContext({
    setOpen: () => { },
    onClose: () => { },
});
exports.ModalHeader = ({ children }) => {
    const modalContext = React.useContext(ModalContext);
    return (React.createElement(React.Fragment, null,
        React.createElement(grid_1.Grid, { container: true, alignItems: "center", wrap: "nowrap", style: {
                padding: '10px 0px',
            } },
            React.createElement(grid_1.Grid, { item: true },
                React.createElement(button_1.Button, { onClick: () => {
                        modalContext.onClose({}, 'escapeKeyDown');
                    }, style: { visibility: 'hidden' } },
                    React.createElement(icons_1.CloseIcon, null))),
            React.createElement(grid_1.Grid, { item: true, style: { width: '100%' } },
                React.createElement(HeaderTitle, { variant: "h5", align: "center" }, children)),
            React.createElement(grid_1.Grid, { item: true },
                React.createElement(button_1.Button, { onClick: () => {
                        modalContext.onClose({}, 'escapeKeyDown');
                    } },
                    React.createElement(icons_1.CloseIcon, null)))),
        React.createElement(divider_1.Divider, { style: { margin: '0px -10px 20px -10px' } })));
};
exports.ControlledModal = ({ children, modalChildren, width, defaultOpen = false, modalProps, paperProps, }) => {
    const [open, setOpen] = React.useState(defaultOpen);
    const onClose = modalProps && modalProps.onClose ? modalProps.onClose : () => setOpen(false);
    return (React.createElement(React.Fragment, null,
        children({ setOpen }),
        React.createElement(ModalContext.Provider, { value: {
                setOpen,
                onClose,
            } },
            React.createElement(Modal_1.default, Object.assign({ open: open, onClose: onClose }, modalProps),
                React.createElement(React.Fragment, null,
                    React.createElement(CustomPaper, Object.assign({ width: width }, paperProps), modalChildren({ setOpen })))))));
};
try {
    // @ts-ignore
    exports.ModalHeader.displayName = "ModalHeader";
    // @ts-ignore
    exports.ModalHeader.__docgenInfo = { "description": "", "displayName": "ModalHeader", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["atoms/modal/modal.tsx#ModalHeader"] = { docgenInfo: exports.ModalHeader.__docgenInfo, name: "ModalHeader", path: "atoms/modal/modal.tsx#ModalHeader" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    exports.ControlledModal.displayName = "ControlledModal";
    // @ts-ignore
    exports.ControlledModal.__docgenInfo = { "description": "", "displayName": "ControlledModal", "props": { "width": { "defaultValue": null, "description": "CSS Width to use for the modal. i.e. 100%, 10px, 40vw", "name": "width", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["atoms/modal/modal.tsx#ControlledModal"] = { docgenInfo: exports.ControlledModal.__docgenInfo, name: "ControlledModal", path: "atoms/modal/modal.tsx#ControlledModal" };
}
catch (__react_docgen_typescript_loader_error) { }


/***/ }),

/***/ "./atoms/paper/index.tsx":
/*!*******************************!*\
  !*** ./atoms/paper/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var paper_1 = __webpack_require__(/*! ./paper */ "./atoms/paper/paper.tsx");
exports.Paper = paper_1.WrappedPaper;


/***/ }),

/***/ "./atoms/paper/paper.tsx":
/*!*******************************!*\
  !*** ./atoms/paper/paper.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const Paper_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js"));
const styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
exports.WrappedPaper = styled_components_1.default(React.forwardRef((props, ref) => {
    return React.createElement(Paper_1.default, Object.assign({}, props, { ref: ref }));
})) ``;


/***/ }),

/***/ "./atoms/pickers/index.tsx":
/*!*********************************!*\
  !*** ./atoms/pickers/index.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var keyboard_date_time_picker_1 = __webpack_require__(/*! ./keyboard-date-time-picker */ "./atoms/pickers/keyboard-date-time-picker.tsx");
exports.KeyboardDateTimePicker = keyboard_date_time_picker_1.WrappedKeyboardDateTimePicker;


/***/ }),

/***/ "./atoms/pickers/keyboard-date-time-picker.stories.tsx":
/*!*************************************************************!*\
  !*** ./atoms/pickers/keyboard-date-time-picker.stories.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const addon_knobs_1 = __webpack_require__(/*! @connexta/ace/@storybook/addon-knobs */ "./node_modules/@connexta/ace/@storybook/addon-knobs.tsx");
const storybook_1 = __webpack_require__(/*! ../../storybook */ "./storybook/index.tsx");
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const _1 = __webpack_require__(/*! ./ */ "./atoms/pickers/index.tsx");
const stories = storybook_1.storiesOf('Components | Date Time', module);
stories.add('KeyboardDateTimePicker', () => {
    const [value, setValue] = React.useState(null);
    const variant = addon_knobs_1.select('Variant', {
        Dialog: 'dialog',
        Inline: 'inline',
        Static: 'static',
    }, 'dialog');
    const inputVariant = addon_knobs_1.select('Input Variant', {
        Outlined: 'outlined',
        Standard: 'standard',
        Filled: 'filled',
    }, 'outlined');
    const margin = addon_knobs_1.select('Margin', {
        Normal: 'normal',
        Dense: 'dense',
        None: 'none',
    }, 'outlined');
    const format = addon_knobs_1.text('Date Format', 'DD MMMM YYYY h:mm a Z');
    return (React.createElement(_1.KeyboardDateTimePicker, { style: { width: '400px' }, variant: variant, inputVariant: inputVariant, margin: margin, format: format, label: "Choose Date", onChange: (v) => setValue(v), value: value }));
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/@storybook/core/node_modules/webpack/buildin/module.js */ "./node_modules/@storybook/core/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./atoms/pickers/keyboard-date-time-picker.tsx":
/*!*****************************************************!*\
  !*** ./atoms/pickers/keyboard-date-time-picker.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const pickers_1 = __webpack_require__(/*! @material-ui/pickers */ "./node_modules/@material-ui/pickers/esm/index.js");
const styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
const pickers_2 = __webpack_require__(/*! @material-ui/pickers */ "./node_modules/@material-ui/pickers/esm/index.js");
const moment_1 = __importDefault(__webpack_require__(/*! @date-io/moment */ "./node_modules/@date-io/moment/build/index.esm.js"));
const _KeyboardDateTimePicker = styled_components_1.default(pickers_1.KeyboardDateTimePicker) `
  .MuiInputBase-adornedEnd {
    padding-right: 0px;
  }
`;
exports.WrappedKeyboardDateTimePicker = styled_components_1.default(React.forwardRef((props, ref) => {
    return (React.createElement(pickers_2.MuiPickersUtilsProvider, { utils: moment_1.default },
        React.createElement(_KeyboardDateTimePicker, Object.assign({}, props, { ref: ref }))));
})) ``;


/***/ }),

/***/ "./atoms/progress/circular.tsx":
/*!*************************************!*\
  !*** ./atoms/progress/circular.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const CircularProgress_1 = __importDefault(__webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js"));
const styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
exports.WrappedCircularProgress = styled_components_1.default(React.forwardRef((props, ref) => {
    return React.createElement(CircularProgress_1.default, Object.assign({}, props, { ref: ref }));
})) ``;


/***/ }),

/***/ "./atoms/progress/index.tsx":
/*!**********************************!*\
  !*** ./atoms/progress/index.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var linear_1 = __webpack_require__(/*! ./linear */ "./atoms/progress/linear.tsx");
exports.LinearProgress = linear_1.WrappedLinearProgress;
var circular_1 = __webpack_require__(/*! ./circular */ "./atoms/progress/circular.tsx");
exports.CircularProgress = circular_1.WrappedCircularProgress;


/***/ }),

/***/ "./atoms/progress/linear.tsx":
/*!***********************************!*\
  !*** ./atoms/progress/linear.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const LinearProgress_1 = __importDefault(__webpack_require__(/*! @material-ui/core/LinearProgress */ "./node_modules/@material-ui/core/esm/LinearProgress/index.js"));
const styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
exports.WrappedLinearProgress = styled_components_1.default(React.forwardRef((props, ref) => {
    return React.createElement(LinearProgress_1.default, Object.assign({}, props, { ref: ref }));
})) ``;


/***/ }),

/***/ "./atoms/progress/progress.stories.tsx":
/*!*********************************************!*\
  !*** ./atoms/progress/progress.stories.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const storybook_1 = __webpack_require__(/*! ../../storybook */ "./storybook/index.tsx");
const _1 = __webpack_require__(/*! ./ */ "./atoms/progress/index.tsx");
const addon_knobs_1 = __webpack_require__(/*! @connexta/ace/@storybook/addon-knobs */ "./node_modules/@connexta/ace/@storybook/addon-knobs.tsx");
const stories = storybook_1.storiesOf('Components | Progress', module);
stories.add('Circular Progress', () => {
    const color = addon_knobs_1.select('Color', {
        Inherit: 'inherit',
        Primary: 'primary',
        Secondary: 'secondary',
    }, 'default');
    const variant = addon_knobs_1.select('Variant', {
        Indeterminate: 'indeterminate',
        Determinate: 'determinate',
        Static: 'static',
    }, 'indeterminate');
    const size = addon_knobs_1.number('Size', 100);
    const value = addon_knobs_1.number('Value', 50);
    const thickness = addon_knobs_1.number('Thickness', 2);
    return (React.createElement(_1.CircularProgress, { variant: variant, color: color, size: size, value: value, thickness: thickness }));
});
stories.add('Linear Progress', () => {
    return React.createElement(_1.LinearProgress, null);
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/@storybook/core/node_modules/webpack/buildin/module.js */ "./node_modules/@storybook/core/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./atoms/snackbar/index.tsx":
/*!**********************************!*\
  !*** ./atoms/snackbar/index.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var snackbar_1 = __webpack_require__(/*! ./snackbar */ "./atoms/snackbar/snackbar.tsx");
exports.Snackbar = snackbar_1.WrappedSnackbar;
exports.SnackbarContent = snackbar_1.WrappedSnackbarContent;
var snackbar_provider_1 = __webpack_require__(/*! ./snackbar.provider */ "./atoms/snackbar/snackbar.provider.tsx");
exports.SnackbarProvider = snackbar_provider_1.SnackbarProvider;
exports.withSnackbar = snackbar_provider_1.withSnackbar;
exports.useSnackbar = snackbar_provider_1.useSnackbar;
exports.generateDismissSnackbarAction = snackbar_provider_1.generateDismissSnackbarAction;


/***/ }),

/***/ "./atoms/snackbar/snackbar.provider.tsx":
/*!**********************************************!*\
  !*** ./atoms/snackbar/snackbar.provider.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const notistack_1 = __webpack_require__(/*! notistack */ "./node_modules/notistack/build/index.js");
const button_1 = __webpack_require__(/*! ../button */ "./atoms/button/index.tsx");
const icons_1 = __webpack_require__(/*! ../icons */ "./atoms/icons/index.tsx");
exports.SnackbarProvider = notistack_1.SnackbarProvider;
exports.withSnackbar = notistack_1.withSnackbar;
exports.useSnackbar = notistack_1.useSnackbar;
exports.generateDismissSnackbarAction = ({ closeSnackbar, }) => {
    return (key) => {
        return (React.createElement(button_1.Button, { variant: "text", color: "inherit", onClick: () => {
                closeSnackbar(key);
            } },
            React.createElement(icons_1.CloseIcon, null)));
    };
};
try {
    // @ts-ignore
    exports.withSnackbar.displayName = "withSnackbar";
    // @ts-ignore
    exports.withSnackbar.__docgenInfo = { "description": "", "displayName": "withSnackbar", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["atoms/snackbar/snackbar.provider.tsx#withSnackbar"] = { docgenInfo: exports.withSnackbar.__docgenInfo, name: "withSnackbar", path: "atoms/snackbar/snackbar.provider.tsx#withSnackbar" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    exports.generateDismissSnackbarAction.displayName = "generateDismissSnackbarAction";
    // @ts-ignore
    exports.generateDismissSnackbarAction.__docgenInfo = { "description": "", "displayName": "generateDismissSnackbarAction", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["atoms/snackbar/snackbar.provider.tsx#generateDismissSnackbarAction"] = { docgenInfo: exports.generateDismissSnackbarAction.__docgenInfo, name: "generateDismissSnackbarAction", path: "atoms/snackbar/snackbar.provider.tsx#generateDismissSnackbarAction" };
}
catch (__react_docgen_typescript_loader_error) { }


/***/ }),

/***/ "./atoms/snackbar/snackbar.stories.tsx":
/*!*********************************************!*\
  !*** ./atoms/snackbar/snackbar.stories.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const storybook_1 = __webpack_require__(/*! ../../storybook */ "./storybook/index.tsx");
const _1 = __webpack_require__(/*! ./ */ "./atoms/snackbar/index.tsx");
const addon_knobs_1 = __webpack_require__(/*! @connexta/ace/@storybook/addon-knobs */ "./node_modules/@connexta/ace/@storybook/addon-knobs.tsx");
const button_1 = __webpack_require__(/*! ../button */ "./atoms/button/index.tsx");
const react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const grid_1 = __webpack_require__(/*! ../grid */ "./atoms/grid/index.tsx");
const icons_1 = __webpack_require__(/*! ../icons */ "./atoms/icons/index.tsx");
const stories = storybook_1.storiesOf('Components | Snackbar', module);
stories.add('Default', () => {
    const [message, setMessage] = react_1.useState(null);
    const variant = addon_knobs_1.select('Variant', {
        Success: 'success',
        Error: 'error',
    }, 'success');
    return (React.createElement("div", null,
        React.createElement(button_1.Button, { onClick: () => setMessage('Snackbar Message'), variant: "outlined" }, "Trigger Snackbar"),
        React.createElement(_1.Snackbar, { open: message != null, anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'left',
            } },
            React.createElement(_1.SnackbarContent, { variant: variant, message: React.createElement(grid_1.Grid, { container: true, alignItems: "center" },
                    variant == 'error' && (React.createElement(icons_1.ErrorIcon, { style: {
                            marginRight: '10px',
                        } })),
                    message), action: React.createElement(button_1.Button, { onClick: () => setMessage(null), color: "inherit" },
                    React.createElement(icons_1.CloseIcon, null)) }))));
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/@storybook/core/node_modules/webpack/buildin/module.js */ "./node_modules/@storybook/core/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./atoms/snackbar/snackbar.tsx":
/*!*************************************!*\
  !*** ./atoms/snackbar/snackbar.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const Snackbar_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/esm/Snackbar/index.js"));
const SnackbarContent_1 = __importDefault(__webpack_require__(/*! @material-ui/core/SnackbarContent */ "./node_modules/@material-ui/core/esm/SnackbarContent/index.js"));
const styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
const styles_1 = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
exports.WrappedSnackbar = styled_components_1.default(React.forwardRef((props, ref) => {
    return React.createElement(Snackbar_1.default, Object.assign({}, props, { ref: ref }));
})) ``;
exports.WrappedSnackbarContent = styled_components_1.default(React.forwardRef((props, ref) => {
    const theme = styles_1.useTheme();
    const { variant = 'error' } = props, baseProps = __rest(props, ["variant"]);
    let style = {};
    if (variant === 'error') {
        style = {
            background: theme.palette.error.dark,
            color: theme.palette.error.contrastText,
        };
    }
    else if (variant === 'success') {
        style = {
            background: theme.palette.primary.dark,
            color: theme.palette.primary.contrastText,
        };
    }
    return React.createElement(SnackbarContent_1.default, Object.assign({}, baseProps, { ref: ref, style: style }));
})) ``;


/***/ }),

/***/ "./atoms/theme/index.tsx":
/*!*******************************!*\
  !*** ./atoms/theme/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var provider_1 = __webpack_require__(/*! ./provider */ "./atoms/theme/provider.tsx");
exports.ThemeProvider = provider_1.Provider;


/***/ }),

/***/ "./atoms/theme/provider.tsx":
/*!**********************************!*\
  !*** ./atoms/theme/provider.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const styles_1 = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
const styled_components_1 = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
const styled_components_2 = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
const polished_1 = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.es.js");
const dark = {
    primary: '#69E1E8',
};
const light = {
    primary: '#3c6dd5',
};
const GlobalStyles = styled_components_2.createGlobalStyle `
      a {
        color: ${props => props.palette.primary.dark};
      }
      .MuiToolbar-root a,
      .MuiToolbar-root .MuiBreadcrumbs-separator {
        color: ${props => props.palette.getContrastText(props.palette.primary.main)};
      }
      .MuiDrawer-root a {
        color: ${props => props.palette.getContrastText(props.palette.background.paper)};
      }
      @media (min-width: 600px) {
        .MuiListItemIcon-root {
          margin-left: 8px;
        }
      }
      .lm_header {
        z-index: 0 !important;
      }
      [role="tooltip"] {
        z-index: 101 !important;
        pointer-events: all !important;
      }
    `;
exports.Provider = ({ children }) => {
    const styledTheme = React.useContext(styled_components_1.ThemeContext);
    const paperColor = polished_1.lighten(0.1, styledTheme.backgroundContent);
    const theme = styles_1.createMuiTheme({
        palette: {
            type: styledTheme.theme === 'dark' ? 'dark' : 'light',
            primary: {
                main: styledTheme.theme === 'dark' ? dark.primary : light.primary,
            },
            background: {
                paper: paperColor,
            },
        },
        typography: {
            h6: {
                fontSize: '1.2rem',
            },
            fontSize: 16,
        },
        overrides: {
            MuiCardActionArea: styles_1.createStyles({
                root: {
                    height: 'auto',
                },
            }),
            MuiCardHeader: styles_1.createStyles({
                content: {
                    minWidth: '0px',
                },
            }),
            MuiTooltip: styles_1.createStyles({
                tooltip: {
                    fontSize: '1rem',
                },
            }),
        },
        zIndex: {
            mobileStepper: 101,
            appBar: 101,
            drawer: 101,
            modal: 101,
            snackbar: 101,
            tooltip: 101,
        },
    });
    return (React.createElement(React.Fragment, null,
        React.createElement(GlobalStyles, Object.assign({}, theme)),
        React.createElement(styles_1.MuiThemeProvider, { theme: theme }, children)));
};
try {
    // @ts-ignore
    exports.Provider.displayName = "Provider";
    // @ts-ignore
    exports.Provider.__docgenInfo = { "description": "", "displayName": "Provider", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["atoms/theme/provider.tsx#Provider"] = { docgenInfo: exports.Provider.__docgenInfo, name: "Provider", path: "atoms/theme/provider.tsx#Provider" };
}
catch (__react_docgen_typescript_loader_error) { }


/***/ }),

/***/ "./atoms/timeline-circles-deprecated/timeline-circles.stories.tsx":
/*!************************************************************************!*\
  !*** ./atoms/timeline-circles-deprecated/timeline-circles.stories.tsx ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_1 = __webpack_require__(/*! @connexta/ace/@storybook/react */ "./node_modules/@connexta/ace/@storybook/react.tsx");
const addon_knobs_1 = __webpack_require__(/*! @connexta/ace/@storybook/addon-knobs */ "./node_modules/@connexta/ace/@storybook/addon-knobs.tsx");
const timeline_circles_1 = __importDefault(__webpack_require__(/*! ./timeline-circles */ "./atoms/timeline-circles-deprecated/timeline-circles.tsx"));
const randomDate = (start, end) => new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0, v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
const createRandomData = (start, sampleSize) => {
    let samples = [];
    for (let i = 0; i < sampleSize; i++) {
        const date = randomDate(start, new Date());
        const id = uuidv4();
        samples.push({
            date,
            data: {
                id,
                title: 'title - ' + id,
            },
            selected: false,
            id: id,
        });
    }
    return samples;
};
const createDuplicateData = (date, sampleSize) => {
    let samples = [];
    for (let i = 0; i < sampleSize; i++) {
        const id = uuidv4();
        samples.push({
            date,
            data: {
                id,
                title: 'title - ' + id,
            },
            selected: false,
            id: id,
        });
    }
    return samples;
};
class TimelineExample extends React.Component {
    constructor(props) {
        super(props);
        this.Tooltip = (points) => {
            return React.createElement("pre", null, JSON.stringify(points, null, 2));
        };
        this.onClick = (toMatch) => {
            var newPoints = this.state.points.map(p => {
                if (toMatch.some(match => match.id === p.id)) {
                    p.selected = !p.selected;
                }
                return p;
            });
            this.setState({ points: newPoints });
            alert('ON CLICK: \n' + JSON.stringify(toMatch));
        };
        const points = createRandomData(new Date(1990, 0, 1), 100).concat(createDuplicateData(new Date(1980, 0, 1), 20));
        this.state = {
            points,
        };
    }
    render() {
        return (React.createElement(timeline_circles_1.default, { value: this.state.points, onClick: this.onClick, style: {
                border: '1px solid grey',
            }, Tooltip: this.Tooltip }, "Playground"));
    }
}
react_1.storiesOf('Deprecated|Timeline (Circles)', module)
    .addDecorator(addon_knobs_1.withKnobs)
    .add('playground', () => React.createElement(TimelineExample, null));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/@storybook/core/node_modules/webpack/buildin/module.js */ "./node_modules/@storybook/core/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./atoms/timeline-circles-deprecated/timeline-circles.tsx":
/*!****************************************************************!*\
  !*** ./atoms/timeline-circles-deprecated/timeline-circles.tsx ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const d3 = __importStar(__webpack_require__(/*! d3 */ "./node_modules/d3/index.js"));
const button_1 = __webpack_require__(/*! ../button */ "./atoms/button/index.tsx");
const styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
const clustering = __webpack_require__(/*! density-clustering */ "./node_modules/density-clustering/lib/index.js");
const dbscan = new clustering.DBSCAN();
const POINT_RADIUS = 7;
const CLUSTER_RADIUS = POINT_RADIUS * 2;
const CLUSTER_NEIGHBOR_RADIUS = CLUSTER_RADIUS;
const POINTS_TO_FORM_CLUSTER = 2;
const Y_VALUE = 0;
const SVG_HEIGHT = 300;
const xAxisScale = (points) => {
    const dates = points.map(p => p.date.getTime());
    const min = Math.min(...dates);
    const max = Math.max(...dates);
    const offset = (max - min) * 0.05;
    return {
        min: new Date(min - offset),
        max: new Date(max + offset),
    };
};
const Root = styled_components_1.default.div `
  position: relative;
`;
const ZoomArea = styled_components_1.default.div `
  position: absolute;
  top: 10px;
  right: 10px;

  button + button {
    margin-left: 10px;
  }
`;
const createClusterPoint = (points) => {
    const pointCxs = points.map(p => p.cx);
    const max = Math.max(...pointCxs);
    const min = Math.min(...pointCxs);
    const radius = (max - min + 2 * POINT_RADIUS) / 2;
    const cx = min - POINT_RADIUS + radius;
    // All points are on the y axis, no need to take average
    const cy = points[0].cy;
    return {
        cx,
        cy,
        radius,
        points: points.map(p => p.point),
        selected: points.every(p => p.point.selected),
    };
};
const isPointInCluster = (clusters, point) => {
    return clusters.some(cluster => {
        return cluster.points.map(p => p.id).indexOf(point.id) > -1;
    });
};
// const Circles = React.memo(({ points, onClick, onHover, margin }: any) => {
const Circles = ({ points, onClick, onHover, margin }) => {
    // results are clusters of indices relating to array of coordiantes passed in
    const clusters = dbscan.run(points.map((p) => [p.cx, p.cy]), CLUSTER_NEIGHBOR_RADIUS, POINTS_TO_FORM_CLUSTER);
    const newClusterPoints = clusters
        .filter(cluster => cluster.length > 1)
        .map(cluster => cluster.map(i => points[i]))
        .map(points => createClusterPoint(points));
    const handleHover = (points) => (e) => {
        onHover({ x: e.pageX, y: e.pageY, points });
    };
    const transform = 'translate(' + -margin.left + ',0)';
    const pointIdsInCluster = [];
    return (React.createElement(React.Fragment, null,
        newClusterPoints.map((cluster, i) => {
            pointIdsInCluster.push(...cluster.points.map(p => p.id));
            const rectX = cluster.cx -
                5 -
                (cluster.points.length.toString().length / 2) * 10 +
                'px';
            const rectY = 30 + cluster.cy - 16 + 'px';
            const rectWidth = cluster.points.length.toString().length * 10 + 10;
            const rectHeight = 20;
            const textX = cluster.cx - (cluster.points.length.toString().length * 10) / 2 + 'px';
            const textY = 30 + cluster.cy + 'px';
            const selectedClusterProps = cluster.selected
                ? {
                    stroke: 'black',
                    strokeWidth: '3px',
                    strokeOpacity: '100%',
                }
                : {};
            const props = {
                transform,
                onMouseMove: handleHover(cluster.points),
                onMouseOut: () => onHover([]),
                onClick: () => onClick(cluster.points),
            };
            return (React.createElement(React.Fragment, { key: i },
                React.createElement("circle", Object.assign({ fill: "grey", fillOpacity: "0.25", cx: cluster.cx, cy: cluster.cy, r: cluster.radius }, props, selectedClusterProps)),
                React.createElement("rect", Object.assign({ fill: "black", x: rectX, y: rectY, width: rectWidth, height: rectHeight }, props)),
                React.createElement("rect", Object.assign({ fill: "black", x: cluster.cx - 1 + 'px', y: 15 + cluster.cy - 16 + 'px', width: 2, height: 15 }, props)),
                React.createElement("text", Object.assign({ fill: "white", x: textX, y: textY, fontSize: "20" }, props), cluster.points.length)));
        }),
        points.map((point, i) => {
            var selectedClusters = newClusterPoints.filter(cluster => cluster.selected);
            var selectedCircleProps = {};
            if (point.point.selected &&
                !isPointInCluster(selectedClusters, point.point)) {
                selectedCircleProps = {
                    stroke: 'black',
                    strokeWidth: '3px',
                    strokeOpacity: '100%',
                };
            }
            return (React.createElement("circle", Object.assign({ key: i, fill: "gray", fillOpacity: "0.25", cx: point.cx, cy: point.cy, r: POINT_RADIUS, transform: transform, onMouseMove: handleHover([point.point]), onMouseOut: () => onHover([]), onClick: () => {
                    console.log(JSON.stringify(point.point));
                    onClick([point.point]);
                } }, selectedCircleProps)));
        })));
};
const margin = { top: 20, right: 20, bottom: 30, left: 40 };
class Timeline extends React.Component {
    constructor(props) {
        super(props);
        this.d3Ref = React.createRef();
        this.view = null;
        this.onHover = (e) => {
            const { x, y, points = [] } = e;
            if (points.length === 0) {
                this.setState({ tooltip: undefined });
            }
            else {
                this.setState({ tooltip: { x, y, points } });
            }
        };
        this.onZoom = () => {
            const timelineContainer = d3.select('.timeline');
            let t = d3.zoomTransform(timelineContainer.node());
            // TODO - No idea why k ends up being -1, this is a hacky fix :(
            //0 means nothing will display, -1 inverts
            if (t.k === -1) {
                console.log('t.k was -1');
                // @ts-ignore
                t.k = 1;
            }
            // @ts-ignore
            const newXScale = t.rescaleX(this.x);
            // @ts-ignore
            const newYScale = t.rescaleY(this.y);
            // @ts-ignore
            const xAxis = d3.axisBottom(newXScale);
            // @ts-ignore
            const yAxis = d3.axisLeft(newYScale);
            d3.select('.axis--x').call(xAxis.scale(newXScale));
            d3.select('.axis--y').call(yAxis.scale(newYScale));
            const points = this.props.value.map(point => {
                const cx = newXScale(point.date);
                const cy = newYScale(Y_VALUE);
                return { cx, cy, point };
            });
            this.setState({ points });
        };
        this.onResize = () => {
            this.initD3();
            this.setState({ resizeToggle: !this.state.resizeToggle });
        };
        this.state = {
            width: 0,
            height: 0,
            points: [],
            tooltip: undefined,
            resizeToggle: false,
        };
    }
    zoomIn() { }
    zoomOut() { }
    initD3() {
        if (this.d3Ref.current === null) {
            return;
        }
        const { width, height } = this.d3Ref
            .current.getBoundingClientRect();
        this.setState({ width, height });
        const x = d3.scaleTime().range([0, width]);
        const y = d3.scaleLinear().range([height, 0]);
        // @ts-ignore
        this.x = x;
        // @ts-ignore
        this.y = y;
        // setup axises
        const range = xAxisScale(this.props.value);
        const xAxisMin = range.min;
        const xAxisMax = range.max;
        x.domain([xAxisMin, xAxisMax]);
        y.domain([0, Y_VALUE]);
        const xAxis = d3.axisBottom(x);
        const yAxis = d3.axisLeft(y);
        d3.select('.axis--x').call(xAxis);
        d3.select('.axis--y').call(yAxis);
        const points = this.props.value.map(point => {
            const cx = x(point.date);
            const cy = y(Y_VALUE);
            return { cx, cy, point };
        });
        this.setState({ points });
        const zoomMin = 1;
        const zoomMax = (xAxisMax.getTime() - xAxisMin.getTime()) / (1000 * 60);
        const zoom = d3
            .zoom()
            .scaleExtent([zoomMin, zoomMax])
            .translateExtent([[0, 0], [width, height]])
            .extent([[0, 0], [width, height]])
            .on('zoom', this.onZoom);
        const timelineContainer = d3.select('.timeline');
        // TODO: try and use onZoom here instead
        this.zoomIn = () => {
            zoom.scaleBy(timelineContainer.transition().duration(500), 2);
        };
        // TODO: try and use onZoom here instead
        this.zoomOut = () => {
            zoom.scaleBy(timelineContainer.transition().duration(500), 0.5);
        };
        d3.select('.timeline')
            .call(zoom)
            .transition()
            .duration(1500)
            .call(zoom.transform, d3.zoomIdentity
            .scale(width / (x(xAxisMin) - x(xAxisMax)))
            .translate(-x(xAxisMin), 0));
    }
    componentDidMount() {
        this.initD3();
        window.addEventListener('resize', this.onResize);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize);
    }
    render() {
        const width = this.state.width - margin.left - margin.right;
        const height = SVG_HEIGHT - margin.top - margin.bottom;
        const { Tooltip = () => React.createElement("div", null) } = this.props;
        return (React.createElement(Root, { style: this.props.style, className: this.props.className },
            React.createElement(ZoomArea, null,
                React.createElement(button_1.Button, { onClick: this.zoomIn, variant: "outlined" }, "+"),
                React.createElement(button_1.Button, { onClick: this.zoomOut, variant: "outlined" }, "-")),
            React.createElement("div", { style: { flexDirection: 'column' } },
                this.state.tooltip !== undefined ? (React.createElement("div", { className: "tooltip", style: {
                        fillOpacity: 0.9,
                        position: 'fixed',
                        left: this.state.tooltip.x,
                        top: this.state.tooltip.y + 50,
                        pointerEvents: 'none',
                    } },
                    React.createElement(Tooltip, { points: this.state.tooltip === undefined
                            ? []
                            : this.state.tooltip.points }))) : null,
                React.createElement("svg", { ref: this.d3Ref, className: "timeline", height: SVG_HEIGHT, style: { width: '100%' } },
                    React.createElement("defs", null,
                        React.createElement("clipPath", { className: "clip" },
                            React.createElement("rect", { width: width, height: height }))),
                    React.createElement("g", { transform: 'translate(' + margin.left + ',' + margin.top + ')' },
                        React.createElement("g", { clipPath: "url(.clip)" },
                            React.createElement(Circles, { points: this.state.points, margin: margin, onClick: this.props.onClick, onHover: this.onHover })),
                        React.createElement("g", { className: "axis--x", transform: 'translate(0,' + height + ')' }),
                        React.createElement("g", { className: "axis--y", display: "none" }))))));
    }
}
exports.default = Timeline;
try {
    // @ts-ignore
    Timeline.displayName = "Timeline";
    // @ts-ignore
    Timeline.__docgenInfo = { "description": "", "displayName": "Timeline", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["atoms/timeline-circles-deprecated/timeline-circles.tsx#Timeline"] = { docgenInfo: Timeline.__docgenInfo, name: "Timeline", path: "atoms/timeline-circles-deprecated/timeline-circles.tsx#Timeline" };
}
catch (__react_docgen_typescript_loader_error) { }


/***/ }),

/***/ "./atoms/timeline/hooks.tsx":
/*!**********************************!*\
  !*** ./atoms/timeline/hooks.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const withinTimeScale = (newValues, timescale) => {
    const domain = timescale.domain();
    if (newValues.length === 0) {
        return true;
    }
    else if (newValues.length === 1) {
        return domain[0] < newValues[0] && newValues[0] < domain[1];
    }
    else if (newValues.length === 2) {
        return domain[0] < newValues[0] && newValues[1] < domain[1];
    }
    else {
        console.debug('selectionRange can have a maximum of two elements.');
        return false;
    }
};
exports.useSelectionRange = (defaultValues, timescale) => {
    const [values, setValues] = react_1.useState(defaultValues);
    const setSelectionRange = (newValues) => {
        if (withinTimeScale(newValues, timescale)) {
            setValues(newValues);
        }
    };
    return [values, setSelectionRange];
};


/***/ }),

/***/ "./atoms/timeline/index.tsx":
/*!**********************************!*\
  !*** ./atoms/timeline/index.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var timeline_1 = __webpack_require__(/*! ./timeline */ "./atoms/timeline/timeline.tsx");
exports.default = timeline_1.default;


/***/ }),

/***/ "./atoms/timeline/timeline.stories.tsx":
/*!*********************************************!*\
  !*** ./atoms/timeline/timeline.stories.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const addon_actions_1 = __webpack_require__(/*! @connexta/ace/@storybook/addon-actions */ "./node_modules/@connexta/ace/@storybook/addon-actions.tsx");
const addon_knobs_1 = __webpack_require__(/*! @connexta/ace/@storybook/addon-knobs */ "./node_modules/@connexta/ace/@storybook/addon-knobs.tsx");
const storybook_1 = __webpack_require__(/*! ../../storybook */ "./storybook/index.tsx");
const index_1 = __importDefault(__webpack_require__(/*! ./index */ "./atoms/timeline/index.tsx"));
const styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
const util_1 = __webpack_require__(/*! ./util */ "./atoms/timeline/util.tsx");
const stories = storybook_1.storiesOf('Components|Timeline', module).addParameters({
    info: `The TimelinePicker is a controlled component that can be used to select a time range. The TimelinePicker utilizies d3.js,
  and supports zooming and dragging as well as translation between timezones.`,
});
const ShowTimelineButton = styled_components_1.default.button `
  background-color: ${({ theme }) => theme.primaryColor};
  color: white;
`;
const renderDates = (dates, format, timezone) => {
    if (dates.length == 0) {
        return null;
    }
    else if (dates.length == 1) {
        return util_1.formatDate(dates[0], format, timezone);
    }
    else if (dates.length == 2) {
        return `${util_1.formatDate(dates[0], format, timezone)} ---------- ${util_1.formatDate(dates[1], format, timezone)}`;
    }
};
stories.add('Timeline with Data', () => {
    const numDataPoints = addon_knobs_1.number('Number of spaced data points to render', 2000);
    const testData = util_1.createTestData(numDataPoints);
    const modeKnob = addon_knobs_1.select('Initial Mode', {
        Selection: null,
        Single: 'single',
        Range: 'range',
    }, null);
    const [mode, setMode] = react_1.useState(modeKnob);
    const timezoneKnob = addon_knobs_1.select('Timezone', {
        UTC: 'Etc/UTC',
        '+7:00': 'Etc/GMT-7',
        '-12:00': 'Etc/GMT+12',
    }, 'Etc/UTC');
    const dateFormatKnob = addon_knobs_1.select('Date Format', {
        ISO: 'YYYY-MM-DD[T]HH:mm:ss.SSSZ',
        '24 Hour Standard': 'DD MMM YYYY HH:mm:ss.SSS Z',
        '12 Hour Standard': 'DD MMM YYYY h:mm:ss.SSS a Z',
    }, 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
    const minKnob = addon_knobs_1.date('Minimum Date', new Date('1980-01-01:00:00.000z'));
    const maxKnob = addon_knobs_1.date('Maximum Date', new Date());
    const [data, setData] = react_1.useState(testData);
    return (React.createElement(index_1.default, { min: new Date(minKnob), max: new Date(maxKnob), height: 300, mode: mode, format: dateFormatKnob, timezone: timezoneKnob, data: data, dateAttributeAliases: {
            created: 'Created',
            modified: 'Modified',
            published_date: 'Published',
        }, onCopy: (copiedValue) => addon_actions_1.action('clicked onCopy')(copiedValue), onSelect: (selectedData) => {
            addon_actions_1.action('onSelect')(selectedData);
            const selectedIds = selectedData.map(d => d.id);
            const newData = data.map(d => {
                d.selected = selectedIds.indexOf(d.id) !== -1;
                return d;
            });
            setData(newData);
        }, onDone: (selectionRange) => {
            addon_actions_1.action('clicked onDone')(selectionRange);
            setMode(undefined);
        } }));
});
stories.add('Conditional Render', () => {
    const numDataPoints = addon_knobs_1.number('Number of spaced data points to render', 2000);
    const testData = util_1.createTestData(numDataPoints);
    const modeKnob = addon_knobs_1.select('Initial Mode', {
        Single: 'single',
        Range: 'range',
    }, 'single');
    const [mode, setMode] = react_1.useState(modeKnob);
    const [showTimeline, setShowTimeline] = react_1.useState(true);
    const [timePicked, setTimePicked] = react_1.useState([]);
    const timezoneKnob = addon_knobs_1.select('Timezone', {
        UTC: 'Etc/UTC',
        '+5:00': 'Etc/GMT-5',
        '+7:00': 'Etc/GMT-7',
        '-7:00': 'Etc/GMT+7',
        '-12:00': 'Etc/GMT+12',
    }, 'Etc/GMT+7');
    const dateFormatKnob = addon_knobs_1.select('Date Format', {
        ISO: 'YYYY-MM-DD[T]HH:mm:ss.SSSZ',
        '24 Hour Standard': 'DD MMM YYYY HH:mm:ss.SSS Z',
        '12 Hour Standard': 'DD MMM YYYY h:mm:ss.SSS a Z',
    }, 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
    const minKnob = addon_knobs_1.date('Minimum Date', new Date('1980-01-01:00:00.000z'));
    const maxKnob = addon_knobs_1.date('Maximum Date', new Date());
    return (React.createElement("div", null,
        "Launch Time Picker: \u00A0",
        React.createElement(ShowTimelineButton, { onClick: () => {
                setShowTimeline(!showTimeline);
                setMode(modeKnob);
            } }, "T"),
        React.createElement("br", null),
        React.createElement("br", null),
        renderDates(timePicked, dateFormatKnob, timezoneKnob),
        showTimeline && (React.createElement(index_1.default, { min: new Date(minKnob), max: new Date(maxKnob), data: testData, height: 300, mode: mode, timezone: timezoneKnob, format: dateFormatKnob, heightOffset: 100, onCopy: (copiedValue) => addon_actions_1.action('clicked onCopy')(copiedValue), onDone: (selectionRange) => {
                setShowTimeline(false);
                addon_actions_1.action('clicked onDone')(selectionRange);
                setTimePicked(selectionRange);
                setMode(undefined);
            } }))));
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/@storybook/core/node_modules/webpack/buildin/module.js */ "./node_modules/@storybook/core/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./atoms/timeline/timeline.tsx":
/*!*************************************!*\
  !*** ./atoms/timeline/timeline.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const d3 = __importStar(__webpack_require__(/*! d3 */ "./node_modules/d3/index.js"));
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const tooltip_1 = __webpack_require__(/*! ./tooltip */ "./atoms/timeline/tooltip.tsx");
const util_1 = __webpack_require__(/*! ./util */ "./atoms/timeline/util.tsx");
const hooks_1 = __webpack_require__(/*! ./hooks */ "./atoms/timeline/hooks.tsx");
const _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
const styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
const input_1 = __webpack_require__(/*! ../input */ "./atoms/input/index.tsx");
const polished_1 = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.es.js");
const button_1 = __webpack_require__(/*! ../button */ "./atoms/button/index.tsx");
const polished_2 = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.es.js");
// Constants
const AXIS_MARGIN = 20;
const AXIS_HEIGHT = 15;
// Color Theme
const ContextRow = styled_components_1.default.div `
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;
const HoverLineText = styled_components_1.default.text `
  fill: ${({ theme }) => polished_2.readableColor(theme.backgroundContent)};
  font-family: 'Open Sans', sans-serif;
  pointer-events: none;
`;
const HoverLine = styled_components_1.default.line `
  stroke: ${({ theme }) => theme.primaryColor};
  stroke-width: 3;
  pointer-events: none;
`;
const MarkerHover = styled_components_1.default.g `
  :hover {
    cursor: ew-resize;
  }
`;
const MarkerLine = styled_components_1.default.line `
  stroke: ${(props) => !props.hidden
    ? polished_1.lighten(0.1, props.theme.primaryColor)
    : 'rgba(0, 0, 0, 0)'};
  stroke-width: ${(props) => (!props.hidden ? 2 : 18)};
`;
const TimelineButton = styled_components_1.default(button_1.Button) `
  display: flex;
  justify-content: center;
  font-family: 'Open Sans', sans-serif;
  min-width: 3rem;
  height: 3rem;

  ${({ icon }) => !icon &&
    `
      font-size: 1rem;
      padding: 0px 20px;
      margin-left: 15px !important;
    `} :hover {
  }

  :focus {
    outline: none;
  }
`;
const DateAttributeSelect = styled_components_1.default(input_1.Select) `
  margin: 10px;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
`;
const ButtonArea = styled_components_1.default.div `
  margin: 10px;
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;

  button {
    margin-left: 5px;
  }
`;
const Root = styled_components_1.default.div `
  display: flex;
  flex-direction: column;

  .brushBar {
    /* This will let you select/hover records behind area, but can't brush-drag area if it's set. */
    pointer-events: none;
    opacity: 0.5;

    /* If it's discovered that brush dragging is wanted more than hovering behind the highlighted brush area, 
    simply comment the above lines and uncomment this opacity */
    /* opacity: 0.1; */
    fill: ${({ theme }) => theme.primaryColor};
    display: none;

    :hover {
      cursor: move;
      fill: ${({ theme }) => theme.primaryColor};
      opacity: 0.5;
    }
  }

  .axis {
    color: ${({ theme }) => polished_2.readableColor(theme.backgroundContent)};
    font-size: 0.9rem;
    :hover {
      cursor: ew-resize;
    }
  }

  .selected {
    fill: ${({ theme }) => theme.primaryColor} !important;
  }

  .data {
    fill: ${({ theme: { theme } }) => theme === 'dark' ? polished_1.lighten(0.7, 'black') : polished_1.lighten(0.3, 'black')};
    fill-opacity: 0.7;
    :hover {
      stroke-width: 2px;
      stroke: ${({ theme }) => theme.primaryColor};
    }
  }
`;
const TimeText = styled_components_1.default.div `
  margin: 10px;
  font-family: 'Open Sans', sans-serif;
  text-align: center;

  br {
    line-height: 150%;
  }
`;
const Message = styled_components_1.default.span `
  font-family: 'Open Sans', sans-serif;
  margin: 10px;
  color: ${({ theme }) => polished_2.readableColor(theme.backgroundContent)};
`;
// Helper Methods
const generateTooltipMessage = (data) => {
    const titles = data.slice(0, 5).map(d => {
        return (React.createElement(React.Fragment, null,
            React.createElement("span", null, d),
            React.createElement("br", null)));
    });
    const otherResults = (React.createElement(React.Fragment, null,
        React.createElement("br", null),
        `+${data.length - 5} other results`));
    return (React.createElement(React.Fragment, null,
        titles,
        data.length > 5 && otherResults));
};
/**
 * Given a d3 selection, set the display to none.
 */
const hideElement = (element) => element.attr('style', 'display: none');
/**
 * Given a d3 selection, set the display to block.
 */
const showElement = (element) => element.attr('style', 'display: block');
/**
 * Domain is the minimum and maximum values that the scale contains.
 */
const getTimescaleFromWidth = (width, min = new Date('1980-01-01:00:00.000z'), max = new Date()) => {
    const timeScale = d3
        .scaleUtc()
        .domain([min, max])
        .nice();
    timeScale.range([AXIS_MARGIN, width - AXIS_MARGIN]);
    return timeScale;
};
const getPossibleDateAttributes = (timelineItems) => {
    return _(timelineItems)
        .map(d => d.attributes) //{created: {display: "Created", value: new Date()}}
        .flatMap(o => Object.keys(o)) //[created]
        .uniq()
        .value();
};
/*
 * TODOS
 * --------------------
 *
 * 1. On hover should work when the on hover is behind the area marker while still letting you brush drag (if possible)
 */
// Please see https://alignedleft.com/tutorials/d3/scales for more information about d3 scales.
exports.Timeline = (props) => {
    /**
     * The useRef Hook creates a variable that "holds on" to a value across rendering
     * passes. In this case it will hold our component's SVG DOM element. It's
     * initialized null and React will assign it later (see the return statement)
     */
    const rootRef = react_1.useRef(null);
    const d3ContainerRef = react_1.useRef(null);
    const hoverLineRef = react_1.useRef(null);
    const hoverLineTextRef = react_1.useRef(null);
    const leftMarkerRef = react_1.useRef(null);
    const rightMarkerRef = react_1.useRef(null);
    const brushBarRef = react_1.useRef(null);
    const { min, max } = props;
    const [width, setWidth] = react_1.useState(0);
    const height = props.height;
    const heightOffset = props.heightOffset ? props.heightOffset : 0;
    const possibleDateAttributes = getPossibleDateAttributes(props.data || []);
    const timescale = getTimescaleFromWidth(width, min, max);
    const [xScale, setXScale] = react_1.useState(() => timescale);
    const [xAxis, setXAxis] = react_1.useState(() => d3.axisBottom(xScale).tickSize(AXIS_HEIGHT));
    const [dataBuckets, setDataBuckets] = react_1.useState([]);
    const [tooltip, setTooltip] = react_1.useState();
    const [selectedDateAttribute, setSelectedDateAttribute] = react_1.useState(possibleDateAttributes[0] || undefined);
    react_1.useEffect(() => {
        if (selectedDateAttribute === undefined) {
            setSelectedDateAttribute(possibleDateAttributes[0]);
        }
    }, [possibleDateAttributes]);
    const [isDragging, setIsDragging] = react_1.useState(false);
    const [selectionRange, setSelectionRange] = hooks_1.useSelectionRange([], timescale);
    react_1.useEffect(() => {
        if (width != 0) {
            console.debug(`Width updated to ${width}`);
            setXScale(() => timescale);
        }
    }, [width]);
    react_1.useEffect(() => {
        console.debug(`xScale updated to ${xScale.range()}`);
        const [left, right] = xScale.range();
        if (left < right) {
            const newXAxis = xAxis.scale(xScale);
            setXAxis(() => newXAxis);
            d3.select('.axis--x').call(newXAxis);
        }
    }, [xScale]);
    react_1.useEffect(() => {
        if (rootRef.current) {
            // @ts-ignore
            const rect = rootRef.current.getBoundingClientRect();
            setWidth(rect.width);
        }
    }, [rootRef]);
    /**
     * Every 100 ms, poll to see the new parent rect width.
     * If the new parent rect width is different than current width, update the width.
     */
    react_1.useEffect(() => {
        const interval = setInterval(() => {
            if (rootRef.current) {
                //@ts-ignore
                const rect = rootRef.current.getBoundingClientRect();
                if (rect.width !== width) {
                    setWidth(rect.width);
                    clearInterval(interval);
                }
            }
        }, 100);
    }, [rootRef, width]);
    react_1.useEffect(() => {
        zoomBehavior.scaleTo(
        // @ts-ignore
        d3
            .select(d3ContainerRef.current)
            .transition()
            .duration(0), 1);
    }, [width]);
    const markerHeight = height - 70 - AXIS_HEIGHT - heightOffset;
    /**
     * When a zoom event is triggered, use the transform event to create a new xScale,
     * then create a new xAxis using the scale and update existing xAxis
     */
    const handleZoom = () => {
        // Tooltip sticks around without this.
        setTooltip(null);
        const transform = d3.event.transform;
        if (width != 0) {
            const newXScale = transform.rescaleX(timescale);
            setXScale(() => newXScale);
            const newXAxis = xAxis.scale(newXScale);
            setXAxis(() => newXAxis);
            // Apply the new xAxis
            d3.select('.axis--x').call(xAxis);
        }
    };
    const zoomBehavior = d3
        .zoom()
        .scaleExtent([1, 24 * 60 * 60]) // Allows selections down to the minute at full zoom
        .translateExtent([[0, 0], [width, height]])
        .extent([[0, 0], [width, height]])
        .filter(() => {
        // If event triggered below xAxis, let default zoom behavior handle it (allows panning by dragging on axis)
        console.debug('Click/Drag Event: ', d3.event);
        const axisOffset = heightOffset ? heightOffset - 50 : -10;
        if (d3.event.layerY > height + AXIS_MARGIN - AXIS_HEIGHT - axisOffset) {
            console.debug('Drag below xAxis, ignore');
            return true;
        }
        else {
            console.debug("Drag above xAxis, don't ignore");
        }
        const shouldFilterEvent = d3.event.type !== 'mousedown';
        if (!shouldFilterEvent) {
            console.debug('Ignoring event type: ', d3.event.type);
        }
        return shouldFilterEvent;
    })
        .on('zoom', handleZoom);
    const zoomIn = () => {
        zoomBehavior.scaleBy(
        // @ts-ignore
        d3
            .select(d3ContainerRef.current)
            .transition()
            .duration(750), 2);
    };
    const zoomOut = () => {
        zoomBehavior.scaleBy(
        // @ts-ignore
        d3
            .select(d3ContainerRef.current)
            .transition()
            .duration(750), 0.5);
    };
    react_1.useEffect(() => {
        /**
         * Range is the range of possible output values used in display.
         * Domain maps to Range
         * i.e. Dates map to Pixels
         */
        const renderInitialXAxis = () => {
            const svg = d3
                .select(d3ContainerRef.current)
                .attr('width', width)
                .attr('height', height);
            svg
                .select('.axis--x')
                .attr('transform', `translate(0 ${height -
                (AXIS_MARGIN + AXIS_HEIGHT + heightOffset)})`)
                .call(xAxis);
        };
        if (d3ContainerRef.current) {
            renderInitialXAxis();
            const container = d3.select(d3ContainerRef.current);
            //@ts-ignore
            container.call(zoomBehavior);
        }
    }, [height, width]);
    // Add mouse handlers to listen to d3 mouse events
    react_1.useEffect(() => {
        // When the d3Container mousemove event triggers, show the hover line
        d3.select(d3ContainerRef.current).on('mousemove', function () {
            const coord = d3.mouse(this);
            d3.select(hoverLineRef.current)
                .attr('transform', `translate(${coord[0]}, ${markerHeight})`)
                .attr('style', 'display: block');
            const hoverDate = util_1.convertDateToTimezoneDate(xScale.invert(coord[0]), props.format, props.timezone);
            const formattedDate = util_1.formatDate(hoverDate, props.format, props.timezone);
            const widthBuffer = 150;
            const maxX = width - widthBuffer;
            let xPos = coord[0];
            if (xPos < widthBuffer)
                xPos = widthBuffer;
            if (xPos > maxX)
                xPos = maxX;
            const yPos = 20;
            d3.select(hoverLineTextRef.current)
                .attr('transform', `translate(${xPos}, ${yPos})`)
                .attr('style', 'display: block')
                .attr('text-anchor', 'middle')
                .text(formattedDate);
        });
        // When the d3Container mouseleave event triggers, set the hoverValue to null and hide the hoverLine line
        d3.select(d3ContainerRef.current).on('mouseleave', function () {
            hideElement(d3.select(hoverLineRef.current));
            hideElement(d3.select(hoverLineTextRef.current));
        });
    }, [xScale, props.timezone, props.height]);
    // Render rectangles
    react_1.useEffect(() => {
        const min = xScale.range()[0];
        const max = xScale.range()[1];
        const NUM_BUCKETS = Math.round(width / 30); // 30 is just a constant that I found to look good.
        const bucketWidth = (max - min) / NUM_BUCKETS;
        const buckets = util_1.range(NUM_BUCKETS).map(i => ({
            x1: min + bucketWidth * i,
            x2: min + bucketWidth * (i + 1),
            items: [],
            selected: false,
        }));
        if (props.data && selectedDateAttribute !== undefined) {
            d3.selectAll('.data').remove();
            props.data.forEach(d => {
                const date = d.attributes[selectedDateAttribute];
                if (date == null) {
                    return;
                }
                const scaledDate = xScale(date);
                for (let i = 0; i < buckets.length; i++) {
                    const b = buckets[i];
                    if (b.x1 < scaledDate && scaledDate < b.x2) {
                        b.items.push(d);
                        if (d.selected) {
                            b.selected = true;
                        }
                        break;
                    }
                }
            });
            const mostItemsInABucket = Math.max(...buckets.map(b => b.items.length));
            const heightPerItem = (height - (heightOffset + 75)) / mostItemsInABucket;
            setDataBuckets(buckets);
            buckets.forEach((b, i) => {
                const rectangleHeight = b.items.length * heightPerItem;
                const x = (b.x1 + b.x2) / 2 - 15;
                const y = height -
                    rectangleHeight -
                    (AXIS_MARGIN + AXIS_HEIGHT + heightOffset);
                d3.select('.data-holder')
                    .append('rect')
                    .attr('class', `data ${b.selected ? 'selected' : ''}`)
                    .attr('width', bucketWidth - 5)
                    .attr('height', rectangleHeight)
                    .attr('id', i)
                    .attr('transform', `translate(${x}, ${y})`)
                    .append('rect');
            });
        }
    }, [props.data, xScale, selectedDateAttribute, width, height]);
    react_1.useEffect(() => {
        d3.select('.data-holder')
            .selectAll('.data')
            .on('mouseleave', function () {
            setTooltip(null);
        })
            .on('mousemove', function () {
            // @ts-ignore
            const id = d3.select(this).node().id;
            const x = d3.event.layerX;
            const y = d3.event.layerY;
            const tooltipInBounds = x <= width * 0.75;
            setTooltip({
                // If the tooltip will overflow off the timeline, set x to left of the cursor instead of right.
                x: tooltipInBounds ? x + 25 : x - width * 0.25,
                y: y - 20,
                message: props.renderTooltip
                    ? props.renderTooltip(dataBuckets[id].items)
                    : generateTooltipMessage(dataBuckets[id].items.map(d => d.id)),
            });
        });
    }, [dataBuckets]);
    // If dragging is finished, update selected results.
    react_1.useEffect(() => {
        if (!isDragging &&
            props.data &&
            selectedDateAttribute !== undefined &&
            !props.mode) {
            if (selectionRange.length == 2) {
                const x1 = xScale(selectionRange[0]);
                const x2 = xScale(selectionRange[1]);
                // Prefilter to only buckets we care about
                const bucketsContainingRelevantData = dataBuckets.filter(b => (x1 < b.x1 && b.x2 < x2) ||
                    (b.x1 < x1 && x1 < b.x2) ||
                    (b.x1 < x2 && x2 < b.x2));
                // Get the data inside those buckets that falls within the selection
                const dataToSelect = _.flatMap(bucketsContainingRelevantData, b => b.items).filter(d => util_1.dateWithinRange(d.attributes[selectedDateAttribute], selectionRange));
                props.onSelect && props.onSelect(dataToSelect);
            }
        }
    }, [isDragging]);
    react_1.useEffect(() => {
        /**
         *
         * Selection Drag does two things:
         * 1. When the user drags across the timeline, a range selection will be created.
         * 2. If the drag event is only 5 pixels or less from start to finish AND ends on a rect object,
         * assume that the user meant to click instead of drag, and properly trigger a click action on the rect.
         */
        const getSelectionDrag = () => {
            let clickStart;
            return d3
                .drag()
                .on('start', () => {
                clickStart = d3.event.x;
                const newLeftDate = util_1.convertDateToTimezoneDate(xScale.invert(clickStart), props.format, props.timezone);
                if (props.mode === 'single') {
                    setSelectionRange([newLeftDate]);
                }
                else {
                    setIsDragging(true);
                    hideElement(d3.select(hoverLineRef.current));
                    hideElement(d3.select(hoverLineTextRef.current));
                    setSelectionRange([newLeftDate]);
                }
            })
                // Set isDragging to false to trigger a selection update, additionally check if user meant to click.
                .on('end', () => {
                if (!props.mode) {
                    showElement(d3.select(hoverLineRef.current));
                    setIsDragging(false);
                    const clickDistance = clickStart - d3.event.x;
                    const sourceEvent = d3.event.sourceEvent;
                    if (Math.abs(clickDistance) < 5) {
                        const nodeName = sourceEvent.srcElement.nodeName;
                        setSelectionRange([]);
                        if (nodeName === 'rect' || nodeName === 'line') {
                            const x = d3.event.x;
                            const bucket = dataBuckets.find(b => b.x1 < x && x <= b.x2);
                            bucket && props.onSelect && props.onSelect(bucket.items);
                        }
                    }
                }
            })
                .on('drag', () => {
                if (props.mode !== 'single') {
                    const diff = d3.event.x - d3.event.subject.x;
                    const initialDate = util_1.convertDateToTimezoneDate(xScale.invert(clickStart), props.format, props.timezone);
                    let dragCurrent = clickStart + diff;
                    const dragDate = util_1.convertDateToTimezoneDate(xScale.invert(dragCurrent), props.format, props.timezone);
                    if (diff > 0) {
                        setSelectionRange([initialDate, dragDate]);
                    }
                    else {
                        setSelectionRange([dragDate, initialDate]);
                    }
                }
            });
        };
        d3.select(d3ContainerRef.current).call(getSelectionDrag());
    }, [dataBuckets, selectionRange, xScale, props.timezone]);
    react_1.useEffect(() => {
        /**
         * Creates the drag behavior used when selecting the left or right slider.
         *
         * Validation for sliders:
         * - Left slider cannot be within 10 pixels of the right slider.
         * - Right slider cannot be within 10 pixels of the left slider.
         *
         * @param slider - Which slider the drag behavior should affect.
         */
        const getEdgeDrag = (slider) => d3
            .drag()
            .on('start', () => {
            hideElement(d3.select(hoverLineRef.current));
            hideElement(d3.select(hoverLineTextRef.current));
            setIsDragging(true);
        })
            .on('end', () => setIsDragging(false))
            .on('drag', () => {
            const dragValue = xScale.invert(d3.event.x);
            const dateWithTimezone = util_1.convertDateToTimezoneDate(dragValue, props.format, props.timezone);
            const BUFFER = 10; // Buffer in pixels to keep sliders from overlapping/crossing
            if (slider === 'LEFT') {
                const maximumX = xScale(selectionRange[1]) - BUFFER;
                if (d3.event.x <= maximumX) {
                    setSelectionRange([dateWithTimezone, selectionRange[1]]);
                }
            }
            else if (slider === 'RIGHT') {
                const minimumX = xScale(selectionRange[0]) + BUFFER;
                if (d3.event.x >= minimumX) {
                    setSelectionRange([selectionRange[0], dateWithTimezone]);
                }
            }
        });
        d3.select(leftMarkerRef.current).call(getEdgeDrag('LEFT'));
        d3.select(rightMarkerRef.current).call(getEdgeDrag('RIGHT'));
    }, [xScale, selectionRange, props.timezone]);
    react_1.useEffect(() => {
        /**
         * Create the drag behavior used when selecting the middle area between a range.
         *
         * NOTE: This will not be used if .brushBar class has 'pointer-events: none' set, as the events will never be hit.
         */
        const getBrushDrag = () => d3
            .drag()
            .on('start', () => {
            setIsDragging(true);
            hideElement(d3.select(hoverLineRef.current));
            hideElement(d3.select(hoverLineTextRef.current));
        })
            .on('end', () => setIsDragging(false))
            .on('drag', () => {
            const value = d3.event.x - d3.event.subject.x;
            const currentLeft = xScale(selectionRange[0]);
            const currentRight = xScale(selectionRange[1]);
            const newLeft = currentLeft + value;
            const newRight = currentRight + value;
            const newLeftDate = util_1.convertDateToTimezoneDate(xScale.invert(newLeft), props.format, props.timezone);
            const newRightDate = util_1.convertDateToTimezoneDate(xScale.invert(newRight), props.format, props.timezone);
            setSelectionRange([newLeftDate, newRightDate]);
        });
        d3.select(brushBarRef.current).call(getBrushDrag());
    }, [xScale, selectionRange, props.timezone]);
    // When the selection range is changed or the scale changes update the left, right, and brush markers
    react_1.useEffect(() => {
        if (leftMarkerRef.current &&
            rightMarkerRef.current &&
            brushBarRef.current) {
            const leftMarker = d3.select(leftMarkerRef.current);
            const rightMarker = d3.select(rightMarkerRef.current);
            const brushBar = d3.select(brushBarRef.current);
            if (props.mode === 'single' && selectionRange.length === 1) {
                const leftMarker = d3.select(leftMarkerRef.current);
                const leftUtc = util_1.toUtc(selectionRange[0], props.format, props.timezone);
                leftMarker
                    .attr('transform', `translate(${xScale(leftUtc)}, ${markerHeight})`)
                    .attr('style', 'display: block');
            }
            else if (props.mode !== 'single' && selectionRange.length == 2) {
                const [leftValue, rightValue] = selectionRange;
                const leftUtc = util_1.toUtc(leftValue, props.format, props.timezone);
                const rightUtc = util_1.toUtc(rightValue, props.format, props.timezone);
                leftMarker
                    .attr('transform', `translate(${xScale(leftUtc)}, ${markerHeight})`)
                    .attr('style', 'display: block');
                rightMarker
                    .attr('transform', `translate(${xScale(rightUtc)}, ${markerHeight})`)
                    .attr('style', 'display: block');
                brushBar
                    .attr('transform', `translate(${xScale(leftUtc)},${markerHeight})`)
                    .attr('width', xScale(rightUtc) - xScale(leftUtc))
                    .attr('height', '50')
                    .attr('style', 'display: block');
            }
            else {
                hideElement(leftMarker);
                hideElement(rightMarker);
                hideElement(brushBar);
            }
        }
    }, [xScale, selectionRange, props.mode, props.height, props.timezone]);
    const renderCopyableDate = (date) => {
        const formattedDate = util_1.formatDate(date, props.format, props.timezone);
        return (React.createElement(React.Fragment, null,
            React.createElement("br", null),
            React.createElement(button_1.Button, { variant: "contained", onClick: () => {
                    const hiddenTextArea = document.createElement('textarea');
                    hiddenTextArea.innerText = formattedDate;
                    document.body.appendChild(hiddenTextArea);
                    hiddenTextArea.select();
                    document.execCommand('copy');
                    document.body.removeChild(hiddenTextArea);
                    props.onCopy && props.onCopy(formattedDate);
                } }, formattedDate)));
    };
    const renderContext = () => {
        const renderStartAndEnd = () => (React.createElement(React.Fragment, null,
            React.createElement(TimeText, null,
                React.createElement("b", null, "Start"),
                selectionRange[0] && renderCopyableDate(selectionRange[0])),
            React.createElement(TimeText, null,
                React.createElement("b", null, "End"),
                selectionRange[1] && renderCopyableDate(selectionRange[1]))));
        // Single States - Empty, Single Time
        if (props.mode === 'single') {
            if (!selectionRange[0]) {
                return (React.createElement(Message, null, "Click to select a time. Zoom with the scroll wheel."));
            }
            return (React.createElement(TimeText, null,
                React.createElement("b", null, "Time"),
                selectionRange[0] && renderCopyableDate(selectionRange[0])));
            // Range States - Empty, Range of Times
        }
        else if (props.mode === 'range') {
            if (!selectionRange[0]) {
                return (React.createElement(Message, null, "Drag to select a range. Zoom with the scroll wheel."));
            }
            return renderStartAndEnd();
            // Selection States - Empty, Start Time, Start + End Times
        }
        else {
            if (!selectionRange[0]) {
                return (React.createElement(Message, null, "Click to select a cluster of results. Zoom with the scroll wheel."));
            }
            return renderStartAndEnd();
        }
    };
    const lookupAlias = (attribute) => {
        const { dateAttributeAliases } = props;
        if (dateAttributeAliases && dateAttributeAliases[attribute]) {
            return dateAttributeAliases[attribute];
        }
        else {
            return attribute;
        }
    };
    return (React.createElement(Root, { ref: rootRef, style: { height: '100%' } },
        React.createElement("div", null,
            React.createElement(DateAttributeSelect, { visible: props.data && props.data.length > 0, variant: "outlined", onChange: (e) => setSelectedDateAttribute(e.target.value), value: selectedDateAttribute }, possibleDateAttributes.map((dateAttribute) => (React.createElement(input_1.MenuItem, { value: dateAttribute }, lookupAlias(dateAttribute)))))),
        tooltip && (React.createElement(tooltip_1.Tooltip, { message: tooltip.message, x: tooltip.x, y: tooltip.y })),
        React.createElement("svg", { ref: d3ContainerRef },
            React.createElement("g", { className: "data-holder" }),
            React.createElement("rect", { ref: brushBarRef, className: "brushBar" }),
            React.createElement("g", { ref: hoverLineRef, style: { display: 'none' } },
                React.createElement(HoverLine, { x1: "0", y1: "0", x2: "0", y2: "50" })),
            React.createElement(HoverLineText, { x: "0", y: "0", style: { display: 'none' }, ref: hoverLineTextRef }),
            React.createElement(MarkerHover, { ref: leftMarkerRef },
                React.createElement(MarkerLine, { x1: "0", y1: "0", x2: "0", y2: "50" }),
                React.createElement(MarkerLine, { x1: "0", y1: "0", x2: "0", y2: "50", hidden: true })),
            React.createElement(MarkerHover, { ref: rightMarkerRef },
                React.createElement(MarkerLine, { x1: "0", y1: "0", x2: "0", y2: "50" }),
                React.createElement(MarkerLine, { x1: "0", y1: "0", x2: "0", y2: "50", hidden: true })),
            React.createElement("g", { className: "axis axis--x", id: "axis" },
                React.createElement("rect", { width: width, height: AXIS_HEIGHT + AXIS_MARGIN, fillOpacity: "0", fill: "black" }))),
        React.createElement(ContextRow, null,
            renderContext(),
            React.createElement(ButtonArea, null,
                React.createElement(TimelineButton, { variant: "contained", onClick: () => zoomOut(), icon: true }, "-"),
                React.createElement(TimelineButton, { variant: "contained", onClick: () => zoomIn(), icon: true }, "+"),
                props.onDone &&
                    props.mode && (React.createElement(TimelineButton, { color: "primary", variant: "contained", onClick: () => {
                        props.onDone && props.onDone(selectionRange);
                        setSelectionRange([]);
                    } }, "Done"))))));
};
exports.default = exports.Timeline;
try {
    // @ts-ignore
    exports.Timeline.displayName = "Timeline";
    // @ts-ignore
    exports.Timeline.__docgenInfo = { "description": "", "displayName": "Timeline", "props": { "height": { "defaultValue": null, "description": "Height in pixels.", "name": "height", "required": true, "type": { "name": "number" } }, "mode": { "defaultValue": null, "description": "Mode that the timeline should be in.", "name": "mode", "required": false, "type": { "name": "\"single\" | \"range\"" } }, "timezone": { "defaultValue": null, "description": "Timezone to use when displaying times.", "name": "timezone", "required": true, "type": { "name": "string" } }, "format": { "defaultValue": null, "description": "Date format to use when displaying times.", "name": "format", "required": true, "type": { "name": "string" } }, "data": { "defaultValue": null, "description": "TimelineItem points", "name": "data", "required": false, "type": { "name": "TimelineItem[]" } }, "dateAttributeAliases": { "defaultValue": null, "description": "Alias Map for date attributes", "name": "dateAttributeAliases", "required": false, "type": { "name": "{ [key: string]: string; }" } }, "onDone": { "defaultValue": null, "description": "Called when the done button is clicked, providing the current selection range.", "name": "onDone", "required": false, "type": { "name": "(selectionRange: Date[]) => void" } }, "onSelect": { "defaultValue": null, "description": "Called when the a selection is made.", "name": "onSelect", "required": false, "type": { "name": "(data: TimelineItem[]) => void" } }, "renderTooltip": { "defaultValue": null, "description": "Render function for tooltips", "name": "renderTooltip", "required": false, "type": { "name": "(data: TimelineItem[]) => any" } }, "heightOffset": { "defaultValue": null, "description": "Height offset to combat issues with dynamic heights when rendering the timeline.", "name": "heightOffset", "required": false, "type": { "name": "number" } }, "onCopy": { "defaultValue": null, "description": "Called when a date is copied to the clipboard.", "name": "onCopy", "required": false, "type": { "name": "(copiedValue: string) => void" } }, "min": { "defaultValue": null, "description": "Minimum date bounds to render items between.", "name": "min", "required": false, "type": { "name": "Date" } }, "max": { "defaultValue": null, "description": "Maximum date bounds to render items between.", "name": "max", "required": false, "type": { "name": "Date" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["atoms/timeline/timeline.tsx#Timeline"] = { docgenInfo: exports.Timeline.__docgenInfo, name: "Timeline", path: "atoms/timeline/timeline.tsx#Timeline" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    timeline.displayName = "timeline";
    // @ts-ignore
    timeline.__docgenInfo = { "description": "", "displayName": "timeline", "props": { "height": { "defaultValue": null, "description": "Height in pixels.", "name": "height", "required": true, "type": { "name": "number" } }, "mode": { "defaultValue": null, "description": "Mode that the timeline should be in.", "name": "mode", "required": false, "type": { "name": "\"single\" | \"range\"" } }, "timezone": { "defaultValue": null, "description": "Timezone to use when displaying times.", "name": "timezone", "required": true, "type": { "name": "string" } }, "format": { "defaultValue": null, "description": "Date format to use when displaying times.", "name": "format", "required": true, "type": { "name": "string" } }, "data": { "defaultValue": null, "description": "TimelineItem points", "name": "data", "required": false, "type": { "name": "TimelineItem[]" } }, "dateAttributeAliases": { "defaultValue": null, "description": "Alias Map for date attributes", "name": "dateAttributeAliases", "required": false, "type": { "name": "{ [key: string]: string; }" } }, "onDone": { "defaultValue": null, "description": "Called when the done button is clicked, providing the current selection range.", "name": "onDone", "required": false, "type": { "name": "(selectionRange: Date[]) => void" } }, "onSelect": { "defaultValue": null, "description": "Called when the a selection is made.", "name": "onSelect", "required": false, "type": { "name": "(data: TimelineItem[]) => void" } }, "renderTooltip": { "defaultValue": null, "description": "Render function for tooltips", "name": "renderTooltip", "required": false, "type": { "name": "(data: TimelineItem[]) => any" } }, "heightOffset": { "defaultValue": null, "description": "Height offset to combat issues with dynamic heights when rendering the timeline.", "name": "heightOffset", "required": false, "type": { "name": "number" } }, "onCopy": { "defaultValue": null, "description": "Called when a date is copied to the clipboard.", "name": "onCopy", "required": false, "type": { "name": "(copiedValue: string) => void" } }, "min": { "defaultValue": null, "description": "Minimum date bounds to render items between.", "name": "min", "required": false, "type": { "name": "Date" } }, "max": { "defaultValue": null, "description": "Maximum date bounds to render items between.", "name": "max", "required": false, "type": { "name": "Date" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["atoms/timeline/timeline.tsx#timeline"] = { docgenInfo: timeline.__docgenInfo, name: "timeline", path: "atoms/timeline/timeline.tsx#timeline" };
}
catch (__react_docgen_typescript_loader_error) { }


/***/ }),

/***/ "./atoms/timeline/tooltip.tsx":
/*!************************************!*\
  !*** ./atoms/timeline/tooltip.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
const Root = styled_components_1.default.div `
  position: absolute;
  top: ${(props) => props.pos.y}px;
  left: ${(props) => props.pos.x}px;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  max-width: 30%;
  border-radius: 8px;
  padding: 10px;
  z-index: 1;
  pointer-events: none;
`;
exports.Tooltip = (props) => {
    const { x, y, message } = props;
    return (React.createElement(Root, { pos: { x, y } },
        React.createElement("span", null, message)));
};
try {
    // @ts-ignore
    exports.Tooltip.displayName = "Tooltip";
    // @ts-ignore
    exports.Tooltip.__docgenInfo = { "description": "", "displayName": "Tooltip", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["atoms/timeline/tooltip.tsx#Tooltip"] = { docgenInfo: exports.Tooltip.__docgenInfo, name: "Tooltip", path: "atoms/timeline/tooltip.tsx#Tooltip" };
}
catch (__react_docgen_typescript_loader_error) { }


/***/ }),

/***/ "./atoms/timeline/util.tsx":
/*!*********************************!*\
  !*** ./atoms/timeline/util.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const moment = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/** Python's "range" function */
exports.range = (n) => Array.from(Array(n).keys());
const getDataPoint = (num, createdYear, modifiedYear, publishedYear) => {
    const month = Math.floor(Math.random() * 12);
    const year = Math.floor(Math.random() * 40);
    const day = Math.floor(Math.random() * 28);
    return {
        id: `Result ${(num + 1).toString()}`,
        selected: false,
        attributes: {
            created: moment(new Date(createdYear + year, 0, 1))
                .add(month, 'months')
                .add(day, 'days')
                .toDate(),
            modified: moment(new Date(modifiedYear + year, 0, 1)).toDate(),
            published_date: moment(new Date(publishedYear + year, 0, 1))
                .add(day, 'days')
                .toDate(),
        },
    };
};
exports.createTestData = (n) => {
    if (typeof n !== 'number' || n < 1) {
        return [];
    }
    return exports.range(n).map(num => getDataPoint(num, 1980, 1983, 1987));
};
/**
 * Convert a given date to UTC to render correctly on the Timeline.
 *
 * @param value Moment time object.
 * @param timezone Timezone the incoming value is in.
 */
// TODO: Make this use the timezone
exports.toUtc = (value, format, timezone = '') => {
    const momentValue = moment.tz(value, timezone);
    const utcOffsetMinutes = momentValue.utcOffset();
    momentValue.add(utcOffsetMinutes, 'minutes').format(format);
    return momentValue.toDate();
};
/**
 *
 * @param time UTC time
 * @param timezone Timezone to convert the incoming value to.
 */
exports.convertDateToTimezoneDate = (time, format, timezone) => {
    const momentValue = moment.tz(time, timezone);
    const utcOffsetMinutes = momentValue.utcOffset();
    momentValue.subtract(utcOffsetMinutes, 'minutes').format(format);
    return momentValue.toDate();
};
exports.formatDate = (value, format, timezone) => moment.tz(value, format, timezone).format(format);
exports.dateWithinRange = (date, range) => range[0] < date && date < range[1];
try {
    // @ts-ignore
    exports.range.displayName = "range";
    // @ts-ignore
    exports.range.__docgenInfo = { "description": "Python's \"range\" function", "displayName": "range", "props": { "toString": { "defaultValue": null, "description": "Returns a string representation of an object.\n@param radix Specifies a radix for converting numeric values to strings. This value is only used for numbers.", "name": "toString", "required": true, "type": { "name": "(radix?: number) => string" } }, "toFixed": { "defaultValue": null, "description": "Returns a string representing a number in fixed-point notation.\n@param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.", "name": "toFixed", "required": true, "type": { "name": "(fractionDigits?: number) => string" } }, "toExponential": { "defaultValue": null, "description": "Returns a string containing a number represented in exponential notation.\n@param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.", "name": "toExponential", "required": true, "type": { "name": "(fractionDigits?: number) => string" } }, "toPrecision": { "defaultValue": null, "description": "Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.\n@param precision Number of significant digits. Must be in the range 1 - 21, inclusive.", "name": "toPrecision", "required": true, "type": { "name": "(precision?: number) => string" } }, "valueOf": { "defaultValue": null, "description": "Returns the primitive value of the specified object.", "name": "valueOf", "required": true, "type": { "name": "() => number" } }, "toLocaleString": { "defaultValue": null, "description": "Converts a number to a string by using the current or specified locale.\n@param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.\n@param options An object that contains one or more properties that specify comparison options.", "name": "toLocaleString", "required": true, "type": { "name": "(locales?: string | string[], options?: NumberFormatOptions) => string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["atoms/timeline/util.tsx#range"] = { docgenInfo: exports.range.__docgenInfo, name: "range", path: "atoms/timeline/util.tsx#range" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    exports.createTestData.displayName = "createTestData";
    // @ts-ignore
    exports.createTestData.__docgenInfo = { "description": "", "displayName": "createTestData", "props": { "toString": { "defaultValue": null, "description": "Returns a string representation of an object.\n@param radix Specifies a radix for converting numeric values to strings. This value is only used for numbers.", "name": "toString", "required": true, "type": { "name": "(radix?: number) => string" } }, "toFixed": { "defaultValue": null, "description": "Returns a string representing a number in fixed-point notation.\n@param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.", "name": "toFixed", "required": true, "type": { "name": "(fractionDigits?: number) => string" } }, "toExponential": { "defaultValue": null, "description": "Returns a string containing a number represented in exponential notation.\n@param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.", "name": "toExponential", "required": true, "type": { "name": "(fractionDigits?: number) => string" } }, "toPrecision": { "defaultValue": null, "description": "Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.\n@param precision Number of significant digits. Must be in the range 1 - 21, inclusive.", "name": "toPrecision", "required": true, "type": { "name": "(precision?: number) => string" } }, "valueOf": { "defaultValue": null, "description": "Returns the primitive value of the specified object.", "name": "valueOf", "required": true, "type": { "name": "() => number" } }, "toLocaleString": { "defaultValue": null, "description": "Converts a number to a string by using the current or specified locale.\n@param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.\n@param options An object that contains one or more properties that specify comparison options.", "name": "toLocaleString", "required": true, "type": { "name": "(locales?: string | string[], options?: NumberFormatOptions) => string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["atoms/timeline/util.tsx#createTestData"] = { docgenInfo: exports.createTestData.__docgenInfo, name: "createTestData", path: "atoms/timeline/util.tsx#createTestData" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    exports.toUtc.displayName = "toUtc";
    // @ts-ignore
    exports.toUtc.__docgenInfo = { "description": "Convert a given date to UTC to render correctly on the Timeline.\n@param value Moment time object.\n@param timezone Timezone the incoming value is in.", "displayName": "toUtc", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["atoms/timeline/util.tsx#toUtc"] = { docgenInfo: exports.toUtc.__docgenInfo, name: "toUtc", path: "atoms/timeline/util.tsx#toUtc" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    exports.convertDateToTimezoneDate.displayName = "convertDateToTimezoneDate";
    // @ts-ignore
    exports.convertDateToTimezoneDate.__docgenInfo = { "description": "@param time UTC time\n@param timezone Timezone to convert the incoming value to.", "displayName": "convertDateToTimezoneDate", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["atoms/timeline/util.tsx#convertDateToTimezoneDate"] = { docgenInfo: exports.convertDateToTimezoneDate.__docgenInfo, name: "convertDateToTimezoneDate", path: "atoms/timeline/util.tsx#convertDateToTimezoneDate" };
}
catch (__react_docgen_typescript_loader_error) { }


/***/ }),

/***/ "./atoms/typography/index.tsx":
/*!************************************!*\
  !*** ./atoms/typography/index.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var typography_1 = __webpack_require__(/*! ./typography */ "./atoms/typography/typography.tsx");
exports.Typography = typography_1.WrappedTypography;


/***/ }),

/***/ "./atoms/typography/typography.tsx":
/*!*****************************************!*\
  !*** ./atoms/typography/typography.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const Typography_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js"));
const styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
exports.WrappedTypography = styled_components_1.default(React.forwardRef((props, ref) => {
    return React.createElement(Typography_1.default, Object.assign({}, props, { ref: ref }));
})) ``;


/***/ }),

/***/ "./atoms/zero-width-space/zero-width-space.tsx":
/*!*****************************************************!*\
  !*** ./atoms/zero-width-space/zero-width-space.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
exports.ZeroWidthSpace = () => {
    return React.createElement(React.Fragment, null, String.fromCharCode(8203));
};


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/nested-object-assign/lib sync recursive ^\\.\\/.*$":
/*!*************************************************************!*\
  !*** ./node_modules/nested-object-assign/lib sync ^\.\/.*$ ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./nestedObjectAssign": "./node_modules/nested-object-assign/lib/nestedObjectAssign.js",
	"./nestedObjectAssign.js": "./node_modules/nested-object-assign/lib/nestedObjectAssign.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/nested-object-assign/lib sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./storybook/index.tsx":
/*!*****************************!*\
  !*** ./storybook/index.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __webpack_require__(/*! @connexta/ace/@storybook/react */ "./node_modules/@connexta/ace/@storybook/react.tsx");
const theme_decorator_1 = __webpack_require__(/*! ./theme-decorator */ "./storybook/theme-decorator.tsx");
exports.storiesOf = (name, m) => {
    const stories = react_1.storiesOf(name, m);
    stories.addDecorator(theme_decorator_1.withTheme);
    return stories;
};


/***/ }),

/***/ "./storybook/theme-decorator.tsx":
/*!***************************************!*\
  !*** ./storybook/theme-decorator.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const addon_knobs_1 = __webpack_require__(/*! @connexta/ace/@storybook/addon-knobs */ "./node_modules/@connexta/ace/@storybook/addon-knobs.tsx");
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const styled_components_1 = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
const paper_1 = __webpack_require__(/*! ../atoms/paper */ "./atoms/paper/index.tsx");
const theme_1 = __webpack_require__(/*! ../atoms/theme */ "./atoms/theme/index.tsx");
const darkTheme = {
    primaryColor: '#32a6ad',
    positiveColor: '#5b963e',
    negativeColor: '#943838',
    warningColor: '#decd39',
    favoriteColor: '#d1d179',
    backgroundNavigation: '#213137',
    backgroundAccentContent: '#34434c',
    backgroundDropdown: '#253540',
    backgroundContent: '#253540',
    backgroundModal: '#253540',
    backgroundSlideout: '#435059',
};
const lightTheme = {
    primaryColor: '#3c6dd5',
    positiveColor: '#428442',
    negativeColor: '#8a423c',
    warningColor: '#c89600',
    favoriteColor: '#d1d179',
    backgroundNavigation: '#3c6dd5',
    backgroundAccentContent: '#edf9fc',
    backgroundDropdown: '#f3fdff',
    backgroundContent: '#f3fdff',
    backgroundModal: '#edf9fc',
    backgroundSlideout: '#edf9fc',
};
const DefaultThemeProvider = (props) => {
    const { paletteType, children } = props;
    let styledTheme;
    if (paletteType === 'dark') {
        styledTheme = Object.assign({}, darkTheme, { theme: paletteType });
    }
    else {
        styledTheme = Object.assign({}, lightTheme, { theme: paletteType });
    }
    return (React.createElement(styled_components_1.ThemeProvider, { theme: styledTheme },
        React.createElement(theme_1.ThemeProvider, null,
            React.createElement(paper_1.Paper, { style: { padding: '40px' } }, children))));
};
exports.withTheme = (Component) => {
    const themes = addon_knobs_1.select('Theme', {
        Light: ['light'],
        Dark: ['dark'],
    }, ['light']);
    return (React.createElement(React.Fragment, null, themes.map(t => {
        return (React.createElement(DefaultThemeProvider, { paletteType: t },
            React.createElement(Component, null)));
    })));
};


/***/ }),

/***/ 0:
/*!***********************************************************************************************************************************************************************************************!*\
  !*** multi ./node_modules/@storybook/core/dist/server/common/polyfills.js ./node_modules/@storybook/core/dist/server/preview/globals.js ./node_modules/@connexta/ace/lib/storybook/config.js ***!
  \***********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/travis/build/connexta/atlas/node_modules/@storybook/core/dist/server/common/polyfills.js */"./node_modules/@storybook/core/dist/server/common/polyfills.js");
__webpack_require__(/*! /home/travis/build/connexta/atlas/node_modules/@storybook/core/dist/server/preview/globals.js */"./node_modules/@storybook/core/dist/server/preview/globals.js");
module.exports = __webpack_require__(/*! /home/travis/build/connexta/atlas/node_modules/@connexta/ace/lib/storybook/config.js */"./node_modules/@connexta/ace/lib/storybook/config.js");


/***/ })

},[[0,"runtime~main","vendors~main"]]]);
//# sourceMappingURL=main.feec772f6638c31c77ff.bundle.js.map
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright (c) Codice Foundation
 *
 * This is free software: you can redistribute it and/or modify it under the terms of the GNU Lesser General Public License as published by the Free Software Foundation, either
 * version 3 of the License, or any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU Lesser General Public License for more details. A copy of the GNU Lesser General Public License is distributed along with this program and can be found at
 * <http://www.gnu.org/licenses/lgpl.html>.
 *
 **/
var React = require("react");
var styled_components_1 = require("../../styles/styled-components");
var polished_1 = require("polished");
var buttonTypeEnum;
(function (buttonTypeEnum) {
    buttonTypeEnum[buttonTypeEnum["neutral"] = 0] = "neutral";
    buttonTypeEnum[buttonTypeEnum["positive"] = 1] = "positive";
    buttonTypeEnum[buttonTypeEnum["negative"] = 2] = "negative";
    buttonTypeEnum[buttonTypeEnum["primary"] = 3] = "primary";
})(buttonTypeEnum = exports.buttonTypeEnum || (exports.buttonTypeEnum = {}));
function determineBackgroundFromProps(props) {
    switch (props.buttonType) {
        case buttonTypeEnum.positive:
            return props.theme.positiveColor;
        case buttonTypeEnum.negative:
            return props.theme.negativeColor;
        case buttonTypeEnum.primary:
            return props.theme.primaryColor;
        case buttonTypeEnum.neutral:
            return "rgba(0,0,0,0)";
    }
}
function determineColorFromPropsDefault(props) {
    switch (props.buttonType) {
        case buttonTypeEnum.neutral:
            return "inherit";
        default:
            return polished_1.readableColor(determineBackgroundFromProps(props));
    }
}
// most of our premade themes will want white text on buttons, if not we can change this later
function determineColorFromPropsPremade(props) {
    switch (props.buttonType) {
        case buttonTypeEnum.neutral:
            return "inherit";
        default:
            return "white";
    }
}
function determineColorFromProps(props) {
    switch (props.theme.theme) {
        case "dark":
            return determineColorFromPropsPremade(props);
        case "light":
            return determineColorFromPropsPremade(props);
        case "sea":
            return determineColorFromPropsPremade(props);
        default:
            return determineColorFromPropsDefault(props);
    }
}
function shadeFromProps(amount, props) {
    switch (props.buttonType) {
        case buttonTypeEnum.neutral:
            return polished_1.shade(1 - amount, polished_1.opacify(0.1, determineBackgroundFromProps(props)));
        default:
            return polished_1.shade(amount, determineBackgroundFromProps(props));
    }
}
function tintFromProps(amount, props) {
    switch (props.buttonType) {
        case buttonTypeEnum.neutral:
            return polished_1.tint(1 - amount, polished_1.opacify(0.1, determineBackgroundFromProps(props)));
        default:
            return polished_1.tint(amount, determineBackgroundFromProps(props));
    }
}
var Root = styled_components_1.default("button")(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    max-width: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: inline-block;\n    border: none;\n    padding: ", ";\n    margin: ", ";\n    border-radius: ", ";\n    font-size: ", ";\n    line-height: ", ";\n    height: ", ";\n    min-width: ", ";\n    min-height: ", ";\n    text-align: center;\n    vertical-align: top;\n    position: relative;\n\n    background: ", ";\n    color: ", ";\n\n    opacity: ", ";\n\n    &:hover:not([disabled]),\n    &:focus:not([disabled]) {\n        opacity: 1;\n        background: ", ";\n        box-shadow: 0px 0px 2px ", ";\n    }\n\n    &:active:not([disabled]) {\n        opacity: 1;\n        background: ", ";\n        box-shadow: 0px 0px 2px ", ";\n    }\n\n    &:disabled {\n        ", "\n        background: repeating-linear-gradient(\n                45deg,\n                ", ",\n                ", " 10px,\n                ", " 10px,\n                ", " 20px\n        );\n        cursor: not-allowed;\n    }\n"], ["\n    max-width: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: inline-block;\n    border: none;\n    padding: ",
    ";\n    margin: ",
    ";\n    border-radius: ", ";\n    font-size: ",
    ";\n    line-height: ",
    ";\n    height: ",
    ";\n    min-width: ",
    ";\n    min-height: ",
    ";\n    text-align: center;\n    vertical-align: top;\n    position: relative;\n\n    background: ", ";\n    color: ", ";\n\n    opacity: ",
    ";\n\n    &:hover:not([disabled]),\n    &:focus:not([disabled]) {\n        opacity: 1;\n        background: ", ";\n        box-shadow: 0px 0px 2px ", ";\n    }\n\n    &:active:not([disabled]) {\n        opacity: 1;\n        background: ", ";\n        box-shadow: 0px 0px 2px ", ";\n    }\n\n    &:disabled {\n        ",
    "\n        background: repeating-linear-gradient(\n                45deg,\n                ", ",\n                ", " 10px,\n                ", " 10px,\n                ", " 20px\n        );\n        cursor: not-allowed;\n    }\n"])), function (props) {
    return props.inText ? "0px " + props.theme.minimumSpacing : "0px";
}, function (props) {
    return props.inText ? "0px " + props.theme.minimumSpacing : "0px";
}, function (props) { return props.theme.borderRadius; }, function (props) {
    return props.inText ? "inherit !important" : props.theme.largeFontSize;
}, function (props) {
    return props.inText ? "inherit !important" : props.theme.minimumButtonSize;
}, function (props) {
    return props.inText ? "auto !important" : props.theme.minimumButtonSize;
}, function (props) {
    return props.inText ? "0px !important" : props.theme.minimumButtonSize;
}, function (props) {
    return props.inText ? "0px !important" : props.theme.minimumButtonSize;
}, function (props) { return determineBackgroundFromProps(props); }, function (props) { return determineColorFromProps(props); }, function (props) {
    return props.fadeUntilHover ? props.theme.minimumOpacity : 1;
}, function (props) { return shadeFromProps(0.9, props); }, function (props) { return shadeFromProps(0.9, props); }, function (props) { return shadeFromProps(0.7, props); }, function (props) { return shadeFromProps(0.7, props); }, function (props) {
    if (props.buttonType !== buttonTypeEnum.neutral) {
        return "text-shadow: 0px 0px 4px " + polished_1.readableColor(determineColorFromProps(props)) + ";";
    }
}, function (props) { return tintFromProps(0.9, props); }, function (props) { return tintFromProps(0.9, props); }, function (props) { return shadeFromProps(0.9, props); }, function (props) { return shadeFromProps(0.9, props); });
var Icon = styled_components_1.default("span")(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: 0px\n    ", "\n    0px 0px;\n"], ["\n  margin: 0px\n    ",
    "\n    0px 0px;\n"])), function (props) {
    return props.text !== undefined && props.text !== ""
        ? props.theme.minimumSpacing
        : "0px";
});
var Text = styled_components_1.default("span")(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: ", ";\n"], ["\n  font-size: ",
    ";\n"])), function (props) {
    return props.inText ? "inherit !important" : props.theme.largeFontSize;
});
exports.Button = function (_a) {
    var children = _a.children, buttonType = _a.buttonType, icon = _a.icon, text = _a.text, inText = _a.inText, otherProps = __rest(_a, ["children", "buttonType", "icon", "text", "inText"]);
    return (React.createElement(Root, __assign({ inText: inText, buttonType: buttonType }, otherProps),
        children ? children : "",
        !children && icon ? React.createElement(Icon, { text: text, className: icon }) : "",
        !children && text ? React.createElement(Text, { inText: inText }, text) : ""));
};
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=button.js.map
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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
var Root = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: auto;\n  display: inline-block;\n  cursor: pointer;\n  text-align: left;\n"], ["\n  width: 100%;\n  height: auto;\n  display: inline-block;\n  cursor: pointer;\n  text-align: left;\n"])));
var Header = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  max-width: 100%;\n  font-weight: bolder;\n  padding: 0px ", ";\n  height: ", ";\n  line-height: ", ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"], ["\n  max-width: 100%;\n  font-weight: bolder;\n  padding: 0px ", ";\n  height: ", ";\n  line-height: ", ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"])), function (props) { return props.theme.minimumSpacing; }, function (props) { return props.theme.minimumLineSize; }, function (props) { return props.theme.minimumLineSize; });
var Details = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  max-width: 100%;\n  opacity: ", ";\n  padding: 0px ", ";\n  line-height: ", ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"], ["\n  max-width: 100%;\n  opacity: ", ";\n  padding: 0px ", ";\n  line-height: ", ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"])), function (props) { return props.theme.minimumOpacity; }, function (props) { return props.theme.minimumSpacing; }, function (props) { return props.theme.minimumLineSize; });
var Footer = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  text-align: right;\n"], ["\n  text-align: right;\n"])));
var Card = function (props) {
    return (React.createElement(Root, null,
        React.createElement(Header, null, props.header),
        React.createElement(Details, null, props.details),
        React.createElement(Footer, null, props.footer)));
};
exports.default = Card;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=card.js.map
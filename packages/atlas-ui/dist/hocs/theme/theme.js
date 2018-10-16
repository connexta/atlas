"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var sizing = {
    comfortable: {
        minimumButtonSize: '2.75rem',
        minimumLineSize: '1.875rem',
        minimumSpacing: '0.625rem',
    },
    cozy: {
        minimumButtonSize: '2.275rem',
        minimumLineSize: '1.6875rem',
        minimumSpacing: '0.4625rem',
    },
    compact: {
        minimumButtonSize: '1.8rem',
        minimumLineSize: '1.5rem',
        minimumSpacing: '0.3rem',
    },
};
var borderRadius = {
    borderRadius: '1px',
};
var screenSizes = {
    minimumScreenSize: '20rem',
    mobileScreenSize: '26.25rem',
    smallScreenSize: '58.75rem',
    mediumScreenSize: '90rem',
};
var zIndexes = {
    zIndexMenubar: 101,
    zIndexLightbox: 101,
    zIndexLoadingCompanion: 101,
    zIndexSlideout: 103,
    zIndexContent: 101,
    zIndexConfirmation: 103,
    zIndexHelp: 104,
    zIndexVerticalMenu: 101,
    zIndexDropdown: 103,
    zIndexMenuItem: 102,
    zIndexBlocking: 105,
};
var transitions = {
    transitionTime: '0s',
    coreTransitionTime: '0.250s',
};
var fontSizes = {
    minimumFontSize: '1rem',
    mediumFontSize: '1.2rem',
    largeFontSize: '1.4rem',
};
var spacing = function (minSpacing) {
    return {
        minimumSpacing: minSpacing + "rem",
        mediumSpacing: 2 * minSpacing + "rem",
        largeSpacing: 3 * minSpacing + "rem",
    };
};
var dividers = function (minSpacing) {
    return {
        dividerHeight: minSpacing + "rem",
        minimumDividerSize: 3 * minSpacing + "rem",
    };
};
var opacity = {
    minimumOpacity: 0.6,
};
var themes = {
    dark: {
        primaryColor: '#3c6dd5',
        positiveColor: '#428442',
        negativeColor: '#8a423c',
        warningColor: '#c89600',
        favoriteColor: '#d1d179',
        backgroundNavigation: '#252529',
        backgroundAccentContent: '#2A2A2E',
        backgroundDropdown: '#35353a',
        backgroundContent: '#35353a',
        backgroundModal: '#252529',
        backgroundSlideout: '#252529',
    },
    sea: {
        primaryColor: '#32a6ad',
        positiveColor: '#154e7d',
        negativeColor: '#a32c00',
        warningColor: '#b65e1f',
        favoriteColor: '#709e33',
        backgroundNavigation: '#0f3757',
        backgroundAccentContent: '#ffffff',
        backgroundDropdown: '#ffffff',
        backgroundContent: '#ffffff',
        backgroundModal: '#e5e6e6',
        backgroundSlideout: '#e5e6e6',
    },
    light: {
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
    },
    custom: {
        primaryColor: '#3c6dd5',
        positiveColor: '#428442',
        negativeColor: '#8a423c',
        warningColor: '#c89600',
        favoriteColor: '#d1d179',
        backgroundNavigation: '#252529',
        backgroundAccentContent: '#2A2A2E',
        backgroundDropdown: '#35353a',
        backgroundContent: '#35353a',
        backgroundModal: '#252529',
        backgroundSlideout: '#252529',
    },
};
var defaultTheme = __assign({ theme: 'dark' }, themes.dark, sizing.comfortable, borderRadius, screenSizes, zIndexes, transitions, fontSizes, spacing(1), dividers(1), opacity);
var ThemeContainer = /** @class */ (function (_super) {
    __extends(ThemeContainer, _super);
    function ThemeContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ThemeContainer.prototype.render = function () {
        return (
        // @ts-ignore
        React.createElement(styled_components_1.ThemeProvider, { theme: defaultTheme }, this.props.children));
    };
    return ThemeContainer;
}(React.Component));
exports.default = ThemeContainer;
//# sourceMappingURL=theme.js.map
/// <reference types="react" />
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
import * as styledComponents from 'styled-components';
import { ThemeInterface } from './theme';
declare const styled: styledComponents.ThemedBaseStyledInterface<ThemeInterface>, css: styledComponents.BaseThemedCssFunction<ThemeInterface>, createGlobalStyle: <P = {}>(strings: TemplateStringsArray, ...interpolations: styledComponents.Interpolation<styledComponents.ThemedStyledProps<P, ThemeInterface>>[]) => styledComponents.GlobalStyleClass<P, ThemeInterface>, ThemeProvider: import("react").ComponentClass<styledComponents.ThemeProviderProps<ThemeInterface>, any>;
declare const keyframesWithTheme: (strings: TemplateStringsArray, ...interpolations: styledComponents.FlattenInterpolation<styledComponents.ThemeProps<ThemeInterface>>[]) => string;
export { css, createGlobalStyle, keyframesWithTheme as keyframes, ThemeProvider, };
export default styled;

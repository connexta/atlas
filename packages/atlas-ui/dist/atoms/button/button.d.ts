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
import * as React from "react";
export declare enum buttonTypeEnum {
    neutral = 0,
    positive = 1,
    negative = 2,
    primary = 3
}
declare type BaseButtonProps = {
    /**
     *  Affects how the button is styled in terms of color
     */
    buttonType: buttonTypeEnum;
    /**
     *  For buttons that are in the flow of text, like a highlighted word in a paragraph that's a button.
     */
    inText?: boolean;
    /**
     *  Icon for the button, such as 'fa fa-home'.  For now this is a class.
     */
    icon?: string;
    /**
     *  Text to appear within the button
     */
    text?: string;
    /**
     * Whether to appear faded when not hovered (helps avoid distracting the user)
     */
    fadeUntilHover?: boolean;
} & React.HTMLProps<HTMLButtonElement>;
export declare const Button: ({ children, buttonType, icon, text, inText, ...otherProps }: BaseButtonProps) => JSX.Element;
export {};

import styled, { css, createGlobalStyle } from 'styled-components';
import React from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var __makeTemplateObject$1 = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
// prettier-ignore
var reset = css(templateObject_1 || (templateObject_1 = __makeTemplateObject$1(["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v4.0 | 20180602\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"], ["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v4.0 | 20180602\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"])));
var Reset = createGlobalStyle(templateObject_2 || (templateObject_2 = __makeTemplateObject$1(["", ""], ["", ""])), reset);
var templateObject_1, templateObject_2;

var GlobalStyles = createGlobalStyle(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  ", "\n\n  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=IBM+Plex+Serif:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap');\n"], ["\n  ", "\n\n  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=IBM+Plex+Serif:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap');\n"])), reset);
var templateObject_1$1;

var TextFontSize = {
    xxl: 42,
    xl: 32,
    l: 24,
    m: 18,
    s: 16,
    xs: 14,
    xxs: 12,
};
var TextFontWeight = {
    bold: 500,
    regular: 400,
    light: 300,
};

var StyledText = styled.p(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  font-size: ", "px;\n  font-family: ", ";\n  font-weight: ", ";\n  text-align: ", ";\n  ", "\n"], ["\n  font-size: ", "px;\n  font-family: ", ";\n  font-weight: ", ";\n  text-align: ", ";\n  ", "\n"])), function (_a) {
    var size = _a.size;
    return TextFontSize[size];
}, function (_a) {
    var theme = _a.theme, fontFamily = _a.fontFamily;
    return theme.bme.fonts[fontFamily];
}, function (_a) {
    var weight = _a.weight;
    return TextFontWeight[weight];
}, function (_a) {
    var align = _a.align;
    return align;
}, function (_a) {
    var italic = _a.italic;
    return italic ? 'font-style: italic;' : '';
});
var Text = function (_a) {
    var children = _a.children, args = __rest(_a, ["children"]);
    return (React.createElement(StyledText, __assign({ "data-testid": "text-component" }, args), children));
};
Text.defaultProps = {
    size: "m",
    fontFamily: "sansSerif",
    weight: "regular",
    align: "left",
};
var templateObject_1$2;

var SIZES_IN_PX = {
    "xxl": 42,
    "xl": 32,
    "l": 24,
    "m": 16,
    "s": 8,
    "xs": 4,
    "xxs": 2,
};
var sizeToPx = function (size) { return SIZES_IN_PX[size]; };

var spacing = function (type, size) {
    switch (typeof size) {
        case "object": {
            var response = [];
            var x = size.x, y = size.y;
            switch (typeof x) {
                case "object": {
                    if (x.left) {
                        response.push(type + "-left: " + sizeToPx(x.left) + "px;");
                    }
                    if (x.right) {
                        response.push(type + "-right: " + sizeToPx(x.right) + "px;");
                    }
                }
                case "string": {
                    response.push(type + "-left: " + sizeToPx(x) + "px;");
                    response.push(type + "-right: " + sizeToPx(x) + "px;");
                }
            }
            switch (typeof y) {
                case "object": {
                    if (y.top) {
                        response.push(type + "-top: " + sizeToPx(y.top) + "px;");
                    }
                    if (y.bottom) {
                        response.push(type + "-bottom: " + sizeToPx(y.bottom) + "px;");
                    }
                }
                case "string": {
                    response.push(type + "-left: " + sizeToPx(y) + "px;");
                    response.push(type + "-right: " + sizeToPx(y) + "px;");
                }
            }
        }
        case "string": {
            return type + ": " + sizeToPx(size) + "px;";
        }
    }
    throw new Error("Mixins::Spacing — Wrong type of size. Needs to be an object or string.");
};

var Thm = {
    bme: {
        palette: {
            primary: '#14213d',
            secondary: '#fca311',
            tertiary: '#e5e5e5',
            dark: '#000000',
            light: '#ffffff',
        },
        fonts: {
            sansSerif: "\"IBM Plex Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"",
            serif: "\"IBM Plex Serif\", \"Palatino Linotype\", \"Book Antiqua\", Palatino, serif",
            mono: "\"IBM Plex Mono\", \"Lucida Console\", Monaco, monospace",
        }
    }
};

var textColour = function (value, theme) {
    if (theme === void 0) { theme = Thm; }
    var hex = value.substring(1);
    var rgb = parseInt(hex, 16);
    var red = (rgb >> 16) & 0xff;
    var green = (rgb >> 8) & 0xff;
    var blue = (rgb >> 0) & 0xff;
    var luma = 0.2126 * red + 0.7152 * green + 0.0722 * blue;
    return luma < 40 ? theme.bme.palette.light : theme.bme.palette.dark;
};

var WIDTH_HEIGHT_VALUES = {
    full: '100%',
    fullPage: '100vh',
};
var VALUE_TO_CSS = {
    top: "flex-start",
    center: "center",
    bottom: "flex-end",
    left: "flex-start",
    right: "flex-end",
    justify: "stretch",
};

var makeFlex = function (direction, x, y) {
    var response = [];
    response.push("flex-direction: " + direction + ";");
    switch (direction) {
        case "column": {
            response.push("align-items: " + VALUE_TO_CSS[x] + ";");
            response.push("justify-content: " + VALUE_TO_CSS[y] + ";");
        }
        default: {
            response.push("align-items: " + VALUE_TO_CSS[y] + ";");
            response.push("justify-content: " + VALUE_TO_CSS[x] + ";");
        }
    }
    return response.join('');
};

var StyledBox = styled.div(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  display: ", ";\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  display: ", ";\n  ",
    "\n  ",
    "\n  ",
    "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), function (_a) {
    var inline = _a.inline;
    return inline ? 'inline-flex' : 'flex';
}, function (_a) {
    var width = _a.width;
    return WIDTH_HEIGHT_VALUES[width]
        ? "width: " + WIDTH_HEIGHT_VALUES[width] + ";"
        : '';
}, function (_a) {
    var height = _a.height;
    return WIDTH_HEIGHT_VALUES[height]
        ? "height: " + WIDTH_HEIGHT_VALUES[height] + ";"
        : '';
}, function (_a) {
    var direction = _a.direction, alignX = _a.alignX, alignY = _a.alignY;
    return direction || alignX || alignY
        ? makeFlex(direction, alignX, alignY)
        : '';
}, function (_a) {
    var margin = _a.margin;
    return margin ? spacing('margin', margin) : '';
}, function (_a) {
    var padding = _a.padding;
    return padding ? spacing('padding', padding) : '';
}, function (_a) {
    var rounded = _a.rounded;
    return rounded ? "border-radius: " + (rounded === "full" ? 1000 : 5) + "px;" : '';
}, function (_a) {
    var theme = _a.theme, background = _a.background;
    return background ? "color: " + textColour(theme.bme.palette[background], theme) + ";" : '';
}, function (_a) {
    var theme = _a.theme, background = _a.background;
    return background ? "background: " + theme.bme.palette[background] + ";" : '';
});
var Box = function (_a) {
    var children = _a.children, styledComponentsProperties = __rest(_a, ["children"]);
    return (React.createElement(StyledBox, __assign({}, styledComponentsProperties), children));
};
var templateObject_1$3;

export { Box as BMEBox, GlobalStyles as BMEGlobalStyles, Text as BMEText };
//# sourceMappingURL=index.esm.js.map

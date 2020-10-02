import styled, { css, createGlobalStyle } from 'styled-components';
import React, { useRef, useState, useCallback, useEffect } from 'react';

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
                    response.push(type + "-top: " + sizeToPx(y) + "px;");
                    response.push(type + "-bottom: " + sizeToPx(y) + "px;");
                }
            }
            return response.join("");
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
            primary: '#300032',
            secondary: '#c43235',
            tertiary: '#0066FF',
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
    return luma < 95 ? theme.bme.palette.light : theme.bme.palette.dark;
};

var WIDTH_HEIGHT_VALUES = {
    full: '100%',
    half: '50%',
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

var hexToRGBA = function (value, opacity) {
    if (opacity === void 0) { opacity = 1; }
    var hex = value.replace(/#/g, '');
    var rgb = parseInt(hex, 16);
    var red = (rgb >> 16) & 0xff;
    var green = (rgb >> 8) & 0xff;
    var blue = (rgb >> 0) & 0xff;
    return "rgba(" + red + ", " + green + ", " + blue + ", " + opacity + ")";
};

var TransitionVariantsEnum;
(function (TransitionVariantsEnum) {
    TransitionVariantsEnum["standard"] = "cubic-bezier(0.4, 0.0, 0.2, 1);";
    TransitionVariantsEnum["decelerated"] = "cubic-bezier(0.0, 0.0, 0.2, 1);";
    TransitionVariantsEnum["accelerated"] = "cubic-bezier(0.4, 0.0, 1, 1);";
})(TransitionVariantsEnum || (TransitionVariantsEnum = {}));
var transition = function (property, durationInMs, variant) {
    if (property === void 0) { property = ["all"]; }
    if (durationInMs === void 0) { durationInMs = 750; }
    if (variant === void 0) { variant = TransitionVariantsEnum.standard; }
    return "\n  transition-property: " + property.join(" ") + ";\n  transition-duration: " + durationInMs + "ms;\n  transition-timing-function: " + TransitionVariantsEnum[variant] + ";\n  will-change: " + property.join(",") + ";\n  ";
};

var StyledBox = styled.div(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  display: ", ";\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  display: ", ";\n  ",
    "\n  ",
    "\n  ",
    "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), function (_a) {
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
}, function (_a) {
    var theme = _a.theme, background = _a.background;
    return background ? "--bme-colour-text: " + textColour(theme.bme.palette[background], theme) + ";" : '';
});
var Box = function (_a) {
    var children = _a.children, styledComponentsProperties = __rest(_a, ["children"]);
    return (React.createElement(StyledBox, __assign({}, styledComponentsProperties), children));
};
var templateObject_1$3;

var StyledButton = styled.button(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  position: relative;\n\n  display: inline-flex;\n  ", "\n  ", "\n  overflow: hidden;\n  cursor: pointer;\n\n  color: ", ";\n  background: ", ";\n  border: ", ";\n  border-radius: ", "px;\n  appearance: none;\n  --webkit-appearance: none;\n  \n  ", ";\n  \n  &::after, &&::before {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n\n    display: block;\n    width: 1000px;\n    height: 1000px;\n    max-width: 0;\n    max-height: 0;\n    content: '';\n    transform: translate(-50%, -50%);\n\n    border-radius: 1000px;\n    background: ", ";\n\n    ", ";\n  }\n  \n  &:hover {\n    &::after {\n      max-width: 1000px;\n      max-height: 1000px;\n    }\n  }\n  \n  &:active {\n    &::before {\n      max-width: 1000px;\n      max-height: 1000px;\n    }\n  }\n"], ["\n  position: relative;\n\n  display: inline-flex;\n  ", "\n  ", "\n  overflow: hidden;\n  cursor: pointer;\n\n  color: ", ";\n  background: ", ";\n  border: ", ";\n  border-radius: ", "px;\n  appearance: none;\n  --webkit-appearance: none;\n  \n  ", ";\n  \n  &::after, &&::before {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n\n    display: block;\n    width: 1000px;\n    height: 1000px;\n    max-width: 0;\n    max-height: 0;\n    content: '';\n    transform: translate(-50%, -50%);\n\n    border-radius: 1000px;\n    background: ", ";\n\n    ", ";\n  }\n  \n  &:hover {\n    &::after {\n      max-width: 1000px;\n      max-height: 1000px;\n    }\n  }\n  \n  &:active {\n    &::before {\n      max-width: 1000px;\n      max-height: 1000px;\n    }\n  }\n"])), makeFlex('row', 'center', 'center'), spacing('padding', { x: "m", y: "s" }), function (_a) {
    var theme = _a.theme, variant = _a.variant, outline = _a.outline;
    return !outline && variant ? "" + textColour(theme.bme.palette[variant], theme) : 'var(--bme-colour-text)';
}, function (_a) {
    var theme = _a.theme, variant = _a.variant, outline = _a.outline;
    return !outline && variant ? "" + theme.bme.palette[variant] : 'transparent';
}, function (_a) {
    var theme = _a.theme, variant = _a.variant, outline = _a.outline;
    return outline && variant ? theme.bme.palette[variant] + " 2px solid" : 'none';
}, function (_a) {
    var rounded = _a.rounded;
    return rounded ? 1000 : 5;
}, function (_a) {
    var theme = _a.theme, variant = _a.variant, outline = _a.outline;
    return !outline && variant ? "--bme-colour-text: " + textColour(theme.bme.palette[variant], theme) + ";" : '';
}, function (_a) {
    var theme = _a.theme;
    return hexToRGBA(theme.bme.palette.dark, .11);
}, transition(["max-width", "max-height"]));
var Button = function (_a) {
    var children = _a.children, styledComponentsProperties = __rest(_a, ["children"]);
    return (React.createElement(StyledButton, __assign({}, styledComponentsProperties), children));
};
var templateObject_1$4;

var HeaderFontSize = {
    xxl: 62,
    xl: 42,
    l: 32,
    m: 24,
    s: 22,
    xs: 18,
    xxs: 16,
};

var StyledHeader = styled.header(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  width: 100%;\n  font-size: ", "px;\n  font-family: ", ";\n  font-weight: ", ";\n  text-align: ", ";\n"], ["\n  width: 100%;\n  font-size: ", "px;\n  font-family: ", ";\n  font-weight: ", ";\n  text-align: ", ";\n"])), function (_a) {
    var size = _a.size;
    return HeaderFontSize[size];
}, function (_a) {
    var theme = _a.theme, fontFamily = _a.fontFamily;
    return theme.bme.fonts[fontFamily];
}, TextFontWeight.bold, function (_a) {
    var align = _a.align;
    return align;
});
var StyledAccent = styled.span(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  ", "\n  background: ", ";\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  font-style: italic;\n"], ["\n  ", "\n  background: ", ";\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  font-style: italic;\n"])), spacing('margin', { x: { right: "xs" } }), function (_a) {
    var theme = _a.theme;
    return "linear-gradient(45deg, " + theme.bme.palette.primary + ", " + theme.bme.palette.secondary + ", " + theme.bme.palette.tertiary + ")";
});
var Header = function (_a) {
    var children = _a.children, args = __rest(_a, ["children"]);
    return (React.createElement(StyledHeader, __assign({}, args),
        React.createElement(StyledAccent, null, "#"),
        children));
};
Header.defaultProps = {
    size: "m",
    fontFamily: "mono",
    align: "left",
};
var templateObject_1$5, templateObject_2$1;

var useIntersection = function (root, rootMargin) {
    if (root === void 0) { root = null; }
    if (rootMargin === void 0) { rootMargin = '0px'; }
    var ref = useRef(null);
    var _a = useState(null), entry = _a[0], setEntry = _a[1];
    var handleIntersect = useCallback(function (_a) {
        var event = _a[0];
        setEntry(event);
    }, []);
    var buildTresholdList = function () {
        var thresholdList = [];
        var numSteps = 20;
        for (var i = 1.0; i <= numSteps; i++) {
            var ratio = i / numSteps;
            thresholdList.push(ratio);
        }
        thresholdList.push(0);
        return thresholdList;
    };
    var options = { root: root, rootMargin: rootMargin, threshold: buildTresholdList() };
    useEffect(function () {
        var observer = new IntersectionObserver(handleIntersect, options);
        if (ref && ref.current) {
            observer.observe(ref.current);
        }
        return function () {
            observer.disconnect();
        };
    }, [ref, handleIntersect]);
    var isIntersecting = false;
    var intersectionRatio = NaN;
    if (entry !== null) {
        if (entry.isIntersecting) {
            isIntersecting = entry.isIntersecting;
        }
        if (entry.intersectionRatio) {
            intersectionRatio = entry.intersectionRatio;
        }
    }
    return { isIntersecting: isIntersecting, ref: ref, intersectionRatio: intersectionRatio };
};

var StyledFigure = styled.figure(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n\n  ", "\n  ", "\n  margin: 0;\n  padding: 0;\n  background-color: ", ";\n  opacity: ", ";\n  ", "\n  \n  &:after {\n    position: relative;\n    display: inline-block;\n    padding-bottom: ", "%;\n    content: '';\n    ", "\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n\n  ", "\n  ", "\n  margin: 0;\n  padding: 0;\n  background-color: ", ";\n  opacity: ", ";\n  ", "\n  \n  &:after {\n    position: relative;\n    display: inline-block;\n    padding-bottom: ", "%;\n    content: '';\n    ", "\n  }\n"])), function (_a) {
    var width = _a.width;
    return width ? "width: " + width + ";" : '';
}, function (_a) {
    var height = _a.height;
    return height ? "height: " + height + ";" : '';
}, function (_a) {
    var lazy = _a.lazy, loaded = _a.loaded;
    return lazy && !loaded ? 'var(--bme-colour-text)' : 'transparent';
}, function (_a) {
    var loaded = _a.loaded;
    return loaded ? 1 : .33;
}, transition(["opacity", "background-color"]), function (_a) {
    var lazy = _a.lazy;
    return lazy ? 100 : 0;
}, transition(["padding-bottom"]));
var StyledImage = styled.img(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  ", "\n  max-width: 100%;\n  height: auto;\n  opacity: ", ";\n  ", "\n"], ["\n  ",
    "\n  max-width: 100%;\n  height: auto;\n  opacity: ", ";\n  ", "\n"])), function (_a) {
    var fixedSize = _a.fixedSize;
    return fixedSize
        ? "\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  "
        : '';
}, function (_a) {
    var loaded = _a.loaded;
    return loaded ? 1 : 0;
}, transition(["opacity"]));
var Image = function (_a) {
    var source = _a.source, alt = _a.alt, lazy = _a.lazy, width = _a.width, height = _a.height;
    var _b = useIntersection(), ref = _b.ref, intersectionRatio = _b.intersectionRatio;
    var _c = useState(false), loading = _c[0], setLoading = _c[1];
    var _d = useState(!lazy), loaded = _d[0], setLoaded = _d[1];
    useEffect(function () {
        if (intersectionRatio > 0.5) {
            setLoading(true);
        }
    }, [intersectionRatio]);
    var handleLoaded = function () {
        setLoaded(true);
    };
    return (React.createElement(StyledFigure, { ref: ref, width: width, height: height, lazy: lazy, loaded: loaded },
        React.createElement(StyledImage, { fixedSize: Boolean(width && height), src: loading ? source : '', alt: alt, onLoad: handleLoaded, loaded: loaded })));
};
Image.defaultProps = {
    alt: '',
};
var templateObject_1$6, templateObject_2$2;

var StyledCard = styled(Box)(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  overflow: hidden;\n  border: ", " 1px solid;\n"], ["\n  overflow: hidden;\n  border: ", " 1px solid;\n"])), function (_a) {
    var borderColour = _a.borderColour, theme = _a.theme;
    return hexToRGBA(theme.bme.palette[borderColour], .33);
});
var StyledCardHeader = styled(Box)(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  border-bottom: ", " 1px solid;\n"], ["\n  border-bottom: ", " 1px solid;\n"])), function (_a) {
    var borderColour = _a.borderColour, theme = _a.theme;
    return hexToRGBA(theme.bme.palette[borderColour], .33);
});
var StyledCardThumbnail = styled(Box)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  border-bottom: ", " 1px solid;\n"], ["\n  border-bottom: ", " 1px solid;\n"])), function (_a) {
    var borderColour = _a.borderColour, theme = _a.theme;
    return hexToRGBA(theme.bme.palette[borderColour], .33);
});
var StyledCardBody = styled(Box)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  border-bottom: ", " 1px solid;\n"], ["\n  border-bottom: ", " 1px solid;\n"])), function (_a) {
    var borderColour = _a.borderColour, theme = _a.theme;
    return hexToRGBA(theme.bme.palette[borderColour], .33);
});
var StyledCardFooter = styled(Box)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n"], ["\n"])));
var CardHeader = function (_a) {
    var children = _a.children, borderColour = _a.borderColour;
    return (React.createElement(StyledCardHeader, { borderColour: borderColour, direction: "column", padding: { x: "m", y: "s" } }, children));
};
var CardThumbnail = function (_a) {
    var borderColour = _a.borderColour, source = _a.source, alt = _a.alt;
    return (React.createElement(StyledCardThumbnail, { borderColour: borderColour },
        React.createElement(Image, { source: source, alt: alt, width: "100%", height: "350px" })));
};
var CardBody = function (_a) {
    var children = _a.children, borderColour = _a.borderColour;
    return (React.createElement(StyledCardBody, { borderColour: borderColour, padding: { x: "m", y: "m" } }, children));
};
var CardFooter = function (_a) {
    var children = _a.children;
    return (React.createElement(StyledCardFooter, { padding: { x: "m", y: "s" } }, children));
};
var Card = function (_a) {
    var children = _a.children, borderColour = _a.borderColour, background = _a.background;
    var childrenWithProps = React.Children.map(children, function (child) {
        var props = { borderColour: borderColour };
        if (React.isValidElement(child)) {
            return React.cloneElement(child, props);
        }
        return child;
    });
    return (React.createElement(StyledCard, { width: "full", direction: "column", rounded: true, borderColour: borderColour, background: background }, childrenWithProps));
};
Card.defaultProps = {
    borderColour: "light",
};
Card.Header = CardHeader;
Card.Thumbnail = CardThumbnail;
Card.Body = CardBody;
Card.Footer = CardFooter;
var templateObject_1$7, templateObject_2$3, templateObject_3, templateObject_4, templateObject_5;

var StyledBadge = styled.span(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  display: inline-block;\n  ", "\n  ", "\n  color: ", ";\n  background: ", ";\n  border: ", ";\n  border-radius: ", "px;\n  \n  font-family: ", ";\n  font-style: italic;\n"], ["\n  display: inline-block;\n  ", "\n  ", "\n  color: ", ";\n  background: ", ";\n  border: ", ";\n  border-radius: ", "px;\n  \n  font-family: ", ";\n  font-style: italic;\n"])), spacing('padding', { x: "m", y: "xs" }), spacing('margin', { x: "xs", y: "xxs" }), function (_a) {
    var theme = _a.theme, variant = _a.variant, outline = _a.outline;
    return !outline && variant ? "" + textColour(theme.bme.palette[variant], theme) : 'var(--bme-colour-text)';
}, function (_a) {
    var theme = _a.theme, variant = _a.variant, outline = _a.outline;
    return !outline && variant ? "" + theme.bme.palette[variant] : 'transparent';
}, function (_a) {
    var theme = _a.theme, variant = _a.variant, outline = _a.outline;
    return outline && variant ? theme.bme.palette[variant] + " 2px solid" : 'none';
}, function (_a) {
    var rounded = _a.rounded;
    return rounded ? 1000 : 5;
}, function (_a) {
    var theme = _a.theme;
    return theme.bme.fonts.mono;
});
var Badge = function (_a) {
    var children = _a.children, args = __rest(_a, ["children"]);
    return (React.createElement(StyledBadge, __assign({}, args), children));
};
Badge.defaultProps = {
    variant: "dark",
};
var templateObject_1$8;

export { Badge as BMEBadge, Box as BMEBox, Button as BMEButton, Card as BMECard, GlobalStyles as BMEGlobalStyles, Header as BMEHeader, Image as BMEImage, Text as BMEText };
//# sourceMappingURL=index.esm.js.map

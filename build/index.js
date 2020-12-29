'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styled = require('styled-components');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
var reset = styled.css(templateObject_1 || (templateObject_1 = __makeTemplateObject$1(["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v4.0 | 20180602\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"], ["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v4.0 | 20180602\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"])));
var Reset = styled.createGlobalStyle(templateObject_2 || (templateObject_2 = __makeTemplateObject$1(["", ""], ["", ""])), reset);
var templateObject_1, templateObject_2;

var GlobalStyles = styled.createGlobalStyle(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  ", "\n\n  * {\n    box-sizing: border-box;\n  }\n"], ["\n  ", "\n\n  * {\n    box-sizing: border-box;\n  }\n"])), reset);
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

var StyledText = styled__default['default'].p(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n    color: ", ";\n    font-size: ", "px;\n    font-family: ", ";\n    font-weight: ", ";\n    text-align: ", ";\n    ", "\n"], ["\n    color: ", ";\n    font-size: ", "px;\n    font-family: ", ";\n    font-weight: ", ";\n    text-align: ", ";\n    ", "\n"])), function (_a) {
    var variant = _a.variant, theme = _a.theme;
    return (variant ? theme.bme.palette[variant] : 'var(--bme-colour-text)');
}, function (_a) {
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
    return (italic ? 'font-style: italic;' : '');
});
var Text = function (_a) {
    var children = _a.children, args = __rest(_a, ["children"]);
    return (React__default['default'].createElement(StyledText, __assign({ "data-testid": "text-component" }, args), children));
};
Text.defaultProps = {
    size: 'm',
    fontFamily: 'sansSerif',
    weight: 'regular',
    align: 'left',
};
var templateObject_1$2;

var SIZES_IN_PX = {
    xxl: 42,
    xl: 32,
    l: 24,
    m: 16,
    s: 8,
    xs: 4,
    xxs: 2,
};
var sizeToPx = function (size) { return SIZES_IN_PX[size]; };

var renderLabel = function (content, required) { return content + (required ? '*' : ''); };

var isEmpty = function (value) { return (value ? value.length <= 0 : true); };

var isRealNumber = function (value) { return (typeof value === 'number' ? !isNaN(value) : false); };

var spacing = function (type, size) {
    switch (typeof size) {
        case 'object': {
            var response = [];
            var x = size.x, y = size.y;
            switch (typeof x) {
                case 'object': {
                    if (x.left) {
                        response.push(type + "-left: " + sizeToPx(x.left) + "px;");
                    }
                    if (x.right) {
                        response.push(type + "-right: " + sizeToPx(x.right) + "px;");
                    }
                    break;
                }
                case 'string': {
                    response.push(type + "-left: " + sizeToPx(x) + "px;");
                    response.push(type + "-right: " + sizeToPx(x) + "px;");
                    break;
                }
            }
            switch (typeof y) {
                case 'object': {
                    if (y.top) {
                        response.push(type + "-top: " + sizeToPx(y.top) + "px;");
                    }
                    if (y.bottom) {
                        response.push(type + "-bottom: " + sizeToPx(y.bottom) + "px;");
                    }
                    break;
                }
                case 'string': {
                    response.push(type + "-top: " + sizeToPx(y) + "px;");
                    response.push(type + "-bottom: " + sizeToPx(y) + "px;");
                    break;
                }
            }
            return response.join('');
        }
        case 'string': {
            return type + ": " + sizeToPx(size) + "px;";
        }
    }
    throw new Error('Mixins::Spacing — Wrong type of size. Needs to be an object or string.');
};

var Thm = {
    bme: {
        palette: {
            primary: '#300032',
            secondary: '#c43235',
            tertiary: '#0066FF',
            dark: '#000000',
            light: '#ffffff',
            focus: '#f9c642',
            required: '#cd2026',
        },
        fonts: {
            sansSerif: '"IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            serif: '"IBM Plex Serif", "Palatino Linotype", "Book Antiqua", Palatino, serif',
            mono: '"IBM Plex Mono", "Lucida Console", Monaco, monospace',
        },
        grid: {
            sizes: {
                mobile: 4,
                tablet: 8,
                desktop: 12,
            },
            gap: {
                mobile: 16,
                tablet: 24,
            },
        },
    },
    breakpoints: {
        xs: 0,
        sm: 520,
        md: 720,
        lg: 840,
        xl: 1280,
    },
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
    top: 'flex-start',
    center: 'center',
    bottom: 'flex-end',
    left: 'flex-start',
    right: 'flex-end',
    justify: 'space-between',
};

var makeFlex = function (direction, x, y) {
    var response = [];
    response.push("flex-direction: " + direction + ";");
    switch (direction) {
        case 'column': {
            response.push("align-items: " + VALUE_TO_CSS[x] + ";");
            response.push("justify-content: " + VALUE_TO_CSS[y] + ";");
            break;
        }
        default: {
            response.push("align-items: " + VALUE_TO_CSS[y] + ";");
            response.push("justify-content: " + VALUE_TO_CSS[x] + ";");
            break;
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
    if (property === void 0) { property = ['all']; }
    if (durationInMs === void 0) { durationInMs = 750; }
    if (variant === void 0) { variant = TransitionVariantsEnum.standard; }
    return "\n  transition-property: " + property.join(' ') + ";\n  transition-duration: " + durationInMs + "ms;\n  transition-timing-function: " + TransitionVariantsEnum[variant] + ";\n  will-change: " + property.join(',') + ";\n  ";
};

var clearButtonStyles = function () { return "\n  border: none;\n  border-radius: 0;\n  background: transparent;\n  appearance: none;\n"; };

var StyledBox = styled__default['default'].div(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n    ", "\n\n    position: relative;\n    display: ", ";\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n"], ["\n    ", "\n\n    position: relative;\n    display: ", ";\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ",
    "\n"])), function () { return clearButtonStyles(); }, function (_a) {
    var inline = _a.inline;
    return (inline ? 'inline-flex' : 'flex');
}, function (_a) {
    var width = _a.width;
    return (WIDTH_HEIGHT_VALUES[width] ? "width: " + WIDTH_HEIGHT_VALUES[width] + ";" : '');
}, function (_a) {
    var height = _a.height;
    return (WIDTH_HEIGHT_VALUES[height] ? "height: " + WIDTH_HEIGHT_VALUES[height] + ";" : '');
}, function (_a) {
    var direction = _a.direction, alignX = _a.alignX, alignY = _a.alignY;
    return (direction || alignX || alignY ? makeFlex(direction, alignX, alignY) : '');
}, function (_a) {
    var margin = _a.margin;
    return (margin ? spacing('margin', margin) : '');
}, function (_a) {
    var padding = _a.padding;
    return (padding ? spacing('padding', padding) : '');
}, function (_a) {
    var rounded = _a.rounded;
    return (rounded ? "border-radius: " + (rounded === 'full' ? 1000 : 5) + "px;" : '');
}, function (_a) {
    var theme = _a.theme, background = _a.background;
    return (background ? "color: " + textColour(theme.bme.palette[background], theme) + ";" : '');
}, function (_a) {
    var theme = _a.theme, background = _a.background;
    return (background ? "background: " + theme.bme.palette[background] + ";" : '');
}, function (_a) {
    var theme = _a.theme, background = _a.background;
    return background ? "--bme-colour-text: " + textColour(theme.bme.palette[background], theme) + ";" : '';
});
var Box = function (_a) {
    var children = _a.children, styledComponentsProperties = __rest(_a, ["children"]);
    return (React__default['default'].createElement(StyledBox, __assign({}, styledComponentsProperties), children));
};
var templateObject_1$3;

var StyledButton = styled__default['default'].button(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n    position: relative;\n\n    display: inline-flex;\n    ", "\n    ", "\n  overflow: hidden;\n    cursor: pointer;\n\n    color: ", ";\n    background: ", ";\n    border: ", ";\n    border-radius: ", "px;\n    appearance: none;\n    --webkit-appearance: none;\n\n    ", ";\n\n    &::after,\n    &&::before {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n\n        display: block;\n        width: 1000px;\n        height: 1000px;\n        max-width: 0;\n        max-height: 0;\n        content: '';\n        transform: translate(-50%, -50%);\n\n        border-radius: 1000px;\n        background: ", ";\n\n        ", ";\n    }\n\n    &:hover {\n        &::after {\n            max-width: 1000px;\n            max-height: 1000px;\n        }\n    }\n\n    &:active {\n        &::before {\n            max-width: 1000px;\n            max-height: 1000px;\n        }\n    }\n"], ["\n    position: relative;\n\n    display: inline-flex;\n    ", "\n    ", "\n  overflow: hidden;\n    cursor: pointer;\n\n    color: ",
    ";\n    background: ",
    ";\n    border: ",
    ";\n    border-radius: ", "px;\n    appearance: none;\n    --webkit-appearance: none;\n\n    ",
    ";\n\n    &::after,\n    &&::before {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n\n        display: block;\n        width: 1000px;\n        height: 1000px;\n        max-width: 0;\n        max-height: 0;\n        content: '';\n        transform: translate(-50%, -50%);\n\n        border-radius: 1000px;\n        background: ", ";\n\n        ", ";\n    }\n\n    &:hover {\n        &::after {\n            max-width: 1000px;\n            max-height: 1000px;\n        }\n    }\n\n    &:active {\n        &::before {\n            max-width: 1000px;\n            max-height: 1000px;\n        }\n    }\n"])), makeFlex('row', 'center', 'center'), spacing('padding', { x: 'm', y: 's' }), function (_a) {
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
    return (rounded ? 1000 : 5);
}, function (_a) {
    var theme = _a.theme, variant = _a.variant, outline = _a.outline;
    return !outline && variant ? "--bme-colour-text: " + textColour(theme.bme.palette[variant], theme) + ";" : '';
}, function (_a) {
    var theme = _a.theme;
    return hexToRGBA(theme.bme.palette.dark, 0.11);
}, transition(['max-width', 'max-height']));
var Button = function (_a) {
    var children = _a.children, styledComponentsProperties = __rest(_a, ["children"]);
    return (React__default['default'].createElement(StyledButton, __assign({}, styledComponentsProperties), children));
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

var StyledHeader = styled__default['default'].header(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n    width: 100%;\n    font-size: ", "px;\n    font-family: ", ";\n    font-weight: ", ";\n    text-align: ", ";\n"], ["\n    width: 100%;\n    font-size: ", "px;\n    font-family: ", ";\n    font-weight: ", ";\n    text-align: ", ";\n"])), function (_a) {
    var size = _a.size;
    return HeaderFontSize[size];
}, function (_a) {
    var theme = _a.theme, fontFamily = _a.fontFamily;
    return theme.bme.fonts[fontFamily];
}, TextFontWeight.bold, function (_a) {
    var align = _a.align;
    return align;
});
var StyledAccent = styled__default['default'].span(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n    ", "\n    background: ", ";\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    font-style: italic;\n"], ["\n    ", "\n    background: ",
    ";\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    font-style: italic;\n"])), spacing('margin', { x: { right: 'xs' } }), function (_a) {
    var theme = _a.theme;
    return "linear-gradient(45deg, " + theme.bme.palette.primary + ", " + theme.bme.palette.secondary + ", " + theme.bme.palette.tertiary + ")";
});
var Header = function (_a) {
    var children = _a.children, args = __rest(_a, ["children"]);
    return (React__default['default'].createElement(StyledHeader, __assign({}, args),
        React__default['default'].createElement(StyledAccent, null, "#"),
        children));
};
Header.defaultProps = {
    size: 'm',
    fontFamily: 'mono',
    align: 'left',
};
var templateObject_1$5, templateObject_2$1;

var useIntersection = function (root, rootMargin) {
    if (root === void 0) { root = null; }
    if (rootMargin === void 0) { rootMargin = '0px'; }
    var ref = React.useRef(null);
    var _a = React.useState(null), entry = _a[0], setEntry = _a[1];
    var handleIntersect = React.useCallback(function (_a) {
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
    React.useEffect(function () {
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

var StyledFigure = styled__default['default'].figure(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n    position: relative;\n    overflow: hidden;\n\n    ", "\n    ", "\n  margin: 0;\n    padding: 0;\n    background-color: ", ";\n    opacity: ", ";\n    ", "\n\n    &:after {\n        position: relative;\n        display: inline-block;\n        padding-bottom: ", "%;\n        content: '';\n        ", "\n    }\n"], ["\n    position: relative;\n    overflow: hidden;\n\n    ", "\n    ", "\n  margin: 0;\n    padding: 0;\n    background-color: ", ";\n    opacity: ", ";\n    ", "\n\n    &:after {\n        position: relative;\n        display: inline-block;\n        padding-bottom: ", "%;\n        content: '';\n        ", "\n    }\n"])), function (_a) {
    var width = _a.width;
    return (width ? "width: " + width + ";" : '');
}, function (_a) {
    var height = _a.height;
    return (height ? "height: " + height + ";" : '');
}, function (_a) {
    var lazy = _a.lazy, loaded = _a.loaded;
    return (lazy && !loaded ? 'var(--bme-colour-text)' : 'transparent');
}, function (_a) {
    var loaded = _a.loaded;
    return (loaded ? 1 : 0.33);
}, transition(['opacity', 'background-color']), function (_a) {
    var lazy = _a.lazy;
    return (lazy ? 100 : 0);
}, transition(['padding-bottom']));
var StyledImage = styled__default['default'].img(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n    ", "\n    max-width: 100%;\n    height: auto;\n    opacity: ", ";\n    ", "\n"], ["\n    ",
    "\n    max-width: 100%;\n    height: auto;\n    opacity: ", ";\n    ", "\n"])), function (_a) {
    var fixedSize = _a.fixedSize;
    return fixedSize
        ? "\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  "
        : '';
}, function (_a) {
    var loaded = _a.loaded;
    return (loaded ? 1 : 0);
}, transition(['opacity']));
var Image = function (_a) {
    var source = _a.source, alt = _a.alt, lazy = _a.lazy, width = _a.width, height = _a.height;
    var _b = useIntersection(), ref = _b.ref, intersectionRatio = _b.intersectionRatio;
    var _c = React.useState(false), loading = _c[0], setLoading = _c[1];
    var _d = React.useState(!lazy), loaded = _d[0], setLoaded = _d[1];
    React.useEffect(function () {
        if (intersectionRatio > 0.5) {
            setLoading(true);
        }
    }, [intersectionRatio]);
    var handleLoaded = function () {
        setLoaded(true);
    };
    return (React__default['default'].createElement(StyledFigure, { ref: ref, width: width, height: height, lazy: lazy, loaded: loaded },
        React__default['default'].createElement(StyledImage, { fixedSize: Boolean(width && height), src: loading ? source : '', alt: alt, onLoad: handleLoaded, loaded: loaded })));
};
Image.defaultProps = {
    alt: '',
};
var templateObject_1$6, templateObject_2$2;

var StyledCard = styled__default['default'](Box)(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n    overflow: hidden;\n    border: ", " 1px solid;\n"], ["\n    overflow: hidden;\n    border: ", " 1px solid;\n"])), function (_a) {
    var borderColour = _a.borderColour, theme = _a.theme;
    return hexToRGBA(theme.bme.palette[borderColour], 0.33);
});
var StyledCardHeader = styled__default['default'](Box)(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n    border-bottom: ", " 1px solid;\n"], ["\n    border-bottom: ", " 1px solid;\n"])), function (_a) {
    var borderColour = _a.borderColour, theme = _a.theme;
    return hexToRGBA(theme.bme.palette[borderColour], 0.33);
});
var StyledCardThumbnail = styled__default['default'](Box)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    border-bottom: ", " 1px solid;\n"], ["\n    border-bottom: ", " 1px solid;\n"])), function (_a) {
    var borderColour = _a.borderColour, theme = _a.theme;
    return hexToRGBA(theme.bme.palette[borderColour], 0.33);
});
var StyledCardBody = styled__default['default'](Box)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    border-bottom: ", " 1px solid;\n"], ["\n    border-bottom: ", " 1px solid;\n"])), function (_a) {
    var borderColour = _a.borderColour, theme = _a.theme;
    return hexToRGBA(theme.bme.palette[borderColour], 0.33);
});
var StyledCardFooter = styled__default['default'](Box)(templateObject_5 || (templateObject_5 = __makeTemplateObject([""], [""])));
var CardHeader = function (_a) {
    var children = _a.children, borderColour = _a.borderColour;
    return (React__default['default'].createElement(StyledCardHeader, { borderColour: borderColour, direction: "column", padding: { x: 'm', y: 's' } }, children));
};
var CardThumbnail = function (_a) {
    var borderColour = _a.borderColour, source = _a.source, alt = _a.alt;
    return (React__default['default'].createElement(StyledCardThumbnail, { borderColour: borderColour },
        React__default['default'].createElement(Image, { source: source, alt: alt, width: "100%", height: "350px" })));
};
var CardBody = function (_a) {
    var children = _a.children, borderColour = _a.borderColour;
    return (React__default['default'].createElement(StyledCardBody, { borderColour: borderColour, padding: { x: 'm', y: 'm' } }, children));
};
var CardFooter = function (_a) {
    var children = _a.children;
    return (React__default['default'].createElement(StyledCardFooter, { padding: { x: 'm', y: 's' } }, children));
};
var Card = function (_a) {
    var children = _a.children, borderColour = _a.borderColour, background = _a.background;
    var childrenWithProps = React__default['default'].Children.map(children, function (child) {
        var props = { borderColour: borderColour };
        if (React__default['default'].isValidElement(child)) {
            return React__default['default'].cloneElement(child, props);
        }
        return child;
    });
    return (React__default['default'].createElement(StyledCard, { width: "full", direction: "column", rounded: true, borderColour: borderColour, background: background }, childrenWithProps));
};
Card.defaultProps = {
    borderColour: 'light',
};
Card.Header = CardHeader;
Card.Thumbnail = CardThumbnail;
Card.Body = CardBody;
Card.Footer = CardFooter;
var templateObject_1$7, templateObject_2$3, templateObject_3, templateObject_4, templateObject_5;

var StyledBadge = styled__default['default'].span(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n    display: inline-block;\n    ", "\n    ", "\n  color: ", ";\n    background: ", ";\n    border: ", ";\n    border-radius: ", "px;\n\n    font-family: ", ";\n    font-style: italic;\n"], ["\n    display: inline-block;\n    ", "\n    ", "\n  color: ",
    ";\n    background: ",
    ";\n    border: ",
    ";\n    border-radius: ", "px;\n\n    font-family: ", ";\n    font-style: italic;\n"])), spacing('padding', { x: 'm', y: 'xs' }), spacing('margin', { x: 'xs', y: 'xxs' }), function (_a) {
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
    return (rounded ? 1000 : 5);
}, function (_a) {
    var theme = _a.theme;
    return theme.bme.fonts.mono;
});
var Badge = function (_a) {
    var children = _a.children, args = __rest(_a, ["children"]);
    return (React__default['default'].createElement(StyledBadge, __assign({}, args), children));
};
Badge.defaultProps = {
    variant: 'dark',
};
var templateObject_1$8;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _templateObject = _taggedTemplateLiteral(['@media (', ': ', 'em) {\n      ', '\n    }'], ['@media (', ': ', 'em) {\n      ', '\n    }']),
    _templateObject2 = _taggedTemplateLiteral(['@media (min-width: ', 'em) and (max-width: ', 'em) {\n      ', '\n    }'], ['@media (min-width: ', 'em) and (max-width: ', 'em) {\n      ', '\n    }']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// eslint-disable-line no-undef

function convertPxToEm(pixels) {
  // @media is always calculated off 16px regardless of whether the root font size is the default or not
  return pixels / 16;
}

function getValueFromName(breakpoints, name) {
  var value = breakpoints[name];
  if (process.env.NODE_ENV !== 'production' && typeof value === 'undefined') {
    console.error('A breakpoint named "' + name + '" does not exist.'); // eslint-disable-line no-console
    return 0;
  }
  return value;
}

function withSingleCriteria(breakpoints, name, operator) {
  var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

  var value = getValueFromName(breakpoints, name);

  // special case for 0 to avoid wrapping styles in an unnecessary @media block
  // FIXME: typings
  // if (operator === 'max-width' && value === 0) {
  //   return () => '';
  // }

  // special case for 0 to avoid wrapping styles in an unnecessary @media block
  if (operator === 'min-width' && value === 0) {
    return function (strings) {
      for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        interpolations[_key - 1] = arguments[_key];
      }

      return styled.css.apply(undefined, [strings].concat(_toConsumableArray(interpolations)));
    };
  }

  return function (strings) {
    for (var _len2 = arguments.length, interpolations = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      interpolations[_key2 - 1] = arguments[_key2];
    }

    return styled.css(_templateObject, operator, convertPxToEm(value + offset), styled.css.apply(undefined, [strings].concat(_toConsumableArray(interpolations))));
  };
}

function _gte(breakpoints, name) {
  return withSingleCriteria(breakpoints, name, 'min-width');
}

// TODO: allow the operator to be customised
function _map(breakpoints, value, mapValueToCSS) {
  var values = value;

  if (values === null || (typeof values === 'undefined' ? 'undefined' : _typeof(values)) !== 'object') {
    return mapValueToCSS(values);
  }

  return [
  // eslint-disable-next-line no-undefined
  mapValueToCSS(undefined)].concat(_toConsumableArray(Object.keys(values).map(function (name) {
    var tag = _gte(breakpoints, name);
    var val = values[name];
    var styles = tag([], [].concat(mapValueToCSS(val)));
    return styles;
  })));
}

var defaultBreakpoints = {
  mobile: 0, // targeting all devices
  tablet: 737, // targeting devices that are LARGER than the iPhone 6 Plus (which is 736px in landscape mode)
  desktop: 1025 // targeting devices that are LARGER than the iPad (which is 1024px in landscape mode)
};

function map(value, mapValueToCSS) {
  return function (_ref2) {
    var _ref2$theme = _ref2.theme,
        theme = _ref2$theme === undefined ? {} : _ref2$theme;

    return _map(theme.breakpoints || defaultBreakpoints, value, mapValueToCSS);
  };
}

var _templateObject$1 = _taggedTemplateLiteral$1(['\n    display: flex;\n    ', '\n    ', '\n    ', '\n    ', '\n  '], ['\n    display: flex;\n    ', '\n    ', '\n    ', '\n    ', '\n  ']);

function _taggedTemplateLiteral$1(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function halign(_ref) {
  var halign = _ref.halign,
      reverse = _ref.reverse;

  //if no value is specified, then don't output any css (it just makes it harder for the consumer to override)
  if (typeof halign === 'undefined' && typeof reverse === 'undefined') {
    return '';
  }

  return map(halign, function () {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'left';

    var rule = '';
    switch (value) {
      case 'left':
        if (reverse) {
          rule = 'flex-end';
        } else {
          rule = 'flex-start';
        }
        break;

      case 'right':
        if (reverse) {
          rule = 'flex-start';
        } else {
          rule = 'flex-end';
        }
        break;

      case 'center':
        rule = 'center';
        break;

      case 'justify-center':
        rule = 'space-around';
        break;

      case 'justify':
        rule = 'space-between';
        break;

      default:
        throw new Error('styled-components-grid: halign must be one of "left", "right", "center", "justify-center" or "justify". Got "' + String(value) + '"');
    }
    return 'justify-content: ' + rule + ';';
  });
}

function valign(_ref2) {
  var valign = _ref2.valign;

  //if no value is specified, then don't output any css (it just makes it harder for the consumer to override)
  if (typeof valign === 'undefined') {
    return '';
  }

  return map(valign, function () {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'stretch';

    var rule = '';
    switch (value) {
      case 'top':
        rule = 'flex-start';
        break;

      case 'bottom':
        rule = 'flex-end';
        break;

      case 'center':
        rule = 'center';
        break;

      case 'stretch':
        rule = 'stretch';
        break;

      default:
        throw new Error('styled-components-grid: valign must be one of "top", "bottom", "center" or "stretch". Got "' + String(value) + '".');
    }
    return 'align-items: ' + rule + ';';
  });
}

function reverse(_ref3) {
  var reverse = _ref3.reverse;

  //if no value is specified, then don't output any css (it just makes it harder for the consumer to override)
  if (typeof reverse === 'undefined') {
    return '';
  }

  return map(reverse, function () {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return 'flex-direction: ' + (value && 'row-reverse' || 'row') + ';';
  });
}

function wrap(_ref4) {
  var wrap = _ref4.wrap,
      reverse = _ref4.reverse;

  return map(wrap, function () {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    if (value && reverse) {
      return 'flex-wrap: wrap-reverse;';
    } else if (value === false) {
      return 'flex-wrap: nowrap;';
    } else {
      return 'flex-wrap: wrap;';
    }
  });
}

function grid (props) {
  return styled.css(_templateObject$1, halign(props), valign(props), reverse(props), wrap(props));
}

var _templateObject$2 = _taggedTemplateLiteral$2(['\n    box-sizing: border-box;\n    ', ' ', ';\n  '], ['\n    box-sizing: border-box;\n    ', ' ', ';\n  ']);

function _taggedTemplateLiteral$2(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function size(_ref) {
  var size = _ref.size;

  return map(size, function () {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    switch (value) {
      case 'min':
        return '\n          flex-grow: 0;\n          flex-basis: auto;\n          width: auto;\n          max-width: none;\n        ';

      case 'max':
        return '\n          flex-grow: 1;\n          flex-basis: auto;\n          width: auto;\n          max-width: none;\n          max-width: 100%; /* TODO: does this always work as expected? */\n        ';

      default:
        {
          var pct = Math.round((typeof value === 'number' ? value : 1) * 100 * 10000) / 10000; //round to 4 decimal places
          return '\n          flex-basis: ' + pct + '%;\n          max-width: ' + pct + '%;\n        ';
        }
    }
  });
}

function visible(_ref2) {
  var visible = _ref2.visible;

  //if no value is specified, then don't output any css (it just makes it harder for the consumer to override)
  if (typeof visible === 'undefined') {
    return '';
  }

  return map(visible, function (value) {
    if (value === false) {
      return 'display: none;';
    } else {
      return 'display: flex;'; /* TODO: does this always work as expected? */
    }
  });
}

function gridUnit (props) {
  return styled.css(_templateObject$2, size(props), visible(props));
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var dist = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



var _react2 = _interopRequireDefault(React__default['default']);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function omitKeys(keys, object) {
  return Object.keys(object).reduce(function (cleanObject, key) {
    if (keys.includes(key)) {
      return cleanObject;
    } else {
      return _extends({}, cleanObject, _defineProperty({}, key, object[key]));
    }
  }, {});
}

exports.default = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$tag = _ref.tag,
      defaultTag = _ref$tag === undefined ? 'div' : _ref$tag,
      _ref$prop = _ref.prop,
      prop = _ref$prop === undefined ? 'tag' : _ref$prop,
      _ref$propsToOmit = _ref.propsToOmit,
      propsToOmit = _ref$propsToOmit === undefined ? [] : _ref$propsToOmit;

  return function (_ref2) {
    var children = _ref2.children,
        otherProps = _objectWithoutProperties(_ref2, ['children']);

    var tag = otherProps[prop] || defaultTag;
    var omitPropsKeys = [prop].concat(_toConsumableArray(propsToOmit));
    var props = omitKeys(omitPropsKeys, otherProps);
    return _react2.default.createElement(tag, props, children);
  };
};
});

var createComponentFromTagProp = /*@__PURE__*/getDefaultExportFromCjs(dist);

var _templateObject$3 = _taggedTemplateLiteral$3(['\n  box-sizing: border-box;\n  ', '\n'], ['\n  box-sizing: border-box;\n  ', '\n']);

function _taggedTemplateLiteral$3(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GridUnitComponent = createComponentFromTagProp({
  tag: 'div',
  prop: 'component',
  propsToOmit: ['width', 'visible']
});

var GridUnit = styled__default['default'](GridUnitComponent)(_templateObject$3, gridUnit);

var _templateObject$4 = _taggedTemplateLiteral$4(['\n  display: flex;\n  ', '\n'], ['\n  display: flex;\n  ', '\n']);

function _taggedTemplateLiteral$4(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GridComponent = createComponentFromTagProp({
  tag: 'div',
  prop: 'component',
  propsToOmit: ['halign', 'valign', 'reverse', 'wrap']
});

var Grid = styled__default['default'](GridComponent)(_templateObject$4, grid);

grid.unit = gridUnit;
Grid.Unit = GridUnit;

var StyledGrid = styled__default['default'](Grid)(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n    width: ", ";\n"], ["\n    width: ", ";\n"])), function (_a) {
    var width = _a.width;
    return WIDTH_HEIGHT_VALUES[width] || '100%';
});
var StyledCol = styled__default['default'](Grid.Unit)(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n    display: flex;\n    ", "\n    padding: ", "px;\n\n    @media screen and (min-width: ", ") {\n        padding: ", "px;\n    }\n"], ["\n    display: flex;\n    ", "\n    padding: ", "px;\n\n    @media screen and (min-width: ", ") {\n        padding: ", "px;\n    }\n"])), function (_a) {
    var direction = _a.direction, alignX = _a.alignX, alignY = _a.alignY;
    return (direction || alignX || alignY ? makeFlex(direction, alignX, alignY) : '');
}, function (_a) {
    var theme = _a.theme;
    return theme.bme.grid.gap.mobile / 2;
}, function (_a) {
    var theme = _a.theme;
    return theme.breakpoints.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.bme.grid.gap.tablet / 2;
});
var GridCol = function (_a) {
    var children = _a.children, mobile = _a.mobile, tablet = _a.tablet, desktop = _a.desktop, props = __rest(_a, ["children", "mobile", "tablet", "desktop"]);
    var sizes = styled.useTheme().bme.grid.sizes;
    var size = {
        xs: mobile / sizes.mobile,
        md: tablet / sizes.tablet,
        xl: desktop / sizes.desktop,
    };
    return (React__default['default'].createElement(StyledCol, __assign({ size: size }, props), children));
};
var StyledContainer = styled__default['default'].div(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n    width: 100%;\n    ", "\n    margin: 0 auto;\n\n    @media screen and (min-width: ", "px) {\n        max-width: 1180px;\n    }\n"], ["\n    width: 100%;\n    ", "\n    margin: 0 auto;\n\n    @media screen and (min-width: ", "px) {\n        max-width: 1180px;\n    }\n"])), spacing('padding', { x: 'm' }), function (_a) {
    var theme = _a.theme;
    return theme.breakpoints.xl;
});
var GridContainer = function (_a) {
    var children = _a.children;
    return React__default['default'].createElement(StyledContainer, null, children);
};
var Grid$1 = function (_a) {
    var children = _a.children, args = __rest(_a, ["children"]);
    return (React__default['default'].createElement(StyledGrid, __assign({}, args), children));
};
Grid$1.Col = GridCol;
Grid$1.Container = GridContainer;
var templateObject_1$9, templateObject_2$4, templateObject_3$1;

var TopbarBrand = function (_a) {
    var children = _a.children;
    return (React__default['default'].createElement(Grid$1.Col, { mobile: 1, tablet: 1, desktop: 2, alignY: "center" },
        React__default['default'].createElement(Box, { alignY: "center" }, children)));
};

var TopbarContent = function (_a) {
    var children = _a.children;
    return (React__default['default'].createElement(Grid$1.Col, { mobile: 3, tablet: 7, desktop: 10, alignY: "center" },
        React__default['default'].createElement(Box, { alignX: "right", alignY: "center", width: "full", height: "full" }, children)));
};

var StyledTopbar = styled__default['default'].header(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n    position: ", ";\n    top: 0;\n    left: 0;\n\n    display: flex;\n    ", "\n    width: 100%;\n    ", "\n    ", "\n  ", "\n"], ["\n    position: ", ";\n    top: 0;\n    left: 0;\n\n    display: flex;\n    ", "\n    width: 100%;\n    ", "\n    ", "\n  ",
    "\n"])), function (_a) {
    var fixed = _a.fixed;
    return (fixed ? 'fixed' : 'relative');
}, makeFlex('row', 'center', 'center'), function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return (variant ? "color: " + textColour(theme.bme.palette[variant], theme) + ";" : '');
}, function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return (variant ? "background: " + theme.bme.palette[variant] + ";" : '');
}, function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return variant ? "--bme-colour-text: " + textColour(theme.bme.palette[variant], theme) + ";" : '';
});
var templateObject_1$a;

var Topbar = function (_a) {
    var children = _a.children, args = __rest(_a, ["children"]);
    return (React__default['default'].createElement(StyledTopbar, __assign({}, args),
        React__default['default'].createElement(Grid$1.Container, null,
            React__default['default'].createElement(Grid$1, null, children))));
};
Topbar.Brand = TopbarBrand;
Topbar.Content = TopbarContent;

var StyledNavWrapper = styled__default['default'].div(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n    display: block;\n    width: 100%;\n    max-width: 80vw;\n    overflow-x: scroll;\n"], ["\n    display: block;\n    width: 100%;\n    max-width: 80vw;\n    overflow-x: scroll;\n"])));
var StyledNav = styled__default['default'](Box)(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n    min-width: max-content;\n    white-space: nowrap;\n"], ["\n    min-width: max-content;\n    white-space: nowrap;\n"])));
var StyledText$1 = styled__default['default'](Text)(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n    cursor: pointer;\n    opacity: ", ";\n    ", "\n\n    &:active, &:hover {\n        opacity: 1;\n    }\n"], ["\n    cursor: pointer;\n    opacity: ", ";\n    ", "\n\n    &:active, &:hover {\n        opacity: 1;\n    }\n"])), function (_a) {
    var active = _a.active;
    return (active ? '1' : '.66');
}, transition(['opacity'], 350));
var StyledAccent$1 = styled__default['default'].span(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n    ", "\n    background: ", ";\n    ", "\n    ", "\n  opacity: ", ";\n    ", "\n    font-style: italic;\n"], ["\n    ", "\n    background: ",
    ";\n    ", "\n    ", "\n  opacity: ", ";\n    ", "\n    font-style: italic;\n"])), spacing('margin', { x: { right: 'xxs' } }), function (_a) {
    var active = _a.active, theme = _a.theme;
    return active
        ? "linear-gradient(45deg, " + theme.bme.palette.primary + ", " + theme.bme.palette.secondary + ", " + theme.bme.palette.tertiary + ")"
        : 'var(--bme-colour-texts)';
}, function (_a) {
    var active = _a.active;
    return (active ? '-webkit-background-clip: text;' : '');
}, function (_a) {
    var active = _a.active;
    return (active ? '-webkit-text-fill-color: transparent;' : '');
}, function (_a) {
    var active = _a.active;
    return (!active ? '0.82' : '1');
}, transition(['opacity'], 350));
var NavItem = function (_a) {
    var children = _a.children, active = _a.active;
    return (React__default['default'].createElement(Box, { padding: { x: 's' }, as: "button" },
        React__default['default'].createElement(StyledText$1, { fontFamily: "mono", italic: true, active: active },
            React__default['default'].createElement(StyledAccent$1, { active: active }, "#"),
            children)));
};
var Nav = function (_a) {
    var children = _a.children, alignX = _a.alignX;
    return (React__default['default'].createElement(StyledNavWrapper, null,
        React__default['default'].createElement(StyledNav, { width: "full", alignX: alignX, margin: { y: 'm' } }, children)));
};
Nav.defaultProps = {
    alignX: 'justify',
};
Nav.Item = NavItem;
var templateObject_1$b, templateObject_2$5, templateObject_3$2, templateObject_4$1;

var StyledLabel = styled__default['default'].label(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n    position: absolute;\n    top: ", ";\n    left: ", "px;\n    transform: translateY(-50%);\n    ", "\n"], ["\n    position: absolute;\n    top: ", ";\n    left: ", "px;\n    transform: translateY(-50%);\n    ", "\n"])), function (_a) {
    var filled = _a.filled;
    return (filled ? TextFontSize.s + "px" : '50%');
}, sizeToPx('m'), transition(['top', 'font-size'], 350));
var StyledInput = styled__default['default'].input(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n    width: 100%;\n    ", "\n    color: var(--bme-colour-text);\n    background: ", ";\n    border-radius: 5px;\n    border: var(--bme-colour-text) 1px solid;\n\n    font-size: ", "px;\n\n    appearance: none;\n    ", "\n\n    &:hover, &:active {\n        background: ", ";\n    }\n\n    &:focus {\n        border-color: ", ";\n        outline: none;\n    }\n"], ["\n    width: 100%;\n    ", "\n    color: var(--bme-colour-text);\n    background: ", ";\n    border-radius: 5px;\n    border: var(--bme-colour-text) 1px solid;\n\n    font-size: ", "px;\n\n    appearance: none;\n    ", "\n\n    &:hover, &:active {\n        background: ", ";\n    }\n\n    &:focus {\n        border-color: ", ";\n        outline: none;\n    }\n"])), spacing('padding', { x: 'm', y: { top: 'l', bottom: 's' } }), function (_a) {
    var theme = _a.theme;
    return hexToRGBA(theme.bme.palette.dark, 0);
}, TextFontSize.m, transition(['background'], 350), function (_a) {
    var theme = _a.theme;
    return hexToRGBA(theme.bme.palette.dark, 0.13);
}, function (_a) {
    var theme = _a.theme;
    return theme.bme.palette.focus;
});
var templateObject_1$c, templateObject_2$6;

var TextField = function (_a) {
    var name = _a.name, value = _a.value, label = _a.label, onChange = _a.onChange, required = _a.required;
    var _b = React.useState(!isEmpty(value)), filled = _b[0], setFilled = _b[1];
    var handleChange = function (_a) {
        var targetValue = _a.target.value;
        setFilled(!isEmpty(targetValue));
        onChange(targetValue);
    };
    var handleFocus = function () {
        setFilled(true);
    };
    var handleBlur = function (_a) {
        var targetValue = _a.target.value;
        setFilled(!isEmpty(targetValue));
    };
    return (React__default['default'].createElement(Box, { width: "full" },
        React__default['default'].createElement(StyledLabel, { for: name, filled: filled },
            React__default['default'].createElement(Text, { size: filled ? 'xxs' : 'm' }, renderLabel(label, required))),
        React__default['default'].createElement(StyledInput, { id: name, name: name, value: value, onChange: handleChange, onFocus: handleFocus, onBlur: handleBlur })));
};

var StyledSelect = styled__default['default'].select(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n    width: 100%;\n    ", "\n    color: var(--bme-colour-text);\n    background: ", ";\n    border-radius: 5px;\n    border: var(--bme-colour-text) 1px solid;\n\n    font-size: ", "px;\n\n    appearance: none;\n    ", "\n\n    &:hover, &:active {\n        background: ", ";\n    }\n\n    &:focus {\n        border-color: ", ";\n        outline: none;\n    }\n"], ["\n    width: 100%;\n    ", "\n    color: var(--bme-colour-text);\n    background: ", ";\n    border-radius: 5px;\n    border: var(--bme-colour-text) 1px solid;\n\n    font-size: ", "px;\n\n    appearance: none;\n    ", "\n\n    &:hover, &:active {\n        background: ", ";\n    }\n\n    &:focus {\n        border-color: ", ";\n        outline: none;\n    }\n"])), spacing('padding', { x: 'm', y: { top: 'm', bottom: 'm' } }), function (_a) {
    var theme = _a.theme;
    return hexToRGBA(theme.bme.palette.dark, 0);
}, TextFontSize.m, transition(['background'], 350), function (_a) {
    var theme = _a.theme;
    return hexToRGBA(theme.bme.palette.dark, 0.13);
}, function (_a) {
    var theme = _a.theme;
    return theme.bme.palette.focus;
});
var templateObject_1$d;

var Select = function (_a) {
    var name = _a.name, options = _a.options, value = _a.value, label = _a.label, onChange = _a.onChange, required = _a.required;
    var handleChange = function (_a) {
        var targetValue = _a.target.value;
        onChange(targetValue);
    };
    return (React__default['default'].createElement(StyledSelect, { as: "select", id: name, name: name, value: value, onChange: handleChange },
        React__default['default'].createElement("option", { value: "null", selected: true }, renderLabel(label, required)),
        options.map(function (_a) {
            var optionValue = _a.value, content = _a.content;
            return (React__default['default'].createElement("option", { key: optionValue, value: optionValue, selected: false }, content));
        })));
};

var StyledSwitch = styled__default['default'].input(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n    display: none;\n    visibility: hidden;\n    appearance: none;\n"], ["\n    display: none;\n    visibility: hidden;\n    appearance: none;\n"])));
var StyledLabel$1 = styled__default['default'].label(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n    width: 100%;\n"], ["\n    width: 100%;\n"])));
var templateObject_1$e, templateObject_2$7;

var Switch = function (_a) {
    var name = _a.name, value = _a.value, label = _a.label, onChange = _a.onChange, required = _a.required, variant = _a.variant;
    var _b = React.useState(false), stateValueHasChanged = _b[0], setStateValueHasChanged = _b[1];
    var handleChange = function (_a) {
        var checked = _a.target.checked;
        setStateValueHasChanged(true);
        onChange(checked);
    };
    return (React__default['default'].createElement(Box, { width: "full", padding: { x: 'm' } },
        React__default['default'].createElement(StyledLabel$1, { htmlFor: name },
            React__default['default'].createElement(Box, { width: "full", alignX: "justify" },
                React__default['default'].createElement(Text, null, renderLabel(label, required)),
                React__default['default'].createElement(Switch$1, { checked: value, variant: variant }))),
        React__default['default'].createElement(StyledSwitch, { type: "checkbox", id: name, name: name, checked: value, onChange: handleChange, required: stateValueHasChanged ? required : false })));
};
Switch.defaultProps = {
    variant: 'primary',
};

var CharacterLimit = function (_a) {
    var characters = _a.characters, maxLimit = _a.maxLimit;
    return isRealNumber(characters) && maxLimit ? (React__default['default'].createElement(Text, { size: "xxs" },
        characters,
        " / ",
        maxLimit)) : null;
};
var Label = function (_a) {
    var helperText = _a.helperText, errorText = _a.errorText, valid = _a.valid, children = _a.children, characterLimitProps = __rest(_a, ["helperText", "errorText", "valid", "children"]);
    var stateValid = React.useState(valid || true)[0];
    return (React__default['default'].createElement(Box, { width: "full", direction: "column" },
        React__default['default'].createElement(Box, { width: "full" }, children),
        React__default['default'].createElement(Box, { width: "full", alignX: "justify", padding: { y: 's', x: 'm' } },
            React__default['default'].createElement(Text, { size: "xxs", variant: !stateValid ? 'required' : null }, !stateValid ? errorText : helperText),
            React__default['default'].createElement(CharacterLimit, __assign({}, characterLimitProps)))));
};
Label.defaultProps = {
    helperText: '&nbsp;',
    errorText: '&nbsp;',
};

var Form = function (_a) {
    var children = _a.children;
    return React__default['default'].createElement(React__default['default'].Fragment, null, children);
};
Form.TextField = TextField;
Form.Select = Select;
Form.Switch = Switch;
Form.Label = Label;

var StyledList = styled__default['default'](Box)(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n    overflow: hidden;\n    border: ", " 1px solid;\n"], ["\n    overflow: hidden;\n    border: ", " 1px solid;\n"])), function (_a) {
    var borderColour = _a.borderColour, theme = _a.theme;
    return hexToRGBA(theme.bme.palette[borderColour], 0.33);
});
var StyledListItem = styled__default['default'](Box)(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n    border-bottom: ", " 1px solid;\n"], ["\n    border-bottom: ", " 1px solid;\n"])), function (_a) {
    var borderColour = _a.borderColour, theme = _a.theme;
    return hexToRGBA(theme.bme.palette[borderColour], 0.33);
});
var ListItem = function (_a) {
    var children = _a.children, borderColour = _a.borderColour;
    return (React__default['default'].createElement(StyledListItem, { borderColour: borderColour, direction: "column", padding: { x: 'm', y: 's' } }, children));
};
var List = function (_a) {
    var children = _a.children, borderColour = _a.borderColour, background = _a.background;
    var childrenWithProps = React__default['default'].Children.map(children, function (child) {
        var props = { borderColour: borderColour };
        if (React__default['default'].isValidElement(child)) {
            return React__default['default'].cloneElement(child, props);
        }
        return child;
    });
    return (React__default['default'].createElement(StyledList, { width: "full", direction: "column", rounded: true, borderColour: borderColour, background: background }, childrenWithProps));
};
List.defaultProps = {
    borderColour: 'light',
};
List.Item = ListItem;
var templateObject_1$f, templateObject_2$8;

var StyledCustomSwitch = styled__default['default'].div(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n    display: flex;\n    ", "\n    width: ", "px;\n    height: ", "px;\n    border: solid 1px ", ";\n    background: ", ";\n    border-radius: 1000px;\n    ", ";\n    cursor: pointer;\n"], ["\n    display: flex;\n    ", "\n    width: ", "px;\n    height: ", "px;\n    border: solid 1px ", ";\n    background: ", ";\n    border-radius: 1000px;\n    ", ";\n    cursor: pointer;\n"])), makeFlex('row', 'center', 'center'), sizeToPx('l') * 2, sizeToPx('l'), function (_a) {
    var variant = _a.variant, theme = _a.theme;
    return theme.bme.palette[variant];
}, function (_a) {
    var checked = _a.checked, variant = _a.variant, theme = _a.theme;
    return (checked ? theme.bme.palette[variant] : 'transparent');
}, transition(['background']));
var StyledCustomSwitchIndicator = styled__default['default'].div(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n    display: inline-block;\n    width: ", "px;\n    height: ", "px;\n    margin: ", ";\n    border-radius: 1000px;\n    background: ", ";\n    ", ";\n"], ["\n    display: inline-block;\n    width: ", "px;\n    height: ", "px;\n    margin: ", ";\n    border-radius: 1000px;\n    background: ",
    ";\n    ", ";\n"])), sizeToPx('m'), sizeToPx('m'), function (_a) {
    var checked = _a.checked;
    return (checked ? "0 0 0 " + sizeToPx('m') + "px" : "0 " + sizeToPx('m') + "px 0 0");
}, function (_a) {
    var checked = _a.checked, variant = _a.variant, theme = _a.theme;
    return checked ? textColour(theme.bme.palette[variant], theme) : theme.bme.palette[variant];
}, transition(['margin', 'background']));
var templateObject_1$g, templateObject_2$9;

var Switch$1 = function (_a) {
    var checked = _a.checked, variant = _a.variant, onClick = _a.onClick;
    var handleClick = function () {
        onClick(!checked);
    };
    return (React__default['default'].createElement(StyledCustomSwitch, { checked: checked, variant: variant, onClick: handleClick },
        React__default['default'].createElement(StyledCustomSwitchIndicator, { checked: checked, variant: variant })));
};
Switch$1.defaultProps = {
    checked: false,
    variant: 'primary',
};

exports.BMEBadge = Badge;
exports.BMEBox = Box;
exports.BMEButton = Button;
exports.BMECard = Card;
exports.BMEForm = Form;
exports.BMEGlobalStyles = GlobalStyles;
exports.BMEGrid = Grid$1;
exports.BMEHeader = Header;
exports.BMEImage = Image;
exports.BMEList = List;
exports.BMENav = Nav;
exports.BMESwitch = Switch$1;
exports.BMEText = Text;
exports.BMETopbar = Topbar;
//# sourceMappingURL=index.js.map

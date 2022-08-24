"use strict";
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
exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
// #1 - Import the component
var MyLabel_1 = require("../../components/MyLabel");
// #2 - Default export of the tested component.
exports.default = {
    /* 👇 The title prop groups the component stories under UI/MyLabel/ */
    title: 'UI/MyLabel',
    component: MyLabel_1.MyLabel,
};
// #3 - Create template to build the component
var Template = function (args) { return (0, jsx_runtime_1.jsx)(MyLabel_1.MyLabel, __assign({}, args)); };
// #4 - Create the stories
/**
 * This is a basic label with customized args
*/
exports.Basic = Template.bind({});
exports.Basic.args = {
    label: 'Basic label'
};
/**
 * A label with all caps
*/
exports.AllCaps = Template.bind({});
exports.AllCaps.args = {
    label: 'All caps label',
    size: 'h1',
    allCaps: true
};
/**
 * A label with other color
*/
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    label: 'Secondary label',
    fontColor: 'secondary'
};

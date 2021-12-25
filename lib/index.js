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
var calculate = function (arr) {
    var _arrayParser = [];
    var _currentRate = 0;
    // * Check total rate of all params
    var _totalRate = arr.reduce(function (acc, cur) { return acc + cur.rate; }, 0);
    if (_totalRate !== 100)
        throw new Error("Total rate must be 100");
    // * Random number
    var _random = Math.random() * _totalRate;
    for (var i = 0; i < arr.length; i++) {
        _currentRate += arr[i].rate;
        _arrayParser.push(__assign(__assign({}, arr[i]), { rate: _currentRate }));
    }
    // * Find the index of the random number
    for (var i = 0; i < _arrayParser.length; i++) {
        if (i === 0 && _random <= _arrayParser[i].rate) {
            return arr[i];
        }
        if (_random > _arrayParser[i].rate && _random <= _arrayParser[i + 1].rate) {
            return arr[i + 1];
        }
    }
    return arr[0];
};
exports.default = { calculate: calculate };

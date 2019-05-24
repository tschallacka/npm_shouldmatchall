"use strict";
var regExp = /[-\/\\^$*+?.()|[\]{}]/g,
    replacement =    '\\$&';
module.exports = function(str, arr) {
    
    if(!str || typeof str != "string") {
        throw new Error("No valid String provided to match against");
    }
    if(!arr || !Array.isArray(arr) || arr.length === 0) {
        throw new Error("Nothing to match against. Provide a non empty Array of Strings as second argument");
    }
    return (new RegExp(arr.map(s => s.replace(regExp, replacement)).join('([\\s\\S]*?)'))).test(str);
};
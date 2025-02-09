"use strict";
// base requirements:
// multiple pages
// forms
// manage array of objects
// relation to other objects
exports.__esModule = true;
exports.decomission = exports.acquire = exports.consume = exports.addToStock = exports.addItem = exports.inventory = exports.stock = exports.items = void 0;
// API
exports.items = [];
exports.stock = [];
exports.inventory = [];
function addItem(item) { }
exports.addItem = addItem;
function addToStock(itemId, amount) { }
exports.addToStock = addToStock;
function consume(itemId, quantity) { }
exports.consume = consume;
function acquire(itemId, serial) { }
exports.acquire = acquire;
function decomission(serial) { }
exports.decomission = decomission;

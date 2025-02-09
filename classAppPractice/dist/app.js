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
function addItem(item) {
    if (exports.items.some(function (i) { return i.id === item.id; })) {
        return false;
    }
    exports.items.push(item);
}
exports.addItem = addItem;
function addToStock(itemId, amount) {
    var existing = exports.stock.find(function (item) { return item.itemId === itemId; });
    if (existing) {
        existing.quantity += amount;
    }
    else {
        exports.stock.push({ itemId: itemId, quantity: amount });
    }
}
exports.addToStock = addToStock;
function consume(itemId, quantity) {
    var existing = exports.stock.find(function (item) { return item.itemId === itemId; });
    if (existing) {
        existing.quantity -= quantity;
    }
}
exports.consume = consume;
function acquire(itemId, serial) {
    exports.inventory.push({ itemId: itemId, serial: serial });
}
exports.acquire = acquire;
function decomission(serial) {
    var index = exports.inventory.findIndex(function (item) { return item.serial === serial; });
    if (index >= 0) {
        exports.inventory.splice(index, 1);
    }
}
exports.decomission = decomission;

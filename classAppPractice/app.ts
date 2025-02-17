// base requirements:
// multiple pages
// forms
// manage array of objects
// relation to other objects

// office
// manage inventory
// manage employees
// manage loaned equipment

// Model
type ConsumableItem = {
    id: string,
    name: string,
    category: "Supplies",
    description?: string,
    priceInAgorot: number,
};

type EquipmentItem = {
    id: string,
    name: string,
    category: "Furniture" | "IT",
    description?: string,
    priceInAgorot: number,
};

type Item = ConsumableItem | EquipmentItem;

type Stock = { itemId: string, quantity: number }[];
type Inventory = { itemId: string, serial: string }[];

// API
export let items: Item[] = [];
export let stock: Stock = [];
export let inventory: Inventory = [];

export function addItem(item: Item) {
    if (items.some((i) => i.id === item.id)) {
        return false;
    }
    items.push(item);
}

export function addToStock(itemId: string, amount: number) {
    const existing = stock.find((item) => item.itemId === itemId);
    if (existing) {
        existing.quantity += amount;
    } else {
        stock.push({ itemId, quantity: amount });
    }
}

export function consume(itemId: string, quantity: number) {
    const existing = stock.find((item) => item.itemId === itemId);
    if (existing) {
        existing.quantity -= quantity;
    }
}

export function acquire(itemId: string, serial: string) {
    inventory.push({ itemId, serial });
}

export function decomission(serial: string) {
    const index = inventory.findIndex((item) => item.serial === serial);
    if (index >= 0) {
        inventory.splice(index, 1);
    }
}

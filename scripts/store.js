

import item from './item.js';
import render from './shopping-list.js';

let items = [];
let hideCheckedItems = false;

const findById = function(id) {
    return this.items.find(item => item.id === id)
}

const addItem = function(name) {
    try {
        item.validateName(name);
        this.items.push(item.create(name));
        shopping-list.render()
    } catch(error) {
        console.log(`Cannot add item: ${error.message}`)
    }
}

const findAndToggleChecked = function(id) {
    this.findById(id).checked = !this.findById(id).checked
}

const findAndUpdateName = function(id, newName) {
    try {
        item.validateName(newName);
        this.items.findById(id).name = newName
    } catch(error) {
        console.log(`Cannot update name: ${error.message}`)
    }
}

const findAndDelete = function(id) {
    this.items.splice(this.items.findIndex(item => item.id === id), 1)
}

const toggleCheckedFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems
  }

export default {
    items,
    hideCheckedItems,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter
};


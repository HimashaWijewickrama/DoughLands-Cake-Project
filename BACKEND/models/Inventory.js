const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const inventorySchema = new Schema({


    qinstock: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    qusedpresent: {
        type: Number,
        required: true
    },

    unitprice: {
        type: Number,
        required: true
    },
    
    totcost: {
        type: Number,
        required: true
    }



})

const Inventory = mongoose.model("Inventory", inventorySchema);

module.exports = Inventory;
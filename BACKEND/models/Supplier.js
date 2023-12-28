const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const supplierSchema = new Schema({

    applyby : {
        type : String,
        required : true
    },
    compname : {
        type : String,
        required : true
    },
    supaddr : {
        type : String,
        required : true
    },
   
   
    supdis : {
        type : String,
        required : true
    },
    postalcode : {
        type : String,
        required : true
    },
    country : {
        type : String,
        required : true
    },
    telephone : {
        type : String,
        required : true
    },
    fax : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    }
})

const Supplier = mongoose.model("Supplier",supplierSchema);

module.exports = Supplier;
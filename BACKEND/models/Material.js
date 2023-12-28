const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const materialSchema = new Schema({

    matname : {
        type : String,
        required : true
    },
    matcategory : {
        type : String,
        required : true
    },
    matunit : {
        type: String,
        required: true
    },
    maxlevel : {
        type: Number,
        required: true
    },
   
    matunitprice : {
        type: Number,
        required:true

    },
    mtotcost :{
        type : Number,
        required:true
    }
})

const Material = mongoose.model("Material",materialSchema);

module.exports = Material;
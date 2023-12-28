const router = require("express").Router();

let Supplier = require("../models/Supplier");



//add new supplier
router.route("/add").post((req,res)=>{

    const applyby =req.body.applyby;
    const compname = req.body.compname;
    const supaddr = req.body.supaddr;
    

    const supdis = req.body.supdis;
    const postalcode = req.body.postalcode;
    const country = req.body.country;
    const telephone = req.body.telephone;
    const fax = req.body.fax;
    const email = req.body.email;

    const newSupplier = new Supplier({

        applyby,
        compname, 
        supaddr,
       
        supdis,
        postalcode,
        country,
        telephone,
        fax,
        email

    })

    newSupplier.save().then(()=>{
        res.json("Supplier is Added!")

    }).catch((err)=>{
        console.log(err);
    })


})


//view suppliers
router.route("/allsup").get((req,res)=>{
    Supplier.find().then((suppliers)=>{
        res.json(suppliers)
    }).catch((err)=>{
        console.log(err)
    })
})

//update supplier
router.route("/updates/:id").put(async(req,res)=> {
    let supId = req.params.id;
    const {applyby, compname, supaddr, supdis, postalcode, country, telephone, fax, email} = req.body;

    const updateSupplier = {
        applyby,
        compname, 
        supaddr,
        
        supdis,
        postalcode,
        country,
        telephone,
        fax,
        email

    }

    const update = await Supplier.findByIdAndUpdate(supId, updateSupplier).then(() => {
        res.status(200).send({status: "Supplier updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })

})
//delete supplier
router.route("/delete/:id").delete((req, res) => {

    let supId = req.params.id;
    Supplier.findByIdAndDelete(supId).then(() => {
        res.json("Delete Succussfully!");
        
    }).catch((err) => {
        console.log(err);
        
    })
})

//fetch data of user
router.route("/geted/:id").get(async(req, res) => {
    let supId = req.params.id;
    await Supplier.findById(supId).then((supplier) => {
        //res.status(200).send({status: "Item fetched", supplier})
        res.json(supplier);
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with get item", error: err.message});
    })
})

module.exports = router;
const router = require("express").Router();

let Material = require("../models/Material");



//add new material
router.route("/added").post((req,res)=>{

    const matname = req.body.matname;
    const matcategory = req.body.matcategory;
    const matunit = req.body.matunit;
    const maxlevel = Number(req.body.maxlevel);
    const matunitprice = Number(req.body.matunitprice);
    const mtotcost = Number(req.body.mtotcost);

    const newMaterial = new Material({

        matname, 
        matcategory,
        matunit,
        maxlevel,
        matunitprice,
        mtotcost

    })
    newMaterial.save().then(()=>{
        res.json("Material Added")

    }).catch((err)=>{
        console.log(err);
    })


})




//view materials
router.route("/all").get((req,res)=>{
    Material.find().then((materials)=>{
        res.json(materials)
    }).catch((err)=>{
        console.log(err)
    })
})
//update material
router.route("/updated/:id").put(async(req,res)=> {
    let matId = req.params.id;
    const {matname, matcategory, matunit, maxlevel, amtissued, matunitprice, mtotcost} = req.body;

    const updateMaterial = {
 
        matname, 
        matcategory,
        matunit,
        maxlevel,
        matunitprice,
        mtotcost
    }

    const update = await Material.findByIdAndUpdate(matId, updateMaterial).then(() => {
        res.status(200).send({status: "Material ID updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })

})
//delete material
router.route("/delete/:id").delete(async (req, res) => {

    let matId = req.params.id;

    await Material.findByIdAndDelete(matId).then(() => {
        res.status(200).send({status : "Material deleted"});
}).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete material", error: err.message});
    })
})




//fetch data
router.route("/gets/:id").get(async(req, res) => {
    let matId = req.params.id;
    await Material.findById(matId).then((material) => {
        //res.status(200).send({status: "Item fetched", material})
        res.json(material);
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with get item", error: err.message});
    })
})

module.exports = router;
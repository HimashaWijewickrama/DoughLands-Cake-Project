const router = require("express").Router();

let Inventory = require("../models/Inventory");



//add new inventory
router.route("/adding").post((req, res) => {

    const qinstock = Number(req.body.qinstock);
    const name = req.body.name;
    const category = req.body.category;
    const qusedpresent = Number(req.body.qusedpresent);
    const unitprice = Number(req.body.unitprice);
    const totcost = Number(req.body.totcost);


    const newInventory = new Inventory({


        qinstock,
        name,
        category,
        qusedpresent,
        unitprice,
        totcost

    })

    newInventory.save().then(() => {
        res.json("Inventory Added")

    }).catch((err) => {
        console.log(err);
    })


})


//view inventoriess


router.route("/").get((req, res) => {
    Inventory.find().then((inventories) => {
        res.json(inventories)

    }).catch((err) => {
        console.log(err);
    })
})
//update inventory
router.route("/update/:id").put(async (req, res) => {
    let itemId = req.params.id;
    const { qinstock, name, category, qusedpresent, unitprice, totcost } = req.body;

    const updateInventory = {

        qinstock,
        name,
        category,
        qusedpresent,
        unitprice,
        totcost
    }

    const update = await Inventory.findByIdAndUpdate(itemId, updateInventory).then(() => {
        res.status(200).send({ status: "Item updated" })
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with updating data", error: err.message });
    })

})
//delete inventory
router.route("/delete/:id").delete((req, res) => {

    let itemId = req.params.id;

    Inventory.findByIdAndDelete(itemId).then(() => {
        res.json("Delete Succussfully!");

    }).catch((err) => {
        console.log(err);

    })
})



//fetch data of inventories
router.route("/get/:id").get(async (req, res) => {
    let itemId = req.params.id;
    await Inventory.findById(itemId).then((inventory) => {
        //res.status(200).send({status: "Item fetched", inventory})
        res.json(inventory);
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with get item", error: err.message });
    })
})


module.exports = router;
const express = require("express");
const router = express.Router();

// item models 
const Item = require('../../models/Item')

// route GET to api/items < this is also the end point for the URL 
// @desc GET ALL Items 
// @access all 

router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items));
    
});

// POST to api/items , creates a item here.

router.post('/', (req, res) => {
    // object to insert into the datbase
 const newItem = new Item({
     name: req.body.name})
 
newItem.save().then(item => res.json(item));

});

router.put('/:id', (req, res) => {
    //   update by id
    Item.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, item) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(item);
    
    });
});

// DELETE from api/items/:id , deletes a item
router.delete('/:id', (req, res) => {
//   find the item by ID, request the ID then take the ID and remove it, if successful, true, if not show the 404 error and false message
Item.findById(req.params.id)
.then(item => item.remove().then(({success: true})))
.catch(err => res.status(404).json({success: false}))

});




module.exports = router;
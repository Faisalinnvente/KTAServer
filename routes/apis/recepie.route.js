const express = require('express');
const router  = express.Router();
const Dinner = require('../../models/dinner.model');
const Breakfast = require('../../models/breakfast.model');
const Lunch = require('../../models/lunch.model');


// get all dinners
router.get('/dinner', (req, res, next) => {
    Dinner.find().select({'_id': 0, '__v':0})
        .then((dinner) => {
            console.log(dinner)
            res.json(dinner);
        })
        .catch(err => console.log(err))

});

// get dinner by ID
router.post('/dinner/:id', (req,res,next) => {
    const rId = req.params.id;

    Dinner.findOne({recipieId: rId}).select({'_id': 0, '__v':0})
    .then((dinner) => {
            console.log(dinner)
            res.json(dinner)  
    })
    .catch(err => console.log(err));
});

// get all lunch
router.get('/lunch', (req, res, next) => {
    Lunch.find().select({'_id': 0, '__v':0})
        .then((lunch) => {
            console.log(lunch)
            res.json(lunch);
        })
        .catch(err => console.log(err))

});

// get lunch by ID
router.post('/lunch/:id', (req,res,next) => {
    const rId = req.params.id;

    Lunch.findOne({recipieId: rId}).select({'_id': 0, '__v':0})
    .then((lunch) => {
            console.log(lunch)
            res.json(lunch)  
    })
    .catch(err => console.log(err));
});

// get all breakfasts
router.get('/breakfast', (req, res, next) => {
    Breakfast.find().select({'_id': 0, '__v':0})
        .then((breakfasts) => {
            console.log(breakfasts)
            res.json(breakfasts);
        })
        .catch(err => console.log(err))

});

// get breakfast by ID
router.post('/breakfast/:id', (req,res,next) => {
    const rId = req.params.id;

    Breakfast.findOne({recipieId: rId}).select({'_id': 0, '__v':0})
    .then((breakfast) => {
            console.log(breakfast)
            res.json(breakfast)  
    })
    .catch(err => console.log(err));
});

router.get('/test', (req, res, next) => {
    Breakfast.find().select({'_id': 0, '__v':0})
        .then((breakfasts) => {
            console.log(breakfasts)
            res.json("test");
        })
        .catch(err => console.log(err))

});

module.exports = router;
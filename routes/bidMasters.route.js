const express = require('express')
const router = express.Router();
let BidsModel = require('../models/Bids.model')
let ArtModel = require('../models/Art.model')

/*
router.get('/liveauction', (req, res) => {
    axios.get('https://api.harvardartmuseums.org/exhibition?after=1975&before=2000&apikey=e178f955-e1d9-440a-bcb2-c9c66b3e9277', {
        params: {
            
            title: "dog",
            fields: "objectnumber,title,dated",
        }
      });
      
       
    });
*/

router.get('/art', (req, res) => {
    ArtModel.find()
         .then((art) => {
              res.status(200).json(art)
         })
         .catch((err) => {
              res.status(500).json({
                   error: 'There should be something here ??',
                   message: err
              })
         })         
})

router.get('/auctiondetail/:artId', (req, res) => {
    ArtModel.findById(req.params.artId)
     .then((response) => {
          res.status(200).json(response)
     })
     .catch((err) => {
          res.status(500).json({
               error: 'There should be something here ??',
               message: err
          })
     }) 
})


router.post('/auctiondetail/:artId', (req, res) => {
     const {bid, userId} = req.body;
     const {artId} = req.params
     console.log(bid, userId)
     BidsModel.create({bid, artId, userId})
           .then((response) => {
                res.status(200).json(response)
           })
           .catch((err) => {
                res.status(500).json({
                     error: 'Something went wrong here toooo',
                     message: err
                })
           })  
 })



router.post('/sellform',  (req, res) => {  
     const {artist, title, year, image, price, days, user} = req.body;
    /*  console.log(artist, title, year, price, days, user) */
     
     

     ArtModel.create({artist, title, year, image, price, days, user})
           .then((response) => {
                res.status(200).json(response)
           })
           .catch((err) => {
                res.status(500).json({
                     error: 'Something went wrong',
                     message: err
                })
           })  
 })



module.exports = router;


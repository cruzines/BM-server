const express = require('express')
const router = express.Router();
let BidsModel = require('../models/Bids.model')
let ArtModel = require('../models/Art.model')



router.get('/art', (req, res) => {
    ArtModel.find()
         .then((art) => {
              res.status(200).json(art)
         })
         .catch((err) => {
              res.status(500).json({
                   error: 'Something went wrong',
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
               error: 'Something went wrong',
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
                     error: 'Something went wrong',
                     message: err
                })
           })  
 })

 router.get('/bids', (req, res) => {
      console.log ('hello Josh')
     BidsModel.find()
      .then((response) => {
           console.log(response)
           res.status(200).json(response)
      })
      .catch((err) => {
           res.status(500).json({
                error: 'Something went wrong',
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

 
 router.get('/user/added/:userId', (req, res) => {
    //const {user} = req.params
     //console.log(user)
     ArtModel.findById(req.params.userId)
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


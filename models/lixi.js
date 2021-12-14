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
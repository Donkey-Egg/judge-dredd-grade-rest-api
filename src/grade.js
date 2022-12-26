var express = require('express');
var router = express.Router();


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const fs = require('fs');

// middleware that is specific to this router
router.use(async (req, res, next) =>{
  console.log('Time: ', Date.now());
  next();
});


router.get('/', async (req, res)=> {    
    res.status(200).send({resource:"grade",action:'GET',value:"Some result"});

});
router.get('/:id', async (req, res)=> {
    res.status(200).send({resource:"grade",action:"GET",_id:req.params.id,value:"Some result"});
});

router.post('/', async (req, res) =>{
  const payload = JSON.stringify(req.body)
  res.status(200).send({resource:"grade",action:"POST",value:payload});
});




router.put('/:id', async (req, res) =>{
  const payload = JSON.stringify(req.body)
  res.status(200).send({resource:"grade",action:"PUT",_id:req.params.id,value:payload});
});



router.delete('/:id', async (req, res) =>{
  res.status(200).send({resource:"grade",action:"DELETE",_id:req.params.id});
});

module.exports = router;



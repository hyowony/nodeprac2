const express = require("express")
const router = express.Router();
const {Post, User} = require("../models")
const {postCreateValidation} = require("../validations")

module.exports = router;

router.get("/", async (req,res)=> {
  try {
    const posts = await Post.findAll({
      include: [{model:User, as:'user', attributes: ['nickname']}],
      attributes: { exclude:['userId']},
    });
    
    res.json(posts)

  } catch(err) {
    res.status(500).json({message:err.message});
  }
})
//상세조회 

router.get("/")

router.post("/", async (req, res)=> {
  console.log(req.body)
  try {
    const {title, content,userId} = await postCreateValidation.validateAsync(req.body);
    const post = await Post.create({
      title, content, userId,

    })
    res.json(post);
  } catch(err) { 
    if (err.isJoi) {
      return res.status(422).json({message:err.details[0].message});
    }
    res.status(500).json({message:err.message});

  }
})
module.exports = router;

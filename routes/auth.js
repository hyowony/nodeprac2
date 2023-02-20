const express = require("express");
const router = express.Router();
const {signupValidation} = require("../validations");
const { User } = require("../models");
const bcrypt = require("bcrypt")


router.get("/users", async (req,res)=> {
  try {
    const users = await User.findAll({

    
      attributes: {exclude:['password']}
    
    });
    res.json(users);
  } catch(err) {}
});
//회원가입 
router.post('/signup', async (req,res) => {
 try {
  const {nickname,password} = await signupValidation.validateAsync(
    req.body
    );
    const hashPassword = await bcrypt.hash(password,12)
    const user = await User.create({
      nickname,
      password: hashPassword
    })
    res.json(user);
 

 } catch(err) {
  if(err.isJoi) {
    return res.status(422).json({message:err.details[0].message})
  }
  res.status(500).json({message:err.message});
  console.log(err)

 }
});

module.exports = router
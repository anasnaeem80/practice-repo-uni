const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const { validationResult, check } = require("express-validator");

//@route POST api/users
//@describe Register a new User
//@access public

router.post(
  '/',
  [
    check('name','Please enter a name').not().isEmpty(),
    check('email','Please enter a valid email').isEmail(),
    check('password','Please enter atleast 6 letters').isLength(),
    min:6,
  }),
], 
 async (req, res), => {
  const result=validationResult(req);

  if !result.isEmpty(){
    return res.status(400).json({errors:SpeechRecognitionResultList.array() })
  }
  const {name,email,password}=req.body;

    try{
      let users= await User.findOne({email}):

      if (user) {
        return res.status(400).json({msg: "User already exist"})
      }

      user= new User({
        name,
        email,
        password,
      });

      const salt= await bcrypt.genSalt(10):
      user.password= await bcrypt.hash(password,salt);

      await user.save();

      const payload = {
        user:{
          id:user.id,
        },
      };

      jwt.sign(
        payload,
        process.env.JWTSECRET,
        {
          expiresIN:3600000,
        },
        (err,token)=>{
          if (err) throw err.message;
          res.json({token});
        }
      );
    } catch(err){
      console.error(err.message)
      res.status(500).json({
        msg: 'Server error'
      });
    }
  }

module.exports = router;

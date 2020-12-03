const {validationResult} = require("express-validator")
const jwt = require("jsonwebtoken");
const config = require("config");

let User = require("../../schemas/User");

module.exports = async (req,res) => {
  try {
    let {name,lastName,userName,email,password} = req.body;

    let user = await User.findOne({email}).select("-password");

    let fetchedUserNameFromDatabase = await User.findOne({userName}).select("-password");

    let errors = validationResult(req);
    
    if(!errors.isEmpty()){
      return res.status(400).json({errors : errors.array()});
    }

    if(user){
      return res.status(401).send("User already created");
    }

    if (fetchedUserNameFromDatabase === userName){
      return res.status(401).json("Username is already taken");
    }

    let newUser = new User({
      name,
      lastName,
      userName,
      email,
      password,
    });

    await newUser.save();
    // res.send("NEW USER is created.");

    const payload = {
      user:{
        id:newUser._id,
      },
    };

    jwt.sign(
      payload,
      config.get("jsonWebTokenSecret"),
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );


  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
}
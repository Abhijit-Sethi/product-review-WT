const {validationResult} = require("express-validator")
const jwt = require("jsonwebtoken");
const config = require("config");

let User = require("../../schemas/User");
module.exports =async (req,res) => {
  try {
    let {email,password} = req.body;

    let user = await User.findOne({email});

    let errors = validationResult(req);
    
    if(!errors.isEmpty()){
      return res.status(400).json({errors : errors.array()});
    }

    if(!user){
      return res.status(404).send("User doesn't exist");
    }

    if(password !== user.password){
      return res.status(401).json({ msg: "Passwords do not match" });
    }

    const payload = {
      user: {
        id: user._id,
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
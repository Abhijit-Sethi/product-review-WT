const {validationResult} = require("express-validator")

let User = require("../../schemas/User");
module.exports = async (req,res)=>{
  try {
    const { passwordToCheck } = req.body;
    let errors = validationResult(req);
  
    if(!errors.isEmpty()){
    return res.status(400).json({errors : errors.array()});
    }

    let user = await User.findById(req.user.id);
    let PasswordsMatched = 0;
    
    if(user.password === passwordToCheck){
      PasswordsMatched = 1;
    }

    if(!PasswordsMatched){
      return res.status(401).json("Passwords do not match");
    }
    res.json("Successfully Matched Passwords")

  } catch (error) {
    console.error();
    return res.status(500).json("Server error");
  }
}
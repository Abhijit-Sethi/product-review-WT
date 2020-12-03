const {validationResult} = require("express-validator")

let User = require("../../schemas/User");
module.exports = async (req,res)=>{
  try {

    const { newPassword } = req.body;

    let errors = validationResult(req);
  
    if(!errors.isEmpty()){
      return res.status(400).json({errors : errors.array()});
    }
    let user = await User.findById(req.user.id);

    user.password = newPassword;
    
    await user.save();
    
    res.json("Sucessfully Updated Password")

  } catch (error) {
    console.error();
    return res.status(500).json("Server error");
  }
}
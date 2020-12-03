let User = require("../../schemas/User")
let Post = require("../../schemas/Post")

const { validationResult } = require("express-validator");


module.exports =async (req,res)=>{
  let { textOfThePost } = req.body;
  const errors = validationResult(req);
  if(!errors.isEmpty())
      return res.status(400).json({errors:errors.array()});
  try {
    let user = await User.findById(req.user.id).select("-password");

    if(!user)
      return res.status(404).json("User doesn't exist");
    
    let newPost = new Post({
      textOfThePost,
      name : user.name,
      user:req.user.id
    });

    await newPost.save();
    res.json("Sucess post") 
    
  } catch (error) {
    console.error(error);
    return res.status(500).json("Server error");
    
  }
}
let Post = require("../../schemas/Post")
module.exports = async(req,res)=>{
  try {
    let post = await Post.findById(req.params.post_id);

    res.json(post);
  } catch (error) {

    console.error(error);
    return res.status(500).send("Server error");
    
  }
}
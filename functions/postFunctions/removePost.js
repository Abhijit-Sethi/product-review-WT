let Post = require("../../schemas/Post");
module.exports = async(req,res)=>{
  try {
    let post = await Post.findById(req.params.post_id);
    if(!post)
      return res.status(404).json("Post not found");
    if(post.user.toString() !== req.user.id.toString())
      return res.status(401).json("Access denied to delete another user's post");
    
      await post.remove()

      res.json("Post is removed");
  } catch (error) {
    console.error(error);
    return res.status(500).json("Server error")
    
  }
}
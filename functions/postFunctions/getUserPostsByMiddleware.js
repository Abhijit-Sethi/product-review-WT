let Post = require("../../schemas/Post")

module.exports = async(req,res)=>{
  try {
    // order from most like to least liked
    let posts = await Post.find();
    let userPosts = posts.filter(post => post.user.toString() === req.user.id.toString());

    res.json(userPosts);
  } catch (error) {

    console.error(error);
    return res.status(500).send("Server error");
    
  }
}
let Post = require("../../schemas/Post");

module.exports = async(req,res)=>{
  try {
    // order from most liked to least liked
    let posts = await Post.find().sort({ likes: -1 });

    res.json(posts);
  } catch (error) {

    console.error(error);
    return res.status(500).send("Server error");
    
  }
}
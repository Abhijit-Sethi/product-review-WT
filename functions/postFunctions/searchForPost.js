let Post = require("../../schemas/Post")

const { validationResult } = require("express-validator");

module.exports = async (req,res) =>{
  let posts = await Post.find();
  const {searchInput} = req.body;

  const errors = validationResult(req);
  if(!errors.isEmpty())
      return res.status(400).json({errors:errors.array()});
  
try {
  if(searchInput === "" || searchInput === null){
    res.json(posts);
  }
  else{
    let findPostBySearchInput = posts.filter( post => 
      post.textOfThePost.toString().toLowerCase().split(" ").join("") === searchInput.toString().toLowerCase().split(" ").join("")
    );

    res.json(findPostBySearchInput);
  }
} catch (error) {
  console.error(error);
  return res.status(500).json("Server error");
  
}
}
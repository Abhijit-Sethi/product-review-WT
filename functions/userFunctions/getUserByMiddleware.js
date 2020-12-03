let User = require("../../schemas/User");

module.exports = async (req,res)=>{
  try {
    let user = await User.findById(req.user.id).select("-password");
    res.json(user);

  } catch (error) {
    console.error(error);
    return res.status(500).send("Server Error");
  }
}
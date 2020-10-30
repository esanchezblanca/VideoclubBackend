const User = require('./userModel');


//POST USER
module.exports.login =  async (req, res)=>{ 
    const {mail, password} = req.body;
    if(!mail || !password) return res.json({error:'faltan datos'})
    const user = new User(mail, password);
    await user.save();
};

//GET USER
module.exports.getUser = async (req, res)=>{
    const data = await User.find();
    res.json(data);
};

module.exports.updateUser = async (req, res) => {
    //modificar película
    const user = await User.findById(req.body.id);
    user.name = req.body.name;
    await user.save();
    res.json(user);

};

//CREATE USER
module.exports.createUser = async (req, res) => {
    //crea user
    const user = new User(req.body);
    await user.save();
    res.json(user);
};

//DELETE USER
module.exports.deleteUser = (req, res) => {
    const {id} = req.params;
    const user = await User.findById(id);
    await User.deleteOne(user);
    res.json('User deleted');
};

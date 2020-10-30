const User = require('./model/userModel');

//GET USER
module.exports.getUser = async (req, res)=>{
    if (users.length == 0) {
        res.send('No existen usuarios');
    }else {
        res.json(users);
    }
};

//POST USER
module.exports.login =  async (req, res)=>{ 
    const {mail, password} = req.body;
    if(!mail || !password) return res.json({error:'faltan datos'})
    const usuario = new User(mail, password);
    await user.save();
};

module.exports.login =

//DELETE USER
module.exports.deleteUser = (req, res) => {
    const {id} = req.params;
    let userList = users.filter(user => user.id != id);
    users = userList;
    res.json('User deleted');
};

const { User } = require('../models');


exports.validate = async (req, res)=>{
    //let username = "admin"
    //let password = "12345"
    
    user = await User.findOne({ where: { username: req.body.username } })

    //console.log(req.body)
    if (req.body.username == user.username && req.body.password == user.password){
        res.redirect('/inlandfreight')
    }else{
        res.redirect('/login')
    }
}

exports.add = async (req, res) => {
    user = await User.create(req.body)
    if (user) {
        res.redirect('/users')
    }
}

exports.ShowUser = async (req, res) => {
    user = await User.findAll()

    res.render('accountmgt', { data: user });
}

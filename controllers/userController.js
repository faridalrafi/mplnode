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

exports.del = async (req, res) => {
    user = await User.destroy({
        where: {
            id: req.params.id
        }
    })
    if (user) {
        res.redirect('/users')
    }
}

exports.update = async (req, res) => {
    user = await User.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    if (user) {
        res.redirect('/users')
    }
}
exports.updatepage = async(req, res)=>{
    user = await User.findOne({
        where:{
            id: req.params.id
        }
    })
    res.render('updateacc', {data:user});
}

exports.ShowUser = async (req, res) => {
    user = await User.findAll()

    res.render('accountmgt', { data: user });
}

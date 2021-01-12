

exports.validate = (req, res)=>{
    let username = "admin"
    let password = "12345"
    console.log(req.body)
    if (req.body.username == username && req.body.password == password){
        res.redirect('/inlandfreight')
    }else{
        res.redirect('/login')
    }
}
//const airfreight = require('../models/airfreight');
const { Airfreight, Landfreightcharter, Landfreightkg, Seafreight } = require('../models');

exports.NewAirfreight = async (req, res) => {
    data = {
        destination: req.body.destination,
        origin: req.body.origin,
        price: req.body.price,
        arival: req.body.arival
    }
    console.log(data)
    airf = await Airfreight.create(data)
    if (airf) {
        // res.status(201).json({
        //     status:true,
        //     message: 'new airfreigth data added',
        //     data: airf
        // })
        res.redirect('/airfreight')
    }
}

exports.ShowAirfreight = async (req, res) => {
    airf = await Airfreight.findAll()
    console.log(airf)
    res.render('airfreight', { data: airf });
}

exports.DeleteAirfreight = async (req, res) => {
    airf = await Airfreight.destroy({
        where: {
            id: req.params.id
        }
    });
    if (airf){
        res.redirect('/airfreight')
    }
}

exports.NewSeafright = async (req, res) => {
    seaf = await Seafreight.create(req.body)
    if (seaf) {
        res.redirect('/seafreight')
    }
}

exports.ShowSeafreight = async (req, res) => {
    seaf = await Seafreight.findAll()

    res.render('seafreight', { data: seaf });
}

exports.DeleteSeafreight = async (req, res) => {
    airf = await Seafreight.destroy({
        where: {
            id: req.params.id
        }
    });
    if (airf){
        res.redirect('/seafreight')
    }
}

exports.Newlandfrightkg = async (req, res) => {
    seaf = await Landfreightkg.create(req.body)
    if (seaf) {
        res.redirect('/inlandfreight')
    }
}

exports.Deletelandfrightkg = async (req, res) => {
    airf = await Landfreightkg.destroy({
        where: {
            id: req.params.id
        }
    });
    if (airf){
        res.redirect('/inlandfreight')
    }
}

exports.Newlandfrightcharter = async (req, res) => {
    seaf = await Landfreightcharter.create(req.body)
    if (seaf) {
        res.redirect('/inlandfreight')
    }
}

exports.Deletelandfrightcharter = async (req, res) => {
    airf = await Landfreightcharter.destroy({
        where: {
            id: req.params.id
        }
    });
    if (airf){
        res.redirect('/inlandfreight')
    }
}

exports.ShowLandfreight = async (req, res) => {
    landfcharter = await Landfreightcharter.findAll()
    landfkg = await Landfreightkg.findAll()

    res.render('inlandfreight', { charter: landfcharter, kg: landfkg });
}



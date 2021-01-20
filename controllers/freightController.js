//const airfreight = require('../models/airfreight');
const { Op,fn,col } = require("sequelize");


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
    if (airf) {
        res.redirect('/airfreight')
    }
}

exports.UpdateAirfreightPage = async (req, res) => {
    airf = await Airfreight.findOne({ where: { id: req.params.id } })
    res.render('editairfreight', { data: airf });
}

exports.UpdateAirfreight = async (req, res) => {
    airf = await Airfreight.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    if (airf) {
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
    if (airf) {
        res.redirect('/seafreight')
    }
}

exports.UpdateSeafreightPage = async (req, res) => {
    seaf = await Seafreight.findOne({ where: { id: req.params.id } })
    res.render('editseafreight', { data: seaf });
}

exports.UpdateSeafreight = async (req, res) => {
    seaf = await Seafreight.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    if (seaf) {
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
    if (airf) {
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
    if (airf) {
        res.redirect('/inlandfreight')
    }
}

exports.ShowLandfreight = async (req, res) => {
    landfcharter = await Landfreightcharter.findAll()
    landfkg = await Landfreightkg.findAll()

    res.render('inlandfreight', { charter: landfcharter, kg: landfkg });
}

exports.UpdateLandfreightPagecharter = async (req, res) => {
    landfcharter = await Landfreightcharter.findOne({ where: { id: req.params.id } })
    res.render('editlandfreightcharter', { data: landfcharter });
}

exports.UpdateLandfreightPagekg = async (req, res) => {
    landfcharter = await Landfreightkg.findOne({ where: { id: req.params.id } })
    res.render('editlandfreightkg', { data: landfcharter });
}

exports.UpdateLandfreightkg = async (req, res) => {
    seaf = await Landfreightkg.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    if (seaf) {
        res.redirect('/inlandfreight')
    }

}

exports.UpdateLandfreightcharter = async (req, res) => {
    seaf = await Landfreightcharter.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    if (seaf) {
        res.redirect('/inlandfreight')
    }

}

exports.landingFreight = async (req, res) => {
    airf = await Airfreight.findAll({distinc:'origin',  attributes: [
        // specify an array where the first element is the SQL function and the second is the alias
        [fn('DISTINCT', col('origin')) ,'origin']
    ]})
    seaf = await Seafreight.findAll({distinc:'origin',  attributes: [
        // specify an array where the first element is the SQL function and the second is the alias
        [fn('DISTINCT', col('origin')) ,'origin']
    ]})

    airfdestination = await Airfreight.findAll({distinc:'destination',  attributes: [
        // specify an array where the first element is the SQL function and the second is the alias
        [fn('DISTINCT', col('destination')) ,'destination']
    ]})

    seafdestination = await Seafreight.findAll({distinc:'destination',  attributes: [
        // specify an array where the first element is the SQL function and the second is the alias
        [fn('DISTINCT', col('destination')) ,'destination']
    ]})
    landfcharter = await Landfreightcharter.findAll()
    landfkgorigin = await Landfreightkg.findAll({distinc:'origin',  attributes: [
        // specify an array where the first element is the SQL function and the second is the alias
        [fn('DISTINCT', col('origin')) ,'origin']
    ]})
    landfkgdestination = await Landfreightkg.findAll({distinc:'destination',  attributes: [
        // specify an array where the first element is the SQL function and the second is the alias
        [fn('DISTINCT', col('destination')) ,'destination']
    ]})
    console.log(landfkgdestination)
    res.render('freight', { charter: landfcharter, kg: {origin: landfkgorigin, destination: landfkgdestination}, airf: {origin:airf, destination:airfdestination}, seaf: {origin:seaf,destination:seafdestination} });

}

exports.landingInlandf = async (req, res) => {
    console.log(req.body)
    if (req.body.service == 'kg') {
        landfkg = await Landfreightkg.findOne({
            where: {
                [Op.and]: [
                    { origin: req.body.origin },
                    { destination: req.body.destination }
                ]
            }
        })

        if (landfkg) {
            landfkg.harga = landfkg.price * parseInt(req.body.weight)
            landfkg.weight = parseInt(req.body.weight)
            console.log(landfkg)
            res.render('inlandF', { kg: landfkg });


        }
    }
    else if (req.body.service == "charter") {
        landfcharter = await Landfreightcharter.findOne({
            where: {
                [Op.and]: [
                    { origin: req.body.origin },
                    { destination: req.body.destination }
                ]
            }
        })
        if (landfcharter) {
            res.render('inlandF', { charter: landfcharter, kg: "" });


        }
    }
}

exports.landingairf = async (req, res) => {
    airf = await Airfreight.findOne({
        where: {
            [Op.and]: [
                { origin: req.body.origin },
                { destination: req.body.destination }
            ]
        }
    })
    if (airf) {
        airf.harga = airf.price * parseInt(req.body.weight)
        airf.weight = parseInt(req.body.weight)
        res.render('airf', { air: airf });

    }
}

exports.landingseaf = async (req, res) => {
    seaf = await Seafreight.findOne({
        where: {
            [Op.and]: [
                { origin: req.body.origin },
                { destination: req.body.destination }
            ]
        }
    })
    if (seaf) {
        seaf.harga = seaf.price * parseInt(req.body.weight)
        seaf.weight = parseInt(req.body.weight)
        res.render('seaf', { sea: seaf });

    }
}

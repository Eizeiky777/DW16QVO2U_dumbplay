const { Artist } = require("../models");

appError = (res, statusCode, message) => {
    res.status(statusCode).json({
        status: 'error',
        message,
        });
    };


exports.read = async (req, res) => {
try {
    const artists = await Artist.findAll({
        attributes: {
            exclude: ["createdAt", "updatedAt"]
        }
    });

    res.send({ data: artists });
} catch (error) {
    console.log(error);
}
};
//////////////////////////////////////////////////////////////////////

exports.create = async (req, res) => {
try {

    console.log("XXXX")
    const artist = await Artist.create(req.body);

    const { id, name } = artist;
    res.send({
        data: {
            id,
            name
        },
    });

} catch (error) {
    console.log("error ");
}
};


////////////////////////////////////////////////////////////////////
exports.readOne = async (req, res) => {
try {
    const { idArtist } = req.params;
    const artistX = await Artist.findOne({
        where: {
            id: idArtist
        },
        attributes: {
            exclude: ["createdAt","updatedAt"]
        },
    });

    if ( artistX === null ) {
        appError(res, 400, `No data matches with your request`);
    }else{
        res.send({ data: artistX });
    }

} catch (error) {
    console.log(error);
}
};

// PATCH or Update Artist
exports.updateOne = async (req, res) => {
    try {
        const { id_artist } = req.params;
        const artistX = await Artist.findOne({
            where: {
                id: id_artist
            },
            attributes: {
                exclude: ["createdAt","updatedAt"]
            }
        });

        artistX.fullName = req.body.fullName;
        artistX.email = req.body.email;
        artistX.password = req.body.password;
        artistX.gender = req.body.gender;
        artistX.phone = req.body.phone;
        artistX.address = req.body.address;
        await artistX.save();

        res.send({ data: artistX });
    } catch (error) {
        console.log(error);
    }
};

// DELETE USER
exports.delete = async (req, res) => {
try {
    const { id_artist } = req.params;

    const artistX = await Artist.findOne({
        where: {
            id: id_artist
        },
        attributes: {
            exclude: ["fullName", "email", "password", "gender",
            "phone","address", "subscribe", "createdAt", "updatedAt"]
        }
    });

    const artist = await Artist.destroy({
        where: {
            id: id_artist
        }
    });

    if ( artistX === null ) {
        appError(res, 400, `No data matches with your request`);
    }else{
        res.send({ data: artistX });
    }

} catch (error){
        console.log(error);
    }
};

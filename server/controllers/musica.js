const { Musica } = require("../models");
const { Artist } = require("../models");
const { validationResult } = require('express-validator'); //form validation
// const { matchedData, sanitize } = require('express-validator/filter'); //sanitize form params

appError = (res, statusCode, message) => {
    res.status(statusCode).json({
        status: 'error',
        message,
        });
    };

exports.read = async (req, res) => {
try {
    const music = await Musica.findAll({
        include: {
            model: Artist,
            as: 'artist',
            attributes: {
                exclude: ["createdAt","updatedAt"]
            },
        },
        attributes: {
            exclude: ["createdAt","updatedAt","ArtistId","artistId"]
        }
    });

    res.send({ data: music });
} catch (error) {
    console.log(error);
}
};

////////////////////////////////////////////////////////////////////////////////
exports.create = async (req, res) => {

    const categoryX = await Artist.findOne({
        where: {
            id: req.body.artistId
        },
        attributes: {
            exclude: ["createdAt","updatedAt","ArtistId","artistId"]
        }
    });

        Musica.create({
            title: req.body.title,
            year: req.body.year,
            thumbnail: req.file === undefined ? "" : req.file.filename,
            attach: req.body.attach,
            artistId: req.body.artistId
        }).then(newMusic => {
            res.send({ data: {
                "id": newMusic.id,
                "title": newMusic.title,
                "year": newMusic.year,
                "thumbnail": newMusic.thumbnail,
                "attach": newMusic.attach,
                "artistId": categoryX
            }})
        })

}

/////////////////////////////////// UPDATE /////////////////////////////////////
exports.update = async (req, res) => {
    try {
        const { idMusic } = req.params;
        const userX = await Musica.findOne({
            where: {
                id: idMusic
            },
            include: {
                model: Artist,
                as: 'artist',
                attributes: {
                    exclude: ["createdAt","updatedAt"]
                },
            },
            attributes: {
                exclude: ["createdAt","updatedAt","ArtistId","artistId"]
            }
        });

        if ( userX === null ) {
            appError(res, 400, `No data matches with your request`);
        }

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.mapped() });
        }

        userX.title = req.body.title;
        userX.year = req.body.year;
        userX.artistId = req.body.artistId;
        userX.description = req.body.description;
        userX.thumbnail = req.file === undefined ? "" : req.file.filename;

        await userX.save();


        res.send({ data: userX });
    } catch (error) {
        console.log(error);
    }
};

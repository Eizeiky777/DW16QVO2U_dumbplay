const { Music } = require("../models");
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
    const music = await Music.findAll({
        include: {
            model: Artist,
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

exports.readKedua = async (req, res) => {
try {
    const { idArtist } = req.params;
    const musics = await Music.findAll({
        where: {
            artistId: idArtist
        },
        include: {
            model: Artist,
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            },
        },
        attributes: {
            exclude: ["createdAt", "updatedAt", "ArtistId", "artistId"]
        }
    });

    res.send({ data: musics });
} catch (error) {
    console.log(error);
}
};

exports.readKetiga = async (req, res) => {
try {

    res.sendFile(__dirname + "/public/img/")
} catch (error) {
    console.log(error);
}
};

exports.readMore = async (req, res) => {
    try {
        const musics = await Music.findAll({
            include:[ {
                model: Artist,
                    attributes: {
                        exclude: ["createdAt","updatedAt"]
                    }
                }
            ],
            attributes: {
                exclude: ["createdAt","updatedAt","ArtistId","artistId"]
            }
        });

        res.send({ data: musics });
    } catch (error) {
        console.log(error);
    }
    };
///////////////////////////////////////////////////////////////////////////////////////

exports.create = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.mapped() });
    }

    const categoryX = await Artist.findOne({
        where: {
            id: req.body.artistId
        },
        attributes: {
            exclude: ["createdAt","updatedAt","ArtistId","artistId"]
        }
    });

    if ( categoryX === null ) {
        appError(res, 400, `No data matches with your request`);
    }else{
        Music.create({
            title: req.body.title,
            year: req.body.year,
            artistId: req.body.artistId,
            attach: req.body.attach,
            thumbnail: req.file === undefined ? "" : req.file.filename
        }).then(newMusic => {
            res.send({ data: {
                "id": newMusic.id,
                "title": newMusic.title,
                "year": newMusic.year,
                "artistId": categoryX,
                "attach": newMusic.attach,
                "thumbnail": newMusic.thumbnail
            }})
        })
    }

}

//////////////////////////////////////////////////////////////////////////////////////

// Detail Music
exports.readOne = async (req, res) => {
try {
    const { idMusic } = req.params;
    const musicX = await Music.findOne({
        where: {
            id: idMusic
        },
        include: {
            model: Artist,
            attributes: {
                exclude: ["createdAt","updatedAt"]
            },
        },
        attributes: {
            exclude: ["createdAt","updatedAt","ArtistId","artistId"]
        }
    });

    if ( musicX === null ) {
        appError(res, 400, `No data matches with your request`);
    }else{
        res.send({ data: musicX });
    }

} catch (error) {
    console.log(error);
}
};

// PATCH / Update Music
exports.updateOne = async (req, res) => {
    try {
        const { idMusic } = req.params;
        const userX = await Music.findOne({
            where: {
                id: idMusic
            },
            include: {
                model: Artist,
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


// DELETE MUSIC
exports.delete = async (req, res) => {
try {
    const { idMusic } = req.params;

    const userX = await Music.findOne({
        where: {
            id: idMusic
        },
        attributes: {
            exclude: ["createdAt",
            "updatedAt", "name",
            "title","thumbnail",
            "year","artistId","description",
            "ArtistId"]
        }
    });

    const music = await Music.destroy({
        where: {
            id: idMusic
        }
    });

    if ( userX === null ) {
        appError(res, 400, `No data matches with your request`);
    }else{
        res.send({ data: userX });
    }

} catch (error){
        console.log(error);
    }
};

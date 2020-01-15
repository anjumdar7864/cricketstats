const { Media } = require('../models/mediaM');
const fs = require('fs');


module.exports.uploadUserMedicalRecord = async (req, res) => {

    const contractMedia = await Media.create({
        destination: [req.file.path],
        type: req.body.type
    })
    const result = await contractMedia.save()
    res.send(result);

}

module.exports.getUserMedicalRecord = async (req, res) => {

    const contractMedia = await Media.findById(req.params.medicalRecordFileId);

    fs.readFile(contractMedia.destination[0], function (err, data) {
        res.contentType("application/pdf");
        res.send(data);
    });

}

module.exports.uploadProfilePic = async (req, res) => {

    const profilePic = await Media.create({
        destination: [req.file.path],
        type: req.body.type
    })
    const result = await profilePic.save();
    res.send(result);

}

module.exports.uploadQuestionImages = async (req, res) => {

    let imagesPath = [];
    for (i = 0; i < req.files.length; i++) {
        imagesPath.push({ image: req.files[i].path });
    }
    const quesImages = await Media.create({
        destination: imagesPath,
        type: req.body.type
    })
    const result = await quesImages.save()
    res.send(result);

}

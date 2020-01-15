const express = require('express');
const router = express.Router();
const mediaController = require('../controllers/mediaController')
const multer = require('multer');

let storage = multer.diskStorage({
    destination: 'public/userMedicalRecords/',
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
})
let uploadMRecord = multer({ storage: storage }).single('medicalRecord')

let picStorage = multer.diskStorage({
    destination: 'public/profilepics/',
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
})
let uploadPic = multer({ storage: picStorage }).single('profilePic')

let questionImagesStorage = multer.diskStorage({
    destination: 'public/questionImages/',
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
})
let uploadQuesImages = multer({ storage: questionImagesStorage }).array('questionImages')


router.post('/medicalRecord',
    uploadMRecord,
    mediaController.uploadUserMedicalRecord);

router.get('/medicalRecord/:medicalRecordFileId',
    mediaController.getUserMedicalRecord);


// router.post('/user/profilePic',
//     uploadPic,
//     mediaController.uploadProfilePic);

router.post('/question/images',
    uploadQuesImages,
    mediaController.uploadQuestionImages);

module.exports = router;
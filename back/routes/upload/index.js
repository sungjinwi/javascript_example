const express = require("express");
const router = express.Router();
const imageUploader = require("../../api/imageUploader");
const multer = require('multer');

const uploadController = require("./upload.controller");

// 현재 프로젝트의 uploads에 올릴 경우

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, 'uploads/');
//     },
//     filename: (req, file, cb) => {
//       const newFileName = file.originalname;
//       cb(null, newFileName);
//     }
//   });
//   const upload = multer({ storage: storage });

// router.post("/", upload.single('file'), uploadController.uploadAction);


router.post("/", imageUploader.single('file'), uploadController.uploadAction);

module.exports = router;
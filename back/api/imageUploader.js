const AWS = require('aws-sdk');
const multer  = require("multer");
const multerS3 = require("multer-s3");
const path = require("path");

/*
aws-sdk와 multer-s3 의 버전이 다르면 오류가 발생하기 때문에
(그냥 npm i 할 시 aws-sdk는 2.~~로 multer-s3는 3.~~로 설치됨)
npm i multer-s3@2.9.0으로 변경 설치해주었다 
*/

AWS.config.loadFromPath('./awsConfig.json'); // node server를 실행하는 곳 기준으로 위치를 잡아야함

const s3 = new AWS.S3();

const allowedExtensions = ['.png', '.jpg', 'jpeg', '.bmp'];

const imageUploader = multer({
    storage: multerS3({
        s3: s3,
        bucket: "squaretime",
        key: (req, file, callback) => {
            const uploadDirectory = req.query.directory ?? "";
            const extension = path.extname(file.originalname);
            if (!allowedExtensions.includes(extension)) {
                return callback(new Error('wrong extension'))
            }
            callback(null, `${uploadDirectory}/${Date.now()}_${file.originalname}`); // 같은 이름 방지를 위해 Date추가
        },
        acl: 'public-read-write'
    }),
})

module.exports = imageUploader;
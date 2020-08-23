const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
const { BUCKET } = require('../../config');

const uploadToS3 = (req, res, next) => {

    const config = new AWS.Config({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION
    });

    const s3 = new AWS.S3();
    const filename = `${uuidv4()}.jpg`;

    const image = {
        Bucket: BUCKET,
        Key: filename,
        Body: req.body
    };

    s3.upload(image, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error upload file to S3');
        }
        req.image = {
            ...data
        };
        next();
    });

};

const uploadToStore = [
    uploadToS3,
]

module.exports = uploadToStore;
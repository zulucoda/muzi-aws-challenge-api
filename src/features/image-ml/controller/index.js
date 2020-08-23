const AWS = require('aws-sdk');

const imageMl = (req, res) => {

    const config = new AWS.Config({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION
    });

    const rekognition = new AWS.Rekognition();

    const { image } = req;

    const params = {
        Image: {
            S3Object: {
                Bucket: image.Bucket,
                Name: image.Key
            }
        },
        MaxLabels: 10,
        MinConfidence: 70
    };

    rekognition.detectLabels(params, (err, data) => {
        if (err) {
            console.log(err, err.stack); // an error occurred
            res.status(500).send(err);
        }
        else {
            console.log(data); // successful response
            res.status(200).send(JSON.stringify(data));
        }

    });

};

module.exports = {
    imageMl
};

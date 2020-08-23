const AWS = require('aws-sdk');
const getMainImage = require('../utils/get-main-image');

const imageMl = (req, res) => {
  const config = new AWS.Config({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
  });

  const rekognition = new AWS.Rekognition();

  const { image } = req;

  const params = {
    Image: {
      S3Object: {
        Bucket: image.Bucket,
        Name: image.Key,
      },
    },
    MaxLabels: 10,
    MinConfidence: 70,
  };

  rekognition.detectLabels(params, (err, data) => {
    if (err) {
      console.log(err, err.stack);
      res.status(500).send(err);
    } else {
      const result = getMainImage(data);
      res.status(200).send(result);
    }
  });
};

module.exports = {
  imageMl,
};

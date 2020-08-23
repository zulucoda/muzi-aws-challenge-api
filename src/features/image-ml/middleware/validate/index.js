const { IMAGE_TYPE, IMAGE_SIZE } = require('../../config');

const checkImageSize = (size) => {
  const imageSizeInMb = (Number(size) * 0.000001).toFixed(1);
  return imageSizeInMb > IMAGE_SIZE;
}

const validate = (req, res, next) => {
  if (req.headers['content-type'] !== IMAGE_TYPE) {
    return res.status(400).json({
      message: 'Unsupported Media Type'
    });
  }
  if (checkImageSize(req.headers['content-length'])) {
    return res.status(400).json({
      message: 'Image must not exceed 5MB'
    });
  }
  next();
};

module.exports = validate;
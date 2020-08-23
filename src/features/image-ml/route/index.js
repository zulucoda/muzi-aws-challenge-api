const uploadToStore = require('../middleware/upload-to-store');
const validate = require('../middleware/validate');
const { imageMl } = require('../controller');

module.exports = (app) =>
  app.route('/Image').post(validate, uploadToStore, imageMl);

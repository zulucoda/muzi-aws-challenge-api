const { calculate } = require('../controller');
const validate = require('../middleware/validate');

module.exports = (app) => app.route('/calculator').put(validate, calculate);

const { calculate } = require('../controller');

module.exports = (app) =>
    app.route('/calculator')
        .put(validate, calculate);

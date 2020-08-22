const { CalculatorRequestCodec } = require('../../controller/codecs');

const validate = (req, res, next) => {
  const results = CalculatorRequestCodec.decode(req.body);
  if (results.right) {
    return next();
  }
  return res.sendStatus(400);
};

module.exports = validate;

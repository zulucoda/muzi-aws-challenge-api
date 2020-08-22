const {CalculatorRequestCodec} = require("../../controller/codecs");

const validate = (req, res, next) => {
    const results = CalculatorRequestCodec.decode(req.body);
    if (results.right){
        return next();
    }
    return res.status(400);
};

module.exports = validate;
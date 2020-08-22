const t = require('io-ts');
const { NumberFromString } = require('io-ts-types');

const OperationsBrand =  t.keyof({
    add: null,
    minus: null,
    multiple: null,
    divide: null,
    '+': null,
    '-': null,
    '*': null,
    '/': null
})

const CalculatorRequestCodec = t.strict({
    a: NumberFromString,
    b: NumberFromString,
    op: OperationsBrand
});

const validate = (req, res, next) => {
    const results = CalculatorRequestCodec.decode(req.body);
    if (results.right){
        return next();
    }
    return res.status(400);
};

module.exports = {
    CalculatorRequestCodec,
    validate
}
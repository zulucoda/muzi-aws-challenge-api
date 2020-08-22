const { OPERATION } = require('../config');
const t = require('io-ts');
const { NumberFromString } = require('io-ts-types');

const OperationsBrand =  t.keyof(OPERATION);

const CalculatorRequestCodec = t.strict({
    a: NumberFromString,
    b: NumberFromString,
    op: OperationsBrand
});

module.exports = {
    CalculatorRequestCodec,
}
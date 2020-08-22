const { OPERATION } = require('../config');
const t = require('io-ts');
const { NumberFromString } = require('io-ts-types');

const OperationsBrand =  t.keyof(OPERATION);

const CalculatorRequestCodec = t.strict({
    a: t.union([NumberFromString, t.number]),
    b: t.union([NumberFromString, t.number]),
    op: OperationsBrand
});

module.exports = {
    CalculatorRequestCodec,
}
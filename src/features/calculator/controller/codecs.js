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

module.exports = {
    CalculatorRequestCodec,
}
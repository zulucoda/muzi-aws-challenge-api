const { OPERATION } = require('../config');

const formatResponse = ({a,b,op,}, c) => ({a,b,op, c})

const operation = (req, res) => {
    const {a,b,op} = req.body;
    switch (OPERATION[op]) {
        case OPERATION.add:
        case OPERATION["+"]:
            return res.json(formatResponse(req.body,Number(a) + Number(b)));

        case OPERATION.minus:
        case OPERATION["-"]:
            return res.json(formatResponse(req.body,Number(a) - Number(b)));

        case OPERATION.multiple:
        case OPERATION["*"]:
            return res.json(formatResponse(req.body,Number(a) * Number(b)));

        case OPERATION.divide:
        case OPERATION["/"]: {
            try {
                return res.json(formatResponse(req.body, Number(a) / Number(b)));
            }catch (e) {
                // possible divide by 0 error
                return res.status(400, 'error dividing numbers');
            }
        }
        default:
            return res.status(400, 'operation unknown');
    }
}

const calculate = (req, res) => operation(req, res);

module.exports = {
    calculate,
};
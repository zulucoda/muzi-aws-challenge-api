const {CalculatorRequestCodec} = require("./codecs");

describe('Features - Calculator - Controller - Codec - Unit Test',  () => {
    describe('CalculatorRequestCodec',  () => {
        describe('add and +',  () => {
            test('valid calculator request', () => {
                const request = {
                    body: {
                        a: "12",
                        b: "12",
                        op: "add"
                    }
                }
                const act = CalculatorRequestCodec.decode(request.body);
                expect(act.right).toBeTruthy();
            });
            test('valid calculator request', () => {
                const request = {
                    body: {
                        a: "12",
                        b: "12",
                        op: "+"
                    }
                }
                const act = CalculatorRequestCodec.decode(request.body);
                expect(act.right).toBeTruthy();
            });
        });
    });
});
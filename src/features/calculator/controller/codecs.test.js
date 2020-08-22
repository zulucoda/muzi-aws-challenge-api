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
        describe('minus and -', () => {
            test('valid calculator request', () => {
                const request = {
                    body: {
                        a: "12",
                        b: "12",
                        op: "minus"
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
                        op: "-"
                    }
                }
                const act = CalculatorRequestCodec.decode(request.body);
                expect(act.right).toBeTruthy();
            });
        });
        describe('multiple and *', () => {
            test('valid calculator request', () => {
                const request = {
                    body: {
                        a: "12",
                        b: "12",
                        op: "multiple"
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
                        op: "*"
                    }
                }
                const act = CalculatorRequestCodec.decode(request.body);
                expect(act.right).toBeTruthy();
            });
        });
        describe('divide and /', () => {
            test('valid calculator request', () => {
                const request = {
                    body: {
                        a: "12",
                        b: "12",
                        op: "divide"
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
                        op: "/"
                    }
                }
                const act = CalculatorRequestCodec.decode(request.body);
                expect(act.right).toBeTruthy();
            });
        });

        describe('unknown or codec error', () => {
            test('invalid request', () => {
                const request = {
                    body: {
                        a: "12",
                        b: "12",
                        op: "unknown op"
                    }
                }
                const act = CalculatorRequestCodec.decode(request.body);
                expect(act.right).toBeFalsy();
            });
            test('invalid request', () => {
                const request = {
                    body: {
                        a: "two",
                        b: "two",
                        op: "+"
                    }
                }
                const act = CalculatorRequestCodec.decode(request.body);
                expect(act.right).toBeFalsy();
            });
        });
    });
});
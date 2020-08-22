const {CalculatorRequestCodec, validate} = require("./codecs");

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
    describe('validate', () => {
        const mockResponse = {
            status: jest.fn()
        };
        const mockNext = jest.fn();
       test('when valid it should call next', () => {
           const request = {
               body: {
                   a: "12",
                   b: "12",
                   op: "+"
               }
           }
           validate(request, mockResponse, mockNext);
           expect(mockNext).toBeCalled();
       });

       test('when invalid it should return 400 bad request', () => {
           const request = {
               body: {
                   a: "two",
                   b: "one",
                   op: "+"
               }
           }
           validate(request, mockResponse, mockNext);
           expect(mockResponse.status).toBeCalledWith(400);
       });
    });
});
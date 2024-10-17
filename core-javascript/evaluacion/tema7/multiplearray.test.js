// multiplearray.test.js
const { askUserInput } = require('./multiplearray');
const readline = require('readline');

// Mock readline module
jest.mock('readline', () => {
    const questionMock = jest.fn();
    return {
        createInterface: jest.fn(() => ({
            question: questionMock,
            close: jest.fn(),
        })),
    };
});

describe('askUserInput', () => {
    let consoleLogMock;

    beforeEach(() => {
        consoleLogMock = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    const mockQuestionImplementation = (inputs) => {
        const questionMock = readline.createInterface().question;
        inputs.forEach((input, index) => {
            questionMock.mockImplementationOnce((query, callback) => callback(input));
        });
    };

    test('should log error message when invalid size input is given', (done) => {
        mockQuestionImplementation(['-1']); 
    
        askUserInput();
    
        setImmediate(() => {
            try {
                expect(consoleLogMock).toHaveBeenCalledWith('Please enter a valid positive number for the array size.');
                done();
            } catch (error) {
                done.fail(error); 
            }
        });
    });
    

    test('should log multiples array when valid positive inputs are given', (done) => {
        mockQuestionImplementation(['3', '4']); 
    
        askUserInput();
    
        setImmediate(() => {
            try {
                expect(consoleLogMock).toHaveBeenCalledWith('The multiples array is: ', [4, 8, 12]);
                done();
            } catch (error) {
                done.fail(error); 
            }
        });
    });
    

    test('should log multiples array when valid negative number is given', (done) => {
        mockQuestionImplementation(['3', '-2']); 

        askUserInput();

        setImmediate(() => {
            expect(consoleLogMock).toHaveBeenCalledWith('The multiples array is: ', [-2, -4, -6]);
            done();
        });
    });

    test('should log error message when invalid number input is given', (done) => {
        mockQuestionImplementation(['3', 'invalid']); 
        askUserInput();

        setImmediate(() => {
            expect(consoleLogMock).toHaveBeenCalledWith('Please enter valid numbers.');
            done();
        });
    });

});

 


const { askUserInput } = require('./prueba');
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
    const mockQuestionImplementation = (inputs) => {
        const questionMock = readline.createInterface().question;
        inputs.forEach((input) => {
            questionMock.mockImplementationOnce((query, callback) => callback(input));
        });
    };

    test('should return error message when invalid size input is given', async () => {
        mockQuestionImplementation(['-1']); 

        const result = await askUserInput();

        expect(result).toBe('Please enter a valid positive number for the array size.');
    });

    test('should return multiples array when valid positive inputs are given', async () => {
        mockQuestionImplementation(['3', '4']); 

        const result = await askUserInput();

        expect(result).toEqual([4, 8, 12]);
    });

    test('should return multiples array when valid negative number is given', async () => {
        mockQuestionImplementation(['3', '-2']); 

        const result = await askUserInput();

        expect(result).toEqual([-2, -4, -6]);
    });

    test('should return error message when invalid number input is given', async () => {
        mockQuestionImplementation(['3', 'invalid']); 

        const result = await askUserInput();

        expect(result).toBe('Please enter valid numbers.');
    });
});

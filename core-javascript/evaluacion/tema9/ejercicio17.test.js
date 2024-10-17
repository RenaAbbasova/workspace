const { capitalize_last_name, StringTypeError, ValueError } = require('./ejercicio17'); // Import function and error classes

describe('capitalize_last_name', () => {
    test('should capitalize the first name and uppercase the last name', () => {
        expect(capitalize_last_name('maria lopez')).toBe('Maria LOPEZ');
        expect(capitalize_last_name('rebeca perez')).toBe('Rebeca PEREZ');
    });

    test('should throw a StringTypeError if the argument is not a string', () => {
        expect(() => capitalize_last_name(123)).toThrow(StringTypeError);
        expect(() => capitalize_last_name(null)).toThrow(StringTypeError);
        expect(() => capitalize_last_name([])).toThrow(StringTypeError);
        expect(() => capitalize_last_name({})).toThrow(StringTypeError);
    });

    test('should throw a ValueError if the string does not contain exactly two words', () => {
        expect(() => capitalize_last_name('rebeca')).toThrow(ValueError);
        expect(() => capitalize_last_name('maria lopez basco')).toThrow(ValueError);
        expect(() => capitalize_last_name('')).toThrow(ValueError);
    });

    test('should handle leading and trailing spaces correctly', () => {
        expect(capitalize_last_name('   maria   lopez   ')).toBe('Maria LOPEZ');
        expect(capitalize_last_name('   victoria   kurkina   ')).toBe('Victoria KURKINA');
    });
});

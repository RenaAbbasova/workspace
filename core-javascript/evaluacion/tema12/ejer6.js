/**
 * Gets all values in a set that fall within a specified numeric range.
 * @param {Set<number>} set - The set of numbers to filter.
 * @param {number} min - The minimum range (inclusive).
 * @param {number} max - The maximum range (inclusive).
 * @returns {Array<number>} - An array of values within the range [min, max].
 */
const getValuesInRange = (set, min, max) => {
    // Ensure min is less than or equal to max
    if (min > max) return [];

    // Filter and return values in the range [min, max]
    return [...set].filter(value => value >= min && value <= max);
};

module.exports = getValuesInRange;


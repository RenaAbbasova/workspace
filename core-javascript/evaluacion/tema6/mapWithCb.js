// mapWithCb.js
function mapWithCb(array, callback) {
    if (!Array.isArray(array) || typeof callback !== 'function') {
        throw new Error("Invalid input: expected an array and a callback function.");
    }
    return array.map(callback);
}

module.exports = mapWithCb;




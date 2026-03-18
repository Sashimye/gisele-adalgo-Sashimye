/**
 * This function takes an array of words and convert it into a french sentence. Words are separated by
 * commas and the two last words are separated by "et".
 *
 * @param {string[]} array array of words
 * @returns {string}
 *
 * @example
 *      arrayToFrench(['un', 'deux', 'trois', 'soleil']); // returns "un, deux, trois et soleil"
 *      arrayToFrench(['noir', 'blanc']); // returns "noir et blanc"
 */
export const arrayToFrench = (array) => {
    if (array.length <= 2) return array.slice(-2).join(" et ");
    return array.slice(0, -2).join(", ") + ", " + array.slice(-2).join(" et ");
};

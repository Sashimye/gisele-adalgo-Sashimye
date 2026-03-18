/*
This function modifies a given word based on its ending.

If the word does not end with "ing",
the function should add "ing" to the end of the word.

If the word already ends with "ing",
the function should add "ly" instead.

The function should return the updated word.

For example:

ingly("play") => return "playing"

ingly("playing") => return "playingly"

ingly("swim") => return "swiming"
*/

// export const ingly = (word) => {
//     const isUpperCase = (word) => word === word.toUpperCase();
//     if (isUpperCase(word) && word.length !== 0) {
//         if (word.slice(-3) === "ING") return (word += "LY");
//         if (word.slice(-3) !== "ING") return (word += "ING");
//     }
//     if (word.slice(-3) !== "ing") {
//         return (word += "ing");
//     } else if (word.slice(-3) === "ing") {
//         return (word += "ly");
//     }
// };

export const ingly = (word) => {
    if (word === "") return "ing";

    const isUpper = word === word.toUpperCase();
    const suffix = isUpper ? "ING" : "ing";
    const target = isUpper ? "LY" : "ly";

    if (word.endsWith(suffix)) {
        return word + target;
    }
    return word + suffix;
};

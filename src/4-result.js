export function ingly(word) {
    if (word === "") return "ing";
    const isUpper = word[0] === word[0].toUpperCase();
    const suffix = word.slice(-3).toLowerCase() === "ing" ? "ly" : "ing";
    return word + (isUpper ? suffix.toUpperCase() : suffix);
}

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

// export const ingly = (word) => {
//     if (word === "") return "ing";

//     const isUpper = word === word.toUpperCase();
//     const suffix = isUpper ? "ING" : "ing";
//     const target = isUpper ? "LY" : "ly";

//     if (word.endsWith(suffix)) {
//         return word + target;
//     }
//     return word + suffix;
// };

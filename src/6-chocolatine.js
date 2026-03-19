/**
 * This function takes a message as parameter and replaces all occurences
 * of "pain au chocolat" by "chocolatine".
 *
 * This would work with "pains au chocolat" and "chocolatines" as well and when
 * we see "un pain au chocolat" it should be replaced by "une chocolatine".
 *
 * @param {string} message The message in which the text should be replaced
 * @returns {string} an updated message with every "pain au chocolat" replaced by "chocolatine"
 */
// export const chocolatine = (message) => {
//     const painChocoPlr = "pains au chocolat";
//     const painChocoDet = "un pain au chocolat";
//     if (message.includes(painChocoPlr)) {
//         return message.replaceAll("pains au chocolat", "chocolatines");
//     } else if (message.includes(painChocoDet)) {
//         return message.replaceAll("un pain au chocolat", "une chocolatine");
//     } else {
//         return message.replaceAll("pain au chocolat", "chocolatine");
//     }
// };

export const chocolatine = (message) => {
    if (message.includes("pains au chocolat")) {
        return message.replaceAll("pains au chocolat", "chocolatines");
    }
    if (message.includes("un pain au chocolat")) {
        return message.replaceAll("un pain au chocolat", "une chocolatine");
    }
    return message.replaceAll("pain au chocolat", "chocolatine");
};

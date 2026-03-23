export const chocolatine = (message) => {
    return message
        .replaceAll("un pain au chocolat", "une chocolatine")
        .replaceAll("pains au chocolat", "chocolatines")
        .replaceAll("pain au chocolat", "chocolatine");
};

// export const chocolatine = (message) => {
//     if (message.includes("pains au chocolat")) {
//         return message.replaceAll("pains au chocolat", "chocolatines");
//     }
//     if (message.includes("un pain au chocolat")) {
//         return message.replaceAll("un pain au chocolat", "une chocolatine");
//     }
//     return message.replaceAll("pain au chocolat", "chocolatine");
// };

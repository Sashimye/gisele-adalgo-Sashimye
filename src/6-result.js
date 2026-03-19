export const chocolatine = (message) => {
    if (message.includes("pains au chocolat")) {
        return message.replaceAll("pains au chocolat", "chocolatines");
    }
    if (message.includes("un pain au chocolat")) {
        return message.replaceAll("un pain au chocolat", "une chocolatine");
    }
    return message.replaceAll("pain au chocolat", "chocolatine");
};

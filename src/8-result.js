export const inclusify = (text) => {
    const map = {
        il: "iel",
        elle: "iel",
        ils: "iels",
        elles: "iels",
        ceux: "celleux",
        celle: "celleux",
    };
    return text.replace(/\b(il|elle|ils|elles|ceux|celle)\b/gi, (match) => {
        const lower = match.toLowerCase();
        const replacement = map[lower];
        return match[0] === match[0].toUpperCase()
            ? replacement.charAt(0).toUpperCase() + replacement.slice(1)
            : replacement;
    });
};

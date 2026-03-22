/**
 * This function tries to use french inclusive notation instead of masculine or feminine gender in sentences.
 * *This is a simplified version that focuses on simple pronouns replacement.*
 * The function should :
 * - replace il, elle by iel
 * - replace ils, elles by iels
 * - replace ceux, celle by celleux
 * Be carreful to properly handle edge cases from tests.
 * @param {string} text
 */
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

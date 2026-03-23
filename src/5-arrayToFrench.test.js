import { test, expect, describe } from "vitest";
import { arrayToFrench } from "./5-arrayToFrench";

// TODO: test arrayToFrench function with one, two and multiple words
describe("arrayToFrench", () => {
    test("Test arrayToFrench with one word", () => {
        expect(arrayToFrench(["un"])).toBe(" et un");
    });
    test("Test arrayToFrench with two word", () => {
        expect(arrayToFrench(["un", "deux"])).toBe("un et deux");
    });
    test("Test arrayToFrench with multiple words", () => {
        expect(arrayToFrench(["un", "deux", "trois", "soleil"])).toBe(
            "un, deux, trois et soleil",
        );
    });
});

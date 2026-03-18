// TODO: test arrayToFrench function with one, two and multiple words
import { arrayToFrench } from "./5-arrayToFrench";
import { test, expect, describe } from "vitest";

describe("arrayToFrench", () => {
    test("Test arrayToFrench function with one word", () => {
        expect(arrayToFrench(["Bonjour"])).toBe("Bonjour");
    });
    test("Test arrayToFrench function with two words", () => {
        expect(arrayToFrench(["Bonjour", "Clement"])).toBe(
            "Bonjour et Clement",
        );
    });
    test("Test arrayToFrench function with multiple words", () => {
        expect(
            arrayToFrench([
                "Bonjour",
                "Clement",
                "Ravie",
                "De",
                "Te",
                "Rencontrer",
            ]),
        );
    });
});

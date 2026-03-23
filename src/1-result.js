export const calculator = (x, y, operator) => {
    if (isNaN(x) || isNaN(y)) return "is empty";

    switch (operator) {
        case "+":
            return x + y;
        case "-":
            return x - y;
        case "*":
            return x * y;
        case "/":
            return x / y;
        default:
            return `no operators`;
    }
};

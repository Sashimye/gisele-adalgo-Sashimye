const calculator = (x, y, operator) => {
    if (operator === "%") {
        return "no operators";
    }
    if (typeof x === "number" && typeof y === "number") {
        if (operator === "+") {
            return x + y;
        } else if (operator === "-") {
            return x - y;
        } else if (operator === "*") {
            return x * y;
        } else if (operator === "/") {
            return x / y;
        }
    }
};

console.log(calculator(2, 3, "%"));

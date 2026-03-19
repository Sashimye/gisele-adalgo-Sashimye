const arrayToFrench = (array) => {
    if (array.length <= 2) return array.slice(-2).join(" et ");
    return array.slice(0, -2).join(", ") + ", " + array.slice(-2).join(" et ");
};

console.log(arrayToFrench(["Bonjour", "Clement"]));

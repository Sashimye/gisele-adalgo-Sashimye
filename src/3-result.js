export function goToLevel(startFloor, FinalPosition) {
    if (startFloor < 0 || FinalPosition > 24) return 0;
    return FinalPosition - startFloor;
}

// export const goToLevel = (num1, num2) => {
//     if (num1 < 0 || num2 >= 25) return 0;
//     else if (num1 < num2) return num1 + num2;
//     else if (num1 > num2) return (num1 - num2) * -1;
//     else if (num1 === num2) return 0;
// };

// export const goToLevel = (startFloor, FinalPosition) => {
//     return startFloor < 0 || FinalPosition >= 25
//         ? 0
//         : FinalPosition - startFloor;
// };

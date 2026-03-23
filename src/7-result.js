export function fibonacci(max) {
    let arr = [0, 1];
    if (max === 0) return [];
    if (max === 1) return [0];
    for (let i = 2; i < max; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr;
}

// export function fibonacci(max) {
//     let arr = [0, 1];
//     if (max === 0) return (arr = []);
//     if (max === 1) return (arr = [0]);

//     for (let i = 1; i < max - 1; i++) {
//         arr.push(arr.slice(-2).reduce((partialSum, a) => partialSum + a, 0));
//     }
//     return arr;
// }

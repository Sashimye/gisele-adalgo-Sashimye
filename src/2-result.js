export const filterLetter = (arg, call, call2) => {
    let isTrue = /^[a-z@]+$/i.test(arg);
    if (isTrue) return call(arg);
    else return call2(arg);
};

// export const filterLetter = (arg, call, call2) => {
//     if (!arg.match(/^\d+$/)) {
//         return call(arg);
//     } else {
//         return call2(arg);
//     }
// };

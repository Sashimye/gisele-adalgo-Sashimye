export const filterLetter = (arg, call, call2) => {
    if (
        arg.match(/[a-z]/i) ||
        arg.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/@]/)
    ) {
        return call(arg);
    } else {
        return call2(arg);
    }
};

// export const filterLetter = (arg, call, call2) => {
//     if (!arg.match(/^\d+$/)) {
//         return call(arg);
//     } else {
//         return call2(arg);
//     }
// };

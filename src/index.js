module.exports = function reverse (n) {
    let  str = String(n).split("").reverse().join("");
    console.log(str);
    return str;
}


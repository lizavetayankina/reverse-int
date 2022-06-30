module.exports = function reverse (n) {

    n = Math.abs(n);
    let str = String(n).split("").reverse().join("");
    console.log(str);
    return str;
}


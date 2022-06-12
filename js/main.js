let str1 = "Uwielbiam JavaScript";
let str2 = "Jestem świetnym programistą";
function num1(a, b) {
    let result = Math.max(a.length, b.length);
    if (a.length > b.length) {
        console.log(str1 + ">" + str2)
    } else {
        console.log(str1 + " < " + str2)
    }
    return result;
}
console.log(num1(str1, str2))

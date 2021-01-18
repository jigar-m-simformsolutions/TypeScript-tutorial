var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var convert = document.querySelector('button');
var money = document.getElementById('money');
var paragraph = document.getElementById('demo');
function MoneyToWord(input) {
    var rupees = input;
    var output = [];
    if (rupees === 0) {
        output.push("zero");
    }
    else if (rupees === 1) {
        output.push("one");
    }
    else {
        var crores = Math.floor(rupees / 10000000) % 100;
        if (crores > 0) {
            output.push(getHundreds(crores) + " crore");
        }
        var lakhs = Math.floor(rupees / 100000) % 100;
        if (lakhs > 0) {
            output.push(getHundreds(lakhs) + " lakh");
        }
        var thousands = Math.floor(rupees / 1000) % 100;
        if (thousands > 0) {
            output.push(getHundreds(thousands) + " thousand");
        }
        var hundreds = Math.floor((rupees % 1000) / 100);
        if (hundreds > 0 && hundreds < 10) {
            output.push(getOnes(hundreds) + " hundred");
        }
        var tens = rupees % 100;
        if (tens > 0) {
            output.push("" + getHundreds(tens));
        }
    }
    return __spreadArrays(output, ["Rupees", "only"]).join(" ")
        .split(/\s/)
        .filter(function (e) { return e; })
        .map(function (e) { return e.substr(0, 1).toUpperCase() + e.substr(1); })
        .join(" ");
}
function getOnes(number) {
    var ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    return ones[number] || "";
}
function getTeens(number) {
    var teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    return teens[number] || "";
}
function getTens(number) {
    var tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    return tens[number] || "";
}
function getHundreds(num) {
    if (num > 0 && num < 10) {
        return getOnes(num);
    }
    if (num >= 10 && num < 20) {
        return getTeens(num % 10);
    }
    if (num >= 20 && num < 100) {
        return getTens(Math.floor(num / 10)) + " " + getOnes(num % 10);
    }
    return "";
}
convert.addEventListener("click", function () {
    var x = MoneyToWord(+money.value);
    paragraph.innerHTML = x;
    // paragraph.textContent = MoneyToWord(+money.value).toString();
});
// const button = document.querySelector("button");
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;
// function add(num1: number, num2: number) {
//   return num1 + num2;
// }
// button.addEventListener("click", function() {
//   console.log(add(+input1.value, +input2.value));
// });

// Assignment 2

// //Q1
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

/*Q2
function calculate(num1, num2, operator) {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;

        case '-':
            result = num1 - num2;
            break;

        case '*':
            result = num1 * num2;
            break;

        case '/':
            result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
            break;

        default:
            result = "Invalid operator";
    }

    return result;
}

console.log(calculate(10, 5, '+')); */

/* Q3
function findTax(salary) {
    let taxRate;

    switch (true) {
        case (salary > 0 && salary <= 500000):
            taxRate = 0;
            break;

        case (salary > 500000 && salary <= 1000000):
            taxRate = 0.10;
            break;

        case (salary > 1000000 && salary <= 1500000):
            taxRate = 0.20;
            break;

        case (salary > 1500000):
            taxRate = 0.30;
            break;

        default:
            return "Invalid salary";
    }

    return salary * taxRate;
}

console.log(findTax(750000)); */


//Q4
function sumOfDigitProducts(n1, n2) {
    let str1 = n1.toString();
    let str2 = n2.toString();

    let maxLength = Math.max(str1.length, str2.length);

    str1 = str1.padStart(maxLength, '0');
    str2 = str2.padStart(maxLength, '0');

    let sum = 0;

    for (let i = 0; i < maxLength; i++) {
        sum += parseInt(str1[i]) * parseInt(str2[i]);
    }

    return sum;
}

console.log(sumOfDigitProducts(6, 34)); 
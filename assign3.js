// 1.
// let states = ["Andhra Pradesh", "Bihar", "Uttar Pradesh", "Odisha", "Assam", "Maharashtra"];
// let result = states.filter(state => !/^[AEIOUaeiou]/.test(state));
// console.log(result);

// 2.
// let str = 'I love my India';
// let output = str.split(" ").reverse().join(" ");
// console.log(output);

// 3.
// let string = 'INDIA'.split('');
// string.splice(3, 0, 'O', 'N', 'E', 'S');
// let result = string.join('');
// console.log(result);

// 4.
// let str = "This is a long string with more than twenty characters";
// let vowels = 0, consonants = 0;
// for (let ch of str.toLowerCase()) {
//     if (/[aeiou]/.test(ch)) vowels++;
//     else if (/[a-z]/.test(ch)) consonants++;
// }
// console.log("Vowels:", vowels);
// console.log("Consonants:", consonants);

// 5.
// function correctfn(string, wrong, correct) {
//     return string.replace(wrong, correct);
// }
// console.log(correctfn("I has a pen", "has", "have"));

// // 6. 
// let inputArr = [1,2,3,9,10,7,5,4,3];
// let answer = inputArr.filter(num => num > 5);
// console.log(answer);

// 7.
// const students = [
// { name: "Ram", scores: [80, 70, 60] },
// { name: "Mohan", scores: [80, 70, 90] },
// { name: "Sai", scores: [60, 70, 80] },
// { name: "Hemang", scores: [90, 90, 80, 80] },
// ];

// let result = students.map(stu => {
//     let total = stu.scores.reduce((sum, val) => sum + val, 0);
//     let avg = total / stu.scores.length;
//     return { name: stu.name, average: avg };
// });

// console.log(result);

// // 8.
// function repeatedSum(num) {
//     while (num > 9) {
//         num = num.toString().split('').reduce((sum, d) => sum + Number(d), 0);
//     }
//     return num;
// }
// console.log(repeatedSum(456));

// // 9.
// function wordCount(paragraph) {
//     return paragraph.trim().split(/\s+/).length;
// }
// console.log(wordCount("This is a sample paragraph to count words."));

// // 10.
// function reverseString(str) {
//     return str.split('').reverse().join('');
// }
// console.log(reverseString("Hello")); 

// 11.
let students = {
    student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
};

let result = {};
for (let student in students) {
    let marks = Object.values(students[student]);
    let total = marks.reduce((sum, val) => sum + val, 0);
    let average = total / marks.length;
    result[student] = { average: average };
}
console.log(result);
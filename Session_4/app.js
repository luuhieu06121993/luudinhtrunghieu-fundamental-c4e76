// let input = prompt('Nhap day so, moi so cach nhau day ","').split(",").map(x => +x);
// let a = 0;
// let b = 0;
// let c = 0;
// let d = 0;
// let count = 0;
// for (i = 0; i < input.length; i++) {
//     if (input[i] > 0) {
//         a += input[i];
//         count += 1;

//     } else {
//         b += input[i];
        
//     }
//     if (input[i] % 3 == 0) {
//         c += input[i];

//     }
//     d += input[i];
// }
// console.log(...input);
// console.log("tong cac so lon hon 0 = " + a);
// console.log("tong cac so nho hon 0 = " + b);
// console.log("tong cac so chia het cho 3 = " + c);
// console.log(" trung binh cong  cua day = " + d / (input.length + 1));
// console.log(" trung binh cong cac so lon hon 0= " + a / count);
// console.log(input.sort(function (a, b) { return (a - b) }));
// console.log(input.sort(function (a, b) { return (b - a) }));
// let loop = 0;
// for (i = 0; i < (input.length -1) / 2; i++) {
//     if (input[i] != input[(input.length - 1) - i]) {
//         loop = 1;
//         break;
//     }
// } if (loop === 0) {
//     console.log(" chuoi doi xung");

// }else {
//     console.log("chuoi ko doi xung");

// }
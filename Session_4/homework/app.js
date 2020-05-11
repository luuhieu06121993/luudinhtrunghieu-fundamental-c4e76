// Câu 1:
// a:
// let input = prompt('nhap day so bat ky cach nha bang dau ","').split(",").map(x => +x);
// console.log(input);
// let big = input[0];
// for (let i = 0; i < input.length; i++) {
//     if (input[i] > big) {
//         big = input[i];
//     }
// }
// let big2=0;
// for( let i=0; i<input.length;i++){
//     if(input[i]!=big){
//         big2=input[i];

//     }
// }
// for (let i = 0; i < input.length; i++) {
//     if (input[i] > big2 && input[i] != big) {
//         big2 = input[i];
//     }
// }
// console.log("so lon thu 2 trong chuoi la " + big2);

// b:
// let input = prompt('nhap day so bat ky cach nha bang dau ","').split(",").map(x=>+x);
// console.log(input);
// let small = Math.min(...input);
// let loop = input.indexOf(small);
// while (loop != -1) {
//     input.splice(loop, 1);
//     loop = input.indexOf(small, loop);

// }
// small = Math.min(...input);
// console.log("so be thu 2 trong chuoi la " + small);

// c:
// let input = prompt('nhap day so bat ky cach nha bang dau ","').split(",").map(x => +x);
// console.log(input);
// let temp = [];
// for (i = 0; i < input.length; i++) {
//     if (input[i] > 0) {
//         loop = 0;
//         if (input[i] != 1 && input[i] != 2) {
//             for (j = 2; j < input[i]; j++) {
//                 if (input[i] % j == 0) {
//                     loop = 1;
//                 }
//             }
//         }
//         if (loop == 0) {
//             temp.push(i);
//         }

//     }
// }
// if (temp.length == 0) {
//     console.log("ko co so nguyen to trong day");

// } else {
//     console.log("vi tri co so nguyen to trong day la: " + temp);
// }

// d:
// let input = prompt('nhap day so bat ky cach nha bang dau ","').split(",").map(x => +x);
// console.log(input);
// let temp = 0
// for (i = 0; i < input.length; i++) {
//     for (j = 0; j < input.length; j++) {
//         if (input[i] > input[j]) {
//             temp = input[i];
//             input[i] = input[j];
//             input[j] = temp;
//         }
//     }
// }
// if (input.length % 2 === 0) {
//     temp = (input[input.length / 2] + input[input.length / 2 - 1]) / 2;
// } else {
//     temp = input[Math.floor(input.length / 2)];
// }
// console.log(temp);

// e:

// let input = prompt('nhap day so bat ky cach nha bang dau ","').split(",").map(x => +x);
// console.log(input);
// let temp=0;
// for(i=0;i<input.length;i++){
//     for(j=i;j<input.length;j++){
//         if(input[i]+input[j]==5){
//             console.log("("+input[i]+","+input[j]+")");
//             temp=1;
//         }
//     }
// }if(temp==0){
//     console.log("NOT FOUND");

// }


// Câu 2:

// let input = prompt('nhap day so bat ky cach nha bang dau ","').split(",");
// console.log(input);
// let b = [];
// for (i = 0; i < input.length; i++) {
//     a = input[i].split("");
//     let loop = 0;
//     for (j = 0; j < (a.length - 1) / 2; j++) {
//         if (a[j] != a[a.length -1- j]) {
//             loop = 1;
//         }
//     }
//     if (loop != 1) {
//         b.push(i);
//     }

// } if (b.length == 0) {
//     console.log("NOT FOUND");

// } else {
//     console.log(b);

// }


// Câu 3:
//a:
let n = Number(prompt("nhap so mang con"));
let a = [];
for (i = 0; i < n; i++) {
    let b = prompt("nhap phan tu 1 mang ").split(" ").map(x => +x);
    a.push(b);
}
console.log(a);

//b:
// for(i=0;i<a.length;i++){
//     let sum=0;
//     for(j=0;j<a[i].length;j++){
//         sum+=a[i][j];
//     }
//     console.log("tong so 1 hang la: "+sum);

// }

//c:
// for(i=0;i<a.length;i++){
//     let sum=0;
//     for(j=0;j<a[i].length;j++){
//         sum+=a[j][i];
//     }
//     console.log("tong so 1 cot la: "+sum);

// }

//d:
// let sumc=0;
// let sump=0;
// for(i=0;i<a.length;i++){
//     sumc+=a[i][i];
// sump+=a[i][a.length-1-i];
// }
// console.log("tong duong cheo chinh la "+sumc);
// console.log("tong duong cheo phu la "+sump);

//e:
// let big = a[0][0];
// let small = a[0][0];
// for (i = 0; i < a.length; i++) {
//     for (j = 0; j < a[i].length; j++) {
//         if (a[i][j] < small) {
//             small = a[i][j];

//         }
//         if (a[i][j] > big) {
//             big = a[i][j];
//         }

//     }
// }
// console.log("So lon nhat la " + big);
// console.log("So nho nhat la " + small);

//f:
// let am = 0;
// let duong = 0;
// for (i = 0; i < a.length; i++) {
//     for (j = 0; j < a[i].length; j++) {
//         if (a[i][j] < 0) {
//             am = a[i][j];

//         }
//         if (a[i][j] > 0) {
//            duong = a[i][j];
//         }

//     }
// }
// console.log("tong cac So am la " + am);
// console.log("tong cac So duong la " + duong);








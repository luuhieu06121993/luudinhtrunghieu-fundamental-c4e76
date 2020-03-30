// Câu 1:
// kiểm tra kiểu dữ liệu của biến ta có thể dùng "Object.prototype.toString.call();"
// ví dụ:
let x =10;
console.log(x);
console.log("variable’s type: "+Object.prototype.toString.call (x));

 
//Lỗi SyntaxError khi khai báo biến là do:
//1. Đặt tên biến có kí tự đặc biệt (* : ; , + - % & ^ ( ) /).
// let * = 1;
//2. Khai báo biến trùng tên.
// let a = 1;
// let a = 2;
//3. Khai báo kiểu chuỗi .
// let a = 1,2,3;
//4. Đặt tên trùng với tên đặc biêt
// let let = 1;

//Câu 2:
console.log("Trả lời câu 2");
let Radius = Number(prompt("Nhập bán kính đường tròn")); 
const pi = 3.14
let Area = Math.pow(Radius,2)*pi;
console.log("Bán kính đường tròn là:" + Radius);
console.log("Diện tích đường tròn là:" + Area);

//Câu 3
console.log("Trả lời câu 3");
let C = Number(prompt("Nhập độ C")); 
let F = C*1.8+32;
console.log(C+"(C) = " +F+"(F)");

// Câu 4:
// Hình 1:
// clear();
// fd(100);
// rt(90);
// fd(100);
// rt(90);
// fd(100);
// rt(90);
// fd(100);

// Hình 2:
// clear();
// rt(30);
// fd(100);
// rt(120)
// fd(100);
// rt(120)
// fd(100);

// Hình 3:
// clear();
// for(i=0;i<360;i++){
// fd(3);
// rt(1);
// }

// Hình 4:
// clear();
// i=0;
// while (i<6){
// for(j=0;j<360;j++){
// fd(2);
// rt(1);
// }
// rt(60);
// i++;
// }
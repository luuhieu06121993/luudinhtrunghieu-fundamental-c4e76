// object
// key : value
// 1. Khai bao

// const person = {
//     name: "viet",
//     age: 27,
//     single: true,
//     hobbies: [
//         "watch movies",
//         'reading news',
//     ]
// };

// 2.c,r,u,d
// Read
// console.log(person.name);
// let name = "name";
// console.log(person[name]);
// console.log(person.age);

// update
// person.age=30;
// console.log(person);

//Create

// person.hair = true;
// console.log(person);

// Delete 
// delete person.hair;
// console.log(person);

// Exercise:
// tao 1 doi tuong bat ky
//search google, in ra toan bo cac thuoc tinh co trong doi tuong do

// Exercise 2:
// cho nguoi dung nhap vao name, age, job, single
// tao 1 doi tuong gom cac thuoc tinh nguoi dung
// nhap vao o tren va console.log ra doi tuong do

// ex1:
// for ... in
// const user={
//     name:"hieu",
//     age:"27",
//     job:"cccc",
//     single:true,
// }

// for(let key in user){
//     console.log(key+"="+user[key]);

// }
// ex2:
// let name=prompt('input name');
// let age=prompt('input age');
// let job=prompt('input job');
// let single=prompt('input single');
// let person={
//     name:name,
//     age:age,
//     job:job,
//     single:single,
// }
// console.log(person);

// let person={};
// person.name=name;
// person.age=age;
// person.job=job;
// person.single=single;
// console.log(person);

// object methods
// Function - Hàm

// Khai báo
// function dosomething(a,b,c){
//     return Sth;
// }



// function Calculate(a, h) {
//     let s = a * h / 2;
//     // return arguments;
//     return s;
// }

// console.log(Calculate(10, 5));

// Object methods

// let myDog = {
//     name: 'Cat',
//     weight: 5,
//     color: "white",
//     bark: function () {
//         console.log(" gau gau gau");

//     },
//     eat: function (bone) {
//         console.log(this);
//         this.weight = this.weight + bone.weight;
//     }
// }
// myDog.bark();
// myDog.eat({ weight: 2 });
// console.log(myDog);

// function bark() {
//     console.log("meo meo");

// }
// console.log(bark());

// const randomstring = "hello";
// let randomstring2 = new String("hello 123")
// console.log(randomstring2);

// function Person(name, age) {
//     this.name = name;
//     this.age = age;

// };

// let person1=new Person('hieu',27);
// console.log(person1);

// ex
// C: cho nguoi dung nhap vao ten va so dien thoai moi
// R: in ra toan bo ten va so dien thoai
//   theo dang: "ten - sdt"
// U: cho nguoi dung search theo ten
//    neu tim thay => Cho update ten va so dien thoai
//    neu ko tim thay=> in ra la ko thay
// D: cho nguoi dung search theo ten
//    neu tim thay => cho delete
//    neu ko tim thay => in ra la ko tim thay
// sau moi lan thuc hien cac thao tac nay thi deu in ra toan bo cac sdt theo rang "R"
// while - de cho truong chinh chay vo han
// E     - de ket thuc

// const phoneList = [
//     {
//         name: "ngoc",
//         phone: "0971338570"
//     },
//     {
//         name: "lam",
//         phone: "09855124466"
//     },
// ];
// function show(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i].name + " - " + arr[i].phone);
//     }
// }
// function check(arr, s) {
//     let t = -1;
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i].name.indexOf(s) != -1) {
//             t = i;
//         }
//     }
//     return t;
// }
// let temp = true;
// while (temp) {
//     let input = prompt("nhap thao tac C,R,U,D").toLocaleLowerCase();
//     if (input === "c") {
//         let name = prompt("nhap ten nguoi dung");
//         let phone = prompt("nhap SDT nguoi dung");
//         let newContact = {
//             name: name,
//             phone: phone,
//         };
//         phoneList.push(newContact);
//         show(phoneList);
//     } else if (input === "r") {
//         show(phoneList);
//     } else if (input === "u") {
//         search = prompt('nhap ten can tim');
//         let t = check(phoneList, search);
//         if (t === -1) {
//             alert('ko tim thay');
//         } else {
//             phoneList[t].name = prompt("nhap ten nguoi dung");
//             phoneList[t].phone = prompt("nhap SDT nguoi dung");
//         };
//         show(phoneList);
//     } else if (input === "d") {
//         if (phoneList.length === 0) {
//             console.log("ko con phan tu nao");
//         } else {
//             search = prompt('nhap ten can tim');
//             t = check(phoneList, search);
//             if (t === -1) {
//                 alert('ko tim thay');
//             } else {
//                 phoneList.splice(t, 1);
//             }
//         };
//         show(phoneList);
//     } else if (input === "e") {
//         break;
//     }

// }

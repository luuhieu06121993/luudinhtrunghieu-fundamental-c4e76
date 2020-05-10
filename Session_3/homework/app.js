// Câu 1:
// 
// Cách 1:
// let input = [40, 100, 1, 5, 25, 10];
// console.log(input);
// [input[2],input[4]]=[input[4],input[2]];
// console.log(input);

// Cách 2:
// let input = [40, 100, 1, 5, 25, 10];
// console.log(input);
// let temp=input[2];
// input[2]=input[4];
// input[4]= temp;
// console.log(input);


//Câu 2:

// let input='hom nay la thu 4';
// let result = input.split(" ");
// console.log(result);


// Câu 3:

// let input = [40, 100, 1, 5, 25, 10];
// console.log(... input);


// Câu 4:

// let items = ['jeans', 'T - Shirt', 'Socks'];
// let loop= true;
// while (loop) {

//     let input = prompt("127.0.0.1:500 says\nHi there, welcome to shop admin panel, what do you want (C,R,U,D)").toLowerCase();
//     if (input === "r") {
//         console.log('the curremt items are:');
//         for (let i = 0; i < items.length; i++) {
//             console.log(i + ". " + items[i]);

//         }

//     } else if (input === 'c') {
//         let newname = prompt("127.0.0.1:500 says\nEnter the name of the new item");
//         items.push(newname);
//         alert("Done");

//     } else if (input === 'e') {
//         alert("127.0.0.1:5000 says\nThis command is not supported");
//     } else if (input === 'u') {
//         let newnuber = prompt("127.0.0.1:500 says\nEnter the name of the new item");
//         newname = prompt("127.0.0.1:500 says\nEnter the new name");
//         items[newnuber] = newname;
//         alert("Done");
//     } else if (input === 'd') {
//         newnuber = prompt("127.0.0.1:500 says\nEnter the position you want to delete");
//         items.splice(newnuber-1, 1);
//     } else {
//         alert("127.0.0.1:500 says\nThis command is not supported");

//     }
// }


// Câu 5:

// let input = prompt("Enter a squence of Number, separated by commas(,)");
// let result = input.split(",");
// let sum = 0;
// for (let i = 0; i < result.length; i++) {
//     sum += Number(result[i]);

// }

// alert("127.0.0.1:500 says\nThe sum of them is " + sum);


// Câu 6:

// let input = prompt('Enter a squence of Number, separated by ","');
// let result = input.split(",");
// let smallest = Number(result[0]);
// for (i = 1; i < result.length; i++) {
//     if (Number(result[i]) <= smallest) {
//         smallest = Number(result[i]);
//     }
// }
// console.log(smallest);

// alert("127.0.0.1:500 says\nThe smallest number is " + smallest);


// Câu 7:

// const arr = [3,4,6,8,9,4,-88,-22];
// let result = [];
// let loop = 0;
// let input = Number(prompt('Enter Number'));
// for (i = 0; i < arr.length; i++) {
//     if (arr[i] === input) {
//         result.push(i-1);
//         loop =1;
//     }

// } if (loop === 1) {
//     alert("127.0.0.1:500 says\n" + input + " is FOUND in may array at index " + result);

// } else {
//     alert("127.0.0.1:500 says\n" + input + " is NOT found in may array ");
// }


// Câu 8:

// let input = prompt("Hello, my name is Phuong Nam and here is my sheep sizes").split(",").map(x => +x);
// console.log("Hello, my name is Phuong Nam and here is my sheep sizes:\n" + input);
// let month = Number(prompt('Enter month '));
// for (let i = 1; i <= month; i++) {
//     let big = 0;
//     let index = [];
//     big = Math.max(...input);
//     console.log("Now may bigger sheep has size" + big + ",let's shave it");
//     loop = input.indexOf(big);
//     while (loop != -1) {
//         index.push(loop);
//         loop = input.indexOf(big, loop + 1);
//     }
//     for (let j = 0; j < index.length; j++) {
//         let a = index[j];
//         input[a] = 8;
//     }
//     console.log("After shearing, here is my flock\n" + input);
//     input = input.map(x => x + 50);
//     console.log("MONTH" + i + "\n One month has, passed, my sheep have grown, here are their sizes\n" + input);

// }
// let sum = 0;
// for (i = 0; i < input.length; i++) {
//     sum += input[i];
// }
// let money = sum * 2;
// console.log(money);


// Câu 9:

// clear();
// setshape("rocket-large")
// x=50;
// y=1;
// const colors = ["red", "gray'", "blue", "purple", "cyan"];
// for(i=1;i<=4;i++){
// color(colors[y]);
//   for(j=1;j<=4;j++){
//     fd(x);
//     rt(90);
//   }
// y+=1;
// x+=50;
// }


// Câu 10:

// let input = prompt("enter a sequence of name").split(",");
// let result = input.map(input => ("<"+input+">"));
// alert("127.0.0.1:500 says\n" + input + " => " + result);

// let input = prompt("enter a sequence of name").split(",");
// let result=[];
// for(i=0;i<input.length;i++){
//     result.push("<"+input[i]+">");
// }
// alert("127.0.0.1:500 says\n" + input + " => " + result);



// Câu 11:

// let input = prompt("enter a sequence of name").split(",").map(x=>+x);
// let result = input.filter(input=>(input%2==1));
// alert("127.0.0.1:500 says\n"+ input + " => " + result);





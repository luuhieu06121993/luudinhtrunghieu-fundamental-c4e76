// console.log("hello world");
// // let aNumber = 10;
// // let bNumber = 20;
// // let c = aNumber + bNumber;
// // console.log(c);
// // let a = prompt('nhu the nao ');   
// // console.log(a);

// let a = prompt("nhập dãy a").split(",");

// // let a = [-1,9,-6,2,-5,4,5,8];
// console.log(a.length);
// function dem(n){
// let j=0;
//     for (let i = 0; i < n.length; i++) {
//      if(n[i]<0){
//          j ++;

//      }
//      const element = n[i];

//     }
//     return j;   
// }

//  function min(n,x){
//     for (let i = x; i < n.length; i++) {
//         for (let j = x; j < n.length; j++) {
//             if (n[j] < n[j+1]){
//                 let nNumber = n[j];
//                 n[j] =n[j+1];
//                 n[j+1] = nNumber;
//             }
//             const element = n[j];

//         }

//         const element = n[i];  
//      }

//  }
//  function max(n,x){
//  for (let i = x; i < n.length; i++) {
//     for (let j = x; j < n.length; j++) {
//         if (n[j] > n[j+1]){
//             let nNumber = n[j];
//             n[j] =n[j+1];
//             n[j+1] = nNumber;
//         }
//         const element = n[j];

//     }

//     const element = n[i];  
//  }
// }
// let b = dem(a);
// console.log(a);

// max(a,0);
// console.log(a);
// min(a,b);
// console.log(a);
// console.log(b);
// document.write(a);
// document.write("<br/>");
// document.write(a[1]+a[2])

// let loop = "yes";
// a:while (loop="yes") {
//     let name=prompt("nhập chuỗi bất kỳ");
//      let reversename = name[name.length-1]
//     for(let i= name.length-2;i>=0;i--){
//          reversename = `${reversename}${name[i]}`;

//     };
//     console.log(reversename);
//     let loop1=true;
//     while(loop1){
//         loop=prompt("Bạn có muốn tiếp tục (yes/no)");
//         if(loop==="no"){
//         break;
//         }else if (loop ==="yes")
//         continue a;
//     }
//     break;
// };

// let m = Number(prompt("Nhap so M:"));
// let n = Number(prompt("Nhap so N:"));
// for(let i=1;i<=m;i++){
//     for(let j=1;j<=n;j++){
//         console.log(`*`);    
//     }
//     console.log("\n");
// }

// let n = prompt("nhap n");
// for(let i=1; i<=n;i++){
//     console.log(i);

// }
// while (loop === 'yes') {
//     let userString = prompt('Please enter a string: ');
//     let revertString = userString.split('').reverse().join('');
//     console.log(revertString);
//     loop = prompt('Bạn có muốn tiếp tục nữa không.');
// }


// let input = prompt("Hello, my name is Phuong Nam and here is my sheep sizes").split(",");
// let input = arr.map(arr => ("<"+arr+">"));
// let input=prompt("").split(",").map(x=>+x);
// let big = Math.min(... input);
// console.log(big);


// let input2=  prompt("Hello, my name is Phuong Nam and here is my sheep sizes");
// let loop =input.indexOf(input2);
// if (loop!=-1){
//     console.log("co gia tri");

// }else {
//     console.log('ko gia tri');

// }

// let input = prompt("Hello, my name is Phuong Nam and here is my sheep sizes").split(",").map(x=>+x);
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
//     input = input.map(y => y + 50);
//     console.log("MONTH" + i + "\n One month has, passed, my sheep have grown, here are their sizes\n" + input);

// }
// let sum = 0;
// for (i = 0; i < input.length; i++) {
//     sum += input[i];
// }
// let money = sum * 2;
// console.log(money);


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


// item=items[i];
// items.forEach(function(item){});


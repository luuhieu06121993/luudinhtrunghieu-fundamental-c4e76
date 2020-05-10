// console.log(" hello world");

// Câu điều kiện rẽ nhánh (if - else)

// if (condition){
//     do somethig

// }else {
//     do something else
// }

// boolean (truse/ false)

// const randomBoolean = truse
// ===, !== (kiểu so sánh cả giá trị và dữ liệu)
// const x=5;
// console.log(x > 10);
// console.log(x === "5");

// && (AND), || (OR), ! (OPPOSITE)

// const x = 5;
// const y = 9;




// (y>9) || (x===5);




// // || -chỉ cần 1 trong 2 true => kết quả là true




// x<10 && x===5;
// // cần cả 2 giá trị true => kqua la true




// !(x===y); // true




// const x=3;
// const y=8;




// y==='b'||x>=10;
// !(x=='3'||x===y)&&!(y!=8 && x<=y); //false




// if(){
//     //do something
// }else if(){
//     //do something
// }else {
//     //do something
// }



//bt1:
//cho người dùng nhập vào tuổi
//tuổi <18: you cannot enter the bar
//còn từ tuổi từ 18-21: you can enter but cannot drink
//các trường hợp còn lại => you can drink



//bt2:
// cũng cho người dùng nhập tuổi
// tuổi < 0 => invalid age
// tuổi == 21 => happy birthday
// tuổi là số lẻ => your age is odd
// tuổi là 1 số có thể căn bậc 2 => perfect square

// bt1:
// let age = Number(prompt("nhập tuổi của bạn"));

// if(age < 18){
//     console.log("you cannot enter the bar");        
    
// }else if(age < 21){
//     console.log("you can enter but cannot drink");
    
// }else {
//     console.log("you can drink");
    
// };
//b2
// if(age<0){
//     console.log("invalid age");        
    
// }else if(age===21){
//     console.log("happy birthday");
    
// };
// if((age%2)===1){
//     console.log("your age is odd");

// };
// if (Math.sqrt(age)===(Math.sqrt(age)){
//     console.log("perfect square");
    
// };
// if(age % Math.sprt(age)===0){
//     console.log("perfect square");
    
// };

// while loops

// while(condition){
//     // hành động lặp
// };

// let i =1;

//  while(i<5){
//      console.log(i);
//      i =i+1;
//  }

// cho người đùng nhập 1 số bất kỳ từ 1 đến 10
// số kết quả là 1 số random từ 1 -10
// nếu input > result: too high
// nếu input < result: too low
// nếu input === result: correct và kết thúc chương trình;

// const resultNumber = Math.ceil(Math.random()*10);
// let loop= true;
// while(loop){
// const useInput= Number(prompt("nhập số bất kỳ từ 1 đến 10"))
// console.log(resultNumber);

//   if (useInput > resultNumber){
//         console.log("too high");

//    }else if(useInput < resultNumber){
//         console.log("too low");
        
//    }else{
//        console.log("correct");
//     //    loop = false;
//        break;
//    };
// }
 // Sử dụng vòng lặp while 
 // 1. in ra số từ 1 - 10
 // 2. in ra số chia hết cho 4 trong các số từ 0 -20
 // 3. in ra số lẻ trong các số từ 0 -20
 // 4. in ra số chia hết cho 3 và chia hết cho 5 trong các số từ 5 -50
 
//  let i = 1;
 
//  while(i<=10){
//     console.log(i);
//     i++;  
//  };
//  i=0;
//  while (i<=20) {
//      if(i%4 ===0 ){
//         console.log(i);
        
//      }
//      i+=1;  
//  }
//  i= 30
//  while(i<=40){
//      if(i%2==1){
//          console.log(i);
         
//      }
//      i=i+1;
//  }
//  i=5;
//  while(i<=50){
//     if(i%3==0&&i%5==0){
//         console.log(i);
        
//     }
//     i=i+1;  
//  }


//  for(condition){
//  // hành động lặp
//  }   
// Sử dụng vòng lặp for in ra các số từ 1 -5;


// for (let i = 1; i <=5; i++){
//  console.log(i);
// }

//  let i = 1
// while (i<=5) {
//     console.log(i);
//     i++
// }

// sử dụng vòng lặp for 
// tính tổng các số từ 1 đến 10
// in ra các số từ 1 đến 20 cách nhau 3 đơn vị


// let i =1;
// let a =0
// for(i =1; i<=10;i++ ){
//     a+=i;
// };
// console.log(a);

// for( i=1; i <=20; i+=3){
//     console.log(i);
    
// };















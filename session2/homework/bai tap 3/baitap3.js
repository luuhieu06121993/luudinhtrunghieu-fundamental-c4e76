// Câu 1:
// let n=Number(prompt("Nhập số N"));
// let tongle=0;
// let tongchan =0;
// for (let i=1;i<=n;i++){
//     if(i%2==0){
//         tongchan+=i;
//     }else{
//       tongle+=i;
//     }
// }
// console.log("Tổng các số lẻ = "+tongle);
// console.log("Tổng các số chẫn = "+tongchan);


// Câu 2:
// let n=Number(prompt("Nhập số N"));
// let loop =0;
// if(n==0){
//     console.log(n+" là số nguyên tố");
    
// }else if(n==1){
//     console.log(n+" là số nguyên tố");
    
// }else{
//     for(let i=2;i<n/2;i++){
//         if(n%i==0){
//             console.log(n+" không phải số nguyên tố");
//             loop=1;
//             break;
//         }
//     }
//     if(loop===0){
//         console.log(n+" là số nguyên tố");
//     }

// }


// Câu 3:
// function songuyento(n) {  
//    let loop =0;
//    if(n==0){
//       console.log(n);
    
//     }else if(n==1){
//       console.log(n);
    
//     }else{
//        for(let i=2;i<n;i++){
//           if(n%i==0){
//             loop=1;
//             break;
//           }
        
//         }

//     } 
//     return loop;
// }
// let n=Number(prompt("Nhập số N"));
// for(let i=2;i<=n;i++){
//     if (songuyento(i)===0){
//         console.log(i);
//     }
// }
    

// Câu 4:
// let n=Number(prompt("Nhập số N"));
// let x1,x2,x3;
// x1=x2=x3=1;
// if(n<=0){
//   console.log("Không hợp lệ");
  
// }else if(n===1||n===2){
//   console.log(x1);
  
// }else {
//   for(i=3;i<=n;i++){
//     x3=x1+x2;
//     x1=x2;
//     x2=x3;
//   }
//   console.log(x3);
  
// }


// Câu 5:
// let loop = true;
// let sum =0
// while(loop){
//   let input=Number(prompt("Nhập số bất kỳ"));
//   if(input>=0){
//     sum+=input;
//   }else{
//     console.log(sum);
//     break;
    
//   }
// }


// Câu 6:
// let input=prompt("Nhập chuỗi bất kỳ ");
// let loop=true;
//   for(let i=0;i<=input.length/2;i++)
//   if(input[i]!=input[input.length-1-i]){
//     console.log("chuỗi không đối xứng");
//     loop=false;
//     break;

//   }
//   if(loop){
//     console.log("chuỗi đối xứng");
    
//   }


// Câu 7:
// let a="*";
// let x=a;
// let m=Number(prompt("Nhập số hàng"));
// let n=Number(prompt("Nhập số cột"));
// for(let i=1;i<m;i++){
//   x=`${x}${a}`;
// }
// for(i=1;i<=n;i++){
//   console.log(x);
//   document.write(x+"<br/>");
  
// }


// Câu 8:
// let c1=Number(prompt("Nhập tổng số gà, chó"));
// let c2=Number(prompt("Nhập tổng số chân"));
// let ga,cho;
// ga=(c1*4-c2)/2;
// cho=c1-ga;
// console.log("Số gà= "+ga);
// console.log("Số chó= "+cho);


// Câu 9:
// let a1=Number(prompt("Nhập số a1"));
// let b1=Number(prompt("Nhập số b1"));
// let c1=Number(prompt("Nhập số c1"));
// let a2=Number(prompt("Nhập số a2"));
// let b2=Number(prompt("Nhập số b2"));
// let c2=Number(prompt("Nhập số c2"));
// let x,y;
// y=(c2*a1-a2*c1)/(b2*a1-b1*a2);
// x=(c1-b1*y)/a1;
// console.log("x= "+x);
// console.log("y= "+y);







// Câu 1:
// let input = Number(prompt("Nhập 1 số bất kỳ"));
// let giaithua =1;
// if(input<0){
//     console.log("invalid input");
    
// }else if(input>0){
//     let i=1;
//     while(i<=input){
//         giaithua*=i;
//         i+=1;
//     }
//     console.log(giaithua);
    
// }else {
//     console.log(giaithua);
    
// }

// Câu 2:
// let name = prompt("Nhập name");
// let age = Number(prompt('Nhập tuổi'));
// if(age<18){
//     console.log(name+" chưa đủ tuổi vào trang web này ");
    
// }else {
//     quesion=prompt(name+" có muốn đăng nhập vào trang web này không (yes/no)");
//     if(quesion === "yes"){
//         console.log(name + ' đã vào trang web thành công');
        
//     }else if(quesion==="no"){
//         console.log(name + ' thoát khỏi trang web');
        
//     }
// }

// Câu 3:

// let username = prompt('Nhập username');
// let password = prompt('Nhập password');
// let username2 = "luuhieu0612";
// let password2 = "c4e";
// if(username!=username2){
//     console.log("username sai");
    
// }else if(password!=password2){
//     console.log('password sai');

// }else {
//     console.log('Đăng nhập thành công');
    
// }

// Câu 4:
// let name = prompt("Nhập name");
// let month = Number(prompt('Nhập tháng sinh'));
// switch (month) {
//     case 1:
//     case 2:
//     case 3:
//         console.log(name + " sinh vào mùa xuân");
        
//         break;
//     case 4:
//     case 5:
//     case 6:
//         console.log(name + " sinh vào mùa hạ");
        
//         break;
//     case 7:
//     case 8:
//     case 9:
//         console.log(name + " sinh vào mùa thu");
        
//         break;        
//     case 10:
//     case 11:
//     case 12:     
//     console.log(name + " sinh vào mùa đông");
        
//         break;
//     default:
//         console.log('input không hợp lệ');
        
//         break;
// }


// Câu 5:
// let loop = "yes";
// while ( loop = "yes" ) {
//     let a = Number(prompt("Nhập tham số a")); 
//     let b = Number(prompt("Nhập tham số b")); 
//     let c = Number(prompt("Nhập tham số c")); 
//     let x1,x2 =1;
//     let deta =1;
//     deta = Math.pow(b,2)-4*a*c ;
//     if(deta<0){
//        console.log('phương trình vô nghiệm');
   
//     }else if(deta==0){
//        x1=-b/(2*a);
//        console.log("Phương trình có nghiệm kép là: x1=x2="+x1);    
       
//     }else {
//        x1=(-b+Math.sqrt(deta))/(2*a);
//        x2=(-b-Math.sqrt(deta))/(2*a);
//        console.log("Phương trình có 2 nghiệm là: x1="+x1+"; x2="+x2);

//     };
//     loop = prompt("Bạn có muốn sử dụng trương trình tiếp ko (yes/no)");
// 
// } ;

// Câu 6:
// let randomString = prompt("Nhập chuỗi bất kỳ");
// let i=0;
// while (i<randomString.length) {
//    console.log("randomString["+i+"]="+randomString.substr(i,1));
//    i++;
//  };
// let randomString = prompt("Nhập chuỗi bất kỳ");
// for (let i = 0; i < randomString.length; i++) {
//     console.log("randomString["+i+"]="+randomString.charAt(i));    
    
// };


// Câu 7:
// let loop = "yes";
// while (loop="yes") {
//     let name=prompt("nhập chuỗi bất kỳ");
//      let reversename = name[name.length-1]
//     for(let i= name.length-2;i>=0;i--){
//          reversename = `${reversename}${name[i]}`;
        
//     };
//     console.log(reversename);
    
//     loop=prompt("Bạn có muốn tiếp tục (yes/no)");
//     if(loop==="no"){
//         break;
//     };
   
// };
 

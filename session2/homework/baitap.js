let mass = Number(prompt("Nhập cân nặng (kg)"));
let heigh = Number(prompt("Nhập chiều cao (m)"));
let BMI = mass/ Math.pow(heigh,2);
if(BMI<16){
    console.log("Thiếu cân nặng");
    
}else if(BMI<18.5){
    console.log("Thiếu cân");
    
}else if(BMI<25){
    console.log("Bình thường");
    
}else if(BMI<=30){
    console.log("Thừa cân");
    
}else {
    console.log("Béo phì");
    
} 


let n = Number(prompt("Nhập số bất kỳ"));
let a=1;
let i=1;
while(i<=n){
    a = a*i;
    i+=1;
}
console.log("Giai thừa của n ="+a);






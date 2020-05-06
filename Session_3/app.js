// let n = Number(prompt('Nhập số n'));
// let a=0;
// if(n>=2){
//     for(let i=2; i<=n; i++){
//         a+=1/(i*(i-1));
//     }
//     console.log("A= "+a);
// }else {
//     a=n;
// console.log("A= "+a);
// }
// let x=0;
// for(let i=1;i<=n;i++){
//     let b=1;
//     for(let j=1;j<=i;j++){
//         b=b*j;
//     }
//     console.log(b);
//     x+=b;
//  }
//  console.log(x);


// array - list

// let mon1="cơm";
// let mon2="bun";
// let mon3="pho";

// let menu=["com", "bun", "pho","my"];
//index =  0 1 2 3(length-1)
// index, value , length;


// for in ra phan tu trong mang
// for(i=0;i<menu.length; i++){
//     console.log(menu[i]);

// }


// const a=[];
// const b=[];
// console.log(a===b);


// refevence = array + object;


// let book = ["random 1", "random 2", "random 3"];

// c,R,U,D - Create, Read, Update, Delete;
// Read one =>
// console.log(book[0]);

// Read all =>
// for(i=0;i<book.length; i++){
//     console.log(book[i]);   
//  }


// Update =>
// book[0] = "update name";
// console.log(book);

// Create

// append last
// book.push("random 0");
// console.log(book);

// append first
// book.unshift("random n");
// console.log(book);

// delete

// delete last
// book.pop();
// console.log(book);

// delete first
// book.shift();
// console.log(book);

// delete
// book.splice(1, 1);
// console.log(book);

// to do list


// cho nguoi dung nhap vao CRUD 
// C: Cho nguoi dung nhap vao todolist moi va them vao cuoi
// R: in ra toan bo todolist hien co
// U: hoi nguoi dung muon update phan tu thu may
// sau day cho nguoi dung nhap lai noi dung muon update
// D: hoi nguoi dung muon delete phan tu thu may

// sau moi buoc CRUD => in ra toan bo todolist hien co

// B2
// khi nguoi dung nhap vao E => ket thuc Chuong trinh
// con lai cac th khac thi van nhu tren

const todoList = ['Go to work at 8 am'];
let loop = true;
while (loop) {
    let input = prompt("nhap vao thao tac").toLowerCase();
    if (input === "c") {
        let n = prompt("nhap todolist moi???");
        todoList.push(n);
        for (i = 0; i < todoList.length; i++) {
            console.log(todoList[i]);

        }

    } else if (input === 'r') {
        for (i = 0; i < todoList.length; i++) {
            console.log(todoList[i]);

        }

    } else if (input === "u") {
        let Numberupdate = Number(prompt("ban muon update phan tu thu may"));
        let valueupdate = prompt(" noi dung update");
        todoList[Numberupdate - 1] = valueupdate;
        for (i = 0; i < todoList.length; i++) {
            console.log(todoList[i]);

        }

    } else if (input === "d") {
        let Numberdelete = Number(prompt("ban muon delete phan tu thu may"));
        todoList.splice(Numberdelete - 1, 1);
        for (i = 0; i < todoList.length; i++) {
            console.log(todoList[i]);

        }
    } else if (input === "e") {
        loop = false;
    } else {
        console.log('invalid command');

    }

}

















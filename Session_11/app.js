
// let email = document.getElementById("email");
// let password = document.getElementById("password");
// let comfirmpw = document.getElementById("comfirmpw");
// let er=document.getElementsByClassName("error")[0];
// let errors=[];
// document.getElementById('demo').addEventListener("click", onclickeven);
// function onclickeven() {
//     let errors=[];
//     if (!email.value) {
//         errors.push('invalid email');
//     }
//     if (!password.value) {
//         errors.push('invalid password');
//     }
//     if (!comfirmpw.value || comfirmpw.value!=password.value) {
//         errors.push('password ang confirm password are not math');
//     }
//     if(errors.length==0){
//         er.innerHTML="dang nhap thanh cong";
//         er.style.color='blue';
//         er.style.display='block';
//     }else{
//         for(let err of errors){
//             er.innerHTML+=`${err} <br/>`;
//             er.style.display='block';
//             er.style.color='red';
//         }  
//     };

// };

// let mainform = document.getElementById("main-form");
// mainform.addEventListener('submit', onsubmitEvent);
// function onsubmitEvent(event) {
//     event.preventDefault();
//     console.log(event);
//     console.log("sdasd");
// }

const mainform = document.getElementById("main-form");
let ul = document.getElementById("content");
mainform.addEventListener('submit', onSubmitEvent);
function onSubmitEvent(event) {
    event.preventDefault();
    const content = mainform.todo.value;
    const li = document.createElement("li");
    li.innerHTML = `${content} <button id="delete">delete</button>`;
    ul.appendChild(li);
};

ul.addEventListener('click', onDeletetodo);
function onDeletetodo(event) {
    if (event.target.id === "delete") {
        console.log(event.target.parentNode);
        event.target.parentNode.remove();
    };
};

// event.target ngam event bubbling
// localstorrage - todolist

// console.log(document);
// .getElementsByClassName
// .getElementsByTagname
// .querySelector()
// .querySelectorAll()
const demo = document.getElementById('demo');
// console.log(demo);
let h1 = document.getElementsByClassName("h1");
// console.log(h1);
// console.log(h1[0]);

const ul = document.querySelector('.main-list');
// console.log(ul);
// console.dir(ul);

// textContent
ul.textContent = "hello word";

// innerText
ul.innerText = "hello word 2";

// innerHTML
ul.innerHTML = "<li>Go to bed</li>";

// style
ul.style.backgroundColor = "red";

// children
let lis = ul.children;
// console.log(lis);

// appendChild()
const li = document.createElement('li');
li.id = "todo-item";
li.classList.add('todo-items');
li.innerText = "go to bed";
ul.appendChild(li);

let todoItem = document.getElementById("todo-item");
console.log(todoItem);


// remove()
todoItem.remove();


//Event Listener
// demo.onclick=onAlert;
function onAlert(){
    alert("hello");

}

let id = demo.addEventListener("click",onAlert);
demo.addEventListener("click", function () {
    console.log("hello word");
});

const button = document.getElementById("remove");
button.addEventListener("click", function () {
    demo.removeEventListener("click", onAlert);
});


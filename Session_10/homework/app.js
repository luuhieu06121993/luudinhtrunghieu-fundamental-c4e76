// let temp = document.getElementById("temp");


// let push = document.getElementById("push");
// push.addEventListener("click", function () {
//     temp.innerText++;
// });
// let del = document.getElementById("delete");
// del.addEventListener("click", function () {
//     temp.innerText--;
// });


// // 2
// let color = document.getElementById('color');
// color.addEventListener("click", function () {
//     color.style.backgroundColor = "red";
//     color.style.color = "blue";
// });

// //3
// let hide = document.getElementById('hide');
// hide.addEventListener('click', function () {
//     // if(color.style.display=="none"){
//     //     color.style.display="block";
//     // }else{
//     //     color.style.display="none";
//     // }
//     color.classList.toggle('hide')
// });



// //4
// let style = document.getElementById("style");
// style.addEventListener("click", function () {
//     let r = Math.floor(Math.random() * 255);
//     let g = Math.floor(Math.random() * 255);
//     let b = Math.floor(Math.random() * 255);
//     let rgb = "rgb(" + r + ", " + g + "," + b + ")"
//     color.style.backgroundColor = rgb;
// });

// //5
// let ul = document.getElementById("list");
// let lis = ul.children;
// let loop = document.getElementById("loop");
// loop.addEventListener("click", function () {
//     for (let key of lis) {
//         let temp = key.getElementsByTagName('button');
//         if (temp.length == 0) {
//             key.innerHTML = key.innerHTML + "  <button>x</button>";
//         };
//     };
// });

let loop = 0;
let chon = document.getElementsByClassName("chon")[0];
let head = document.getElementById('head')
let yes = document.getElementById("yes")

document.getElementById("khong").addEventListener("mouseover", function () {
    // if (chon.style.flexDirection == "row") {
    //     chon.style.flexDirection = "row-reverse";

    // } else {
    //     chon.style.flexDirection = "row";
    // };
    chon.classList.toggle('reverse');
    console.log(loop);
    loop++;
    if (loop >= 5) {
        head.style.display = "none";
        chon.style.display = "none";
        yes.style.display = "block";
    };
});


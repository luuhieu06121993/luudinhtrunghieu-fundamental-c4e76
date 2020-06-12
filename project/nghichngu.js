let hoadon = document.getElementById('hoadon');
let datmua = document.getElementById("muatra");
datmua.addEventListener("click", onclick);
let index=0;
function onclick(event) {
    let tenmon=datmua.parent().children("div").ep(2);
    event.preventDefault();
    let stt="sl"+index;
    let div = document.createElement("div");
    // div.addclass("donhang");
    div.innerHTML = tenmon+' <button id="-">-</button><div id="'+stt+'">0</div><button id="+">+</button><button id="delete">x</button>';
    hoadon.appendChild(div);
    index+=1;    
}
hoadon.addEventListener("click", them)
hoadon.addEventListener('click', clickdelete)
function clickdelete(event) {
    if (event.target.id == "delete") {
        event.target.parentNode.remove();
    };
};
function them(event){
    if(event.target.id=="+"){
        alert('dhdfhf')
        
    };
};


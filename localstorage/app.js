// let sandals=[
//     {
//         name:"sandal 1",
//         price: 30000,
//         size: 37,
//         publissher: "thang cute"
//     },
//     {
//         name:"sandal 2",
//         price: 50000,
//         size: 40,
//         publissher: "ha cute"
//     }
// ];
// JSON.stringgify(mang/oj) chuyen mang sang string
// let jsonData=JSON.stringify(sandals);
// console.log(jsonData);
// localStorage.setItem("sandals", jsonData);
// JSON.parse(chuoi JSON) chuyen string sang arr hoac oj
// let string= localStorage.getItem("sandals");
// let arr=JSON.parse(string);
// console.log(arr);


// localStorage.setItem("sandals", JSON.stringify(sandals));

// read 
function showSandals() {
    // goi từ local: string
    let jsonData = localStorage.getItem("sandals");
    // convert string -> array
    let sandals = JSON.parse(jsonData);
    // hiển thị
    let html = `<ul>`;
    for (let sandal of sandals) {
        html += `
        <li>
            Name: <b>${sandal.name}</b><br>
            Price: <i>${sandal.price}</i><br>
            Size: <mark> ${sandal.size}</mark><br>
            Publisher:<small>${sandal.publissher}</small><br>
        </li> `;
    };
    html += `</ul>`;
    console.log(html);
    document.getElementById("app").innerHTML = html;
}

function addSandal(sandal) {
    //  let jsonData=localStorage.getItem("sandals");
    let sandals = JSON.parse(localStorage.getItem("sandals"));
    sandals.push(sandal);
    localStorage.setItem("sandals", JSON.stringify(sandals));
    showSandals();
}
function updateSandal(name, data) {
    let sandals = JSON.parse(localStorage.getItem("sandals"));
    let foundIndex = sandals.findIndex(function (item) {
        return item.name == name;
    });
    if (foundIndex >= 0) {
        sandals[foundIndex] = data;
    } else {
        console.log("not found");
    }
    localStorage.setItem("sandals", JSON.stringify(sandals));
    showSandals();
};
function deleteSandal(name) {
    let sandals = JSON.parse(localStorage.getItem("sandals"));
    let foundIndex = sandals.findIndex(function (item) {
        return item.name == name;
    });
    if (foundIndex >= 0) {
        sandals.splice(foundIndex, 1)
    } else {
        console.log("not found");
    };
    localStorage.setItem("sandals", JSON.stringify(sandals));
    showSandals();
};

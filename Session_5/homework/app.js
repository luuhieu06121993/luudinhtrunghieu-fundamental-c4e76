// câu 2:
// const task = {
//     subject: 'Implement login feature',
//     createdBy: 'Hoang Ngoc Duc',
//     assignTo: 'Nguyen Phuong Nam',
//     dueDate: '2019-10-08T18:00:24+0000',
//     expectedHours: 0.5,
// };
// let { subject : baitap, assignTo : name, dueDate : ngay } = task;
// console.log(baitap +":"+ name +"+"+ ngay);


// cau 4:
// let t = true;
// while (t) {
//     let dictionary = {
//         debug: 'The process of figuring out why your program has a certain error and how to fix it',
//         done: 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
//         defect: 'The formal word for "error"',
//         pm: 'The short version of Project Manager, the person in charge of the final result of a project',
//         ui: 'UI means User Interface',
//         ux: 'UX mean User Experience, are the process to define how your products looks and feels',
//     };
//     let input = prompt("Enter a keyword");
//     let loop = 1;
//     for (let key in dictionary) {
//         if (key === input) {
//             alert(key+"\n"+dictionary[key]);
//             loop = 0;
//             break;
//         }
//     } if (loop === 1) {
//         let userinput = prompt("Hi there, this is dev dictionary");
//         dictionary[input] = userinput;
//     }
// }
// hoac
// let input = prompt("nhap tu dien");
// if (dictionary.hasOwnproperty(input)){
//     alert(dictionary[input]);
// }else{
//     alert("not found");
// }
// hoac
// if (dictionary[input]) {
//     alert(dictionary[input]);
// } else {
//     alert("not found");
// }


// cau 5:
// let products = [
//     {
//         name: 'Xiaomi portable charger 20000mah',
//         brand: 'Xiaomi',
//         price: 428,
//         color: 'White',
//         category: 'Charger',
//     },
//     {
//         name: 'VSmart Active 1',
//         brand: 'VSmart',
//         price: 5487,
//         color: 'Black',
//         category: 'Phone',
//     }, {
//         name: 'IPhone X',
//         brand: 'Apple',
//         price: 21490,
//         color: 'Gray',
//         category: 'Phone',
//     }, {
//         name: 'Samsung Galaxy A9 ',
//         brand: 'Samsung',
//         price: 8490,
//         color: 'Blue',
//         category: 'Phone',
//     },
// ];
// function show(arr) {
//     for (i = 0; i < arr.length; i++) {
//         console.log("-------------\n" + "#" + i);
//         for (let key in arr[i]) {
//             console.log(key + ":" + arr[i][key] + "\n");
//         }
//     }
// }

// .1:
// show(products);
// .2:
// let input = Number(prompt("Enter product position"));
// for (let key in products[input - 1]) {
//     console.log(key + ': ' + products[input][key]);
// }
// .3:
// input = prompt('Enter your category');
// for (let key of products) {
//     if (key.category === input) {
//         console.log("Name: " + key.name);
//         console.log("Price: " + key.price);
//     }
// }
// 4.:
// for (let i = 0; i < products.length; i++) {
//     input = prompt(' Enter providers for' + products[i].name);
//     products[i].providers = input;
//     console.log("#" + (i + 1) + "." + products[i].name + "\n   price:" + products[i].price + '\n   Providers:' + products[i].providers);
// }
// 5.:
// input = prompt(' Enter providers');
// for (let key of products) {
//     if (key.providers.indexOf(input) != -1) {
//         console.log("----------------------");
//         for (let i in key) {
//             console.log(i + ":" + key[i]);
//         }
//     }
// }

//Cau 6:
// let tasks = [
//     {
//         task: "HTML",
//         complete: false,
//     },
//     {
//         task: "CSS",
//         complete: false,
//     },
//     {
//         task: "Basis of JavaScript",
//         complete: false,
//     },
//     {
//         task: "Node Package Manager (npm)",
//         complete: false,
//     },
//     {
//         task: "Git",
//         complete: false,
//     },
// ];
// function show(arr) {
//     console.log('Hi there, this is your learning tasks to front-end developer career');
//     for (i = 0; i < arr.length; i++) {
//         console.log((i + 1) + '. ' + arr[i].task);
//         console.log("   Complete:" + arr[i].complete);
//     };
// };
// function newshow(arr) {
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i].complete == true) {
//             console.log((i + 1) + '. [x]' + arr[i].task);
//         } else {
//             console.log((i + 1) + '. [ ]' + arr[i].task);
//         }

//     }
// }
// let loop = true;
// while (loop) {
//     let usesinput = prompt("Enter your command (New, Delete, Update, Complete)").toLowerCase();
//     if (usesinput === "new") {
//         let input = prompt("Enter new task");
//         let newtask = {
//             task: input,
//             complete: false,
//         }
//         tasks.push(newtask);
//         show(tasks);
//     } else if (usesinput == "delete") {
//         input = prompt("Enter postion");
//         tasks.splice(input - 1, 1);
//         show(tasks);
//     } else if (usesinput == 'update') {
//         input = prompt("Enter postion");
//         index = prompt("Enter new title");
//         tasks[input - 1].task = index;
//         show(tasks);
//     } else if (usesinput == 'complete') {
//         input = prompt("Enter postion");
//         tasks[input - 1].complete = true;
//         show(tasks);
//     };
//     newshow(tasks);
// };


//Cau 15:
// const jobdata={};
// 1.
// console.log("job hits");
// console.log(jobdata.hits);
// 2.
// console.log(jobdata.hits[0]);
// 3.
// console.log("First job title");
// console.log(jobdata.hits[0].jobTitle);
// 4.
// console.log(jobdata.hits[0].benefits);
// 5. 
// console.log("First job hit benefit:");
// for(i=0;i<jobdata.hits[0].benefits.length;i++){
//     console.log(jobdata.hits[0].benefits[i].benefitValue);  
// };
// 6.
// for(i=0;i<hits.length;i++){
//     console.log('-----------------');
//     console.log(jobdata.hits[i].jobTitle);
//     console.log('benefits:');
//     for(j=0;i<jobdata.hits[i].benefits.length;i++){
//         console.log(jobdata.hits[i].benefits[j].benefitValue);  
//     } 
// };
// 7.
// for(i=0;i<hits.length;i++){
//     console.log('-----------------');
//     console.log("jobTitle: "+jobdata.hits[i].jobTitle);
//     console.log('locations:');
//     for(j=0;j<jobdata.hits[i].locations.length;j++){
//         console.log("-"+jobdata.hits[i].locations[j]);  
//     }
//     console.log('skills:');
//     for(j=0;j<jobdata.hits[i].locations.length;j++){
//         console.log("-"+jobdata.hits[i].skills[j]);  
//     }  
//     console.log("jobSalary: "+jobdata.hits[i].jobSalary);
// };
















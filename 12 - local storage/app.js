//set local storage item
// localStorage.setItem('name' , 'scott');
// localStorage.setItem('age' , 34);

//set session storage item
//sessionStorage.setItem('name' , 'jhon');

//remove form storage
//localStorage.removeItem('name');

//get item form storage
// let name = localStorage.getItem('name');
// let age = localStorage.getItem('age');

// console.log(name , age);

//  //clear local storage
//  localStorage.clear();

let form = document.querySelector('form');
form.addEventListener('submit' , (e) =>{
    e.preventDefault();
    let task = document.querySelector('#task');
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task.value);
    localStorage.setItem('tasks' ,JSON.stringify(tasks));

    

    
});


let tasks = JSON.parse(localStorage.getItem('tasks'));
//console.log(tasks);

tasks.forEach(task => {
    console.log(task);
});


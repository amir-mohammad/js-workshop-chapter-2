//Document.getElementById();

    let val;

    val = document.getElementById('task-title');


// //GetThings form get Element

    val  = document.getElementById('task-title').id;
    val = document.getElementById('task-title').className;


// //Change the Style
// document.getElementById('task-title').style.color = "red";

// document.getElementById('task-title').style.background = "blue";
// document.getElementById('task-title').style.padding = '5px';

// let task = document.getElementById('task-title');
// val =  task.style.color

// //Change The Content
    // document.getElementById('task-title').textContent = 'My Task';
    // document.getElementById('task-title').innerText = "Task List";
    // document.getElementById('task-title').innerHTML = "<span style='color:red;'>Task List</span>";




//document.querySelector();
val = document.querySelector('#task-title');
val = document.querySelector('.card-title');
val = document.querySelector('h5');

document.querySelector('li').style.color = 'red';
document.querySelector('li:last-child').style.color = "blue";

document.querySelector('li:nth-child(3)').style.color = "yellow";
document.querySelector('li:nth-child(4)').textContent = 'Hello World!';

console.log(val);





//Output

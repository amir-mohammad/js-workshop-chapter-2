let form = document.querySelector('form');

let taskInput = document.querySelector('#task');

let heading = document.querySelector('#task-title');



//Event Handler

function runEvent(e){
    console.log(`Event Type : ${e.type}`);
    // e.preventDefault();

    // console.log(taskInput.value);
    //console.log(e.target.value);
    heading.textContent = e.target.value;
}

//Submit
// form.addEventListener('submit' , runEvent);

//KeyDown
// taskInput.addEventListener('keydown' , runEvent);

//KeyPress
// taskInput.addEventListener('keypress' , runEvent);
//KeyUp
// taskInput.addEventListener('keyup' , runEvent);

//focus
// taskInput.addEventListener('focus' , runEvent);

//Blur
// taskInput.addEventListener('blur' , runEvent);

//Cut
// taskInput.addEventListener('cut' , runEvent);

//Copy
// taskInput.addEventListener('copy' , runEvent);

//paste
// taskInput.addEventListener('paste' , runEvent);


//Change
// let select = document.querySelector('select');
// select.addEventListener('change' ,runEvent);

//Input
taskInput.addEventListener('input' , runEvent);
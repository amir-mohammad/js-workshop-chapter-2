
let clearTask = document.querySelector('.clear-tasks');

let card = document.querySelector('.card');

let heading = document.querySelector('#task-title');

//Event Handler
function runEvent(e){
    e.preventDefault();
    console.log(`Event Type : ${e.type}`);

    heading.textContent = `X : ${e.offsetX} , y : ${e.offsetY}`;

    document.body.style.backgroundColor = 
    `rgb(${e.offsetX} , ${e.offsetY} , 40)`;
}
//Click
    // clearTask.addEventListener('click' , runEvent);

//DoubleClick
    // heading.addEventListener('dblclick', runEvent);

 //MouseDown
    // clearTask.addEventListener('mousedown' , runEvent);

//MouseUp
    // heading.addEventListener('mouseup', runEvent);

//Mouseenter
// card.addEventListener('mouseenter', runEvent);

//Mouseleave
// card.addEventListener('mouseleave', runEvent);

//Mouseover
// card.addEventListener('mouseover', runEvent);

//Mouseout
// card.addEventListener('mouseout', runEvent);

//MouseMove
card.addEventListener('mousemove', runEvent);




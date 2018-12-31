//Add Event Listener with callback function
// document.querySelector('.clear-tasks').addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log('Hello world');
// });

//Add Event Listener with Outer Function

document.querySelector('.clear-tasks').addEventListener('click' , sayHello);

function sayHello(e){
     e.preventDefault();
    // console.log('Hello world');

    let val = e;
    val = e.target;
    val = e.target.className;
    val = e.target.classList;
    val = e.target.textContent;

    val = e.type;

    val = e.clientY;
    val = e.clientX;

    val = e.offsetX;
    val = e.offsetY;

    val = e.timeStamp;


    console.log(val);

}

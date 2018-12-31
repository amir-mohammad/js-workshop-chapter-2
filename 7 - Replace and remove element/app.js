//REPLACE ElEMENT

//New Heading
   let newHeading = document.createElement('h2');
   newHeading.id = "task-title";
   newHeading.appendChild(document.createTextNode('Task List'));

  

//old Heading 
let oldHeading = document.querySelector('#task-title');
let cardAction = document.querySelector('.card-action');
//REPLACE 

cardAction.replaceChild(newHeading,oldHeading);


//REMOVE ELEMENT

let lis = document.querySelectorAll('li.collection-item');

lis[0].remove();

let list = document.querySelector('ul.collection');

list.removeChild(lis[2]);




//Remove Class and ADD Class


let firstChild = document.querySelector('li:first-child');

let val = firstChild;
link = firstChild.children[0];
val = link.className;
val = link.classList[1];
link.classList.add('test');
link.classList.remove('test');
val = link;




//  Attribute

val = link.getAttribute('href');
link.setAttribute('href', 'http://google.com');
val = link;


link.setAttribute('title','Google');
val  = link.hasAttribute('title');
val = link;

//Output
console.log(val);
// console.log(oldHeading);
// console.log(cardAction);

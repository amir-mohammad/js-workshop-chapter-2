// Create Elements

let li = document.createElement('li');

//Add Class
li.className = "collection-item";


//Add ID
li.id  = 'Dynamic-li';

//Add Atribute
li.setAttribute('title','This is List Item');

//Create Text Node

let text = document.createTextNode('Hello World!');

li.appendChild(text);




//Create inner Element;

let a = document.createElement('a');
a.className = "delete-item secondary-content";

a.innerHTML = ' <i class="fa fa-remove"></i>';

li.appendChild(a);


//Append Element;

document.querySelector('ul.collection').appendChild(li);


//OutPut
console.log(li);
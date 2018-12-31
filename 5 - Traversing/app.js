
let val;

let list = document.querySelector('ul.collection');

let listItem = document.querySelector('li.collection-item:first-child');

val = list;
val = listItem;

//Get Child Nodes

// val = list.childNodes;
// val = list.childNodes[0].nodeType;


//Get Children Elements nods
val = list.children[1];

//First child
val = list.firstChild;
val = list.firstElementChild;

//last-child

val = list.lastChild;
val = list.lastElementChild;

//Children of Children
val = list.children[0].children[0].id = "task-link";
val = list.children[0].children[0]


//Count Child Elements
val = list.childElementCount;


//Parent Node
val = listItem.parentNode;
val  = listItem.parentElement.parentElement;

//Get Next Sibings

val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;



//Get Prev Siblings
//val  = listItem.previousElementSibling;
//Output
console.log(val);
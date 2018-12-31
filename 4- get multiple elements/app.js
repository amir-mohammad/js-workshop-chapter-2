//document.getElementsByClassName

    // let items = document.getElementsByClassName('collection-item');

    // console.log(items);
    // console.log(items[0]);
    // items[1].style.color = 'red';
    // items[2].textContent = 'Hello';

    // let items = document.querySelector('ul').getElementsByClassName('collection-item');

    // console.log(items);





//document.getElementByTagName

    // let items = document.getElementsByTagName('li');

    // console.log(items);
    // items[0].style.color = 'red';




//convert HTML collection into Array

// let itemArray = Array.from(items);

// itemArray.reverse();

// itemArray.forEach((li,index) => {
//     li.textContent = `${index} : Task`;
// });


//document.querySelectorAll

//  let items = document.querySelectorAll('li');

// console.log(items);

// items.forEach( (li,index) => {
//     li.textContent = `${index} :Task`;
// })


let liOdd = document.querySelectorAll('li:nth-child(odd)');

liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach( li => {
        li.style.background = '#ccc';
});

for(let i = 0 ; i < liEven.length;i++){
    liEven[i].style.background = '#f4f4f4';
}


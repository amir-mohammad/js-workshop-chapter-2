//Event Bubbling
// let cardTitle = document.querySelector('.card-title').addEventListener('click' , (e) => {
//     console.log('card-titel');
//     e.stopPropagation();
// });
// let cardContent = document.querySelector('.card-content').addEventListener('click' , (e) => {
//     console.log('card-content');
//     e.stopPropagation();
// });
// let card = document.querySelector('.card').addEventListener('click' , (e) => {
//     console.log('card');
//     e.stopPropagation();
// });

//Event Delegation or Captures

// let delItem = document.querySelector('.delete-item');
// delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click' , deleteItem);


//Event Handler

function deleteItem(e){
    e.preventDefault();
    
    if( e.target.parentElement.classList.contains('delete-item')){
        console.log('Delete Item');
        e.target.parentElement.parentElement.remove();
    }
}





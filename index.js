const myMessage = document.querySelector('.myMessage');
const theMessageButton = document.querySelector('.theMessageButton');
const ClearMessageButton = document.querySelector('.ClearMessageButton');
const inputBox = document.querySelector('.theInputValue');
const fruitList = document.querySelector(".fruits");
const fruitInput = document.querySelector(".inputFruit");
const addFruitButton = document.querySelector(".addFruitButton");
    theMessageButton.addEventListener('click', function() {
        myMessage.innerText = inputBox.value;
});


ClearMessageButton.addEventListener('click', function() {
    myMessage.innerText = '';
});

myMessage.addEventListener('click', function() {
    myMessage.classList.toggle('darkmode')
});

const fruits = ['Apples', 'Pears', 'Oranges', 'Grapes', 'Bananas'];

for (let index = 0; index < fruits.length; index++) {
    const fruit = fruits[index];

    const li = document.createElement('li');
    li.innerText = fruit;
    fruitList.appendChild(li);
    
}
addFruitButton.addEventListener ('click', function(){
    const li = document.createElement('li');
    li.innerText = fruitInput.value;
    fruitList.append(li);
});

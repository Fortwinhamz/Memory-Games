const cardArray = [
  {
    name: 'fries',
    img: 'Images/fries.jfif',
  },

  {
    name: 'cheeseburger',
    img: 'Images/cheeseburger.jfif',
  },

  {
    name: 'hotdog',
    img: 'Images/hotdog.jfif',
  },

  {
    name: 'ice-cream',
    img: 'Images/ice-cream.jfif',
  },

  {
    name: 'milkshake',
    img: 'Images/milkshake.jfif'
  },

  {
    name: 'pizza',
    img: 'Images/pizza.jfif'
  },

  
  {
    name: 'fries',
    img: 'Images/fries.jfif',
  },

  {
    name: 'cheeseburger',
    img: 'Images/cheeseburger.jfif',
  },

  {
    name: 'hotdog',
    img: 'Images/hotdog.jfif',
  },

  {
    name: 'ice-cream',
    img: 'Images/ice-cream.jfif',
  },

  {
    name: 'milkshake',
    img: 'Images/milkshake.jfif'
  },

  {
    name: 'pizza',
    img: 'Images/pizza.jfif'
  },

]
cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')

function createBoard() {
  for (let i = 0; i < cardArray.length; i++){
   const card = document.createElement('img')
   card.setAttribute('src', 'images/blank.jpg')
   card.setAttribute('data-id', i)
   card.addEventListener('click', flipCard)
   gridDisplay.appendChild(card)
  }
}

createBoard()


function flipCard(){

}
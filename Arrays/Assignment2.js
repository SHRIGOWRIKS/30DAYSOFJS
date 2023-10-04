
//Javascript assignemnt

// First remove all the punctuations and change the string to array and count the number of words in the array

// let text =
//   'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// console.log(words)
// console.log(words.length)
// ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

// 13

let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python';

console.log(text.split(' ').length);

// In the following shopping cart add, remove, edit items

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
// add Sugar at the end of you shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify Tea to 'Green Tea'
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
console.log(shoppingCart[0].includes('Meat')?'':shoppingCart.unshift('Meat'))
console.log(shoppingCart)
console.log(shoppingCart.includes('Sugar')?'':shoppingCart.push('Sugar'))
console.log(shoppingCart)
console.log(shoppingCart.includes('Honey')?shoppingCart.splice(4,1):'')
console.log(shoppingCart)

let elementToRemove='Honey';
function removeElement(){
  const index=shoppingCart.indexOf(elementToRemove)
  if(index!=-1)
  {
    shoppingCart.splice(index,1)
  }
}

removeElement()

console.log(shoppingCart)

let elememtToModify='Tea'
function elementToModify(){
  const index=shoppingCart.indexOf(elememtToModify)
  if(index!=-1){
    return shoppingCart.splice(index,1,'Green Tea')
  }
}

elementToModify()

console.log(shoppingCart)

//---------------------------------**********---------------------------------

//3.In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

let countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]

let countryExists='Etthiopia'
function checkExisting(){
let index=(countries.indexOf(countryExists))
if(index!==-1){
  console.log('Exists')
}
else{
  countries.push(...countries,'Etthiopia')
}

}

checkExisting()

console.log(countries)

//In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.



const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
]

function isExists(){
  if(webTechs.includes('Sass')){
    console.log('Sass is a CSS PreProcessor')
  }
  else{
    webTechs.push('Sass')
  }
}

isExists()

console.log(webTechs)
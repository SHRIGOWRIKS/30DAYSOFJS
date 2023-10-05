//Declare a function name userIdGeneratedByUser. 
//It doesn’t take any parameter but it takes two inputs using prompt(). 
//One of the input is the number of characters and 
//the second input is the number of ids which are supposed to be generated.


// function userIdGeneratedByUser(){
    
//     let generatedIds=[];
//     let idSymbol='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefhgijklmnopqrstuvwxyz'
//     //console.log(idSymbol.length)
//     let randomGen;
//     let inputCharacter=Number(prompt('Enter number of characters'))
//     let inputIdGenerate=Number(prompt('Enter number of id needs to be generated'))
//     for(let j=0;j<inputIdGenerate;j++){
//         let userId='';
//         for (let i = 1; i <= inputCharacter; i++) {
//             randomGen=Math.floor(Math.random()*62)
//             userId+= idSymbol[randomGen];
//           // console.log(`random user id is ${userId}`)
//        }
//        generatedIds.push(userId)
   
//     }
//     return generatedIds
    
   
//  }

// console.log(userIdGeneratedByUser());
// 41XTDbE

//Write a function generateColors which can generate any number of hexa or rgb colors.

function generateColors(numColors,format){
    let hex='0123456789abcdef';
   
    let generateHex=[];

    if(format==='hex'){
        for (let j = 0; j < numColors; j++) {  
            let color='#';
            for (let index = 0; index < 6; index++) {
                color+=hex[Math.floor(Math.random()*16)]
            }
            generateHex.push(color) ;  
        } 
          
    }
    else{
        console.log('Enter correct format')
    }
    return generateHex
}
console.log(generateColors(2,'hex'))

//Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Generate a random index between 0 and i

        // Swap elements at i and j
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Example usage
const originalArray = [1, 2, 3, 4, 5];
const shuffledArray = shuffleArray(originalArray.slice()); // Create a copy of the array to avoid modifying the original array
console.log(shuffledArray);

//Call your function isEmpty, it takes a parameter and it checks if it is empty or not
function isEmpty(str){
if(str==='' || str===undefined || str===null){
    console.log('empty')
}
else{
    console.log(`${str} is not empty`)
}


}

console.log(isEmpty())

//Write a function called average, it takes an array parameter and returns the average of the items. 
//Check if all the array items are number types.
// If not give return reasonable feedback.

function average(arr){
    const allNumbers=arr.every(item=>typeof item==='number')
    if(!allNumbers){
        return 'Not all items in the array are numbers'
    }
let sum=0;
let numbers=arr.length;
let avg=0;

arr.forEach(array => {
    sum+=array;
    avg=sum/numbers;
})
return avg


}

const res=average([1,2,3,4,5,6,'hello'])
const res1=average([1,2,3,4,5,6])
console.log(res,res1)
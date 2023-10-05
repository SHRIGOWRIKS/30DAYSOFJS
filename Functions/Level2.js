
// // Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
// function printArray(array){
// return `${array} of array`
// }

// console.log(printArray([1,2,3,4,5]))

// // Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

// function showDateTime(){
//     let date=new Date().toLocaleDateString();
//     let time=new Date().toLocaleTimeString().slice(0,4)
//     let dateTime=`${date} ${time}`
//     return dateTime;
// }

// const dateTime=showDateTime()
// console.log(dateTime)

// // showDateTime()
// // 08/01/2020 04:08


// // Declare a function name swapValues. This function swaps value of x to y.

// // swapValues(3, 4) // x => 4, y=>3
// // swapValues(4, 5) // x = 5, y = 4


// function swapValues(a,b){
//      let temp;
//      temp=a;
//      a=b;
//      b=temp;
// console.log(a,b)
// }

// swapValues(3,5)


// // Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

// function reverseArray(arr){
// arr.reverse()
// console.log(arr)

// }

// reverseArray([1,2,3,4,5])
// reverseArray(['A','B','C'])

// // console.log(reverseArray([1, 2, 3, 4, 5]))
// // //[5, 4, 3, 2, 1]
// // console.log(reverseArray(['A', 'B', 'C']))
// // //['C', 'B', 'A']

// // Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
// function capitalizeArray(data){
// return data.toUpperCase()
// }


// console.log(capitalizeArray('hello'))
// // Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

// // function addItem(item){
// //     let newItem='';
// //     return newItem.concat(item)
// // }

// // const finalItem=addItem('gowri')
// // console.log(finalItem)

// function addItem(item,array){
// array.push(item)
// return array
// }

// let array=[1,2,3]
// let newItem=4;

// const finalData=addItem(newItem,array)

// console.log(finalData)
// // Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
// function removeItem(index,array1){
// if(index>=0 && index<array1.length){
//     return array1.splice(index,1)
// }
// }
// let array1=[1,2,3,4,5]
// let indexToRemove=3;
// console.log(removeItem(indexToRemove,array1))

// // Declare a function name evensAndOdds .
// // It takes a positive integer as parameter and it counts number of evens and odds in the number.

// function evensAndOdds(number){
// if(number<0 || !Number.isInteger(number))
// {
//     return 'Enter a valid number'
// }
// let evenCounts=0;
// let oddCounts=0;
// let numString=number.toString()
// console.log(numString)
// for (let index = 0; index < numString.length; index++) {
//     let digits=parseInt(numString[index]);
//     if(digits%2===0){
//         evenCounts++;
//     }
//     else{
//         oddCounts++;
//     }
    
// }
// return {
//     even:evenCounts,
//     odd:oddCounts
// }
// }

// let number=123456789;
// console.log(evensAndOdds(number))

// // evensAndOdds(100);
// // The number of odds are 50.
// // The number of evens are 51.


// // Write a function which takes any number of arguments and return the sum of the arguments

// function sumOfNum(){
// let total=0;
// for (let index = 0; index < arguments.length; index++) {
//      total+=arguments[index];
    
    
// }
// return total;

// }
// console.log(sumOfNum(1,2))
// console.log(sumOfNum(1,2,3))
// console.log(sumOfNum(1,2,3,4))
// // sum(1, 2, 3) // -> 6
// // sum(1, 2, 3, 4) // -> 10

// Declare a function name userIdGenerator.
// When this function is called it generates seven character id. 
//The function return the id.

// function userIdGenerator() {
    
// }

 function userIdGenerator(){
    let userId=0;
    let idSymbol='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefhgijklmnopqrstuvwxyz'
    //console.log(idSymbol.length)
    let randomGen;
    for (let i = 1; i < 7; i++) {
        randomGen=Math.floor(Math.random()*63)
        userId+= idSymbol[randomGen];
      // console.log(`random user id is ${userId}`)
   }
   return userId
   
 }

console.log(userIdGenerator());
// 41XTDbE

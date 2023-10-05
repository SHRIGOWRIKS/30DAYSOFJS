const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: '' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

// //   Print the price of each product using forEach
// products.forEach(product => {
//     const priceText = product.price !== null && product.price !== undefined && product.price !== '' ? product.price : 'Not Available';
//     console.log(`The price of ${product.product} is ${priceText}`)
// });

// // Print the product items as follows using forEach
// products.forEach(product => {
//     if(product.price){
//         console.log(`The price of ${product.product} is ${product.price} euros`)
//     }
    
// });


// Calculate the sum of all the prices using forEach
// let sumPrice=0;
// products.forEach(product => {
// let price=parseFloat(product.price)
//     if(!isNaN(price)){
//         sumPrice+=price;   
//     }
//     console.log(sumPrice) 
// });


// // Create an array of prices using map and store it in a variable prices
// const array=[20,30,40,50,60];
// let sumOfPrices=0;
// array.map((arr)=>{
//     sumOfPrices+=arr;
// })
// console.log(sumOfPrices)

// // Filter products with prices
// const filteredArr=products.filter((price)=> price)
// console.log(filteredArr)

// Use method chaining to get the sum of the prices(map, filter, reduce)
// const finalArr=products.filter((product)=>typeof product.price==='number' && !isNaN(product.price))
//                        .map((product)=>product.price)
//                        .reduce((acc,price)=>acc+price,0)
 
// console.log(finalArr)

// Calculate the sum of all the prices using reduce only
// const sumPrice=products.reduce((sum,product)=>{
//     const price=Number(product.price) || 0;
//     return sum+price
// },0)
// console.log(sumPrice)


// Find the first product which doesn't have a price value
// const productWithoutPrice=products.find(product=>product.price==='')
// if(productWithoutPrice){
//     console.log(`First product without a price  is ${productWithoutPrice.product}`)
// }
// else{
//     console.log('All products have a price')
// }

// // Find the index of the first product which does not have price value
// const productWithoutPriceIndex=products.findIndex(product=>product.price==='')
// console.log(productWithoutPriceIndex)

// Check if some products do not have a price value
// const someProductsPrice=products.some(product=>product.price!=='')
// console.log(someProductsPrice)
// if(someProductsPrice){
//     console.log(`True:${someProductsPrice.product}`)
// }
// else{
//     console.log(`All products have a price`)
// }

// Check if all the products have price value
const priceDoesEveryProduct=products.every(product=>!(product.price==''))
console.log(priceDoesEveryProduct)

// Explain the difference between forEach, map, filter and reduce

// Explain the difference between filter, find and findIndex

// Explain the difference between some and every
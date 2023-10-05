// Declare a function fullName and it takes firstName, lastName as a parameter and it returns your full - name.

function fullName(firstName,lastName){
    return `${firstName} ${lastName}`

}

console.log(fullName('gowri','prasad'))

// Declare a function addNumbers and it takes two two parameters and it returns sum.

const addNumbers=(a,b)=>{
return a+b;
}

const add=addNumbers(2,3)
console.log(add)

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates _areaOfCircle

const circleArea = function(r){
    const PI_value=(Math.PI).toFixed(2)
    const area=PI_value*r*r;
    return area;
}

console.log(circleArea(2))

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.

function convertTemp(tempCelsius){
let tempFahrenit=(tempCelsius*9/5)+32;
return tempFahrenit
}

console.log('Converted from celsius to fahrenit',convertTemp(28))



// Body mass index(BMI) is calculated as follows: 
//bmi = weight in Kg / (height x height) in m2. 
//Write a function which calculates bmi. 
//BMI is used to broadly define different weight groups in adults 20 years old or older.
//Check if a person is underweight, normal, overweight or obese based the information given below.

function BMICalculator(weight,height){
let BMI=(weight/(height*height));
if(BMI<=18.5){
    return `${BMI} is underweight`
}
else if(BMI>=18.5 && BMI<=24.9){
    return `${BMI} is Normal Weight`
}
else if(BMI>=25 && BMI<=29.9){
    return `${BMI} is Over Weight`
}
else if(BMI>=30 ){
    return `${BMI} is Obese`
}
}

console.log(BMICalculator(70,333))
console.log(BMICalculator(30,100))
console.log(BMICalculator(80,250))
console.log(BMICalculator(100,10))
console.log(BMICalculator(90,8))

// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more

// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(months){
    //const months=['jan','feb','march','april']//just an example
    if(months.includes('jan')){
        console.log('autumn')
    }
    else if(months.includes('feb')){
        console.log('winter')
    }
    else if(months.includes('march')){
        console.log('spring')
    }
    else if(months.includes('april')){
        console.log('summer')
    }
    else{
        console.log('nothing')
    }

}

console.log(checkSeason('novemeber'))
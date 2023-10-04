// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

let score=prompt('Enter your score');

if(score>=80 && score<=100){
    console.log('You are grade is A');
}
else if(score>=70 && score<=89){
    console.log('You are grade is B');
}
else if(score>=60 && score<=69){
    console.log('You are grade is C');
}
else if(score>=50 && score<=59){
    console.log('You are grade is D');
}
else if(score>=0 && score<=49)
{
    console.log('You are grade is F');
}

//Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

const userInput=prompt('Enter the month')
userInput=toString(userInput)
let season;

switch (true) {
    case (userInput==='September' || userInput=== 'October' || userInput==='November'):
        season='Autumn';
        break;
    case (userInput==='December' || userInput==='January' || userInput==='February'):
        season='Winter';
        break;
    case (userInput==='March' || userInput==='April' || userInput==='May'):
        season='Spring';
        break;
    case (userInput==='June' || userInput==='July' || userInput==='August') :
        season='Summer';
        break;

    default:
        break;
}

console.log(season)

//Check if a day is weekend day or a working day. Your script will take day as an input.
// What is the day  today? Saturday
// Saturday is a weekend.

// What is the day today? saturDaY
// Saturday is a weekend.

// What is the day today? Friday
// Friday is a working day.

// What is the day today? FrIDAy
// Friday is a working day.

let inputDay=prompt('Enter the day')
let dayName;
switch (inputDay.toLowerCase()) {
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
         
         dayName='Its a weekday';
        
        break;
    case 'saturday':
    case 'sunday':
        dayName='Its a weekend'

    default:
        break;
}
console.log(dayName)
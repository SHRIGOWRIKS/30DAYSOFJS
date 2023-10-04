// Write a program which tells the number of days in a month.
//   Enter a month: January
//   January has 31 days.

//   Enter a month: JANUARY
//   January has 31 day

//   Enter a month: February
//   February has 28 days.

//   Enter a month: FEbruary
//   February has 28 days.

// let inputMonth=prompt('Enter either january or february');
// let monthDays;
// switch (inputMonth.toLocaleLowerCase()) {
//     case 'january':
//         monthDays='Jan has 31 days'
//         break;
//     case 'february':
//         monthDays='feb has 28 days'
//         break;

//     default:
//         break;
// }
// console.log(monthDays);

// Write a program which tells the number of days in a month, now consider leap year.
function isLeapYear(year) {
    return (year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0));
}

function getNumberOfDays(month, year) {
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const daysInMonth = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const index = monthNames.indexOf(month);

    if (index !== -1) {
        return daysInMonth[index];
    } else {
        return 'Invalid month';
    }
}

// Example usage
const userInputMonth = prompt('Enter a month:');
const userInputYear = parseInt(prompt('Enter a year:'));

const numberOfDays = getNumberOfDays(userInputMonth, userInputYear);

if (numberOfDays !== 'Invalid month') {
    console.log(`Number of days in ${userInputMonth} ${userInputYear} is ${numberOfDays}.`);
} else {
    console.log('Invalid input. Please enter a valid month.');
}

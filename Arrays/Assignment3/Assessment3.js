// Exercise: Level 3
// The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]  - 
//Sort the array and find the min and max age -
// Find the median age(one middle item or two middle items divided by two) -
// Find the average age(all items divided by number of items) - 
//Find the range of the ages(max minus min) - 
//Compare the value of (min - average) and (max - average), use abs() method




const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ]

  // 1.Slice the first ten countries from the countries array
  
  console.log(countries.slice(0,10))

// Find the middle country(ies) in the countries array

const indianStates=['karnataka','hyderabad','kerala','kashmir']
console.log(indianStates.length)
const middleIndex=Math.floor(indianStates.length/2);
  let middleCountries=[];
  if(indianStates.length%2===0){
    middleCountries=indianStates.slice(middleIndex-1,middleIndex+1)
  }
  else{
    middleCountries.push(indianStates[middleIndex])
  }
console.log(middleCountries)

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
 let leftArray=[];
 let rightArray=[];
 let middleIndex1;
 if(countries.length%2==0){
middleIndex1=countries.length/2;
leftArray=countries.slice(0,middleIndex1)
rightArray=countries.slice(middleIndex1)
 }
 else{
    middleIndex1=Math.ceil(countries.length/2);
    leftArray=countries.slice(0,middleIndex1)
    rightArray=countries.slice(middleIndex1)
 }
console.log(`Left Array is :${leftArray}`)
console.log(`Right Array is : ${rightArray}`)

// let length=countries.length;
// if(length%2===0){
//     for (let i = 0; i < (countries.length/2); i++) {
//         leftArray +=countries[i]
        
//         console.log(leftArray)
//     }
//     rightArray=countries.splice(98,96)
//     console.log(rightArray)
// }
// else{
//     for (let i = 0; i < (countries.length/2)+1; i++) {
//         leftArray +=countries[i]
        
//         console.log(leftArray)
//     }
//     rightArray=countries.splice(98,96)
//     console.log(rightArray)
// }



// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]  ;

// let sortAges=[];
// let maxValue=0;
// let minValue;
// let medianValue;
// let sum=0;
// let avg;
// let range;
// let diffMinAvg;
// let diffMaxAvg;
// let Ages;
// let midPoint;
// function studentDetails(){
// Ages=ages.sort((a,b)=>a-b)
// sortAges=Array.from(Ages)
// console.log(typeof sortAges)
// maxValue=sortAges[sortAges.length-1];
// minValue=sortAges[0]
// console.log(`sorted lenght ${sortAges.length}`);
// console.log(`Ages sorted in ${sortAges},max value is ${maxValue},min value is ${minValue}`)
// midPoint=Math.floor(sortAges.length/2);
// if(sortAges.length%2===0){
//     medianValue=(sortAges[midPoint-1]+sortAges[midPoint+1])/2
// }
// else{
//     medianValue=sortAges[midPoint]
// }

// console.log('Median value is',+medianValue)

// //Average of all items

// ages.forEach(age => {
//     sum+=age;
// });
// // for (let i = 0; i < ages.length; i++) {
// //     sum+=ages[i];
// //   }
//   avg=Number(sum/ages.length);
//   console.log(`Average is ${avg}`)
// range=maxValue-minValue
// console.log('Range is '+range)
// diffMinAvg=Math.abs(minValue-avg).toFixed(2)
// diffMaxAvg=Math.abs(maxValue-avg).toFixed(2)
//  console.log(`Diference of min from AVg:${diffMinAvg} and Diference of max from AVg:${diffMaxAvg} `)
// }


// studentDetails()

// //Concatenate the following two variables and store it in a fullStack variable
// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node', 'Express', 'MongoDB']

// const fullStack=[...frontEnd,...backEnd]
// console.log(`full stack ${fullStack}`)
// //["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]


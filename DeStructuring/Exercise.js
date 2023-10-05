//Create a function called getPersonInfo. 
//The getPersonInfo function takes an object parameter.
// The structure of the object and the output of the function is given below. 
//Try to use both a regular way and destructuring and compare the cleanness of the code. 
//If you want to compare your solution with my solution, check this link


const person = {
    firstName: 'Gowri',
    lastName: 'Prasad',
    age: 230,
    country: 'India',
    job: 'Instructor and Developer',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Node',
      'MongoDB',
      'Python',
      'D3.js',
    ],
    languages: ['Kannada', 'English', 'Telugu','Hindi'],
  }

function getPersonalInfo(person) {
    const { firstName, lastName, age, country, job, skills: [skillOne, skillTwo, skillThree, skillFour, skillFive, skillSix, skillSeven, skillEight, skillNine], languages: [lang1, lang2, lang3, lang4] } = person;

    console.log(`${firstName} ${lastName} lives in ${country}.
    She is ${age} years old. She is an ${job}.
    She teaches ${skillOne}, ${skillTwo}, ${skillThree}, ${skillFour}, ${skillFive}, ${skillSix}, ${skillSeven}, ${skillEight}, ${skillNine}.
    She speaks ${lang1}, ${lang2}, ${lang3}, ${lang4}.`);
}

getPersonalInfo(person); 





//Find the person who has many skills in the users object.

// const users = {
//     user1: {
//         name: 'Alice',
//         skills: ['JavaScript', 'React', 'Node.js']
//     },
//     user2: {
//         name: 'Bob',
//         skills: ['Python', 'Django', 'Flask', 'JavaScript']
//     },
//     user3: {
//         name: 'Charlie',
//         skills: ['Java', 'Spring']
//     }
// };

// let maxSkills=0;
// let skillfulPerson='';
// let numOfSkills;
// for (const user in users) {
//     if (users.hasOwnProperty.call(users, user)) {
//         numOfSkills=users[user].skills.length;
//         if(numOfSkills>maxSkills){
//             maxSkills=numOfSkills;
//             skillfulPerson=users[user].name
//         }
        
//     }

   
// }

// if(skillfulPerson){
//     console.log(`${skillfulPerson} has ${maxSkills} skills`)
// }
// else{
//     console.log('User not found')
// }


//Count logged in users,count users having greater than equal to 50 points from the following object.

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
};

// let countLoggedIn=0;
// let isLoggedInPerson='';
// for (const user in users) {
//     if (users.hasOwnProperty.call(users,user)) {
//        if(users[user].isLoggedIn==true){
//         isLoggedInPerson=users[user];
//           countLoggedIn++;
         
          
//        }
      
//     }
   
// }
// if(isLoggedInPerson){
//     console.log(countLoggedIn)
// }
// else{
//     console.log('error')
// }

//Find people who are MERN stack developer from the users object


// let mernStackUsers=[];
// for (const user in users) {
//     if (users.hasOwnProperty.call(user)) {
//         const skills=users[user].skills;
//         if(skills.includes('MongoDB') && skills.includes('Express')  && skills.includes('React')  && skills.includes('Node') ){
//             mernStackUsers.push(users[user].age);
//         }
//     }
// }

// if(mernStackUsers.length>0){
//     console.log(`${mernStackUsers} is a MERN Stack developer`)
// }
// else{
//     console.log('No mern stack devlopers found')
// }

//commented
// let mernStackUsers = [];
// for (const user in users) {
//     if (users.hasOwnProperty.call(user)) {
//         const skills = users[user].skills;
//         if (skills.includes('MongoDB') && skills.includes('Express') && skills.includes('React') && skills.includes('Node')) {
//             mernStackUsers.push(users[user].email);
//         }
//     }
// }

// if (mernStackUsers.length > 0) {
//     console.log('Developers',+mernStackUsers);
// } else {
//     console.log('No MERN stack developers found');
// }
//commented


  
//   // Function to check if a user is a MERN stack developer
//   function isMERNStackDeveloper(user) {
//     const requiredSkills = ['MongoDB', 'Express', 'React', 'Node'];
//     return requiredSkills.every(skill => user.skills.includes(skill));
//   }
  
//   // Find MERN stack developers
//   const mernStackDevelopers = Object.keys(users).filter(userName => isMERNStackDeveloper(users[userName]));
  
//   console.log("MERN Stack Developers:");
//   console.log(mernStackDevelopers);

//Set your name in the users object without modifying the original users object

const newObj={...users,name:'gowri'}
console.log(newObj.name)

//Get all keys or properties of users object
console.log(Object.keys(users))
const values=Object.values(users)
console.log(values)
  

//Use the countries object to print a country name, capital, populations and languages.

const countries=[
    {
    name:'India',
    capital:'Delhi',
    population:135,
    languages:['kannada','telugu'

    ]
},
    {
    name:'China',
    capital:'Something',
    population:125,
    languages:['chinese'

    ]
},
    {
    name:'France',
    capital:'Paris',
    population:15,
    languages:['French'

    ]
},
]

let populations=0;
for (const country in countries) {
    if (countries.hasOwnProperty.call(countries, country)) {

       populations+=countries[country].population
        
    }
}

console.log('Total population is '+populations+' Crore')
console.log(countries[0])
console.log(countries[1])
console.log(countries[2])


// const users = [
//     {
//       _id: 'ab12ex',
//       username: 'Alex',
//       email: 'alex@alex.com',
//       password: '123123',
//       createdAt: '08/01/2020 9:00 AM',
//       isLoggedIn: false,
//     },
//     {
//       _id: 'fg12cy',
//       username: 'Asab',
//       email: 'asab@asab.com',
//       password: '123456',
//       createdAt: '08/01/2020 9:30 AM',
//       isLoggedIn: true,
//     },
//     {
//       _id: 'zwf8md',
//       username: 'Brook',
//       email: 'brook@brook.com',
//       password: '123111',
//       createdAt: '08/01/2020 9:45 AM',
//       isLoggedIn: true,
//     },
//     {
//       _id: 'eefamr',
//       username: 'Martha',
//       email: 'martha@martha.com',
//       password: '123222',
//       createdAt: '08/01/2020 9:50 AM',
//       isLoggedIn: false,
//     },
//     {
//       _id: 'ghderc',
//       username: 'Thomas',
//       email: 'thomas@thomas.com',
//       password: '123333',
//       createdAt: '08/01/2020 10:00 AM',
//       isLoggedIn: false,
//     },
//   ]
  

// //   Imagine you are getting the above users collection from a MongoDB database. 
// //a. Create a function called signUp which allows user to add to the collection. 
// //If user exists, inform the user that he has already an account.


// function signUp(newUser){

//   const existingUser=users.find(user=>user.email===newUser.email)

//   if(existingUser){
//     return 'User exists';
//   }
//   else{
//     users.push(newUser);
//     return 'user has been added successfully'
//   }

// }



// newUser= {
//   _id: '1234abc',
//   username: 'Gowri',
//   email: 'gowri@thomas.com',
//   password: '123428333',
//   createdAt: '08/01/2023 11:00 AM',
//   isLoggedIn: false,
// }

// const signUpInfo=signUp(newUser)


// console.log(signUpInfo)
// // b. Create a function called signIn which allows user to sign in to the application

// function signIn(signInUser){
// const existingUser=users.find(user=>user.email===signInUser.email && user.password===signInUser.password)

// if(existingUser){
//   return 'User has successfully logged in'
// }
// else{
//   return 'Email is not matching.Please try again'
// }

// }

// signInUser= {
//   _id: '1234abc',
//   username: 'Gowri',
//   email: 'gowri@thomas.com',
//   password: '123428333',
//   createdAt: '08/01/2023 11:00 AM',
//   isLoggedIn: false,
// }

// const signInInfo=signIn(signInUser)
// console.log(signInInfo)
  const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 },
      ],
      likes: [],
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy'],
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy'],
    },
  ]

//The products array has three elements and each of them has six properties. 
// a. Create a function called rateProduct which rates the product 

// b. Create a function called averageRating which calculate the average rating of a product
function averageRating(products){
    let numOfRating=0;
    let totalRatings=0;
  //let avgRating=0;
  products.forEach(product => {
       product.ratings.forEach(rating=>{
        totalRatings+=rating.rate;
        numOfRating++
      })
  })    
      const avgRating=numOfRating>0 ? totalRatings/numOfRating : 0;
       return avgRating.toFixed(2);
  
}
const averageRatingInfo=  averageRating(products);
console.log('Avg',averageRatingInfo);

// Create a function called likeProduct. 
//This function will helps to like to the product if it is not liked 
//and remove like if it was liked


function likeProduct(productId, userId) {
  const productIndex = products.findIndex(product => product._id === productId);

  if (productIndex !== -1) {
    const product = products[productIndex];
    const userLikedIndex = product.likes.indexOf(userId);

    if (userLikedIndex === -1) {
      // User has not liked the product, add like
      product.likes.push(userId);
      console.log(`Product with ID ${productId} has been liked by user ${userId}`);
    } else {
      // User has already liked the product, remove like
      product.likes.splice(userLikedIndex, 1);
      console.log(`Like removed from product with ID ${productId} for user ${userId}`);
    }
  } else {
    console.log(`Product with ID ${productId} not found`);
  }
}

// Example usage:
likeProduct('aegfal', 'fg12cy'); // Like the product
likeProduct('aegfal', 'fg12cy'); // Remove like from the product
likeProduct('nonexistentid', 'fg12cy'); // Product not found message

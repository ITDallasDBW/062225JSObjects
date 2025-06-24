// let user =  {
//     username: 'David',
//     email: 'david@yourmom.com',
//     subscriptionStatus: 'VIP',
//     discordId: 'David Bragg#0001',
//     //can also store lessons completed in an array:
//     lessonsCompleted: [0, 1],
// }

// console.log(user.username)
// console.log(user.subscriptionStatus)
// console.log(user.lessonsCompleted.map(elem=>elem*2))

// let users = [
//     {
//     username: 'David',
//     email: 'david@yourmom.com',
//     subscriptionStatus: 'VIP',
//     discordId: 'David Bragg#0001',
//     lessonsCompleted: [0, 1],
// },
// {
//     username: 'Mitri',
//     email: 'mitri@yourmom.com',
//     subscriptionStatus: 'VIP',
//     discordId: 'Mitri#0001',
//     lessonsCompleted: [0, 1, 2, 3],
// },
// ]

// console.log(users[0].username)
// console.log(users[0].email)
// console.log(users[0].lessonsCompleted.map(elem => elem*2))

// let users = [
//   {
//     username: "David",
//     email: "david@yourmom.com",
//     password: "test123",
//     subscriptionStatus: "VIP",
//     discordId: "David Bragg#0001",
//     lessonsCompleted: [0, 1],
//   },
//   {
//     username: "Mitri",
//     email: "mitri@yourmom.com",
//     password: "mitri123",
//     subscriptionStatus: "VIP",
//     discordId: "Mitri#0001",
//     lessonsCompleted: [0, 1, 2, 3],
//   },
//   {
//     username: "Zen",
//     email: "zen@yourmom.com",
//     password: "zen123",
//     subscriptionStatus: "VIP",
//     discordId: "zen#0001",
//     lessonsCompleted: [1, 3],
//   },
// ];

//To log user in:
// function login(email, password) {
//   for (let i = 0; i < users.length; ++i) {
//     console.log('this ran')
//     if (users[i].email ===email) {
//         console.log(users[i]);
//         if (users[i].password ===password) {
//             console.log('log the user in - the details are correct')
//         }
//         else {
//             console.log('password is incorrect')
//         }
//         //Then, to cancel the function since user has been found...
//         return
//     }
//   }
//   console.log("couldn't find email")
// }
// // login("david@yourmom.com", "test123");
// login("davi@yourmom.com", "wrong");

// function register(
//   name,
//   email,
//   password,
//   subscriptionStatus,
//   discordId,
//   lessonsCompleted
// ) {
//   let user = {
//     username: name,
//     email: email,
//     password: password,
//     subscriptionStatus: subscriptionStatus,
//     discordId: discordId,
//     lessonsCompleted: lessonsCompleted,
//   };
//   users.push(user);
// }

// register({
//   username: "blake",
//   email: "blake@yourmom.com",
//   password: "pass",
//   subscriptionStatus: "freeSub",
//   discordId: "blakey",
//   lessonsCompleted: [0, 1, 4, 3]
// });

// console.log(users);

// function register(user) {
//   users.push(user);
// }

// register({
//   username: "blake",
//   email: "blake@yourmom.com",
//   password: "pass",
//   subscriptionStatus: "freeSub",
//   discordId: "blakey",
//   lessonsCompleted: [0, 1, 4, 3]
// });

// function register(
//   name,
//   email,
//   password,
//   subStatus,
//   discordId,
//   lessonsCompleted
// ) {
//   let user = {
//     username: name,
//     email: email,
//     password: password,
//     subscriptionStatus: subStatus,
//     discordId: discordId,
//     lessonsCompleted: lessonsCompleted
//   }
//   console.log(user);
//   users.push(user);
// }
// register(
//   "Blake",
//   "blake@email.com",
//   "passy",
//   "VVIP",
//   "TheBlake",
//   [3,7,2]
// );
// console.log(users);

// ARRAY of OBJECTS
let users = [
  {
    username: "David",
    password: "test123",
  },
  {
    username: "Mitri",
    password: "mitri123",
  },
  {
    username: "Zen",
    password: "zen123",
  },
];
console.log(users);

// FUNCTION to ADD OBJECTS to array


function register(
  name, 
  password
) {
  let user = {
    username: name,
    password: password,
  };
  users.push(user);
}

// CALL (use) function
register({
  username: "Blake", 
  password: "passy"
});

console.log(users);

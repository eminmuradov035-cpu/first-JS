// let num: number = 5
// let username: string = "User"
// let isLoading: boolean = false
// let usernames: string[] = ["User1", "User2"]
// let numbers: number[] = [1, 2, 3, 4]
// let tupe: [number, string] = [6, "Hi"]

// enum Role {
   // Admin = "Admin",
   // User = "User",
   // Guest = "Guest"
// }

// function getPermissions(Role: Role){
 //   switch (Role) {
   //     case Role.Admin:
  //          return "Has full acces"
//
  //          case Role.User:
  //          return "Has limited acces"
 //           
  //          case Role.Guest:
   //         return "Has dosen't acces"
  //  
  //      default:
  //          return "Role dosen't acces"
 //   }
// }

/// const adminUser = getPermissions(Role.Admin)
// const defaultUser = getPermissions(Role.User)
// const guestUser = getPermissions(Role.Guest)

// function calculateSum(a: number, b: number): number{
   // return a + b
// }
// let sum = calculateSum(5, 4)



















//  Task 1: Create a type named "User" with fields:
// id (string), name (string), age (number), isAdmin (boolean)


//  Task 2: Create a function "greetUser" that takes a User 
// and returns a string like: "Hello, {name}!"


//  Task 3: Create a type "Product" with 
// title (string), price (number), inStock (boolean)


//  Task 4: Make a function "applyDiscount" that 
// takes price (number) and discount percentage (number)
// and returns the discounted price.


//  Task 5: Create an interface "Point" 
// with x and y both as numbers.


type User = {
    id: string;
    name: string;
    age: number;
    isAdmin: boolean;
  };
  
  // Task 1
  const u: User = {
    id: "5",
    name: "Emin",
    age: 22,
    isAdmin: false,
  };
  
  console.log(greetUser(u));
  
  // Task 2

  function greetUser(user: User): string {
    return `Hello, ${user.name}!`;
  }
  

  // Task 3

  type Product = {
    title: string,
    price: number,
    inStock: boolean
  }

  const t: Product = {
    title: "laptop",
    price: 499.99,
    inStock: true
  };

  console.log(t);


  // Task 4

  function applyDiscount(price: number, discount: number): number {
    return price - (price | discount) / 100
  }

  // Task 5

interface Point {
    x: number;
    y: number
}
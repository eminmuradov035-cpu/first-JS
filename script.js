// let num: number = 5
// let username: string = "User"
// let isLoading: boolean = false
// let usernames: string[] = ["User1", "User2"]
// let numbers: number[] = [1, 2, 3, 4]
// let tupe: [number, string] = [6, "Hi"]
// Task 1
const u = {
    id: "5",
    name: "Emin",
    age: 22,
    isAdmin: false,
};
console.log(greetUser(u));
// Task 2
function greetUser(user) {
    return `Hello, ${user.name}!`;
}
const t = {
    title: "laptop",
    price: 499.99,
    inStock: true
};
console.log(t);
// Task 4
function applyDiscount(price, discount) {
    return price - (price | discount) / 100;
}
export {};
//# sourceMappingURL=script.js.map
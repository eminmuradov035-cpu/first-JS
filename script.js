class BankAccount{
  #balance
  constructor(){
    this.#balance = 0
  }

  deposit (ammount) {
    if (ammount > 0) {
      this.#balance += ammount
    } 
  }

  withdraw (ammount) {
    if (ammount > 0 && ammount <= this.#balance) {
      this.#balance -= ammount
    }
  }

  tellBallance() {
    return this.#balance
  }
}

const myAccount = new BankAccount
myAccount.deposit(900)
myAccount.deposit(1300)
console.log(myAccount.tellBallance());
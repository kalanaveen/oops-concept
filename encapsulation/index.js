class BankAccount {
    customerName;
    #balance;
    accountNumber;

    constructor(customerName, balance = 0) {
        this.customerName = customerName;
        this.#balance = balance;
        this.accountNumber = Date.now();
    }

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        this.#balance -= amount;
    }
    // old way 

    // setBalance(amount){
    //     if(isNaN(amount)){
    //         throw new Error('amount is not valid input');
    //     }
    //    this.#balance = amount;
    // }
    // getBalance(){
    //     return this.#balance;
    // }

    // setters and getters

    set balance(amount) {
        if (isNaN(amount)) {
            throw new Error('amount is not valid input');
        }
        this.#balance = amount;
    }

    get balance() {
        return this.#balance
    }
}

class CurrentAccount extends BankAccount {
    transactionLimit = 10000
    constructor(customerName, balance = 0) {
        super(customerName, balance)
    }
    #calculateInterest(amount){
        console.log('calculating interest',amount)
    }
    takeBusinessLoan(amount) {
        this.#calculateInterest(amount);
        console.log('taking business loan', +amount)
    }
}

const naveenAcc = new BankAccount('naveen kala', 1000)
const vipinAcc = new CurrentAccount('vipin kala');
// naveenAcc.deposit(2000);
// naveenAcc.withdraw(200);
// naveenAcc.balance(100);
console.log(naveenAcc);
console.log(naveenAcc.balance);
console.log(vipinAcc.takeBusinessLoan(100))




// // constructor
// function BankAccount(customerName,balance=0){ 
//     this.customerName = customerName;
//     this.balance = balance;
//     this.accountNumber = Date.now();
// }

// // used prototype
// BankAccount.prototype.deposit = function(amount){
//     this.balance += amount;
// }

// BankAccount.prototype.withdraw = function(amount){
//     this.balance -= amount;   
// }

// function CurrentAccount(customerName,balance=0){
//     BankAccount.call(this,customerName,balance) 
//     this.transactionLimit = 5000;
// }

// CurrentAccount.prototype = Object.create(BankAccount.prototype)
// CurrentAccount.prototype.takeBusinessLoan = function(amount){
//     console.log('taking business loan',+amount)
// }

// function SavingAccount(customerName,balance=0){
//     BankAccount.call(this,customerName,balance) 
//     this.transactionLimit = 1000;
// }

// SavingAccount.prototype = Object.create(BankAccount.prototype);
// SavingAccount.prototype.takeBusinessLoan = function(amount){
//     console.log('taking business loan',+amount)
// }

// const naveenAccount = new CurrentAccount('Naveen kala');
// const vipinAccount = new SavingAccount('Vipin kala');
// naveenAccount.deposit(2000);
// naveenAccount.withdraw(500);
// vipinAccount.takeBusinessLoan(300);
// console.log(naveenAccount);
// console.log(vipinAccount);

class BankAccount {
    customerName;
    balance;
    accountNumber;

    constructor(customerName, balance = 0) {
        this.customerName = customerName;
        this.balance = balance;
        this.accountNumber = Date.now();
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        this.balance -= amount;
    }
}

class CurrentAccount extends BankAccount {
    transactionLimit = 10000
    constructor(customerName, balance = 0) {
        super(customerName, balance)
    }
    takeBusinessLoan(amount) {
        console.log('taking business loan', +amount)
    }
}

const naveenAcc = new CurrentAccount('naveen kala', 1000)
naveenAcc.deposit(2000);
naveenAcc.withdraw(200);
naveenAcc.takeBusinessLoan(300);
console.log(naveenAcc)



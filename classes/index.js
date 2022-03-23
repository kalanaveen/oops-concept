class BankAccount{
    customerName;
    balance;
    accountNumber;

    constructor(customerName,balance=0){
        this.customerName = customerName;
        this.balance = balance;
        this.accountNumber = Date.now();
    }

    deposit(amount){
        this.balance = this.balance + amount;
    }

    withdraw(amount){
        this.balance = this.balance - amount
    }
}

const naveenAccount = new BankAccount('naveen kala',1000);
naveenAccount.deposit(2000);
naveenAccount.withdraw(1000);
console.log(naveenAccount);
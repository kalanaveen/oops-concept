// constructor
function BankAccount(customerName,balance=0){ 
    this.customerName = customerName;
    this.balance = balance;
    this.accountNumber = Date.now();

    // this.deposit = function(amount){
    //     this.balance += amount;
    // }

    // this.withdraw = (amount)=>{
    //     this.balance -= amount;
    // }
}

// used prototype
BankAccount.prototype.deposit = function(amount){
    this.balance += amount;
}

BankAccount.prototype.withdraw = function(amount){
    this.balance -= amount;   
}
const naveenAccount = new BankAccount('Naveen kala');
naveenAccount.deposit(10000);
naveenAccount.withdraw(2000);
console.log(naveenAccount);




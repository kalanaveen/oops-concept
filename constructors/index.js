// constructor
function BankAccount(customerName,balance=0){ 
    this.customerName = customerName;
    this.balance = balance;
    this.accountNumber = Date.now();

    this.deposit = function(amount){
        this.balance += amount;
    }

    this.withdraw = (amount)=>{
        this.balance -= amount;
    }
}

// const naveenAcc = new BankAccount('naveen kala',3000);
// const vipinAcc = new BankAccount('vipin kala');
// vipinAcc.deposit(3000);
// naveenAcc.withdraw(1000);

// console.log(naveenAcc,vipinAcc);

const accountForm = document.querySelector('#accountForm');
const customerName = document.querySelector('#customerName');
const balance = document.querySelector('#balance');
const depositForm = document.querySelector('#depositForm');
const accountNumber = document.querySelector('#accountNumber');
const amount = document.querySelector('#amount');
const withdrawForm = document.querySelector('#withdrawForm');
let accounts = [];

accountForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    let account = new BankAccount(customerName.value,+balance.value);
    accounts.push(account);
    console.log(accounts);
})


depositForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    let account = accounts.find((account)=>
      account.accountNumber === +accountNumber.value
    );
    account.deposit(+amount.value);
    console.log(account);
})

withdrawForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    let account = accounts.find((account)=>
       account.accountNumber === +accountNumber.value
    );
    account.withdraw(+amount.value);
    console.log(account);
})

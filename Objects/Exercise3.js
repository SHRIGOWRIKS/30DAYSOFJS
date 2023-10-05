// Create an object literal called personAccount. 
// It has firstName, lastName, incomes, expenses properties
//  and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. 
// Incomes is a set of incomes and its description and expenses is a set of incomes and its description.


const personAccount={
    firstName:'Gowri',
    lastName:'Prasad',
    incomes:{},
    expenses:{},
    totalIncome:function (){
        let total=0;
        for (const income in this.incomes) {
            total+=this.incomes[income]
            }
            return total;
    },
    totalExpense:function(){
        let total=0;
        for (const expense in this.expenses) {
              total+=this.expenses[expense]
            }
        return total;


    },
    accountInfo:function (){
    return `${this.firstName} ${this.lastName} account Total Income:${this.totalIncome()} and Total Expense:${this.totalExpense()}`
    },
    addIncome:function(description,amount){
     this.incomes[description]=amount;
    },
    addExpense:function(description,amount){
     this.expenses[description]=amount
    },
    accountBalance:function (){
          const balance=this.totalIncome()-this.totalExpense();
          return `Total balance :${balance}`;
    }

}

// Example usage:
personAccount.addIncome('Salary', 3000);
personAccount.addIncome('Freelancing', 500);
personAccount.addExpense('Rent', 1000);
personAccount.addExpense('Groceries', 300);

console.log(personAccount.accountInfo());
console.log(personAccount.accountBalance());



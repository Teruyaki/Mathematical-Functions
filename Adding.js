

var bankAccount = {};
 bankAccount["balance"] = 10000;

 var inputbalance = prompt("How much money do you want to add");
  var y = parseInt(inputbalance);//This makes it so the number becomes an interger
 window.alert(bankAccount.balance + y);//This add to the balance 
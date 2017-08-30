
var bankAccount = {};
 bankAccount["balance"] = 10000;

 var inputbalance = prompt("How much money do you want");
  bankAccount["balance"] -= inputbalance;
 window.alert(bankAccount.balance);
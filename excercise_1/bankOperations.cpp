#include <iostream>

using namespace std;

double depositMoney(double balance){
  double newBalance = 0, depositAmount = 0;

  cout<<"Deposit Money: "<<endl;
  cout<<"Please enter the amount of money to deposit: ";
  cin>>depositAmount;

  if(depositAmount <= 0) cout<<"the amount introduced is not valid. The deposit was canceled. "<<endl;
  else {
    newBalance = balance + depositAmount;
    cout<<"Successful Deposit. You deposited "<<depositAmount<<"$"<<endl;
    pauseProgram();
    return newBalance;
  }
  pauseProgram();
  clearCinErrors();
  return balance;
}

double withdrawMoney(double balance){
  double newBalance = 0, withdrawAmount = 0;

  cout<<"Withdraw Money: "<<endl;
  cout<<"Please enter the amount of money to withdraw: ";
  cin>>withdrawAmount;

  if(withdrawAmount <= 0) cout<<"the amount introduced is not valid. The withdraw was canceled. "<<endl;
  else if((balance - withdrawAmount) < 0) cout<<"You don't have enough money to effectuate this action. The withdraw was canceled."<<endl;
  else{
    newBalance = balance - withdrawAmount;
    cout<<"Successful Withdraw. You withdrawn "<<withdrawAmount<<"$"<<endl;
    pauseProgram();
    return newBalance;
  }

  pauseProgram();
  clearCinErrors();
  return balance;
}

void viewMoney(double balance){
  cout<<"View Money: ";
  cout<<"\n\n"<<endl;
  cout<<"Available Balance: "<<balance<<"$"<<endl;
  pauseProgram();
}

double transferMoney(double balance){
  string beneficiary;
  double newBalance = 0, tansferAmount = 0;

  cout<<"Transfer Money: "<<endl;
  cout<<"Available Balance: "<<balance<<"$"<<endl;
  cout<<"\n\n"<<endl;
    cout<<"Please enter the name of the beneficiary: ";
  cin>>beneficiary;
  cout<<"Please enter the amount of money to transfer: ";
  cin>>tansferAmount;

  if(tansferAmount <= 0) cout<<"the amount introduced is not valid. The transfer was canceled. "<<endl;
  else if((balance - tansferAmount) < 0) cout<<"You don't have enough money to effectuate this action. The transfer was canceled."<<endl;
  else{
    newBalance = balance - tansferAmount;
    cout<<"Successful transfer. You transferred "<<tansferAmount<<"$ to "<<beneficiary<<"."<<endl;
    pauseProgram();
    return newBalance;
  }

  pauseProgram();
  clearCinErrors();
  return balance;
}
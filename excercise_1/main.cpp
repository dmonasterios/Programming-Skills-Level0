/*
Level 0: Excersice 1 from blindma1den discord server

1. Create an online banking system with the following features:
* Users must be able to log in with a username and password.
* If the user enters the wrong credentials three times, the system must lock them out.
* The initial balance in the bank account is $2000.
* The system must allow users to deposit, withdraw, view, and transfer money.
* The system must display a menu for users to perform transactions.2.
*/

#include <iostream>
using namespace std;
#include "../utils/systemUtils.cpp"
#include "../utils/login.cpp"
#include "bankOperations.cpp"


void printMenu();

int main(){
  bool isUserLogIn;
  int opt;
  double balance = 2000;

  isUserLogIn = logIn();


  while(isUserLogIn){
    clearScreen(0);
    printMenu();
    cin>>opt;
    clearScreen(0);

    switch(opt){
      case 1:
        balance = depositMoney(balance);
        break;
      case 2:
        balance = withdrawMoney(balance);
        break;
      case 3:
        viewMoney(balance);
        break;
      case 4:
        balance = transferMoney(balance);
        break;
      case 5:
        isUserLogIn = false;
        cout<<"Goodbye see you later."<<endl;
        break;
      default:
        cout<<"Invalid opction. please introduce a valid option."<<endl;
        clearCinErrors();
        clearScreen(2);
        break;
    }
  }


  return 0;
}


void printMenu(){
  cout<<"Welcome to blindma1den Bank"<<endl;
  cout<<"\n\n\n"<<endl;
  cout<<"1.- Deposit Money"<<endl;
  cout<<"2.- Withdraw Money"<<endl;
  cout<<"3.- View Money"<<endl;
  cout<<"4.- Transfer Money"<<endl;
  cout<<"5.- LogOut"<<endl;
  cout<<"\n\n"<<endl;
  cout<<"Please select an option: ";
}



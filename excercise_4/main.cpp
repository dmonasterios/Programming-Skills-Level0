/*
Level 0: Excersice 4 from blindma1den discord server

4. Create an online shipping system with the following features:
* 		The system has a login that locks after the third failed attempt.
* 		Display a menu that allows: Sending a package, exiting the system.
* 		To send a package, sender and recipient details are required.
* 		The system assigns a random package number to each sent package.
* 		The system calculates the shipping price. $2 per kg.
* 		The user must input the total weight of their package, and the system should display the amount to pay.
* 		The system should ask if the user wants to perform another operation. If the answer is yes, it should return to the main menu. If it's no, it should close the system.
*/

#include <vector>
#include <iostream>
using namespace std;
#include "../utils/systemUtils.cpp"
#include "../utils/login.cpp"
#include "Shipping.cpp"
#include "shippingOperations.cpp"

void printMenu();

int main(){
  vector<Shipping> vShipping;
  bool isUserLogIn;
  int opt;
  isUserLogIn = logIn("user","12345678");

  while(isUserLogIn){
    clearScreen();
    printMenu();
    cin>>opt;
    clearScreen();
    switch(opt){
      case 1:
        sendingPackpage(vShipping);
        break;
      case 2:
          shippingHistory(vShipping);
        break;
      case 3:
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
  cout<<"Welcome to blindma1den Shipping System"<<endl;
  cout<<"\n\n\n"<<endl;
  cout<<"1.- Sending a package"<<endl;
  cout<<"2.- Shipping history"<<endl;
  cout<<"3.- LogOut"<<endl;
  cout<<"\n\n"<<endl;
  cout<<"Please select an option: ";
}
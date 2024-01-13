#include <cstring>

bool logIn(string correct_username = "admin", string correct_repassword = "admin"){
  string username, password;
  bool isUserLogIn = false;
  int loginAttempts = 0;

    do{
    cout<<"Welcome to blindma1den bank !!!!!"<<endl;
    cout<<"Please introduce your username: ";
    cin>>username;
    cout<<"Please introduce your password: ";
    cin>>password;

    if((correct_username.compare(username) == 0) && (correct_repassword.compare(password) == 0)){
      return true;
    }
    else{
      loginAttempts++;
      cout<<"Wrong username or password"<<endl;
      cout<<"You have "<< 3 - loginAttempts << " more Attempts." <<endl;
    }

    clearScreen(2);
  }while(loginAttempts < 3 && !isUserLogIn);

  cout<<"Your user is blocked"<<endl;
  pauseProgram();
  return false;
}
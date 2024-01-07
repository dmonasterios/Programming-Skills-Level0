#include <cstring>

bool logIn(string correct_username = "admin", string correct_repassword = "admin"){
  const char CONST_USERNAME[20] = "admin";
  const char CONST_PASSWORD[12] = "admin";

  char username[20], password[12];
  bool isUserLogIn = false;
  int loginAttempts = 0;
    do{
    cout<<"Welcome to blindma1den bank !!!!!"<<endl;
    cout<<"Please introduce your username: ";
    cin>>username;
    cout<<"Please introduce your password: ";
    cin>>password;

    if((strcmp(username,CONST_USERNAME) == 0) && (strcmp(password,CONST_PASSWORD) == 0)){
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
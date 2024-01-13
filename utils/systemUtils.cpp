#include <limits>
#include <stdlib.h>
#include <unistd.h>

void clearCinErrors(){
  cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');
  cin.clear();
}

void clearScreen(int time = 0){
  sleep(time);
  system("clear");
}

void pauseProgram(){
  cout << "\n\n Please press ENTER to continue:";
  char key = getchar();
  clearCinErrors();
}

bool confirm(string msg = "Are you Sure?: "){
  int opt;
  do{
    cout<<msg<<endl;
    cout<<"1.- Yes"<<endl;
    cout<<"2.- No"<<endl;
    cout<<"Please select an option: ";
    cin>>opt;
      if(cin.fail()){
      clearCinErrors();
      return false;
    }

  }while( opt != 1 && opt != 2 );
  if(opt == 1) return true;
  else return false;
}
#include <limits>
#include <stdlib.h>
#include <unistd.h>

void clearCinErrors(){
  cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');
}

void clearScreen(int time){
  sleep(time);
  system("clear");
}

void pauseProgram(){
  cout << "\n\n Please press ENTER to continue:";
  char key = getchar();
  clearCinErrors();
}
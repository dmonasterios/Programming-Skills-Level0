int itemCount = 67;

char validCharacters[] = {
  'a', 'b', 'c', 'd', 'e', 'f', 'g',
  'h', 'i', 'j', 'k', 'l', 'm', 'n',
  'o', 'p', 'q', 'r', 's', 't', 'u',
  'v', 'w', 'x', 'y', 'z',
  'A', 'B', 'C', 'D', 'E', 'F', 'G',
  'H', 'I', 'J', 'K', 'L', 'M', 'N',
  'O', 'P', 'Q', 'R', 'S', 'T', 'U',
  'V', 'W', 'X', 'Y', 'Z',
  '0','1','2','3','4','5','6','7','8','9',
  '-','_','.','!','$','#'
};


string generateID(){
  string id = "SHP-";
  int randomIndex;
  for(int i = 0; i < 24; i++){
    randomIndex = rand() % itemCount;
    id = id + validCharacters[randomIndex];
  }
  return id;
}
struct personDetails getPersonDetails(){
  personDetails person;
  cout<<"First Name: ";
  cin>>person.first_name;
  cout<<"Last Name: ";
  cin>>person.last_name;
  cout<<"Email: ";
  cin>>person.email;
  cout<<"Direcction: ";
  cin>>person.direcction;

  return person;
}

void printPersonDetails(personDetails person){
  cout<<"First Name: "<<person.first_name<<endl;
  cout<<"Last Name: "<<person.last_name<<endl;
  cout<<"Email Name: "<<person.email<<endl;
  cout<<"Direcction Name: "<<person.direcction<<endl;
}

void printShippingDetail(Shipping s1){
  personDetails sender, recipient;

  sender = s1.getSenderDetails();
  recipient = s1.getRecipientDetails();

  cout<<"\n*******************************"<<endl;
  cout<<"Shipping Details \n"<<endl;
  cout<<"Package Information"<<endl;
  cout<<"ID: "<<s1.getID()<<endl;
  cout<<"Total weight of the package: "<<s1.getWeightInKg()<<" kilograms"<<endl;
  cout<<"Cost: "<<s1.getPrice()<<" $"<<endl;
  cout<<"\nSender Details"<<endl;
  printPersonDetails(sender);
  cout<<"\nRecipient Details"<<endl;
  printPersonDetails(recipient);
  cout<<"\n*******************************"<<endl;
}

void sendingPackpage(vector <Shipping> &vShipping){
  Shipping s1;

  bool areCinErrors = false, isShippingAccepted = false;
  double weightInKg;
  do{
    clearScreen(0);
    cout<<"Sending a Package"<<endl;
    cout<<"\nTo send a package, it is necessary to enter the following information: "<<endl;

    cout<<"Package Information"<<endl;
    cout<<"Please enter the total weight of the package in kilograms: ";
    cin>>weightInKg;
    s1.setWeightInKg(weightInKg);

    cout<<"Sender Details"<<endl;
    s1.setSenderDetails(getPersonDetails());
    cout<<"Recipient Details"<<endl;
    s1.setRecipientDetails(getPersonDetails());

    if(cin.fail()){
      clearCinErrors();
      areCinErrors = true;
    }
    else {
      clearScreen(0);
      printShippingDetail(s1);
      isShippingAccepted = confirm("Please verify the entered information. Do you want to proceed with the shipping? ");
    }
  }while(isShippingAccepted == false && areCinErrors == false);
  if(!areCinErrors) vShipping.push_back(s1);

  if(!confirm("Do you want to perform another operation? ")) exit(0);

}

void shippingHistory(vector <Shipping> &vShipping){
  cout<<"Shipping History"<<endl;
  for(int i = 0; i < vShipping.size(); i++){
    printShippingDetail(vShipping[i]);
  }
  pauseProgram();
}
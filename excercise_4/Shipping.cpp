#include "../utils/generateID.cpp"

struct personDetails{
  string first_name;
  string last_name;
  string email;
  string direcction;
};

class Shipping {
  // Attributes
  private:
    string id;
    double weightInKg;
    personDetails senderDetails;
    personDetails recipientDetails;

    // methods
    public:
      Shipping();
      void setWeightInKg( double _weightInKg );
      void setSenderDetails( personDetails _senderDetails );
      void setRecipientDetails( personDetails _recipientDetails );
      string getID();
      double getWeightInKg();
      double getPrice();
      struct personDetails getSenderDetails();
      struct personDetails getRecipientDetails();
};

Shipping::Shipping(){
  id = generateID();
}

void Shipping::setWeightInKg( double _weightInKg ){
  weightInKg = _weightInKg;
}


void Shipping::setSenderDetails(personDetails _senderDetails){
  senderDetails = _senderDetails;
}

void Shipping::setRecipientDetails(personDetails _recipientDetails){
  recipientDetails = _recipientDetails;
}

string Shipping::getID(){
  return id;
}

double Shipping::getWeightInKg(){
  return weightInKg;
}

double Shipping::getPrice(){
  return weightInKg * 2;
}

struct personDetails Shipping::getSenderDetails(){
  return senderDetails;
}
struct personDetails Shipping::getRecipientDetails(){
  return recipientDetails;
}


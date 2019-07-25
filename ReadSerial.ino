int i = 0;

void setup(){
  Serial.begin(9600);
}

void loop(){

  i = i + 1;
  
  Serial.write("Count from Arduino : ");
  Serial.print(i); 
  Serial.println();
  delay(500);
}


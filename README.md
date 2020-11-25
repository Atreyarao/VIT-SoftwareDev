# Backend   

Route 1) /Selection   
This Route takes 2 parameter ballAgressive, batAggresive   
This comes after the player has chosen PVE  
According to parameter the modifier value for Bowler and Batsmen will change   
The server will then pick a random bowling type  
The result of the route is an object which has details such as type modifiers runs and probability...   
![alt text](https://github.com/Atreyarao/VIT-SoftwareDev/blob/main/images/hitwicket1.jpg)    

Route 2) /hit  
This Route Takes 2 parameter run,probability   
we Reacord the last ball and add the current runs to total tuns  
if probablity less that 20 it will miss   
![alt text](https://github.com/Atreyarao/VIT-SoftwareDev/blob/main/images/hitwicket2.jpg)   
      
 ![alt text](https://github.com/Atreyarao/VIT-SoftwareDev/blob/main/images/hitwicket.jpg)   
 
 
 
 # Database   
 I am just using JSON file as Database instead of MongoDb which can be replaced later    
   
 

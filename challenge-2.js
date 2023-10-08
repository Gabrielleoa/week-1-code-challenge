function speedDetector (){ // create a function called speedDetector 
    const speedDetected = prompt("What is the car's speed:") //this prompts the user to put in the car speed
    let speedLimit = 70; //sets the speedLimit to 70
    let pointCount= 0; //sets the intial demerit point count to 0
     if (speedDetected < speedLimit){ // conditional statement that checks if the car's speed is over the speed limit
        console.log("Ok"); // if the speed is less than the limit the code prints 'ok'
    }else (speedDetected > speedLimit);{  // conditional statement that states if the speed is over the speedlimit it should print 'demerit'
       console.log("demerit"); //prints 'demerit' if the speed detected is higher than the speed Limit
   }
   }
function pointsDeducted(){ // function for the points deducted when the speed is higher than the limit
    do{
        pointCount++ } //adds a point every time the speed is above the limit
while 
    (speedDetected > speedLimit); // while the speed Detected is greater than the speed limit the point count will go up
}

for (pointsDeducted;pointsDeducted>12;pointsDeducted++){ // a loop that counts how many points have been allocated to points Deducted and prints License suspended when the points are greater than 12
return 'License Suspended';
}
//Write a program that takes as input the speed of a car e.g 80.
 //If the speed is less than 70, it should print “Ok”.
 // Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point. 
 //print the total number of demerit points.
//For example, if the speed is 80, it should print: “Points: 2”.
// If the driver gets more than 12 points, the function should print: “License suspended”.
let speed = prompt("input speed")
function calculateSpeed(){
     const speedlimit = 70
    const points = 0
    const dividedemerit = 5

if (speed < speedlimit) {
    alert("OK.")
    
}else if (speed > speedlimit){
   points = (speed - speedlimit) / dividemerit
if (points > 0 && points < 12){
    alert("Your points are",points)
}else if (points > 12){
    alert("Your license is suspended")
}
}
}

console.log(calculateSpeed);
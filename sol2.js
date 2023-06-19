//Write a program that takes as input the speed of a car e.g 80.
 //If the speed is less than 70, it should print “Ok”.
 // Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point. 
 //print the total number of demerit points.
//For example, if the speed is 80, it should print: “Points: 2”.
// If the driver gets more than 12 points, the function should print: “License suspended”.
let speed = prompt("input speed")
function calculateSpeed(){
     const speedlimit = 70
    const points = 5
    const maxpoints = 12
// for speed less than 70
if (speed <= speedlimit) {
    alert("OK.")
    //for speed geater than 70
}else  if (speed > speedlimit){
    const pastlimit = speed - speedlimit
    const demeritpoints = Math.floor(pastlimit / points)
    if (demeritpoints > maxpoints){
        alert ("Your license is invoked.")
    } else{
        alert("your points are" + demeritpoints)
    }
}

}
calculateSpeed(speed);
console.log(calculateSpeed(speed));
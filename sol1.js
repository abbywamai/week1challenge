//Write that prompts the user to input student marks. The input should be between 0 and 100. 
//Then output the correct grade: 
//A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

// the solution is using the conditionals (if ......else if)

let marks = prompt("Please Enter Marks")
//entry that is >100 and <0
if(marks > 100|| marks < 0){
    alert("Invalid")
} 
else if(marks > 79){
    alert("You have an A!")
} 
else if(marks > 60 &&  marks <= 79){
    alert("You have a B!")
}
else if(marks > 49 && marks <= 59){
    alert("You have a C!")
}
else if(marks > 40 && marks <= 49){
    alert("You have a D!")
}
else if(marks < 40){
    alert("You have an E! Do better :)")
}

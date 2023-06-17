//Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. 
//Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary.

let basicSalary = prompt("enter salary")
let benefits = prompt("enter benefits")



function netSalCalc(basicSalary, benefits){
    let taxRate = 0.3;
    let nhifRate = 0.02;
    let nssfRate = 0.05;

//calculate the deductions and net salary then return the values
const gross = basicSalary + benefits;

const payee = gross * taxRate;

const NHIFDeductions = gross * nhifRate;

const NSSFDeductions = gross * nssfRate;

const net = gross - [payee + NHIFDeductions + NSSFDeductions];

return (gross, payee, NHIFDeductions, NSSFDeductions, net);
}
console.log(payee)
console.log(NHIFDeductions)
console.log(NSSFDeductions)
console.log(net)
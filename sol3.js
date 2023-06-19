//Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. 
//Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary.

let basicSalary = prompt("enter salary")
    
//calculate the deductions and net salary then return the values
let taxRate = (30 * gross)/100
let nhifRate = (0.02 * gross);
let nssfRate = (0.05 * gross);
let net = gross - taxRate - nhifRate - nssfRate;

console.log(`${net}`)
window.alert(`${net}`)
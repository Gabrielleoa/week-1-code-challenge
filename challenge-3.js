
/*Challenge 3: Net Salary Calculator (Toy Problem)

Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

NB: Use KRA, NHIF, and NSSF values provided in the link below.*/


function netSalaryCalculator(){ //function for calculating the net Salary
    let grossPay= 800000; // initializes the net Salary   //initializes the basic Salary
    let benefits= 61400; // initializes the benefits
    let rateOfTax = 0.325 // initializes the rate of tax
    let tax = grossPay * rateOfTax; //calculates the rate of tax from the gross salary 
    const netSalary = (grossPay - benefits - tax); //calculates what the salary will be after the tax and benefits deductions 
 return netSalary
}
console.log(netSalaryCalculator())
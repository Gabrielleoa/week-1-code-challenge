function calculateStudentGrade(){
    let grade = prompt("Please enter your grade:"); //this prompts the user to enter the student's grade
    if (grade >79 ){
        return 'A'; // this is a conditional 'if' statement that returns an 'A' if their grade is greater than 79
    }else if (grade > 60 && grade <= 79){
        return 'B'; //this is a conditional statement that returns a 'B' if their grade is greater than 60 and less than and equal to 79
    }else if (grade >49 && grade < 59){
        return 'C'; //this is a conditional statement that returns a 'C' if their grade is greater than 49 and less than 59
    }else if (grade > 40 && grade <=49){
        return 'D'; //this is a conditional statement that returns a 'D' if their grade is greater than 40 and less than or equal to 49
    }else if (grade <= 40){
        return 'E'; //this is a conditional statement that returns a 'E' if their grade is less than or equal to 40
    }
}
console.log(calculateStudentGrade()); // this line prints the letter grade based on the percentage given.
// student grade generator
function getStudentMarks(marks){
  let grade;
  if (marks > 79 && marks<=100) {grade = "A";
  }else if (marks >= 60 && marks<=79){ grade = "B";
  }else if (marks >= 49 && marks <=60){ grade = "C";
  }else if (marks >= 40 && marks <=49){ grade = "D";
  }else{ grade = "E";}
 
  return grade;
}
 let studentMarks = prompt("Please enter student marks(0-100):");
// the user is prompted to enter the marks
  
studentMarks= parseInt(studentMarks.trim(), 10); 
// prompt is usually string formatted hence we are convcerting it to an integer
// if marks are above 100, below 0 or anything that is not a number the an alert message will be displayed

if (isNaN(studentMarks) || studentMarks < 0 || studentMarks > 100) {
  alert(" Invalid input! Please enter a number between 0 and 100.");
} else {
  // if the input enters satisfies the above condition the user will proceed to get the grade
  let grade = getStudentMarks(studentMarks)
  alert(" Grade: " + grade); // used to show the user what the grade is
}

// due to having both the prompt and the function, both will be executed i.e if the function is called  the grade will be outputed 
// 
// Ask user for marks
let marks = prompt("Enter student marks (0 - 100):");

// Convert input to a number
marks = Number(marks);

// Validate input
if (marks < 0 || marks > 100 || isNaN(marks)) {
  alert("❌ Invalid input! Please enter a number between 0 and 100.");
} else {
  let grade;

  if (marks > 79) {
    grade = "A";
  } else if (marks >= 60) {
    grade = "B";
  } else if (marks >= 49) {
    grade = "C";
  } else if (marks >= 40) {
    grade = "D";
  } else {
    grade = "E";
  }

  alert("✅ Grade: " + grade);
}

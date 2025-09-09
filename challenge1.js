function gradeGenerator(marks) {
  let grade;

  if (marks < 0 || marks > 100) {
    return "Invalid Score"; // Prevents numbers under 0 and over 100 from being entered, returning invalid score if so "
  }
  // Use of switch + boolean logic turns each case into a comparable condition
  //Breaks ensure only the first true case runs
  switch (true) {
    case marks > 79:
      grade = "A";
      break;
    // If input marks are greater than 79 then grade awarded is A
    case marks >= 60 && marks <= 79:
      grade = "B";
      break;
    // If input marks are greater than or equal to 60 and less than or equal to 79 then grade awarded is B
    case marks >= 50 && marks <= 59:
      grade = "C";
      break;
    // If input marks are greater than or equal to 50 and less than or equal to 59 then grade awarded is C
    case marks >= 40 && marks <= 49:
      grade = "D";
      break;
    // If input marks are greater than or equal to 40 and less than or equal to 49 then grade awarded is D
    case marks < 40:
      grade = "E";
      break;
    // If input marks are less than 40 then grade E is awarded
  }
  return grade; // After grade is decided it is returned
}
console.log(gradeGenerator()); // Calling gradeGenerator function to display

var subject1 = "";
var subject2 = "";
var subject3 = "";
var totalMarksPerSubject = 100;
var marksObtainedInSubject1 = 0;
var marksObtainedInSubject2 = 0;
var marksObtainedInSubject3 = 0;

subject1 = prompt("Enter the name of the first subject:");
subject2 = prompt("Enter the name of the second subject:");
subject3 = prompt("Enter the name of the third subject:");

marksObtainedInSubject1 = prompt("Enter the marks obtained in " + subject1 + ":");
marksObtainedInSubject2 = prompt("Enter the marks obtained in " + subject2 + ":");
marksObtainedInSubject3 = prompt("Enter the marks obtained in " + subject3 + ":");

var totalMarks = (parseInt(marksObtainedInSubject1) + parseInt(marksObtainedInSubject2) + parseInt(marksObtainedInSubject3)) * totalMarksPerSubject;
var percentage = (totalMarks / (3 * totalMarksPerSubject)) * 100;

document.write("<table border='1'>");
document.write("<tr><th colspan='2'>Results</th></tr>");
document.write("<tr><th>Subject</th><th>Marks Obtained</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + marksObtainedInSubject1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + marksObtainedInSubject2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + marksObtainedInSubject3 + "</td></tr>");
document.write("<tr><th colspan='2'>Total Marks: " + totalMarks + "</th></tr>");
document.write("<tr><th colspan='2'>Percentage: " + percentage + "%</th></tr>");
document.write("</table>");
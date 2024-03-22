// Function to calculate grades by prompting the user to input student marks
function generateGrade() {
    let marks = document.getElementById("marks").value; marks = Number(marks);
    if (marks > 79) { document.getElementById("grade").textContent = "Grade: A"; }
     else if (marks >= 60 && marks <= 79) { document.getElementById("grade").textContent = "Grade: B"; }
     else if (marks >= 50 && marks <= 59) { document.getElementById("grade").textContent = "Grade: C"; }
     else if (marks >= 40 && marks <= 49) { document.getElementById("grade").textContent = "Grade: D"; }
     else { document.getElementById("grade").textContent = "Grade: E"; }
}
document.getElementById("generateBtn").addEventListener("click", generateGrade);
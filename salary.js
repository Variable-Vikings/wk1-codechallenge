// Constants
const KRA_TAX_RATES = { 0: 0, 12298: 10, 23885: 15, 35472: 20, 47059: 25,
};
const NHIF_RATES = { 0: 0, 5999: 150, 7999: 300, 11999: 400, 14999: 500, 19999: 600, 24999: 750, 29999: 850, 34999: 900, 39999: 950, 44999: 1000, 49999: 1100, 59999: 1200, 69999: 1300, 79999: 1400, 89999: 1500, 99999: 1600,
};
const NSSF_RATES = { 18000: 6,
};

// Function to calculate the payee (tax)
function calculatePayee(basicSalary) { let taxRate = 0; for (let rate in KRA_TAX_RATES) { if (basicSalary <= rate) { taxRate = KRA_TAX_RATES[rate]; break; } } return (basicSalary * taxRate) / 100;
}

// Function to calculate NHIF deductions
function calculateNHIFDeductions(grossSalary) { let nhifDeductions = 0; for (let range in NHIF_RATES) { if (grossSalary <= range) { nhifDeductions = NHIF_RATES[range]; break; } } return nhifDeductions;
}

// Function to calculate NSSF deductions
function calculateNSSFDeductions(basicSalary) { let nssfDeductions = 0; for (let range in NSSF_RATES) { if (basicSalary >= range) { nssfDeductions = (basicSalary * NSSF_RATES[range]) / 100; break; } } return nssfDeductions;
}

// Function to calculate gross salary
function calculateGrossSalary(basicSalary, benefits) { return basicSalary + benefits;
}

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) { const grossSalary = calculateGrossSalary(basicSalary, benefits); const payee = calculatePayee(basicSalary); const nhifDeductions = calculateNHIFDeductions(grossSalary); const nssfDeductions = calculateNSSFDeductions(basicSalary); const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions; return { grossSalary, payee, nhifDeductions, nssfDeductions, netSalary, };
}

// Function to handle form submission
function handleSubmit(event) { event.preventDefault();
 // Get form values
const basicSalaryInput = document.getElementById("basicSalary");
const benefitsInput = document.getElementById("benefits");
const basicSalary = parseFloat(basicSalaryInput.value);
const benefits = parseFloat(benefitsInput.value);
// Calculate net salary
const salaryDetails = calculateNetSalary(basicSalary, benefits);
 // Display results
const resultContainer = document.getElementById("Net"); resultContainer.innerHTML = ` <p>Gross Salary: ${salaryDetails.grossSalary}</p> <p>Payee (Tax): ${salaryDetails.payee}</p> <p>NHIF Deductions: ${salaryDetails.nhifDeductions}</p> <p>NSSF Deductions: ${salaryDetails.nssfDeductions}</p> <p>Net Salary: ${salaryDetails.netSalary}</p> `;
}
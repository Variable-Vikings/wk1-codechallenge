// Constants
const KRA_TAX_RATES = {
    0: 0,
    24000: 10,
    40000: 15,
    60000: 20,
    80000: 25,
    100000: 30
};

const NHIF_MAX = 1700;
const NSSF_MAX = 1200;

// Function to calculate the payee (tax)
function calculatePayee(basicSalary) {
    let taxRate = 0;

    for (let rate in KRA_TAX_RATES) {
        if (basicSalary <= parseInt(rate)) {
            taxRate = KRA_TAX_RATES[rate];
            break;
        }
    }

    return (basicSalary * taxRate) / 100;
}

// Function to calculate NHIF deductions
function calculateNHIFDeductions(basicSalary) {
    let nhifDeductions = basicSalary * 0.015; // 1.5% of basic salary
    nhifDeductions = nhifDeductions > NHIF_MAX ? NHIF_MAX : nhifDeductions;
    return nhifDeductions;
}

// Function to calculate NSSF deductions
function calculateNSSFDeductions(basicSalary) {
    let nssfDeductions = basicSalary * 0.06; // 6% of basic salary
    nssfDeductions = nssfDeductions > NSSF_MAX ? NSSF_MAX : nssfDeductions;
    return nssfDeductions;
}


// Function to calculate gross salary
function calculateGrossSalary(basicSalary, benefits) {
    return basicSalary + benefits;
}

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = calculateGrossSalary(basicSalary, benefits);
    const payee = calculatePayee(basicSalary);
    const nhifDeductions = calculateNHIFDeductions(grossSalary);
    const nssfDeductions = calculateNSSFDeductions(grossSalary);
    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;
    return {
        grossSalary,
        payee,
        nhifDeductions,
        nssfDeductions,
        netSalary
    };
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();

    // Get form values
    const basicSalaryInput = document.getElementById("basicSalary");
    const benefitsInput = document.getElementById("benefits");
    const basicSalary = parseFloat(basicSalaryInput.value);
    const benefits = parseFloat(benefitsInput.value);

    // Calculate net salary
    const salaryDetails = calculateNetSalary(basicSalary, benefits);

    // Displaying results
    const resultContainer = document.getElementById("Net");
    resultContainer.innerHTML = `
        <p>Gross Salary: ${salaryDetails.grossSalary}</p>
        <p>Payee (Tax): ${salaryDetails.payee}</p>
        <p>NHIF Deductions: ${salaryDetails.nhifDeductions}</p>
        <p>NSSF Deductions: ${salaryDetails.nssfDeductions}</p>
        <p>Net Salary: ${salaryDetails.netSalary}</p>
    `;
}
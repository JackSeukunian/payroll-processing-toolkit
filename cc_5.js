
const employees = [
  { name: "Allyson", hourlyRate: 25, hoursWorked: 42 },
  { name: "Jack", hourlyRate: 20, hoursWorked: 38 },
  { name: "Trenton", hourlyRate: 30, hoursWorked: 45 },
  { name: "Gavin", hourlyRate: 18, hoursWorked: 40 },
  { name: "Sam", hourlyRate: 22, hoursWorked: 50 }
];


function calculateBasePay(rate, hours) {
  const baseHours = Math.min(hours, 40);
  return baseHours * rate;
}


function calculateOvertimePay(rate, hours) {
  const overtimeHours = Math.max(hours - 40, 0);
  return overtimeHours * rate * 1.5;
}


function calculateTaxes(grossPay) {
  return grossPay * 0.15;
}


function processPayroll(employee) {
  const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
  const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
  const grossPay = basePay + overtimePay;
  const taxes = calculateTaxes(grossPay);
  const netPay = grossPay - taxes;

  return {
    name: employee.name,
    basePay: basePay.toFixed(2),
    overtimePay: overtimePay.toFixed(2),
    grossPay: grossPay.toFixed(2),
    netPay: netPay.toFixed(2)
  };
}


employees.forEach(emp => {
  console.log(processPayroll(emp));
});

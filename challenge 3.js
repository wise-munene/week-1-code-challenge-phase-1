// NET SALARY CALCULATOR 
function calculateNetSalary(basicSalary, benefits) {
  // Gross salary: total earnings before deductions are cut, benefits are like allowances
  let grossSalary = basicSalary + benefits;
  let tax = grossSalary;
  let paye = 0; // no tax has been cut yet

  // If gross > first band (24,000), we tax the first band fully and reduce 'tax"
  if (tax > 24000) {
    // First band taxed at 10%
    paye += 24000 * 0.10;   // add tax for first 24,000
    tax -= 24000;      // remove that portion from the remaining taxable amount

    // 8,333 taxed at 25%)
    if (tax > 8333) {
      // second band fully taxed at 25%
      paye += 8333 * 0.25;
      tax -= 8333;

      // remaining tax (whatever is left) is taxed at 30% (third band)
      paye += tax * 0.30;

    } else {
      //the remaining tax is less than 8,333, so tax only that remainder at 25%
      paye += tax * 0.25;
    }

  } else {
    // gross salary <= 24,000 so everything is taxed at 10%
    paye = tax * 0.10;
  }

  // Personal relief reduces PAYE
  paye -= 2400;
  if (paye < 0) paye = 0; // tax cannot be negative as kra cannot refund relied if paye is0

  // NHIF 2.75% of gross,  the  nhif minimum  is 300 in the case where grosssalary is low
  let nhif = grossSalary * 0.0275;
  if (nhif < 300) nhif = 300;

  // NSSF  6% of grosssalary
  let nssf = grossSalary * 0.06;

  // Totals and net salary
  let totalDeductions = paye + nhif + nssf;
  let netSalary = grossSalary - totalDeductions;

  return {
    grossSalary: grossSalary,
    paye: paye,
    nhif: nhif,
    nssf: nssf,
    totalDeductions: totalDeductions,
    netSalary: netSalary
  };
}
calculateNetSalary();
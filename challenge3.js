/* Calculate PAYE tax based on taxable income */
function calculatePayee(taxableIncome) {
    let tax = 0;
    if (taxableIncome <= 24000) {
        tax = taxableIncome * 0.1;
    } else if (taxableIncome <= 32333) {
        tax = (24000 * 0.1) + (taxableIncome - 24000) * 0.25;
    } else {
        tax = (24000 * 0.1) + (8333 * 0.25) + (taxableIncome - 32333) * 0.3;
    }
    /*  personal relief of KES 2,400 */
    return(tax - 2400);
}


// Visa Fee Calculator Script
document.addEventListener('DOMContentLoaded', function() {
    // Get the calculate button and add click event
    const calculateBtn = document.getElementById('calculateFeeBtn');
    if (calculateBtn) {
        calculateBtn.addEventListener('click', calculateVisaFee);
    }
    
    // Function to calculate visa fees
    function calculateVisaFee() {
        // Get form values
        const country = document.getElementById('destinationCountry').value;
        const visaType = document.getElementById('visaType').value;
        const entryType = document.getElementById('entryType').value;
        const processingTime = document.getElementById('processingTime').value;
        const applicantCount = parseInt(document.getElementById('applicantCount').value) || 1;
        
        // Check if required fields are filled
        if (!country || !visaType) {
            alert('Please select both destination country and visa type');
            return;
        }
        
        // Get additional services
        const documentAssistance = document.getElementById('documentAssistance').checked;
        const formFilling = document.getElementById('formFilling').checked;
        const interviewPrep = document.getElementById('interviewPrep').checked;
        
        // Base embassy fees (simplified example)
        let embassyFee = 0;
        
        // Set base embassy fees based on country and visa type
        if (country === 'china') {
            if (visaType === 'tourist') embassyFee = 4500;
            else if (visaType === 'business') embassyFee = 6000;
            else if (visaType === 'student') embassyFee = 5000;
            else embassyFee = 5500;
        } else if (country === 'thailand') {
            if (visaType === 'tourist') embassyFee = 3500;
            else if (visaType === 'business') embassyFee = 5000;
            else embassyFee = 4500;
        } else if (country === 'malaysia') {
            if (visaType === 'tourist') embassyFee = 3000;
            else if (visaType === 'business') embassyFee = 4500;
            else embassyFee = 4000;
        } else if (country === 'singapore') {
            if (visaType === 'tourist') embassyFee = 4000;
            else if (visaType === 'business') embassyFee = 5500;
            else embassyFee = 5000;
        } else if (country === 'japan') {
            if (visaType === 'tourist') embassyFee = 5000;
            else if (visaType === 'business') embassyFee = 7000;
            else if (visaType === 'student') embassyFee = 6000;
            else embassyFee = 6500;
        } else if (country === 'uae') {
            if (visaType === 'tourist') embassyFee = 6000;
            else if (visaType === 'business') embassyFee = 8000;
            else embassyFee = 7000;
        } else if (country === 'uk') {
            if (visaType === 'tourist') embassyFee = 12000;
            else if (visaType === 'business') embassyFee = 15000;
            else if (visaType === 'student') embassyFee = 14000;
            else embassyFee = 16000;
        } else if (country === 'usa') {
            if (visaType === 'tourist') embassyFee = 16000;
            else if (visaType === 'business') embassyFee = 16000;
            else if (visaType === 'student') embassyFee = 16000;
            else embassyFee = 18000;
        } else if (country === 'schengen') {
            if (visaType === 'tourist') embassyFee = 8000;
            else if (visaType === 'business') embassyFee = 9000;
            else embassyFee = 8500;
        } else if (country === 'australia') {
            if (visaType === 'tourist') embassyFee = 14000;
            else if (visaType === 'business') embassyFee = 16000;
            else if (visaType === 'student') embassyFee = 15000;
            else embassyFee = 17000;
        } else if (country === 'canada') {
            if (visaType === 'tourist') embassyFee = 15000;
            else if (visaType === 'business') embassyFee = 17000;
            else if (visaType === 'student') embassyFee = 16000;
            else embassyFee = 18000;
        } else {
            embassyFee = 5000; // Default for other countries
        }
        
        // Adjust for entry type
        if (entryType === 'multiple') {
            embassyFee = Math.round(embassyFee * 1.5); // 50% more for multiple entry
        }
        
        // Service charge (typically 20-30% of embassy fee)
        let serviceCharge = Math.round(embassyFee * 0.25);
        
        // Adjust for processing time
        if (processingTime === 'express') {
            serviceCharge = Math.round(serviceCharge * 1.5); // 50% more for express
        } else if (processingTime === 'urgent') {
            serviceCharge = Math.round(serviceCharge * 2); // 100% more for urgent
        }
        
        // Additional services fees
        let additionalFee = 0;
        if (documentAssistance) additionalFee += 1500;
        if (formFilling) additionalFee += 1000;
        if (interviewPrep) additionalFee += 2500;
        
        // Calculate total for one applicant
        let totalFeePerPerson = embassyFee + serviceCharge + additionalFee;
        
        // Multiply by number of applicants
        embassyFee = embassyFee * applicantCount;
        serviceCharge = serviceCharge * applicantCount;
        // Additional fee is per application, not per person for document assistance and form filling
        if (interviewPrep) {
            additionalFee = additionalFee * applicantCount;
        } else {
            additionalFee = 1500 * (documentAssistance ? 1 : 0) + 1000 * (formFilling ? 1 : 0) + 2500 * (interviewPrep ? applicantCount : 0);
        }
        
        // Calculate total fee
        const totalFee = embassyFee + serviceCharge + additionalFee;
        
        // Display the results
        document.getElementById('embassyFee').textContent = '৳ ' + embassyFee.toLocaleString();
        document.getElementById('serviceCharge').textContent = '৳ ' + serviceCharge.toLocaleString();
        document.getElementById('additionalFee').textContent = '৳ ' + additionalFee.toLocaleString();
        document.getElementById('totalFee').textContent = '৳ ' + totalFee.toLocaleString();
        
        // Show the result section
        document.getElementById('feeResult').classList.remove('d-none');
    }
});

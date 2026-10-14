document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevents default HTTP POST action
            const emailInput = document.getElementById('email').value;
            
            // In a production environment, you would execute an asynchronous fetch() request to an API endpoint here.
            console.log(`Demo requested for email: ${emailInput}`);
            alert("Thank you! Our sales team will reach out shortly.");
            contactForm.reset();
        });
    }
});
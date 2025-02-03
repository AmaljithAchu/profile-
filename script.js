document.addEventListener("DOMContentLoaded", function () {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwFVEIoE_WLG9nGEFcbCmISFZ081M2KzETKzxual41ccYrNESJiNJ0G5jeOZ-B_NNhl3Q/exec';
    const form = document.forms['contact-form'];

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch(scriptURL, { 
                method: 'POST', 
                body: new FormData(form) 
            });

            if (response.ok) {
                alert("Thank you! Your message has been sent successfully.");
                form.reset();  // Clear the form fields

                // Redirect to index.html after a short delay
                setTimeout(() => {
                    window.location.href = "index.html"; 
                }, 1000); // Redirect after 2 seconds
            } else {
                throw new Error('Form submission failed.');
            }
        } catch (error) {
            console.error('Error:', error.message);
            alert("Something went wrong. Please try again.");
        }
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents form from submitting the default way

    // Hide the form and show the thank you message
    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('thankYouMessage').style.display = 'block';
});
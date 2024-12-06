// Function to handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    
    // Get the form input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simple form validation (optional)
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }
    
    // Display a success message (you can replace this with an actual email API or backend call)
    alert(`Thank you, ${name}! Your message has been sent successfully.`);
    
    // Optionally, reset the form after submission
    document.getElementById('contact-form').reset();
});

// Function to show/hide project details
function toggleProjectDetails(projectId) {
    const details = document.getElementById(projectId);
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
}

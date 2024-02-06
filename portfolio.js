document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded');
    document.getElementById('contact-me-form').addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Message sent successfully!');
       
    });
});
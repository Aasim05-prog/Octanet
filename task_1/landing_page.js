document.getElementById('cta-button').addEventListener('click', function() {
    alert('Thank you for joining! Check your email for the next steps.');
});

// Accordion functionality
const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
    header.addEventListener('click', function() {
        const content = this.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
});

function scrollToSection(sectionId) {{
    var section = document.getElementById('sectionToScrollTo')
    section.scrollIntoView({behavior: 'smooth'})
    };

    // Update the active class on the buttons
    const tablinks = document.querySelectorAll('.tablinks');
    tablinks.forEach(button => {
        button.classList.remove('active');
    });

    // Find the button that corresponds to the sectionId and add the active class
    const activeButton = document.querySelector(`button[onclick="scrollToSection('${sectionId}')"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Form submitted!');
    });
});

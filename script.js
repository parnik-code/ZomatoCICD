// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Handle location selector change
    const locationSelector = document.querySelector('.location-selector select');
    if (locationSelector) {
        locationSelector.addEventListener('change', function() {
            const selectedLocation = this.value;
            // Update localities section title
            const localitiesTitle = document.querySelector('.localities h2');
            if (localitiesTitle) {
                localitiesTitle.textContent = `Popular localities in and around ${selectedLocation}`;
            }
        });
    }

    // Handle search input
    const searchInput = document.querySelector('.search-box input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            // You could implement search functionality here
            console.log('Searching for:', searchTerm);
        });
    }

    // Handle app link sharing
    const shareButton = document.querySelector('.input-group button');
    if (shareButton) {
        shareButton.addEventListener('click', function() {
            const emailInput = document.querySelector('.input-group input');
            const email = emailInput.value;
            if (email) {
                alert('App link has been sent to your email!');
                emailInput.value = '';
            } else {
                alert('Please enter your email address');
            }
        });
    }

    // Handle radio button toggle for app link sharing
    const radioButtons = document.querySelectorAll('.radio-group input[type="radio"]');
    const emailInput = document.querySelector('.input-group input');
    
    radioButtons.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.id === 'email') {
                emailInput.type = 'email';
                emailInput.placeholder = 'Email';
            } else {
                emailInput.type = 'tel';
                emailInput.placeholder = 'Phone Number';
            }
        });
    });

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add hover effect for collection cards
    const collectionCards = document.querySelectorAll('.collection-card');
    collectionCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}); 
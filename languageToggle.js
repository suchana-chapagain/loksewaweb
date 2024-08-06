// Get elements
var languageToggle = document.getElementById('language-toggle');
var elements = document.querySelectorAll('[data-en]');
var inputs = document.querySelectorAll('input[data-en-placeholder]');

// Function to apply language preference
function applyLanguagePreference() {
    var selectedLanguage = localStorage.getItem('selectedLanguage') || 'en'; // Default to 'en' if no preference is saved

    elements.forEach(function (element) {
        element.textContent = element.getAttribute('data-' + selectedLanguage);
    });

    inputs.forEach(function (input) {
        input.setAttribute('placeholder', input.getAttribute('data-' + selectedLanguage + '-placeholder'));
    });

    // Set the toggle state based on the saved preference
    if (languageToggle) {
        languageToggle.checked = selectedLanguage === 'ne';
    }
}

// Event listener for language toggle
if (languageToggle) {
    languageToggle.addEventListener('change', function () {
        var newLang = this.checked ? 'ne' : 'en';

        // Save the selected language in localStorage
        localStorage.setItem('selectedLanguage', newLang);

        elements.forEach(function (element) {
            element.textContent = element.getAttribute('data-' + newLang);
        });

        inputs.forEach(function (input) {
            input.setAttribute('placeholder', input.getAttribute('data-' + newLang + '-placeholder'));
        });
    });
}

// Apply language preference on script load
applyLanguagePreference();

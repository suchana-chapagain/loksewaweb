document.getElementById('language-toggle').addEventListener('click', function() {
    const currentLang = this.innerText.includes('Nepali') ? 'en' : 'ne';
    const newLang = currentLang === 'en' ? 'ne' : 'en';
    
    document.querySelectorAll('[data-en]').forEach(el => {
      el.innerText = el.getAttribute(`data-${newLang}`);
    });
  
    this.innerText = currentLang === 'en' ? 'Switch to English' : 'Switch to Nepali';
  });
  
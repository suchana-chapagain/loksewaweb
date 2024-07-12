document.getElementById('language-toggle').addEventListener('change', function () {
  var elements = document.querySelectorAll('[data-en]'); // Select all elements with data-en attribute
  var newLang = this.checked ? 'ne' : 'en';

  elements.forEach(function (element) {
      element.textContent = element.getAttribute('data-' + newLang);
  });
});
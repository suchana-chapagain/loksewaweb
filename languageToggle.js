document.getElementById('language-toggle').addEventListener('change', function () {
  var elements = document.querySelectorAll('[data-en]'); // Select all elements with data-en attribute
  var inputs = document.querySelectorAll('input[data-en-placeholder]');
  var newLang = this.checked ? 'ne' : 'en';

  elements.forEach(function (element) {
      element.textContent = element.getAttribute('data-' + newLang);
  });

  inputs.forEach(function (input) {
    input.setAttribute('placeholder', input.getAttribute('data-' + newLang + '-placeholder'));
});
});
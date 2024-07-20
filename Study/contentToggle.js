document.addEventListener("DOMContentLoaded", function() {
  const modelSelect1 = document.querySelector("#modelSelect1");
  const modelSelect2 = document.querySelector("#modelSelect2");
  const modelSelect3 = document.querySelector("#modelSelect3");
  const gkSelect1 = document.querySelector("#gkSelect1");
  const gkSelect2 = document.querySelector("#gkSelect2");
  const gkSelect3 = document.querySelector("#gkSelect3");
  const set1 = document.querySelector(".set1");
  const set2 = document.querySelector(".set2");
  const topic1 = document.querySelector(".topic1");
  const topic2 = document.querySelector(".topic2");

  modelSelect1.addEventListener('click', function() {
    set1.style.display = "block";
    set2.style.display = "none";
  });

  modelSelect2.addEventListener('click', function() {
    set1.style.display = "none";
    set2.style.display = "block";
  });

  gkSelect1.addEventListener('click', function() {
    topic1.style.display = "block";
    topic2.style.display = "none";
  });

  gkSelect2.addEventListener('click', function() {
    topic1.style.display = "none";
    topic2.style.display = "block";
  });
});

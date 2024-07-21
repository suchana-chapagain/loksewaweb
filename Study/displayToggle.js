var selectMode = document.getElementById("selectMode");
const modelDiv = document.querySelector("#modelDiv");
const gkDiv = document.querySelector("#gkDiv");
const jobDiv = document.querySelector("#jobDiv");
var model = document.getElementById("modelContent");
var gk = document.getElementById("gkContent");
var job = document.getElementById("jobContent");

modelDiv.addEventListener('click' , function() {
  job.style.display = "none";
  gk.style.display = "none";
  model.style.display = "initial";
  selectMode.style.display = "none";
})

gkDiv.addEventListener('click' , function() {
  job.style.display = "none";
  model.style.display = "none";
  gk.style.display = "initial";
  selectMode.style.display = "none";
})

jobDiv.addEventListener('click' , function() {
  model.style.display = "none";
  gk.style.display = "none";
  job.style.display = "initial";
  selectMode.style.display = "none";
})
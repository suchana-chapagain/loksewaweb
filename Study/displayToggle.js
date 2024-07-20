var selectMode = document.getElementById("selectMode");
const modelDiv = document.querySelector("#modelDiv");
const gkDiv = document.querySelector("#gkDiv");
var model = document.getElementById("modelContent");
var gk = document.getElementById("gkContent");
modelDiv.addEventListener('click' , function() {
  gk.style.display = "none";
  model.style.display = "initial";
  selectMode.style.display = "none";
})

gkDiv.addEventListener('click' , function() {
  model.style.display = "none";
  gk.style.display = "initial";
  selectMode.style.display = "none";
})
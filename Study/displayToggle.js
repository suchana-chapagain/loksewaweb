


var selectMode = document.getElementById("selectMode");
const modelDiv = document.querySelector("#modelDiv");
const gkDiv = document.querySelector("#gkDiv");
const jobDiv = document.querySelector("#jobDiv");
var model = document.getElementById("content");
var gk = document.getElementById("content");
var job = document.getElementById("content");
var mslide = document.getElementById("modelSlide");
var gslide = document.getElementById("gkSlide");
var jslide = document.getElementById("jobSlide");

modelDiv.addEventListener('click' , function() {
  model.style.display = "initial";
  mslide.style.display = "initial"
  gslide.style.display = "none";
  jslide.style.display = "none";
  selectMode.style.display = "none";
})

gkDiv.addEventListener('click' , function() {
  gk.style.display = "initial";
  gslide.style.display = "initial"
  mslide.style.display = "none";
  jslide.style.display = "none";
  selectMode.style.display = "none";
})

jobDiv.addEventListener('click' , function() {
  job.style.display = "initial";
  jslide.style.display = "initial"
  mslide.style.display = "none";
  gslide.style.display = "none";
  selectMode.style.display = "none";
})
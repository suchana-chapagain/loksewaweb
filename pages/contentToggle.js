var listSelect1 = document.querySelector("#listSelect1");
var listSelect2 = document.querySelector("#listSelect2");
var listSelect3 = document.querySelector("#listSelect3");
var set1 = document.querySelector("#set1");
var set2 = document.querySelector("#set2");

listSelect1.addEventListener('click', function() {
    set1.style.display = "initial";
    set2.style.display = "none";
})

listSelect2.addEventListener('click', function() {
    set1.style.display = "none";
    set2.style.display = "initial";
})

// function listSelect1(){
//     set1.style.display = "initial";
//     set2.style.display = "none";
// }

// function listSelect2(){
//     set1.style.display = "none";
//     set2.style.display = "initial";
// }
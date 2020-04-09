const marriage = [];
const funeral = [];
const church = [];


function madlib(){
  populateMarriage();
  window.location.href = "file:///Users/selena/Desktop/2019Projects/madlibs/marriage_form.html";
  //window.onload = showForm();
  //showForm();
}
function showForm(){
  for ( var i=0; i < marriage.length; i++){
    console.log("0000000000");
    //console.log("");
    //form input label
    var newDivForm = document.createElement("div");
    newDivForm.classList.add("form-group");
    //style the label
    var space = newDivForm.style.marginRight;
    space = "10px";

    var newContent = document.createTextNode(marriage[i] + "  ");
    newDivForm.appendChild(newContent);

    var inputForm = document.createElement("input");
    newDivForm.appendChild(inputForm);

    var currentDiv = document.getElementById("form");
    //var parentDiv = document.getElementById("marriage_form");
    //parentDiv.insertBefore(newDivForm, currentDiv);
    console.log("0000000000");
    document.body.insertBefore(newDivForm, currentDiv);
    console.log("0000000000");

  }
}
function populateMarriage(){
  marriage.push("Adjective");
  marriage.push("Noun");
  marriage.push("Adjective");
  marriage.push("Noun");
}
function populateFuneral(){

}
function populateChurch(){

}

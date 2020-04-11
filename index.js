const marriage = [];
const funeral = [];
const church = [];

function marriage_madlib(){
  hideButtons();
  populateMarriage();
  for ( var i=0; i < marriage.length; i++){
    //can't pass an array in JS so just loop through array and pass each elem one at a time
    showForm(marriage[i], i);

  }
  /*
  for ( var i=0; i < marriage.length; i++){
    var newInput = document.getElementById("i");
    newInput.classList.add("form-items");
  }
  */
  var title = document.getElementById("title");
  title.innerHTML = "Marriage Advice";
  addSubmitButton();
  //var submit = document.getElementById("submit_button");
  //submit.onclick = showMarriageMadlib();

}

function showForm(word_type, id_num){
    //form input label
    var newDivForm = document.createElement("div");
    newDivForm.classList.add("form-group");
    //style the label
    var space = newDivForm.style.marginRight;
    space = "10px";


    var newContent = document.createTextNode(word_type + "  ");
    newDivForm.appendChild(newContent);

    var inputForm = document.createElement("input");
    inputForm.setAttribute("id", id_num);
    newDivForm.appendChild(inputForm);


    var body = document.getElementById("form");
    body.appendChild(newDivForm);
    /*
    var currentDiv = document.getElementById("form");
    var parentDiv = document.getElementById("madlibs-card");
    parentDiv.insertBefore(newDivForm, currentDiv);
    //document.body.insertBefore(newDivForm, currentDiv)
    /*
    var body = document.getElementById("b");
    body.appendChild(button);
    */
}
function populateMarriage(){
  marriage.push("Exclamation");
  marriage.push("Adjective");
  marriage.push("Verb");
  marriage.push("Noun/Plural Noun");
  marriage.push("Verb");
  marriage.push("Noun/Plural Noun");
}
function populateFuneral(){

}
function populateChurch(){

}
//only called in index.html
function hideButtons(){
  document.getElementById("marriage_button").style.visibility = "hidden";
  document.getElementById("funeral_button").style.visibility = "hidden";
  document.getElementById("church_button").style.visibility = "hidden";
}

function hideForm(){
  document.getElementById("form").style.visibility = "hidden";
  //to hide the form
}

function addSubmitButton(){
  var button = document.createElement("button");
  button.innerHTML = "Submit";
  button.classList.add("btn");
  button.classList.add("btn-primary");
  button.setAttribute("id", "submit_button");
  button.setAttribute("onclick", "showMarriageMadlib();");
  //button.onclick = showMarriageMadlib();
  var body = document.getElementById("form");
  body.appendChild(button);
}
/*
var madlib = document.createElement("p");
var paragraph = document.createTextNode("When I heard you were getting married, I immediadtly thought "+ document.getElementById("0").value
  + "! You are going to be the most " + document.getElementById("1").value + " bride ever! Before the big day, be sure to "
  + document.getElementById("2").value + " your " + document.getElementById("3").value + " and " + document.getElementById("5").value + " your "
  + document.getElementById("5").value );
  madlib.appendChild(paragraph);
  madlib.setAttribute("id", "marriage-madlib");
  madlib.style.visibility = "hidden";
  var body = document.getElementById("madlibs-card");
  body.appendChild(madlib);
*/

function showMarriageMadlib() {
  hideForm();
  var madlib = document.createElement("p");
  var paragraph = document.createTextNode("When I heard you were getting married, I immediadtly thought "+ document.getElementById("0").value
    + "! You are going to be the most " + document.getElementById("1").value + " bride ever! Before the big day, be sure to "
    + document.getElementById("2").value + " your " + document.getElementById("3").value + " and " + document.getElementById("5").value + " your "
    + document.getElementById("5").value );
    madlib.appendChild(paragraph);

  //$('#output').append(madlib);
  var body = document.getElementById("madlibs-card");
  body.appendChild(madlib);
}

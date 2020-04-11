const marriage = [];
const funeral = [];
const church = [];


function marriage_madlib(){
  populateMarriage();
  for ( var i=0; i < marriage.length; i++){
    showForm(marriage[i], i);
  }
  var title = document.getElementById("title");
  title.innerHTML = "Marriage Advice";
  addSubmitButton();
  var submit = document.getElementById("submit_button");
  submit.onclick = showMarriageMadlib();

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


    var currentDiv = document.getElementById("form");
    var parentDiv = document.getElementById("madlibs-card");
    parentDiv.insertBefore(newDivForm, currentDiv);
    //document.body.insertBefore(newDivForm, currentDiv)
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
function hideButtons(){
  document.getElementById("marriage_button").style.visibility = "hidden";
  document.getElementById("funeral_button").style.visibility = "hidden";
  document.getElementById("church_button").style.visibility = "hidden";
}
function addSubmitButton(){
  var button = document.createElement("button");
  button.innerHTML = "Submit";
  button.classList.add("btn");
  button.classList.add("btn-primary");
  button.setAttribute("id", "submit_button");
  var body = document.getElementById("madlibs-card");
  body.appendChild(button);
}

function showMarriageMadlib() {
  var madlib = "<p>When I heard you were getting married, I immediadtly thought"+ document.getElementById("0").value
    + "! You are going to be the most" + document.getElementById("1").value + "bride ever! Before the big day, be sure to"
    + document.getElementById("1").value;
  $('#output').append(madlib);
}


function showForm(){
  for ( var i=0; i < marriage.length; i++){
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
    var parentDiv = document.getElementById("marriage_form");
    parentDiv.insertBefore(newDivForm, currentDiv);

  }
}

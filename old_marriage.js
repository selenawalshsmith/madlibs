function madlibs(){
  var adj_1 = document.getElementById("adj_1");
  console.log(adj_1.value);
  var marriage_0 = document.getElementById("marriage_0");
  marriage_0.value = adj_1.value;

}

//dynamically render form elements
/*
--- placeholder of each form matches an array correspond to the topic
--- marriage[0]= Adjective
--- marriage[1]= Noun
--- marriage[2]= Adjective
--- marriage[3]= Noun

<div class="form-group">
  <input class="form-control" id="adj_0" placeholder="marriage[3]">
</div>
*/
const marriage = [];
const funeral = [];
const church = [];
function createForm(){


    marriage.push("Adjective");
    marriage.push("Noun");
    marriage.push("Adjective");
    marriage.push("Noun");

// if topic button clicked == marriage
      showMarriageForm();

    //document.writeln("<div class="form-group"><input class="form-control" id="adj_0" placeholder="marriage[3]"></div>");
}
function showMarriageForm(){
  for ( var i=0; i < marriage.length; i++){

    var newDivForm = document.createElement("div");
    newDivForm.classList.add("form-group");
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
/*
**********************************
**********************************
**********************************
**********************************

const madlibsForms = [];
const childElement, appendChildElement, parentElement;

//create madlibsForms form input box
madlibsForms.push({wordType: 'Adjective'});
madlibsForms.push({wordType: 'Adjective'});
madlibsForms.push({wordType: 'Adjective'});
madlibsForms.push({wordType: 'Adjective'});
*/
//document.writeIn("<div class="form-group"><input class="form-control" id="adj_0" placeholder="marriage[3]"></div>");

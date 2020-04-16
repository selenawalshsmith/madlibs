const marriage = [];
const dating = [];
const toast = [];
var topic;
function toast_madlib(){
  topic = "toast";
  hideButtons();
  populateToast();
  for ( var i=0; i < toast.length; i++){
    showForm(toast[i], i);
  }
  var title = document.getElementById("title");
  title.innerHTML = "Wedding Toast";
  addSubmitButton();
}
function dating_madlib(){
  topic ="dating";
  hideButtons();
  populateDating();
  for ( var i=0; i < dating.length; i++){
    showForm(dating[i], i);
  }
  var title = document.getElementById("title");
  title.innerHTML = "Dating Advice";
  addSubmitButton();
}

function marriage_madlib(){
  topic ="marriage";
  hideButtons();
  populateMarriage();
  for ( var i=0; i < marriage.length; i++){
    //can't pass an array in JS so just loop through array and pass each elem one at a time
    showForm(marriage[i], i);
  }
  var title = document.getElementById("title");
  title.innerHTML = "Marriage Advice";
  addSubmitButton();
}

function showForm(word_type, id_num){
    //form input label
    var newDivForm = document.createElement("div");
    newDivForm.classList.add("form-group");
    //style the label
    var space = newDivForm.style.marginRight;
    space = "10px";
    //newDivForm.style.cssFloat = "left";


    var newContent = document.createTextNode(word_type + "  ");
    newDivForm.appendChild(newContent);

    var inputForm = document.createElement("input");
    inputForm.setAttribute("id", id_num);
    newDivForm.appendChild(inputForm);


    //var body = document.getElementById("form");
    var body = document.getElementById("madlibs-cardbody");
    body.appendChild(newDivForm);
}

function populateMarriage(){
  marriage.push("Exclamation");
  marriage.push("Adjective");
  marriage.push("Verb");
  marriage.push("Plural Noun");
  marriage.push("Verb");
  marriage.push("Plural Noun");
}
function populateDating(){
    dating.push("Plural Noun");
    dating.push("Adverb");
    dating.push("Verb");
    dating.push("Article of Clothing");
    dating.push("Body Part");
    dating.push("Adjective");
    dating.push("Noun");
    dating.push("Plural Noun");
    dating.push("Body Part");
    dating.push("Plural Noun");
    dating.push("Body Part");
    dating.push("Noun");
    dating.push("Noun");
    dating.push("Verb");
    dating.push("Adjective");
    dating.push("Adjective");
    dating.push("Verb");
}
function populateToast(){
  toast.push("Name");
  toast.push("Number");
  toast.push("Past Tense Verb");
  toast.push("Place");
  toast.push("Adjective");
  toast.push("Adjective");
  toast.push("Noun");
  toast.push("Noun");
  toast.push("Verb");
  toast.push("Verb");
  toast.push("Verb");
  toast.push("Noun");
  toast.push("Verb");
  toast.push("Verb");
  toast.push("Adjective");
  toast.push("Plural Noun");
}
//only called in index.html
function hideButtons(){
  var marriage_b = document.getElementById("marriage_button");
  var funeral_b = document.getElementById("funeral_button");
  var toast_b= document.getElementById("toast_button");

  var body = document.getElementById("madlibs-cardbody");
  body.removeChild(marriage_b);
  body.removeChild(funeral_b);
  body.removeChild(toast_b);
}

function hideForm(){
  //document.getElementById("form").style.visibility = "hidden";
  var form = document.getElementById("form");
  //var body = document.getElementById("madlibs-cardbody");
  var body = document.getElementById("form-parent");
  body.removeChild(form);

}

function addSubmitButton(){
  var button = document.createElement("button");
  button.innerHTML = "Submit";
  button.classList.add("btn");
  button.classList.add("shadow-none");
  button.style.marginTop = "40px";
  button.setAttribute("id", "submit_button");
  if (topic == "marriage"){ button.setAttribute("onclick", "showMarriageMadlib();");}
  if (topic == "dating"){ button.setAttribute("onclick", "showDatingMadlib();");}
  if (topic == "toast"){ button.setAttribute("onclick", "showToastMadlib();");}


  var body = document.getElementById("madlibs-cardbody");
  body.appendChild(button);
}

function showDatingMadlib(){

  var madlib = document.createElement("p");
  var paragraph = document.createTextNode("It's simple. Turn the " + document.getElementById("0").value
  + " Make him/her want " + document.getElementById("1").value + " to date you. Make sure your'e always dressed to "
  + document.getElementById("2").value + " Each and every day, wear a/an " + document.getElementById("3").value
  + "that you know shows off your " + document.getElementById("4").value + " to " + document.getElementById("5").value +
  " advantage and make your " + document.getElementById("6").value + " look like a million " + document.getElementById("7").value
  +". Even if the two of you make meaningful " + document.getElementById("8").value + " contact, don't admit it. No hugs or "
  + document.getElementById("9").value + ". Just shake his/her " + document.getElementById("10").value
  + " firmly. And remember, when he/she asks you out, even though a chill may run down your "
  + document.getElementById("11").value + " and you can't stop your " + document.getElementById("12").value
  + " from " + document.getElementById("13").value + " just play it "
  + document.getElementById("14").value + ". Take a long pause before answering in a very "
  + document.getElementById("15").value + " voice, I'll have to " + document.getElementById("16").value + " it over.");

  madlib.appendChild(paragraph);
  var body = document.getElementById("madlibs-card");
  body.appendChild(madlib);
  hideForm();
}

function showMarriageMadlib() {
  var madlib = document.createElement("p");
  var paragraph = document.createTextNode("When I heard you were getting married, I immediadtly thought " + document.getElementById("0").value
    + "! You are going to be the most " + document.getElementById("1").value + " bride ever! Before the big day, be sure to "
    + document.getElementById("2").value + " your " + document.getElementById("3").value + " and " + document.getElementById("4").value + " your "
    + document.getElementById("5").value +".");
  madlib.appendChild(paragraph);

  var body = document.getElementById("madlibs-card");
  body.appendChild(madlib);
  hideForm();
}
function showToastMadlib() {
  var madlib = document.createElement("p");
  var paragraph = document.createTextNode("My name is " + document.getElementById("0").value + " and I've known the couple for "
      + document.getElementById("1").value + " years. I " + document.getElementById("2").value + " all the way from "
      + document.getElementById("3").value + " to celebrate this day. I am so " + document.getElementById("4").value
      + " that Chad and Karen are tying the knot! They have to be the most " + document.getElementById("5").value
      + " " + document.getElementById("6").value + " and I wish them " + document.getElementById("7").value
      + " for many years to come. \n My best advice? Don't forget to " + document.getElementById("8").value
      + " before you " + document.getElementById("9").value + " and " + document.getElementById("10").value
      + " after the " + document.getElementById("11").value + ". Chad, you should always " +
      + document.getElementById("12").value + ", and Karen, you should always "
      + document.getElementById("13").value + ". I wish you a lifetime of health, happiness and "
      + document.getElementById("14").value + " " + document.getElementById("15").value);
  madlib.appendChild(paragraph);

  var body = document.getElementById("madlibs-card");
  body.appendChild(madlib);
  hideForm();
}

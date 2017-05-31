window.onload = function(){
  var lists = document.getElementsByTagName("li");
  alert("<p> elements with class subPara: " + lists.length);
  document.title="Manipulating the DOM!";
}


document.onload = function addElement() {
  // create a new div element
  // and give it some content
  var newLi = document.createElement("li");
  var newContent = document.createTextNode("Hi there and greetings!");
  newLi.appendChild(newContent); //add the text node to the newly created div.

  // add the newly created element and its content into the DOM
  document.getElementsByTagName("ul").appendChild(newLi);
}

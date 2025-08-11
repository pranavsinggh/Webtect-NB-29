let div = document.createElement("div");

let body = document.body;
body.appendChild(div);

console.dir(div);

//! Create
//~ setProperty("property","value")
//& Syntax -> element.style.setProperty("property","value")
// div.style.setProperty("width", "300px");
// div.style.setProperty("height", "500px");
// div.style.setProperty("background-color", "red");
// div.style.setProperty("background-color", "black");

//~ propertyName="value"
//& Syntax -> element.style.propertyName="value"
div.style.width = "500px";
div.style.height = "500px";
div.style.backgroundColor = "red";
div.style.backgroundColor = "black";

//~ cssText="property:value ; property:value ; property:value ; ...n"
//& Syntax -> element.style.cssText="property:value ; property:value ; property:value ; ...n"
// div.style.cssText = "width:500px ; height:500px ;  background-color:red";
// div.style.cssText = "background-color:black";

//! Read
// getPropertyValue()
//& Syntax -> element.style.getPropertyValue("property")
console.log(div.style.getPropertyValue("height"));          //500px
console.log(div.style.getPropertyValue("width"));           //500px
console.log(div.style.getPropertyValue("background-color"));//black

//! Delete
//& Syntax -> element.style.removeProperty("property")
// div.style.removeProperty("width");
// div.style.removeProperty("background-color");
// div.style.removeProperty("height")

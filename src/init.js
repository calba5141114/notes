var getComp = document.getElementById("getComp");
var submit = document.getElementById("submit");
var bricksArray = [];

//accessing DOM
var componentNameUI = document.getElementById("stuff2");
var componentTypeUI = document.getElementById("stuff1");
var componentContentUI = document.getElementById("stuff3");

// data

function Brick(componentName, componentType, componentContent) {
  this.componentName = componentName;
  this.componentType = componentType;
  this.componentContent = componentContent;
  // this.styles = styles;
}

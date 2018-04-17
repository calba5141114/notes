var getComp = document.getElementById("getComp");
var submit = document.getElementById("submit");
var bricksArray = [];
var componentNameUI = document.getElementById("stuff2");
var componentTypeUI = document.getElementById("stuff1");
var componentContentUI = document.getElementById("stuff3");
var done = document.getElementById('done');


class Brick {
  constructor(componentName, componentType, componentContent) {
    this.componentName = componentName.value;
    this.componentType = componentType.value;
    this.componentContent = componentContent.value;
  }
}


function setup(brick) {
  var component = `< ${brick.componentType} class ="${brick.componentName}"> ${brick.componentContent} </ ${brick.componentType}>`;
  return component;
}

function Publish(brick) {
  var node = document.createElement("div");
  var textnode = document.createTextNode(setup(brick));
  node.appendChild(textnode);
  document.getElementById("Publish").appendChild(node);
 bricksArray.push(brick);
componentNameUI.value = " ";
    componentTypeUI.value = " ";
    componentContentUI.value =" ";
}


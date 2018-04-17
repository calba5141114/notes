
var getComp = document.getElementById("getComp");
var submit = document.getElementById("submit");
var bricksArray = [];
var defunctBricks = [];
var componentNameUI = document.getElementById("stuff2");
var componentTypeUI = document.getElementById("stuff1");
var componentContentUI = document.getElementById("stuff3");
var isEdit = false;
var editMenu = document.getElementById('editMenu');

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

function Publish() {
  componentNameUI.value = " ";
  componentTypeUI.value = " ";
  componentContentUI.value = " ";
  var printThis = "";
  for (var i = 0; i < bricksArray.length; i++) {
    printThis += "<br>" + setup(bricksArray[i]);
  }
  return printThis; // <-- to be printed to the div
}

function reversePublish(bricksArray) {
  let justUndone = bricksArray.length;
  defunctBricks.push(bricksArray[justUndone]);
  bricksArray.pop();
}
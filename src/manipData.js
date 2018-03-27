function setup(brick) {
  var component =
    "<" +
    brick.componentType +
    " " +
    'class="' +
    brick.componentName +
    '">' +
    " " +
    brick.componentContent +
    " " +
    "</" +
    brick.componentType +
    ">";
  console.log(component);
}

// this.componentName = componentName;
// this.componentType = componentType;
// this.componentContent = componentContent;

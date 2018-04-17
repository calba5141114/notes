submit.onclick = () => {
    var c = new Brick(componentNameUI, componentTypeUI, componentContentUI);
    bricksArray.push(c);
    console.log(c);
    document.getElementById('Publish').innerHTML = Publish();
    isEdit = true;
    if (isEdit) {
        editMenu.innerHTML = `<br><button id = "undo" class = "btn btn-dark w-25 " onclick="reversePublish(bricksArray)"> undo </button><br> `;
    }
};
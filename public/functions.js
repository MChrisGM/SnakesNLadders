function hideMenu() {
    nameField.hide();
    createLobbyBtn.hide();
    randomLobbyBtn.hide();
    lobbyCode.hide();
    lobbyCodeBtn.hide();
    chatDiv.show();
    chatTextDiv.show();
    chatInput.show();
}

function showMenu() {
    nameField.show();
    createLobbyBtn.show();
    randomLobbyBtn.show();
    lobbyCode.show();
    lobbyCodeBtn.show();
    chatDiv.hide();
    chatTextDiv.hide();
    chatInput.hide();
}

function keyPressed() {
    if (keyCode === ESCAPE) {
        paused = !paused;
    }
    if(keyCode == 84){
      if(moving){
        toggleChat();
      }
    }
    if(keyCode == 13){
      if(chatInput.value()=="" && !moving){
        toggleCanvas();
      }
    }
    // return false; // prevent default
}

function outFunc() {
    document.getElementById("myTooltip").innerHTML = "Copy to clipboard";
}

function setName() {
    socket.emit('username', nameField.value().replaceAll(' ','_'));
}

function copyCode() {
    document.getElementById("myTooltip").innerHTML = "Copied: " + lobby;
    var text = lobby;
    navigator.clipboard.writeText(text).then(function () {
    }, function (err) {
    });
}

function toggleCanvas() {
    moving = true;
    document.getElementById('chatInput').blur();
    canvas.focus();
}

function toggleChat() {
    moving = false;
    document.getElementById('chatInput').focus();
    canvas.blur();
    chatInput.value("");
}

function createCustom() {
    submitName();
    socket.emit('createCustom');
    socket.emit('sendMessage', { name: "", message: "" + player.getUname() + " connected!", time: "" });
}
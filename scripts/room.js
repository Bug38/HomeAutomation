
function toggle(roomTitle) {
    var toToggle = null;
    for (var i = 0; i < roomTitle.parentNode.childNodes.length; i++) {
        if (roomTitle.parentNode.childNodes[i].className == "listDevices") {
            toToggle = roomTitle.parentNode.childNodes[i];
        }
    }
    if (toToggle.style.display == "none") {
        toToggle.style.display = "block";
    }
    else {
        toToggle.style.display = "none";
    }
}


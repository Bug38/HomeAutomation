function usableNames(string) {
    return string = string.replace(/ /g, "_");
}


function showDevices(setup) {

    var devices = setup.devices;

    for (var i = 0; i < setup.rooms.length; i++) {
        var room = setup.rooms[i];
        if (devices[room] !== undefined) {

            var listDevices = document.createElement('ul');
            listDevices.className = "listDevices";

            for (var j = 0; j < devices[room].devices.length; j++) {
                var device = document.createElement('li');
                device.className = "deviceTile";
                var title = document.createElement('div');
                title.appendChild(document.createTextNode(devices[room].devices[j].name));
                title.className = "deviceTitle";
                var icon = document.createElement('div');
                icon.className = "deviceIcon";
                var toggle = document.createElement('label');
                toggle.className = "switch";
                toggle.innerHTML = "<input type=\"checkbox\">" + "<span class=\"slider\"></span>";
                device.appendChild(title);
                device.appendChild(icon);
                device.appendChild(toggle);

                listDevices.appendChild(device);
            }

            document.getElementById(room).appendChild(listDevices);

        } else{
            document.getElementById(room).style.display = "none";
        }
    }
}

function showRooms(rooms) {
    // Create main list
    var listRooms = document.createElement('ul');
    listRooms.className = "listRooms";

    // Populate each room
    for (var i = 0; i < rooms.length; i++) {
        // Create a room
        var room = document.createElement('li');
        room.className = "roomTile";
        room.setAttribute("id", rooms[i]);

        // Set Room title
        var title = document.createElement('div');
        title.appendChild(document.createTextNode(rooms[i]));
        title.className = "roomTitle";
        title.setAttribute("onclick", "toggle(this);");
        room.appendChild(title);

        // Add room to the room list:
        listRooms.appendChild(room);
    }
    document.getElementById("main").appendChild(listRooms);
}


function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', "db/db.json", true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

function loadPage() {
    loadJSON(function (response) {
        var setup = JSON.parse(response);
        showRooms(setup['rooms']);
        showDevices(setup);
    });
}

loadPage();
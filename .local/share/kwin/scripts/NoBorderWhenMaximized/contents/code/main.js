
function onClientMaximizedStateChanged(client, h, v) {
    if (h && v) {
        client.noBorder = true;
    } else {
        client.noBorder = false;
    }
}


function onClientAdded(client) {
    // client.clientMaximizedStateChanged.connect(onClientMaximizedStateChanged); // ambiguous connect
    client['clientMaximizedStateChanged(KWin::AbstractClient*,bool,bool)'].connect(onClientMaximizedStateChanged);
}


// Connect to newly created windows
workspace.clientAdded.connect(onClientAdded);

// Connect to existing windows
var clients = workspace.clientList();
for (var i = 0; i < clients.length; i++) {
    var client = clients[i];
    onClientAdded(client);
}

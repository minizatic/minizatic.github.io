let socket = new WebSocket("wss://radio.bpatches.com/api/live/nowplaying/websocket");

socket.onopen = function(e) {
  socket.send(JSON.stringify({
    "subs": {
      "station:radio": {}
    }
  }));
};

socket.onmessage = function(event) {
  const data = JSON.parse(event.data);
  const np = data?.pub?.data?.np || null;
  if (np) {
    document.getElementById("current-listeners").textContent = np.listeners.current;
  }
};
const socket = io();

if (navigator.geolocation) {
  navigator.geolocation.watchPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      socket.emit("send-location", { latitude, longitude });
    },
    (error) => {
      console.log("error", error);
    }, {
       enableHighAccuracy: true,
       maximunAge: 0,
       timeout: 5000
    }
  ); 
}


const map = L.map("map").setView([0,0], 18) // coordinates, zoom level
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:"TypeAnything"
}).addTo(map)

const markers = {}

socket.on("receive-location", data => {
    const{id, latitude, longitude} = data;
    map.setView([latitude, longitude])
    if(markers[id]){
        markers[id].setLatLng([latitude, longitude])
    } else {
        markers[id] = L.marker([latitude, longitude]).addTo(map)
    }
})

socket.on("user-disconnected", ()=> {
if(marker[id]){
    map.removeLayer(markers[id])
    delete markers[id]
}
})
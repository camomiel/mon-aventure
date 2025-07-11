let earned = 0;
function updateBadges() {
  document.getElementById("badges").innerText = "⭐".repeat(earned);
}
function checkPositionAndAwardBadge(lat, lon) {
  const stops = [
    [39.47, -0.37], [41.29, 2.08], [41.39, 2.17],
    [41.9, 2.76], [42.69, 2.89], [43.61, 3.87],
    [45.76, 4.83], [47.32, 5.04], [48.72, 2.36],
    [48.84, 2.38]
  ];
  stops.forEach((stop, i) => {
    const d = Math.sqrt((lat - stop[0])**2 + (lon - stop[1])**2);
    if (d < 0.1) {
      earned = Math.max(earned, i + 1);
      updateBadges();
    }
  });
}
navigator.geolocation.watchPosition(pos => {
  const lat = pos.coords.latitude;
  const lon = pos.coords.longitude;
  checkPositionAndAwardBadge(lat, lon);
});

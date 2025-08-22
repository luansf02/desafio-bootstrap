function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString("pt-BR");
  document.getElementById("currentTime").textContent = timeString;
}

updateTime();
setInterval(updateTime, 1000);

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  sidebar.classList.toggle("show");
  overlay.classList.toggle("show");
}

function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString("pt-BR");
  document.getElementById("currentTime").textContent = timeString;
}

updateTime();
setInterval(updateTime, 1000);

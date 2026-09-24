function updateClock() {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const clock = document.getElementById("clock");
    if (!clock) return;
    clock.textContent = [hours, minutes, seconds]
        .map((value) => String(value).padStart(2, "0"))
        .join(":");
}

window.setInterval(updateClock, 1000);
updateClock();

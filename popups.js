function openPopup() {
    document.getElementById("aboutWindow").style.display = "block";
}

function closePopup() {
    document.getElementById("aboutWindow").style.display = "none";
}

function openLinks() {
    document.getElementById("linksWindow").style.display = "block";
}

function closeLinks() {
    document.getElementById("linksWindow").style.display = "none";
}
function openWindow(id) {
    const win = document.getElementById(id);

    // random position
    const maxX = window.innerWidth - 420;
    const maxY = window.innerHeight - 320;

    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);

    win.style.left = x + "px";
    win.style.top = y + "px";

    // show first (so animation works)
    win.style.display = "block";

    // small delay so transition triggers properly
    requestAnimationFrame(() => {
        win.classList.add("show");
    });
}

function closeWindow(id) {
    const win = document.getElementById(id);

    win.classList.remove("show");

    // wait for animation before hiding completely
    setTimeout(() => {
        win.style.display = "none";
    }, 180);
}

function closeWindow(id) {
    document.getElementById(id).style.display = "none";
}
function toggleTheme() {
    document.body.classList.toggle("light");
}

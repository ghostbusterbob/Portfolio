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

    const winWidth = 420;
    const winHeight = 320;

    const centerX = (window.innerWidth - winWidth) / 2;
    const centerY = (window.innerHeight - winHeight) / 2;

    // more noticeable randomness but still centered
    const offsetX = (Math.random() - 0.5) * 800; // -100 to +100
    const offsetY = (Math.random() - 0.5) * 700; // -80 to +80

    win.style.left = (centerX + offsetX) + "px";
    win.style.top = (centerY + offsetY) + "px";

    win.style.display = "block";

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
function openWork() {
    document.querySelector(".app-wrapper").classList.add("show-work");
}

function goHome() {
    document.querySelector(".app-wrapper").classList.remove("show-work");
}

function openWindow(id) {
    const win = document.getElementById(id);
    if (!win) return;

    win.style.display = "block";
    win.classList.remove("show");
    const bounds = { width: win.offsetWidth, height: win.offsetHeight };
    const margin = 14;
    const maxLeft = Math.max(margin, window.innerWidth - bounds.width - margin);
    const maxTop = Math.max(margin, window.innerHeight - bounds.height - margin);
    const centerLeft = (window.innerWidth - bounds.width) / 2;
    const centerTop = (window.innerHeight - bounds.height) / 2;
    const spreadX = Math.min(100, maxLeft / 2);
    const spreadY = Math.min(80, maxTop / 2);
    win.style.left = `${Math.min(maxLeft, Math.max(margin, centerLeft + (Math.random() - .5) * spreadX * 2))}px`;
    win.style.top = `${Math.min(maxTop, Math.max(margin, centerTop + (Math.random() - .5) * spreadY * 2))}px`;
    requestAnimationFrame(() => win.classList.add("show"));
}

function closeWindow(id) {
    const win = document.getElementById(id);
    if (!win) return;
    win.classList.remove("show");
    window.setTimeout(() => { win.style.display = "none"; }, 220);
}

function toggleTheme() {
    document.body.classList.toggle("light");
}

function openWork() {
    document.querySelector(".app-wrapper")?.classList.add("show-work");
}

function goHome() {
    document.querySelector(".app-wrapper")?.classList.remove("show-work");
}

async function copyText() {
    const email = "jaysenvanderwal@gmail.com";
    try {
        await navigator.clipboard.writeText(email);
        const status = document.querySelector("#contactWindow .copy-status");
        if (status) status.textContent = "Email address copied to clipboard.";
    } catch {
        const status = document.querySelector("#contactWindow .copy-status");
        if (status) status.textContent = "Copy isn’t available here. Select the email address to copy it.";
    }
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        document.querySelectorAll(".popup-window.show").forEach((win) => closeWindow(win.id));
    }
});

document.querySelectorAll(".popup-window").forEach((win) => {
    const handle = win.querySelector(".popup-bar");
    if (!handle) return;
    handle.style.touchAction = "none";
    handle.style.cursor = "grab";

    handle.addEventListener("pointerdown", (event) => {
        if (event.target.closest("button")) return;
        const rect = win.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;
        handle.setPointerCapture(event.pointerId);
        handle.style.cursor = "grabbing";

        const move = (moveEvent) => {
            const margin = 8;
            const maxLeft = Math.max(margin, window.innerWidth - win.offsetWidth - margin);
            const maxTop = Math.max(margin, window.innerHeight - win.offsetHeight - margin);
            const left = Math.min(maxLeft, Math.max(margin, moveEvent.clientX - offsetX));
            const top = Math.min(maxTop, Math.max(margin, moveEvent.clientY - offsetY));
            win.style.left = `${left}px`;
            win.style.top = `${top}px`;
        };
        const end = () => {
            handle.style.cursor = "grab";
            handle.removeEventListener("pointermove", move);
            handle.removeEventListener("pointerup", end);
            handle.removeEventListener("pointercancel", end);
        };
        handle.addEventListener("pointermove", move);
        handle.addEventListener("pointerup", end);
        handle.addEventListener("pointercancel", end);
    });
});

window.addEventListener("resize", () => {
    document.querySelectorAll(".popup-window[style*='display: block']").forEach((win) => {
        const margin = 8;
        const maxLeft = Math.max(margin, window.innerWidth - win.offsetWidth - margin);
        const maxTop = Math.max(margin, window.innerHeight - win.offsetHeight - margin);
        win.style.left = `${Math.min(maxLeft, Math.max(margin, win.offsetLeft))}px`;
        win.style.top = `${Math.min(maxTop, Math.max(margin, win.offsetTop))}px`;
    });
});

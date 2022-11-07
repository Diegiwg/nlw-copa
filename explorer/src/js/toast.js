const TOAST_NODE = document.getElementById("toast");

function launch_toast(data) {
    TOAST_NODE.querySelector("#toast-img").src = data.icon;
    TOAST_NODE.querySelector("#toast-desc").innerHTML = data.desc;

    TOAST_NODE.className = "show";
    setTimeout(function () {
        TOAST_NODE.className = "";
    }, 5000);
}

export { launch_toast };

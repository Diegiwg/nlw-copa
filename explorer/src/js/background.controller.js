function set_bg_color() {
    let user_bg = window.localStorage.getItem("user-bg");
    if (user_bg == null || user_bg === "") user_bg = ["bg-blue"];
    document.body.classList = [user_bg];

    setTimeout(() => {
        document.body.hidden = false;
    }, 1000);
}

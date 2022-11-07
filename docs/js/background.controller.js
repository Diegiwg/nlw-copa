function set_bg_color() {
    const background = ["bg-blue", "bg-green", "bg-yellow"];
    let user_bg = background[Math.floor(Math.random() * background.length)];
    document.body.classList = [user_bg];

    setTimeout(() => {
        document.body.hidden = false;
    }, 1000);
}

const tema_background = [
    {
        str: "bg-blue",
        title: "Azul",
    },
    {
        str: "bg-green",
        title: "Verde",
    },
    {
        str: "bg-yellow",
        title: "Amarelo",
    },
];

function tema_draw() {
    let user_bg = window.localStorage.getItem("user-bg");
    if (user_bg === undefined || user_bg === null) {
        user_bg =
            tema_background[Math.floor(Math.random() * tema_background.length)];
    } else {
        user_bg = JSON.parse(user_bg);
    }

    document.body.classList = [user_bg.str];
    document.body.hidden = false;
}

function tema_set(theme) {
    window.localStorage.setItem("user-bg", JSON.stringify(theme));
    tema_draw();
}

export { tema_draw, tema_set, tema_background };

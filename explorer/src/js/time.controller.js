let local_times = [];
let time_selecionado = "";

function manipular_cards(valor) {
    document.querySelectorAll(".card").forEach((el) => {
        el.style.display = valor;
    });
    document.querySelectorAll("c-box-data").forEach((el) => {
        el.style.display = valor;
    });
    document.querySelectorAll("c-box-times").forEach((el) => {
        el.style.display = valor;
    });
}

function selecionar_time(time) {
    if (time_selecionado === time) {
        time_selecionado = "";
        return manipular_cards("");
    }

    manipular_cards("none");
    time_selecionado = time;
    document.querySelectorAll(`.${time}`).forEach((el) => {
        el.style.display = "";
        el.parentElement.querySelector("c-box-data").style.display = "";
        el.parentElement.parentElement.style.display = "";
    });
}

function add_script_times(times) {
    local_times = times;

    times.forEach((nome) => {
        document.querySelectorAll(`#${nome}`).forEach((el) => {
            el.onclick = function () {
                selecionar_time(nome);
            };
            el.parentElement.classList.add(nome);
        });
    });
}

export { add_script_times };

import { dados_jogos } from "./calendar.service.js";
import {
    tema_background,
    tema_draw,
    tema_set,
} from "./background.controller.js";

import { add_script_times } from "./time.controller.js";
import { launch_toast } from "./toast.js";

class App {
    node = document.querySelector("#app");
    top_bar = this.node.querySelector("#top-bar");
    cards = this.node.querySelector("#cards");

    times = {};

    new_card(info) {
        let card = document.createElement("div");
        card.className = "card";
        // gerar todos os times do card
        let jogos_html = "";
        info.jogos.forEach((jogo) => {
            this.times[jogo.time_1] = "";
            this.times[jogo.time_2] = "";

            jogos_html += `
                <c-box-times>
                    <img src="./static/icon/${jogo.time_1}.svg" alt="icon ${jogo.time_1}" id="${jogo.time_1}" />
                        ${jogo.horario}
                    <img src="./static/icon/${jogo.time_2}.svg" alt="icon ${jogo.time_2}" id="${jogo.time_2}" />
                </c-box-times>
            `;
        });
        //
        let html = `
            <ul>
                <c-box-data>
                    <c-data>${info.data}</c-data>
                    <c-dia-semana>${info.dia}</c-dia-semana>
                </c-box-data>
                ${jogos_html}
            </ul>
        `;
        //
        card.innerHTML = html;
        this.cards.appendChild(card);
    }
}

tema_draw();
const app = new App();
dados_jogos.forEach((card) => {
    app.new_card(card);
});

// completar sistema de temas
const temas = app.node.querySelector("#action-menu > temas");
tema_background.forEach((el) => {
    let temp = document.createElement("a");
    temp.onclick = function () {
        tema_set(el);
    };
    temp.innerText = el.title;
    temas.appendChild(temp);
});

//
add_script_times(Object.keys(app.times));

function tutorial_1() {
    let temp = window.sessionStorage.getItem("tutorial_1");
    console.log(temp);
    if (temp !== null) return;

    launch_toast({
        icon: "./static/favicon.svg",
        desc: "Clique em um time para visualizar apenas os jogos que ele participa!",
    });

    window.sessionStorage.setItem("tutorial_1", true);
}

tutorial_1();

import { dados_jogos } from "./calendar.service.js";

class App {
    node = document.querySelector("#app");
    top_bar = this.node.querySelector("#top-bar");
    cards = this.node.querySelector("#cards");

    new_card(info) {
        let card = document.createElement("div");
        card.className = "card";
        // gerar todos os times do card
        let jogos_html = "";
        info.jogos.forEach((jogo) => {
            jogos_html += `
                <c-box-times>
                    <img src="/explorer/static/icon/icon=${jogo.time_1}.svg" alt="icon ${jogo.time_1}" />
                        ${jogo.horario}
                    <img src="/explorer/static/icon/icon=${jogo.time_2}.svg" alt="icon ${jogo.time_2}" />
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

const app = new App();
dados_jogos.forEach((card) => {
    console.log(card);
    app.new_card(card);
});

const dados_jogos = [
    {
        data: "20/11",
        dia: "DOMINGO",
        jogos: [
            {
                time_1: "qatar",
                time_2: "ecuador",
                horario: "7:00",
            },
        ],
    },
    {
        data: "21/11",
        dia: "SEGUNDA",
        jogos: [
            {
                time_1: "senegal",
                time_2: "netherlands",
                horario: "7:00",
            },
            {
                time_1: "england",
                time_2: "iran",
                horario: "4:00",
            },
            {
                time_1: "usa",
                time_2: "wales",
                horario: "10:00",
            },
        ],
    },
    {
        data: "22/11",
        dia: "TERÇA",
        jogos: [
            {
                time_1: "france",
                time_2: "australia",
                horario: "10:00",
            },
            {
                time_1: "denmark",
                time_2: "tunisia",
                horario: "4:00",
            },
            {
                time_1: "mexico",
                time_2: "poland",
                horario: "7:00",
            },
            {
                time_1: "argentina",
                time_2: "saudi_arabia",
                horario: "1:00",
            },
        ],
    },
    {
        data: "23/11",
        dia: "QUARTA",
        jogos: [
            {
                time_1: "belgium",
                time_2: "canada",
                horario: "10:00",
            },
            {
                time_1: "spain",
                time_2: "costa_rica",
                horario: "7:00",
            },
            {
                time_1: "germany",
                time_2: "japan",
                horario: "4:00",
            },
            {
                time_1: "morocco",
                time_2: "croatia",
                horario: "1:00",
            },
        ],
    },
    {
        data: "24/11",
        dia: "QUINTA",
        jogos: [
            {
                time_1: "switzerland",
                time_2: "cameroon",
                horario: "1:00",
            },
            {
                time_1: "uruguay",
                time_2: "south_korea",
                horario: "4:00",
            },
            {
                time_1: "portugal",
                time_2: "ghana",
                horario: "7:00",
            },
            {
                time_1: "brazil",
                time_2: "serbia",
                horario: "10:00",
            },
        ],
    },
    {
        data: "25/11",
        dia: "SEXTA",
        jogos: [
            {
                time_1: "iran",
                time_2: "wales",
                horario: "1:00",
            },
            {
                time_1: "qatar",
                time_2: "senegal",
                horario: "4:00",
            },
            {
                time_1: "netherlands",
                time_2: "ecuador",
                horario: "7:00",
            },
            {
                time_1: "england",
                time_2: "usa",
                horario: "10:00",
            },
        ],
    },
    {
        data: "26/11",
        dia: "SÁBADO",
        jogos: [
            {
                time_1: "tunisia",
                time_2: "australia",
                horario: "1:00",
            },
            {
                time_1: "poland",
                time_2: "saudi_arabia",
                horario: "4:00",
            },
            {
                time_1: "france",
                time_2: "denmark",
                horario: "7:00",
            },
            {
                time_1: "argentina",
                time_2: "mexico",
                horario: "10:00",
            },
        ],
    },
    {
        data: "27/11",
        dia: "DOMINGO",
        jogos: [
            {
                time_1: "japan",
                time_2: "costa_rica",
                horario: "1:00",
            },
            {
                time_1: "belgium",
                time_2: "morocco",
                horario: "4:00",
            },
            {
                time_1: "croatia",
                time_2: "canada",
                horario: "7:00",
            },
            {
                time_1: "spain",
                time_2: "germany",
                horario: "10:00",
            },
        ],
    },
    {
        data: "28/11",
        dia: "SEGUNDA",
        jogos: [
            {
                time_1: "serbia",
                time_2: "cameroon",
                horario: "1:00",
            },
            {
                time_1: "south_korea",
                time_2: "ghana",
                horario: "4:00",
            },
            {
                time_1: "brazil",
                time_2: "switzerland",
                horario: "7:00",
            },
            {
                time_1: "portugal",
                time_2: "uruguay",
                horario: "10:00",
            },
        ],
    },
    {
        data: "29/11",
        dia: "TERÇA",
        jogos: [
            {
                time_1: "england",
                time_2: "wales",
                horario: "10:00",
            },
            {
                time_1: "iran",
                time_2: "usa",
                horario: "10:00",
            },
            {
                time_1: "ecuador",
                time_2: "senegal",
                horario: "6:00",
            },
            {
                time_1: "netherlands",
                time_2: "qatar",
                horario: "6:00",
            },
        ],
    },
    {
        data: "30/11",
        dia: "QUARTA",
        jogos: [
            {
                time_1: "denmark",
                time_2: "australia",
                horario: "6:00",
            },
            {
                time_1: "tunisia",
                time_2: "france",
                horario: "6:00",
            },
            {
                time_1: "poland",
                time_2: "argentina",
                horario: "10:00",
            },
            {
                time_1: "saudi_arabia",
                time_2: "mexico",
                horario: "10:00",
            },
        ],
    },
    {
        data: "01/12",
        dia: "QUINTA",
        jogos: [
            {
                time_1: "croatia",
                time_2: "belgium",
                horario: "6:00",
            },
            {
                time_1: "canada",
                time_2: "morocco",
                horario: "6:00",
            },
            {
                time_1: "japan",
                time_2: "spain",
                horario: "10:00",
            },
            {
                time_1: "costa_rica",
                time_2: "germany",
                horario: "10:00",
            },
        ],
    },
    {
        data: "02/12",
        dia: "SEXTA",
        jogos: [
            {
                time_1: "ghana",
                time_2: "uruguay",
                horario: "6:00",
            },
            {
                time_1: "south_korea",
                time_2: "portugal",
                horario: "6:00",
            },
            {
                time_1: "serbia",
                time_2: "switzerland",
                horario: "10:00",
            },
            {
                time_1: "brazil",
                time_2: "cameroon",
                horario: "10:00",
            },
        ],
    },
];

export { dados_jogos };

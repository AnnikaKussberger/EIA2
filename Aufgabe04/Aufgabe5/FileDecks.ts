namespace Aufgabe5 {
    export interface Deck {

        name: string;
        content: string[];
        color: string;
        font: string;
        size: string;
        textColor: string;
    }

    export interface Decks {
        [deckname: string]: Deck;
    }

    export let decks: Decks = {}  // einzelne Kartenspiele
    export function populateDecks() {
        decks["colors"] = {
            name: "colors",
            content: ["green", "blue", "red", "yellow", "orange", "burgundy", "violet", "purple", "turquise", "brown"],
            color: "#e184ca",
            font: "Arial",
            size: "125%",
            textColor: "#001a33"
        };

        decks["sports"] = {
            name: "sports",
            content: ["Handball", "Fuﬂball", "Boxen", "Bogenschieﬂen", "BMX", "Schwimmen", "Triathlon", "Fechten", "Tischtennis", "Ski Alpin", "Polo", "Schach"],
            color: "#ff99ff",
            font: "Times New Roman",
            size: "115%",
            textColor: "#330033"
        };

        decks["cities"] = {
            name: "cities",
            content: ["New York", "Furtwangen", "Kuwait", "Chiang Mai", "Macao", "Helsinki", "Venedig", "Rejkjavik", "Kapstadt", "Sofia", "London","Istanbul", "Warschau", "Turin"],
            color: "#ffb3b3",
            font: "Calibri",
            size: "130%",
            textColor: "dark-gray"
        };
    }
}









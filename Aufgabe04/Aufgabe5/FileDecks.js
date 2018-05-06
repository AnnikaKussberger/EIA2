var Aufgabe5;
(function (Aufgabe5) {
    Aufgabe5.decks = {}; //Objekt
    function populateDecks() {
        Aufgabe5.decks["colors"] = {
            name: "colors",
            content: ["green", "blue", "red", "yellow", "orange", "burgundy", "violet", "purple", "turquise", "brown"],
            color: "#e184ca",
            font: "Arial",
            size: "125%",
            textColor: "#001a33"
        };
        Aufgabe5.decks["sports"] = {
            name: "sports",
            content: ["Handball", "Fu�ball", "Boxen", "Bogenschie�en", "BMX", "Schwimmen", "Triathlon", "Fechten", "Tischtennis", "Ski Alpin", "Polo", "Schach"],
            color: "#ff99ff",
            font: "Times New Roman",
            size: "115%",
            textColor: "#330033"
        };
        Aufgabe5.decks["cities"] = {
            name: "cities",
            content: ["New York", "Furtwangen", "Kuwait", "Chiang Mai", "Macao", "Helsinki", "Venedig", "Rejkjavik", "Kapstadt", "Sofia", "London", "Istanbul", "Warschau", "Turin"],
            color: "#ffb3b3",
            font: "Calibri",
            size: "130%",
            textColor: "dark-gray"
        };
    }
    Aufgabe5.populateDecks = populateDecks;
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=FileDecks.js.map
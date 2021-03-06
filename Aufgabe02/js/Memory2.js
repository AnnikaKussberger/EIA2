var Memory;
(function (Memory) {
    // Variablen deklarieren
    let cardContent = ["Array", "interface", "paragraph", "function", "section", "namespace", "Schleife", "Operator", "Variable", "Typ Annotation"];
    let cardArray = [];
    // leeres Array, in das die letztendlich für das Spiel benötigten Karten als divs hineingespeichert werden
    //Variablen für die Anzahl Spieler und Paare definieren
    let numPairs;
    let numPlayers;
    let playerInfo;
    let cardField;
    //Funktion die im HTML die Karten erstellt
    function createCard(textDerAufDieKarteSoll, _state) {
        let card = document.createElement("div");
        // div wird im HTML erzeugt
        card.innerText = textDerAufDieKarteSoll;
        // Text der im Array textDerAufDieKarteSoll steht soll auf die Karte
        card.setAttribute("class", "card " + _state);
        // Attribut hinzufügen: class = Welches Attribut (hier eine Klasse); card = zugehöriger Wert
        cardArray.push(card);
        // cardArray = Array vom Anfang; Speicher für alle erzeugten Karten
    }
    /******** Dieser Part wurde von Melvin Busch übernommen, da wir nicht wissen, wie es anders gelöst werden kann *********/
    class Player {
        constructor(_name) {
            this.name = _name;
            this.score = 0;
        }
        scoreUp() {
            this.score += 10;
            return this.score;
        }
        show() {
            this.player = document.createElement("div");
            this.player.innerHTML = `
          <span class="player-name">${this.name}</span>
          <span class="player-score">Punkte: ${this.score}</span>`;
            playerInfo.appendChild(this.player);
        }
    }
    /*************** Part Ende *************/
    // Arrays werden gemischt
    function randomMix(_array) {
        // _array = das Array, das gemischt werden soll (bei jedem Durchlauf neu)
        for (let i = _array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [_array[i], _array[j]] = [_array[j], _array[i]];
        }
        return _array;
        // Ausgabe = gemischtes Array
    }
    // Funktion um den Status hidden usw zufällig zu bestimmen
    // Zufallsgenerator als eigene Funktion = ästhetische und funktionelle Gründe 
    function randomState() {
        let randomState = Math.random();
        // zufällige Zahl rein speichern, mit vielen Kommastellen zwischen 0 und 1
        if (randomState <= .5) {
            // 50%ige Wahrscheinlichkeit, dass die Karte verdeckt ist
            return "hidden";
        }
        else if (randomState > .5 && randomState <= .75) {
            // oder wenn: wenn Zahl größer als 0,5 und kleiner gleich 0,75 - dann Status: taken
            return "taken";
        }
        else if (randomState > .75) {
            // oder wenn: Wenn Zahl größer als 0,75 - dann Status: visible
            return "visible";
        }
    }
    function main() {
        // Spieler soll Anzahl der Kartenpaare zwischen 5 und 10 eingeben
        numPairs = parseInt(prompt("Anzahl der Kartenpaare eingeben", "5 - 10 Paare"), 10);
        if (numPairs < 5 || numPairs > 10) {
            numPairs = 8;
        }
        // Wieviele Spieler sollen mitspielen; Abfrage
        numPlayers = parseInt(prompt("Bitte die Anzahl der Spieler eingeben", "nicht mehr als 4 Spieler"), 10);
        numPlayers > 4 ? numPlayers = 4 : numPlayers = numPlayers;
        // DOM abhängige Varaiblen deklarieren
        playerInfo = document.getElementById("player-info");
        cardField = document.getElementById("card-div");
        // Spielkarten werden erzeugt
        for (let i = 0; i < numPairs; i++) {
            createCard(cardContent[i], randomState());
            // Wort an der Stelle i - wird als Übergabeparameter mitgegeben, für 1.Karte des Paars
            createCard(cardContent[i], randomState());
        }
        // Karten werden gemischt mit Funktion randomMix und Inhalt von cardArray
        randomMix(cardArray);
        // Karten werden dem Spielbrett hinzugefügt
        for (let i = 0; i < cardArray.length; i++) {
            cardField.appendChild(cardArray[i]);
        }
        // Spieler Anzeige wird generiert
        for (let i = 0; i < numPlayers; i++) {
            let player = new Player("Spieler " + (i + 1));
            player.show();
        }
    }
    document.addEventListener("DOMContentLoaded", main);
})(Memory || (Memory = {}));
//# sourceMappingURL=Memory2.js.map
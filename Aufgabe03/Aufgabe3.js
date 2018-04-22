var Memory;
(function (Memory) {
    /*Variablen erstellen*/
    let numPlayer = 0; //Anzahl Spieler
    let numPairs = 0; //Anzahl Kartenpaare
    let cardContent = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"]; // Array mit dem Inhalt der Karten
    let cardArray = []; //Leerer Array in den später teile des Inhalts gespeichert werden
    let player = []; // Leerer Array der spÃ¤ter mit dem Inhalt des Scores zu befÃƒÂ¼llen
    let score = [0, 0, 0, 0]; // derzeit score schon fest definiert als 0
    let g = 0; // Variable die hochgezählt wird um später mit der Anzahl Paare verglichen zu werden zur Gratulationb
    // Funktion um den Status der Karten zu mischen: möglich hidden, visible und taken
    function mixStatus() {
        return "hidden"; // ansonsten, also von 0-0.5 soll die Karte hidden sein
    }
    function shuffleCardArray() {
        let i = cardArray.length; // Variable i initialisiert, i ist so groÃƒÅ¸ wie der Array, also 15
        let j = 0; // Variable initialsisiert, Wert ist 0
        let temp = ""; // Variable definiert, typ string, kein Inhalt bisher
        while (--i > 0)
            j = Math.floor(Math.random() * (i + 1));
        temp = cardArray[j]; // 
        cardArray[j] = cardArray[i];
        cardArray[i] = temp;
    }
    function createBoard() {
        let node = document.getElementById("Spielfeld"); // neue Variable node, Aufruf der ID im Html Dokument
        shuffleCardArray(); // Funktion ShuffleCardArry wird aufgerufen dass bei jedem Spiel neu gemischt wird
        let childNodeHTML = ""; // neue variable initialisiert
        childNodeHTML += "<h2>Memoryboard</h2>"; // h2 wird im HTML erzeugt
        childNodeHTML += "<div>"; // div wird im html erzeugt
        for (let i = 0; i < cardArray.length; i++) {
            childNodeHTML += "<div>"; // im html wird ein div erzeugt
            childNodeHTML += "<div id= " + i + " attr = " + i + " class =";
            childNodeHTML += mixStatus(); // Aufruf der Funktion die den Status erzeugt (hidden, taken, visible)
            childNodeHTML += "\">";
            childNodeHTML += cardArray[i]; //card Array wird aufgerufen
            childNodeHTML += "</div></div>"; // divs werden geschlossen
        }
        childNodeHTML += "</div>"; // groÃƒÅ¸es Spielfeld wird geschlossen
        node.innerHTML += childNodeHTML; //Inhalt der Knoten mit childNodeHTML befüllen 
        console.log(childNodeHTML); //Ausgabe von childNodeHTML auf der Konsole
    }
    function playerInfo() {
        let node = document.getElementById("Spielerinfo"); //Aufruf der id im Html Dokument 
        let childNodeHTML = ""; // neue Variable initialisiert
        childNodeHTML += "<div>"; // div im html erzeugt
        for (let i = 0; i < player.length; i++) {
            childNodeHTML += "<div id=Spieler"; // div mit id Spieler im html erzeugt
            childNodeHTML += i;
            childNodeHTML += ">";
            childNodeHTML += "<p>Spielername: "; // paragraph mit Spielername im html erzeugt
            childNodeHTML += player[i]; // Auagabe des Spielernamens 
            childNodeHTML += "</p>";
            childNodeHTML += "<p>Punktestand: "; // paragraph mit dem Punktestand im html erzeugt
            childNodeHTML += score[i]; // Ausgabe des Punktestands
            childNodeHTML += "</p></div>"; // divs werden geschlossen
        }
        childNodeHTML += "</div>"; // div des Playerinfofelds wird geschlossen
        node.innerHTML += childNodeHTML; //Inhalt der Knoten mit childNodeHTML befÃƒÂ¼llen 
        console.log(childNodeHTML); // Auagabe von childNodeHTML uaf der Konsole
    }
    function congratulation() {
        if (g == numPairs) {
            alert("Glückwunsch, du hast das Memory erfolgreich beendet");
        }
    }
    function main() {
        console.log("main"); // Ausgabe "main" auf der Konsole
        // Anzahl der Spieler ermitteln
        let i = true; // initialisierung von i, ist true
        while (i) {
            numPlayer = parseInt(prompt("Bitte wÃ¤hlen Sie zwischen 1 und 4 Spielern"), 10); // popup wird erstellt, 
            if (numPlayer >= 1 && numPlayer <= 4) {
                i = false; // i wird unwahr
            } // Schleife stoppt
        }
        for (let i = 0; i < numPlayer; i++) {
            player[i] = prompt("Bitte Spielernamen " + (i + 1) + " eingeben"); // popup um den Spielernamen einzugeben
            if (player[i] == null) {
                player[i] = "Mickey"; // wird der Spieler Mickey genannt
            }
        }
        // Anzahl der Paare ermitteln
        i = true; // i ist wahr
        while (i) {
            numPairs = parseInt(prompt("Bitte wÃ¤hlen Sie zwischen 5 und 15 Kartenpaaren"), 10); // popup um Anzahl Kartenpaare auszuwÃƒÂ¤hlen
            if (numPairs >= 5 && numPairs <= 15) {
                i = false; // i ist unwahr
            } // Schleife stoppt
        }
        // Kartenpaare erstellen
        for (let i = 0; i < numPairs; i++) {
            cardArray.push(cardContent[i]); // cardContent wird in card Array geladen
            cardArray.push(cardContent[i]); // cardContent wird in card Array geladen; 2x da zwei Karten fÃƒÂ¼r Paar nÃƒÂ¶tig
        }
        // Spielboard wird erzeugt
        createBoard();
        // Spielerinfo wird erzeugt
        playerInfo();
    }
    // main wird ausgefÃƒÂ¼hrt wenn DOM vollstÃƒÂ¤ndig geladen ist
    document.addEventListener("DOMContentLoaded", main);
})(Memory || (Memory = {}));
//# sourceMappingURL=Aufgabe3.js.map
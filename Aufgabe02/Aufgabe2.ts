namespace Memorie {
    /*Variablen erstellen*/
    //Anzahl Spieler
    let numPlayer: number = 0;
    //Anzahl Kartenpaare
    let numPairs: number = 0;

 // Array mit dem Inhalt der Karten
    let cardContent: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
   
    //Leerer Array in den spÃ¤ter teile des Inhalts gespeichert werden
    let cardArray: string[] = [];
    
    // Leerer Array der spter mit dem Inhalt des Scores zu befÃ¼llen
    let player: string[] = [];
    let score: number[] = [0,0,0,0];// derzeit score schon fest definiert als 0



    // Funktion um den Status der Karten zu mischen: mÃ¶glich hidden, visible und taken
    function mixStatus(): string {  //Name der Funktion, Typ-Annotation
        let randomState: number = Math.random(); //Variable randomState erstellt, Math random gibt zufÃ¤llige Zahl zwische 0 und 1
        if (randomState >= 0.75) { 
            return "visible";// wenn math random grÃ¶ÃŸer gleich 0.75 ausgibt, soll die Karte visible sein
        } else if (randomState > 0.5 && randomState < 0.75) {
            return "taken";//wenn math.random zwischen 0.5 und 0.75 ist soll die Karte taken sein
        }
        return "hidden";// ansonsten, also von 0-0.5 soll die Karte hidden sein
    }

  function shuffleCardArray(): void { // Name der Funktion, Typ-Annotoation, Array cardContent wird durchgemischt
        let i: number = cardArray.length; // Variable i initialisiert, i ist so groÃŸ wie der Array, also 15
        let j: number = 0; // Variable initialsisiert, Wert ist 0
        let temp: string = ""; // Variable definiert, typ string, kein Inhalt bisher
        while(--i > 0) // wenn i grÃ¶ÃŸer als 0 ist wird die Schleife ausgefÃ¼hrt, wird nach durchlauf runtergezÃ¤hlt
            j = Math.floor(Math.random() * (i+1));
            temp = cardArray[j]; // 
            cardArray[j] = cardArray[i];
            cardArray[i] = temp;
        
    }

    function createBoard(): void {                  // Spielfeld wird erzeugt
        let node: any = document.getElementById("Spielfeld"); // neue Variable node, Aufruf der ID im Html Dokument
        shuffleCardArray();                         // Funktion ShuffleCardArry wird aufgerufen dass bei jedem Spiel neu gemischt wird
        let childNodeHTML: string = "";             // neue Funktion initialisiert
        childNodeHTML += "<h2>Memoryboard</h2>"; // h2 wird im HTML erzeugt
        childNodeHTML += "<div>";                   // div wird im html erzeugt
        for (let i: number = 0; i < cardArray.length; i++) {// Schleife lÃ¤uft so lange durch , bis i(zu beginn 0) so groÃŸ ist wie die LÃ¤nge des Arrays. I wird nach jedem Durchlauf 1 hochgezÃ¤hlt
            childNodeHTML += "<div>";            // im html wird ein div erzeugt
            childNodeHTML += "<div class=\"";    // Klasse fÃ¼r css einbindung
            childNodeHTML += mixStatus();        // Aufruf der Funktion die den Status erzeugt (hidden, taken, visible)
            childNodeHTML += "\">";                 
            childNodeHTML += cardArray[i];       //card Array wird aufgerufen
            childNodeHTML += "</div></div>";     // divs werden geschlossen
        }
        childNodeHTML += "</div>";                 // groÃŸes Spielfeld wird geschlossen
        node.innerHTML += childNodeHTML;           //Inhalt der Knoten mit childNodeHTML befÃ¼llen 
        
        console.log(childNodeHTML);             //Ausgabe von childNodeHTML auf der Konsole
    }
    
    function playerInfo(): void { //Funktion fÃ¼r die Spielerinfo
        let node: any = document.getElementById("Spielerinfo"); //Aufruf der id im Html Dokument 
        let childNodeHTML: string = ""; // neue Variable initialisiert
        childNodeHTML += "<div>"; // div im html erzeugt
        for(let i: number = 0; i < player.length; i++) { // Schleife lÃ¤uft so lange durch, solange i kleiner als die Anzahl der Spieler ist, i wird nach jedem Durchlauf 1 hochgezÃ¤hlt
            childNodeHTML += "<div id=Spieler";     // div mit id Spieler im html erzeugt
            childNodeHTML += i;
            childNodeHTML += ">";
            childNodeHTML += "<p>Spielername: "; // paragraph mit Spielername im html erzeugt
            childNodeHTML += player[i];          // Auagabe des Spielernamens 
            childNodeHTML += "</p>";
            childNodeHTML += "<p>Punktestand: "; // paragraph mit dem Punktestand im html erzeugt
            childNodeHTML += score[i];           // Ausgabe des Punktestands
            childNodeHTML += "</p></div>";        // divs werden geschlossen
        }
        childNodeHTML += "</div>";              // div des Playerinfofelds wird geschlossen
        node.innerHTML += childNodeHTML;        //Inhalt der Knoten mit childNodeHTML befÃ¼llen 
        
        console.log(childNodeHTML);         // Auagabe von childNodeHTML uaf der Konsole
    }

    function main(): void {     // Hauptfunktion
        console.log("main");   // Ausgabe "main" auf der Konsole
        // Anzahl der Spieler ermitteln
        let i: boolean = true; // initialisierung von i, ist true
        while (i) { // wÃ¤hrend i wahr ist
            numPlayer = parseInt(prompt("Bitte wÃ¤hlen Sie zwischen 1 und 4 Spielern"), 10); // popup wird erstellt, 
            if (numPlayer >= 1 && numPlayer <= 4) { // wenn eine Zahl kleiner als 1 oder grÃ¶ÃŸer als 4eingegeben wird
                i = false;                          // i wird unwahr
            } // Schleife stoppt
        }

        for (let i: number = 0; i < numPlayer; i++) { // Schleife lÃ¤uft solang, wie i kleiner als die Anzahl der Spieler ist
            player[i] = prompt("Bitte Spielernamen " + (i+1) + " eingeben"); // popup um den Spielernamen einzugeben
            if (player[i] == null) { // wenn kein Name eingegeben wird
                player[i] = "Mickey"; // wird der Spieler Mickey genannt
            }
        }

        // Anzahl der Paare ermitteln
        i = true; // i ist wahr
        while (i) { // wÃ¤hrend i wahr ist
            numPairs = parseInt(prompt("Bitte wählen Sie zwischen 5 und 15 Kartenpaaren"), 10); // popup um Anzahl Kartenpaare auszuwÃ¤hlen
            if (numPairs >= 5 && numPairs <= 15) { // wenn Anzahl kleiner als 5 und grÃ¶ÃŸer als 15 ist
                i = false; // i ist unwahr
            } // Schleife stoppt
        }

        // Kartenpaare erstellen
        for (let i: number = 0; i < numPairs; i++) { // Schleife lÃ¤uft so lange durch, wie i kleiner als die Anzahl der Paare ist
            cardArray.push(cardContent[i]); // cardContent wird in card Array geladen
            cardArray.push(cardContent[i]); // cardContent wird in card Array geladen; 2x da zwei Karten fÃ¼r Paar nÃ¶tig
        }

        // Spielboard wird erzeugt
        createBoard();
        
        // Spielerinfo wird erzeugt
        playerInfo();
    }
    // main wird ausgefÃ¼hrt wenn DOM vollstÃ¤ndig geladen ist
    document.addEventListener("DOMContentLoaded", main);
}
namespace Aufgabe5 {
    let numPlayers: number = 0; //Anzahl Spieler
    export let numPairs: number = 5; //Anzahl Kartenpaare
    let openCards: HTMLElement[] = [];// umgedrehte Karten werden hier gespeichert
    let currentCardDeck: Deck = undefined; //aktuelles Kartendeck wird mit Variable versehen
    let counter: number = 0;  // wenn karte umgedreht wird, wird diese Variable hochgezählt
    let l: number = 0;// Variable die hochgezählt wird um später mit der Anzahl Paare verglichen zu werden zur Gratulationb
    let nehmeKlicksAn: boolean = true; //boolean der dafür sorgt dass nur 2 mal geklickt werden kann
    let cardArray: string[] = [];//Leerer Array in den später teile des Inhalts gespeichert werden
    let playerNames: string[] = [];  // Leerer Array der später mit dem Inhalt des Scores zu befüllen
    let score: number[] = [0, 0, 0, 0]; //Punktestand = 0, ist vordefiniert
   
    window.addEventListener( "click", verarbeiteKlick ); //bei click wird Funktion verarbeiteClick ausgeführt

    populateDecks(); //funktion populateDecks wird aufgerufen

    function verarbeiteKlick( _event: Event ): void { //Funktion wird erstellt
        let target: HTMLDivElement = <HTMLDivElement>_event.target;

        console.log( _event ); //_event wird auf Konsole ausgegeben

        if ( target.classList.contains( "hidden" ) && nehmeKlicksAn ) { //Bedingung umgedrehte Karte und die Klicks müssen angenommen werden
            if ( counter < 2 ) { //wenn counter kleinr als  ist
                target.classList.remove( "hidden" ); //Karte wird aus Array gelöscht
                openCards.push( target );// und in opencards gespeichert
            }
            counter++; //counter wird hochgezählt

            if ( counter == 2 ) { //wenn counter gleich 2 ist
                nehmeKlicksAn = false; //kann nicht mehr geklickt werden
                counter = 0; //counter wird wieder auf 0 gesetzt

                if ( openCards[0].innerText === openCards[1].innerText ) { //wird geprüft ob Text auf Karten gleich ist

                    setTimeout(() => { //Timeout
                        openCards[0].classList.add( "taken" );// Karten werden umgedreht
                        openCards[1].classList.add( "taken" );
                        openCards = []; //opencards wird wieder geleert
                        nehmeKlicksAn = true; //kann wieder geklickt werden

                        if ( document.getElementsByClassName( "hidden" ).length == 0 ) { //wenn keine Karten mehr da sind
                            alert( "Herzlichen Glückwunsch, du hast das Spiel gewonnen!" ) //kommt alertbox
                        }

                    }, 2000 ); //Karte wird nach 2 Sec entfernt
                }
                else { //wenn Text nicht gleich ist

                    setTimeout(() => { //Timeout function

                        openCards[0].classList.add( "hidden" );//Karten werden wieder umgedreht
                        openCards[1].classList.add( "hidden" );
                        openCards = []; //opencards Array wird wieder geleert
                        nehmeKlicksAn = true; //kann wieder geklickt werden
                    }, 2000 ); //Karten verschwinden nach 2 sec


                }


            }

        }


    }

    
    export function randomState(): string { //Funktion dass am Anfang alle Karten verdeckt sind
        return "hidden"; //anfangs alle Karten verdeckt
    }

    function shuffleCards(): void { // Name der Funktion, Typ-Annotoation, Array cardContent wird durchgemischt

        let i: number = cardArray.length; // Variable i initialisiert, i ist so groß¸ wie der Array, also 15
        let j: number = 0; // Variable initialsisiert, Wert ist 0
        let temp: string = ""; // Variable definiert, typ string, kein Inhalt bisher
        while ( --i > 0 ) { // wenn i größer als 0 ist wird die Schleife ausgeführt, wird nach durchlauf runtergezählt
            j = Math.floor( Math.random() * ( i + 1 ) ); //zufällige Zahl zwischen 0 und 1
            temp = cardArray[j];
            cardArray[j] = cardArray[i];
            cardArray[i] = temp;
        }
    }


    function createGame(): void {  // Spielfeld wird erzeugt
        let node: any = document.getElementById( "Spielfeld" ); // neue Variable node, Aufruf der ID im Html Dokument
        shuffleCards();  // Funktion ShuffleCardArry wird aufgerufen dass bei jedem Spiel neu gemischt wird
        let header = document.createElement("h2"); //h2 wird im html erzeugt
        header.innerText = "Spielfeld"; //text im h2: Spielfeld
        node.appendChild(header);
        let spielFeld = document.createElement("div"); //erzeugt div spielfeld im html

        for ( let i: number = 0; i < cardArray.length; i++ ) {

            let card = document.createElement("div");
            card.id = i.toString();
            card.setAttribute("attr", i.toString());

            card.classList.add(cardArray[i]);
            card.classList.add(randomState());

            card.textContent = cardArray[i];
            
            //CSS wird mit card.style definiert
            //card.style.backgroundColor = currentCardDeck.color;
            card.style.fontFamily = currentCardDeck.font;
            card.style.fontSize = currentCardDeck.size + "px";
            card.style.color = currentCardDeck.textColor;

            spielFeld.appendChild(card);
        }

        node.appendChild(spielFeld);

        //Ausgabe auf die Konsole
    }

    function playerInfo(): void { //Funktion für die Spielerinfo
        let node: any = document.getElementById( "Spielinfo" ); //Aufruf der id im Html Dokument 
        let childNodeHTML: string = ""; //neue leere string Variable
        childNodeHTML += "<div>"; //div im html erzeugt

        for ( let i: number = 0; i < playerNames.length; i++ ) { // Schleife läuft so lange durch, solange i kleiner als die Anzahl der Spieler ist, i wird nach jedem Durchlauf 1 hochgezÃƒÂ¤hlt

            
            childNodeHTML += "<div id=Spieler";//div mit id spieler erzeugt im html (untergeordnete id)
            childNodeHTML += i;
            childNodeHTML += ">";

          
            childNodeHTML += "<p>Spielername: "; //paragraph mit spielernamen erzeugt
            childNodeHTML += playerNames[i];
            childNodeHTML += "</p>";

            childNodeHTML += "<p>Punktestand: "; //paragraph mit punktestand

            
            childNodeHTML += score[i]; //Ausgabe des Punktestands
            childNodeHTML += "</p></div>";
        }

        childNodeHTML += "</div>"; //div wird geschlossen
        node.innerHTML += childNodeHTML; //Inhalt der Knoten mit childNodeHTML befüllen

        console.log( childNodeHTML ); //Ausgabe von Childnodehtml auf Konsole
    }


    export function main(): void { //Hauptfunktion

        let spielerAnzahl: number;
    
        //Variable collection als NodeListOfElement
    
        //NodeList Objekte sind Sammlungen von Knoten
        
        let collection: NodeListOf<Element> = document.getElementById("spieleranzahl").getElementsByTagName("input");

        // i=0, größer als die Länge von collection und wird hochgezählt
    
        for (let i = 0; i < collection.length; i++) {

            //Spieleranzahl wird hochgezählt 
            
            if ((<HTMLInputElement>collection[i]).checked) {
                spielerAnzahl = i + 1;
                break;
            }
        }
        
        //Eingabe Spielernamen
        collection = document.getElementById("name").getElementsByTagName("input");

        //Wenn kein Spielername eingegeben wurde, heißt der Spieler Cindy
        
        for (let i = 0; i < collection.length; i++) {
            if ((<HTMLInputElement>collection[i]).value == "" && i == 0) {
                playerNames.push("Cindy")
            }
            
            //Ansonsten wird der Spielername ins Spiel gepusht
            
            else if ((<HTMLInputElement>collection[i]).value != "") {
                playerNames.push((<HTMLInputElement>collection[i]).value)
            }
        }
        
        //Auswahl des Kartensatzes
        collection = document.getElementById("kartensatz").getElementsByTagName("input");

        
        //Wenn beim Kartendeck nichts ausgewählt wird, erscheint automatisch das Kartendeck "colors"
        if (currentCardDeck == undefined) //wenn kein Kartendeck definiert ist
            currentCardDeck = decks["colors"];
        
        //Karten werden erzeugt
        populateCardArray(currentCardDeck.content);

        //Spielfeld wird erzeugt
        createGame();

        //Spielinfo wird erzeugt
        playerInfo();
        
        //Starteinstellung wird nach der Einstellung gelöscht
        document.getElementById("starteinstellungen").remove()

    }
    
    //Für den Kartenpaare Slider
    

    export function onInputEvent(value: number) {
        document.getElementById("kartenpaare-label").innerText = value.toString();
        numPairs = value;
    }

      
    function populateCardArray(karten: string[]) { //Karten werden durch die Funktion erstellt
        
      
        for (let i = 0; i < numPairs; i++) {   //Kartenpaare werden erzeugt
            cardArray.push(karten[i]);
            cardArray.push(karten[i]);
        }

    }

        
    export function bearbeiteKartenSatzKlick(element: HTMLInputElement) {//Für Auswahl des Kartensatzes, damit sich die Länge anpasst
        currentCardDeck = decks[element.value];
        repopulateCardForm();
    }
    

    function repopulateCardForm() {     //Fehlererkennung (Slider ansich ändert sich)
        let kartenPaareElement = <HTMLInputElement>document.getElementById("kartenpaare");
        kartenPaareElement.max = currentCardDeck.content.length.toString();

        let maxWert = currentCardDeck.content.length;
        let momentanerWert = parseInt(kartenPaareElement.value);

        if (maxWert < momentanerWert) {
            kartenPaareElement.value = maxWert.toString()
        }
        
        document.getElementById("kartenpaare-label").innerText = kartenPaareElement.value; //Update des HTML (Zahl neben dem Slider ändert sich --> Slider wird nach oben gezählt)
    }
    
 
    export function bearbeiteSpielerZahlKlick(element: HTMLInputElement) {    //Spieleranzahl und Spielername werden erstellt
        
        let spielerZahl = parseInt(element.value);//parseInt = String wird zu einer ganzen Zahl umgewandelt
        for (let i = 1; i <= 4; i++) {
                    
            let inputElement = <HTMLInputElement>document.getElementById(`player${i}`);  //`player${i}`: Innerhalb eines String wird Javascripts aufgerufen, zur Bearbeitung
            let labelElement = document.getElementById(`player${i}-label`);
            if (i <= spielerZahl) {
                inputElement.disabled = false;
                labelElement.style.opacity = "1";

            }
            else {
                inputElement.disabled = true;
                labelElement.style.opacity = "0.33";
                inputElement.value = "";
            }
        }
    }
}
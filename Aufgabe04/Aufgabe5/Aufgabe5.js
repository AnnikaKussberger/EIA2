var Aufgabe5;
(function (Aufgabe5) {
    let numPlayers = 0; //Anzahl Spieler
    Aufgabe5.numPairs = 5; //Anzahl Kartenpaare
    let openCards = []; // umgedrehte Karten werden hier gespeichert
    let currentCardDeck = undefined; //aktuelles Kartendeck wird mit Variable versehen
    let counter = 0; // wenn karte umgedreht wird, wird diese Variable hochgez�hlt
    let l = 0; // Variable die hochgez�hlt wird um sp�ter mit der Anzahl Paare verglichen zu werden zur Gratulationb
    let nehmeKlicksAn = true; //boolean der daf�r sorgt dass nur 2 mal geklickt werden kann
    let cardArray = []; //Leerer Array in den sp�ter teile des Inhalts gespeichert werden
    let playerNames = []; // Leerer Array der sp�ter mit dem Inhalt des Scores zu bef�llen
    let score = [0, 0, 0, 0]; //Punktestand = 0, ist vordefiniert
    window.addEventListener("click", verarbeiteKlick); //bei click wird Funktion verarbeiteClick ausgef�hrt
    Aufgabe5.populateDecks(); //funktion populateDecks wird aufgerufen
    function verarbeiteKlick(_event) {
        let target = _event.target;
        console.log(_event); //_event wird auf Konsole ausgegeben
        if (target.classList.contains("hidden") && nehmeKlicksAn) {
            if (counter < 2) {
                target.classList.remove("hidden"); //Karte wird aus Array gel�scht
                openCards.push(target); // und in opencards gespeichert
            }
            counter++; //counter wird hochgez�hlt
            if (counter == 2) {
                nehmeKlicksAn = false; //kann nicht mehr geklickt werden
                counter = 0; //counter wird wieder auf 0 gesetzt
                if (openCards[0].innerText === openCards[1].innerText) {
                    setTimeout(() => {
                        openCards[0].classList.add("taken"); // Karten werden umgedreht
                        openCards[1].classList.add("taken");
                        openCards = []; //opencards wird wieder geleert
                        nehmeKlicksAn = true; //kann wieder geklickt werden
                        if (document.getElementsByClassName("hidden").length == 0) {
                            alert("Herzlichen Gl�ckwunsch, du hast das Spiel gewonnen!"); //kommt alertbox
                        }
                    }, 2000); //Karte wird nach 2 Sec entfernt
                }
                else {
                    setTimeout(() => {
                        openCards[0].classList.add("hidden"); //Karten werden wieder umgedreht
                        openCards[1].classList.add("hidden");
                        openCards = []; //opencards Array wird wieder geleert
                        nehmeKlicksAn = true; //kann wieder geklickt werden
                    }, 2000); //Karten verschwinden nach 2 sec
                }
            }
        }
    }
    function randomState() {
        return "hidden"; //anfangs alle Karten verdeckt
    }
    Aufgabe5.randomState = randomState;
    function shuffleCards() {
        let i = cardArray.length; // Variable i initialisiert, i ist so gro߸ wie der Array, also 15
        let j = 0; // Variable initialsisiert, Wert ist 0
        let temp = ""; // Variable definiert, typ string, kein Inhalt bisher
        while (--i > 0) {
            j = Math.floor(Math.random() * (i + 1)); //zuf�llige Zahl zwischen 0 und 1
            temp = cardArray[j];
            cardArray[j] = cardArray[i];
            cardArray[i] = temp;
        }
    }
    function createGame() {
        let node = document.getElementById("Spielfeld"); // neue Variable node, Aufruf der ID im Html Dokument
        shuffleCards(); // Funktion ShuffleCardArry wird aufgerufen dass bei jedem Spiel neu gemischt wird
        let header = document.createElement("h2"); //h2 wird im html erzeugt
        header.innerText = "Spielfeld"; //text im h2: Spielfeld
        node.appendChild(header);
        let spielFeld = document.createElement("div"); //erzeugt div spielfeld im html
        for (let i = 0; i < cardArray.length; i++) {
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
    function playerInfo() {
        let node = document.getElementById("Spielinfo"); //Aufruf der id im Html Dokument 
        let childNodeHTML = ""; //neue leere string Variable
        childNodeHTML += "<div>"; //div im html erzeugt
        for (let i = 0; i < playerNames.length; i++) {
            childNodeHTML += "<div id=Spieler"; //div mit id spieler erzeugt im html (untergeordnete id)
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
        node.innerHTML += childNodeHTML; //Inhalt der Knoten mit childNodeHTML bef�llen
        console.log(childNodeHTML); //Ausgabe von Childnodehtml auf Konsole
    }
    function main() {
        let spielerAnzahl;
        //Variable collection als NodeListOfElement
        //NodeList Objekte sind Sammlungen von Knoten
        let collection = document.getElementById("spieleranzahl").getElementsByTagName("input");
        for (let i = 0; i < collection.length; i++) {
            if (collection[i].checked) {
                spielerAnzahl = i + 1; //Spieleranzahl wird hochgez�hlt 
                break;
            }
        }
        collection = document.getElementById("name").getElementsByTagName("input"); //Eingabe Spielernamen
        for (let i = 0; i < collection.length; i++) {
            if (collection[i].value == "" && i == 0) {
                playerNames.push("Cindy"); //hei�t der Spieler Cindy
            }
            else if (collection[i].value != "") {
                playerNames.push(collection[i].value);
            }
        }
        collection = document.getElementById("kartensatz").getElementsByTagName("input"); //Auswahl des Kartensatzes
        //Wenn kein anderes Deck ausgew�hlt wird, erscheint automatisch das Kartendeck "colors"
        if (currentCardDeck == undefined)
            currentCardDeck = Aufgabe5.decks["colors"];
        populateCardArray(currentCardDeck.content); //Karten werden erzeugt 
        createGame(); //Spielfeld wird erzeugt
        playerInfo(); //Spielinfo wird erzeugt
        document.getElementById("starteinstellungen").remove(); //Starteinstellung wird nach Einstellung gel�scht
    }
    Aufgabe5.main = main;
    function onInputEvent(value) {
        document.getElementById("kartenpaare-label").innerText = value.toString();
        Aufgabe5.numPairs = value;
    }
    Aufgabe5.onInputEvent = onInputEvent;
    function populateCardArray(karten) {
        for (let i = 0; i < Aufgabe5.numPairs; i++) {
            cardArray.push(karten[i]);
            cardArray.push(karten[i]);
        }
    }
    function bearbeiteKartenSatzKlick(element) {
        currentCardDeck = Aufgabe5.decks[element.value];
        repopulateCardForm();
    }
    Aufgabe5.bearbeiteKartenSatzKlick = bearbeiteKartenSatzKlick;
    function repopulateCardForm() {
        let kartenPaareElement = document.getElementById("kartenpaare");
        kartenPaareElement.max = currentCardDeck.content.length.toString();
        let maxWert = currentCardDeck.content.length;
        let momentanerWert = parseInt(kartenPaareElement.value);
        if (maxWert < momentanerWert) {
            kartenPaareElement.value = maxWert.toString();
        }
        document.getElementById("kartenpaare-label").innerText = kartenPaareElement.value; //Update des HTML (Zahl neben dem Slider �ndert sich --> Slider wird nach oben gez�hlt)
    }
    function bearbeiteSpielerZahlKlick(element) {
        let spielerZahl = parseInt(element.value); //parseInt = String wird zu einer ganzen Zahl umgewandelt
        for (let i = 1; i <= 4; i++) {
            let inputElement = document.getElementById(`player${i}`); //`player${i}`: Innerhalb eines String wird Javascripts aufgerufen, zur Bearbeitung
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
    Aufgabe5.bearbeiteSpielerZahlKlick = bearbeiteSpielerZahlKlick;
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=Aufgabe5.js.map
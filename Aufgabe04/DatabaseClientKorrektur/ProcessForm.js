var Aufgabe4_1;
(function (Aufgabe4_1) {
    window.addEventListener("load", init); //window.addEventListener wird ausgef�hrt sobald ein geladen (durch funktion init) wird
    function init(_event) {
        console.log("Init");
        let einsetzenButton = document.getElementById("einsetzen");
        let findButton = document.getElementById("find");
        let aktualisierenButton = document.getElementById("aktualisieren");
        einsetzenButton.addEventListener("click", einsetzen); //Enventlistener auf Buttons
        aktualisierenButton.addEventListener("click", aktualisieren); //Enventlistener auf Buttons
        findButton.addEventListener("click", find); //Enventlistener auf Buttons
    }
    function einsetzen(_event) {
        let inputs = document.getElementsByTagName("input");
        let genderButton = document.getElementById("male");
        let matrikel = inputs[2].value;
        let studi;
        studi = {
            name: inputs[0].value,
            firstname: inputs[1].value,
            matrikel: parseInt(matrikel),
            age: parseInt(inputs[3].value),
            gender: genderButton.checked,
            studiengang: document.getElementsByTagName("select").item(0).value,
        };
        console.log(studi);
        console.log(studi.age);
        console.log(studi["age"]);
        Aufgabe4_1.studiHomoAssoc[matrikel] = studi; // Datensatz im assoziativen Array unter der Matrikelnummer speichern
        Aufgabe4_1.studiSimpleArray.push(studi); // nur um das auch noch zu zeigen...
    }
    // _________________________________________________________________________________________________________________________________________________________
    function aktualisieren(_event) {
        let output = document.getElementsByTagName("textarea")[0]; //Auf Textarea 0 (aus HTMl, das 1. Textarea) zuzugreifen
        output.value = "";
        // for-in-Schleife iteriert über die Schlüssel des assoziativen Arrays
        for (let matrikel in Aufgabe4_1.studiHomoAssoc) {
            let studi = Aufgabe4_1.studiHomoAssoc[matrikel];
            let line = matrikel + ": ";
            line += studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre ";
            line += studi.gender ? ", (Maennlich)," : ", (Weiblich),";
            line += studi.studiengang + ": ";
            output.value += line + "\n";
        }
        // Konsolenausgabe
        console.group("Simple Array");
        console.log(Aufgabe4_1.studiSimpleArray);
        console.groupEnd();
        console.group("Associatives Array (Object)");
        console.log(Aufgabe4_1.studiHomoAssoc);
        console.groupEnd();
    }
    // _________________________________________________________________________________________________________________________________________________________
    function find(_event) {
        let output = document.getElementsByTagName("textarea")[1]; //Auf Textarea 1 zugreifen
        output.value = "";
        let inputs = document.getElementsByTagName("input"); //Zugriff auf Inputs
        let matrikel = inputs[6].value; //Aufruf Matrikel nach 6. Input (aus HTML)
        let studi = Aufgabe4_1.studiHomoAssoc[matrikel]; //Speichern Matrikelnummer
        if (studi) {
            let line = matrikel + ": ";
            line += studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre ";
            line += studi.gender ? ", (Maennlich)," : ", (Weiblich),";
            line += studi.studiengang + ": ";
            output.value += line + "\n";
        }
        else {
            alert("Es wurde kein Student gefunden, bitte versuchen sie es noch einmal.");
        }
    }
})(Aufgabe4_1 || (Aufgabe4_1 = {}));
//# sourceMappingURL=ProcessForm.js.map
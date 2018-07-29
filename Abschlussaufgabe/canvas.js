var Abschluss;
(function (Abschluss) {
    window.addEventListener("load", init);
    let movingObjects = [];
    let imgData;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Abschluss.crc2 = canvas.getContext("2d");
        console.log(Abschluss.crc2);
        //canvas.addEventListener("click",)
        console.log(movingObjects);
        Abschluss.background();
        //Schleife V�gel
        for (let i = 0; i < 3; i++) {
            let bird = new Abschluss.Bird();
            movingObjects.push(bird);
        }
        //Schleife Balloon
        for (let i = 0; i < 5; i++) {
            let balloon = new Abschluss.Balloon();
            movingObjects.push(balloon);
        }
        //Schleife Bl�tter
        for (let i = 0; i < 4; i++) {
            let leaf = new Abschluss.Leaf();
            movingObjects.push(leaf);
        }
        imgData = Abschluss.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
        canvas.addEventListener("click", removeObject);
        canvas.addEventListener("touched", removeObject);
        alert("Oje, Kara ist ein absoluter Ordungsfanatiker und bekommt von den vielen beweglichen Objekten um sie herum Kopfschmerzen :( Hilf ihr alle beweglichen Blaetter, Ballons und Voegel verschwinden zu lassen! Klicke dazu einfach auf die Objekte ;)");
    }
    function animate() {
        window.setTimeout(animate, 10);
        Abschluss.crc2.clearRect(0, 0, Abschluss.crc2.canvas.width, Abschluss.crc2.canvas.height);
        //ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        Abschluss.crc2.putImageData(imgData, 0, 0);
        moveObjects();
        drawObjects();
    }
    function moveObjects() {
        for (let i = 0; i < movingObjects.length; i++) {
            movingObjects[i].move();
        }
    }
    function drawObjects() {
        for (let i = 0; i < movingObjects.length; i++) {
            movingObjects[i].draw();
        }
    }
    // nimmt angeklicktes Objekt aus Array raus, wird also nicht mehr gezeichnet
    function removeObject(_event) {
        for (let i = 0; i < movingObjects.length; i++) {
            let d = movingObjects[i];
            let clickX = _event.clientX;
            let clickY = _event.clientY;
            console.log(clickX); //funktioniert
            let differenceX = Math.abs(d.x - clickX);
            let differenceY = Math.abs(d.y - clickY);
            console.log(differenceX); //NaN als ergebnis?
            if (differenceX <= 30 && differenceY <= 30) {
                movingObjects.splice(i, 1);
                console.log(movingObjects);
            }
            if (movingObjects.length == 1) {
                alert("Herzlichen Glueckwunsch, du hast es geschafft alle Objekte einzusammeln! um Nochmal zu spielen lade die Seite neu");
            }
        }
    }
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=canvas.js.map
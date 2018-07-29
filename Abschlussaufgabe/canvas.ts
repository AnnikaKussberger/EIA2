namespace Abschluss {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;

    let movingObjects: Superclass[] = [];
    let imgData: ImageData;
    export let canvas: HTMLCanvasElement;



    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        //canvas.addEventListener("click",)
        console.log(movingObjects)

        background();




        //Schleife Vögel
        for (let i: number = 0; i < 3; i++) {
            let bird: Bird = new Bird();
            movingObjects.push(bird);

        }

        //Schleife Balloon
        for (let i: number = 0; i < 5; i++) {
            let balloon: Balloon = new Balloon();
            movingObjects.push(balloon);
        }

        //Schleife Blätter
        for (let i: number = 0; i < 4; i++) {
            let leaf: Leaf = new Leaf();
            movingObjects.push(leaf);
        }

        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();

        canvas.addEventListener("click", removeObject);
        canvas.addEventListener("touched", removeObject);


        alert("Oje, Kara ist ein absoluter Ordungsfanatiker und bekommt von den vielen beweglichen Objekten um sie herum Kopfschmerzen :( Hilf ihr alle Blaetter, Ballons und Voegel verschwinden zu lassen! Klicke dazu einfach auf die Objekte ;)");

        

    }



    function animate(): void {
        window.setTimeout(animate, 10);

        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        //ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        crc2.putImageData(imgData, 0, 0);


        moveObjects();
        drawObjects();
    }

    function moveObjects(): void {
        for (let i: number = 0; i < movingObjects.length; i++) {
            movingObjects[i].move();
        }

    }

    function drawObjects(): void {
        for (let i: number = 0; i < movingObjects.length; i++) {
            movingObjects[i].draw();
        }

    }
    
    // nimmt angeklicktes Objekt aus Array raus, wird also nicht mehr gezeichnet
    function removeObject(_event: MouseEvent): void {
        for (let i: number = 0; i < movingObjects.length; i++) {
            let d: Superclass= movingObjects[i];

            let clickX: number = _event.clientX;
            let clickY: number = _event.clientY;
            console.log(clickX); //funktioniert

            let differenceX: number = Math.abs(d.x - clickX);
            let differenceY: number = Math.abs(d.y - clickY);
            console.log(differenceX); //NaN als ergebnis?

            if (differenceX <= 30 && differenceY <= 30) {
                movingObjects.splice(i, 1);
                console.log(movingObjects);
            }

            if (movingObjects.length == 1) { 
            alert("Herzlichen Glueckwunsch, du hast es geschafft alle Objekte einzusammeln! um Nochmal zu spielen lade die Seite neu") 
        }
        }
    }
    

}


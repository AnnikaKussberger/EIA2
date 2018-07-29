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




        //Schleife V�gel
        for (let i: number = 0; i < 3; i++) {
            let bird: Bird = new Bird();
            movingObjects.push(bird);

        }

        //Schleife Balloon
        for (let i: number = 0; i < 5; i++) {
            let balloon: Balloon = new Balloon();
            movingObjects.push(balloon);
        }

        //Schleife Bl�tter
        for (let i: number = 0; i < 4; i++) {
            let leaf: Leaf = new Leaf();
            movingObjects.push(leaf);
        }

        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();

        canvas.addEventListener("click", removeObject);
        canvas.addEventListener("touched", removeObject);


        alert("Oje, Kara hat ihre Luftballons losgelassen! Lasse die aufsteigenden Ballons  platzen indem du darauf Klickst :)");

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
            let d = movingObjects[i];

            let clickX: number = _event.clientX;
            let clickY: number = _event.clientY;
            console.log(clickX)//funktioniert

            let differenceX: number = Math.abs(d.positionX - clickX);
            let differenceY: number = Math.abs(d.positionY - clickY);
            console.log(differenceX);//NaN als ergebnis?

            if (differenceX <= 20 && differenceY <= 20) {
                movingObjects.splice(i, 1);
                console.log("entfernt");
            }


        }
    }
    

}


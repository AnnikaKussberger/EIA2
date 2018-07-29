namespace Abschluss {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;

    let movingObjects: Superclass[] = [];
    let imgData: ImageData;
    let canvas: HTMLCanvasElement;



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



}


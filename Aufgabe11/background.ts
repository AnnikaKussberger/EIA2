namespace L11 {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let movingObjects: Superclass[] = [];
    let imgData: ImageData;
    let canvas: HTMLCanvasElement;



    function init(_event: Event): void {
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        canvas.addEventListener("click", insertFlakes);


        background();



        //Schleife mehrere groﬂe Fische
        for (let i: number = 0; i < 8; i++) {
            let fish: BigFish = new BigFish();
            movingObjects.push(fish);

        }
        /*Schleife mehrere kleine Fische
        for (let i: number = 0; i < s; i++) {
            let sfish: smallFish = new smallFish();
            sfish.x = Math.random() * crc2.canvas.width;
            sfish.y = Math.random() * crc2.canvas.height;
            sfishes.push(sfish);

        }*/
        //Schleife Bubbles
        for (let i: number = 0; i < 20; i++) {
            let bubble: Bubble = new Bubble();
            movingObjects.push(bubble);

        }

        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();

    }
    //Futterflocken-Funktion
    function insertFlakes(_event: MouseEvent): void {
        let newPositionX: number = _event.clientX;
        let newPositionY: number = _event.clientY;

        for (let i: number = 0; i < 3; i++) {
            let flakes: Flake = new Flake (newPositionX, newPositionY);
            movingObjects.push(flakes);
            newPositionX += Math.random() * 30;
            newPositionY += Math.random() * 40;
            newPositionX -= Math.random() * 20;
        }
    }


    function animate(): void {
        window.setTimeout(animate, 10);

        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
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
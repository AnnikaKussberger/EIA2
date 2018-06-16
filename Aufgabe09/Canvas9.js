var Canvas09;
(function (Canvas09) {
    window.addEventListener("load", init);
    let crc2;
    let ctx;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        ctx = canvas.getContext("2d");
        console.log(crc2);
        //crc2.fillStyle = "rgba(255,0,0,0.5)";
        //crc2.fillRect(50, 50, 100, 50);
        /*drawDavidStar(300, 100);
        drawDavidStar(100, 200);

        for (let i: number = 0; i < 100; i++) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;
            drawDavidStar(x, y);
           
        }*/
        //sand
        crc2.beginPath();
        crc2.fillStyle = "rgba(228,186,138,0.5)";
        crc2.moveTo(0, 400);
        crc2.bezierCurveTo(150, 380, 200, 380, 360, 400);
        crc2.lineTo(360, 640);
        crc2.lineTo(0, 640);
        crc2.closePath();
        //crc2.stroke();
        crc2.fill();
        //water
        crc2.beginPath();
        crc2.fillStyle = "rgba(71,209,144,0.5)";
        crc2.moveTo(0, 400);
        crc2.bezierCurveTo(150, 380, 200, 380, 360, 400);
        crc2.lineTo(360, 0);
        crc2.lineTo(0, 0);
        crc2.closePath();
        //crc2.stroke();
        crc2.fill();
        //fish big
        crc2.beginPath();
        crc2.moveTo(100, 300);
        crc2.bezierCurveTo(120, 297, 130, 280, 150, 300);
        crc2.bezierCurveTo(130, 320, 120, 303, 100, 300);
        crc2.lineTo(90, 290);
        crc2.lineTo(90, 310);
        crc2.lineTo(100, 300);
        crc2.stroke();
        //fish small
        crc2.beginPath();
        crc2.moveTo(220, 200);
        crc2.bezierCurveTo(230, 190, 245, 198, 250, 200);
        crc2.bezierCurveTo(245, 202, 230, 210, 220, 200);
        crc2.moveTo(250, 200);
        crc2.lineTo(255, 195);
        crc2.lineTo(255, 205);
        crc2.lineTo(250, 200);
        crc2.stroke();
        //bubble
        ctx.beginPath();
        ctx.arc(300, 380, 4, 0, Math.PI * 2);
        ctx.closePath();
        ctx.stroke();
        //Oktopus head
        ctx.beginPath();
        ctx.arc(100, 500, 15, 0.5 * Math.PI, 1.5 * Math.PI);
        crc2.lineTo(120, 485);
        ctx.arc(120, 500, 15, 1.5 * Math.PI, 0.5 * Math.PI);
        ctx.closePath();
        //Octopus tentacles
        crc2.lineTo(100, 540);
        crc2.moveTo(122, 515);
        crc2.lineTo(122, 540);
        crc2.moveTo(111, 515);
        crc2.lineTo(111, 540);
        //Octopus Eyes
        ctx.moveTo(122, 500);
        ctx.arc(122, 500, 1, 0, Math.PI * 2);
        ctx.stroke();
        ctx.moveTo(100, 500);
        ctx.arc(100, 500, 1, 0, Math.PI * 2);
        ctx.stroke();
        //seagras open right
        crc2.beginPath();
        crc2.moveTo(110, 400);
        crc2.bezierCurveTo(100, 340, 80, 309, 130, 300);
        crc2.bezierCurveTo(100, 315, 100, 340, 120, 400);
        crc2.stroke();
        //seagras open left
        crc2.beginPath();
        crc2.moveTo(240, 400);
        crc2.bezierCurveTo(260, 360, 280, 309, 230, 300);
        crc2.bezierCurveTo(265, 325, 250, 340, 225, 400);
        crc2.stroke();
    }
})(Canvas09 || (Canvas09 = {}));
//# sourceMappingURL=Canvas9.js.map
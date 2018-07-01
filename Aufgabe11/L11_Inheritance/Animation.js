var L11_Inheritance;
(function (L11_Inheritance) {
    window.addEventListener("load", init);
    let stars = [];
    let n = 100;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        L11_Inheritance.crc2 = canvas.getContext("2d");
        console.log(L11_Inheritance.crc2);
        canvas.addEventListener("click", insertNewObject);
        for (let i = 0; i < n; i++) {
            let star = new L11_Inheritance.DavidStar("#00ffff");
            stars.push(star);
            let rect = new L11_Inheritance.Rect("#ff0000");
            stars.push(rect);
            let circle = new L11_Inheritance.Circle("#ff00ff");
            stars.push(circle);
        }
        animate();
    }
    function insertNewObject(_event) {
        let _x = _event.pageX;
        let _y = _event.pageY;
        let randomObject = Math.random() * 13;
        if (randomObject < 4) {
            let star = new L11_Inheritance.DavidStar("#2000ff");
            star.x = _x;
            star.y = _y;
            stars.push(star);
        }
        else if (randomObject < 8) {
            let rect = new L11_Inheritance.Rect("#a584ff");
            rect.x = _x;
            rect.y = _y;
            stars.push(rect);
        }
        else {
            let circle = new L11_Inheritance.Circle("#58abff");
            circle.x = _x;
            circle.y = _y;
            stars.push(circle);
        }
    }
    function animate() {
        window.setTimeout(animate, 10);
        L11_Inheritance.crc2.clearRect(0, 0, L11_Inheritance.crc2.canvas.width, L11_Inheritance.crc2.canvas.height);
        moveObjects();
        drawObjects();
    }
    function moveObjects() {
        for (let i = 0; i < stars.length; i++) {
            stars[i].move();
        }
    }
    function drawObjects() {
        for (let i = 0; i < stars.length; i++) {
            stars[i].draw();
        }
    }
})(L11_Inheritance || (L11_Inheritance = {}));
//# sourceMappingURL=Animation.js.map
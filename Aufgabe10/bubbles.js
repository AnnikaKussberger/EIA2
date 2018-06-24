var Animation10;
(function (Animation10) {
    class Bubble {
        move() {
            this.x += 0;
            this.y -= 2;
            if (this.y < 0) {
                this.y = 350;
            }
        }
        drawBubble() {
            Animation10.ctx.beginPath();
            Animation10.ctx.fillStyle = "rgba(51, 153, 255,1)";
            Animation10.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            Animation10.ctx.closePath();
            Animation10.ctx.fill();
            //ctx.stroke();
        }
    }
    Animation10.Bubble = Bubble;
})(Animation10 || (Animation10 = {}));
//# sourceMappingURL=bubbles.js.map
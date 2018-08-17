const canvas = document.querySelector("canvas");
canvas.height = 500;
canvas.width = 500;
const c = canvas.getContext("2d");


var ball = {
    x: 200,
    y: 100,
    r: 40,
    dx: 2,
    dy: 0,
    color: "red",
    draw: function () {
        c.strokeStyle = this.color;
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        c.stroke();
    },
    bounce: function () {
        var gravity = 0.98;
        var friction = 0.7
        this.y += this.dy;

        if (this.y + this.r > canvas.height - this.dy){
            this.dy = -this.dy * friction;
        }
        else {
            this.dy+= gravity;
        }

    },

    update: function () {


        this.bounce();
        this.draw();
    },
};

function mainLoop() {

    c.clearRect(0, 0, innerWidth, innerHeight);
    c.fillStyle = "grey";
    c.fillRect(0, 0, innerWidth, innerHeight);


    ball.update();

    requestAnimationFrame(mainLoop)
}

mainLoop();








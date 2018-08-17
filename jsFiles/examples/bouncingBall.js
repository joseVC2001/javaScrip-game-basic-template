const canvas = document.querySelector("canvas");
canvas.height = 500;
canvas.width = 500;
const c = canvas.getContext("2d");


var ball = {
    x: 200,
    y: 200,
    r: 40,
    dx: 2,
    dy: 5,
    color: "red",
    draw: function () {
        c.strokeStyle = this.color;
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        c.stroke();
    },
    movement: function () {
        this.x += this.dx;
        this.y += this.dy;
    },
    collisions: function () {

        if (this.x > canvas.width - this.r - this.dx || this.x < 0 + this.r - this.dx) {
            this.dx = -this.dx
        }
        else if (this.y > canvas.height - this.r - this.dy || this.y < 0 + this.r - this.dy) {
            this.dy = -this.dy
        }


    },
    update: function () {


        this.movement();
        this.collisions();
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








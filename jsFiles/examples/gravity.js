const canvas = document.querySelector("canvas");
canvas.height = 500;
canvas.width = 500;
const c = canvas.getContext("2d");


var ball = {
    x: 200,
    y: 100,
    r: 40,
    dx: 2,
    dy: 1,
    color: "red",
    draw: function () {
        c.strokeStyle = this.color;
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        c.stroke();
    },
    gravity: function () {


        var gravity = 0.98;
        this.dy += gravity;
        this.y += this.dy;
    },

    collisions: function () {
        if (this.y > canvas.height - this.r){
            this.y = canvas.height - this.r
        }
    },
    update: function () {


        this.gravity();
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








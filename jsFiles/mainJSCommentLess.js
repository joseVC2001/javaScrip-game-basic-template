const canvas = document.querySelector("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
const c = canvas.getContext("2d");


var player = {
    x: 200,
    y: 200,
    w: 240,
    h: 240,
    dx: 0,
    dy: 0,
    color: "red",
    draw: function () {
        c.fillStyle = this.color;
        c.fillRect(this.x, this.y, this.w, this.h);
    },
    update: function () {
   //Your functions here

        this.draw();
    },
};

function mainLoop() {

    c.clearRect(0, 0, innerWidth, innerHeight);
    c.fillStyle = "black";
    c.fillRect(0, 0, innerWidth, innerHeight);



    player.update();

    requestAnimationFrame(mainLoop)
}

mainLoop();








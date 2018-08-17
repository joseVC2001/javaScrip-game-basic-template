const canvas = document.querySelector("canvas");
canvas.height = 500;
canvas.width = 500;
const c = canvas.getContext("2d");


var mouse = {
    x:null,
    y:null
}

var player = {
    x: null,
    y: null,
    w: 20,
    h: 20,
    dx: 0,
    dy: 0,
    color: "red",
    draw: function () {
        c.fillStyle = this.color;
        c.fillRect(this.x, this.y, this.w, this.h);
    },
    goToClick:function(){

        var clickbool = false;
        window.addEventListener("mouseup", function (e) {

            clickbool = true;
        });

        console.log(clickbool)



    },

    update: function () {
        //Your functions here


        this.goToClick();
        this.draw();
    },
};

function mainLoop() {

    c.clearRect(0, 0, innerWidth, innerHeight);
    c.fillStyle = "grey";
    c.fillRect(0, 0, innerWidth, innerHeight);



    player.update();

    requestAnimationFrame(mainLoop)
}

mainLoop();








// We get the canvas element from the HTML document with a querySelector and we put it in a constant.
const canvas = document.querySelector("canvas");

//Configure the size of your canvas element here! you can use numbers too! In this case i am doing it the same size as browser window
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

//get canvas 2d Context.
const c = canvas.getContext("2d");


// we declare a variable that contains an object that will serve as the player.
var player = {
    // X is player horizontal position in the gameArea
    x: 200,
    // Y is player Vertical position in the gameArea
    y: 200,
    // We are drawing a square, so W represents width
    w: 240,
    // H represent square's height
    h: 240,
    // DX is the universal term for horizontal velocity, this is the value to change if we want to make our character move horizontally
    dx: 0,

    //DY is the universal term for Vertical velocity, this is the value to change if we want to make our character move vertically
    dy: 0,

    // The color of our square...
    color:"red",

    //We create a draw function so we can create a square in the game area
    draw: function () {

        c.fillStyle = this.color;
        c.fillRect(this.x, this.y, this.w, this.h);
    },
    //The update function call all the functions you create for your player. This avoids clustering the main GameLoop with your entities functions.
    update: function () {
      //your player functions here (movement, collision, AI, etc...).



        this.draw();
    },
};

//We create here what is called a game loop, it creates an infinite loop that updates all the functions of your game.
function mainLoop() {

    //Here we clean each frame when is over
    c.clearRect(0, 0, innerWidth, innerHeight);

    /* Here we give the game a background color, is important to put it after c.clearRect function because then it will
        add the bg first then clean the frame so the bg would be the same as browser bg default color (White).
     */
    c.fillStyle = "black";
    c.fillRect(0, 0, innerWidth, innerHeight);


    //Here we call the update method of our player.
    player.update();

    /* Note: You could call the update and draw method separately here in the gameloop, but if you want to avoid clustering here
       put all your character and entities function their own update function as mentioned earlier.  */


    //requestAnimationFrame() is the function that starts the game loop, it takes as parameter the function that you want to loop.
    requestAnimationFrame(mainLoop)
}

//We call mainloop function so it starts when the page loads
mainLoop();








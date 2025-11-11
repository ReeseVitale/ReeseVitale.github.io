$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////
    createPlatform(200, 530, 30, 43, "concrete")
    createPlatform(300, 600, 30, 43, "concrete")
    createPlatform(0, 220, 1000, 43, "concrete")
    createPlatform(500, 100, 20, 200, "concrete")
    createPlatform(1000, 600, 200, 2, "concrete");
    createCollectable("cells", 200, 50, 0.5, 0.7)
    createCollectable("sans", 300, 425)
    createCollectable("cells", 200, 400, 0.5, 0.7);
    createCannon("right", 600, 600)
    createCannon("top", 275, 900)
    createCannon("bottom", 450, 750)
    createCannon("bottom", 1150, 0);
     var audio = new 
     Audio('the choice that changes all.wav'); 
     audio.loop = true;
     audio.play();
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

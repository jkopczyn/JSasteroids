(function() {
  if(typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Ast = window.Asteroids;

  var DIM_X = 500;
  var DIM_Y = 500;
  var NUM_ASTEROIDS = 100;

  var Game = Ast.Game = function() {
    this.asteroids = [];
    this.bullets = [];
    this.addAsteroids();
    "breakpoint";
    //this.ship = new Ast.Ship();
  };

  Game.prototype.addAsteroids = function() {
    for (var i = 0; i < NUM_ASTEROIDS; i++) {
      "breakpoint";
      var newAst = new Ast.Asteroid({ pos: this.randomPosition() });
      this.asteroids.push(newAst);
    }
  };

  Game.prototype.randomPosition = function() {
    var x = Math.random() * DIM_X;
    var y = Math.random() * DIM_Y;
    return [x, y];
  };

  Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, DIM_X, DIM_Y);
    this.asteroids.forEach(function(asteroid) {
      asteroid.draw(ctx);
    });

  };

  Game.prototype.moveObjects = function() {
    this.asteroids.forEach(function(ast) {
      ast.move();
    });
  };

})();

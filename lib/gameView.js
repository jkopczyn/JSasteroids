(function() {
  if(typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Ast = window.Asteroids;

  var GameView = Ast.GameView = function(ctx) {
    this.game = new Ast.Game();
    this.ctx = ctx;
  };

  GameView.prototype.start = function() {
    var view = this;
    setInterval(function() {
      view.game.moveObjects();
      view.game.draw(view.ctx);
    }, 20);
  };


})();

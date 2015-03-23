(function() {
  if(typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }
  var Ast = window.Asteroids;

  var Util = Ast.Util = {};

  Util.inherits = function(SubClass, SuperClass) {
    function Surrogate() {
      this.constructor = SubClass;
    }
    Surrogate.prototype = SuperClass.prototype;
    SubClass.prototype = new Surrogate();
  };

  Util.randomVector = function(length) {
    var vec = [null, null];
    var angle = Math.random() * 2 * Math.PI;
    vec[0] = length * Math.cos(angle);
    vec[1] = length * Math.sin(angle);
    return vec;
  };

})();

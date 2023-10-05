var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var rectangle1 = 40;
var ellipse1 = 30;
var rectangle2 = 50;
var ellipse2 = 50;
var headColor = rgb(randomNumber(1, 400), randomNumber(1, 400), randomNumber(1, 400));
background("cyan");
fill(headColor);
rect(100, 100, 200, 200);
fill("silver");
rect(50, 175, rectangle2, rectangle2);
rect(300, 175, rectangle2, rectangle2);
fill("red");
rect(randomNumber(100, 150), 225, 150, rectangle1);
fill("black");
ellipse(randomNumber(120, 180), 150, ellipse1, ellipse1);
ellipse(randomNumber(200, 260), 150, ellipse1, ellipse1);
fill("yellow");
ellipse(75, 200, ellipse2, ellipse2);
ellipse(325, 200, ellipse2, ellipse2);
fill("orange");
ellipse(randomNumber(150, 250), 200, 75, 25);

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

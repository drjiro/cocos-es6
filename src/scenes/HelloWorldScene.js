import {CC} from '../constants/globals';
// import Resources from '../constants/resources';

class HelloWorldLayer extends CC.Layer {
  constructor() {
    // ////////////////////////////
    // 1. super init first
    super();

    // ///////////////////////////
    // 2. add a menu item with "X" image, which is clicked to quit the program
    //    you may modify it.
    // ask the window size
    const size = CC.winSize;

    // ///////////////////////////
    // 3. add your codes below...
    // add a label shows "Hello World"
    // create and initialize a label
    const helloLabel = new CC.LabelTTF('Hello World', 'Arial', 38);
    // position the label on the center of the screen
    helloLabel.x = size.width / 2;
    helloLabel.y = size.height / 2 + 200;
    // add the label as a child to this layer
    this.addChild(helloLabel);

    // add "HelloWorld" splash screen"
    this.sprite = new CC.Sprite('res/HelloWorld.png');
    this.sprite.attr({
      x: size.width / 2,
      y: size.height / 2
    });
    this.sprite.setPosition(size.width / 2, size.height / 2);
    this.addChild(this.sprite);
  }
}

class HelloWorldScene extends CC.Scene {
  constructor() {
    super();
    const layer = new HelloWorldLayer();
    this.addChild(layer);
  }
}

export default HelloWorldScene;

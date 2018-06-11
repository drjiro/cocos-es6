/**
 * @author Shidil Eringa
 * @update Takao Wada
 */
class Resources {
  constructor() {
    this.resources = {
      HelloWorldPNG: 'res/HelloWorld.png'
    };
  }
  // Change to a static function for main.js
  static getResourceMeta() {
    let gameResourcesToLoad = [];
    for (let i in Resources) {
      if (Resources.hasOwnProperty(i)) {
        this.gameResourcesToLoad.push(this.resources[i]);
      }
    }
    return gameResourcesToLoad;
  }
}

export default Resources;

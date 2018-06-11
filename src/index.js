import {CC, Document} from './constants/globals';
import Resources from './constants/resources';
import HelloWorldScene from './scenes/HelloWorldScene';

console.log('game index starting ready=' + CC.gameReady);

if ((CC.gameReady === 'undefined') || !CC.gameReady) {
  // Run only production mode.
  CC.game.onStart = function () {
    console.log('Intializing game at index.js for prouction');
    const sys = CC.sys;

    // If referenced loading.js, please remove it
    if (!sys.isNative && Document.getElementById('cocosLoading')) {
      Document.body.removeChild(Document.getElementById('cocosLoading'));
    }

    // Pass true to enable retina display, on Android disabled by default to improve performance
    CC.view.enableRetina(sys.os === sys.OS_IOS ? true : false);

    // Disable auto full screen on baidu and wechat,
    //  you might also want to eliminate sys.BROWSER_TYPE_MOBILE_QQ
    if (sys.isMobile &&
      sys.browserType !== sys.BROWSER_TYPE_BAIDU &&
      sys.browserType !== sys.BROWSER_TYPE_WECHAT) {
      CC.view.enableAutoFullScreen(true);
    }

    // Adjust viewport meta
    CC.view.adjustViewPort(true);

    // Uncomment the following line to set a fixed orientation for your game
    // cc.view.setOrientation(cc.ORIENTATION_PORTRAIT);

    // Setup the resolution policy and design resolution size
    CC.view.setDesignResolutionSize(960, 640, CC.ResolutionPolicy.SHOW_ALL);

    // The game will be resized when browser size change
    CC.view.resizeWithBrowserSize(true);
    console.log('start the top scene for production mode.');
    const resources = Resources.getResourceMeta();
    CC.LoaderScene.preload(resources, function () {
      CC.director.runScene(new HelloWorldScene());
    }, this);
  };
  console.log('game run at index.js');
  CC.game.run();
  CC.gameReady = true;
} else {
  // Run only dev mode.
  console.log('Intializing game at index.js');
  const sys = CC.sys;

  // If referenced loading.js, please remove it
  if (!sys.isNative && Document.getElementById('cocosLoading')) {
    Document.body.removeChild(Document.getElementById('cocosLoading'));
  }

  // Pass true to enable retina display, on Android disabled by default to improve performance
  CC.view.enableRetina(sys.os === sys.OS_IOS ? true : false);

  // Disable auto full screen on baidu and wechat,
  //  you might also want to eliminate sys.BROWSER_TYPE_MOBILE_QQ
  if (sys.isMobile &&
    sys.browserType !== sys.BROWSER_TYPE_BAIDU &&
    sys.browserType !== sys.BROWSER_TYPE_WECHAT) {
    CC.view.enableAutoFullScreen(true);
  }

  // Adjust viewport meta
  CC.view.adjustViewPort(true);

  // Uncomment the following line to set a fixed orientation for your game
  // cc.view.setOrientation(cc.ORIENTATION_PORTRAIT);

  // Setup the resolution policy and design resolution size
  CC.view.setDesignResolutionSize(960, 640, CC.ResolutionPolicy.SHOW_ALL);

  // The game will be resized when browser size change
  CC.view.resizeWithBrowserSize(true);
  console.log('start the top scene for dev mode.');
  const resources = Resources.getResourceMeta();
  CC.LoaderScene.preload(resources, function () {
    CC.director.runScene(new HelloWorldScene());
  }, this);
  CC.gameReady = true;
}

console.log('game index ended');

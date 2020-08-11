window.onload = function(){
    var size = {
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundColor: 0x000000,
        scene: [splashScenes, mainScenes, endScenes]
    }

    var game = new Phaser.Game(size);   
};
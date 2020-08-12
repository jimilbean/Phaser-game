window.onload = function(){
    var size = {
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundColor: 0x000000,
        pixelArt: true,
        physics: {
            default: 'arcade',
            arcade: { debug: false}
        },
        // plugins:{
        //     global: [
        //         {key: 'BulletPlugin', plugin: BulletPlugin, start: true }
        //     ]
        // },
        scene: [splashScenes, mainScenes, endScenes]
    }

    var game = new Phaser.Game(size);   
};
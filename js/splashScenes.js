class splashScenes extends Phaser.Scene{
    constructor(){
        super("bootGame");
    }
    preload(){
        this.load.image("background", "img/background.webp");
        this.load.image("character", "img/character.png");
        this.load.image("boss", "img/boss1.png");
        this.load.image("boss_skill", "img/boss_skill.png");
        this.load.image("floor", "img/floor.png");
        this.load.image("bullet", "img/bullet.png");
    }

    create(){
        this.add.text(window.innerWidth/2-50, window.innerHeight/2, "Loading game....");
        setTimeout(() => {this.scene.start("playGame");}, 10);
        
        
    };
}
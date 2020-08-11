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
        this.load.image("attack", "img/attack.png");
    }

    create(){
        this.add.text(window.innerWidth/2-50, window.innerHeight/2, "Loading game....", {font: "25px"});
        setTimeout(() => {this.scene.start("playGame");}, 10);
        
        
    };
}
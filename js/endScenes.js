class endScenes extends Phaser.Scene{
    constructor(){
        super("endGame");
    }
    preload(){
  
    }

    create(){
        this.add.text(window.innerWidth/2-50, window.innerHeight/2, "clear!", {font: "50px"});
    };
}
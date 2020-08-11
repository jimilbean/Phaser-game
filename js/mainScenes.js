
var floorX = window.innerWidth;
var floorY = window.innerHeight;
var speed;
var randomY;

class mainScenes extends Phaser.Scene{
    

    constructor(){
        super("playGame");
    }

    create(){
        this.background = this.add.image(0,0,"background");
        this.background.setOrigin(0,0);

        

        

        this.floor = this.add.image(0, floorY-30, "floor");
        this.floor = this.add.image(400, floorY-30, "floor");
        this.floor = this.add.image(800, floorY-30, "floor");
        this.floor = this.add.image(1200, floorY-30, "floor");

        this.boss = this.add.image(window.innerWidth-300, window.innerHeight-300, "boss_skill");
        this.unit = this.add.image(200, 175, "character");
        this.bullet = this.add.image(window.innerWidth-500,window.innerHeight-500, "bullet");
        
    };

    update(){
        this.moveShip(this.bullet, 10);
        this.gravity( this.unit, this.floor, 10);
        this.unitMove(this.unit, 10);
    };

    moveShip(ship, speed){
        ship.x -= speed;
        
        ship.y += randomY;
        
        if(ship.x < 0 || ship.Y <0 || ship.Y >0){
            this.resetShipPos(ship);
        }
    }

    resetShipPos(ship){
        ship.x = window.innerWidth-360;
        ship.y = window.innerHeight - 500;
        randomY = Phaser.Math.Between(-10, 0.5);
    }

    gravity(character, floor, speed){
        character.y += speed;
        const height = window.innerHeight - floor.height - 53;
        if(character.y > height){
            character.y = height;
        }
        //else if(character.height != floor.height - 30){
            
        // }
    }

    unitMove(character, speed){
        if(character.x < 50){
            character.x = 50;
        }
        if(character.x > window.innerHeight){
            character.x = window.innerHeight;
        }
        console.log(character.x);
        character.x += speed;
    }
}
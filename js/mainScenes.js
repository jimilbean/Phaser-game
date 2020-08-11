
var floorX = window.innerWidth;
var floorY = window.innerHeight;

var unitY;

var attackX;

var direction = 1;

var x = 10;
var y;

var speed;
var jump = false;
var randomY;

var bossHP = 100;

class mainScenes extends Phaser.Scene{
    

    constructor(){
        super("playGame");
    }

    create(){
        this.background = this.add.image(0,0,"background");
        this.background.setOrigin(0,0);

        this.background.setScale(1.5);

        this.floor = this.add.image(100, floorY-25, "floor");
        this.floor.setScale(1.5);
        this.floor = this.add.image(700, floorY-25, "floor");
        this.floor.setScale(1.5);
        this.floor = this.add.image(1100, floorY-25, "floor");
        this.floor.setScale(1.5);
        this.floor = this.add.image(1700, floorY-25, "floor");

        this.floor.setScale(1.5);

        this.boss = this.add.image(window.innerWidth-300, window.innerHeight-350, "boss");
        this.unit = this.add.image(200, 175, "character");

        console.log(this.unit.x);

        
        this.bullet = this.add.image(window.innerWidth-500,window.innerHeight-500, "bullet");
        this.bullet.setScale(2);


        this.cursorKeys = this.input.keyboard.createCursorKeys();
        
        this.space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
         
       
    };

    update(){
        for(var i = 1; i< 2; i++){
            this.moveShip(this.bullet, this.unit ,2);
        }
        
        this.gravity( this.unit, this.floor, 10);
        this.unitMove(this.unit, 15);
        if(bossHP <= 0){
            console.log("GameOver");
            this.scene.start("endGame");
        }
        
    };
    
    

    moveShip(bullet, character ,speed){
        bullet.x -= speed;
        if(bullet.x < 0 || bullet.Y <0 || bullet.Y >0){
            this.resetShipPos(bullet);
        }
    }

    resetShipPos(bullet){
        bullet.x = window.innerWidth-360;
        bullet.y = window.innerHeight - 500;
        randomY = Phaser.Math.Between(-10, 0.1);
    }

    gravity(character, floor, speed){
        // if();
        character.y += speed;
        const height = window.innerHeight - floor.height - 53;
        if(character.y > height){
            character.y = height;
            jump = false;
        }
        //else if(character.height != floor.height - 30){
            
        // }
    }

    unitMove(character, speed){
        if(character.x < 20){
            character.x = 30;
        }
        if(character.x >= window.innerWidth-400){
            character.x = window.innerWidth-400;
        }

        if(character.y <20){
            character.y = 30;
        }
        if(this.cursorKeys.left.isDown){
            character.x -= speed;
            character.flipX = true;
            direction = 2;
            
        }else if(this.cursorKeys.right.isDown){
            character.x += speed;
            character.flipX = false;
            direction = 1;
        }

        if(this.cursorKeys.up.isDown && jump == false){
            character.y -= 200;    
            jump = true;
            
        }    

        if(Phaser.Input.Keyboard.JustDown(this.space)){
            this.attack();
        }
    }

    attack(){
        attackX = this.unit.x + 70;
        if(direction == 2){
            attackX = this.unit.x -70;
        }
        
        var attack = this.add.image(attackX,this.unit.y, "attack");
        attack.setScale(5);
        attack.alpha = 0.5;
        if(direction == 2){
            attack.flipX = true;
            
        }
        
        if(attack.x > this.boss.x - 250){
            console.log("성공"); 
            bossHP -= 20;
            console.log(bossHP);
            setTimeout(() => attack.destroy(),300);
        }

        setTimeout(() => attack.destroy(),300);
        
    }
    
}
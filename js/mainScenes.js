
var floorX = window.innerWidth;
var floorY = window.innerHeight;

var unitX;
var unitY;

var attackX;


var direction = 1;

var x = 10;
var y = 5;

var speed = 0;
var jump = true;
var random;

var bossHP = 100;

var attackAngle;

var bulletPatten = 2;

var boss_img = "boss";



var bulletCount = 50;
var cnt = 0;
var bulletArray = new Array();

var unitHP = 10;

var bullet = new Phaser.Class({
    Extends: Phaser.GameObjects.Image,

    initialize:
    function bullet (scene, x, y){
        Phaser.GameObjects.Image.call(this, scene);

        this.setTexture('bullet');
        this.setPosition(x, y);
        this.setScale(3);
    }
});

setInterval(()=>{
    var patten = Phaser.Math.Between(2, 3);
    bulletPatten = patten;
    console.log(patten);
}, 5000);





class mainScenes extends Phaser.Scene{
    

    constructor(){
        super("playGame");
    }

    create(){

        random = Phaser.Math.Between(-5, -1);
        
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

        this.boss = this.add.image(window.innerWidth/2, window.innerHeight-350, boss_img);
        
        this.unit = this.add.image(200, 175, "character");

        // this.bullet = this.add.image(window.innerWidth/2 - 80,window.innerHeight-550+x, "bullet");
      
            
        // this.bullet.setScale(2);
        
        // this.children.add(new bullet(this, window.innerWidth/2 - 80, window.innerHeight-550));
        if(bulletPatten == 1){
            
        }else if(bulletPatten == 2) {
            for(var i = 1; i <= bulletCount; i++){
                bulletArray[i] = this.children.add(new bullet(this, window.innerWidth/2 - 80 , window.innerHeight-550)); 
                // console.log(bulletArray[5]);
            }
        }else if(bulletPatten == 3){
            for(var i = 1; i <= bulletCount; i++){
                bulletArray[i] = this.children.add(new bullet(this, window.innerWidth/2 - 80 , window.innerHeight-550)); 
             
            }
        }
      

        
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        
        this.space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        // for(var i = 0; i <= bulletCount)
        

    };

    update(){
        
        this.moveShip(this.unit ,10);
                
        this.gravity( this.unit, this.floor, 10);
        this.unitMove(this.unit, 15);
        if(bossHP <= 0){
            this.scene.start("endGame");
        }
        
        
      
      if(bulletPatten == 2){
        for(var i = 1; i <= bulletCount; i++){
            bulletArray[i].alpha = 1;
            // bulletArray[i].x += random;
            bulletArray[i].y -= random;
            this.removeBullet(bulletArray[i].x, bulletArray[i].y, bulletArray[i]);
        }

        
      }  

      if(bulletPatten == 3){
        for(var i = 1; i <= bulletCount; i++){
            bulletArray[i].x += random;
            // bulletArray[i].y -= random; 
            this.removeBullet(bulletArray[i].x, bulletArray[i].y, bulletArray[i]);
        }
      }

    if(bulletPatten == 2 || bulletPatten == 3){
        boss_img = "boss_skill";
    }else if(bulletPatten == 1){
        boss_img = "boss";
    }
          
    
    };
    
    

    moveShip(character ,speed){
        // bullet.x -= speed;
        // // if(unitY != bullet.y) {
        //     bullet.y += 10 * (bullet.y - unitY) / (unitX - bullet.x);
        // // }
        // if(bullet.x < 0 || bullet.Y <0 || bullet.Y >0){
        //     unitY = character.y;
        //     unitX = character.x;
        //     this.resetShipPos(bullet);
        // }

        // if(bullet.x > window.innerWidth || bullet.Y <0 || bullet.Y >0){
        //     unitY = character.y;
        //     unitX = character.x;
        //     this.resetShipPos(bullet);
        // }
        // if(character.x > window.innerWidth /2){
        //     bullet.y -= 10 * (bullet.y + unitY) / (unitX + bullet.x);
        // }
        
    }

   removeBullet(x, y, bullet){
    
    if(x < 0 || x >window.innerWidth){
        for(var i = 1; i <= bulletCount ;i++){
            bullet.alpha = 0;
            bullet.x = window.innerWidth/2 - 80;
            bullet.y= window.innerHeight-550;
            if(bulletArray[i].destroy()){
                // bulletPatten = 1;
                console.log("성공");
            }
            
        }
        if(bulletArray[50].x > 0 || bulletArray[50].x < window.innerWidth ){
            // bulletPatten = 1;
        }
        
    }
    if(y < 0 || y > window.innerHeight){
            bullet.alpha = 0;
            bullet.x = window.innerWidth/2 - 80;
            bullet.y= window.innerHeight-550;
        
        if(bulletArray[50].y > 0 || bulletArray[50].y < window.innerHeight ){
            // bulletPatten = 1;
        }
        console.log(bulletPatten);    
    }

    if(this.unit.x > x && this.unit.x - 50 < x + 30 && this.unit.y > y && this.unit.y- 30 < y + 50){
        
        bullet.x = window.innerWidth/2 - 80;
        bullet.y=  window.innerHeight-550;
        unitHP--;
        if(unitHP < 0){
            unitHP = 10;
        }
        console.log("충돌");
        console.log(unitHP);
    }

    

    
   }

    gravity(character, floor, speed){
        
        if(jump == true){
            character.y += speed;
            const height = window.innerHeight - floor.height - 53;
            if(character.y > height){
                character.y = height;
                jump = false;
            }
        }
    }

    unitMove(character, speed){
        if(character.x < 20){
            character.x = 30;
        }
        if(character.x >= window.innerWidth-50){
            character.x = window.innerWidth-50;
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
            
            if(!jump){
                // let rp = setInterval(()=> {character.y > 669 ?  character.y -= 30  : clearInterval(rp)}, 50); 
                let repeat = setInterval(()=> {
                    if(character.y > 600){
                        character.y -= 20;
                        jump = true;
                    } else {
                        clearInterval(repeat);
                    } 
                    
                    }, 20
                ); 

            }
            
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

        // let repeat = setInterval(()=>attack.alpha > 0 ? attack.alpha -=0.1 : clearInterval(repeat), 50);
        let repeat = setInterval(()=>{
            if(attack.alpha > 0 && direction == 1){
                attack.alpha  -= 0.1;
                
                attack.x +=100;
            }else {
                clearInterval(repeat);
            }

            if(attack.alpha > 0 && direction == 2){
                
                
                attack.alpha  -= 0.1;
                attack.x -=100;
            }else {
                clearInterval(repeat);
            }   
        }, 5);

        if(direction == 2){
            attack.flipX = true;
            
        }
        
        if(attack.x > this.boss.x- 350 && attack.x < this.boss.x + 400 ){
            console.log(bossHP);
            bossHP -= 5;
         
            setTimeout(() => attack.destroy(),150);
        }

        setTimeout(() => attack.destroy(),150);
        
    }


}
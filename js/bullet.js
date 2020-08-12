
// class Bullet extends Phaser.GameObjects.Image{
//     constructor(scene){
//         var x = window.innerWidth/2 - 80;
//         var y = window.innerHeight-550;
        

//         super(scene, x, y, "bullet");
//         this.setScale(3);
        
//     }
// }

// class BulletPlugin extends Phaser.Plugins.BasePlugin {
//     constructor(PluginManager){
//         super(PluginManager);
//         PluginManager.registerGameObject('bullet', this.createBullet);
//     }

//     createBullet(){
//         return this.displayList.add(new Bullet(this.scene));
//     }
// }
Game.Preloader = function(game) {
    w = 1080
	h = 720
};

Game.Preloader.prototype = {
    
    preload:function(){
            
		//TEMP Items will be removed when all assets have been created
        this.load.image('player','assets/player.png')
        this.load.image('brick','assets/brick.png')
        this.load.image('keeper','assets/Keep.png')
        this.load.image('menu', 'assets/number-buttons-90x90.png', 270, 180);
       
        //Character Select
        this.load.image('Knight','assets/Player/Presentation/knight.png')
        this.load.image('Warrior','assets/Player/Presentation/Warrior.png')
        this.load.image('Wizard','assets/Player/Presentation/Wizard.png')
        this.load.image('Fighter','assets/Player/Presentation/Fighter.png')

        //Game Character
        this.load.spritesheet('KnightP','assets/Player/Sprites/KnightP.png',671,512,8)
        this.load.spritesheet('FighterP','assets/Player/Sprites/FighterP.png',671,512,8)
        this.load.spritesheet('WarriorP','assets/Player/Sprites/WarriorP.png',671,512,8)
        this.load.spritesheet('WizardP','assets/Player/Sprites/WizardP.png',671,512,8)
        
        //UI
        //MainMenu
        this.load.image('MainMenu','assets/UI/MainMenu_nobuttons.png')
        this.load.image('NEWG','assets/UI/BoutonNouveau.png')
        this.load.image('PLAY','assets/UI/BoutonJouer.png')
        this.load.image('Credit','assets/UI/BoutonCredits.png')
        this.load.image('GameOver','assets/UI/GameOver.jpg')
		this.load.image('PauseMenu','assets/UI/PauseScreen.png')
        
        //Enemy
        this.load.image('Bomby','assets/Enemy/Sprite/Bomby.png')
        //GameUI
        this.load.image('pauseBTN','assets/button.png')
        console.log('Assets Loaded')
        
        //Map
        this.load.image('ground','assets/Map/Ground.png')
        
		
		//Style
		Bstyle = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
		
        //Vars
		//transfer all vars declaraation here
    },
    
    create:function(){
        console.log('MainMenu');
        //this.stage.backgroundColor = '#0000FF'
        this.state.start('MainMenu');


    }
}
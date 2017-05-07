Game.MainMenu = function(game) {
    
};

//Game Functions
startC = function() {
    
    //Regarde si il faut charger une nouvelle partie ou charge l'ancienne
    if(Ptext == 'PLAY'){
        this.state.start('maze')
    } else {
		localStorage.clear()
        this.state.start('CharacterSelect')
    }
}; 

startC_N = function() {
    
    //Efface l'amcienne sauvegarde et commence le jeu
    localStorage.clear()
    this.state.start('CharacterSelect')
}

about = function() {
    //Chareg la partie credit
    alert('Demo ISN Game 1.0.0')
}

//Variable
var text;
var GameTitle;
var Version;
var version;
version = '1.0.0 DEMO'; //Version

Game.MainMenu.prototype = {
    
    preload:function() {
       
    },
    
    create:function(){
        players = this.add.group();
        players.enablebody;
        this.stage.backgroundColor = '#0000FF';
        
        
        //Style for Text
        var style = { font: "bold 36px Algerian", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
        
        this.add.image(0,0,'MainMenu')
        //ADD Text to MainMenu
        
    
        if (localStorage['save']){ //Cherche si un esauvegarde Existe et chnage le Menu Pour proposer de charger l'ancienne partie
            Ptext = 'PLAY'
        } else{
            Ptext = 'NEWG'
        }
        Play = this.add.image(448, 291, Ptext);
        Play.inputEnabled = true
        Play.events.onInputDown.add(startC, this);
        
        About = this.add.image(448, 408,'Credit');
        About.inputEnabled = true
        About.events.onInputDown.add(about, this);
        
        //Si une sauvegarde existe presente l'option de commencer une nouvelle partie
        if(localStorage['save']){
            Ngame = this.add.image(448, 522, 'NEWG');
            Ngame.inputEnabled = true
            Ngame.events.onInputDown.add(startC_N, this);
        
        }
        
        
        verStyle =  { font: "bold 16px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" }; //style du texte
        Version = this.add.text(0,100,version,verStyle); //Affiche la version du jeu
        Version.y = 720 - (Version.height);
        Version.setShadow(3,3,'rgba(0,0,0,0.5)',2);
        
     },
	 
	 update: function() {
		if(this.input.activePointer.x > 448 && this.input.activePointer.x < Play.width + 448) {
			if(this.input.activePointer.y > Play.y && this.input.activePointer.y < Play.y + Play.height) {
				Play.loadTexture('PLAY_Clicked', 0)
			} else {
				Play.loadTexture('PLAY', 0)
			}
			if(this.input.activePointer.y > About.y && this.input.activePointer.y < About.y + About.height) {
				About.loadTexture('Credit_Clicked', 0)
			} else {
				About.loadTexture('Credit', 0)
			}
			if( localStorage['save']) {
				if(this.input.activePointer.y > Ngame.y && this.input.activePointer.y < Ngame.y + Ngame.height) {
					Ngame.loadTexture('NEWG_Clicked', 0)
				} else {
					Ngame.loadTexture('NEWG', 0)
				}
			}
		}else {
			Play.loadTexture('PLAY', 0)
			About.loadTexture('Credit', 0)
			if (localStorage['save']) {
				Ngame.loadTexture('NEWG', 0)
			}
		}
	 }
    
}


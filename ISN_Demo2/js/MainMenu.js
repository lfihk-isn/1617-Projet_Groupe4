Game.MainMenu = function(game) {
    
};

//Game Functions
startC = function() {
    
    //Regarde si il faut charger une nouvelle partie ou charge l'ancienne
    if(Ptext == 'Play'){
        this.state.start('MainGame')
    } else {
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
            Ptext = 'New'
        }
        Play = this.add.image(448, 291, Ptext);
        Play.inputEnabled = true
        Play.events.onInputDown.add(startC, this);
        
        About = this.add.text(448, 408,Credit);
        About.inputEnabled = true
        About.events.onInputDown.add(about, this);
        
        //Si une sauvegarde existe presente l'option de commencer une nouvelle partie
        if(localStorage['save']){
            Ngame = this.add.text(448, 522, Ptext);
            Ngame.inputEnabled = true
            Ngame.events.onInputDown.add(startC_N, this);
        
        }
        
        
        verStyle =  { font: "bold 16px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" }; //style du texte
        Version = this.add.text(0,100,version,verStyle); //Affiche la version du jeu
        Version.y = 720 - (Version.height);
        Version.setShadow(3,3,'rgba(0,0,0,0.5)',2);
        
     },
    
}


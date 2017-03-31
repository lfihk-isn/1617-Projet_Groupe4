Game.MainMenu = function(game) {
    
};

//Game Functions
startC = function() {
    if(Ptext == 'Play'){
        this.state.start('MainGame')
    } else {
        this.state.start('CharacterSelect')
    }
}; 

startC_N = function() {
    localStorage.clear()
    this.state.start('CharacterSelect')
}

about = function() {
    alert('Demo ISN Game 1.0.0')
}

//Vars
var text;
var GameTitle;
var Version;
var version;
version = '1.0.0 DEMO';

Game.MainMenu.prototype = {
    
    preload:function() {
       
    },
    
    create:function(){
        players = this.add.group();
        players.enablebody;
        this.stage.backgroundColor = '#0000FF';
        
        
        //Style for Text
        var style = { font: "bold 64px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

        //ADD Text to MainMenu
        GameTitle = this.add.text(100, 50, "Labyrinthe Héroïque", style); 
        GameTitle.x = (1080/2)-(GameTitle.width/2) //To Center Text 
        GameTitle.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
    
        if (localStorage['save']){
            Ptext = 'Play'
        } else{
            Ptext = 'New Game'
        }
        Play = this.add.text(450, 250, Ptext, style);
        Play.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
        Play.x = (1080/2)-(Play.width/2) //To Center Text
        Play.inputEnabled = true
        Play.events.onInputDown.add(startC, this);
        
        About = this.add.text(450, 250, "About", style);
        About.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
        About.x = (1080/2)-(About.width/2) //To Center Text
        About.y = Play.y + 125
        About.inputEnabled = true
        About.events.onInputDown.add(about, this);
        
        //New Game
        if(localStorage['save']){
            Ngame = this.add.text(450, 250, 'New Game', style);
            Ngame.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
            Ngame.x = (1080/2)-(Ngame.width/2) //To Center Text
            Ngame.y = About.x + 125
            Ngame.inputEnabled = true
            Ngame.events.onInputDown.add(startC_N, this);
        
        }
        
        
        verStyle =  { font: "bold 16px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
        Version = this.add.text(0,100,version,verStyle);
        Version.y = 720 - (Version.height);
        Version.setShadow(3,3,'rgba(0,0,0,0.5)',2);
        
     },
    
}


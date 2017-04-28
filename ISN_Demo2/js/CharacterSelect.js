Game.CharacterSelect = function(game){
    
};



var player;
var ChampSlect = ['Knight','Wizard','Warrior','Fighter'];
var ChampSlectX = 0;
var ChampName;
var ArrowRight;
var ArrowLeft;
var Play;



Left = function() {
    ChampSlectX--;
    if (ChampSlectX < 0) {
        ChampSlectX = ChampSlect.length - 1
    }
    Cselect.destroy();
    Cselect = this.add.sprite(100,100,ChampSlect[ChampSlectX])
    Cselect.scale.setTo(0.5)
    Cselect.x = (this.game.width/2)-(Cselect.width/2)
    Cselect.y = 40
    ChampName.text = ChampSlect[ChampSlectX]
    
    var Cr = ChampSlect[ChampSlectX] + 'P'
}

Right = function() {
    ChampSlectX++
    if (ChampSlectX > ChampSlect.length - 1 ) {
        ChampSlectX = 0
    }
    Cselect.destroy();
    Cselect = this.add.sprite(100,100,ChampSlect[ChampSlectX])
    Cselect.scale.setTo(0.5)
    Cselect.x = (this.game.width/2)-(Cselect.width/2)
    Cselect.y = 40
    ChampName.text = ChampSlect[ChampSlectX]
    
    var Cr = ChampSlect[ChampSlectX] + 'P'
}

start = function() {
    var Cr = ChampSlect[ChampSlectX] + 'P'
	this.state.start('maze')
}


swipe = function() {
    return (Phaser.Point.distance(this.input.position, this.input.positionDown) > 150 && this.input.duration > 100 && this.input    .duration < 250);

}


Game.CharacterSelect.prototype = {
    
    preload: function(){
        console.log('CharacterSelect');   
    },
    
    create: function(){
        
    
        
        ArrowRight = this.add.text(100, 50, "→", Tstyle);  
        ArrowRight.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
        ArrowRight.anchor.setTo(1,0)
        
        ArrowLeft = this.add.text(100, 50, "←", Tstyle); 
        ArrowLeft.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
		
		Play = this.add.text(100,50,'Start',Tstyle);
		
        
        Cselect = this.add.sprite(100,100,'Knight')
        Cselect.scale.setTo(0.5)
        Cselect.x = (this.game.width/2)-(Cselect.width/2)
        
        Cselect.y = 40
        
        ChampName = this.add.text(0,0,ChampSlect[ChampSlectX],Tstyle);
        ChampName.anchor.setTo(0.5,0.5)
        ChampName.x = (this.game.width / 2)
        ChampName.y = Cselect.y + Cselect.height + ChampName.height/2
        
        ArrowRight.x = Cselect.x + Cselect.width
        ArrowRight.y = Cselect.y + Cselect.height
        
        ArrowLeft.x = Cselect.x
        ArrowLeft.y = Cselect.y + Cselect.height
		
		Play.x = (1080/2) - (Play.width/2)
		Play.y = ArrowLeft.y + ArrowLeft.height
        
        ArrowLeft.inputEnabled = true
        ArrowLeft.events.onInputDown.add(Left, this);
        
        ArrowRight.inputEnabled = true
        ArrowRight.events.onInputDown.add(Right, this);
		
		Play.inputEnabled = true
		Play.events.onInputDown.add(start, this);
        
       
        },
    
    update: function() {

    },
    
        
}

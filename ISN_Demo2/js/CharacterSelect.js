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
    Cselect = this.add.sprite(0,0,ChampSlect[ChampSlectX])
	this.world.bringToTop(Aleft)
	this.world.bringToTop(Aright)
    //ChampName.text = ChampSlect[ChampSlectX]
    
    var Cr = ChampSlect[ChampSlectX] + 'P'
}

Right = function() {
    ChampSlectX++
    if (ChampSlectX > ChampSlect.length - 1 ) {
        ChampSlectX = 0
    }
    Cselect.destroy();
    Cselect = this.add.sprite(0,0,ChampSlect[ChampSlectX])
	this.world.bringToTop(Aleft)
	this.world.bringToTop(Aright)
    //ChampName.text = ChampSlect[ChampSlectX]
    
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

        Cselect = this.add.sprite(0,0,'Knight')
		
		Aleft = this.add.sprite(0,0,'Arrow')
		Aleft.y = h - Aleft.height

		Aright = this.add.sprite(0,0,'Arrow')
		Aright.angle += 180
		Aright.anchor.setTo(1,1)
		Aright.y = h - Aright.height
		Aright.x = w - Aright.width
		
		Aleft.inputEnabled = true
		Aleft.events.onInputDown.add(Left,this)
		
		Aright.inputEnabled = true
		Aright.events.onInputDown.add(Right,this)
    },
    
    update: function() {
		
			if(this.input.activePointer.isDown == true){ //If a Question is Asked get user inputs and checks what answer
				var x = this.input.activePointer.x
				var y = this.input.activePointer.y
				
				if(x > 258 && x < 258+362 && y > 536 && y < 536+51) {
					this.start1()
				}
			}
    },
	
	start1: function() {
		this.state.start('maze')
	}
    
        
}

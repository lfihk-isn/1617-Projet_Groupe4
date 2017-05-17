//GAME Over Screen
Game.Victoire = function(game) {
    
};

Game.Victoire.prototype =  {
	
	preload:function() {
		
	},
	create:function() {
		localStorage.clear() //InFront to Prevent Player from exiting the game before his death is registered
		var Over = this.add.sprite(0,0,'Victoire')
		
		//Add HIGHSCORE SYSTEM
	},
	update:function() {
		if(this.input.activePointer.isDown){
			this.state.start('MainMenu')
		}
	}
}
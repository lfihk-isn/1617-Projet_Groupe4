//GAME Over Screen
Game.GameOver = function(game) {
    
};

Game.GameOver.prototype =  {
	
	preload:function() {
		
	},
	create:function() {
		localStorage.clear() //InFront to Prevent Player from exiting the game before his death is registered
		
		var Over = this.add.sprite(0,0,'GameOver')
		
		PLive = 3
	},
	update:function() {
		if(this.input.activePointer.isDown){
			this.state.start('MainMenu')
		}
	}
}
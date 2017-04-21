//GAME Over Screen
Game.GameOver = function(game) {
    
};

Game.GameOver.prototype =  {
	
	preload:function() {
		
	},
	create:function() {
		localStorage.clear() //InFront to Prevent Player from exiting the game before his death is registered
		var Over = this.add.sprite(0,0,'GameOver')
		Over.x = w/2 - Over.width/2
		Over.y = h/2 - Over.height/2
		
		var OverText = this.add.text(0,0,'Click Anywhere To Restart', Bstyle)
		OverText.x = w/2 - OverText.width/2
		OverText.y = Over.y + 200
		PLive = 3
	},
	update:function() {
		if(this.input.activePointer.isDown){
			this.state.start('MainMenu')
		}
	}
}
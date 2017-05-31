//PreBattleAnimation
Game.Banimation = function(game) {
    
};

Game.Banimation.prototype =  {
	
	preload:function() {
		
	},
	create:function() {
		loading = this.add.sprite(0, 0, 'Banimation');
		loading.animations.add('load');
		loading.animations.play('load', 10, false);
	},
	update:function() {
		loading.events.onAnimationComplete.add(function() {
			alert("Done")
		})
	}
}
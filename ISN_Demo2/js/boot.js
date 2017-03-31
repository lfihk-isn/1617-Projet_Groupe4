var Game = {};

Game.Boot = function(game){
   
};


Game.Boot.prototype = {
    init:function() {
        
        this.input.maxPointers = 1;
        this.stage.disableVisibilityChange = true;
    },
    
    preload:function() {
        console.log("RPG Game Booted");
    },
    
    create:function() {
       
        this.state.start('Preloader')
    }
}
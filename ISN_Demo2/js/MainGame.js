Game.MainGame = function(game) {
    
};


//Game Vars
var player;
var controls = {};
var Load;
var i = 0;
var SpawnTimer = 10000
var SaveTimer = 5000
//Styling
var GameStyle =  { font: "bold 19px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

Game.MainGame.prototype =  {
    
    preload: function() {
        //Checks if save file can be found
		
		
        
        if (localStorage['save']){
            //Load Save
            Px = parseInt(localStorage['positionx'])
            Py = parseInt(localStorage['positiony'])
            Type = localStorage['Ctype']

            
        } else {
            Px = 100
            Py = 100
        }
    },
    
    create: function() {
		
		//Sound
		music = this.add.audio('HeroQuest');

		//TErrible Sound Quality needs fixing
		
		//music.play();
		//music.volume = 50	
	
		//World
		this.world.setBounds(0, 0, 1920, 1920);
		
		//Controls
		controls = {
			up: this.input.keyboard.addKey(Phaser.Keyboard.W),
			down: this.input.keyboard.addKey(Phaser.Keyboard.S),
			left: this.input.keyboard.addKey(Phaser.Keyboard.A),
			right: this.input.keyboard.addKey(Phaser.Keyboard.D),
            esc: this.input.keyboard.addKey(Phaser.Keyboard.ESC),
            space: this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
		}
		
        this.map()
		
        

        pause_label = this.add.text(0, 0, 'Pause', { font: '24px Arial', fill: '#fff' });44
        pause_label.x = w - pause_label.width -2
        pause_label.y = 2
        pause_label.inputEnabled = true;
        pause_label.fixedToCamera = true
        pause_label.events.onInputUp.add(function() {
            //Pause
            this.game.paused = true;
            
            
            //Menu
            menu = this.add.sprite(w/2, h/2,'PauseMenu');
            menu.anchor.setTo(0.5, 0.5);
            menu.x = (this.camera.x)  + w/2
            menu.y = (this.camera.y)  + h/2
            
            var QP = true
        }, this);
        
        this.input.onDown.add(unpause, this );
        

    //Pause Function
    function unpause(event){
        if(typeof QP == 'undefined') {
            if(this.game.paused){ // Check if paused to appyly pause settings
                //Boundaries
                var x1 = 409, x2 = 678,
                    y1 = 312, y2 = 401;

                if(event.x > 252 && event.x < 252+135 && event.y > 264  && event.y < 264+42) {
					//Save
					this.save();
					
				} else if(event.x > 480 && event.x < 480+135 && event.y > 327  && event.y < 327+42) {
					menu.destroy();


                    // Unpause the game
                    this.game.paused = false;
				} else if(event.x > 480 && event.x < 480+135 && event.y > 450  && event.y < 450+42){
					this.save()
					window.close()
				} else if(event.x > 701 && event.x < 701+135 && event.y > 264  && event.y < 264+42) {
					//Option
					
					//NEED TO ADD
				}
					
                    

                
                else if (typeof menu != 'undefined'){
                    //Unpause Game
                    menu.destroy();


                    // Unpause the game
                    this.game.paused = false;
                }
            }
        }
        
        
};
            
		
		
        //Spawn
        this.time.events.loop(SpawnTimer,enemySpawn, this);
        this.time.events.loop(SaveTimer,this.save, this);
        
        function enemySpawn() {
            
            //Add battel chance
			this.save
			//Reset 
			ELive = 100;
            this.state.start('Battle')
        }
        
        
		//Call Creator
        
        this.Pcr(Px,Py);
            
           
        this.MapCreation();
		
		this.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
		//Objects
		players = this.add.group();
		walls = this.add.group();
		walls.enableBody = true;
		players.enableBody = true;
    
    },
    
    update: function() {
        
        //Every Second
        
		//Player Controls
		this.physics.arcade.collide(players,walls) //Collision
		player.body.velocity.x = 0;
		player.body.velocity.y = 0;
		

        if(controls.up.isDown) {
			player.body.velocity.y -= 250;
			player.angle = 0
            player.animations.play('walk',10)   
		} else
		if(controls.down.isDown) {
			player.body.velocity.y += 250;
			player.angle = 180
            player.animations.play('walk',10)
		} else 
		if(controls.left.isDown) {
			player.body.velocity.x -= 250;
			player.angle = -90	
            player.animations.play('walk',10)
		} else
		if(controls.right.isDown) {
			player.body.velocity.x += 250;
			player.angle = 90
            player.animations.play('walk',10)
		} else {
            player.animations.stop()
        }
        
        if(controls.esc.isDown){
            this.game.paused = true;
            
            
            //Menu
            menu = this.add.sprite(w/2, h/2,'PauseMenu');
            menu.anchor.setTo(0.5, 0.5);
            menu.x = (this.camera.x)  + w/2
            menu.y = (this.camera.y)  + h/2
        }
            
            
    },
    pauseUpdate: function() {
        if(controls.space.isDown){
            menu.destroy();
            this.game.paused = false
        }
    },
	
    
	
    
    //Creator
	Pcr : function(x,y) {
        if(localStorage['save']){
            var cr = Type
        }else {
            var cr = ChampSlect[ChampSlectX] + 'P'
        }
		player = this.add.sprite(x,y,cr,5) //Adds Player
		player.enableBody = true;
		player.scale.set(0.3)
        
        //Animation
        player.animations.add('walk')
        player.animations.add('idle')
        
		this.physics.arcade.enable(player)
		//	player.body.collideworldBounds = true
		player.anchor.setTo(0.5,0.5);
		player.body.collideWorldBounds = true;
        
        localStorage.Ctype = cr
    //
        
    
	},
	
    MapCreation : function() {
        //This function cretes the maze
        
    },
    
    save : function() {
        //This is the Game save function [RPG_demo1]
        //What is saved:
        //Map Array
        //PLayer Postion
        //PLayer charcter TYPE
        //...
        
        
        console.log('Game Saved')
        localStorage.save = true
        localStorage.positionx = player.x
        localStorage.positiony = player.y
        //localStorage.Ctype = '';
    },
    
    map : function() {
        
        var mapArray= [
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
        ];
        
        var posX = 0
        var posY = 0
        var j;
        var i;
        
        for(var i=0; i <mapArray.length;i++){
	       for(var j=0; j<mapArray[i].length;j++) {
		      if (mapArray[i][j] == 0) {
                this.add.sprite(posX,posY,'ground')
		      }
		      if (mapArray[i][j] == 1) {
                this.add.sprite(posX,posY,'ground')
		      }
		      posX += 671
	       }
	       posX = 0
	       posY += 512
        }
    },
    
    
    //Enemy Spwn
    enemySpawn : function() {
        document.title = i++
    }
	
}
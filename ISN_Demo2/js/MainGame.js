Game.MainGame = function(game) {
    
};

function Cheat(x,y) {
	
	//For Debugging Purposes {removed in productions}
	player.x = x*671
	player.y = y*512
}
//Game Vars
var zoom = 1
var player;
var controls = {};
var Load;
var i = 0;
var SpawnTimer = 30000
var SaveTimer = 5000
var TileX = 671
var TileY = 512
var stonex = []
var stoney = []
var LastStone = 0
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
			BScore = localStorage['BScore']
			Score = parseInt(localStorage['Score'])
			PLive = parseInt(localStorage['PLive'])
			stonex = JSON.parse(localStorage.StoneX);
			stoney = JSON.parse(localStorage.StoneY);
			OVD = parseInt(localStorage['OVD'])
			TNJD = parseInt(localStorage['TNJD'])
			PNJD = parseInt(localStorage['PNJD'])
        } else {
            Px = 1000
            Py = 750
			BScore = 0
			Score = 0
			PLive = 3
			OVD = 0
			TNJD = 0
			PNJD = 0
			stonex = []
			stoney = []
        }
    },
    
    create: function() {
		//this.world.scale.set(0.02)
		//Sound
		//music = this.add.audio('HeroQuest');
		//music.play();
		//music.volume = 50	
		//Terrible Sound Quality needs fixing
		
		
	
		//World
		this.world.setBounds(0, 0, (mazeWidth*TileX)*2, (mazeHeight*TileY)*2);
		
		//Controls
		controls = {
			up: this.input.keyboard.addKey(Phaser.Keyboard.W),
			down: this.input.keyboard.addKey(Phaser.Keyboard.S),
			left: this.input.keyboard.addKey(Phaser.Keyboard.A),
			right: this.input.keyboard.addKey(Phaser.Keyboard.D),
            esc: this.input.keyboard.addKey(Phaser.Keyboard.ESC),
            space: this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
		}
		walls = this.add.group();
		walls.enableBody = true;
		
		stones = this.add.group();
		
		
        this.map()
		this.MapCreation();
		if(BO$$ ==  null){
		//Generate the 3 wraps to the boss
		if(localStorage.OSpawn != null) {
			console.log('TTTTTTTT')
			SpawnBossPoint1 = localStorage.OSpawn
			var i = SpawnBossPoint1[0] + SpawnBossPoint1[1]
			var j = SpawnBossPoint1[2] + SpawnBossPoint1[3]
			if(OVD == 0) {
				console.log('OVD')
				this.add.sprite(i*671,j*512,'WarpZone')
			}
			
			SpawnBossPoint2 = localStorage.PNSpawn
			var i = SpawnBossPoint2[0] + SpawnBossPoint2[1]
			var j = SpawnBossPoint2[2] + SpawnBossPoint2[3]
			if(PNJD == 0) {
				console.log('PNJ')
				this.add.sprite(i*671,j*512,'WarpZone')
			}
			
			SpawnBossPoint3 = localStorage.TNSpawn
			var i = SpawnBossPoint3[0] + SpawnBossPoint3[1]
			var j = SpawnBossPoint3[2] + SpawnBossPoint3[3]
			if(TNJD == 0) {
				console.log('TNJ')
				this.add.sprite(i*671,j*512,'WarpZone')
			}
		} else {
			
			this.OverlordSpawn()
			this.PNBSpawn()
			this.TigressNinjaSpawn()
			 SpawnBossPoint1 = localStorage.OSpawn
			var i = SpawnBossPoint1[0] + SpawnBossPoint1[1]
			var j = SpawnBossPoint1[2] + SpawnBossPoint1[3]
			this.add.sprite(i*671,j*512,'WarpZone')
			 SpawnBossPoint2 = localStorage.PNSpawn
			var i = SpawnBossPoint2[0] + SpawnBossPoint2[1]
			var j = SpawnBossPoint2[2] + SpawnBossPoint2[3]
			this.add.sprite(i*671,j*512,'WarpZone')
			 SpawnBossPoint3 = localStorage.TNSpawn
			var i = SpawnBossPoint3[0] + SpawnBossPoint3[1]
			var j = SpawnBossPoint3[2] + SpawnBossPoint3[3]
			this.add.sprite(i*671,j*512,'WarpZone')
		}
		}
		
		console.log(parseInt(SpawnBossPoint1[0]+SpawnBossPoint1[1]))
		console.log(parseInt(SpawnBossPoint1[2]+SpawnBossPoint1[3]))
		
		console.log(parseInt(SpawnBossPoint2[0]+SpawnBossPoint2[1]))
		console.log(parseInt(SpawnBossPoint2[2]+SpawnBossPoint2[3]))
		
		console.log(parseInt(SpawnBossPoint3[0]+SpawnBossPoint3[1]))
		console.log(parseInt(SpawnBossPoint3[2]+SpawnBossPoint3[3]))
		
		
		
        
		
        pause_label = this.add.text(0, 0, 'Pause', { font: '24px Arial', fill: '#fff' });
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
					
					this.state.start('MainMenu')
					menu.destroy()
					this.game.paused = false
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
			ELive = 10;
			
			//ADD BATTLE Animation
			
			this.state.start('Battle')
        }
        
        
		//Call Creator
        
        this.Pcr(Px,Py);
        
		this.stoneADD();
		
		//Camera
		this.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
		//Objects
		players = this.add.group();
		
		players.enableBody = true;
		
		this.save()
		Error1 = this.add.text(0,0,"You have no beaten the Bosses yet",UIstyle)
		Error1.x = w/2 - Error1.width/2
		Error1.fixedToCamera = true
		
		ScoreText = this.add.text(0,0,"Score: " + String(Score),UIstyle)
		ScoreText.fixedToCamera = true
		
		MSpawnText = this.add.text(0,0,"An Enemy Has Appeared",UIstyle)
		MSpawnText.x = w/2 - MSpawnText.width/2
		MSpawnText.y = h/2 - MSpawnText.height/2
		MSpawnText.text = ""
		MSpawnText.fixedToCamera = true
		this.stage.backgroundColor = '#000000'
		
		//LYFE
		lyfe = this.add.sprite(0, 50, 'lyfe');
		lyfe.animations.add('load',[PLive-1]);
		lyfe.animations.play('load', 1, true);
		lyfe.fixedToCamera = true
		
    },
    
    update: function() {
		
        //Every Second
		//ScoreUpdate
		ScoreText.text = "Score: " + String(Score)
        //Check if Player Enter Boss Area
		GridX = Math.floor(player.x / TileX)
		GridY = Math.floor(player.y / TileY)
		if (GridX == parseInt(SpawnBossPoint1[0]+SpawnBossPoint1[1])  && GridY == parseInt(SpawnBossPoint1[2]+SpawnBossPoint1[3]) && OVD == 0) {
			//Wrap To Boss Overlord
			
			BO$$ = 0
			ELive = 30
			this.add.sprite((SpawnBossPoint1[0]+SpawnBossPoint1[1])*671,(SpawnBossPoint1[2] + SpawnBossPoint1[3])*512,'ground')
			this.state.start('BossBattle')
			
			//this.world.bringToTop(player);
		} 
		if (GridX == parseInt(SpawnBossPoint2[0]+SpawnBossPoint2[1])  && GridY == parseInt(SpawnBossPoint2[2]+SpawnBossPoint2[3]) && PNJD == 0) {
			BO$$ = 2
			ELive = 30
			this.state.start('BossBattle')
			this.add.sprite((SpawnBossPoint2[0]+SpawnBossPoint2[1])*671,(SpawnBossPoint2[2] + SpawnBossPoint2[3])*512,'ground')
		} 
		if (GridX == parseInt(SpawnBossPoint3[0]+SpawnBossPoint3[1])  && GridY == parseInt(SpawnBossPoint3[2]+SpawnBossPoint3[3]) && TNJD == 0) {
			BO$$ = 1
			ELive = 30
			this.add.sprite((SpawnBossPoint3[0]+SpawnBossPoint3[1])*671,(SpawnBossPoint3[2] + SpawnBossPoint3[3])*512,'ground')
			this.state.start('BossBattle')
		} 
		if(BScore == 3) {
			//Start Cinematic
			this.camera.x = 39 * 671
			this.camera.x = 512 * 23
			BScore = parseInt(BScore) + 1
			localStorage['BScore'] = parseInt(localStorage['BScore']) + 1
		}
		if (GridX == 39  && GridY == 23) {
			//Check if all Boss Have been Beaten then Ends the game
			if(BScore != 3 && Error1.text != "You have no beaten the Bosses yet") {
				//Text
				Error1.text = "You have no beaten the Bosses yet"
				
			} else if(BScore == 4){
				this.state.start("Victoire")
			}
			//Credit Scene
		} else if(Error1.text  == "You have no beaten the Bosses yet"){
			
			Error1.text = ""
			
		}
		
			
		
		//Player Controls
		this.physics.arcade.collide(player,walls) //Collision
		player.body.velocity.x = 0;
		player.body.velocity.y = 0;
		

        if(controls.up.isDown) {
			player.body.velocity.y -= 350;
			player.angle = 0
            player.animations.play('walk',10)   
		} else
		if(controls.down.isDown) {
			player.body.velocity.y += 350;
			player.angle = 180
            player.animations.play('walk',10)
		} else 
		if(controls.left.isDown) {
			player.body.velocity.x -= 350;
			player.angle = -90	
            player.animations.play('walk',10)
		} else
		if(controls.right.isDown) {
			player.body.velocity.x += 350;
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
		if(controls.space.isDown) {
			if ((new Date).getTime() > (LastStone + 10000)) {
				//stone.anchor.setTo(0.5)
				stone = stones.create(player.x,player.y,'brick')
				stone.x = stone.x - (stone.width/2)
				stone.y = stone.y - (stone.height/2)
				LastStone = (new Date).getTime()
				this.world.bringToTop(stones);
				this.world.bringToTop(player);
				stonex.push(stone.x)
				stoney.push(stone.y)
				this.save()
			} else {
				
			}
		}
            
            
    },
	render: function() {
		
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
        localStorage.BScore = BScore
        localStorage.Score = Score
        localStorage.PLive = PLive
		localStorage['OVD'] = OVD
		localStorage['TNJD'] = TNJD
		localStorage['PNJD'] = PNJD
		localStorage.setItem("StoneX", JSON.stringify(stonex));
		localStorage.setItem("StoneY", JSON.stringify(stoney));
        //localStorage.Ctype = '';
    },
    
    map : function() {
        this.world.scale.setTo(zoom)
        mapArray = maze
        
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
                wall = walls.create(posX,posY,'wall')
				wall.body.immovable = true;
		      }
		      posX += 671
	       }
	       posX = 0
	       posY += 512
        }
		maze[23][39]
		this.add.sprite(39*TileX,23*TileY,"wall2")
    },
	
	stoneADD : function() {
		for(var i=0;i <stonex.length;i++) {
			stones.create(stonex[i],stoney[i],'brick')
			this.world.bringToTop(stones);
			this.world.bringToTop(player);
		}
	},
	
	OverlordSpawn : function() {
		
			i = this.rnd.integerInRange(0, 40)
			j = this.rnd.integerInRange(0, 24)
			if(maze[j][i] == 0) {
				console.log('clear')
				//this.add.sprite(i*671,j*512,'wall2')
			} else {
				console.log('UnClear')
				this.OverlordSpawn()
			}
			
			if( i < 10) {
				i = String(i * 10)
				i = i[1] + i[0]
				
			}
			if (j < 10) {
				j = String(j * 10)
				j = j[1] + j[0]
			}
			
			localStorage.OSpawn = String(i) + String(j)
			
	},
	PNBSpawn : function() {
		
			a = this.rnd.integerInRange(0, 40)
			b = this.rnd.integerInRange(0, 24)
			if(maze[b][a] == 0) {
				console.log('clear')
				//this.add.sprite(a*671,b*512,'wall2')
			} else {
				console.log('UnClear')
				this.PNBSpawn()
			}
			
			if( a < 10) {
				a = String(a * 10)
				a = a[1] + a[0]
			}
			if (b < 10) {
				b = String(b * 10)
				b = b[1] + b[0]
			}
			
			
			localStorage.PNSpawn = String(a) + String(b)
			
	},
	TigressNinjaSpawn : function() {
		
			c = this.rnd.integerInRange(0, 40)
			d = this.rnd.integerInRange(0, 24)
			if(maze[d][c] == 0) {
				console.log('clear')
				//this.add.sprite(c*671,d*512,'wall2')
			} else {
				console.log('UnClear')
				this.TigressNinjaSpawn()
			}
			
			if( c < 10) {
				c = String(c * 10)
				c = c[1] + c[0]
			}
			if (d < 10) {
				d = String(d * 10)
				d = d[1] + d[0]
			}
			localStorage.TNSpawn  = String(c) + String(d)
			
	},
    
    
    //Enemy Spwn
    enemySpawn : function() {
        document.title = i++
    },
	
	CheatTeleport: function(x,y) {
		
	}
	
}
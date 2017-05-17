Game.maze = function(game) {

};
maze = [];
mazeWidth = 41;
mazeHeight = 25;
tileSize = 400;
Game.maze.prototype = {
	preload: function() {
		
		
		
	},
	create: function() {
		bot = this.add.sprite(0, 0, 'LoadingS');

		//  Here we add a new animation called 'run'
    //  We haven't specified any frames because it's using every frame in the texture atlas
    bot.animations.add('run');

    //  And this starts the animation playing by using its key ("run")
    //  15 is the frame rate (15fps)
    //  true means it will loop when it finishes
    bot.animations.play('run', 15, true);
		var moves = []
		var mazeGraphics;
		mazeGraphics = this.add.graphics(0, 0);
		if(localStorage.maze != null) {
			time1 = (new Date).getTime();
			maze2 = localStorage.maze
			maze2 = maze2.split(',').join('')
			maze3 = maze2.match(/.{1,41}/g)
			maze = maze3
			
			
			
			x = 100
		} else {
		//creates the array to sotre the maze
		for(var i = 0; i < mazeHeight; i ++){
            maze[i] = [];
			for(var j = 0; j < mazeWidth; j ++){
				maze[i][j] = 1;
			}
		}
		
		
		
        var posX = 1;
        var posY = 1;
        maze[posX][posY] = 0; 
        moves.push(posY + posY * mazeWidth);
		x = 0
		time1 = (new Date).getTime();
		var style = { font: "65px Arial", fill: "#ff0044", align: "center" };
		//Loading = this.add.text(0,0,'Loading Map...',style)
		//Loading.x = 1080/2 - Loading.width/2
		//Loading .y = 720/2
		tempArray = []
			
		this.time.events.loop(Phaser.Timer.SECOND/999999, function(){
			if(moves.length){       
				var possibleDirections = "";
					if(posX+2 > 0 && posX + 2 < mazeHeight - 1 && maze[posX + 2][posY] == 1){
						possibleDirections += "S";
						}
						if(posX-2 > 0 && posX - 2 < mazeHeight - 1 && maze[posX - 2][posY] == 1){
							 possibleDirections += "N";
						}
						if(posY-2 > 0 && posY - 2 < mazeWidth - 1 && maze[posX][posY - 2] == 1){
							 possibleDirections += "W";
						}
						if(posY+2 > 0 && posY + 2 < mazeWidth - 1 && maze[posX][posY + 2] == 1){
							 possibleDirections += "E";
						} 
						if(possibleDirections){
							 var move = this.rnd.between(0, possibleDirections.length - 1);
							 switch (possibleDirections[move]){
								  case "N": 
									   maze[posX - 2][posY] = 0;
									   maze[posX - 1][posY] = 0;
									   posX -= 2;
									   break;
								  case "S":
									   maze[posX + 2][posY] = 0;
									   maze[posX + 1][posY] = 0;
									   posX += 2;
									   break;
								  case "W":
									   maze[posX][posY - 2] = 0;
									   maze[posX][posY - 1] = 0;
									   posY -= 2;
									   break;
								  case "E":
									   maze[posX][posY + 2]=0;
									   maze[posX][posY + 1]=0;
									   posY += 2;
									   break;         
							 }
							 moves.push(posY + posX * mazeWidth);     
						}
						else{
							 var back = moves.pop();
							 posX = Math.floor(back / mazeWidth);
							 posY = back % mazeWidth;
						}
						
						x += 0.2
						//mazeGraphics.lineStyle(2, 0x00FF00, 1);
						//mazeGraphics.drawRect(1080/2 - 250, 720/2-100, x*5, 50)
						//document.title = x
						
					}      
			}, this);
		}
		
	},
	update : function() {
		
		if (x > 95.8) {
			localStorage.maze = maze
			this.state.start('MainGame')
		}
	}
}
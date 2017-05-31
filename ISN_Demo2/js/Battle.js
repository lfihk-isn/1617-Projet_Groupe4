    //Battle Screen
Game.Battle = function(game) {
    
};

//arrays

shuffle = function(array){
	var i = 0
    var j = 0
    var temp

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}
//UI 
var answers = 0
var AnswerPod
var BattleInfoText
var answerText
var BattleQuestion

var AnswerConfirmation = ''


//Arrays of all Non Epic enemies
// Add
var monster
var M;


//Monster Stat
var ELive = 10; //Decide Life system
var NoQ = true;
var counter = 0
var Attacks = ['','Country Question','Math']

var Box_X = [290,290,472,472,648,648]
var Box_Y = [246,336,246,336,246,336]

Game.Battle.prototype =  {
    
    preload:function() {
        //Decide Enemy
        M = this.rnd.integerInRange(0, 2) //RANDOM Number Non Epic Monsters
		var MonsterMUNE = ['Bomby','BookVamp','SpectreFloral'] 
        monster = MonsterMUNE[M];
        
        
    },
    
    create:function(){
		
		BS = this.add.sprite(0,0,'BasicBattleBG');
		lyfe = this.add.sprite(0, 0, 'lyfe');
		lyfe.animations.add('load',[PLive-1]);
		lyfe.animations.play('load', 1, true);
		lyfe.fixedToCamera = true
        var Mon = this.add.sprite(0,300,monster)
        Mon.scale.setTo(1)
		Mon.x = 445 - (Mon.width/2)
		Mon.y = 425
		
		AnswerConfirmationT = this.add.text(0,170,AnswerConfirmation, Bstyle)
		AnswerConfirmationT.x = 1080/2 - AnswerConfirmationT.width/2
		

        var counter = 2  // Math.floor((Math.random() * 2) + 1);  //between 0 and 1
           
        var attack = Attacks[counter]
        var Btext = monster + ' used ' + attack + ' as attack';
        BattleInfoText = this.add.text(0, 0, Btext, Bstyle);
        BattleInfoText.x = w/2- (BattleInfoText.width/2)
         
        if(attack == 'Math') {
			MathOP = ['+','-','*']
			Operator = MathOP[Math.floor((Math.random() * 3))]
			 //REMOVE
			Mathx = Math.floor((Math.random() * 100) + 1)
			Mathy = Math.floor((Math.random() * 100) + 1)
			z = 0
			answers = [Mathy]
			var err = null
			while(z <5){
				ans = Math.floor((Math.random() * 100) + 1)
				for(var j=0;j<answers.length;j++){
					if(ans == answers[j]){
						err = true
					}
				}
				if(err != true){
					z++
					answers.push(ans)
					err = null
				} else {
					err = null
				}
			}
			//answers = [Mathy, Math.floor((Math.random() * 100) + 0), Math.floor((Math.random() * 100) + 0), Math.floor((Math.random() * 100) + 0), Math.floor((Math.random() * 100) + 0), Math.floor((Math.random() * 100) + 0)] //shuffle answer array
			answers = shuffle(answers)
			if(Operator == '+'){
				Mathz = Mathx + Mathy;
			} else if(Operator == '-') {
				//Should We Have Negatives?
				Mathz = Mathx - Mathy;
			} else if(Operator == '*') {
				Mathx = Math.floor((Math.random() * 10) + 1)
				Mathy = Math.floor((Math.random() * 10) + 1)
				answers = [Mathy, Math.floor((Math.random() * 10) + 0), Math.floor((Math.random() * 10) + 0), Math.floor((Math.random() * 10) + 0), Math.floor((Math.random() * 1) + 0), Math.floor((Math.random() * 10) + 0)] //shuffle answer array
				z = 0
				answers = [Mathy]
				var err = null
				while(z <5){
					ans = Math.floor((Math.random() * 10) + 1)
					for(var j=0;j<answers.length;j++){
						if(ans == answers[j]){
							err = true
						}
					}
					if(err != true){
						z++
						answers.push(ans)
						err = null
					} else {
						err = null
					}
				}
				answers = shuffle(answers)
				Mathz = Mathx * Mathy;
			} else if(Operator == "/"){
				
				Mathx = Math.floor((Math.random() * 10) + 1)
				Mathy = Math.floor((Math.random() * 10) + 1)
				Mathx = Mathx * Mathy
				c=Mathz, Mathz=Mathy, Mathy=c;
			}
			
			var answer = String(Mathx) + ' ' + String(Operator) +' y = ' + String(Mathz);
			BattleQuestion = this.add.text(0, 100, answer, Bstyle);
			BattleQuestion.x = w/2 - BattleQuestion.width/2	
			

			for(var i = 0; i < 6; i++){
				answerText = this.add.text(0,0,answers[i], Bstyle)
				answerText.x = (Box_X[i])+135/2 - answerText.width/2
				answerText.y = (Box_Y[i])+(64/2) - answerText.height/2
			}
				
				
		}
               
               
        
    },
    
    update:function(){
		
	
			if(this.input.activePointer.isDown == true){ //If a Question is Asked get user inputs and checks what answer
				var x = this.input.activePointer.x
				var y = this.input.activePointer.y
				console.log(x)
				console.log(y)
				
				
				if( x > Box_X[0] && x < (Box_X[0] + 135) && y > Box_Y[0] && y < (Box_Y[0]+64)){
					choise = 0
					console.log('11')
					
				} else if( x > Box_X[1] && x < (Box_X[1] + 135) && y > Box_Y[1] && y < (Box_Y[1]+64)){
					choise = 1
					console.log('11')
					
				} else if( x > Box_X[2] && x < (Box_X[2] + 135) && y > Box_Y[2] && y < (Box_Y[2]+64)){
					choise = 2
					console.log('11')
					
				} else if( x > Box_X[3] && x < (Box_X[3] + 135) && y > Box_Y[3] && y < (Box_Y[3]+64)){
					choise = 3
					console.log('11')
					
				} else if( x > Box_X[4] && x < (Box_X[4] + 135) && y > Box_Y[4] && y < (Box_Y[4]+64)){
					choise = 4
					console.log('11')
					
				} else if( x > Box_X[5] && x < (Box_X[5] + 135) && y > Box_Y[5] && y < (Box_Y[5]+64)){
					choise = 5
					console.log('11')
					
				} else {
					choise = null
				}
				
				
				if (choise != null) {
					if(answers[choise] == Mathy) {
						//Correct
						this.stage.backgroundColor = '#00FF00'
						AnswerConfirmation = 'Juste'
						ELive -= 10
						if(ELive <= 0) {
							Score += 1
							if(PLive < 3) {
								PLive += 1
								localStorage.PLive = PLive
							}
							localStorage.Score = Score
							AnswerConfirmation = ''
							this.stage.background = "#0000FF"
							this.state.start('MainGame') //WOn
							
						}else {
							this.state.start(this.state.current)
						}
					} else {
						this.stage.backgroundColor = '#FF0000'
						AnswerConfirmation = 'Faux'
						//this.camera.shake(0.05, 500);
						PLive -= 1
						if(PLive <= 0){
							this.state.start('GameOver')
							//What Happens when player dies
						} else {
							this.state.start(this.state.current)
						}
					}
				}else {
					//OUTSIDE The Box
					//Nothing to do here
				}
                    
			}
		}
    }



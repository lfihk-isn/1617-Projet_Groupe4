    //Battle Screen
Game.Battle = function(game) {
    
};

//arrays

shuffle = function(array){
    
}
//UI 
var answers = 0
var AnswerPod
var BattleInfoText
var answerText
var BattleQuestion
Bstyle = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };



//Arrays of all Non Epic enemies
var MonsterMUNE = ['Bomby'] // Add
var monster
var M;


//Monster Stat
var ELive = 100; //Decide Life system
var NoQ = true;
var counter = 0
var Attacks = ['','Country Question','Math']


//Player stat

Game.Battle.prototype =  {
    
    preload:function() {
        //Decide Enemy
        M = 0 //RANDOM Number Non Epic Monsters
        monster = MonsterMUNE[M];
        
        
    },
    
    create:function(){
	
        var Mon = this.add.sprite(700,300,monster)
        Mon.scale.setTo(0.2)
        
    },
    
    update:function(){
		
		
       if(NoQ) {
           NoQ = false;
           AnswerPod = this.add.sprite(0,0,'menu')
           AnswerPod.x = w/2 - AnswerPod.width/2
           AnswerPod.y = 500
           AnswerPod.x = w/2 - AnswerPod.width/2

           var counter = 2  // Math.floor((Math.random() * 2) + 1);  //between 0 and 1
           
           var attack = Attacks[counter]
           var Btext = monster + ' used ' + attack + ' as attack';
           BattleInfoText = this.add.text(0, 0, Btext, Bstyle);
           BattleInfoText.x = w/2- (BattleInfoText.width/2)
           
           if(attack == 'Math') {
               Mathx = Math.floor((Math.random() * 100) + 0)
               Mathy = Math.floor((Math.random() * 100) + 0)
               Mathz = Mathx + Mathx;
               var answer = String(Mathx) + ' + y = ' + String(Mathz);
               answers = [Mathy, Math.floor((Math.random() * 100) + 0), Math.floor((Math.random() * 100) + 0), Math.floor((Math.random() * 100) + 0), Math.floor((Math.random() * 100) + 0), Math.floor((Math.random() * 100) + 0)] //shuffle answer array
               BattleQuestion = this.add.text(0, 100, answer, Bstyle);
               BattleQuestion.x = w/2 - BattleQuestion.width/2	
               
               answerText = this.add.text(0, 200, answers, Bstyle);
			   answerText.x = 405
			 
               
               
            }
       }
		
	
			if(this.input.activePointer.isDown == true && NoQ == false){ //If a Question is Asked get user inputs and checks what answer
				var x = this.input.activePointer.x
				var y = this.input.activePointer.y
				
				//Get Coords of Answer Pod 
				//Change to dymancly get the values
				var x1 = 405, x2 = 405 + 270
					y1 = 500, y2 = 500 + 180;


                if(x > x1 && x < x2 && y > y1 && y < y2){
					x = x - x1
					y = y - y1
					var choise =  Math.floor(x / 90) + 3*Math.floor(y / 90);
					console.log(choise)
					
					if(answers[choise] == Mathy) {
						//Correct
						NoQ = true
						ELive -= 10
						if(ELive <= 0) {
							this.state.start('MainGame')
						}else {
							this.state.start(this.state.current)
						}
					} else {
						//Wrong
					}
				}else {
					console.log('out')
				}
                    
			}
       }    
    }



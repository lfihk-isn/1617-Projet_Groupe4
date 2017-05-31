    //Battle Screen
Game.BossBattle = function(game) {
    
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
var MonsterMUNE = ['Bomby'] // Add
var monster
var M;

var BossMUNE = ['Overlord','Tig','PNJ']

//Monster Stat
var ELive = 10; //Decide Life system
var NoQ = true;
var counter = 0
var Attacks = ['###','Country Question','Math']



Game.BossBattle.prototype =  {
    
    preload:function() {
		
        monster = BossMUNE[BO$$];
		if(BO$$ == 0) {
			Bossx_X = [257,461,667,257,461,667]
			Bossx_Y = [401,401,401,498,498,498]
			Box_W = 188
			Box_H = 76
			
			
		} else if(BO$$ == 1) {
			Bossx_X = [307,464,632,307,464,632]
			Bossx_Y = [394,394,394,484,484,484]
			Box_W = 141
			Box_H = 69
			
		} else if(BO$$ == 2) {
			Bossx_X = [402,562,258,402,562,704]
			Bossx_Y = [258,258,346,346,346,346]
			Box_H = 61
			Box_W = 123
		}
        
        
    },
    
    create:function(){
		BS = this.add.sprite(0,0,monster+'BattleBG');
        //var Mon = this.add.sprite(0,180,monster)
        //Mon.scale.setTo(0.6)
		//Mon.x = w/2 - Mon.width/2
		
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
				answerText.x = (Bossx_X[i])+(Box_W/2) - answerText.width/2
				answerText.y = (Bossx_Y[i])+(Box_H/2) - answerText.height/2
			}
				
				
		}
               
               
        
    },
    
    update:function(){
		
	
			if(this.input.activePointer.isDown == true){ //If a Question is Asked get user inputs and checks what answer
				var x = this.input.activePointer.x
				var y = this.input.activePointer.y
				console.log(x)
				console.log(y)
				
				
				if( x > Bossx_X[0] && x < (Bossx_X[0] + Box_W) && y > Bossx_Y[0] && y < (Bossx_Y[0]+Box_H)){
					choise = 0
					console.log('11')
					
				} else if( x > Bossx_X[1] && x < (Bossx_X[1] + Box_W) && y > Bossx_Y[1] && y < (Bossx_Y[1]+Box_H)){
					choise = 1
					console.log('11')
					
				} else if( x > Bossx_X[2] && x < (Bossx_X[2] + Box_W) && y > Bossx_Y[2] && y < (Bossx_Y[2]+Box_H)){
					choise = 2
					console.log('11')
					
				} else if( x > Bossx_X[3] && x < (Bossx_X[3] + Box_W) && y > Bossx_Y[3] && y < (Bossx_Y[3]+Box_H)){
					choise = 3
					console.log('11')
					
				} else if( x > Bossx_X[4] && x < (Bossx_X[4] + Box_W) && y > Bossx_Y[4] && y < (Bossx_Y[4]+Box_H)){
					choise = 4
					console.log('11')
					
				} else if( x > Bossx_X[5] && x < (Bossx_X[5] + Box_W) && y > Bossx_Y[5] && y < (Bossx_Y[5]+Box_H)){
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
								PLive = 3 //PLAYER lives are reset when player defets boss
							}
							localStorage.Score = Score
							AnswerConfirmation = ''
							this.stage.background = "#0000FF"
							BScore = parseInt(BScore) + 1
							localStorage['BScore'] = parseInt(localStorage['BScore']) + 1
							if(BO$$ == 0) {
								OVD = 1
								localStorage['OVD'] = OVD
							}
							if(BO$$ == 1) {
								
								TNJD = 1
								localStorage['TNJD'] = TNJD
							}
							if(BO$$ == 2) {
								alert('PNJD')
								PNJD = 1
								localStorage['PNJD'] = PNJD
							}
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



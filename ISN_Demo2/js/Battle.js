//Battle Screen
Game.Battle = function(game) {
    
};

//arrays

shuffle = function(array){
    
}
//UI 

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
        M = 0
        monster = MonsterMUNE[M];
        
        
    },
    
    create:function(){
        var Mon = this.add.sprite(700,300,monster)
        Mon.scale.setTo(0.2)
        
    },
    
    update:function(){
       if(NoQ) {
           NoQ = false;
           var AnswerPod = this.add.sprite(0,0,'menu')
           AnswerPod.x = w/2 - AnswerPod.width/2
            
           AnswerPod.y = 500
           AnswerPod.inputEnabled = true;
           
           AnswerPod.x = w/2 - AnswerPod.width/2
           var counter = 2  // Math.floor((Math.random() * 2) + 1);  //between 0 and 1
           console.log(counter)
           var attack = Attacks[counter]
           var Btext = monster + ' used ' + attack + ' as attack';
           var BattleInfoText = this.add.text(0, 0, Btext, Bstyle);
           BattleInfoText.x = w/2- (BattleInfoText.width/2)
           
           if(attack == 'Math') {
               x = Math.floor((Math.random() * 100) + 0)
               y = Math.floor((Math.random() * 100) + 0)
               z = x + y;
               var answer = String(x) + ' + y = ' + String(z);
               var answers = [y, Math.floor((Math.random() * 100) + 0), Math.floor((Math.random() * 100) + 0), Math.floor((Math.random() * 100) + 0), Math.floor((Math.random() * 100) + 0), Math.floor((Math.random() * 100) + 0)] //shuffle answer array
               var BattleQuestion = this.add.text(0, 100, answer, Bstyle);
               BattleQuestion.x = w/2 - BattleQuestion.width/2
               
               var answerText = this.add.text(0, 200, answers, Bstyle);
               
               AnswerPod.events.onInputDown.add(Aclicked, this)
            }
       }           
           
           //Add answer System
           
           
                
           
       },
           
        Aclicked: function(event){
            
            var x1 = w/2 - 270/2;
            var y1 = h/2 - 180/2;
            var x = event.x - x1;
            var y = event.y - y1;

            // Calculate the choice 
            var choise = Math.floor(x / 90) + 3*Math.floor(y / 90);
            console.log(choise)
        }
    }



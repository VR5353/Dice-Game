'use strict';

const btnrolldice  = document.querySelector('.btn--roll');
const btnnewgame = document.querySelector('.btn--new');
const btnholdgame = document.querySelector('.btn--hold');
let playerscore1 = 0;
let playerscore2 = 0;
let playermainscore0 = document.querySelector('#score--0').textContent;
let playermainscore1 = document.querySelector('#score--1').textContent;
let player1 = 0;
let player2 = 0;
let activeplayer = 0;
let z= 0;
let play = true;
let totalscore = [99,99];
let dice  = document.querySelector('.dice');


function currentscorefun(a){

        z = z+a;
     document.querySelector(`#current--${activeplayer}`).textContent = z;
}

function changeplayer(){
    
     z=0;
     player1=0;
     document.querySelector(`#current--${activeplayer}`).textContent=0;
     activeplayer == 0 ? activeplayer = 1 : activeplayer = 0;
     playermainscore0 = document.querySelector('#score--0').textContent;
     playermainscore1 = document.querySelector('#score--1').textContent;
     if(activeplayer==1){
          document.querySelector(`.player--0`).style.backgroundColor ='#FFA1CF';
          document.querySelector(`.player--1`).style.backgroundColor ='#FFD6EC' ;
         
     
     }
     else{
          document.querySelector(`.player--1`).style.backgroundColor ='#FFA1CF';
          document.querySelector(`.player--0`).style.backgroundColor ='#FFD6EC';
          
     }
     
    }
btnrolldice.addEventListener('click', function(){
     if(play){
          let dicecount = Math.trunc(Math.random() * (6-1) + 1);
          dice.src = `dice-${dicecount}.png`;
                 
         if(dicecount==1){
             
                   console.log(player1);
                   changeplayer();
                
              }
              else{
                   currentscorefun(dicecount);
                   
                   console.log(playermainscore0);
                   console.log(playermainscore1);
                       }
     }
     
     });
          

btnholdgame.addEventListener('click' , function() {
   if(play){
     player1=0;
     player1 = document.querySelector(`#current--${activeplayer}`).textContent;
     totalscore[activeplayer] += parseInt (player1);
     document.getElementById(`score--${activeplayer}`).textContent = 
     totalscore[activeplayer];
     
     
     if(totalscore[activeplayer] >=100){
          play=false;
          document.querySelector(`.player--${activeplayer}`).classList.add('.player--winner');
          console.log(`${activeplayer}`);
     document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
}else{
     
     changeplayer();
     }
   }
       
       
});

btnnewgame.addEventListener('click' , function(){
          z=0;
          play=true;
          player1=0;
          activeplayer=0;
          totalscore = [0,0];
          document.querySelector('#score--0').textContent=0;      
          document.querySelector('#score--1').textContent=0;      
          document.querySelector('#current--0').textContent=0;      
          document.querySelector('#current--1').textContent=0;      


});      
          
          





          




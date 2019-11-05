//bouhnach fatima zohra // Dalle sanaa // pc16
const SCORE_MAX=30;
var joueurActif = 0;
const activeJ1 = document.querySelector(".panel-joueur-0");
const activeJ2 = document.querySelector(".panel-joueur-1");
const NomJoueur1= document.querySelector("#nom-0");

var score1= document.querySelector("#score-0");
const NomJoueur2= document.querySelector("#nom-1");
var score2= document.querySelector("#score-1");
const image= document.querySelector(".de");
const tempScore1=document.querySelector("#courent-0");
const tempScore2=document.querySelector("#courent-1");


const btnNew=document.querySelector(".btn-new");
const btnLancer=document.querySelector(".btn-lancer");
const btnPasse=document.querySelector(".btn-passe");

btnNew.addEventListener("click",init,false);
btnLancer.addEventListener("click",lancer,false);
btnPasse.addEventListener("click",joueurSuivant,false);

function init() {
	
	score1.innerHTML=0;
	score2.innerHTML=0;
	tempScore1.innerHTML=0;
	tempScore2.innerHTML=0;
	image.style.display="none";
	activeJ1.classList.add("actif");
	activeJ2.classList.remove("actif");

	btnLancer.style.disabled =false;
	btnPasse.style.disabled =false;
}

function lancer(){
	var de = Math.floor(Math.random()*6+1);
	image.style.display="inline";
	image.setAttribute('src',`de-${de}.png`);
	console.log(parseInt(tempScore1.innerHTML));


	if(joueurActif==0){
		if(de!=1){
			var xx = parseInt(tempScore1.innerHTML);
			xx+=de;
			tempScore1.innerHTML = xx;
			btnPasse.addEventListener("click",function(){score1.innerHTML=xx;},false);
			if(score1>=SCORE_MAX){
				btnLancer.disabled =true;
				btnPasse.disabled =true;
			}
			
		}
		else{
			tempScore1.innerHTML = 0;
			joueurSuivant();
		}
			
		
	}
	else{
		if(de!=1){
			var xx = parseInt(tempScore2.innerHTML);
			xx+=de;
			tempScore2.innerHTML = xx;
			
		}
		else{
			tempScore2.innerHTML = 0;
			joueurSuivant();
		}
		
	}
}

function passe(){
	if(joueurActif==0){
		joueurActif=1;
	}
	else{
		joueurActif=0;
	}
	activeJ1.classList.toggle("actif");
	activeJ2.classList.toggle("actif");
	// if

}
function joueurSuivant(){
	image.style.display="none";
	tempScore1.innerHTML = 0;
	console.log(joueurActif);
	passe();
	console.log(joueurActif);

}


var smax;
if(score1>score2){smax = score1;}
else{smax = score2;	}


var text = document.createTextNode(`lmax score: ${smax}`);
activeJ2.appendChild(text);




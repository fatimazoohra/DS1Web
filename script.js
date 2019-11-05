const SCORE_MAX=100;
const joueurActif = 0;
const activeJ1 = document.querySelector(".panel-joueur-0");
const activeJ2 = document.querySelector(".panel-joueur-1");
const NomJoueur1= document.querySelector("#nom-0");

const score1= document.querySelector("#score-0");
const NomJoueur2= document.querySelector("#nom-1");
const score2= document.querySelector("#score-1");
const image= document.querySelector(".de");
const tempScore1=document.querySelector("#courent-0");
const tempScore2=document.querySelector("#courent-1");


const btnNew=document.querySelector(".btn-new");
const btnLancer=document.querySelector(".btn-lancer");
const btnPasse=document.querySelector(".btn-passe");

btnNew.addEventListener("click",init,false);
btnLancer.addEventListener("click",lancer,false);
btnPasse.addEventListener("click",passe,false);

function init() {
	score1.innerHTML=0;
	score2.innerHTML=0;
	tempScore1.innerHTML=0;
	tempScore2.innerHTML=0;
	image.style.display="none";
	activeJ1.classList.add("actif");
	activeJ2.classList.remove("actif");
}

function lancer(){
	var de = Math.floor(Math.random()*6+1);
	image.style.display="inline";
	image.setAttribute('src',`de-${de}.png`);
	console.log(parseInt(tempScore1.innerHTML));
	

	if(joueurActif==0){
		var xx = parseInt(tempScore1.innerHTML);
		xx+=de;
		tempScore1.innerHTML = xx;
	}
	else{
		var xx = parseInt(tempScore2.innerHTML);
		xx+=de;
		tempScore2.innerHTML = xx;
	}
}

function passe(){

}

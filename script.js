const SCORE_MAX=100;
const activeJ1 = document.querySelector(".panel-joueur-0");
const activeJ2 = document.querySelector(".panel-joueur-1");
const Joueur1= document.querySelector("#nom-0");

const score1= document.querySelector("#score-0");
const Joueur2= document.querySelector("#nom-1");
const score2= document.querySelector("#score-1");
const image= document.querySelector(".de");
const courentScore1=document.querySelector("#courent-0");
const courentScore2=document.querySelector("#courent-1");


const btnNew=document.querySelector(".btn-new");
const btnLancer=document.querySelector(".btn-lancer");
const btnPasse=document.querySelector(".btn-passe");

btnNew.addEventListener("click",init,false);
btnLancer.addEventListener("click",lancer,false);
btnPasse.addEventListener("click",passe,false);

function init() {
	score1.innerHTML=0;
	score2.innerHTML=0;
	courentScore1.innerHTML=0;
	courentScore2.innerHTML=0;
	image.style.display="none";
	activeJ1.classList.toggle("actif");
	activeJ2.classList.toggle("actif");
}

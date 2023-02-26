const input = document.querySelector('#font-size-control');
//console.log(input.value);
const text = document.querySelector('#text');
function zmiana(){
    //text.setAttribute("value", input.value);
    text.style.fontSize =input.value+"px";
}
input.addEventListener("change", zmiana);

class Hero {
    constructor(name,strength,stamina,esencja,okruchy,hp){
    this.name=name;
    this.strength=strength;
    this.stamina=stamina;
    this.esencja=esencja;
    this.okruchy=okruchy;
    this.hp=hp;
	}
}
class Enemy {
  constructor(name,strength,stamina,hp){
    this.name=name;
    this.strength=strength;
    this.stamina=stamina;
    this.hp=hp
  }
}
function Random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const hero1 =new Hero(
    "Cezar", Random(1,6), Random(1,6), Random(1,6), 50,50
);
const enemy1 =new Enemy(
    "Maślak",1, 1, 10
);

const enemy2 =new Enemy(
    "Muchomor",2, 2, 10
);
const enemy3 =new Enemy(
    "Pieczarka", 3, 3, 10
);
function DMG(kto,komu){
    let dmg =Math.max(kto.strength -komu.stamina,1)
   komu.hp-=dmg;
   //console.log(dmg);
   return dmg;
}

console.log (hero1,enemy1);
DMG(hero1,enemy1);
console.log (hero1,enemy1);
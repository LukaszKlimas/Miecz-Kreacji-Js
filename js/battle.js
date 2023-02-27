function Random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Funkcja  zwraca dmg zandany przez kto i zmienia hp komu
function DMG(kto,komu){
   let dmg =Math.max(kto.dmg -komu.pancerz,0)
   komu.hp-=dmg;
   //console.log(dmg);
   return dmg;
}
//Testy
console.log("Test1");
console.log (hero1,enemy1);
DMG(hero1,enemy1);
console.log (hero1,enemy1);

//zmiana paska HP
const EnemyHP1 = document.querySelector('#EnemyHP1');
const HeroHP1 = document.querySelector('#HeroHP1');

console.log("Test2");
console.log(HeroHP1.value);
HeroHP1.value-=DMG(enemy2,hero1);
console.log(HeroHP1.value);

function Battle(){
    
}


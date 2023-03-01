//Temp kopjowanie skilli
class Skill{
        constructor(kategoria,nazwa, opis, cd, koszt){
            this.kategoria=kategoria;
            this.nazwa=nazwa;
            this.opis=opis;
            this.cd=cd;
            this.koszt=koszt;
        }
        ShowSkill(){
                if(this.cd!=null){
                    return `${this.nazwa}: ${this.opis} CD:${this.cd}, koszt:${this.koszt}.`;
                }
                return `${this.nazwa}: ${this.opis}`;
            }
    }
    const SkillStyl1 =[
        new Skill("Ostrze Penatgramu","Atak przebijający","Redukuje pancerz przeciwnika na 1 turę o Esencję.",3,20),
        new Skill("Ostrze Penatgramu","Osłabienie","Przeciwnik przez 1 turę zadaje mniejsze obrażenia o Esencję.",3,20),
        new Skill("Ostrze Penatgramu","Kontratak lotosu","Jeśli przeciwnik zadał 0 obrażeń, kontratakujesz.",1,10),
        new Skill("Pięciu Smoków","Moc 5-Smoków","Następny atak ignoruje buffy przeciwnika.",4,20),
        new Skill("Pięciu Smoków","Siła 5-Smoków","Następny atak ma większe bazowe obrażenia o (40+5xEsencja)%.",4,20),
        new Skill("Pięciu Smoków","Pancerz 5-Smoków","Zwiększa pancerz na 1 turę o Esencja.",2,10),
    ];

// Tymczasowe zrobienie obiektów do bitwy
const hero1={
        name:"testowy1",dmg:3,pancerz:3,esencja:3,okruchy:50,hp:50, MaxHP:30, MaxMP:50, Statusy:[]
}
const enemy1={
        name:"testowy2",dmg:5,pancerz:2,hp:10,lokacja:"kanały,", Statusy:[]
}
// */
//Funkcja  zwraca dmg zandany przez kto i zmienia hp komu
function DMG(kto,komu){
   let bonsusDmg=0;
        if(kto.Statusy!=null){//sprawdzamy czy kto ma buff do dmg
                let del=[];
                //biegniemy po całej tablicy, zmniejszamy tury buffów,
                //a te co miałby 0 , zapisujemy indeksy do del
                for(let i=kto.Statusy.length-1; i>=0; i--){
                        if(kto.Statusy[i][1]=="dmg"){
                                bonsusDmg+=kto.Statusy[i][2];
                                if(kto.Statusy[i][0]==1){
                                        //console.log("jest"+i);
                                       del.push(i);                                       
                                }else{
                                        kto.Statusy[i][0]-=1;}
                                }
                        } 
                //to tera usuwamy pokleji Statusy, które miały zniknąć
                //bez obaw del jest posortowane od największej do najmniejszej
                del.forEach(el => {
                        kto.Statusy.splice(el,1);  
                });
                }    
   let dmg =Math.max(kto.dmg -komu.pancerz,0)
   komu.hp-=dmg;
   //console.log(dmg);
   return dmg;
}
//Pobranie paska HP i MP
const PasekEnemyHP1 = document.querySelector('#EnemyHP1');
const PasekHeroHP1 = document.querySelector('#HeroHP1');
const PasekHeroMP1 = document.querySelector('#HeroMP1');
//Ustawienie HP i MP na paskach
//Narazie na tymczasowych obiektach:
PasekEnemyHP1.max=enemy1.hp;
PasekHeroHP1.max=hero1.MaxHP;
PasekHeroMP1.max=hero1.MaxMP;
PasekEnemyHP1.value=enemy1.hp;
PasekHeroHP1.value=hero1.MaxHP;
PasekHeroMP1.value=hero1.MaxMP;
//Pobranie guzików skili 1-6
const ButtonSkill1 = document.querySelector('#ButtonSkill1');
const ButtonSkill2 = document.querySelector('#ButtonSkill2');
const ButtonSkill3 = document.querySelector('#ButtonSkill3');
const ButtonSkill4 = document.querySelector('#ButtonSkill4');
const ButtonSkill5 = document.querySelector('#ButtonSkill5');
const ButtonSkill6 = document.querySelector('#ButtonSkill6');
//Bez funksji strzałkowych guziki nie działają.
const skill1=()=>{
        skill(1);
}
const skill2=()=>{
        skill(2);
}
const skill3=()=>{
        skill(3);
}
const skill4=()=>{
        skill(4);
}
const skill5=()=>{
        skill(5);
}
const skill6=()=>{
        skill(6);
}
//Dodanie nasłuchania klikania
ButtonSkill1.addEventListener("click", skill1);
ButtonSkill2.addEventListener("click", skill2);
ButtonSkill3.addEventListener("click", skill3);
ButtonSkill4.addEventListener("click", skill4);
ButtonSkill5.addEventListener("click", skill5);
ButtonSkill6.addEventListener("click", skill6);
//Guzik start - tylko przeglądarkowy
const StartBtn = document.querySelector('#Start');
const CilkStart=()=>{
        
}
StartBtn.addEventListener("click", CilkStart);

function skill(numer){
 console.log(SkillStyl1[numer-1].ShowSkill());
        switch (numer){
                case 1:
 //Redukuje pancerz przeciwnika na 1 turę o Esencję.
 enemy1.Statusy.push([1,"pancerz",-hero1.esencja]);
                break;
                case 2:
 //Przeciwnik przez 1 turę zadaje mniejsze obrażenia o Esencję.
 enemy1.Statusy.push([1,"dmg",-hero1.esencja]);
                break;
                case 3:
//Jeśli przeciwnik zadał 0 obrażeń, kontratakujesz.
 //będzie trudno!
DMG(hero1,enemy1);
                break;
                case 4:
 //Następny atak ignoruje buffy przeciwnika.
 hero1.Statusy.pop(); console.log(hero1);//usuwa ostatni element
                break;
                case 5:
//Następny atak ma większe obrażenia o (40+5xEsencja)%.
hero1.Statusy.push([1,"dmg",Math.round(hero1.dmg*(40+5*hero1.esencja)/100)]);
console.log(hero1);
                break;
                case 6:
//Zwiększa pancerz na 1 turę o Esencja.
hero1.Statusy.push([1,"pancerz",hero1.esencja]);
                break;
        }
}

//Testy
/*
console.log("Test1");
console.log (hero1.hp,enemy1.hp);
DMG(hero1,enemy1);
DMG(enemy1,hero1);
console.log (hero1.hp,enemy1.hp);

console.log("Test2");
console.log(PasekHeroHP1.value);
PasekHeroHP1.value-=DMG(enemy1,hero1);
console.log(PasekHeroHP1.value);

function Battle(){
    
}
*/

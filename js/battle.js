// plik Hero
class Hero {
        constructor(name,strength,stamina,esencja,okruchy,hp){
        this.name=name;
        this.strength=strength;
        this.stamina=stamina;
        this.esencja=esencja;
        this.okruchy=okruchy;
        this.hp=hp;
        this.dmg=strength; //w momencie konstrukcji dmg=strenght
        this.pancerz=stamina;
        this.lv=1;
        this.MaxHP=hp;
        this.MaxMP=okruchy;
        //this.SkillTree=[];
        this.Statusy=[];
            }
        LevelUP(gdzie){
            switch (gdzie){
                case "strength": this.strength+=1; break;
                case "stamina" : this.stamina+=1; break;
                case "esencja" : this.esencja+=1; break;
            }
            this.okruchy+=10; 
            this.hp+=10;
            this.MaxHP+=10;
            this.MaxMP+=10;
            this.lv+=1;
        }
        ShowHero(){
                let a="";
            for (const key in this) {
                a+=(key+": "+this[key]+"\n");
            }
            return a;
        }
    }
    const UnlockableHero =[
        //new Hero();
    ];
    function Random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function RandomHero(){
        const heroRand =new Hero(
            "Cezar", Random(1,6), Random(1,6), Random(1,6), 50,50
        );
        return heroRand;
    }
//koniec pliku hero
//Plik Skill
class SkillPasywny{
        constructor(kategoria,nazwa, opis){
            this.kategoria=kategoria;
            this.nazwa=nazwa;
            this.opis=opis;
        }
        ShowSkill(){
            if(this.cd!=null){
                return `${this.nazwa}: ${this.opis} CD:${this.cd}, koszt:${this.koszt}.`;
            }
            return `${this.nazwa}: ${this.opis}`;
        }
    }
    class Skill extends SkillPasywny{
        constructor(kategoria,nazwa, opis, cd, koszt){
                super(kategoria,nazwa, opis,);
                this.cd=cd;
                this.koszt=koszt;
            }
    }
    const Skills =[
        new Skill("Ostrze Penatgramu","Atak przebijający","Redukuje pancerz przeciwnika na 1 turę o Esencję.",3,20),
        new Skill("Ostrze Penatgramu","Osłabienie","Przeciwnik przez 1 turę zadaje mniejsze obrażenia o Esencję.",3,20),
        new Skill("Ostrze Penatgramu","Kontratak lotosu","Jeśli przeciwnik zadał 0 obrażeń, kontratakujesz.",1,10),
        new Skill("Pięciu Smoków","Moc 5-Smoków","Następny atak ignoruje buffy przeciwnika.",4,20),
        new Skill("Pięciu Smoków","Wzmocnienie 5-Smoków","Zwiększa bazowe obrażenia na 1 turę o Esencję.",3,20),
        new Skill("Pięciu Smoków","Pancerz 5-Smoków","Zwiększa pancerz na 1 turę o Esencja.",3,20),
        new Skill("Podstawy Przetrwania","Odpoczynek podróżnika", "Regeneruje po każdej walce dodatkowe [10+(Esencja x Lv)] HP i MP."),
        new Skill("Podstawy Przetrwania","Opoczynek łowcy", "Podwaja regeneracje podróżnika."),
        new Skill("Podstawy Przetrwania","Opoczynek królewski", "Potraja regeneracje podróżnika."),
        new Skill("Podstawy Przetrwania","Rzemiosło-podstawy", "Zamiast odpoczynku w obozie możesz tworzyć losowy pospolity ekwipunek."),
        new Skill("Podstawy Przetrwania","Rzemiosło-zaawansowane", "Zamiast odpoczynku w obozie możesz tworzyć wybrany pospolity ekwipunek."),
        new Skill("Podstawy Przetrwania","Alchemia-podstawy", "Zamiast odpoczynku w obozie możesz tworzyć losową pospolitą miksturę."),
        new Skill("Podstawy Przetrwania","Alchemia-podstawy", "Zamiast odpoczynku w obozie możesz tworzyć losową wybraną miksturę."),
    ];
//koniec pliku Skill
//Plik enemy
class Enemy {
        constructor(name,dmg,pancerz,hp,lokacja){
          this.name=name;
          this.dmg=dmg;
          this.pancerz=pancerz;
          this.hp=hp
          this.Statusy=[];
          this.lokacja=lokacja;
        }
        ShowEnemy(){
          for (const key in this) {
              console.log(key+": "+this[key]);
          }
      }
      }
      const bestiary =[
          new Enemy("Maślak",3, 0, 10,"Kanały"),
          new Enemy("Muchomor",5, 0, 10,"Kanały"),
          new Enemy("Pieczarka", 4, 1, 10,"Kanały")
    
      ];
      function AddNewEnemy(name,dmg,pancerz,hp,lokacja){
          bestiary.push(new Enemy (name,dmg,pancerz,hp,lokacja));
    }
//koniec pliku enemy
// Tymczasowe zrobienie obiektów do bitwy, testy
const hero1= new Hero("testowy1",3,3,3,50,22)
const enemy1=new Enemy("testowy2",5,2,30,"kanały");
const SkillStyl1=Skills.slice(0,6);
//Pobranie ataku i pancerza
const EnemyAtak= document.querySelector('#EnemyAtak');
const EnemyPancerz=document.querySelector('#EnemyPancerz');
const HeroAtak= document.querySelector('#HeroAtak');
const HeroPancerz=document.querySelector('#HeroPancerz');
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
PasekHeroHP1.value=hero1.hp;
PasekHeroMP1.value=hero1.okruchy;
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
//Guzik start 
const StartBtn = document.querySelector('#Start');
const CilkStart=()=>{
        Batlle();
}
StartBtn.addEventListener("click", CilkStart);
//Okej, funkcje
//Funkcja  zwraca dmg zandany przez kto i zmienia hp komu
function DMG(kto,komu){
        let bonsusDmg=kto.dmg;
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
                     //nie można atakować ujemnie!
                     bonsusDmg=Math.max(bonsusDmg,0);
                     let pancerzAktualny=komu.pancerz;
                     if(komu.Statusy!=null){//sprawdzamy czy komu ma buff do pancerza
                             let del=[];
                             //biegniemy po całej tablicy, zmniejszamy tury buffów,
                             //a te co miałby 0 , zapisujemy indeksy do del
                             for(let i=komu.Statusy.length-1; i>=0; i--){
                                     if(komu.Statusy[i][1]=="pancerz"){
                                        pancerzAktualny+=komu.Statusy[i][2];
                                             if(komu.Statusy[i][0]==1){
                                                     //console.log("jest"+i);
                                                    del.push(i);                                       
                                             }else{
                                                     komu.Statusy[i][0]-=1;}
                                             }
                                     } 
                             //to tera usuwamy pokleji Statusy, które miały zniknąć
                             //bez obaw del jest posortowane od największej do najmniejszej
                             del.forEach(el => {
                                     komu.Statusy.splice(el,1);  
                             });
                             }
                             //pancerz nie może być ujemny!
                             pancerzAktualny=Math.max(pancerzAktualny,0);
        let dmg =Math.max(bonsusDmg -pancerzAktualny,0);
        komu.hp-=dmg;
        //jeszcze aktualizacja paska, poprostu obu, potem pomyśle
        PasekEnemyHP1.value=enemy1.hp;
        PasekHeroHP1.value=hero1.hp;
        return dmg;
     }
//Funkcja  zwraca dmg zandany przez kto w pojednczym ataku i zmienia hp komu
function wielokrotnyDMG(kto,komu,ile){
             let bonsusDmg=kto.dmg;
             let pancerzAktualny=komu.pancerz;
             if(kto.Statusy!=null){//sprawdzamy czy kto ma buff do dmg
                     //biegniemy po całej tablicy, i NIC NIE robimy z turami bufów!
                     for(let i=kto.Statusy.length-1; i>=0; i--){
                             if(kto.Statusy[i][1]=="dmg"){
                                     bonsusDmg+=kto.Statusy[i][2];
                             } 
                     }
             }
                                  //nie można atakować ujemnie!
                                  bonsusDmg=Math.max(bonsusDmg,0);       
             if(komu.Statusy!=null){//sprawdzamy czy kto ma buff do pancerza
                     //biegniemy po całej tablicy, i NIC NIE robimy z turami bufów!
                     for(let i=kto.Statusy.length-1; i>=0; i--){
                             if(komu.Statusy[i][1]=="pancerz"){
                                pancerzAktualny+=komu.Statusy[i][2];
                             }
                     }
             } 
                                  //pancerz nie może być ujemny!
                                  pancerzAktualny=Math.max(pancerzAktualny,0);
             //poprostu mnożymy przez (ile-1) a potem urachamimy dmg, żeby zmniejszyć tury bufów   
             let dmg =Math.max(bonsusDmg -pancerzAktualny,0);
             komu.hp-=((ile-1)*dmg);
             DMG(kto,komu);
             return dmg();
     }
//Oblicznie Wartości Ataku i pancerza do wyświetlenie
function AtakPancerzValue(kto,nazwa){
        let dmg=kto.dmg;
        let pan=kto.pancerz;
        for(let i=kto.Statusy.length-1; i>=0; i--){
                if(kto.Statusy[i][1]=="dmg"){
                        dmg+=kto.Statusy[i][2];
                }
                if(kto.Statusy[i][1]=="pancerz"){
                        pan+=kto.Statusy[i][2];
                }
        }
        dmg=Math.max(dmg,0);
        pan=Math.max(pan,0);
        switch (nazwa){
                case "hero1":
                        HeroAtak.textContent=dmg;
                        HeroPancerz.textContent=pan;
                break;
                case "enemy1":
                        EnemyAtak.textContent=dmg;
                        EnemyPancerz.textContent=pan;
                break;
        }
}
//tymczasowa tabela CoolDownwartoś w indeksie 0=skill1 cd;
const CD=[0,0,0,0,0,0];
//Zmniesza o koszt skila okruchy Hero i na jego pasku, wstawia do tabeli liczbę tur
function  AktualizacjaOkruchyCD(IndexSkill, CDSkill){
     hero1.okruchy-=SkillStyl1[IndexSkill].koszt;
     PasekHeroMP1.value=hero1.okruchy;
     CD[IndexSkill]=CDSkill;
     //console.log(CD);
}

function skill(numer){
        if (numer==3 ||numer==4){
                console.log("Niezaimplementowane jeszcze");
                 return;  
        }
        if(hero1.okruchy<SkillStyl1[numer-1].koszt){
                console.log("Brak okruchów");
                return;
        }
        if(CD[numer-1]>0){
                console.log(`Pozostała następująca ilość tur: ${CD[numer-1]} do użycia`);
                return;
        }
 console.log(SkillStyl1[numer-1].ShowSkill());
 AktualizacjaOkruchyCD(numer-1, SkillStyl1[numer-1].cd);
        switch (numer){
                case 1:
 //Redukuje pancerz przeciwnika na 1 turę o Esencję.
 enemy1.Statusy.push([1,"pancerz",-hero1.esencja]);
 AtakPancerzValue(enemy1,"enemy1");
                break;
                case 2:
 //Przeciwnik przez 1 turę zadaje mniejsze obrażenia o Esencję.
 enemy1.Statusy.push([1,"dmg",-hero1.esencja]);
 AtakPancerzValue(enemy1,"enemy1");
                break;
                case 3:
//Jeśli przeciwnik zadał 0 obrażeń, kontratakujesz.
 //będzie trudno!
console.log(DMG(hero1,enemy1));
                break;
                case 4:
 //Następny atak ignoruje buffy przeciwnika.
hero1.Statusy.pop(); console.log(hero1);//usuwa ostatni element
                break;
                case 5:
//Zwiększa bazowe obrażenia na 1 turę o Esencję
hero1.Statusy.push([1,"dmg",hero1.esencja]);
AtakPancerzValue(hero1,"hero1");
                break;
                case 6:
//Zwiększa pancerz na 1 turę o Esencja.
hero1.Statusy.push([1,"pancerz",hero1.esencja]);
AtakPancerzValue(hero1,"hero1");
                break;
        }
}
function ZapowiedźAtaku(){
        //funkcja pokazuje co przeciwnik zrobi w swojej turze.
        let numer =Math.floor(Math.random() * (5 - 1 + 1)) + 1;
        switch (numer){
                case 1: //użyje wzmocnienia
console.log(enemy1.name+" użyje wzmocnienia!");
                break;
                case 2: //użyje osłabienia
console.log(enemy1.name+" użyje osłabienia!");
                break;
                case 3: //atak!
console.log(enemy1.name+" zatakuje!");
                break;
                case 4: //2xatak!
console.log(enemy1.name+" zatakuje 2 razy!");
                break;
                case 5: //3xatak!
console.log(enemy1.name+" zatakuje 3 razy!");
                break;
        }
        return numer;
}

function PreBatlle(){
        HeroAtak.textContent=hero1.dmg;
        HeroPancerz.textContent=hero1.pancerz;
        EnemyAtak.textContent=enemy1.dmg;
        EnemyPancerz.textContent=enemy1.pancerz;
        console.log(hero1.ShowHero());
}
PreBatlle();
//Po każdej turze okruchy się odnawiają o 10
function OdnowienieOkruchów(){
        console.log("zregereowałeś 10 okruchów!");
        hero1.okruchy+=10;
        PasekHeroMP1.value=hero1.okruchy;
}
//Po każdej turze aktualizujemy CD guzików
function AktualizacjaCD(){
        CD.forEach((el,index) => {
                if (el>0){
                        CD[index]-=1; 
                }
        });
}
function Batlle(){
        //zadnie dmg przez hero
        DMG(hero1,enemy1);
        //odświerzamy pasek atk/pancerz hero
        AtakPancerzValue(hero1,"hero1");
        if(enemy1.hp<=0){
                alert("Wygrałeś!!!");
        } else{
                DMG(enemy1,hero1);
                AtakPancerzValue(enemy1,"enemy1");  
        }
        if(hero1.hp<=0){
                alert("Przegrałeś!!!");
        }
        console.log("TwojeHP="+hero1.hp," EnemyHP="+ enemy1.hp);
        OdnowienieOkruchów();
        AktualizacjaCD();
}
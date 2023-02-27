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
    this.SkillTree=[];
	}
    LevelUP(gdzie){
        switch (gdzie){
            case "strength": this.strength+=1; break;
            case "stamina" : this.stamina+=1; break;
            case "esencja" :this.esencja+=1; break;
        }
        this.okruchy+=10; 
        this.hp+=10;
        this.MaxHP+=10;
        this.MaxMP+=10;
        this.lv+=1;
    }
}
const UnlockableHero =[
    //new Hero();
];
function Random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function RandomHero(){
    const hero1 =new Hero(
        "Cezar", Random(1,6), Random(1,6), Random(1,6), 50,50
    );
    return hero1;
}


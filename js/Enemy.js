class Enemy {
    constructor(name,dmg,pancerz,hp,lokacja){
      this.name=name;
      this.dmg=dmg;
      this.pancerz=pancerz;
      this.hp=hp
      this.lokacja=lokacja;
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
class Item {
    constructor(nazwa, opis,rarity){
        this.nazwa=nazwa;
        this.opis=opis;
        this.rarity=rarity;
        this.cd=cd;
    }
}

const Items =[
    new Item("Prosty miecz", "Zwiększa obrażenia następnego ataku o 2 co 3 tury","pospolity"),
    new Item("Drewniana Tarcza", "Zwiększa pancerz dla następnego ataku o 2 co 3 tury","pospolity"),
    new Item("Długi miecz", "Zwiększa obrażenia następnego ataku o 4 co 3 tury","wyjątkowy"),
    new Item("Trójkątna Tarcza", "Zwiększa pancerz dla następnego ataku o 4 co 3 tury","wyjątkowy"),
    new Item("Dajkatana", "Zwiększa obrażenia następnego ataku o 6 co 3 tury","rzadki"),
    new Item("Tarcza piorunów", "Zwiększa pancerz dla następnego ataku o 6 co 3 tury","rzadki")
];







//testy
/*
Items.forEach(el => {
    console.log(el.nazwa,el.opis);
});
console.log("po dodaniu");
Items.push(new Item("dro", "droi2"));
Items.forEach(el => {
    console.log(el.nazwa,el.opis);
});
*/
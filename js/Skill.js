class Skill{
    constructor(kategoria,nazwa, opis){
        this.kategoria=kategoria;
        this.nazwa=nazwa;
        this.opis=opis;
    }
    constructor(kategoria,nazwa, opis, cd, koszt){
        this.kategoria=kategoria;
        this.nazwa=nazwa;
        this.opis=opis;
        this.cd=cd;
        this.koszt=koszt;
    }
}

const SkillPrzetrwanie =[
    new Skill("Podstawy Przetrwania","Odpoczynek podróżnika", "Regeneruje po każdej walce dodatkowe [10+(Esencja x Lv)] HP i MP"),
    new Skill("Podstawy Przetrwania","Opoczynek łowcy", "Podwaja regeneracje podróżnika"),
    new Skill("Podstawy Przetrwania","Opoczynek królewski", "Potraja regeneracje podróżnika"),
    new Skill("Podstawy Przetrwania","Rzemiosło-podstawy", "Zamiast odpoczynku w obozie możesz tworzyć losowy pospolity ekwipunek"),
    new Skill("Podstawy Przetrwania","Rzemiosło-zaawansowane", "Zamiast odpoczynku w obozie możesz tworzyć wybrany pospolity ekwipunek"),
    new Skill("Podstawy Przetrwania","Alchemia-podstawy", "Zamiast odpoczynku w obozie możesz tworzyć losową pospolitą miksturę"),
    new Skill("Podstawy Przetrwania","Alchemia-podstawy", "Zamiast odpoczynku w obozie możesz tworzyć losową wybraną miksturę"),
];
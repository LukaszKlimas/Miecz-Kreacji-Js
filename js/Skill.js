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
];
const SkillStyl2 =[
    new Skill("Pięciu Smoków","Moc 5-Smoków","Następny atak ignoruje buffy przeciwnika.",4,20),
    new Skill("Pięciu Smoków","Siła 5-Smoków","Następny atak ma większe bazowe obrażenia o (40+5xEsencja)%.",4,20),
    new Skill("Pięciu Smoków","Pancerz 5-Smoków","Zwiększa pancerz na 1 turę o Esencja.",2,10),
];

const SkillPrzetrwanie =[
    new Skill("Podstawy Przetrwania","Odpoczynek podróżnika", "Regeneruje po każdej walce dodatkowe [10+(Esencja x Lv)] HP i MP."),
    new Skill("Podstawy Przetrwania","Opoczynek łowcy", "Podwaja regeneracje podróżnika."),
    new Skill("Podstawy Przetrwania","Opoczynek królewski", "Potraja regeneracje podróżnika."),
    new Skill("Podstawy Przetrwania","Rzemiosło-podstawy", "Zamiast odpoczynku w obozie możesz tworzyć losowy pospolity ekwipunek."),
    new Skill("Podstawy Przetrwania","Rzemiosło-zaawansowane", "Zamiast odpoczynku w obozie możesz tworzyć wybrany pospolity ekwipunek."),
    new Skill("Podstawy Przetrwania","Alchemia-podstawy", "Zamiast odpoczynku w obozie możesz tworzyć losową pospolitą miksturę."),
    new Skill("Podstawy Przetrwania","Alchemia-podstawy", "Zamiast odpoczynku w obozie możesz tworzyć losową wybraną miksturę."),
];
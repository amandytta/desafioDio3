class infoHero{
  constructor(name, age, type, type0){
    this.name = name; 
    this.age = age;
    this.type = type;
    this.type0 = type0;
  }
  
  escrever(){
    console.log("O herói de nome " + this.name + " tem " + this.age + " anos, é da classe de " + this.type);
  }
  
  escrever2type(){
    console.log("O herói de nome " + this.name + " tem " + this.age + " anos, é da classe de " + this.type + " do tipo " + this.type0);
  }
  
  atacar(attack){
    this.attack = attack;
    switch(this.type){
      case "mago":
        this.attack = "magia";
        break;
      case "lutador":
        this.attack = "artes marciais";
        break;
      case "assassino":
        this.attack = "adaga";
        break; 
      case "tanque":
        this.attack = "escudo e espada";
        break;
      case "atirador":
        this.attack = "arma de fogo";
        break;
      case "espadachim":
        this.attack = "espada";
        break;
    }
    console.log("O " + this.type + " atacou usando " + this.attack + "!");
  }

  ajudar(help){
    this.help = help;
    switch(this.type0){
      case "suporte - curandeiro":
        this.help = " usou cura e escudo mágico!";
        break;
      case "suporte - tanque":
        this.help = " defendeu usando escudo!";
        break;
    }
    console.log("O " + this.type0 + this.help);
  }

}

let hero0 = new infoHero("Soraka", 1500, "mago", "suporte - curandeiro");
let hero1 = new infoHero ("Sett", 29, "lutador");
let hero2 = new infoHero ("Yasuo", 34, "espadachim");
let hero3 = new infoHero("Nautilus", 500, "tanque", "suporte - tanque")

hero0.escrever2type();
hero1.escrever();
hero2.escrever();
hero3.escrever2type();

console.log("--------------------------------------")

hero2.atacar();
hero0.ajudar();
hero1.atacar();
hero3.ajudar();
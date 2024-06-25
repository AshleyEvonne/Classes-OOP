class Animals {
    constructor(name, weight, height){
        this.name = name;
        this.weight = weight;
        this.height = height;
    }
    dispaly(){
        return[this.name, this.weight, this.height];
    }
}

const Dog = new Animals("Chow", 15, "2'11");
console.log(Dog.dispaly());
console.log(Dog);

const Fish = new Animals("fishy", 2, "1");
console.log (Fish.dispaly());
console.log(Fish);

const lion = new Animals("King", 200, "6");
console.log(lion.dispaly());
console.log(lion);

const bird = new Animals("owl", 20, "4");
console.log(bird.dispaly());
console.log(bird);
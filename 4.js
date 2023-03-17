let sumPower = 0
function Appliances(name, power) {
    this.name = name,
    this.power = power,
    this.turnedOff = true
}
Appliances.prototype.Off = function(name) {
    if(!this.turnedOff){
    this.turnedOff = true;
    sumPower -= this.power;
    console.log(`${this.name} выключен`)
    }else{
      console.log("Прибор уже выключен, нельзя повторно выключать")
    }
}
Appliances.prototype.included = function(name, power) {
    if(this.turnedOff){
    this.turnedOff = false,
    sumPower += this.power,
    console.log(`${this.name} включен с мощностью ${this.power} Ватт`)
    }else{
      console.log("Прибор уже включен, нельзя повторно включать")
    }
}
const lamp = new Appliances('Лампа', 15);
const telephone = new Appliances('Телефон', 20);
const personalComputer = new Appliances('Персональный компьютер', 200);

lamp.included()
personalComputer.included()
telephone.included()
telephone.included()
telephone.Off()
console.log("Cуммарная потребляемая мощность всех включенных приборов составляет " + (sumPower) + " Ватт");

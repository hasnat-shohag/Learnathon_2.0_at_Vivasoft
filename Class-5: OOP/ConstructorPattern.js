class PithaFactory {
	constructor(name, location, price){
		this.name = name;
		this.factoryLocation = location;
		this.price = price
	}
}

const obj = new PithaFactory("Noksi", "JaigirHat", 10);
console.log(obj);

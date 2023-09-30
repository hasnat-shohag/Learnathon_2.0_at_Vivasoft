

class PithaFactory {
	constructor() {
		this.createPitha = function (option) {
			let cake;
			if (option === "Noksi") {
				cake = new Noksi(option + " Pitha");
                // console.log(cake);
			}
			return cake;
		};
	}
}

class Noksi {
	constructor(pithaName) {
		this.cakeFlavor = pithaName;
		this.made = function () {
			console.log("You made ", this.cakeFlavor);
		};
	}
}

const obj1 = new PithaFactory();
const cake = obj1.createPitha("Noksi");
cake.made();

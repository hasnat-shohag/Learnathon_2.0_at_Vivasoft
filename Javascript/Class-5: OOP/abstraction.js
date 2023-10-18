// class CoffeeMachine {
// 	waterAmount = 0;
// 	_sugarAmount = 0;
// 	set sugarAmount(value) {
// 		if (value < 0) {
// 			value = 0;
// 		}
// 		this._sugarAmount = value;
// 	}
// 	get sugarAmount() {
// 		return this._sugarAmount;
// 	}
// 	constructor(power) {
// 		this.power = power;
// 		console.log("Created a coffee machine with power: " + power);
// 	}
// }
// // কফি মেশিন থেকে নতুন কফি অবজেক্ট তৈরি
// let coffee = new CoffeeMachine(100);
// // কফিতে চিনির পরিমাণ
// coffee.sugarAmount = -100;
// console.log(coffee.sugarAmount);

// class Account {
// 	#balance = 0; // Private property
// 	constructor(name, initBalance) {
// 		this.name = name;
// 		this.#balance = initBalance;
// 	}
// 	addBalance(amount) {
// 		this.#balance = this.#balance + amount;
// 	}
// 	deductBalance(amount) {
// 		this.#balance = this.#balance - amount;
// 	}
// 	showBalance() {
// 		console.log("Current balance is: ", this.#balance);
// 	}
// }

// const myAccount = new Account("Tajnur", 526310);
// console.log(myAccount); // Account { name: 'Tajnur' }
// myAccount.addBalance(804700);
// myAccount.showBalance();

// class CoffeeMachine {
// 	#waterAmount = 0;

// 	// show(){
// 	// 	console.log(this.#waterAmount);
// 	// }
// 	set setWaterAmount(value) {
// 		this.#waterAmount = value;
// 	}
// 	showWaterAmount() {
// 		return this.#waterAmount;
// 	}
// }
// let coffee = new CoffeeMachine();
// coffee.setWaterAmount(100);
// // coffee.show();
// console.log(coffee.showWaterAmount());

// class CoffeeMachine {
// 	#waterAmount = 0;
// 	set waterAmount(value) {
// 		this.#waterAmount = value;
// 	}
// 	get waterAmount() {
// 		return this.#waterAmount;
// 	}
// }
// let coffee = new CoffeeMachine();
// coffee.waterAmount = 10;
// console.log(coffee.waterAmount);

// class Fund {
// 	#currentBalance = 0;
// 	set currentBalance(amount) {
// 		this.#currentBalance = amount;
// 	}
// 	get currentBalance() {
// 		return this.#currentBalance;
// 	}
// }

// const orphanageFund = new Fund();
// orphanageFund.currentBalance = 780450;
// console.log("Current balance: ", orphanageFund.currentBalance); // Current balance: 780450

// ----------------------------- এমন একটি ক্লাস তৈরি করো যার প্রাইভেট প্রোপার্টি দেখানো হবে কোন নির্দিষ্ট শর্ত সাপেক্ষে

// class CoffeeMachine {
// 	#waterAmount = 0;

// 	setWaterAmount(value) {
// 		this.#waterAmount = value;
// 	}
// 	showWaterAmount(pass) {
// 		if (pass === 'hI') return this.#waterAmount;
// 		else return `Not found`;
// 	}
// }
// let coffee = new CoffeeMachine();
// coffee.setWaterAmount(100);
// // coffee.show();
// console.log(coffee.showWaterAmount("h"));

// Friends নামে একটি ক্লাস তৈরি করো যেটার মধ্যে পাবলিক ফ্রেন্ড লিস্ট ও প্রাইভেট ফ্রেন্ড লিস্ট থাকবে এবং ঐ লিস্টগুলোতে ফ্রেন্ড যোগ করার মেথড তৈরি করো।

// class Friends {
// 	#privateFriendsList = [];
// 	constructor() {
// 		this.friendsList = []; // পাবলিক ফ্রেন্ড লিস্ট

// 		// প্রাইভেট ফ্রেন্ড লিস্ট

// 		// ফ্রেন্ড যোগ করার মেথড
// 		this.addFriendPublic = function (username, name) {
// 			if (!this.friendsList.some((friend) => friend.username === username)) {
// 				this.friendsList.push({ username, name });
// 				console.log(`Now ${name} is your friend!`);
// 			} else {
// 				console.log(`${name} already in your list`);
// 			}
// 		};
// 	}
// 	addFriendInPrivate (username, name) {
// 		if (!this.#privateFriendsList.some((friend) => friend.username === username)) {
// 			this.#privateFriendsList.push({ username, name });
// 			console.log(`Now ${name} is your friend!`);
// 		} else {
// 			console.log(`${name} already in your list`);
// 		}
// 	};
// 	getListPrivateFriendList(){
// 		return this.#privateFriendsList;
// 	}
// }

// // ক্লাস থেকে অবজেক্ট তৈরি করুন
// const myFriends = new Friends();

// ফ্রেন্ড যোগ করুন
// myFriends.addFriendPublic("John", "john");
// myFriends.addFriendPublic("Alice", 'alice');
// myFriends.addFriendPublic("Alice", 'alice');
// myFriends.addFriend("Bob");
// myFriends.addFriendInPrivate("John", "john");
// myFriends.addFriendInPrivate("Alice", 'alice');
// myFriends.addFriendInPrivate("Alice", 'alice');

// পাবলিক ফ্রেন্ড লিস্ট দেখানো
// const list = myFriends.friendsList;

// list.forEach(element => {
// 	console.log(element.name);
// });
// const list2 = myFriends.getListPrivateFriendList();

// list2.forEach(element => {
// 	console.log(element.name);
// });


// ক্লাসের মধ্যে একটি প্রাইভেট মেথড ডিক্লেয়ার করো যেটার কার্য সম্পাদন করা হবে অন্য কোন পাবলিক মেথড দ্বারা।


class MyClass {
	sendMoney(bal) {
		if (this.#privateMethod(bal)) {
			console.log(`${bal} is send`);
		} else console.log("Under 5 tk send money is not possible");
	}

	#privateMethod(transaction) {
		if (transaction >= 5) return true;
		else return false;
	}
}

const myObj = new MyClass();

myObj.sendMoney(4);

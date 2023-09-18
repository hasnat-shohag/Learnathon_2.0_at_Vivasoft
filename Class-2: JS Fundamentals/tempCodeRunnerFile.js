const arr = [1,2,3,4];

function callback(ele) {
	return ele * 2;
}

Array.prototype.myMap = function (callback) {
	const myArr = [];
	for (let i = 0; i<this.length; i++) {
		myArr.push(callback(this[i]));
	}
	return myArr;
};

const newArr = arr.myMap(callback);
console.log(newArr)

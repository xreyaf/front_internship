let mul = (a, b) => a * b;
let сoncat = (a, b) => {
	console.log(`Concat of ${a} and ${b} is "${a + b}"`);
	console.log('"It\'s done"');
	return a + b;
};

function logic() {
	let elem = document.getElementById("logic");
	try {
		let a = "123";
		let b = "123";
		if (a == b) {
			elem.innerHTML = `"true! ${a} = ${b} "`;
		}
		b = "132";
		if (a != b) {
			setTimeout(() => alert(`"false! a = ${a}, b = ${b}"`), 1000);
		}
	} catch (error) {
		console.log(error.name);
		console.log(error.message);
	}
}

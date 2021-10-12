function calc() {
	let op1 = Number(document.getElementById("firstOperand").value);
	let op2 = Number(document.getElementById("secondOperand").value);
	let oper = document.getElementById("operators").value;

	switch (oper) {
		case "+":
			document.getElementById("result").value = op1 + op2;
			break;
		case "-":
			document.getElementById("result").value = op1 - op2;
			break;
		case "*":
			document.getElementById("result").value = op1 * op2;
			break;
		case "/":
			document.getElementById("result").value = op1 / op2;
			break;
		case "**":
			document.getElementById("result").value = op1 ** op2;
			break;
		case "%":
			document.getElementById("result").value = op1 % op2;
			break;
		default:
			alert("Некорректные значения");
			break;
	}
}

let сoncat = () => {
	let a = document.getElementById("firstString").value;
	let b = document.getElementById("secondString").value;
	console.log('"It\'s done"');
	console.log(typeof a);
	console.log(`Concat of ${a} and ${b} is "${a + b}"`);
	alert(`Concat of ${a} and ${b} is "${a + b}"`);
};

function logic() {
	try {
		let a = 100;
		let b = 10;
		let isBool = false;
		console.log(`Вводные: a=${a}, b=${b}, isBool=${isBool}`);

		let result = a > 50 && b < 12;
		let result1 = a > 50 || isBool == true;
		let result2 = !(a < 50);
		let result3 = undefined || a || null;
		let result4 = a && null && b;

		console.log(result, `${a} > 50 && ${b} < 12`);
		console.log(result1, `${a} > 50 || ${isBool} == true`);
		console.log(result2, `!(${a} > 50)`);
		console.log(result3, `null || ${a} || undefined`, "Первая истина");
		console.log(result4, `${a} && null && ${b}`, "Первое ложное");

		if (a != b) {
			alert(`false: ${a} != ${b} `);
		}

		throw new Error("Ошибочка вышла!");
	} catch (e) {
		console.log(e.name);
		console.log(e.message);
	} finally {
		alert("finally выполнится всегда");
	}
}

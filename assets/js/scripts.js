"use strict";

const сoncat = () => {
	const a = document.getElementById("firstString").value;
	const b = document.getElementById("secondString").value;
	console.log('"It\'s done"');
	console.log(typeof a);
	console.log(`Concat of ${a} and ${b} is "${a + b}"`);
	alert(`Concat of ${a} and ${b} is "${a + b}"`);
};

function logic() {
	try {
		const a = 100;
		const b = 10;
		const isBool = false;
		console.log(`Вводные: a=${a}, b=${b}, isBool=${isBool}`);

		let result = a > 50 && b < 12;
		let result1 = a > 50 || isBool == true;
		let result2 = !(a < 50);
		let result3 = undefined || a || null;
		let result4 = a && null && b;

		console.group("Логические обсчеты");
		console.log(result, `${a} > 50 && ${b} < 12`);
		console.log(result1, `${a} > 50 || ${isBool} == true`);
		console.log(result2, `!(${a} > 50)`);
		console.log(result3, `null || ${a} || undefined`, "Первая истина");
		console.log(result4, `${a} && null && ${b}`, "Первое ложное");
		console.groupEnd();

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

const user = {
	firstName: "Peter",
	age: 30,
	adress: {
		country: "Russia",
		region: `Kaluga oblast\'`,
		city: "Kaluga",
	},
	getFirstName() {
		console.log(this.firstName);
	},
	getAgeArrow: null,
	getAge() {
		this.getAgeArrow = () => console.log(this.age);
		//setTimeout(() => console.log(this.age), 100);
	},
};

console.group("Стрелочные функции");
user.getFirstName();
user.getAge();
user.getAgeArrow();

const notArrow = function (a, b) {
	console.log(arguments);
	return a + " " + b;
};

const Arrow = (...args) => {
	console.log(args);
	return args[0] + " " + args[1];
};

console.log(notArrow("firstArg", "secondArg"));
console.log(Arrow("firstArg", "secondArg"));

console.groupEnd();

function getUser(firstName = "unknown", age = 0) {
	console.log("Hello " + firstName + " with the age of " + age);
}
getUser();

console.group("Деструктуризация, spread, rest");
const odds = [1, 3, 5, 7];
const evens = [2, 4, 6, 8];
console.log([...odds, 1337, ...evens]);
const numbers = [5, 123, 52, 4, 10];
console.log(Math.max(...numbers));
const sumOdds = (a, ...rest) => a + rest.reduce((a, i) => a + i, 0);
const sumEvens = (a = 0, b = 0, ...rest) => {
	let result = a + b;
	for (let r of rest) {
		result += r;
	}
	return result;
};
console.log(sumOdds(...odds));
console.log(sumEvens(...evens));

const sections = document.querySelectorAll("section");
const arrayOfSections = [...sections];
console.log(sections, Array.isArray());
console.log(arrayOfSections, Array.isArray());

const [a, , ...other] = numbers;
console.log(a, other);
console.groupEnd();

const {
	firstName: fName = "без имени",
	age,
	pet = "нет питомца",
	adress: { city, region, country },
} = user;
console.group(fName + " info:");
console.log(`${age} лет, ${pet}, адрес: ${city}, ${region}, ${country}`);
console.groupEnd();
console.groupEnd();

function* genFunction(n = 10) {
	for (let index = 0; index < n; index++) {
		yield index;
	}
}
console.group("Генератор");
for (let i of genFunction(5)) {
	console.log(i);
}
console.groupEnd();

class Calculator {
	constructor(previousOperand, currenOperand, operationValue, resultValue) {
		this.previousOperand = previousOperand;
		this.currenOperand = currenOperand;
		this.operationValue = operationValue;
		this.resultValue = resultValue;
	}

	compute() {
		let computation;
		let prev = this.previousOperand;
		let current = this.currenOperand;
		let operation = this.operationValue;

		if (isNaN(prev) || isNaN(current)) return;
		switch (operation) {
			case "+":
				computation = prev + current;
				break;
			case "-":
				computation = prev - current;
				break;
			case "*":
				computation = prev * current;
				break;
			case "/":
				computation = prev / current;
				break;
			default:
				alert("Некорректные значения");
				break;
		}
		this.resultValue.value = computation;
	}
}

class Trigonometry extends Calculator {
	constructor(previousOperand, currenOperand, operationValue, resultValue) {
		super(previousOperand, currenOperand, operationValue, resultValue);
	}

	computeNew() {
		let computation;
		let prev = this.previousOperand;
		let current = this.currenOperand;
		let operation = this.operationValue;

		if (isNaN(prev) || isNaN(current)) return;
		switch (operation) {
			case "**":
				computation = prev ** current;
				break;
			case "%":
				computation = prev % current;
				break;
			default:
				alert("Некорректные значения");
				break;
		}
		this.resultValue.value = computation;
	}
}

document.querySelector("#result").readOnly = true;
const btn = document.querySelector("[data-calculate]");
btn.addEventListener("click", () => {
	const previousOperand = Number(document.getElementById("firstOperand").value);
	const currenOperand = Number(document.getElementById("secondOperand").value);

	const operationValue = document.querySelector("[data-operation]").value;

	const resultValue = document.querySelector("#result");

	const calculator = new Calculator(
		previousOperand,
		currenOperand,
		operationValue,
		resultValue
	);
	calculator.compute();
});

const btnChild = document.querySelector("[data-calculate-child]");
btnChild.addEventListener("click", () => {
	const previousOperand = Number(document.getElementById("firstOperand").value);
	const currenOperand = Number(document.getElementById("secondOperand").value);

	const operationValue = document.querySelector("[data-operation]").value;

	const resultValue = document.querySelector("#result");

	const trigonometry = new Trigonometry(
		previousOperand,
		currenOperand,
		operationValue,
		resultValue
	);
	trigonometry.computeNew();
});

/*__iteration 6__*/

window.onload = () => {
	const urlBtn = document.querySelector(".urlBtn");
	const urlP = document.querySelector(".urlP");
	const currentURL = window.location.href;
	//const currentURL = document.URL; const currentURL = document.location.href;
	urlBtn.addEventListener("click", () => {
		urlP.innerText = currentURL;
	});

	const getH = document.querySelector(".getHistory");
	const navH = document.querySelector(".navHistory");
	const changeH = document.querySelector(".changeHistory");

	getH.addEventListener("click", () => {
		urlP.innerText = "Количество переходов: " + history.length;
	});

	navH.addEventListener("click", () => {
		try {
			history.go(1);
		} catch (e) {
			alert("Не было переходов");
			console.log(e.message);
		}
	});

	changeH.addEventListener("click", () => {
		try {
			history.pushState(
				null,
				"Страница 2",
				"http://127.0.0.1:5500/pages/page2.html"
			);
			history.go(0);
		} catch (e) {
			alert("Не получилось :с");
			console.log(e.message);
		}
	});

	const getCk = document.querySelector(".getCookie");
	const setCk = document.querySelector(".setCookie");
	const changeCk = document.querySelector(".changeCookie");

	getCk.addEventListener("click", () => {
		console.log("Cookie: " + document.cookie);
	});
	setCk.addEventListener("click", () => {
		document.cookie =
			"name=Roman; expires=" + new Date(2022, 0, 1).toUTCString();
		document.cookie =
			"lastName=Polyakov;  expires=" + new Date(2022, 0, 1).toUTCString();
	});
	changeCk.addEventListener("click", () => {
		document.cookie = "name=Romul; max-age=10";
	});

	const setLcl = document.querySelector(".setLocal");
	const getLcl = document.querySelector(".getLocal");
	const setSsn = document.querySelector(".setSession");
	const getSsn = document.querySelector(".getSession");
	const clr = document.querySelector(".clear");
	setLcl.addEventListener("click", () => {
		localStorage.setItem("user", JSON.stringify(user));
	});
	getLcl.addEventListener("click", () => {
		const userLS = JSON.parse(localStorage.getItem("user"));
		//debugger;
		console.log(userLS);
	});
	setSsn.addEventListener("click", () => {
		sessionStorage.setItem("SessionInfo", "Some session information");
	});
	getSsn.addEventListener("click", () => {
		console.log(sessionStorage.getItem("SessionInfo"));
	});
	clr.addEventListener("click", () => {
		localStorage.clear();
		sessionStorage.clear();
	});

	const getLct = document.querySelector(".getLocation");
	const getAppInfo = document.querySelector(".getAppInfo");
	const inf = document.querySelector(".info");
	getLct.addEventListener("click", () => {
		navigator.geolocation.getCurrentPosition(
			(res) => {
				console.log(
					"Текущее местоположение: " +
						res.coords.latitude +
						", " +
						res.coords.longitude
				);
				const LINK = `https://yandex.ru/maps/?ll=${res.coords.longitude},${res.coords.latitude}&z=12`;
				inf.innerHTML = `<a  href="${LINK}" target="_blank">Показать на карте</a>`;
			},
			() => {
				console.log("Произошла ошибка при определении местоположения!");
			}
		);
	});

	getAppInfo.addEventListener("click", () => {
		inf.innerText = navigator.userAgent;
	});
};

// window.onbeforeunload = () => { 	return false; };

const showMenu = (toggleId, navId) => {
	const toggle = document.getElementById(toggleId),
		nav = document.getElementById(navId);

	if (toggle && nav) {
		toggle.addEventListener("click", () => {
			nav.classList.toggle("show-menu");
		});
	}
};
showMenu("nav-toogle", "nav-menu");

function scrollHeader() {
	const nav = document.getElementById("header");
	if (this.scrollY >= 80) nav.classList.add("scroll-header");
	else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

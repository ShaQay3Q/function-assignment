const username = prompt("What's your name?", "");
console.log(username);

const greetingMessage = prompt("How do you wanna greet yourself?", "");
console.log(greetingMessage);

const sayHello = (name) => {
	console.log("Hi " + name);
};

const sayHelloAgain = (name, greetingMessage) => {
	console.log(`${greetingMessage} ${name}`);
};

const andAgain = () => {
	console.log("Hi User!");
};

const greeting = (greetingMessage, name) => {
	return `${greetingMessage} ${name}`;
};

const message = (...m) => {
	let message = "";
	for (const i of m) {
		message = `${message} ${i}`;
	}
	console.log(`message: ${message}`);

	return message;
};

const displayMessage = (message, name, greetingMessage) => {
	console.log(message(greetingMessage, name));
};

const showMessage = (cb, ...m) => {
	console.log(cb(...m));
};

sayHello(username);
sayHelloAgain(username, greetingMessage);
andAgain();
displayMessage(greeting, username, greetingMessage);

showMessage(message, greetingMessage, username, "azizam");

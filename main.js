console.log("hello")

async function httpHello() {
	const response = await fetch("http://127.0.0.1:8000");
	console.log(response)
}

httpHello()

const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
const method = 'GET';
const isAsync = false; 

main5();

function main1() {
	const request = new XMLHttpRequest();  // Створили обєкт
	request.open(method, url, isAsync);    // Відкриваємо канал
	request.send()				   // Відправили запрос

	const data = JSON.parse(request.response);  // Чекаємо відповіді і оброблюємо
	console.log(data);
}

function main2() {
	const request = jQuery.ajax({ method, url})

	request.done(data => {
		data = JSON.parse(data)
		console.log(data);
	})
}

async function main3() {
	const params = {method, url}

	const request = await jQuery.ajax(params)  // Робимо запрос
	const data = JSON.parse(request);
	console.log(data);
}

function main4() {
	const request = fetch(url)

	const jsonStream = request.then(response => {
		return response.json()
	})

	jsonStream.then (data => {
		console.log(data)
	})
}

function main5() {
	fetch(url) 		//Відправили запрос
		.then(responce => responce.json()) // Отримали дані і конвертували їх в JSON
		.then(data => console.log(data))
		.catch(err => {
			console.log(err);
		});

}


import PromiseUtil from './src/PromiseExtension';
import fetch from 'node-fetch';

const delay = (time, item = null) => new Promise((resolve: any) => setTimeout(resolve(item), time));

async function Main() {
	const asyncObject = {
		test: delay(60000, {
			hello: {
				test: 'string'
			}
		}),
		test2: fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => response.json()),
		normal: {
			array: ['123', '13']
		}
	};

	PromiseUtil.props(asyncObject).then((object) => {
		console.log(object);
	});

	const urlArray = [
		'https://jsonplaceholder.typicode.com/todos/1',
		'https://jsonplaceholder.typicode.com/todos/1',
		'https://jsonplaceholder.typicode.com/todos/1',
		'https://jsonplaceholder.typicode.com/todos/1',
		'https://jsonplaceholder.typicode.com/todos/1',
		'https://jsonplaceholder.typicode.com/todos/1',
		'https://jsonplaceholder.typicode.com/todos/1',
		'https://jsonplaceholder.typicode.com/todos/1',
		'https://jsonplaceholder.typicode.com/todos/1'
	];

	PromiseUtil.map((url) => fetch(url).then((response) => response.json()), { concurrency: 2 }).then((result) =>
		console.log(result)
	);
}

Main();
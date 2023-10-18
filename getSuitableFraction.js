'use strict';
const fs = require('fs');
const input = process.argv[2];

const data = fs.readFileSync(input).toString().split('\n').filter(value => !(value === '\r' || value === '')).map((value =>
{
	const intValue = Number(value.replace('\r', ''));
	if (!Number.isInteger(intValue)) throw new Error('There is not an integer number in the input file.');
	return intValue;
}));

const sf = getSF(data);
console.log(sf);
console.log(sf[0] / sf[1]);

function getSF(data)
{
	let prev = [0, 1];
	for (let i = data.length - 1; i >= 0; i--)
	{
		const n = data[i];
		prev = inverse(sum(prev, n));
	}
	return inverse(prev);
}

function sum(fracN, intN)
{
	return [fracN[0] + intN * fracN[1], fracN[1]];
}
function inverse(fracN)
{
	const a = fracN[0];
	fracN[0] = fracN[1];
	fracN[1] = a;
	return fracN;
}

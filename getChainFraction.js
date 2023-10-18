'use strict';
const VALUE = Math.PI;
const SIZE = 10;

console.log(getChainFraction(VALUE, SIZE));

function getChainFraction(value, n)
{
	const out = [];
	for (let i = 0; i < n; i++)
	{
		const intPart = Math.floor(value);
		out.push(intPart);
		value = 1 / (value - intPart);
	}
	return out;
}
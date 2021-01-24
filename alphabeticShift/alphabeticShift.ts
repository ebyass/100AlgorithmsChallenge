export function alphabeticShift(inputString: string): string {
// const alphabet: string[]= [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ]
//* USING AN OBJECT WITH KEY VALUE PAIRS IS A LOT BETTER THAN ITERATING THROUGH AN ARRAY OF 25 ITEMS EACH TIME 
const alphabet = {
	'a':'b', 'b':'c', 'c':'d',
	'd':'e', 'e':'f', 'f':'g',
	'g':'h', 'h':'i', 'i':'j',
	'j':'k', 'k':'l', 'l':'m', 
	'm':'n', 'n':'o', 'o':'p',
	'p':'q', 'q':'r', 'r':'s',
	's':'t', 't':'u', 'u':'v',
	'v':'w', 'w':'x', 'y':'z', 
	'z':'a'
}
let strArr = inputString.split('')

for(let i=0; i<strArr.length; i++){
	strArr[i] = alphabet[strArr[i]]
}

return strArr.join('')  
}

console.log(alphabeticShift('crazy'));
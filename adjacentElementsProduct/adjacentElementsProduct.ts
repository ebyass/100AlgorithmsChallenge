export function adjacentElementsProduct(inputArray: number[]): number {
	let highestNum = 0
	for(let i=0; i<inputArray.length-1; i++){
		let product = inputArray[i] * inputArray[i+1]

		product > highestNum ? highestNum = product : highestNum
	}
	return highestNum
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
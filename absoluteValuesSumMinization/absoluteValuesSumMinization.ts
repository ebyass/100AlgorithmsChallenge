export function absoluteValuesSumMinimization(a: number[]): number {
		// const isEven = a.length % 2 === 0
		// return isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)]

		const data = a.reduce(function(a, b){
			return a + b
		})
		let result = data / a.length 
		return Math.floor(result)


}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));
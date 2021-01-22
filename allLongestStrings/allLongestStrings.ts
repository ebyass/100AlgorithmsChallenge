import { isTemplateMiddle } from "typescript";

export function allLongestStrings(inputArray: string[]): string[] {

	let maxNum = 0

	for(let i=0; i<inputArray.length; i++) {
		inputArray[i].length > maxNum ? maxNum = inputArray[i].length : maxNum
	}

	const res = inputArray.filter(item => {
		return item.length === maxNum
	})
	return res
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
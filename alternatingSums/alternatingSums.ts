export function alternatingSums(a: number[]): number[] {
	let teamA = 0
	let teamB = 0

	a.forEach((element, index) => {
		if(index % 2 === 0) {
			teamA += element 
		} else {
			teamB += element
		}
	})

	return [teamA, teamB]
	
	
}

console.log(alternatingSums([50, 60, 60, 45, 70]))
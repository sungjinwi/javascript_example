const a =[]
const b =[]
console.log(a==b)

const c = Array(3).fill(1)

console.log(c)

const result = [1,2,3,2,0,2,9,2]

let selectedProposalId = result.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0) + 1; // proposalId의 index는 1부터 시작하기 때문에 + 1

// console.log(selectedProposalId)

const d = c.reduce((a,b)=>a+b)
console.log(d)


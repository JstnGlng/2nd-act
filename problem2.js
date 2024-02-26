const returnDivisibleBy3 = (guinea) =>
{return guinea.map(n => n * n + 2).filter(result => result % 3 === 0)}

const answer = returnDivisibleBy3([1, 2, 3, 4, 5])
console.log(answer);
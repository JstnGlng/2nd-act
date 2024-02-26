const countInstance = (strings, character) =>
{return strings.map(str => str.split(character).length-1);
}
const answer = countInstance(["hello", "world"], "l");
console.log(answer);
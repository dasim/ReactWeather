var names = ['Abc', 'Def', 'Ghi'];

function add(a, b) {
	return a + b;
}

var addStatement = (a, b) =>  {
	return a + b;
};
var addExpression = (a, b) => a + b;

console.log(add(1, 3));
console.log(add(4, 2));
console.log(addStatement(1, 3));
console.log(addStatement(4, 2));
console.log(addExpression(1, 3));
console.log(addExpression(4, 2));
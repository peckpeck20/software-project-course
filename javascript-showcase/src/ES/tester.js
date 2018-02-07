//Jose Zapata 
//export
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
export var tester = () => {
	console.log("tester.js imported to app.js");
//****global variable - can be seen and used by everyone in this script
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
var fixed = 5;
console.log("global variable  = " + fixed);


//****Arrow function
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
var arrow = (multiply) => {
	//block scope variable that can't be changed inside this function
	//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
	const a = 10;
	//console.log("const variable = " + a);
	//multiply = document.getElementById('arrowInput');

	/* if  we try to assign we will get an error Uncaught TypeError: Assignment to constant variable.
	a = a * multiply
	console.log(a);*/

	const result = a * multiply; 
	return result;
}

//test 
console.log('multiply = ' + arrow(10));


var flexable = () => {
	//a Let variable can be re-assigned inside the block scope meaning the value is not set in stone
	//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let 
	let a = Math.floor(Math.random() * 100);
	console.log("let variable can be a random number  = " + a);
}

flexable();


//block scoped variable, value is fixed after initialized
const materials = {};

//propertie accessor
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors#Note_on_eval
materials['types'] = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

console.log(materials.types);

//value cannot be changed after initialized
/*materials = 'hola';*/

//however you can add properties to an object
materials.colors = ['black','blue','red','white'];

console.log("Here we can see the properties const object with an array of properties");
console.log(materials);

//template literals
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
const nameTemplate = () => {
    const name = 'Jose!';
    console.log(`My name is ${name}`);
}
nameTemplate();



}


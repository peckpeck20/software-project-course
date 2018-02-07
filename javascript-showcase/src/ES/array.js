export var createArrays =() => {
//map - creates a new array with results from the function for each element in the array
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

//trailing coma
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas
const array01 = [5,1,2,9,2,29,];
// optional paramaneter of index to see the position of the element in the array
const mapArray = array01.map((n,index) => {
    return n * 5;
    //console.log(`the current iteration is ${index}`);
    //console.log(`the current element is ${n}`);
    
});
//console.log(mapArray);
//for each
//ttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
const dividedArray = mapArray.forEach(
    e => console.log(e));

//spread syntax
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator

const myParts = [5,5];

const addParts = (w,q,r) => {
    return w + q +r;
}

console.log(`total of parts is ${addParts(10,...myParts)}`);
}

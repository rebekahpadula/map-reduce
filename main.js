/**
 * Implement the `forEach` function to execute a callback function for each
 * item in an array. forEach should be a void function, meaning it doesn't
 * return a value.
 */

function forEach(array, callback) {
	for (i = 0; i < array.length; i++) {
		callback(array[i]);
	}

};

var total = 1;
forEach([1, 2, 3, 4], function (a) { total *= a; });
console.assert(total === 24);

/**
 * Using `forEach` from above, implement the `reduce` function to return a
 * single value by executing a callback function with the value from the
 * previous execution and the current value.
 */

function reduce(array, callback) {
	var prev = array[0];
	forEach(array.slice(1), function (v) { 
		prev = callback(prev, v); 
	})
	return prev
}

console.assert(reduce([1, 2, 3, 4], function (a, v) { return a * v; }) === 24);

/**
 * Using `forEach` from above, implement the `map` function to return a new
 * array that contains every value from the input array transformed by the input
 * callback function.
 */

function map(array, callback) {
	var newArray = [];
	forEach(array, function (v) {
		newArray.push(callback(v));

	})
	return newArray;
}

var squares = map([1, 2, 3, 4], function (v) { return v * v; });
console.assert(squares[0] === 1);
console.assert(squares[1] === 4);
console.assert(squares[2] === 9);
console.assert(squares[3] === 16);

/**
 * Using `reduce` from above, implement the `filter` function to return a new
 * array that contains only elements that, when executed with the callback
 * function, return a truthy value.
 */

function filter(array, callback) {
	var newArray = [];
	reduce (array, function(argmnt, argmnt) {
		if (callback(argmnt)) {
			newArray.push(argmnt);
		}
	}) 
	return newArray;
}

var evens = filter([1, 2, 3, 4], function (v) { return v % 2 === 0; });
console.assert(evens[0] === 2);
console.assert(evens[1] === 4);

/**
 * Using `reduce` from above, implement the `sum` function that adds up all of
 * it's arguments.
 */

function sum() {
	var newValue = []
	for (i = 0; i < arguments.length; i++) {
		newValue.push (arguments[i]);
	}

	newValue = reduce (newValue, function (a, b){
		return a + b;
	})
	return newValue;
}

console.assert(sum(1, 2, 3) === 6);
console.assert(sum(1, 2, 3, 4) === 10);
console.assert(sum(1, 2, 3, 4, 5) === 15);

/**
 * Using `Array.prototype.sort`, sort the items in the `names` array by their
 * `name` value.
 */

var names = [
    { name: "Matt", almaMater: "University of Texas - Austin" },
    { name: "Brian", almaMater: "Texas A&M" },
    { name: "Jesse", almaMater: "University of Texas - Austin" }
];

names.sort(function(a, b){
	if(a.name > b.name) return +1
	if(a.name < b.name) return -1
})

console.assert(names[0].name === "Brian");
console.assert(names[1].name === "Jesse");
console.assert(names[2].name === "Matt");

/**
 * Using `Array.prototype.map`, `Array.prototype.filter`, and
 * `Array.prototype.sort`,
 * - filter the `customers` array for customers whose first-names start with 'J'
 * - create a new array containing each of their full names
 * - sort the items alphabetically by their full name
 */

var customers = [
    { first: 'Joe',  last: 'Blogs'},
    { first: 'John', last: 'Smith'},
    { first: 'Dave', last: 'Jones'},
    { first: 'Jack', last: 'White'}
];

var first = customers.filter(function(x) {
return x.first[0] === 'J'
})

 var fullname = first.map(function(x){
	return ({ fullname: x.first + ' ' + x.last})
})

var results = fullname.sort(function(a, b){
	if(a.fullname > b.fullname) {
		return +1
	} 
	if (a.fullname < b.fullname) {
		return -1
	} 
	return 0;	
})

console.assert(results[0].fullname === "Jack White")
console.assert(results[2].fullname === "John Smith")











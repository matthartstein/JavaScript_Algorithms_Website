////////////////////////////////////////////////////////////
//  Recursion

function reverseArray(arr) {

	// base case: if the array is empty
	if(arr.length < 1)
		return arr;

	// else recursively call this function
	else
		return [arr.pop()].concat(reverseArray(arr));
}

function findMin(a) {

	// base case: if the array has 1 element, return it
	if(a.length == 1)
		return a[0];

	// else recursively call this function
	else
		return findMin(a.slice(2).concat(a[0] < a[1] ? a[0] : a[1]));
}

function stringFromArrays(arr1, arr2) {

	// base case: if arr1 is empty, return arr2
	if(arr1.length == 0)
		return arr2;

	// base case: if arr2 is empty, return arr1
	else if(arr2.length == 0)
		return arr1;

	// else recursively call this function
	else
		return arr1[0] + stringFromArrays(arr2, arr1.slice(1));
}


////////////////////////////////////////////////////////////
//  Higher order functions

function applyToArray(a) {
	function f(func) {

		// create an empty array to hold the results from inner function
		var myArray = [];

		// use for each loop to apply the function for each element
		a.forEach(x => myArray.push(func(x)));

		// return myArray
		return myArray;
	}

	// return the function
	return f;
}

function computeMaxArr(f1, f2) {
	function f(a) {

		// base case: if the array only has 1 element apply this element and return
		if(a.length == 1) {
			return [Math.max(f1(a[0]), f2(a[0]))];
		}

		// else run the recursion
		else {
			// pop first element
			var tempArray = a.shift();

			// return
			return [Math.max(f1(tempArray), f2(tempArray))].concat(f(a));
		}
	}

	// return the created function
	return f;
}


////////////////////////////////////////////////////////////
//  Common closure

function makeClosure() {

	// initialize variables
	var counter = 0;
	var arr = [];

	return [

		// function one
		function f1(arg1, arg2) {

			// push elements to new array if counter is less than 3
			if(counter < 3) {
				var a = arg1 + arg2;
				arr.push(a);
			}

			// return the new array
			return arr;
		},

		// function two
		function f2() {
			counter++;	// increment the counter by one
		}
	]
}

////////////////////////////////////////////////////////////
//  Auxiliary functions (used for testing)

function mult4(i) {
	return i*4;
}

function add2(j) {
	return j+2;
}

function square(k) {
	return k*k;
}

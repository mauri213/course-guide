// write a function called addOne() that takes a number as input and returns a new number that's one more than the input.
	function addOne (number) {
		return number + 1;
	}
	console.assert(addOne(10) === 11);
	console.assert(addOne(-1) === 0);

// write a function called doubleNum() that takes a number as input and returns the double of the number. 
function doubleNum (number) {
	return number * 2;
}
console.assert(doubleNum(10) === 20);
console.assert(doubleNum(-10) === -20);

// write a function called isNegative(). it should take a single, numerical input. it should output true if the number is negative, and false if the number is positive.
function isNegative(number) {
	if (number < 0) {
		return true;
	} else {
		return false;
	}
}
console.assert(isNegative(1) === false );
console.assert(isNegative(-9999999) === true);

// modify isNegative() so that it only accepts numerical input. it should return the string, "input must be a number," if bad input has been submitted.
function isNegative2(number) {
	if (isNaN(number) === true ) {
		return 'input must be a number'
	} else {
		return true;
	}
}
console.assert(isNegative2(2) === true);

//write a function called isEven() that tells whether a number is even or not. 
function isEven(number) {
	if (number % 2 === 0) {
		return true;
	} else {
		return false;
	}
}
console.assert(isEven(6) === true);
console.assert(isEven(999) === false);

//write a function called isBig() that tells whether a number is greater than 10,000 or not.
function isBig(number) {
	if (number > 10000) {
		return true;
	} else {
		return false;
	}
}
console.assert(isBig(1000000) === true);
console.assert(isBig(9999) === false);

// write a function called addPeriod(). it should take as input a string, and return a copy of that string with a period on the end. 
function addPeriod(string) {
	return string + '.';
}
console.assert(addPeriod('hello') === 'hello.');
console.assert(addPeriod('1976') === '1976.');

// write a function called sayItTwice(). it should take as input a string ('bubble') and return that string repeated twice, with a space between ('bubble bubble').
function sayitTwice(string) {
	return string = 'bubble' + ' bubble';
}
console.assert(sayitTwice('bubble') === 'bubble bubble');

// write a function called firstShallBeLast(). it should add a copy of the first element of a string to the end of the string, then return the result.
function firstShallBeLast(string) {
	return string = string + string[0];
}
console.assert(firstShallBeLast('turtles') === 'turtlest');
console.assert(firstShallBeLast('eric') === 'erice');

// write a function called secondToLast(). it should return the second-to-last element of a string or array.
 arr = ['r', 'o', 'b', 'e', 'r', 't'];
 function secondToLast(array) { 
 	return array[arr.length - 2];
 }
 console.assert(secondToLast(arr) === 'r');

// write a function called hasX(). it should take as input a string, and it should return true if the string contains the character 'x', and false if it does not.
function hasX(string) {
	if(string.includes('x')) {
		return true;
	} else {
		return false;
	}
}
console.assert(hasX("blahxblah") === true);
console.assert(hasX("somexwordxthatxhasxinit") === true);

// write a function called hasEl(). it should take two inputs: a string and a character. it should return true if the string contains the character, and false if it does not. if you get it right, try the function on an array and a potential array element instead. does it still work?
function hasEl(string, character) {
	if(string = string + character) {
		return true;
	} else {
		return false;
	}
}
console.assert(hasEl("hello" + "hello") === true);
console.assert(hasEl("cool" + "coolness") === true);

// write a function called incrementEach(). 
// it should take as input an array of numbers and return a new array that contains each number from the input array, increased by one. 
// var arr = [1, 2, 3, 4, 5];
// function incrementEach(array) {
// 	return array[array.length++];
// }
// console.log(incrementEach(1, 2, 3, 4, 5));
// console.assert(incrementEach(arr) === [2, 3, 4, 5, 6]);

// write a function called doubleAll(). it should take as input an array of numbers and return a new array that contains each number from the input array, doubled. 
function doubleAll(array) {
	var newArray = [];
	for (var i = 0; i < array.length; i++) {
		newArray.push(array[i] * 2);
	}
	// console.log('newArray: ' + newArray);
	return newArray;
}
// console.log('doubleAll(newarr): ' + doubleAll(newarr))
var newarr = [1, 2, 3, 4, 5];
// console.log('length of newarr: ' + newarr.length)
console.assert( (doubleAll(newarr).toString() === [2,4,6,8,10].toString()) === true);
 
a = [1,2,3]            // here a and b have equivalent contents, but do not
b = [1,2,3]            // refer to the same Array object.
a == b                 // Thus this is false.
console.assert((a==b) === false);

// write a function called getFirstLetterCaps(). it should take as input a string, and it should return a capitalized version of the string's first character.
function getFirstLetterCaps(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
console.assert(getFirstLetterCaps("mauricio") === "Mauricio");
console.assert(getFirstLetterCaps("Orozco") === "Orozco");

// write a function called capitalizeWord(). it should take as input a string, and return a copy of that string with the first character capitalized. 
function capitalizeWord(string) {
	return string + ' ' + string.charAt(0).toUpperCase() + string.slice(1,8);
}
// console.log(capitalizeWord("mauricio")); 
console.assert(capitalizeWord('mauricio') === 'mauricio Mauricio');
console.assert(capitalizeWord('orozco') === 'orozco Orozco');

// write a function called capitalizeAllWords(). it should take as input an array of strings, and it should return a new array where all the words have been capitalized. HINT: use your capitalizeWord() function from above. 
function capitalizeAllWords(string) {
	return string.toUpperCase();	
}
console.assert(capitalizeAllWords("orange") === "ORANGE");
console.assert(capitalizeAllWords("dodgerblue") === "DODGERBLUE");

// write a function called arrayToString(). it should take as input an array, and it should concatenate all of the array's elements into one big string, and then return that string. 
function arrayToString(array) {
	var catarr = ["Mauricio", "Orozco"];
	return catarr.join();
}
// console.log(arrayToString("Mauricio", "Orozco"));
console.assert(arrayToString("Mauricio", "Orozco") === "Mauricio,Orozco");

// write a function called shortiesOnly(). taking as input an array of strings, it should return a new array containing only those strings with fewer than four characters. 
function shortiesOnly(array) {
 	return array.length < 4;
}
// console.log(shortiesOnly("sim"));
console.assert(shortiesOnly("joe") === true);
console.assert(shortiesOnly("m") === true);

// write a function called reverseIt(). it should take as input a string or array (remember that we can often treat them the same way), and it should return a reversed version of that input. 
function reverseIt(string) {
	return string.split('').reverse().join('');
}
console.assert(reverseIt("hi") === "ih");
console.assert(reverseIt("egnaro") === "orange");

// write a function called getValue(). it should take two inputs: an object and a key. it should return the corresponding value for that key within the object. keep in mind that this should be a one-line function. no more than two. 
var batman = {
	firstName: "Bruce",
	lastName: "Wayne"
};

function getValue(object, key) {
  for (var b in object) {
    if (b == key)
      return object[b];
  }
}

var dude = getValue(batman, "firstName");
console.log(dude);
// console.assert(getValue() === );
// console.assert(getValue() === );

// write a function called getAllValues(). it should take as input an object, and it should return the values of all the keys in the object. 
var spiderman = {
	firstName: "Peter",
	lastName: "Parker",
	favoriteFood: "Pizza"
};

function getAllValues(object) {
      return object;
  }

var insect = getAllValues(spiderman);
console.log(insect);
// console.assert(getAllValues() === );

// write a function called addProp(). It should take three inputs: an object, a property name, and a value. It should return the original object, plus a new key-value pair corresponding to the input.
var smiths = {
	firstName: "Steven",
	lastName: "Morrissey",
	job: "Lead Singer"
};

var favoriteBand = function addProp(object, propertyName, value) {
	return object[propertyName];
};
console.log(smiths);
//console.assert(addProp() === );

// write a new version of addProp() that only takes two inputs: an object, and a second object containing a single key-value pair. this key-value pair should take the place of the second and third inputs in the above problem. e.g.:
// 	var usrObj = {name: 'linus odoyle', age:10, email:'odoylerules@yahoo.com'}
// 	var newObj = addProp(usrObj,{hometown:'new orleans'})
// 	newObj should look like this: 
// 	{name: 'linus odoyle', age:10, email:'odoylerules@yahoo.com',hometown:'new orleans'}
// 	if i run:
// 		var newObj = addProp(newObj,{hobby:'bullying'})
// 		then newObj should contain even more data:
// 		{name: 'linus odoyle', age:10, email:'odoylerules@yahoo.com', hometown:'new orleans', hobby:'bullying'}
// var usrObj = {name: 'linus odoyle', age: 10, email: 'odoylerules@yahoo.com'}
// var newObj = addProp(usrObj, {hometown:'new orleans'})

// var doingThisAgain = function addProp(object,)

// write a function called getKeys(). it should take as input an object, and it should return the names of all the keys (properties) of the object.
var cubanFood = {
	0: "Rabo Encendido", 1: "Sandwich Cubano", 2: "Ropa Vieja"
};

function getKeys(object) {
  return object;
}

var paMe = getKeys(cubanFood);
console.log(paMe);

// write a function called addPropAll(). it should take three inputs: an array of objects, a property name, and a value. it should return a new array of objects, where each object has been supplemented with the key-value pair from the input. 
// function addPropAll([{}], property name, value) {
// }

// modify addPropAll() in the same way that you modified addProp above. it should take two inptus, an array of objects and a single object containing a single key-value pair. it should return a new array of objects, where each object has been supplemented with the key-value pair from the input.
// function addPropAll([{}], {}) {

// }

// write a function called logValues() that takes two inputs: an array of objects, and a property name. for each object in the array, it should log the value stored under the given property name within that object. 
// function logValues([{}], property name) {
// }

// write a function called getSpecificValues() that takes two inputs: an array of objects, and a property name. it should return an array containing the value stored under that property name for each object. for example, getSpecificValues(booksArray,'author') should return an array containing the author of every book object in the array. 
// function getSpecificValues([{}], property name) {

// }
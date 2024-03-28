/*
Exercise 1: Define an empty array

1) Create an empty array and assign it to a variable called `foods`.

Exercise 1 has been completed for you:
*/

const foods = [];  

console.log('Exercise 1 result:', foods);

/*
Exercise 2: Add strings to the array

1) Add 'pizza' and 'cheeseburger' to the `foods` array. 

Note: 'pizza' should be the first item in the array, followed by 'cheeseburger'.

Complete Exercise 2 in the space below:
*/

foods.push('pizza', 'cheeseburger');

console.log('Exercise 2 result:', foods);

/*
Exercise 3: Insert at the beginning

1) Insert the string 'taco' at the beginning of the `foods` array.

Complete Exercise 3 in the space below:
*/

foods.unshift('taco');

console.log('Exercise 3 result:', foods);

/*
Exercise 4: Access an array element

1) Retrieve the 'pizza' string from the array based on its position (index) in
   the array.  

2) Assign it to a variable called `favFood`.

Complete Exercise 4 in the space below:
*/

const favFood = foods[1];

console.log('Exercise 4 result:', favFood);

// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item0)
// splice(start, deleteCount, item0, item1)
// splice(start, deleteCount, item0, item1, /* …, */ itemN)

/*
Exercise 5: Insert an element between two others

1) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the array.

Complete Exercise 5 in the space below:
*/
// splice() method modifies an array by adding, removing, or replacing elements. It takes 3 parameters: starting index, number of elements to remove, and elements to add. For example, foods.splice(2, 0, 'tofu') inserts 'tofu' into the foods array at index 2 without removing any elements.
foods.splice(2, 0, 'tofu');
console.log('Exercise 5 result:', foods);

/*
Exercise 6: Replace elements

1) Replace 'pizza' in the `foods` array with 'sushi' and 'cupcake'.

Complete Exercise 6 in the space below:
*/

foods.splice(1, 1, 'sushi', 'cupcake');
console.log('Exercise 6 result:', foods);

/*Exercise 7: Using the `slice()` method

1) Use the `slice()` method to create a new array that contains 'sushi' and 
   'cupcake'.

2) Assign it to a variable named `yummy`.

Complete Exercise 7 in the space below:
*/

//  creates a new array 'yummy' using the slice method on 'foods' array. It extracts elements starting from index 1 up to, but not including, index 3 of the 'foods' array. The resulting 'yummy' array contains the values ['pizza', 'cheeseburger'] taken from 'foods' array.

const yummy = foods.slice(1, 3);
console.log('Exercise 7 result:', yummy);

/*
Exercise 8: Finding an index

1) Using the `indexOf()` method, find the index of the string 'tofu' in the 
   `foods` array. 

2) Assign it to a variable named `soyIdx`.

Complete Exercise 8 in the space below:
*/

// indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present. In this case, the 'indexOf()' method is used to find the index of 'tofu' in the 'foods' array and assign it to the variable 'soyIdx'.

const soyIdx = foods.indexOf('tofu'); 
console.log('Exercise 8 result:', soyIdx);

/*
Exercise 9: Joining elements

1) Use the `join()` method to concatenate the strings in the `foods` array, 
   separated by ' -> '. 

2) Assign the result to a variable called `allFoods`. 

Note: The final result should log as:
'taco -> sushi -> cupcake -> tofu -> cheeseburger'

Complete Exercise 9 in the space below:
*/

// The join() method concatenates all elements of an array into a string, separated by a specified separator. In this case, the separator is ' -> '. The resulting string is assigned to the variable 'allFoods'.

const allFoods = foods.join(' -> ');
console.log('Exercise 9 result:', allFoods);

/*
Exercise 10: Check for an element

1) Using the .includes() method, check if the `foods` array contains the string
   'soup'.

2) Assign the result to a variable called `hasSoup``.

Complete Exercise 10 in the space below:
*/

// The includes() method checks if an array contains a certain element and returns true or false. The method is used to check if the 'foods' array contains the string 'soup' and assign the result to the variable 'hasSoup'.
const hasSoup = foods.includes('soup');
console.log('Exercise 10 result:', hasSoup);

/*
Exercise 11: Odd numbers from an array

1) Choose a method to iterate through the `nums` array.

2) Push each odd number to a new array named `odds`.

Hint: Initialize the `odds` variable to an empty array before the iteration.

Complete Exercise 11 in the space below:
*/

// forEach method executes a provided function for each element in an array. An if statement checks if the current number is odd, and if it is, the push method adds it to the odds array. The odds array will contain all the odd numbers from the nums array by the end of the forEach loop.

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
const odds = [];
/* 1.const odds = []; - Here, an empty array odds is declared using the const keyword. The const keyword means that the variable cannot be reassigned. However, the contents of the array can be modified, which is what happens in this code.

2. nums.forEach(num => { - The forEach method is being called on the nums array. forEach is a built-in JavaScript method that executes a provided function once for each array element. In this case, for each number (num) in the nums array, the arrow function num => {...} is executed.

3. if (num % 2 !== 0) { - This is an if statement that checks if the current number (num) is odd. In JavaScript, the modulus operator (%) returns the remainder of a division operation. If a number is divided by 2 and the remainder is not 0, then the number is odd.

   4. odds.push(num); - If the number is odd (as determined by the if statement), it is added to the end of the odds array using the push method.

   end of the forEach loop, the odds array will contain all the odd numbers from the nums array.*/
nums.forEach(num => {
   if (num % 2 !== 0) {
      odds.push(num);
   }
});

console.log('Exercise 11 result:', odds);

/*
Exercise 12: FizzBuzz with arrays

1) Choose a method to iterate through the `nums` array. 

2. As you loop, sort the numbers into new arrays based on the following rules:

   - Push any number evenly divisible by 3 to an array called `fizz`.
   - Push any number evenly divisible by 5 to an array called `buzz`.
   - Push any number that is evenly divisible by 3 and 5 to an array called
     `fizzbuzz`.

   Note: A single number may meet more than one of the above rules. If it does,
         it should be placed in multiple arrays. For example, the number `15`
         will appear in the `fizz`, `buzz`, and `fizzbuzz` arrays.

Complete Exercise 12 in the space below:*/

/* store the results in three separate arrays, namely fizzbuzz, fizz, and buzz, instead of printing them. It iterates over an array called nums using a for loop.

The for loop starts with the initialization of a variable i, which is set to 0. The condition i < nums.length ensures that the loop continues to run as long as the value of i is less than the length of the nums array. The final expression i++ increments i by 1 after each loop iteration.

Inside the loop, a series of if and else-if statements check each number in the nums array for divisibility by 3 and 5.

The first if statement checks if the current number nums[i] is divisible by both 3 and 5. This is done using the modulus operator %, which returns the remainder of a division. If nums[i] is divisible by both 3 and 5, the remainder will be 0 for both operations, and the number is added to the fizzbuzz array using the push method.

If the number is not divisible by both 3 and 5, the code moves to the else-if statements. The first else-if checks if the number is divisible by 3. If it is, the number is added to the fizz array. The second else-if checks if the number is divisible by 5. If it is, the number is added to the buzz array.

If a number is not divisible by 3 or 5, it is ignored, and the loop moves to the next number in the nums array.*/

const fizz = [];
const buzz = [];
const fizzbuzz = [];

for (let i = 0; i < nums.length; i++) {
   if (nums[i] % 3 === 0 && nums[i] % 5 === 0) {
      fizzbuzz.push(nums[i]);
   } else if (nums[i] % 3 === 0) {
      fizz.push(nums[i]);
   } else if (nums[i] % 5 === 0) {
      buzz.push(nums[i]);
   }
}

console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);

/*
Exercise 13: Retrieve the Last Array

1) Assign the last nested array in the `numArrays` below to a variable named
   `numList`. As you do this, also fulfill these goals:

   - Assume you don't know how many nested arrays `numArrays` contains.
   - Do not alter the original `numArrays` array.

   const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];
Complete Exercise 13 in the space below:
*/

//defines a constant variable numArrays, which is a 2-dimensional array. The second constant variable numList is assigned to the last sub-array in numArrays using the length property. If you log numList to the console, you would see [7, 81, 90].

const numArrays = [
   [100, 5, 23],
   [15, 21, 72, 9],
   [45, 66],
   [7, 81, 90]
];

const numList = numArrays[numArrays.length - 1];

console.log('Exercise 13 result:', numList);


/*
Exercise 14: Accessing within nested arrays

1) Retrieve the number `66` from the `numArrays` array. As part of this process
   do not alter the original `numArrays` array.

2) Assign it to a variable called `num`.

Complete Exercise 14 in the space below:
*/

let num;
for (const arr of numArrays) {
   if (arr.includes(66)) {
      num = 66;
      break;
   }
}

console.log('Exercise 14 result:', num);

/*
Exercise 15: Nested array sum

1) Use nested loops or `forEach()` methods to sum up all numbers within 
   `numArrays` nested arrays.
   
2) Assign the sum to a variable called `total`.

Hint: Be sure to declare and initialize the total variable before the iterations.

Complete Exercise 15 in the space below:
*/

let total = 0;
for (const arr of numArrays) {
   for (const num of arr) {
      total += num;
   }
}
console.log('Exercise 15 result:\n', total);

//PS: My hands hurt lol
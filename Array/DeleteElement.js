let array = [1, 2, 3, 4, 5];
let index = 2; // Index of the element to be deleted (e.g., element 3)

for (let i = index; i < array.length - 1; i++) {
  array[i] = array[i + 1];
}

// Remove the last element (as it's now a duplicate)
array.pop();

console.log(array);
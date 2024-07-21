let arr = [30, 20, 45, 76, 20, 80];
let postion = 3;

for (let i = postion; i < arr.length - 1; i++) {
  arr[i] = arr[i + 1];
}
arr.length = arr.length - 1;
console.log(arr);

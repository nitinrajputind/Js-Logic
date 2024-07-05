let arr = [20, 30, 40, 50, 60, 70, 80, 90, 100];
let newEelement = 10;
let position= 2;
console.log(arr);
for(let i = arr.length-1; i >= 0; i--){
    // console.log(arr[i]);
    if(i>=position){
        arr[i+1] = arr[i];
        if(i==position){
            arr[i] = newEelement;
        }
    }
}
console.log(arr);
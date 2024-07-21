let arr = [20, 40, 60, 5, 10, 70, 80, 99];
const item = 70;


for(let i = 0; i < arr.length; i++){
    if(arr[i] === item){
        console.log(`item ${arr[i]} is present on position ${i}`)
        break;
    }
}
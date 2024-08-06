let arr1 = [3, 7, 8, 9, 10, 11];
let arr2 = [1, 2, 3, 4, 5, 6, 30, 70, 50];
let arr3 = [];

let a1=0;
let a2=0;
let a3=0;


while(a1<arr1.length || a2<arr2.length){
    if(arr1[a1]< arr2[a2]){
        arr3[a3] = arr1[a1];
        a1++;

    }else{
        arr3[a3] = arr2[a2];
        a2++;
    }
    a3++;
}

console.log(arr3);
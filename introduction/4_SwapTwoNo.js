// Swap Two Variables

// 1. Using With Temporary Variables
function swapVariable1(a,b){
    if(typeof a == undefined || typeof b == undefined){
        return ' Error : Both Variables should be defined'
    }
    let temp = a;
    a = b;
    b = temp;
    return [a,b];
}
let a = 2 , b = 3;
console.log(`Swapping Variables with values A = ${a} and  B = ${b} is A = ${swapVariable1(a,b)[0]}, B = ${swapVariable1(a,b)[1]}`);

// without using third variable 
function swapVariable2(X, Y) {
    if( typeof a == undefined || typeof b == undefined){
        return ' Error : Both Variables should be defined'
    }
    X = X + Y;
    X = X - Y;
    Y = X - Y
    return [X,Y];
}
console.log(`Swapping Variables with values A = ${a} and  B = ${b} is A = ${swapVariable3(a,b)[0]}, B = ${swapVariable3(a,b)[1]}`);

// 3. Using the ES6 Destructuring Method
function swapVariable3(X,Y){
    if(typeof a == undefined || typeof b == undefined){
        return ' Error : Both Variables should be defined'
    }
    [X , Y] = [Y , X]
    return [X,Y];
}
console.log(`Swapping Variables with values A = ${a} and  B = ${b} is A = ${swapVariable3(a,b)[0]}, B = ${swapVariable3(a,b)[1]}`);
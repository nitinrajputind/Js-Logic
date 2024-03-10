// Find the squareroot of the given element

// NOTE : Math.sqrt(number)

findSquareRoot=(element)=>{
    if(element<0){
        return "Error : Number must be greater than Zero";
    }
    const squareRoot = Math.sqrt(element).toFixed(2);
    return squareRoot
}
const number = 2
console.log(`sqare root is ${number} :  ${findSquareRoot(number)}`)
// Area of The Triangle 

// when the triangle height and Base is given 
// Formula :-  Area of the Triangle = (base * height ) / 2

areaofTriangle=(base,height)=>{
    if(typeof base !== 'number' || typeof height !== 'number'){
        return "Error: Area of the Triangle must be a number"
    }
    const area = (base * height) / 2;
    return `Area of Triangle is ${area}`
}

console.log(areaofTriangle(2, 3))


// When the triangle all three sides are given
// Formula :  S = ( a + b + c ) / 2 , Area of Triangle = √ S ( S - a ) * ( S - b ) * ( S - c )

function areaofTriangle(side1, side2, side3) {
    if (typeof side1 !== 'number' || typeof side2 !== 'number' || typeof side3 !== 'number') {
        return "Error : Triangle all sides must be numbers";
    }
    if (side1 + side2 <= side3 || side2 + side3 <= side1 || side3 + side1 <= side2) {
        return "Error : Given side of triangle not formed a valid triangle ";
    }
    const S = (side1 + side2 + side3) / 2;
    const area = Math.sqrt(S * (S - side1) * (S - side2) * (S - side3));

    return `Area of Triangle is ${area}`;
}

console.log(areaofTriangle(30, 30, 30));
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (i == 5) {
        console.log("5 is the best no.");
    }
    console.log(element);
}


console.log("---------------------------------------->>>");

for (let j = 1; j <= 10; j++) {
    console.log(`outer loop value : ${j}`);
    for (let k = 1; k <= 10; k++) {
        // console.log(`Inner loop value : ${k} and Outer Loop value: ${j}`);
    console.log(j + '*' + k + '=' + j*k);
    }
}

console.log("---------------------------------------->>>");

// Array
const myArray = ["rose" , "sunflower" , "lotus", "lilly"]


for (let index = 0; index < myArray.length; index++) {  // if <= :--->> its gives undefined
    const element = myArray[index];
    console.log(element);
}
console.log(myArray.length);

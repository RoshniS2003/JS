// const email = "ros@gmail.com"
// const email = ""     // empty
const email = []     // Array

if (email) {
    console.log("Got User Email");
} else {
    console.log("Don't got User Email");
}


// falsy value:-------->
// false, 0 , -0, BigInt 0n , "", null , undefined, NaN

// truthy values:---->>>
// "0" (string) , 'false', " "(space), {}, [], function(){} (no paramater) 


// Nullish coalescing Operator (??):--->>> null undefined

let val1;
// val1 = 10 ?? 20;   // 10
// val1 = 10 ?? null;   // 10
// val1 = 10 ?? undefined;    // 10
val1 = null ?? 10 ?? 25;   // 10
console.log(val1);

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (i == 5) {
        // console.log("detected 5");
        console.log("skip 5");

        //    break 
        continue
    }
    console.log(`value of i = ${element}`);
}
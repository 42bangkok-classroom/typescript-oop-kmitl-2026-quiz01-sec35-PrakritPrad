let Num1 = Number(process.argv[2]);

if (Number.isNaN(Num1) || Num1 <= 0) {
    console.log("Invalid Input");
    process.exit();
}

for (let i = 1; i <= Num1; i++) {
    if (i % 3 === 0 && i % 7 === 0) {
        console.log("FooBar");
    }
    else if (i % 3 === 0) {
        console.log("Foo");
    }
    else if (i % 7 === 0) {
        console.log("Bar");
    }
    else {
        console.log(i);
    }
}
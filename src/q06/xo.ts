let count = Number(process.argv[2]);

if (Number.isNaN(count) || count <= 0) {
  console.log("Invalid Input");
  process.exit();
}

for (let i = 1; i <= count; i++) {
  let row = ""
  for (let j = 1; j <= count; j++) {
    if( i === 1 || j === 1 || i === count || j === count){

      row += "x"
    }
    else {
      
      row += "o"
    }
  }
  console.log(row);
}
export { };

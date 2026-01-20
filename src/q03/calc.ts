let op : string = process.argv[2].toLowerCase().trim() ?? "";
let a = parseFloat(process.argv[3]);
let b = parseFloat(process.argv[4]);

if(Number.isNaN(a) || a < 0 || Number.isNaN(b) || b < 0 || process.argv[2] == " " || process.argv[3] == " " || process.argv[4] == " " || (process.argv[2] == " " || process.argv[3] == " " || process.argv[4] == " ")){
   console.log("Invalid input");
   process.exit();
}


switch (op) {
  case "add":
    console.log(`${a + b}`);
    break;
  case "sub":
    console.log(`${a - b}`);
    break
  case "mul":
    console.log(`${a * b}`);
    break
  case "div":
    if(b === 0){
      console.log("Invalid input");
      break
    }
    console.log(`${a / b}`);
    break
  default: console.log("Invalid operator");
}
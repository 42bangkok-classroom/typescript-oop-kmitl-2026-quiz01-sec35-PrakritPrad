let op = process.argv[2].toLowerCase().trim() ?? "";
let a = Number(process.argv[3]);
let b = Number(process.argv[4]);

if(Number.isNaN(a) || a < 0 || Number.isNaN(b) || b < 0){
   console.log("Invalid Input");
   process.exit();
}


switch (op) {
  case "add":
    console.log(a + b);
    break;
  case "sub":
    console.log(a - b);
    break
  case "mul":
    console.log(a * b);
    break
  case "div":
    if(b === 0){
      console.log("Invalid input");
      break
    }
    console.log(a / b);
    break
  default: console.log("Invalid operator");
}
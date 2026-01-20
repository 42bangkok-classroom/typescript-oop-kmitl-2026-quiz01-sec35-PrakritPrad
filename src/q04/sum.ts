let word = (process.argv[2] ?? "").trim(); 
const N = Number(word)
if(Number.isNaN(N) || N < 0 || process.argv[2] == " " || !Number.isInteger(N)){
   console.log("Invalid Input");
   process.exit();
}

let sum = 0;
for(let i = N;i >= 0;i--){
  sum += i;
}
console.log(`Sum: ${sum}`);


export{};
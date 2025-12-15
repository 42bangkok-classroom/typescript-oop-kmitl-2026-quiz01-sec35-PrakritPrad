let Num = Number(process.argv[2]);  

if(Number.isNaN(Num) || Num < 0){
   console.log("Invalid Input");
   process.exit();
}

let sum = 0;
for(let i = Num;i >= 0;i--){
  sum += i;
}
console.log(sum);

export{};
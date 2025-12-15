let Input1 = Number(process.argv[2]);

if(Number.isNaN(Input1) || Input1 < 0){
   console.log("Invalid Input");
   process.exit();
}
if(Input1 >= 50 && Input1 < 60){
  console.log("D");
}

else if(Input1 >+ 60 && Input1 < 70){
  console.log("C");
}

else if(Input1 >= 70 && Input1 < 80){
  console.log("B");
}

else if(Input1 >= 80 && Input1 < 100){
  console.log("A");
}

else{
  console.log("F");
}

export {};
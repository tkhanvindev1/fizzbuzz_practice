

for (let z = 0; z <= 50; z++){
  if(z % 3 == 0){
    console.log('fizz')
  }
  if(z % 5 == 0){
    console.log('buzz')
  }
  if(z % 5 == 0 && z % 3 == 0){
    console.log('fizzbuzz')
  }
  else {
    console.log(z)
  }
}






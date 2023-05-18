// a[1,2,3] = 1
// b[3,2,1]=1

function compare(a, b) {
  let abi = 0;
  let bob = 0;
  for (let i = 0; i < a.length; i++) {
      if (a[i] > b[i]) {
        abi++;
      } else if (b[i] > a[i]) {
        bob++;
      } else if (a[i]===b[0]){
        abi=0 
        bob = 0
      }
    
  }
  return [abi, bob];
}

console.log(compare([5,6,7],[3,6,10]))
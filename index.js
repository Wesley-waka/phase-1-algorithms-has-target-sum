function hasTargetSum(array, target) {
  // Write your algorithm here
  for (var k = 0; k < array.length; k++) {
    for (var m = 0; m <array.length; m++) {
      if (array[k] + array[m] === target) {
        return true;
      }
      else if(array[m] + array[m] === target || array[k]+array[k]===target) {
        return false;
      }
      else if (array.length === 1) {
        return false;
      }
    }
  }
}


      
  // loop through my array of num as i add them final result is to be compared with target

/* 
  Write the Big O time complexity of your function here
*/

/* 
  for i=0 ; i<array.length ; i++){
    array[i] + array.legth-[i]  
      array[i]===target ? "True" : "False
      }
    }
  }
*/

/*
  A Target Sum that will compute a apir of valuea in the array and 
  true if the pairs are equal to target and false if the pairs are unequal.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

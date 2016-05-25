var r1 = ['x','o','x']
var r2 = ['x','x','x']
var r3 = ['','','x']

var winner = false;
//check whether to see if there are any matches with rows

  if (r1[0]===r1[1] && r1[1]===r1[2]){ //check if each element is all the same as the element next door to it.
    winner=r1[0]

 }



  if (r2[0]===r2[1] && r2[1]===r2[2]){
    winner=r2[0]
 }


  if (r3[0]===r3[1] && r3[1]===r3[2]){
    winner=r3[0]
  }

  console.log(winner)

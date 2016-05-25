var x = [1,2;3,4];

x.forEach(function(el){
  console.log(el);
};

var finished = true;
for(var i=0; i<10; i++){
  console.log(i);
  if (i===10){
    finished=false;
  }
}

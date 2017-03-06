var tic = document.getElementsByClassName("tic");
var nuevo = document.getElementById("newGame");
nuevo.onclick = function(){
  for(i=0; i< 9; i++){
    tic[i].value = "+";
  }

}

var turno = 1;

tic[0].onclick = function(){
  if(turno == 1){
    tic[0].value = "o";
    turno = 2;
  }
  else{
    tic[0].value = "x";
    turno = 1;
  }
}

tic[1].onclick = function(){
  if(turno == 1){
    tic[1].value = "o";
    turno = 2;
  }
  else{
    tic[1].value = "x";
    turno = 1;
  }
}

tic[2].onclick = function(){
  if(turno == 1){
    tic[2].value = "o";
    turno = 2;
  }
  else{
    tic[2].value = "x";
    turno = 1;
  }
}

tic[3].onclick = function(){
  if(turno == 1){
    tic[3].value = "o";
    turno = 2;
  }
  else{
    tic[3].value = "x";
    turno = 1;
  }
}

tic[4].onclick = function(){
  if(turno == 1){
    tic[4].value = "o";
    turno = 2;
  }
  else{
    tic[4].value = "x";
    turno = 1;
  }
}

tic[5].onclick = function(){
  if(turno == 1){
    tic[5].value = "o";
    turno = 2;
  }
  else{
    tic[5].value = "x";
    turno = 1;
  }
}

tic[6].onclick = function(){
  if(turno == 1){
    tic[6].value = "o";
    turno = 2;
  }
  else{
    tic[6].value = "x";
    turno = 1;
  }
}

tic[7].onclick = function(){
  if(turno == 1){
    tic[7].value = "o";
    turno = 2;
  }
  else{
    tic[7].value = "x";
    turno = 1;
  }
}

tic[8].onclick = function(){
  if(turno == 1){
    tic[8].value = "o";
    turno = 2;
  }
  else{
    tic[8].value = "x";
    turno = 1;
  }
}

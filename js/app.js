var card = document.querySelectorAll(".card");

for(var i = 0;  i <  card.length; i++){
  card[i].classList.add("efects"); 
  card[i].addEventListener("click", queCartaEs);
  card[i].addEventListener("click", rotation);
  card[i].addEventListener("click", pares);
}

function queCartaEs (){
  // console.log(this);
  var nameData = this.dataset.name;
  // console.log(nameData);
  var colorData = this.dataset.color;
  // console.log(colorData);
  var pNombre = document.createElement("p");
  // console.log(pNombre);
  pNombre.textContent = nameData + " " + colorData;
  console.log(pNombre);
  var padre = document.getElementsByClassName("padre")[0];
  // console.log(padre);
  padre.appendChild(pNombre);
  pNombre.classList.add("fondo");
}

function rotation (){
  if(this.classList.contains("rotation-efect")){
    this.classList.remove("rotation-efect");
  }else{
    this.classList.add("rotation-efect");
  }
}
var cont = 0; 

function pares(){
 this.cont= cont + 1; 

 console.log(cont);
}


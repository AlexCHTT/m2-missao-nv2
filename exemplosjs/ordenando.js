var nomes = [];

for (var i = 0; i < nomes.length; i++) {
  var lis = document.createElement('li');
  lis.innerHTML = nomes[i];
  lista.appendChild(lis);
}

//função para adicionar elemento à lista

const add = () => {
    var coleta = document.getElementById("valor").value; 
    var nomeDig = document.createElement('li');
    nomeDig.setAttribute("class","teste1")
    nomes.push(coleta); 
    nomeDig.innerHTML = coleta; 
    lista.appendChild(nomeDig);}
    Array = document.querySelectorAll(".teste1");

//função para limpar o resultado
const remover = () => {
    while (add.nomeDig != []){
    document.getElementsByClassName('teste1')[0].remove();}
}


const lista1 = () => {
var list = document.getElementsByClassName('teste1');
 return alert(list[2].innerHTML);
}

/* Função swap, com o objetivo de trocar os valores de duas posições de um vetor,
tendo como parâmetros de entrada o vetor e as posições */

const swap = (v,p1,p2) => {
  var lis = document.querySelectorAll('.teste1');
  lis[v].parentNode.insertBefore(lis[p1], lis[p2]);
}


//get se n achar n busca
const iniciar = () => {
swapElements(mudar.myArray, 0, 1);
return console.log(mudar.myArray); // [-2,12,55,68,80]
}

// Função shuffle, com o objetivo de embaralhar os elementos de um vetor

const shuffle = () => {
  var myArray = document.querySelectorAll(".teste1");
  // Loop em todos os elementos
for (let i = myArray.length - 1; i > 0; i--) {
      // Escolhendo elemento aleatório
  const j = Math.floor(Math.random() * (i + 1));
  // Reposicionando elemento
  myArray[j].parentNode.insertBefore(myArray[i],myArray[j]);
}
// Retornando array com aleatoriedade
return myArray;
}

// Função Ordenar os elementos

let numbers = [8,5,2,1,4];

const ordenar = () => {

var myArray = document.querySelectorAll(".teste1");
myArray.sort((a,b) => a - b);
//console.log(numbers)

//lis[v].parentNode.insertBefore(lis[p1], lis[p2]);
}

//Função bubble_sort, para ordenar um vetor de
//inteiros com o algoritmo Bubble Sort

const bubbleSort = () => {
  var list = document.getElementById("lista");
  var items = list.getElementsByTagName("li");
  var len = items.length;
  var swapped;
  do {
    swapped = false;
    for (var i = 0; i < len-1; i++) {
      if (parseInt(items[i].innerHTML) > parseInt(items[i+1].innerHTML)) {
        var temp = items[i].innerHTML;
        items[i].innerHTML = items[i+1].innerHTML;
        items[i+1].innerHTML = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

// Função selection_sort, para ordenar um vetor
// de inteiros utilizando o algoritmo Selection Sort,
// tendo como parâmetro de entrada o vetor de
// valores inteiros
mylist = [2,8,4,10,9,6,1]

const selectionsort = () => {
  var list = document.getElementById("lista");
  var items = list.getElementsByTagName("li");

  let menor;

  for (let i = 0; i < items.length - 1; i++) {
    menor = i;
    for (let j = i + 1; j < items.length; j++) {
      if (items[j].innerHTML < items[menor].innerHTML){
        menor = j;
      }
    }
    if (i != menor) {
      [items[i].innerHTML, items[menor].innerHTML] = [items[menor].innerHTML, items[i].innerHTML];
    }
  }
  //return vetor;
}


/* Ordenador do tipo Quick Sort */
const quicksort = () => {
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById("lista");
  switching = true;
  
  while (switching) {
   
    switching = false;
    b = list.getElementsByTagName("LI");
   
    for (i = 0; i < (b.length - 1); i++) {
    
      shouldSwitch = false;
     
      
      if (Number(b[i].innerHTML) > Number(b[i + 1].innerHTML)) {
        
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
     
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}








// const shuffle = ([arr]) => {
//   let m = arr.length;
//   while (m) {
//     const i = Math.floor(Math.random() * m--);
//     [arr[m], arr[i]] = [arr[i], arr[m]];
//   }
//   return arr;
// };


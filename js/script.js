/*
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
# MILESTONE 1
Prepariamo "qualcosa" per tenere il punteggio dell'utente.
Quando l'utente clicca su una cella, incrementiamo il punteggio.
Se riusciamo, facciamo anche in modo da non poter più cliccare la stessa cella.
# MILESTONE 2
Facciamo in modo di generare 16 numeri casuali (tutti diversi) compresi tra 1 e il massimo di caselle disponibili.
Generiamoli e stampiamo in console per essere certi che siano corretti
# MILESTONE 3
Quando l'utente clicca su una cella, verifichiamo se ha calpestato una bomba, controllando se il numero di cella è presente nell'array di bombe. Se si, la cella diventa rossa (raccogliamo il punteggio e e scriviamo in console che la partita termina) altrimenti diventa azzurra e dobbiamo incrementare il punteggio.
# MILESTONE 4
Quando l'utente clicca su una cella, e questa non è una bomba, dobbiamo controllare se il punteggio incrementato ha raggiunto il punteggio massimo perchè in quel caso la partita termina. Raccogliamo quindi il messaggio è scriviamo un messaggio appropriato.
(Ma come stabiliamo quale sia il punteggio massimo?)
# MILESTONE 5
Quando la partita termina dobbiamo capire se è terminata perchè è stata cliccata una bomba o se perchè l'utente ha raggiunto il punteggio massimo. Dobbiamo poi stampare in pagina il punteggio raggiunto ed il messaggio adeguato in caso di vittoria o sconfitta.
*/
// prendo gli elementi in pagina  
const button = document.getElementById('play');
const grid = document.getElementById('my-container');
const dificultLevelField = document.getElementById('difficult-level');
//creazione aray
const bombs = []



//! creo una funzione per generare le caselle ---------------

const createcell = () => {
    const cell = document.createElement('div')
    cell.classList.add('cell', cellClas)
    return cell;
}
//! creo una funzione per rimuovere le celle dal dom
const resetCells = () => {
     // Rimuovo tutte le celle dalla griglia
    while (grid.firstChild) {
      grid.removeChild(grid.firstChild);
    }
  }
//! funzione per generare numeri randomici -------------------------

const getRandomNumber =(min , max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


//! FUNZIONE PER PRENDERE 16 NUMERI CASUALI NEL RANGE ---------------------------

const bombGenerator = (param) =>{
  let bombNumber;
  while(bombs.length < 16){
      bombNumber =  getRandomNumber(1, param);
      if(bombs.includes(bombNumber)){
         
      }else if(!bombs.includes(bombNumber)){
          bombs.push(bombNumber);
      }
  }
} 



let isReset = false;
let cellClas = ('')

button.addEventListener('click', function() {
  dificultLevel = dificultLevelField.value
  console.log(dificultLevel)
  let rows = 0;
  let colls = 0;
  //! in base alla dificolta cambio i valori delle row delle cols e decido che classe aggiunger
  if(dificultLevel === 'easy'){
    rows = 10;
    colls = 10;
    cellClas = ('easy')
  }else if (dificultLevel === 'medium'){
    rows = 9;
    colls = 9;
    cellClas = ('medium')
  }else if(dificultLevel === 'hard'){
    rows = 7;
    colls = 7;
        cellClas = ('hard')
      }
      
      
      const totalCells = rows * colls;
      // genero un avento al clik del bottone
      
      if (isReset) {
        resetCells()
        button.innerText = 'new game'
        // Imposto isReset a false
        isReset = false;
      } else {
        // creo un contatre per il punteggio
        counter = 0;
        for (let i = 1; i <= totalCells; i++) {
          const cell = createcell();
          cell.innerText = i;
         
          
          cell.addEventListener('click', function() {
            cell.classList.add('cliked');
            cell.classList.add('disabled')
            
            console.log(i)
            counter++;
            
            bombGenerator(totalCells)
            console.log(bombs)
            console.log(this.innerText)
            if(bombs.includes(parseInt(this.innerText))){
              cell.classList.remove('cliked')
              cell.classList.add('bomb')
              alert(`Game Over il tuo punteggio è: ${counter} punti`)
            }

            if(counter == totalCells - 16){
              alert('You win')
            }
            console.log(counter)
          });
          grid.appendChild(cell);
        }
        console.log(cellArr)

        button.innerText = 'reset'
        // Imposto isReset a true
        isReset = true;
      }
    });


    
    
    
//shuffle functiuon
function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}


let tablero = document.getElementById('tablero');
let cols = 6
let rows = 5

//array de colores
let colores = [
    'red', 'blue', 'green', 'yellow', 'orange', 'pink', 'brown', 'lightblue', 'lightgreen', 'purple', 'aquamarine', 'gray', 'greenyellow', 'orangered', 'lightcoral' 
]

colores = [...colores, ...colores]

shuffle(colores)

//crear las 30 cajas
for (let row = 0; row < rows; row++){
    for (let col = 0; col < cols; col++){
        let box = document.createElement('div')
        let color = colores.shift()
        box.classList.add('box')
        box.dataset.col = col;
        box.dataset.row = row;
        box.dataset.color = color;
        box.dataset.open = 0;
        box.dataset.paired = 0;
        tablero.appendChild(box)

        
        let comprobarColor = (event)=>{
            event.target.style.backgroundColor = event.target.dataset.color;
            event.target.dataset.open = 1;

            let openedBox = document.querySelectorAll('[data-open = "1"]');
            
            if (openedBox.length == 2){
              if (openedBox[0].dataset.color === openedBox[1].dataset.color){
                openedBox[0].removeEventListener('click', comprobarColor);
                openedBox[1].removeEventListener('click', comprobarColor);
                openedBox[0].dataset.open = 0;
                openedBox[1].dataset.open = 0;
                openedBox[0].dataset.paired = 1;
                openedBox[1].dataset.paired = 1;

                let pairedBoxes = document.querySelectorAll('[data-paired = "1"]');
                if(pairedBoxes.length == cols*rows){
                    stopwatch.stop();
                    setTimeout(()=>{
                        alert('Juego Terminado!')
                    }, 500)
                }

              } else{
                setTimeout(()=>{
                    openedBox[0].style.backgroundColor = 'black'
                    openedBox[1].style.backgroundColor = 'black'
                    openedBox[0].dataset.open = 0;
                    openedBox[1].dataset.open = 0;
                }, 500)
                
              }                  
            }
        }
        
        box.addEventListener('click', comprobarColor)
    }
}

//timer
var min,sec,ms,count, malt, salt, msalt;

var stopwatch = {
  start: function(){
    
    ms = 0;
    sec = 0;
    min = 0;
    count = setInterval(function(){
      if(ms == 100){
        ms = 0;
        if(sec == 60){
          sec = 0;
          min++;
        }
        else{
          sec++;
        }
      }
      else{
        ms++;
      }
      
      malt = stopwatch.pad(min);
      salt = stopwatch.pad(sec);
      msalt = stopwatch.pad(ms);
      
      stopwatch.update(malt + ":" + salt + ":" + msalt);
    }, 10);
    },
  stop: function(){
    clearInterval(count);
 
  },
  
  update: function(txt){
     var temp = document.getElementById("timer");
  temp.firstChild.nodeValue = txt;
  },
  
  pad: function(time){
    var temp;
    if(time < 10){
      temp = "0" + time;
    }
    else{
      temp = time;
    }
    return temp;
  }
}

stopwatch.start()



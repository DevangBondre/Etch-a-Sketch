const grid = document.getElementById('grid');
const gridValues = document.getElementById('gridOptions');
const blackButton = document.getElementById('black')
const rainbowButton = document.getElementById('rainbow')
const clear = document.getElementById('clear')
const eraser = document.getElementById('eraser')
const buttonsList = document.querySelectorAll('.btn')



let currentGridSize = 10;

clear.addEventListener('click',clearGrid)

gridValues.addEventListener('change',()=> {

    const selectedOption = parseInt(gridValues.value);
    currentGridSize = selectedOption;
    gridCreate(selectedOption)
})

    
function gridCreate(size){
    
    grid.style.gridTemplateColumns = `repeat(${size},1fr)`;
    grid.style.gridTemplateRows = `repeat(${size},1fr)`

    for(let i = 0 ; i < size * size ; i++){
        const gridItem = document.createElement('div')
        gridItem.classList.add('grid-item')
        

        grid.appendChild(gridItem);
    }

let isDrawing = false;


grid.addEventListener('mousedown', () => {
    isDrawing = true;
});

grid.addEventListener('mouseup', () => {
    isDrawing = false;
});
 
grid.addEventListener('mouseleave', () => {
    isDrawing = false;
})



blackButton.addEventListener('click', () => {
    blackButton.classList.add('active');
    rainbowButton.classList.remove('active');
    eraser.classList.remove('active')
});

rainbowButton.addEventListener('click', () => {
    rainbowButton.classList.add('active');
    blackButton.classList.remove('active');
    eraser.classList.remove('active')
});

eraser.addEventListener('click', () =>{
    eraser.classList.add('active')
    blackButton.classList.remove('active')
    rainbowButton.classList.remove('active')
})


grid.addEventListener('mouseover',(e)=>{

    if(isDrawing){
        if(e.target.classList.contains('grid-item')){
            if(blackButton.classList.contains('active')){
                e.target.style.backgroundColor = 'black'
            }
            if(rainbowButton.classList.contains('active')){
                const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
                e.target.style.backgroundColor = randomColor
            }
            if(eraser.classList.contains('active')){
                e.target.style.backgroundColor = 'white'
            }
        }
    }
})  

blackButton.addEventListener('click',()=>{
    blackButton.classList.add('active')
    rainbowButton.classList.remove('active');
})

rainbowButton.addEventListener('click',()=>{
    rainbowButton.classList.add('active')
    blackButton.classList.remove('active');
})

 
}   

function clearGrid(){
    grid.innerHTML = ''
    gridCreate(currentGridSize)     
}


buttonsList.forEach(button => { 
    button.addEventListener('click',() => {
       document.querySelector('.buttoncolor')?.classList.remove('buttoncolor')
       event.currentTarget.classList.add('buttoncolor');
    });
});

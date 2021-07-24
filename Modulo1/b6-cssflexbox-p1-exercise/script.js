const flexDir = document.getElementById('flexDir').getElementsByClassName('fd');
const flexWrapper = document.getElementById('flexWrap').getElementsByClassName('fd');
const flexFlow = document.getElementById('flexFlow').getElementsByClassName('fd');

function changeFlexDirection(e){
    
    let numContainer = document.getElementById('boxNumbers');
    numContainer.style.flexDirection = e.target.innerHTML;
    //poderia ter usado o atributo value na tag button, mas o innerficou + didatico
};

function changeFlexWrap(e){
    let numContainer = document.getElementById('boxNumbers');
    numContainer.style.flexWrap = e.target.innerHTML;
}

function changeFlexFlow(e) {
    let numContainer = document.getElementById('boxNumbers');
    numContainer.style.flexFlow = e.target.innerHTML;
}

for(let i=0; i<flexDir.length ; i+=1){
    flexDir[i].addEventListener('click',changeFlexDirection);
};

for(let i=0; i<flexWrapper.length ; i+=1){
    flexWrapper[i].addEventListener('click',changeFlexWrap);
};

for(let i=0; i<flexFlow.length ; i+=1){
    flexFlow[i].addEventListener('click',changeFlexFlow);
};
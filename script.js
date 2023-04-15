//Initialize variables
let tone = '#000000';
let multi_interval;

//This function creates the initial canvas
function createCanvas() {
  for(let i = 0; i <= 1495; i++){
    const canvas_sect = document.querySelector('.canvas');
    const canvas_units = document.createElement('div');
    canvas_units.classList.add('canvas-units');
    canvas_units.classList.add('canvas-units-medium');
    canvas_sect.appendChild(canvas_units); 
  }
}

//BUTTON: This piece of code creates a canvas made out of small size divs and resets color to black.  
const den_small = document.querySelector('.den-small');
den_small.addEventListener('click', () => {
  const canvas_sect = document.querySelector('.canvas');
  while (canvas_sect.hasChildNodes()){
    canvas_sect.removeChild(canvas_sect.firstChild);
  }
  for(let i = 0; i <= 3365; i++){
    const canvas_sect = document.querySelector('.canvas');
    const canvas_units = document.createElement('div');
    canvas_units.classList.add('canvas-units');
    canvas_units.classList.add('canvas-units-small');
    canvas_sect.appendChild(canvas_units); 
  }
  const value = document.querySelector('input');
  value.value = '#000000';
  tone = '#000000';
  paint();
  clearInterval(multi_interval);
}
);

//BUTTON: This piece of code creates a canvas made out of medium size divs and resets color to black.  
const den_medium = document.querySelector('.den-medium');
den_medium.addEventListener('click', () => {
  const canvas_sect = document.querySelector('.canvas');
  while (canvas_sect.hasChildNodes()){
    canvas_sect.removeChild(canvas_sect.firstChild);
  }
  for(let i = 0; i <= 1495; i++){
    const canvas_sect = document.querySelector('.canvas');
    const canvas_units = document.createElement('div');
    canvas_units.classList.add('canvas-units');
    canvas_units.classList.add('canvas-units-medium');
    canvas_sect.appendChild(canvas_units); 
  }
  const value = document.querySelector('input');
  value.value = '#000000';
  tone = '#000000';
  paint();
  clearInterval(multi_interval);
}
);

//BUTTON: This piece of code creates a canvas made out of large size divs and resets color to black.  
const den_large = document.querySelector('.den-large');
den_large.addEventListener('click', () => {
  const canvas_sect = document.querySelector('.canvas');
  while (canvas_sect.hasChildNodes()){
    canvas_sect.removeChild(canvas_sect.firstChild);
  }
  for(let i = 0; i <= 373; i++){
    const canvas_sect = document.querySelector('.canvas');
    const canvas_units = document.createElement('div');
    canvas_units.classList.add('canvas-units');
    canvas_units.classList.add('canvas-units-large');
    canvas_sect.appendChild(canvas_units); 
  }
  const value = document.querySelector('input');
  value.value = '#000000';
  tone = '#000000';
  paint();
  clearInterval(multi_interval);
}
);

//INPUT: This function allows the user to choose a color
function chooseColor(){
  const color_input = document.querySelector('#color-picker');
  color_input.addEventListener('input', () => {
    tone = color_input.value;
    clearInterval(multi_interval);
  })
};

//This piece of code allows the paint function to detect the mouse event
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);


//This function allows the user to 'paint' by changing the divs' background color to the desired color
function paint(){
  const canvas_painted_units = document.querySelectorAll('.canvas-units');
  canvas_painted_units.forEach(unit => unit.addEventListener('mouseover', function (e) {
    if(e.type === 'mouseover' && !mouseDown){
      return
    } else {
      e.target.style.backgroundColor = tone;
    }
  }))
  canvas_painted_units.forEach(unit => unit.addEventListener('mousedown', function (e) {
    if(e.type === 'mouseover' && !mouseDown){
      return
    } else {
      e.target.style.backgroundColor = tone;
    }
  }))
}

//BUTTON: This function allows the user to 'erase' by changing the divs' background color to white
function erase() {
const erase_btn = document.querySelector('#erase');
erase_btn.addEventListener('click', () => {
  tone = '#FFFFFF';
  clearInterval(multi_interval);
})
};

//BUTTON: This function allows the user to 'paint' by changing the divs' background color randomly in intervals
function multicolor() {
  const multicolor_btn = document.querySelector('#multicolor');
  multicolor_btn.addEventListener('click', () => {
    multi_interval = setInterval(() => {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    tone = '#' + randomColor;
    }, 50);
  })
  };

createCanvas();
multicolor();
erase();
paint();
chooseColor();

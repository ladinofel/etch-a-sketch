
function createCanvas() {
  for(let i = 0; i <= 1497; i++){
    const canvas_sect = document.querySelector('.canvas');
    const canvas_units = document.createElement('div');
    canvas_units.classList.add('canvas-units');
    canvas_units.classList.add('canvas-units-medium');
    canvas_sect.appendChild(canvas_units); 
  }
}

createCanvas();

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
  paint();
}
);

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
  paint();
}
);

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
  paint();
}
);


  const color_input = document.querySelector('#color-picker');
  color_input.addEventListener('input', () => {
    let color = color_input.value;
    console.log(color);  
})



/*function paint(){
  const canvas_painted_units = document.querySelectorAll('.canvas-units');
  canvas_painted_units.forEach(unit => unit.addEventListener('mouseover', () => {
    unit.style.background = color;  
  }));
};
*/


function paint(){
  const canvas_painted_units = document.querySelectorAll('.canvas-units');
  canvas_painted_units.forEach(unit => unit.addEventListener('mouseover', () => {
    unit.classList.add('painted');  
  }));
};


paint();




/*const den_small = document.querySelector('.den-small');
den_small.addEventListener('click', () => {
  const canvas_units = document.querySelectorAll('.canvas-units');
  canvas_units.forEach( function (canva_unit) {
    canva_unit.classList.remove('canvas-units-medium');
    canva_unit.classList.add('canvas-units-small');

  });  
   
})
*/









const density = 1496;

for(let i = 0; i <= density; i++){
  const canvas_sect = document.querySelector('.canvas');
  const canvas_units = document.createElement('div');
  canvas_units.classList.add('canvas-units');
  canvas_units.classList.add('canvas-units-medium');
  canvas_sect.appendChild(canvas_units); 
}








function paint(){
  const canvas_painted_units = document.querySelectorAll('.canvas-units');
  canvas_painted_units.forEach(unit => unit.addEventListener('click', () => {
    unit.classList.add('painted');
  }));
};


paint();


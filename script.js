//Initialize variables
let tone = '#000000';
let multi_interval;
let user_value;

//This function asks the user for a value and calls the createCanvas and paint functions.
function initialize(){
  const modal = document.querySelector('dialog');
  modal.showModal();
  const user_input = document.querySelector('.start-btn');
  user_input.addEventListener('click', () => {
    const input_content = document.querySelector('input');
    if(input_content.value === ''){
      alert('You must enter a value!');
    } else if(input_content.value > 100 || input_content.value <= 0){
        alert('The value you entered is not valid!');}
      else {
    user_value = input_content.value;
    createCanvas(user_value);
    modal.close();
    paint();
      }
  })
}

//This function creates the canvas
function createCanvas(user_value) {
  const canvas = document.querySelector('.canvas');
  canvas.style.gridTemplateColumns = `repeat(${user_value} , 1fr)`;
  canvas.style.gridTemplateRows = `repeat(${user_value} , 1fr)`;
  for(let i = 1; i <= (user_value ** 2); i++){
    const canvas_units = document.createElement('div');
    canvas_units.classList.add('canvas-units');
    canvas.appendChild(canvas_units); 
  }
}

//INPUT: This function allows the user to choose a color
function chooseColor(){
  const color_input = document.querySelector('#color-picker');
  color_input.addEventListener('input', () => {
    tone = color_input.value;
  })
};

//This piece of code allows the paint function to detect the mouse event
let mouseDown = false;
const listening_area = document.querySelector('.canvas');
listening_area.onmousedown = () => (mouseDown = true);
listening_area.onmouseup = () => (mouseDown = false);
listening_area.onmouseleave = () => (mouseDown = false);


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

//BUTTON: This function allows the user to 'erase' by changing the divs' background color to white and 
// it disables all the other buttons
function erase() {
const erase_btn = document.querySelector('#erase');
const color_input = document.querySelector('#color-picker');
const multicolor_btn = document.querySelector('#multicolor');
const clear_all = document.querySelector('#clear-all');
const new_canvas = document.querySelector('#start-over')
erase_btn.addEventListener('click', () => {
  if(erase_btn.value === 'OFF'){
    erase_btn.value = 'ON';
    tone = '#FFFFFF';
    erase_btn.style.backgroundColor = 'white';
    erase_btn.style.borderColor = color_input.value;
    multicolor_btn.disabled = true;
    clear_all.disabled = true;
    color_input.disabled = true;
    new_canvas.disabled = true;
  } else { 
      erase_btn.value = 'OFF';
      tone = color_input.value;
      erase_btn.style.backgroundColor = '#F6F1F4';
      erase_btn.style.borderColor = '#EBF5F0';
      multicolor_btn.disabled = false;
      clear_all.disabled = false;
      color_input.disabled = false;
      new_canvas.disabled = false;
    }})
clearInterval(multi_interval);
}

//BUTTON: This function allows the user to 'paint' by changing the divs' background color randomly in intervals
// and it disables all the other buttons
function multicolor() {
  const multicolor_btn = document.querySelector('#multicolor');
  const color_input = document.querySelector('#color-picker');
  const erase_btn = document.querySelector('#erase');
  const clear_all = document.querySelector('#clear-all');
  const new_canvas = document.querySelector('#start-over')
  multicolor_btn.addEventListener('click', () => {
    if(multicolor_btn.value === 'OFF'){
      multicolor_btn.value = 'ON';
      multi_interval = setInterval(() => {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        tone = '#' + randomColor;
        }, 50);
      multicolor_btn.style.backgroundColor = '#FDA4BA';
      multicolor_btn.style.borderColor = '#FDA4BA';
      erase_btn.disabled = true;
      clear_all.disabled = true;
      color_input.disabled = true;
      new_canvas.disabled = true;
    } else {
      multicolor_btn.value = 'OFF';
      clearInterval(multi_interval);
      tone = color_input.value;
      multicolor_btn.style.backgroundColor = '#F6F1F4';
      multicolor_btn.style.borderColor = '#EBF5F0';
      erase_btn.disabled = false;
      clear_all.disabled = false;
      color_input.disabled = false;
      new_canvas.disabled = false;
    }})
  }

  //This function makes all divs' backgroundColor white
  function clearAll(){
    const clear_all = document.querySelector('#clear-all');
    clear_all.addEventListener('click', () => {
      const canvas_units = document.querySelectorAll('.canvas-units');
      canvas_units.forEach(unit => unit.style.backgroundColor = 'white');
    })
    }

  
initialize();    
clearAll();
multicolor();
erase();
chooseColor();
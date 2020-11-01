const panels = document.querySelectorAll('.panel');

function toggleOpen(){
  this.classList.toggle('open');
}

function toggleActive(e){
  // multiple transitionend events being fired
  if(e.propertyName.includes('flex')){ // some browser will tell it's flex-grow, some flex
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click',toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend',toggleActive));
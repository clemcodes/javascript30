const triggers = document.querySelectorAll('.cool > li');
const background =document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter() {
  this.classList.add('trigger-enter');
  setTimeout(() => this.classList.add('trigger-enter-active'), 150);
  background.classList.add('open');

  const dropdown = this.querySelector('.dropdown');
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();

  const coords = {
    height: dropdownCoords.height,
    width:dropdownCoords.width,
    y:dropdownCoords.y - navCoords.y,
    x:dropdownCoords.x - navCoords.x,
  };

  background.style.setProperty('width', `${coords.width}px`);
  background.style.setProperty('height', `${coords.height}px`);
  // background.style.setProperty('top', `${coords.y}px`);
  // background.style.setProperty('left', `${coords.x}px`);
  background.style.setProperty('transform', `translate(${coords.x}px, ${coords.y}px)`);


}

function handleLeave() {
  this.classList.remove('trigger-enter','trigger-enter-active');
  background.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
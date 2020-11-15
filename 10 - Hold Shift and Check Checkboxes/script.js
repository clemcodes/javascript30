const checkboxes = document.querySelectorAll('input[type="checkbox"]');

let lastChecked;

function handleCheck(e){
  console.log(e);
  console.log(this);
  let inBetween = false;
  // check if they had the shift key down
  // & check if that they are checking it
  if(e.shiftKey && this.checked){
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked){
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
//  update the last checked item
  lastChecked = this;
}


checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
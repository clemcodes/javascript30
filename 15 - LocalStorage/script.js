const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];

function addItem(e) {
  e.preventDefault();
  // Using 'this' instead of document here is helpful if you have multiple forms on a page
  const text = (this.querySelector('[name=item]')).value;

  const item = {
    text,
    done:false
  }

  items.push(item);
  populateList(items, itemsList);
  this.reset();

}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}>
        <label for="item${i}">${plate.text}</label>
      </li>
    `
  }).join('');
}


addItems.addEventListener('submit', addItem);
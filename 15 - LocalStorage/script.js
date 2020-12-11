const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
// if there's no items already set it to an empty array 
const items = JSON.parse(localStorage.getItem('items')) || [] ;

function addItem(e) {
  e.preventDefault();
  // Using 'this' instead of document here is helpful if you have multiple forms on a page
  const text = (this.querySelector('[name=item]')).value;

  const item = {
    text,
    done:false
  };

  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();

}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}>
        <label for="item${i}">${plate.text}</label>
      </li>
    `;
  }).join('');
}

function toggleDone(e){
  // skip this unless it is an input
  if(!e.target.matches('input')) return;
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  // mirror the changes to local storage
  localStorage.setItem('items', JSON.stringify(items));
  // rerender the entire list, if can just rerender that element, would be better
  populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
// event delegation
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);


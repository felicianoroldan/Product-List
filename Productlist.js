//#4A55A2
//#7895CB
//#A0BFE0
//#C5DFF8
const mainTextElement = document.getElementById('main-text');
mainTextElement.style.color = '#4A55A2';
mainTextElement.style.fontWeight = 'bold';
mainTextElement.style.fontSize = '26px';
mainTextElement.style.textAlign = 'center';

let totalItems = 0;

const addListItemElement = (product) => {
  const listItemElement = document.createElement('li');

  // Create an image element
  const imageElement = document.createElement('img');
  imageElement.src = product.photo;
  listItemElement.appendChild(imageElement);

  // Create a span element for displaying the product details
  const detailsSpan = document.createElement('span');
  detailsSpan.textContent = `${product.name}: ${product.price}`;
  listItemElement.appendChild(detailsSpan);

  // Create a remove button
  const listItemRemoveBtn = document.createElement('button');
  listItemRemoveBtn.textContent = 'Remove';
  listItemElement.appendChild(listItemRemoveBtn);

  const productListElement = document.getElementById('product-list');
  productListElement.appendChild(listItemElement);

  listItemRemoveBtn.onclick = () => {
    productListElement.removeChild(listItemElement);
    updateTotal(-1); // Subtract 1 from the total number of items

  };
  updateTotal(1); // Add 1 to the total number of items

};

const updateTotal = (amount) => {
  totalItems += amount;
  const totalElement = document.getElementById('total');
  totalElement.textContent = `Total Items: ${totalItems}`;

};

const addNewProduct = () => {
  // ...
  addListItemElement(product);
  updateTotal(1); // Add 1 to the total number of items

}

const addNewItem = () => {
  const photoUploadInput = document.getElementById('photo-upload');
  const productNameInput = document.getElementById('product-name');
  const newPriceInput = document.getElementById('new-price');

  const photo = photoUploadInput.value;
  const productName = productNameInput.value;
  const price = newPriceInput.value;

  const product = {
    photo: photo,
    name: productName,
    price: price,
  };

  addListItemElement(product);

  // Clear input fields after adding the product
  photoUploadInput.value = '';
  productNameInput.value = '';
  newPriceInput.value = '';
};


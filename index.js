let stockData = [];

function addStock() {
  const stockPriceInput = document.getElementById('stockPrice');
  const quantityInput = document.getElementById('quantity');
  const stockList = document.getElementById('stockList');
  const averageDisplay = document.getElementById('average');

  const stockPrice = parseFloat(stockPriceInput.value);
  const quantity = parseInt(quantityInput.value);

  if (!isNaN(stockPrice) && !isNaN(quantity) && stockPrice > 0 && quantity > 0) {
    const totalValue = stockPrice * quantity;
    stockData.push({ stockPrice, quantity, totalValue });

    const formatter = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' });

    const li = document.createElement('li');
    li.innerText = `${quantity} shares @ ${formatter.format(stockPrice)} each (Total: ${formatter.format(totalValue)})`;
    stockList.appendChild(li);

    const average = calculateAverage();
    averageDisplay.innerText = formatter.format(average);

    stockPriceInput.value = '';
    quantityInput.value = '';
  } else {
    alert('Please enter valid values for stock price and quantity.');
  }
}

function calculateAverage() {
  const totalValue = stockData.reduce((total, data) => total + data.totalValue, 0);
  const totalQuantity = stockData.reduce((total, data) => total + data.quantity, 0);
  return totalValue / totalQuantity;
}

// Make sure to call calculateAverage initially to set the initial value
calculateAverage();
 
function renderStockTicker(stockData) {
    const stockDisplayName = document.getElementById('name')
    const stockDisplaySymbol = document.getElementById('symbol')
    const stockDisplayPrice = document.getElementById('price')
    const stockDisplayPriceIcon = document.getElementById('price-icon')
    const stockDisplayTime = document.getElementById('time')
    stockDisplayName.innerText = stockData.name;
    stockDisplaySymbol.innerText = stockData.sym;
    stockDisplayPrice.innerHTML = stockData.price;
    stockDisplayTime.innerHTML = stockData.time;
}

setInterval(() => {
  const freshData = getstockData();
  renderStockTicker(freshData);
},1500)
import getStockData from "./fakeStockAPI.js";
setInterval(() => {
  const freshData = getStockData();
  renderStockTicker(freshData);
}, 1500);

let prevPrice = null;

function renderStockTicker(stockData) {
  const stockDisplayName = document.getElementById("name");
  const stockDisplaySymbol = document.getElementById("symbol");
  const stockDisplayPrice = document.getElementById("price");
  const stockDisplayPriceIcon = document.getElementById("price-icon");
  const stockDisplayTime = document.getElementById("time");
  const {name , sym , price , time} = stockData;
  stockDisplayName.innerText = name;
  stockDisplaySymbol.innerText = sym;
  stockDisplayPrice.innerHTML = price;
  stockDisplayTime.innerHTML = time();
  // using the ternary operator 
  const priceDirectionIcon = price > prevPrice ? 'green.svg' : price < prevPrice ? 'red.svg' : 'grey.svg'
  const priceIconElement = document.createElement('img');
  priceIconElement.src = `svg/${priceDirectionIcon}`
  priceIconElement.alt = 'Stock Direction Icon'
  stockDisplayPriceIcon.innerHTML = ''; 
  stockDisplayPriceIcon.appendChild(priceIconElement);
  prevPrice = price;
}

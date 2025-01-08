export default function getStockData() {
  return {
    name: "QtechAI",
    sym: "QTA",
    price: (Math.random() * 3).toFixed(
      2
    ) /* return a random number between 0 and 3 to two decimal places */,
    time: function() {
        const now = new Date();
        const hour = String(now.getHours()).padStart(2 , '0')
        const minutes = String(now.getMinutes()).padStart(2 , '0')
        const seconds = String(now.getSeconds()).padStart(2 , '0')
        return `${hour}/${minutes}/${seconds}`
    }   /* return a timestamp in this format: hh/mm/ss */,
  };
}

export default function getStockData() {
    return {
        name: 'QtechAI',
        sym: 'QTA',
        price: Math.random(),/* return a random number between 0 and 3 to two decimal places */
        time: new Date()/* return a timestamp in this format: hh/mm/ss */
    }
}
  
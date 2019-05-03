const cheeses = {
  Blue: 1.50,
  Monterey: 1.25,
  Cheddar: 1.60,
  Parmesan: .75
};


const addCheese = (type) => {
  console.log('add cheese works!', cheeses[type]);

};

export default { addCheese }
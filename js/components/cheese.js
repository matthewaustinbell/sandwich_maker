const cheeses = {
  Blue: 1.15,
  Monterey: 1.23,
  Cheddar: 1.43,
  Parmesan: 1.06
};


const addCheese = (type) => {
  console.log('add cheese works!', cheeses[type]);

};

export default { addCheese }
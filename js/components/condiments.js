const condiments = {
  Hummus: 1.15,
  Pesto: 1.23,
  Soysauce: 1.43,
  Guacamole: 1.06
};


const addCondiments = (type) => {
  console.log('add condiments works!', condiments[type]);

};

export default { addCondiments }
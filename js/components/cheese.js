const cheeses = {
    asiago: 1.15,
    white: 1.23,
    wheat: 1.43,
    rosemary: 1.06
};


const addCheese = (type) => {
    console.log('add cheese works!', cheeses[type]);

};

export default { addCheese }
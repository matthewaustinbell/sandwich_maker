const cheeses = {
    cheddar: 1.51,
    provolone: 1.32,
    swiss: 1.34,
    monterey: 1.07
};


const addCheese = (type) => {
    console.log('add cheese works!', cheeses[type]);

};

export default { addCheese }
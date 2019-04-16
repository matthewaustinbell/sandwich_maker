const condiments_plural = {
    salt: 1.50,
    pepper: 1.31,
    oil: 1.33,
    vinegar: 1.06
};


const addCondiments = (type) => {
    console.log('add condiments works!', condiments_plural[type]);

};

export default { addCondiments }
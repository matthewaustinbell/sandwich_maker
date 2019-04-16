const veggies_plural = {
    tomato : 1.61,
    lettuce: 1.42,
    pickles: 1.44,
    onion: 1.17
};


const addVeggies = (type) => {
    console.log('add veggies works!', veggies_plural[type]);

};

export default { addVeggies }
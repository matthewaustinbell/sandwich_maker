import bread from "../components/bread.js";

import cheese from "../components/cheese.js";

import condiments from "../components/condiments.js";

import meats from "../components/meats.js";

import veggies from "../components/veggies.js";

const determineComponent = (id) => {
    let component = id.split("_")
    switch(component[0]) {
        case 'bread':  
        bread.addBread(component[1]);
        break; 

        case 'cheese':
        cheese.addCheese(component[1]);
        break;

        case 'condiments':
        condiments.addCondiments(component[1]);
        break;

        case 'meats':
        meats.addMeats(component[1]);
        break;

        case 'veggies':
        veggies.addVeggies(component[1]);
        break;
    };
};



export default { determineComponent } 
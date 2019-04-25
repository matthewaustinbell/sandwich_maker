
import meat from "../components/meats.js";
import bread from "../components/bread.js";
import veggie from "../components/veggies.js";
import cheese from "../components/cheese.js";
import condiments from "../components/condiments.js";


const determineComponent = (id) => {
    let component = id.split("_")
    switch(component[0]) {
        case 'bread':  
        bread.addBread(component[1]);
        break; 
        case 'meat':  
        meat.addMeat(component[1]);
        break; 
        case 'cheese':  
        cheese.addCheese(component[1]);
        break; 
        case 'veggie':  
        veggie.addVeggie(component[1]);
        break; 
        case 'condiments':  
        condiments.addCondiments(component[1]);
        break; 
        
    };
};



export default { determineComponent } 
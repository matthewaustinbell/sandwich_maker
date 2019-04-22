
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
    };
};



export default { determineComponent } 
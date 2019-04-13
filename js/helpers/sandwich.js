

import bread from "../components/bread.js";


const determineComponent = (id) => {
    let component = id.split("_")
    switch(component[0]) {
        case 'bread':  
        bread.addBread(component[1]);
        break; 
    };
};



export default { determineComponent } 
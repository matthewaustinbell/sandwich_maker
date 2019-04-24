import bread from "../components/bread.js";
import cheese from "../components/cheese.js";
import condiments from "../components/condiments.js";
import meats from "../components/meats.js";
import veggies from "../components/veggies.js";
let totalPrice = 0;

const determineComponent = (id) => {
    let component = id.split("_")
    switch(component[0]) {
        case 'bread':  
        setPrice(bread.addBread(component[1]));
        break; 

        case 'cheese':
        setPrice(cheese.addCheese(component[1]));
        break;

        case 'condiments':
        setPrice(condiments.addCondiments(component[1]));
        break;

        case 'meats':
        setPrice(meats.addMeats(component[1]));
        break;

        case 'veggies':
        setPrice(veggies.addVeggies(component[1]));
        break;
    };
};

const setPrice = (ingPrice) => {
   totalPrice += ingPrice; 
};
  
const getPrice = () => {
  return totalPrice;
};

const printToDom = (divId, textToPrint) => {
   let selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
  };
  

  const eventListeners = () => {
      let selectedBoxes = document.getElementsByClassName('checkBoxes') ////i have all the checked boxes of the doc 
    addButton.addEventListener('click', function(e) { ///i used a anonymous function 
    for (let i=0; i<selectedBoxes.length; i++){
     if (selectedBoxes[i].checked){
        determineComponent(selectedBoxes[i].id)
     } else { 
         console.log(false);
     }
    }
    printToDom('output', getPrice());
    });
  };

  
  const init = () => {
    eventListeners();
  };
  
  init();



export default { determineComponent }
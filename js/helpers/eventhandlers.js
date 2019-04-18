import eventListeners from './sandwich.js'
import button from './button.js'

//Notes
//create a variable with name checkBoxes 
// assign it the value of document.getElementsByClassName('form-check-input')
// for loop through checkBoxes with i<checkBoxes.length
// on each loop check if box is checked
// if so, add ingredient to order array and

const addCheckEventListener = () => {
    const checkBoxes = document.getElementsByClassName('checkBoxes')
    for (let i=0; i<checkBoxes.length; i++){
        checkBoxes[i].addEventListener("click", (e) =>{
        eventListeners.determineComponent(e.target.id)    
        })
    }
    document.getElementById('orderButton').addEventListener('click', button.sandwich); ///activates button
}





   export default { addCheckEventListener }; 
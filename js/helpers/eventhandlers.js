import eventListeners from './sandwich.js'

const addCheckEventListener = () => {
    const checkBoxes = document.getElementsByClassName('checkBoxes')
    for (let i=0; i<checkBoxes.length; i++){
        checkBoxes[i].addEventListener("click", (e) =>{
        eventListeners.determineComponent(e.target.id)    
        })
    }
}

   export default { addCheckEventListener }; 
import eventListeners from './eventhandlers.js'

const init = () =>{                    // declared init variable to in initialize eventListeners.addCheckEventListeners     
    eventListeners.addCheckEventListener(); // within this function addCheckEventListener function is called 
};

export default { init }; 


const sandwichArray  = []; 

const sandwich = () => {
  console.log('sandwich works') ;
  let boxes = Array.from(document.getElementsByClassName('checkBoxes'))
  boxes.forEach(function(box) {
    if(box.checked) {
      sandwichArray.push(box.innerHTML)
    };
  });
  console.log(sandwichArray);
};



export default { sandwichArray , sandwich }

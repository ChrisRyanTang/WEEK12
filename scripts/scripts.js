let buttonPress = document.querySelector('#click');

function addNewButtonAndPara(event) {
    let newButton = document.createElement('button');
    document.body.appendChild(newButton);
    newButton.textContent = 'BLUE';
    newButton.addEventListener('click', changeBG);
    newButton.addEventListener('click', changeTextColor);
    
}

buttonPress.addEventListener("click", addNewButtonAndPara);

// function alertUser() {
//     buttonPress.removeEventListener("click", alertUser);
// }



// buttonPress.addEventListener("click", alertUser, {once: true});

// function colorChange() {
//     document.body.style.backgroundColor = 'pink';
// }


// buttonPress.addEventListener("click", colorChange);

// function changeText() {
// // 1. if the button says "click me" change the txtContent to Clicked
// if (buttonPress.textContent === "Click me!") {
//     buttonPress.textContent = "Clicked";
// } else {
//     buttonPress.textContent = "Click me!";
// }
// // 2. else if it says CLicked updaate it back to Click me

// }

// buttonPress.addEventListener("click", changeText);




// function updateImage(event) {
//     const image = document.querySelector("#shoppingCart");
//     image.setAttribute("src", 'images/shopping.png');
//     image.setAttribute('width', 50);
//     image.setAttribute('height', 50);
//     image.setAttribute('alt', 'stealing food')
// }

// updateImage();

const buttonContainer = document.querySelector(".button-container");

function changeBG(event) {
    if (event.target.tagName === 'BUTTON'){
        event.target.classList.add('pinkBG');
    }

}

buttonContainer.addEventListener("click", changeBG);

function changeTextColor(event) {
    if(event.target.tagName === 'BUTTON') {
        let myColor = event.target.textContent;
        event.target.style.color = myColor;
    }
  
}

buttonContainer.addEventListener('click', changeTextColor);

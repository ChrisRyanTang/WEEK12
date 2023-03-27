let buttonPress = document.querySelector('#click');

function alertUser() {
    buttonPress.removeEventListener("click", alertUser);
}



buttonPress.addEventListener("click", alertUser, {once: true});

function colorChange() {
    document.body.style.backgroundColor = 'pink';
}


buttonPress.addEventListener("click", colorChange);

function changeText() {
// 1. if the button says "click me" change the txtContent to Clicked
if (buttonPress.textContent === "You clicked?") {
    buttonPress.textContent = "Clicked";
} else {
    buttonPress.textContent = "Click me!";
}
// 2. else if it says CLicked updaate it back to Click me

}

buttonPress.addEventListener("click", changeText);




function updateImage() {
    const image = document.querySelector("#shoppingCart");
    image.setAttribute("src", 'images/shopping.png');
    image.setAttribute('width', 200);
    image.setAttribute('height', 200);
    image.setAttribute('alt', 'stealing food')
}

updateImage();


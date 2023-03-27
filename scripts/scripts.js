let buttonPress = document.querySelector('#click');

function alertUser() {
    alert("You clicked?");
    // buttonPress.removeEventListener("click", alertUser);
}


buttonPress.addEventListener("click", alertUser, {once: true});


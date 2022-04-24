
inputName = document.querySelector("#name");
inputSurname = document.querySelector("#surname");
inputEmail = document.querySelector("#email");
inputPhone = document.querySelector("#phone");
inputAdress = document.querySelector("#adress");


let formDOM = document.querySelector("#userForm");
formDOM.addEventListener("submit", formSubmit);

function formSubmit(event) {
    event.preventDefault();
    let user = {
        name: inputName.value,
        surname: inputSurname.value,
        email: inputEmail.value,
        phone: inputPhone.value,
        adress: inputAdress.value
    }
    console.log(user);
}


// formDOM.addEventListener('submit', (e) => {
//     e.preventDefault()
//     console.log(inputName.value)
//     console.log(inputSurname.value)
//     console.log(inputEmail.value)
//     console.log(inputPhone.value)
//     console.log(inputAdress.value)
//     console.log("işlem gerçekşelti")
// })



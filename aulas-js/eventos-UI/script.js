const inputName = document.forms.cadastro.name;

inputName.addEventListener('keyup', handleInputNameKeyUp);

function handleInputNameKeyUp(event) {
    console.log(event.target.value);
}

const inputEmail = document.forms.cadastro.email;

inputEmail.addEventListener('change', randleInputEmailChange);

const btnSubmit = document.querySelector('[type="submit"]'); // Selecionando pelo tipo 

btnSubmit.addEventListener('click', handleBtnSubmitClick);

function handleBtnSubmitClick(event) {
    event.preventDefault();
    console.log(`Dados: ${inputName.value}, ${inputEmail.value} `);
}

console.log(btnSubmit);

function randleInputEmailChange(event) {
    if (validateEmail(event.target.value)) {
        console.log("Deu certo");
        event.target.classList.remove("input-error");
    }
    else {
        console.log("Deu errado");
        event.target.classList.add("input-error");
    }
}

// https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
function validateEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }
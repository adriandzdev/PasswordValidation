const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10; 


const showMsg = () => {
    if (pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers) && pass.value.match(special)) 
    {
    p.textContent = "You have a very good password"
    p.style.color = "lime"
} else if (pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers)) {
    p.textContent = "You have a good password"
    p.style.color = "gold"
} else {
    p.textContent = "You have a weak password"
    p.style.color = "tomato"
}
}

pass.addEventListener('keyup', showMsg)

const checkPassword = () => {
    if(pass.value !== '') {
        showMsg()
    } else {
    p.textContent = "Enter the password..."
    p.style.color = ""
}
}

pass.addEventListener('keyup', checkPassword)


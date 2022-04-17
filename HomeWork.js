
const button = document.getElementById('button');


let alertInput = () => {
    const inputValue = document.getElementById('name').value;
    alert(inputValue);
}

button.addEventListener('click', alertInput);
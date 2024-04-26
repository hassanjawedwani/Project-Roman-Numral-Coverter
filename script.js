const romanConverterForm = document.getElementById('roman-converter-form')
const input = document.getElementById('number');
const submitBtn = document.getElementById('submit-button');
const output = document.querySelector('.output-container')

romanConverterForm.addEventListener('submit', (e) => {
    e.preventDefault();
})

const calculate = () => {
    const inputValue = Number(input.value);
    
    if(input.value === "") {
        alert("Enter any value")
    }
    else if(inputValue < 1) {
        alert("Please enter a number greater than or equal to 1 ")
        return;
    }
    else if(inputValue > 3999) {
        alert("Please enter a number less than or equal to 3999")
        return;
    }
    else {
        output.classList.remove('hidden')
        output.textContent = "fuck";
       
    }
}


submitBtn.addEventListener('click', calculate);
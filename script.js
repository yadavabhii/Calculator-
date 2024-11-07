document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let operator = '';
    let previousInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.getAttribute('data-value');

            if (value === 'AC') {
                currentInput = '';
                operator = '';
                previousInput = '';
                display.textContent = '0';
            } else if (value === '=') {
                if (currentInput && previousInput && operator) {
                    currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
                    display.textContent = currentInput;
                    previousInput = '';
                    operator = '';
                }
            } else if (['+', '-', '*', '/', '%'].includes(value)) {
                if (currentInput) {
                    operator = value;
                    previousInput = currentInput;
                    currentInput = '';
                    display.textContent += ` ${value} `;

                }
            } else {
                currentInput += value;
                display.textContent = currentInput;
            }
            if (currentInput.length > 12) {
                alert('Maximum number of digits reached');
                currentInput = currentInput.slice(0, 12);
                display.textContent = currentInput;
            }
        });
    });
});




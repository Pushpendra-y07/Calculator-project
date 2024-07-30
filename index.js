document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const action = button.getAttribute('data-action');
        const display = document.getElementById('display');
        let currentInput = display.innerText;

        if (button.innerText === 'AC') {
            display.innerText = '0';
            return;
        }

        if (button.innerText === '^2') {
            display.innerText = Math.pow(parseFloat(currentInput), 2);
            return;
        }

        if (button.innerText === '%') {
            display.innerText = parseFloat(currentInput) / 100;
            return;
        }

        if (button.innerText === '=') {
            try {
                display.innerText = eval(currentInput);
            } catch (error) {
                display.innerText = 'Error';
            }
            return;
        }

        if (button.innerText === '.' && !currentInput.includes('.')) {
            display.innerText += button.innerText;
            return;
        }

        if (button.classList.contains('operator')) {
            display.innerText += ' ' + button.innerText + ' ';
        } else {
            display.innerText = currentInput === '0' ? button.innerText : currentInput + button.innerText;
        }
    });
});
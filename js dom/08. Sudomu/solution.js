function solve() {
    let table = document.querySelector('table'); // element to add border
    let result = document.querySelector('#check p');
    let buttons = document.querySelectorAll('tfoot button');

    let quickCheckBtn = buttons[0];
    quickCheckBtn.addEventListener('click', checkSudomu);

    let clearBtn = buttons[1];
    clearBtn.addEventListener('click', clearSudomu);

    function clearSudomu(e) {
        let trElements = document.querySelectorAll('tbody tr')

        for (const trElement of trElements) {
            let inputs = trElement.querySelectorAll('input');

            for (const num of inputs) {
                num.value = '';
            }
        }

        table.style.border = 'none';
        result.textContent = '';
    }

    function checkSudomu(e) {
        let sudomuMatrix = [];

        let trElements = document.querySelectorAll('tbody tr');

        for (const trElement of trElements) {
            let row = [];
            let inputs = trElement.querySelectorAll('input');

            for (const num of inputs) {
                // checks for NaN and already existing number in the row
                if (num.value != '' && !row.includes(num.value)) {
                    row.push(num.value);
                }
            }

            sudomuMatrix.push(row);
        }

        //check for empty spaces
        if (sudomuMatrix.some(x => x.length < 3)) {
            displayUndoneSudomu();
            return;
        }

        //check cols
        for (let i = 0; i < 3; i++) {
            let j = 0;
            let col = [];

            while (j < 3) {
                if (col.includes(sudomuMatrix[j][i])) {
                    displayUndoneSudomu();
                    return;
                }

                col.push(sudomuMatrix[j][i]);
                j++;
            }
        }

        displayDoneSudomu();
    }

    function displayDoneSudomu() {
        table.style.border = "2px solid green";
        result.textContent = "You solve it! Congratulations!";
        result.style.color = 'green';
    }

    function displayUndoneSudomu() {
        table.style.border = "2px solid red";
        result.textContent = "NOP! You are not done yet...";
        result.style.color = 'red';
    }
}   
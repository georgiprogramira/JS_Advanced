function lockedProfile() {
    let container = document.getElementById('main');
    container.addEventListener('click', displayInformation);

    function displayInformation(e) {
        if (e.target.tagName == 'BUTTON' && e.target.innerHTML == 'Show more') {
            let parentElement = e.target.parentElement;
            let unlockRadioBtnElement = parentElement.querySelector('input[value="unlock"]');
            
            if (unlockRadioBtnElement.checked) {
                let hiddenElements = parentElement.children[parentElement.children.length - 2];
                hiddenElements.style.display = 'block';
                e.target.innerHTML = 'Hide it';
            }
        }
        else if (e.target.tagName == 'BUTTON' && e.target.innerHTML == 'Hide it') {
            let parentElement = e.target.parentElement;
            let unlockRadioBtnElement = parentElement.querySelector('input[value="unlock"]');
            
            if (unlockRadioBtnElement.checked) {
                let hiddenElements = parentElement.children[parentElement.children.length - 2];
                hiddenElements.style.display = 'none';
                e.target.innerHTML = 'Show more';
            }
        }
    }
}
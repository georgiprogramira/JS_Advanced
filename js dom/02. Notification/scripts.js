function notify(message) {
    let btn = document.querySelector('#content button');
    let container = document.getElementById('notification');

    displayForTwoSeconds();


    function displayForTwoSeconds() {
        container.textContent = message;
        container.style.display = 'block';

        setTimeout(function () {
            container.style.display = 'none';
        }, 2000);
    }
}
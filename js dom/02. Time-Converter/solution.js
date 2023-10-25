function attachEventsListeners() {
    let daysElement = document.getElementById('days');
    let hoursElement = document.getElementById('hours');
    let minutesElement = document.getElementById('minutes');
    let secondsElement = document.getElementById('seconds');

    let container = document.getElementsByTagName('main')[0];
    container.addEventListener('click', convert);

    function convert(e) {
        if (e.target.value == 'Convert' && e.target.type == 'button') {
            let parentElement = e.target.parentElement;
            let input = parentElement.querySelector('input[type="text"]');

            switch (input.id) {
                case 'days':
                    hoursElement.value = Number(daysElement.value) * 24;
                    minutesElement.value = Number(hoursElement.value) * 60;
                    secondsElement.value = Number(minutesElement.value) * 60;
                    break;
                case 'hours':
                    daysElement.value = Number(hoursElement.value) / 24;
                    minutesElement.value = Number(hoursElement.value) * 60;
                    secondsElement.value = Number(minutesElement.value) * 60;
                    break;
                case 'minutes':
                    hoursElement.value = Number(minutesElement.value) / 60;
                    daysElement.value = Number(hoursElement.value) / 24;
                    secondsElement.value = Number(minutesElement.value) * 60;
                    break;
                case 'seconds':
                    minutesElement.value = Number(secondsElement.value) / 60;
                    hoursElement.value = Number(minutesElement.value) / 60;
                    daysElement.value = Number(hoursElement.value) / 24;
                    break;
                default:
                    break;
            }
        }
    }
}
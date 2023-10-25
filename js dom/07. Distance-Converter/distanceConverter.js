function attachEventsListeners() {
    let convertBtn = document.getElementById('convert');

    convertBtn.addEventListener('click', convertDistance);

    function convertDistance() {
        let inputDistance = Number(document.getElementById('inputDistance').value);
        let outputDistance = document.getElementById('outputDistance');
        let inputUnits = document.getElementById('inputUnits');
        let inputUnitElement = inputUnits.options[inputUnits.selectedIndex];
        let outputUnits = document.getElementById('outputUnits');
        let outputUnitElement = outputUnits.options[outputUnits.selectedIndex];

        let valueInMeters = 0;

        switch (inputUnitElement.value) {
            case 'km':
                valueInMeters = inputDistance * 1000;
                break;
            case 'm':
                valueInMeters = inputDistance;
                break;
            case 'cm':
                valueInMeters = inputDistance * 0.01;
                break;
            case 'mm':
                valueInMeters = inputDistance * 0.001;
                break;
            case 'mi':
                valueInMeters = inputDistance * 1609.34;
                break;
            case 'yrd':
                valueInMeters = inputDistance * 0.9144;
                break;
            case 'ft':
                valueInMeters = inputDistance * 0.3048;
                break;
            case 'in':
                valueInMeters = inputDistance * 0.0254;
                break;
            default:
                break;
        }

        switch (outputUnitElement.value) {
            case 'km':
                outputDistance.value = valueInMeters / 1000;
                break;
            case 'm':
                outputDistance.value = valueInMeters;
                break;
            case 'cm':
                outputDistance.value = valueInMeters / 0.01;
                break;
            case 'mm':
                outputDistance.value = valueInMeters / 0.001;
                break;
            case 'mi':
                outputDistance.value = valueInMeters / 1609.34;
                break;
            case 'yrd':
                outputDistance.value = valueInMeters / 0.9144;
                break;
            case 'ft':
                outputDistance.value = valueInMeters / 0.3048;
                break;
            case 'in':
                outputDistance.value = valueInMeters / 0.0254;
                break;
            default:
                break;
        }
    }
}
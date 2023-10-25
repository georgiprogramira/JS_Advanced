function encodeAndDecodeMessages() {
    let container = document.getElementById('main');

    container.addEventListener('click', encodeMessage);
    container.addEventListener('click', decodeMessage);

    function encodeMessage(e) {
        if (e.target.tagName == 'BUTTON' && e.target.innerHTML == 'Encode and send it') {
            let encodedTextElement = document.querySelector('textarea[placeholder="No messages..."]');
            let textToEncode = document.querySelector('textarea[placeholder="Write your message here..."]');
            let encodedText = '';

            for (const ch of textToEncode.value) {
                encodedText += String.fromCharCode(ch.charCodeAt(0) + 1);
            }

            encodedTextElement.value = encodedText;
            textToEncode.value = '';
        }
    }

    function decodeMessage(e) {
        if (e.target.tagName == 'BUTTON' && e.target.innerHTML == 'Decode and read it') {
            let textToDecode = document.querySelector('textarea[placeholder="No messages..."]');
            let decodedText = '';

            for (const ch of textToDecode.value) {
                decodedText += String.fromCharCode(ch.charCodeAt(0) - 1);
            }

            textToDecode.value = decodedText;
        }
    }
}
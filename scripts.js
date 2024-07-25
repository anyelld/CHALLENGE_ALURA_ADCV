function validateInput() {
    const input = document.getElementById('inputText').value;
    const validInput = input.replace(/[^a-z\s]/g, '');
    document.getElementById('inputText').value = validInput;
}

function encryptText() {
    const input = document.getElementById('inputText').value;
    if (input === '') {
        showNoMessage();
        return;
    }
    const encryptedText = input
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    showMessage(encryptedText);
}

function decryptText() {
    const input = document.getElementById('inputText').value;
    if (input === '') {
        showNoMessage();
        return;
    }
    const decryptedText = input
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    showMessage(decryptedText);
}

function showMessage(message) {
    document.getElementById('noMessageImage').style.display = 'none';
    document.getElementById('noMessageText').style.display = 'none';
    document.getElementById('outputText').style.display = 'block';
    document.getElementById('outputText').value = message;
}

function showNoMessage() {
    document.getElementById('noMessageImage').style.display = 'block';
    document.getElementById('noMessageText').style.display = 'block';
    document.getElementById('outputText').style.display = 'none';
    document.getElementById('outputText').value = '';
}

function copyText() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
}

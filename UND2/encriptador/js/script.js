const emojiCategories = {
    animals: ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐽', '🐸', '🐵', '🐔', '🐧', '🐦', '🐤', '🐣', '🐥', '🦆', '🦅', '🦉'],
    food: ['🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🫐', '🍈', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝', '🍅', '🍆', '🥑', '🥦', '🥬', '🥒', '🌶', '🌽'],
    sports: ['⚽', '🏀', '🏈', '⚾', '🥎', '🎾', '🏐', '🏉', '🎱', '🏓', '🏸', '🥅', '🏒', '🏑', '🏏', '🥍', '🏹', '🎣', '🤿', '🥊', '🥋', '🎽', '🛹', '🛷', '⛸'],
    faces: ['😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '🥰', '😍', '🤩', '😘', '😗', '☺', '😚', '😙', '😋', '😛', '😜', '🤪']
};

// Función para encriptar el mensaje
function getEmojiDictionary() {
    const category = document.getElementById("emojiCategory").value;
    const emojis = emojiCategories[category];
    const emojiToLetter = {};
    const letterToEmoji = {};
    
    for (let i = 0; i < emojis.length; i++) {
        const letter = String.fromCharCode(97 + i); // 'a' = 97 en ASCII
        emojiToLetter[emojis[i]] = letter;
        letterToEmoji[letter] = emojis[i];
    }
    
    return { emojiToLetter, letterToEmoji };
}

// Función para encriptar el mensaje con el cifrado César y emojis
function encryptMessage() {
    const inputText = document.getElementById("inputText").value.toLowerCase();
    const shift = parseInt(document.getElementById("shift").value);
    const { letterToEmoji } = getEmojiDictionary();
    
    let encryptedMessage = '';

    for (let char of inputText) {
        if (letterToEmoji[char]) {
            let shiftedCharCode = char.charCodeAt(0) + shift;
            
            // Ajustar el desplazamiento para que permanezca dentro del rango de letras minúsculas
            if (shiftedCharCode > 122) shiftedCharCode = 97 + (shiftedCharCode - 123);
            if (shiftedCharCode < 97) shiftedCharCode = 122 - (96 - shiftedCharCode);
            
            const shiftedChar = String.fromCharCode(shiftedCharCode);
            encryptedMessage += letterToEmoji[shiftedChar];
        } else {
            encryptedMessage += char;
        }
    }
    
    document.getElementById("parrafo").textContent = encryptedMessage;
    document.getElementById("titulo-mensaje").textContent = "Mensaje Encriptado:";
}

// Función para desencriptar el mensaje con el cifrado César y emojis
function decryptMessage() {
    const encryptedText = document.getElementById("parrafo").textContent;
    const shift = parseInt(document.getElementById("shift").value);
    const { emojiToLetter } = getEmojiDictionary();
    
    let decryptedMessage = '';

    for (let char of encryptedText) {
        if (emojiToLetter[char]) {
            let shiftedCharCode = emojiToLetter[char].charCodeAt(0) - shift;

            // Ajustar el desplazamiento para que permanezca dentro del rango de letras minúsculas
            if (shiftedCharCode > 122) shiftedCharCode = 97 + (shiftedCharCode - 123);
            if (shiftedCharCode < 97) shiftedCharCode = 122 - (96 - shiftedCharCode);
            
            const shiftedChar = String.fromCharCode(shiftedCharCode);
            decryptedMessage += shiftedChar;
        } else {
            decryptedMessage += char;
        }
    }

    document.getElementById("parrafo").textContent = decryptedMessage;
    document.getElementById("titulo-mensaje").textContent = "Mensaje Desencriptado:";
}




















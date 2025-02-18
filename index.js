document.getElementById("generate").addEventListener("click", () => {
    password = generatePassword();
    document.getElementById("copyText").value = password;
});




function generatePassword() {
    const length = 12;
    const possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let password = '';

    for (let i = 0; i <= length; i++) {
        const randomIndex = Math.floor(Math.random() * possibleCharacters.length);
        password += possibleCharacters[randomIndex];
    }
    return password;
}


document.getElementById("copyButton").addEventListener("click", () => {
    const copyText = document.getElementById("copyText");


    if(copyText.value !== '') {
        copyText.select();
        document.execCommand("copy");
        alert("Text Copied");
    }
    else {
        alert("Please enter some text");
    }
});
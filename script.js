const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
//-------------------------------------------------------------------------------------------------------------------------------------
const includeUppercaseElement = document.getElementById('includeUpperCase')
const includeLowercaseElement = document.getElementById('includeLowerCase')
const includeNumbersElement   = document.getElementById('includeNumbers')
const includeSymbolsElement   = document.getElementById('includeSymbols')
//-------------------------------------------------------------------------------------------------------------------------------------
const form = document.getElementById('passwordGeneratorForm')
const passwordDisplay = document.getElementById('passwordDisplay')
//-------------------------------------------------------------------------------------------------------------------------------------
const UPPERCASE_CHAR_CODES = arrayFromlowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromlowToHigh(97, 122)
const SYMBOL_CHAR_CODES = arrayFromlowToHigh(33, 47)
const NUMBER_CHAR_CODES = arrayFromlowToHigh(48, 57)
//-------------------------------------------------------------------------------------------------------------------------------------
characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)
//-------------------------------------------------------------------------------------------------------------------------------------
form.addEventListener('submit', e => {
    e.preventDefault()
    const includeLowercase = includeLowercaseElement.checked
    const characterAmount = characterAmountNumber.value
    const includeUppercase = includeUppercaseElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const includeNumbers = includeNumbersElement.checked
    const password = generatePassword(characterAmount, includeUppercase, includeLowercase, includeSymbols, includeNumbers)
    passwordDisplay.innerText = password
})
//-------------------------------------------------------------------------------------------------------------------------------------
function syncCharacterAmount(e) {
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
}
//-------------------------------------------------------------------------------------------------------------------------------------
function generatePassword(characterAmount, includeUppercase,includeLowercase, includeNumbers, includeSymbols) {
    console.log(characterAmount, includeUppercase, includeLowercase, includeNumbers, includeSymbols)
    let charCodes = []
    const passwordCharacters = []
    if (includeUppercase){
        charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
        passwordCharacters.push(String.fromCharCode(UPPERCASE_CHAR_CODES[Math.floor(Math.random()*UPPERCASE_CHAR_CODES.length)]))
    }
    if (includeLowercase){
        charCodes = charCodes.concat(LOWERCASE_CHAR_CODES)
        passwordCharacters.push(String.fromCharCode(LOWERCASE_CHAR_CODES[Math.floor(Math.random()*LOWERCASE_CHAR_CODES.length)]))}
    if (includeSymbols) {
        charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
        passwordCharacters.push(String.fromCharCode(SYMBOL_CHAR_CODES[Math.floor(Math.random()*SYMBOL_CHAR_CODES.length)]))
    }
    if (includeNumbers) {
        charCodes = charCodes.concat(NUMBER_CHAR_CODES)
        passwordCharacters.push(String.fromCharCode(NUMBER_CHAR_CODES[Math.floor(Math.random()*NUMBER_CHAR_CODES.length)]))
    }
    console.log(passwordCharacters)
    for (let i = passwordCharacters.length; i < characterAmount; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))
    }
    console.log(passwordCharacters)
    return passwordCharacters.join('')
}
//-------------------------------------------------------------------------------------------------------------------------------------
function arrayFromlowToHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array
}
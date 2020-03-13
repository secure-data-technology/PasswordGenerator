// Copyright 2020 SecureDataTechnology.com
// Written by Jeff Page

function getRandomInteger(minValue, maxValue) 
{
    let min = Math.ceil(minValue);
    let max = Math.floor(maxValue) + 1;

    let randomInteger = Math.floor(Math.random() * (max - min)) + min;
    return randomInteger; 
}

function generateCodes(codeArray, minCode, maxCode)
{
    for (let i = minCode; i <= maxCode; i++)
    {
        codeArray[codeArray.length] = i;
    }
    return codeArray;
}

function getRandomChar(characterCodes)
{
    let characterIndex = getRandomInteger(0, characterCodes.length - 1);

    let characterCode = characterCodes[characterIndex];

    let char =  String.fromCharCode(characterCode);

    return char;
}

let characterClasses = 
{
  UNKNOWN : -1,  
  UPPERCASE: 0,
  LOWERCASE: 1,
  DIGITS: 2,
  SYMBOLS: 3
}

function getCharacterClass(useUpperCase, useLowerCase, useDigits, useSymbols)
{
    let classFound = false;
    let characterClass = -1;
    
    while (classFound == false)
    {
        characterClass = getRandomInteger(0, 3);

        switch(characterClass)
        {
            case 0:
                if (useUpperCase == true)
                {
                    classFound = true;
                }
                break;
            case 1:
                if (useLowerCase == true)
                {
                    classFound = true;
                }
            case 2:
                if (useDigits = true)
                {
                    classFound = true;
                }
            case 3:
                if (useSymbols == true)
                {
                    classFound = true;
                }
        }
    } 

    return characterClass;
}

function getRandomCharacterOfClass(upperCaseCodes, lowerCaseCodes, digitCodes, symbolCodes, useUpperCase, useLowerCase, useDigits, useSymbols)
{
    let characterClass = getCharacterClass(useUpperCase, useLowerCase, useDigits, useSymbols)
    let character = "";

    switch(characterClass)
    {
        case 0 :
            character += getRandomChar(upperCaseCodes);     
            break;

        case 1 :
            character += getRandomChar(lowerCaseCodes);
            break;

        case 2 :
            character += getRandomChar(digitCodes);
            break;

        case 3 :
            character += getRandomChar(symbolCodes);
            break;
    }

    return character;
}

function getRandomPassword(passwordLength, useUpperCase, useLowerCase, useDigits, useSymbols)
{
    let randomString = "";

    for (let i = 0; i < passwordLength; i++)
    {
        let char = getRandomCharacterOfClass(upperCaseCodes, lowerCaseCodes, digitCodes, symbolCodes, 
            useUpperCase, useLowerCase, useDigits, useSymbols);
    
        randomString += char;
    }

    return randomString;
}

let symbolCodes = [];

let asciiExclamationMark = 33;
let asciiSlash = 47; 
generateCodes(symbolCodes, asciiExclamationMark, asciiSlash);

let asciiColon = 58;
let asciiAt = 64; 
generateCodes(symbolCodes, asciiColon, asciiAt);

let asciiLeftSquareBracket = 91;
let asciiHyphen = 96; 
generateCodes(symbolCodes, asciiLeftSquareBracket, asciiHyphen);

let asciiLeftCurlyBracket = 123;
let asciiTilde = 126;  
generateCodes(symbolCodes, asciiLeftCurlyBracket, asciiTilde);

let upperCaseCodes = [];
    
let asciiA = 65;
let asciiZ = 90;
generateCodes(upperCaseCodes, asciiA, asciiZ);

let lowerCaseCodes = [];
    
let asciia = 97;
let asciiz = 122;  
generateCodes(lowerCaseCodes, asciia, asciiz);

let digitCodes = [];
    
let ascii0 = 48;
let ascii9 = 57;
generateCodes(digitCodes, ascii0,  ascii9 );

function getRandomPasswords(numberOfPasswords, passwordLength, useUpperCase, useLowerCase, useDigits, useSymbols)
{
  let passwordArray = [];

  for (let i = 0; i < numberOfPasswords; i++)
  {
    password = getRandomPassword(passwordLength, useUpperCase, useLowerCase, useDigits, useSymbols);

    passwordArray[passwordArray.length] = password;
  }

  return passwordArray;
}

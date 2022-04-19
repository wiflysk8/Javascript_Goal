// Crea una función que compruebe si la palabra que le pasamos por parámetro es un palindromo

let isPalindrome = (word) => {
  let cleanWord = word.replace(/\s+/g, "").split("");
  let wordReversed = cleanWord.reverse().join("");
  console.log(cleanWord);
  console.log(wordReversed);
  return word === wordReversed;
};

console.log(isPalindrome("dabale arroz a la zorra el abad"));

/* let isPalindrome = (word) =>{
  const lenght = word.lenght;
  for(i = 0; i < lenght/2; i++) {
    if(word[i] !== (word[lenght -i  -1])){
      return "La palabra " + word + " no es un palindromo"; 
    }
  } return "La palabra " + word + "  es un palindromo";
}

console.log(isPalindrome("as")); */
/* const isPalindrome = (word) => {
  let cleanWord = word.toLowerCase().replace(/\s+/g, "");
  let arrayWord = cleanWord.split("");
  let arrayInverted = [...arrayWord].reverse();
  let stringWord = arrayWord.join("");
  let stingInverted = arrayInverted.join("");

  if (stringWord === stingInverted) {
    console.log(word + " es un palíndromo.");
  } else {
    console.log(word + " no es un palíndromo.");
  }
  return stingInverted;
};
isPalindrome("Dabale arroz a la zorra el abad"); */

function loadingMessage() {
  console.log('Loading js file');
}

// 1. Create a variable to hold the element
// 2. Grab the element by using the document.getElementByID('')
let button = document.getElementById('pigLatinButton');

// translate the word into pig latin
const pigLatin = (word) => {
  // Your code here
  // add the toLowerCase() to the word to make all characters lower case
  word = word.toLowerCase();
  // remove unnecessary space from the word inputted
  word = word.trim();

  // an array of vowels defining what vowels are, needed for the for loop below
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let letter = 0; letter < word.length; letter++) {
    // if the word begins with a vowel, simply add 'yay' to the end of the word
    if (vowels.includes(word[0])) {
      return word + 'yay';
      // else if the word begins with a consonant and includes a vowel,
    } else if (vowels.includes(word[letter])) {
      // remove all consonants before the first vowel, add the removed consonant cluster to the middle
      // and finally add 'ay' to the end of the new word
      return word.slice(letter) + word.slice(0, letter) + 'ay';
    }
  }
  return word + 'ay';
};

// pigLatin(word);

button.addEventListener('click', function () {
  console.log('Button clicked');

  // grab the input from the input box
  let input = document.getElementById('inputBox');
  // read the text inside
  let word = input.value;
  console.log('Word to be translated:', word);

  let translatedWord = pigLatin(word);

  // if there is no word in the input box
  if (word.trim().length == 0) {
    console.log(
      'Exiting the function early because there is nothing to translate'
    );

    // return exits the function
    return;
  }

  // create an li element
  let li = document.createElement('li');

  // get the ul and add the newly create li to it
  let ul = document.getElementById('pigLatinWord');
  ul.appendChild(li);

  // .innerText property that allows to add text between html tags
  // of the li elements
  // taking the input.value from the variable above
  li.innerText = translatedWord;
  // the property input.value being set to an empty string
  // clears the field after the button has been clicked
  input.value = '';

  // add a click event to mark the item as done or not done
  li.addEventListener('click', function () {
    console.log('the li is clicked');
    let classes = li.classList;

    // if the li has the class 'done', remove it
    if (classes.contains('done')) {
      li.classList.remove('done');
      // otherwise add the 'done' class
    } else {
      li.classList.add('done');
    }
  });
});

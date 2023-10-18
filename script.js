// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `Kalvian-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `Kalvian-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.

const Kalvian_1 = "Ichigo";
console.log(`The driver's name is ${Kalvian_1}`);

const Kalvian_2 = "Grimmjow";
console.log(`The navigator's name is ${Kalvian_2}`);

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

const lengthOne = Kalvian_1.length;
const lengthTwo = Kalvian_2.length;

function checkLength() {
  if (lengthOne > lengthTwo) {
    console.log(
      `The driver has the longest name, it has ${lengthOne} characters.`
    );
  } else if (lengthTwo > lengthOne) {
    console.log(
      `It seems that the navigator has the longest name, it has ${lengthTwo} characters.`
    );
  } else {
    console.log(
      `Wow, you both have equally long names, ${lengthOne} characters!.`
    );
  }
}

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String Kalvian - a and i are vowels. Print Kalvian a i a 1 4 5.

function checkForVowels(givenString) {
  const vowels = ["a", "e", "i", "o", "u"];
  let indexArr = [];
  let vowelsArr = [];
  for (let index = 0; index < givenString.length; index++) {
    for (let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++) {
      if (vowels[vowelIndex] == givenString[index]) {
        vowelsArr.push(givenString[index]);
        indexArr.push(index);
      }
    }
  }
  if (vowelsArr.length > 0) {
    console.log(`${givenString} ${[...vowelsArr]} ${[...indexArr]}`);
  } else {
    console.log("no vowels");
  }
}

checkForVowels("Kalvian");

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters

function upperCase(givenString) {
  let uppercase = 0;
  let lowercase = 0;

  for (let index = 0; index < givenString.length; index++) {
    if (givenString[index] == givenString[index].toUpperCase()) {
      uppercase++;
    } else {
      lowercase++;
    }
  }

  console.log(`Uppercase: ${uppercase}, Lowercase: ${lowercase}`);
}

upperCase("Kalvian");

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "Kalvian"

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. Example "naivlaK"

// 3.3 Merge both the characters such that driver is followed by Navigator like "DriverName NavigatorName"
// - Now bring the NavigatorName to the start and send DriverName to the back like "NavigatorName DriverName"

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

function playWithChar(driver, navigator) {
  let ans = "";
  for (let index = 0; index < driver.length; index++) {
    ans += driver[index].toUpperCase() + " ";
  }
  console.log(ans);

  let reversedNav = "";
  for (let index = navigator.length - 1; index >= 0; index--) {
    reversedNav += navigator[index];
  }
  console.log(reversedNav);

  let mergedName = driver + " " + navigator;
  let reverseMerge = navigator + " " + driver;

  console.log(mergedName, reverseMerge);

  let lexicographicOrder = [driver, navigator];
  lexicographicOrder.sort();
  if (lexicographicOrder[0] == "Driver") {
    console.log(`The driver's name goes first.`);
  } else if (lexicographicOrder[0] == "Navigator") {
    console.log(`Yo, the navigator goes first definitely.`);
  } else {
    console.log(`What?! You both have the same name?`);
  }
}

playWithChar("Driver", "Navigator");

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin'



  let text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et tellus et metus facilisis malesuada. et Curabitur dapibus t et auctor arcu, eu lacinia odio bibendum nec. Sed euismod hendrerit orci, at varius dui congue eget. Nullam sed erat nec dui scelerisque bibendum. Vivamus in nunc non eros euismod vulputate. In eu odio id tortor laoreet hendrerit at vel urna. Donec euismod est sed sem hendrerit, eget venenatis sapien congue.Pellentesque feugiat urna nec urna tempor, eget laoreet ligula volutpat. Suspendisse sollicitudin libero at purus malesuada, eget posuere libero ullamcorper. Fusce laoreet dui vel quam viverra, vel fringilla eros scelerisque. Curabitur auctor, justo a condimentum posuere, arcu massa consectetur nunc, vel laoreet purus libero eu massa. Nullam tincidunt, augue at auctor tincidunt, mi neque ultricies lectus, at consectetur purus purus ut mi.Sed eget quam et purus tristique vehicula. Nunc bibendum nunc sed sapien tristique, at dictum sem sodales. Quisque ac mi a mi varius dictum. Curabitur sit amet fringilla nulla, nec fermentum odio. Vestibulum nec leo sit amet erat tincidunt tincidunt. Nullam sit amet tellus eget orci tristique laoreet. Sed nec turpis sit amet ex facilisis eleifend.
  `;

  const noOfWords=text.split(" ")
console.log(noOfWords.length)

let etCount=0

for(let i=0;i<noOfWords.length;i++){
  if(noOfWords[i]=="et"){
    etCount++
  }
}
console.log(etCount)

function palindromeCheck(givenString) {
  let newString = givenString.toLowerCase();
  newString = newString.split(" ").filter(function (n) {
    return n != "";
  });
  let mainString = "";
  for (let index = 0; index < givenString.length; index++) {
    if (givenString[index] !== " " && givenString[index] !== ",") {
      mainString += givenString[index];
    }
  }
  mainString = mainString.toLowerCase();

  const len = mainString.length;

  for (let i = 0; i < len / 2; i++) {
    if (mainString[i] !== mainString[len - 1 - i]) {
      return "It is not a palindrome";
    }
  }
  return "It is a palindrome";
}

loremGenerator();
console.log(palindromeCheck("A man, a plan, a canal, Panama"));

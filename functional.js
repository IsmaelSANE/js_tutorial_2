let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string.
//   Example: "North Dakota" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

// urls: Imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(urlify(element));
  });
  return urls;
}
console.log(imperativeUrls(states));

// urls: Functional version
function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));
// singles: Imperative version
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}
console.log(imperativeSingles(states));

// singles: Functional version
function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));

function functionalDakotas(elements) {
  return elements.filter(element => element.includes('Dakota'));
}
console.log(functionalDakotas(states));

function functionalLength2(elements) {
  return elements.filter(element => element.split(/\s+/).length === 2);
}
console.log(functionalLength2(states));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum: Imperative solution
function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function(n) {
    total += n;
  });
  return total;
}
console.log(imperativeSum(numbers));

// sum: Functional solution
function functionalSum(elements) {
  return elements.reduce((total, n) => { return total += n; });
}
console.log(functionalSum(numbers));

// lengths: Imperative solution
function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  });
  return lengths;
}
console.log(imperativeLengths(states));

// lengths: Functional solution
function functionalLengths(elements) {
  return elements.reduce((lengths, element) => {
    lengths[element] = element.length;
    return lengths;}, {});
}
console.log(functionalLengths(states));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.reduce((total, n) => { return total *= n });

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}
// Adds `blank` to all strings.
String.prototype.blank = function() {
  return !!(this.match(/^\s*$/g));
}

// Adds `last` to all arrays.
Array.prototype.last = function() {
  return this[this.length-1];
}
// Defines a Phrase object.
function Phrase(content) {
  this.content = content;
  // Makes the phrase LOUDER.
    this.louder = function() {
      let upCaseContent = this.content.toUpperCase();
      return upCaseContent;
    };
    this.processor = function(string) {
       return this.content.toLowerCase();
     }
    // Returns content processed for palindrome testing.
    this.processedContent = function processedContent() {
      return this.processor(this.content);
    }
  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}
// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;
  // Returns translation processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }
}
TranslatedPhrase.prototype = new Phrase();

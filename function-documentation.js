/**
 * Converts a string to camelCase.
 *
 * Handles spaces, underscores, hyphens, uppercase words, and acronyms.
 * Throws an error for non-string inputs. Ignores non-letter characters except underscores, hyphens, and spaces.
 * For single-word strings, lowercases the first character. For multi-word strings, capitalizes the first letter of each word except the first.
 *
 * @example
 * toCamelCase('first name');      // 'firstName'
 * toCamelCase('user_id');         // 'userId'
 * toCamelCase('SCREEN_NAME');     // 'screenName'
 * toCamelCase('mobile-number');   // 'mobileNumber'
 * toCamelCase('helloworld');      // 'helloWorld'
 * toCamelCase('NASA_data');       // 'nasaData'
 *
 * @param {string} text - The input string to convert.
 * @throws {Error} Throws if the input is not a string.
 * @returns {string} The camelCased string.
 */
function toCamelCase(text) {
  if (typeof text !== 'string') {
    throw new Error('Input is not a string');
  }
  if (text.trim() === '') return '';

  // Remove non-letter/number/underscore/hyphen/space characters
  let cleaned = text.replace(/[^A-Za-z0-9_\-\s]/g, '');

  // Split on space, underscore, or hyphen
  let words = cleaned.split(/[\s_\-]+/);

  // If only one word, lowercase first letter, uppercase next letter if present
  if (words.length === 1) {
    let word = words[0];
    if (word.length < 2) return word.toLowerCase();
    return word[0].toLowerCase() + word.slice(1);
  }

  // Handle acronyms (all uppercase words)
  return words
    .map((word, idx) => {
      if (!word) return '';
      // If word is all uppercase and longer than 1 char, treat as acronym
      if (/^[A-Z0-9]+$/.test(word) && word.length > 1) {
        return idx === 0
          ? word.toLowerCase()
          : word[0].toUpperCase() + word.slice(1).toLowerCase();
      }
      return idx === 0
        ? word.toLowerCase()
        : word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
}

/**
 * Converts a string to dot.case format.
 *
 * Handles spaces, underscores, hyphens, and camelCase. Throws an error for non-string inputs.
 * Inserts a dot before uppercase letters (for camelCase), replaces spaces, underscores, and hyphens with dots,
 * removes non-word characters except dots, and lowercases the result.
 *
 * @example
 * toDotCase('first name');      // 'first.name'
 * toDotCase('user_id');         // 'user.id'
 * toDotCase('SCREEN_NAME');     // 'screen.name'
 * toDotCase('mobile-number');   // 'mobile.number'
 * toDotCase('helloWorld');      // 'hello.world'
 *
 * @param {string} text - The input string to convert.
 * @throws {Error} Throws if the input is not a string.
 * @returns {string} The dot.cased string.
 */
function toDotCase(text) {
  if (typeof text !== 'string') {
    throw new Error('Input is not a string');
  }
  if (text.trim() === '') return '';

  // Insert a dot before uppercase letters (for camelCase)
  let dotted = text.replace(/([a-z0-9])([A-Z])/g, '$1.$2');

  // Replace spaces, underscores, and hyphens with dots
  dotted = dotted.replace(/[\s_\-]+/g, '.');

  // Remove non-word characters except dot
  dotted = dotted.replace(/[^\w.]/g, '');

  // Convert to lowercase
  return dotted.toLowerCase();
}

module.exports = toDotCase, toCamelCase;
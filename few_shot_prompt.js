/**
 * Converts a string to camelCase.
 * Handles spaces, underscores, hyphens, and uppercase words.
 * @param {string} text - The input string.
 * @returns {string} The camelCased string.
 */
function toCamelCase(text) {
  return text
    .replace(/[_\-\s]+/g, ' ') // Replace underscores, hyphens, and spaces with a single space
    .toLowerCase()             // Convert the string to lowercase
    .split(' ')                // Split into words
    .map((word, idx) =>
      idx === 0
        ? word
        : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join('');
}

// Example usage:
// toCamelCase('first name')      // 'firstName'
// toCamelCase('user_id')         // 'userId'
// toCamelCase('SCREEN_NAME')     // 'screenName'
// toCamelCase('mobile-number')   // 'mobileNumber'

module.exports = toCamelCase;
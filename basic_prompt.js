/**
 * Converts a string to camelCase.
 * @param {string} text - The input string.
 * @param {string} [delimiter=' '] - The delimiter to split words (default is space).
 * @returns {string} The camelCased string.
 */
function toCamelCase(text, delimiter = ' ') {
  return text
    .split(delimiter)
    .map((word, index) => {
      if (index === 0) return word.toLowerCase();
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
}

module.exports = toCamelCase;

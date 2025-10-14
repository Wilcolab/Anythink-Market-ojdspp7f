/**
 * Converts a string to kebab-case.
 *
 * Handles spaces, underscores, hyphens, camelCase, and acronyms.
 * Preserves acronyms by converting them to lowercase, and manages mixed or all-uppercase inputs.
 *
 * @param {string} text - The input string to convert.
 * @throws {Error} Throws if the input is not a string.
 * @returns {string} The kebab-cased string.
 */
function toKebabCase(text) {
  if (typeof text !== 'string') {
    throw new Error('Input is not a string');
  }

  // Remove non-alphanumeric characters except spaces, underscores, and hyphens
  let cleaned = text.replace(/[^A-Za-z0-9_\-\s]/g, '');

  // Insert hyphen before uppercase letters (for camelCase and acronyms)
  cleaned = cleaned.replace(/([a-z0-9])([A-Z])/g, '$1-$2');

  // Split on spaces, underscores, or hyphens, filter out empty segments
  let words = cleaned.split(/[\s_\-]+/).filter(Boolean);

  // Handle acronyms: convert all-uppercase words to lowercase
  words = words.map(word =>
    /^[A-Z0-9]+$/.test(word) && word.length > 1
      ? word.toLowerCase()
      : word.toLowerCase()
  );

  return words.join('-');
}

module.exports = toKebabCase;
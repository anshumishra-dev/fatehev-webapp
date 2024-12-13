export function formatName(name) {
  return (
    name
      // Split the string into parts based on uppercase letters
      .replace(/([A-Z])/g, ' $1')
      // Convert the first character of each word to uppercase
      .replace(/^./, (str) => str.toUpperCase())
      .trim()
  );
}

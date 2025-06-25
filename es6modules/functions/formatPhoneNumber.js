export function formatPhoneNumber(phoneNumberString) {
  // Remove all non-digit characters from the input string
  var cleaned = ('' + phoneNumberString).replace(/\D/g, ''); 

  // Use a regular expression to match the 3-digit area code, 3-digit prefix, and 4-digit line number
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

  // If the number matches the pattern, format it
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }

  // If the number doesn't match, return null or the original string
  return null; 
}
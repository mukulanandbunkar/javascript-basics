const capsSmall = (string) => {
  let str = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      str += string[i].toLowerCase();
    } else {
      str += string[i].toUpperCase();
    }
  }
  return str;
};

// with Ascii COde
const capsSmallWithASCII = (string) => {
  let str = "";
  for (let i = 0; i < string.length; i++) {
    const charCode = string.charCodeAt(i);
    charCode > 64 && charCode < 91
      ? (str += string[i].toLowerCase())
      : charCode > 96 && charCode < 123
      ? (str += string[i].toUpperCase())
      : str;
  }
  return str;
};

console.log(capsSmall("Mukul Anand"));
console.log(capsSmallWithASCII("Mukul Anand"));

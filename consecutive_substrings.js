function consecutiveSubstrings(string) {
  const result = [];

  if (string.length === 0) return result;

  for (let start = 0; start < string.length; start++) {
    for (let end = start +1; end <= string.length; end++) {
      const substring = string.substring(start, end);
  if (substring.length > 0) {
     result.push(substring);
     }
    }
  }

  return result;
}

if (require.main === module) {

  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;



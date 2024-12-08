/*https://www.codewars.com/kata/5ca24526b534ce0018a137b5/train/javascript
Tests: 
 ["hey", "4433999"],
    ["one two three", "666 6633089666084477733 33"],
    ["Hello World!", "#44#33555 5556660#9#66677755531111"],
    ["Def Con 1!", "#3#33 3330#222#666 6601-1111"],
    ["A-z", "#2**#9999"],
    ["1984", "1-9-8-4-"],
    ["Big thanks for checking out my kata", "#22#444 4084426655777703336667770222443322255444664066688 806999055282"]
*/

const sendMessage = (message) => {
  const keypresses = {
    key0: Array.from(" 0"),
    key1: Array.from("1"),
    key2: Array.from("ABC2"),
    key3: Array.from("DEF3"),
    key4: Array.from("GHI4"),
    key5: Array.from("JKL5"),
    key6: Array.from("MNO6"),
    key7: Array.from("PQRS7"),
    key8: Array.from("TUV8"),
    key9: Array.from("WXYZ9"),
  };
  // console.log(keypresses['key2']);
  let pressCount = 0;

  // Scan the phrase by splitting it into an array
  message.split("").map(function (char) {
    char = char.toUpperCase();
    for (let i = 0; i <= 9; i++) {
      // Determine number Keypresses (+1 to offset index 0)
      let keyPress = keypresses[`key${i}`].indexOf(char) + 1;
      // If keypress is found add the keypress to press count
      if (keyPress !== 0) {
        pressCount += keyPress;
      }
    }
  });
  return pressCount;
};

console.log(sendMessage("hey"));

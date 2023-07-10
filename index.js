function shout(string) {
    return string.toUpperCase();
  }
console.log(shout("Hello!"));

function whisper(string) {
  return string.toLowerCase();
}
console.log(whisper("How are you doing?"));

function logShout(string) { 
  console.log(`${string}`.toUpperCase());
}
logShout("Hello!!");

function logWhisper(string) { 
  console.log(`${string}`.toLowerCase());
}
logWhisper("Hello!!");

const string = "Hello!";

function sayHiToHeadphonedRoommate(string) {
  if(string === "Let's have dinner together!") {
    return "I would love to!";
  } else if(string === string.toUpperCase()) {
    return "YES INDEED!";
  } else if (string !== string.toUpperCase()) {
    return "I can't hear you!";
  }
} 
console.log(sayHiToHeadphonedRoommate("Let's have dinner together!"))
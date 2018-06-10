function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  console.log(string.toUpperCase());
}

function logWhisper(string){
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string){
  var new_string = '${string}'
  if (new_string.toLowerCase() === new_string){
    console.log("I can't hear you!")
  }
  else if (new_string.toUpperCase() === new_string){
      console.log("YES INDEED!")
  }
  else {
}
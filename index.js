// function shout(string){
//     return string.toUpperCase();
// }

// function whisper(string){
//     return string.toLowerCase();
// }

// function logShout(string) {
//     console.log(string.toUpperCase());
// }

// function logWhisper(string) {
//     console.log(string.toLowerCase());
// }

// function sayHiToHeadphonedRoommate(string) { 
//     if (string === string.toLowerCase()){
//     return 'I can\'t hear you!';
//     }
// }

// function sayHiToHeadphonedRoommate(string) {
//     if (string === string.toUpperCase()){
//         return 'YES INDEED!'  ;
//     }
// }



// function sayHiToHeadphonedRoommate(string){
//      if (string === "Let's have dinner together!"){
//     return "I would love to!" 
//     }
// }
   
function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return 'I can\'t hear you!';
    } else if (string === string.toUpperCase()) {
        return 'YES INDEED!';
    } else if (string === "Let's have dinner together!") {
        return "I would love to!";
    } else {
        return 'Hello!';
    }
}

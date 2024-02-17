
function gameObject(){
return {
  home : { 
    teamName : "Brooklyn Nets",
    colors :  ["Black", "White"],
    players : {
      "Alan Anderson" : {
        number: 0,
        shoe: 16,
        points: 22,
        rebounds: 12,
        assists: 12,
        steals: 3,
        blocks: 1,
        slamDunks: 1,
      },
      "Reggie Evans" : {
        number: 30,
        shoe: 14,
        points: 12,
        rebounds: 12,
        assists: 12,
        steals: 12,
        blocks: 12,
        slamDunks: 7,
      },
      "Brook Lopez" : {
        number: 11,
        shoe: 17,
        points: 17,
        rebounds: 19,
        assists: 10,
        steals: 3,
        blocks: 1,
        slamDunks: 15
      },
      "Mason Plumlee" : {
        number: 1,
        shoe: 19,
        points: 26,
        rebounds: 12,
        assists: 6,
        steals: 3,
        blocks: 8,
        slamDunks: 5
      },
      "Jason Terry" : {
        number: 31,
        shoe: 15,
        points: 19,
        rebounds: 2,
        assists: 2,
        steals: 4,
        blocks: 11,
        slamDunks: 1
      }
    }
  },
  away : {
    teamName : "Charlotte Hornets",
    colors : ["Turquoise", "Purple"],
    players : {
      "Jeff Adrien" : {
        number: 4,
        shoe: 18,
        points: 10,
        rebounds: 1,
        assists: 1,
        steals: 2,
        blocks: 7,
        slamDunks: 2,
      },
      "Bisak Biyombo" : {
        number: 0,
        shoe: 16,
        points: 12,
        rebounds: 4,
        assists: 7,
        steals: 7,
        blocks: 15,
        slamDunks: 10
      },
      "DeSagna Diop" : {
        number: 2,
        shoe: 14,
        points: 24,
        rebounds: 12,
        assists: 12,
        steals: 4,
        blocks: 5,
        slamDunks: 5
      },
      "Ben Gordon" : {
        number: 8,
        shoe: 15,
        points: 33,
        rebounds: 3,
        assists: 2,
        steals: 1,
        blocks: 1,
        slamDunks: 0
      },
      "Brendan Haywood" : {
        number: 33,
        shoe: 15,
        points: 6,
        rebounds: 12,
        assists: 12,
        steals: 22,
        blocks: 5,
        slamDunks: 12
    }
  }
}
}
}

console.log(gameObject());

function homeTeamName() {
  let object = gameObject();
  return object["home"]["teamName"];
}
console.log(homeTeamName());

const numPointsScored = (playerName) => {
    //retrieve the player object from both home and away teams in the game object.
  let homeObject = gameObject()["home"]["players"]
  let awayObject = gameObject()["away"]["players"]
  
    //check if the player exist in home team 
  if (Object.keys(homeObject).find((x)=> x === playerName)) {
    return homeObject[playerName].points
  }
   //check if the player exist in away team 
  else if (Object.keys(awayObject).find((x)=> x === playerName)) {
    return awayObject[playerName].points;
}
}
console.log(numPointsScored("Alan Anderson"));
console.log(numPointsScored("Brendan Haywood"));


const shoeSize = (playerName) => {
  let homeObject = gameObject()["home"]["players"]
  let awayObject = gameObject()["away"]["players"]
  
  if (Object.keys(homeObject).find((x)=> x === playerName)) {
    return homeObject[playerName].shoe
  }
  else if (Object.keys(awayObject).find((x)=> x === playerName)) {
    return awayObject[playerName].shoe;
}
}

console.log(shoeSize("Alan Anderson"));

function teamColors(teamName) {
    //get the objects in the home and away game object
  let homeColors = gameObject()["home"];
  let awayColors = gameObject()["away"];

    //check if provided console logged teamName matches anything inside gameObject teamName
  if(homeColors["teamName"] === teamName) {
    //if matched, return the colors of the home team
  return homeColors["colors"];
  } 
  else if (awayColors["teamName"] === teamName) {
    return awayColors["colors"]
  }
}

console.log(teamColors("Brooklyn Nets"));
console.log(teamColors("Charlotte Hornets"))

//build a function of teamNames that returns the array of name of each player in the team
//if home team or away teamName is called 
function teamNames(teamName){
  let homePlayers = gameObject()["home"]["players"];
  let awayPlayers = gameObject()["away"]["players"];

  if (teamName === "Brooklyn Nets") {
    return Object.keys(homePlayers);
  } else if (teamName === "Charlotte Hornets") {
    return Object.keys(awayPlayers);
  }
}
console.log(teamNames("Brooklyn Nets"));
console.log(teamNames("Charlotte Hornets"));

function playerNumber(teamName) {
  let homeJersey = gameObject()["home"]["players"];
  let awayJersey = gameObject()["away"]["players"];

  if (teamName === "Brooklyn Nets") {
    return Object.values(homeJersey).map(player => player.number);
  } else if(teamName === "Charlotte Hornets"){
    return Object.values(awayJersey).map(player => player.number);
  } else {
    return "no games";
  }
}
console.log(playerNumber("Brooklyn Nets"));
console.log(playerNumber("Charlotte Hornets"));
console.log(playerNumber("Lakers"));

//I want to grab all paired keys inside players Array when called players name 
// function playerStats(playersName) {
//   let playerInfo = gameObject().players;

//   if(playerInfo.hasOwnProperty(playersName)) {
//   return playerInfo[playersName];
// }   
// }
// console.log(playerStats("Jason Terry"));

function playerStats(playersName) {
  let homePlayers = gameObject().home.players;
  let awayPlayers = gameObject().away.players;

  if (homePlayers.hasOwnProperty(playersName)) {
    return homePlayers[playersName];
  } else if (awayPlayers.hasOwnProperty(playersName)) {
    return awayPlayers[playersName];
  } else {
    return null; // Player not found
  }
}

console.log(playerStats("Jason Terry"));
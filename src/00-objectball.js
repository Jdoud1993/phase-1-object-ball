function gameObject() {
    const game = {
        home:{
            teamName:`Brooklyn Nets`,
            colors:[`Black`, `White`],
            players:{
                "Alan Anderson":{number:0, shoe:16, points:22, rebounds:12, assists:12, steals:3, blocks:1, slamDunks:1},
                "ReggieEvans":{number:30, shoe:14, points:12, rebounds:12, assists:12, steals:12, blocks:12, slamDunks:7},
                "Brook Lopez":{number:11, shoe:17, points:17, rebounds:19, assists:10, steels:3, blocks:1, slamDunks:15},
                "Mason Plumlee":{number:1, shoe:19, points:26, rebounds:12, assists:6, steals:3, blocks:8, slamDunks:5},
                "Jason Terry":{number:31, shoe:15, points:19, rebounds:2, assists:2, steals:4, blocks:11, slamDunks:1}
            },
        },
        away:{
            teamName:`Charlotte Hornets`,
            colors:[`Turqoise`, `Purple`],
            players:{
                "Jeff Adrien":{number:4, shoe:18, points:10, rebounds:1, assists:1, steals:2, blocks:7, slamDunks:2},
                "Bismak Biyombo":{number:0, shoe:16, points:12, rebounds:4, assists:7, steals:7, blocks:15, slamDunks:10},
                "DeSagna Diop":{number:2, shoe:14, points:24, rebounds:12, assists:12, steals:4, blocks:5, slamDunks:5},
                "Ben Gordon":{number:8, shoe:15, points:33, rebounds:3, assists:2, steals:1, blocks:1, slamDunks:0},
                "Brendan Haywood":{number:33, shoe:15, points:6, rebounds:12, assists:12, steals:22, blocks:5, slamDunks:12}
            }
        }}
    return game
}
gameObject()

function numPointsScored(playerName) {
    let game = gameObject()
    let teamKeys = Object.keys(game)
    let playerTeam = teamKeys.find(team => {
      let playerKeys = Object.keys(game[team].players)
      return playerKeys.find(player => player === playerName)
    })
    return game[playerTeam].players[playerName].points
  }

  function shoeSize(playerName) {
    let game = gameObject()
    let teamKeys = Object.keys(game)
    let playerTeam = teamKeys.find(team => {
      let playerKeys = Object.keys(game[team].players)
      return playerKeys.find(player => player === playerName)
    })
    return game[playerTeam].players[playerName].shoe
  }

  function teamColors(teamName) {
    let game = gameObject()
    let teamKeys = Object.keys(game)
    let teamNameKey = teamKeys.find(team => game[team].teamName === teamName)
    return game[teamNameKey].colors
}

function teamNames() {
    let game = gameObject()
    let teamKeys = Object.keys(game)
    let teamsArr = []
    for (key of teamKeys) {
        teamsArr.push(game[key].teamName)
    }
    return teamsArr
}

function playerNumbers(teamName) {
    let game = gameObject()
    let jerseyNumbers = []
    let teamKeys = Object.keys(game)
    let teamNameKey = teamKeys.find(team => game[team].teamName === teamName)
    let playersKeyObj = game[teamNameKey].players
    let playersKeyArr = Object.keys(playersKeyObj)
    for (key of playersKeyArr) {
      jerseyNumbers.push(game[teamNameKey].players[key].number)
    }
    return jerseyNumbers
}

function playerStats(playerName) {
    let game = gameObject()
    let teamKeys = Object.keys(game)
    let playerTeam = teamKeys.find(team => {
      let playerKeys = Object.keys(game[team].players)
      return playerKeys.find(player => player === playerName)
    })
    let playerStats = game[playerTeam].players[playerName]
    return playerStats
}

function bigShoeRebounds() {
    let game = gameObject()
    let playersHome = game.home.players
    let playersAway = game.away.players
    let allPlayers = {...playersHome, ...playersAway}
    let biggest = Object.values(allPlayers).sort(
        (a,b) => {
            if (a.shoe > b.shoe) return -1;
            if (a.shoe < b.shoe) return 1;
            if (a.shoe == b.shoe) return 0;
        })[0];
    return biggest.rebounds;
    }

function mostPointsScored() {
    let game = gameObject()
    let playersHome = game.home.players
    let playersAway = game.away.players
    let allPlayers = {...playersHome, ...playersAway}
    let biggest = Object.values(allPlayers).sort(
        (a,b) => {
            if (a.points > b.points) return -1;
            if (a.points < b.points) return 1;
            if (a.points == b.points) return 0;
        })[0];
    return biggest.points;
    }

function winningTeam () {
    let game = gameObject()
    let homePlayers = game.home.players
    let awayPlayers = game.away.players
    let homeScore = function() {
        let totalHScore = 0
        for (key in homePlayers) {
            totalHScore += game.home.players[key].points
        }
        return totalHScore
    }
    let awayScore = function() {
        let totalAScore = 0
        for (key in awayPlayers) {
            totalAScore += game.away.players[key].points
        }
        return totalAScore
    }

    if (homeScore() > awayScore()) {
        return game.home.teamName
    } else {return game.away.teamName
    }
}
    

function playerWithLongestName() {
    let game = gameObject()
    let playersHome = game.home.players
    let playersAway = game.away.players
    let allPlayers = {...playersHome, ...playersAway}
    let biggest = Object.keys(allPlayers).sort(
        (a,b) => {
            if (a.length > b.length) return -1;
            if (a.length < b.length) return 1;
            if (a.length == b.length) return 0;
        })[0];
    return biggest;
    }

    function doesLongNamesSteal() {
        let game = gameObject()
        let playersHome = game.home.players
        let playersAway = game.away.players
        let allPlayers = {...playersHome, ...playersAway}
        let longestNamedPlayer = Object.keys(allPlayers).sort(
            (a,b) => {
                if (a.length > b.length) return -1;
                if (a.length < b.length) return 1;
                if (a.length == b.length) return 0;
            })[0];
        let playerMostSteals = Object.keys(allPlayers).sort(
            (a,b) => {
                if (a.steal > b.steals) return -1;
                if (a.steals < b.steals) return 1;
                if (a.steals == b.steals) return 0;
            })[0];
        if (longestNamedPlayer === playerMostSteals) 
            return true
        else return false    
        }
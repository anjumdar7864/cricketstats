var apecricket = require("ape-cricket");
const unirest = require('unirest')
const axios = require('axios');
const puppeteer = require('puppeteer');
module.exports.matchesList = async (req, res) => {

    // var api_key = "qMcfYyX395OsTmnrIQVk4BFjMck1"

    // apecricket.upcomingMatches( api_key, function(response){ 
    //     // response will be json data of upcoming cricket matches
    //     res.send(response);
    // });
    unirest.get("https://dev132-cricket-live-scores-v1.p.rapidapi.com/matches.php?completedlimit=10&inprogresslimit=10&upcomingLimit=10")
        .header("X-RapidAPI-Host", "dev132-cricket-live-scores-v1.p.rapidapi.com")
        .header("X-RapidAPI-Key", "65e049b49amsh166cecd12e84fc3p1e7b61jsn4ef8c6f77835")
        .end(function (result) {
            res.send(result.body)

        });
}

module.exports.matchData = async (req, res) => {


    unirest.get("https://dev132-cricket-live-scores-v1.p.rapidapi.com/match.php?seriesid=" + req.body.seriesId + "&matchid=" + req.body.matchId)
        .header("X-RapidAPI-Host", "dev132-cricket-live-scores-v1.p.rapidapi.com")
        .header("X-RapidAPI-Key", "65e049b49amsh166cecd12e84fc3p1e7b61jsn4ef8c6f77835")
        .end(function (result) {
            res.send(result.body)
            //   console.log(result.status, result.headers, result.body);
        });
}

module.exports.liveOrHighlightsMatchData = async (req, res) => {


    unirest.get("https://dev132-cricket-live-scores-v1.p.rapidapi.com/matchdetail.php?seriesid=" + req.body.seriesId + "&matchid=" + req.body.matchId)
        .header("X-RapidAPI-Host", "dev132-cricket-live-scores-v1.p.rapidapi.com")
        .header("X-RapidAPI-Key", "65e049b49amsh166cecd12e84fc3p1e7b61jsn4ef8c6f77835")
        .end(function (result) {
            res.send(result.body)

        });
}


module.exports.scoreCards = async (req, res) => {


    unirest.get("https://dev132-cricket-live-scores-v1.p.rapidapi.com/scorecards.php?seriesid=" + req.body.seriesId + "&matchid=" + req.body.matchId)
        .header("X-RapidAPI-Host", "dev132-cricket-live-scores-v1.p.rapidapi.com")
        .header("X-RapidAPI-Key", "65e049b49amsh166cecd12e84fc3p1e7b61jsn4ef8c6f77835")
        .end(function (result) {
            res.send(result.body)
        });
}





module.exports.currentMatches = async (req, res) => {

    var api_key = "qMcfYyX395OsTmnrIQVk4BFjMck1"

    apecricket.cricket(api_key, function (response) {
        // response will be json data of upcoming cricket matches
        res.send(response);
    });


}

module.exports.scrapdata = async (req, res) => {

    (async () => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      let matches = [];
      await page.goto('https://cricketexchange.in/');

      // const textContent = await page.evaluate(() => {
      //   let hotels = [];
      //   let hotelsElms = document.querySelectorAll('.match-list');
      //   console.log(hotelsElms);
      //   console.log("here");
      //    hotelsElms.forEach((hotelelement) => {
      //       console.log(hotelelement);
      //       console.log("here1");
      //       let hotelJson = {};
      //       try {
      //           hotelJson.team1 = hotelelement.querySelector('app-scoreboard.score .team_name').innerText;
      //           hotelJson.team2 = hotelelement.querySelector('app-scoreboard.score2 .team_name').innerText;
      //           }
            
      //       catch (exception){

      //       }

      //       hotels.push(hotelJson);
      //       });
       
      //   return hotels;
 


      // });

      const textContent = await page.evaluate(() => {
      let matcheslist = document.querySelectorAll('app-scoreboard.ml-md-1');
        matcheslist.forEach((hotelelement) => {
            console.log(hotelelement);
        });
      return matcheslist;
  });

      console.log(textContent); /* No Problem Mate */
      res.send(textContent);
      browser.close();

    })();

}
module.exports.odds = async (req, res) => {

    unirest.get("https://api.betsapi.com/v1/betfair/sb/event?token=26768-Cq2cTYwNJG2I7u&event_id=" + req.params.eventId)

        .end(function (result) {
            res.send(result.body)
        });
let data={
    "success": 1,
    "results": [
        {
            "competitions": {
                "key": "COMP:11729982",
                "name": "ICC Cricket World Cup",
                "competitionId": 11729982,
                "eventId": 28569726
            },
            "event": {
                "timezone": "GMT",
                "name": "Afghanistan v West Indies",
                "key": "EVENT:29306490",
                "eventTypeId": 4,
                "countryCode": "GB",
                "videoAvailable": false,
                "eventId": 29306490,
                "openDate": "2019-07-04T09:30:00.000Z"
            },
            "updated_at": "1562237416",
            "timeline": {
                "matchType": "LIMITED_OVER",
                "fullTimeElapsed": {
                    "min": 0,
                    "sec": 0,
                    "hour": 0
                },
                "score": {
                    "away": {
                        "halfTimeScore": "",
                        "inning1": {
                            "wickets": "2",
                            "overs": "25.0",
                            "runs": "109"
                        },
                        "penaltiesScore": "",
                        "name": "West Indies",
                        "penaltiesSequence": [],
                        "highlight": true,
                        "fullTimeScore": ""
                    },
                    "home": {
                        "penaltiesSequence": [],
                        "name": "Afghanistan",
                        "penaltiesScore": "",
                        "halfTimeScore": "",
                        "fullTimeScore": "",
                        "highlight": false
                    }
                },
                "eventId": 29306490,
                "matchStatus": "InPlay",
                "currentSet": 1,
                "stateOfBall": {
                    "appealId": "0",
                    "bowlerName": "Rashid Khan",
                    "referralOutcome": "0",
                    "batsmanName": "Shai Hope",
                    "batsmanRuns": "0",
                    "appealTypeName": "Not Out",
                    "overNumber": "24",
                    "dismissalTypeName": "Not Out",
                    "bye": "0",
                    "legBye": "0",
                    "wide": "0",
                    "noBall": "0",
                    "overBallNumber": "6",
                    "outcomeId": "0"
                },
                "eventTypeId": 4,
                "currentDay": "1",
                "hasSets": false
            },
            "timeline_updated_at": "1562238801",
            "markets": [
                {
                    "turnInPlayEnabled": true,
                    "marketId": "924.192320222",
                    "runnerDetails": [
                        {
                            "selectionId": 8328358,
                            "previousRunnerOdds": [],
                            "handicap": 0,
                            "previousWinRunnerOdds": [],
                            "winRunnerOdds": {
                                "fractionalDisplayOdds": {
                                    "denominator": 2,
                                    "numerator": 7
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "numerator": 7,
                                        "denominator": 2
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 4.5
                                    }
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 4.5
                                }
                            },
                            "runnerStatus": "ACTIVE",
                            "runnerOrder": 135,
                            "runnerOdds": {
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 4.5
                                    },
                                    "fractionalOdds": {
                                        "numerator": 7,
                                        "denominator": 2
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 2,
                                    "numerator": 7
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 4.5
                                }
                            }
                        },
                        {
                            "winRunnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 4.5
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "numerator": 7,
                                        "denominator": 2
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 4.5
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 7,
                                    "denominator": 2
                                }
                            },
                            "runnerOdds": {
                                "fractionalDisplayOdds": {
                                    "denominator": 2,
                                    "numerator": 7
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "denominator": 2,
                                        "numerator": 7
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 4.5
                                    }
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 4.5
                                }
                            },
                            "runnerOrder": 135,
                            "runnerStatus": "ACTIVE",
                            "selectionId": 8094895,
                            "previousRunnerOdds": [],
                            "previousWinRunnerOdds": [],
                            "handicap": 0
                        },
                        {
                            "selectionId": 21011556,
                            "previousRunnerOdds": [],
                            "handicap": 0,
                            "previousWinRunnerOdds": [],
                            "winRunnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 5.5
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "denominator": 2,
                                        "numerator": 9
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 5.5
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 9,
                                    "denominator": 2
                                }
                            },
                            "runnerStatus": "ACTIVE",
                            "runnerOdds": {
                                "fractionalDisplayOdds": {
                                    "numerator": 9,
                                    "denominator": 2
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 5.5
                                    },
                                    "fractionalOdds": {
                                        "numerator": 9,
                                        "denominator": 2
                                    }
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 5.5
                                }
                            },
                            "runnerOrder": 145
                        },
                        {
                            "previousWinRunnerOdds": [],
                            "handicap": 0,
                            "selectionId": 4686565,
                            "previousRunnerOdds": [],
                            "runnerOdds": {
                                "fractionalDisplayOdds": {
                                    "denominator": 2,
                                    "numerator": 9
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 5.5
                                    },
                                    "fractionalOdds": {
                                        "denominator": 2,
                                        "numerator": 9
                                    }
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 5.5
                                }
                            },
                            "runnerOrder": 145,
                            "runnerStatus": "ACTIVE",
                            "winRunnerOdds": {
                                "fractionalDisplayOdds": {
                                    "denominator": 2,
                                    "numerator": 9
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 5.5
                                    },
                                    "fractionalOdds": {
                                        "denominator": 2,
                                        "numerator": 9
                                    }
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 5.5
                                }
                            }
                        },
                        {
                            "selectionId": 20233373,
                            "previousRunnerOdds": [],
                            "handicap": 0,
                            "previousWinRunnerOdds": [],
                            "winRunnerOdds": {
                                "fractionalDisplayOdds": {
                                    "denominator": 1,
                                    "numerator": 5
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 6
                                    },
                                    "fractionalOdds": {
                                        "numerator": 5,
                                        "denominator": 1
                                    }
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 6
                                }
                            },
                            "runnerStatus": "ACTIVE",
                            "runnerOdds": {
                                "fractionalDisplayOdds": {
                                    "numerator": 5,
                                    "denominator": 1
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "denominator": 1,
                                        "numerator": 5
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 6
                                    }
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 6
                                }
                            },
                            "runnerOrder": 150
                        },
                        {
                            "handicap": 0,
                            "previousWinRunnerOdds": [],
                            "selectionId": 6648218,
                            "previousRunnerOdds": [],
                            "runnerStatus": "ACTIVE",
                            "runnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 8
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 8
                                    },
                                    "fractionalOdds": {
                                        "denominator": 1,
                                        "numerator": 7
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 7,
                                    "denominator": 1
                                }
                            },
                            "runnerOrder": 170,
                            "winRunnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 8
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 8
                                    },
                                    "fractionalOdds": {
                                        "denominator": 1,
                                        "numerator": 7
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 1,
                                    "numerator": 7
                                }
                            }
                        },
                        {
                            "previousWinRunnerOdds": [],
                            "handicap": 0,
                            "previousRunnerOdds": [],
                            "selectionId": 22940146,
                            "runnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 12
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "denominator": 1,
                                        "numerator": 11
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 12
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 1,
                                    "numerator": 11
                                }
                            },
                            "runnerOrder": 210,
                            "runnerStatus": "ACTIVE",
                            "winRunnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 12
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "denominator": 1,
                                        "numerator": 11
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 12
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 1,
                                    "numerator": 11
                                }
                            }
                        },
                        {
                            "runnerStatus": "ACTIVE",
                            "runnerOrder": 320,
                            "runnerOdds": {
                                "fractionalDisplayOdds": {
                                    "denominator": 1,
                                    "numerator": 22
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 23
                                    },
                                    "fractionalOdds": {
                                        "denominator": 1,
                                        "numerator": 22
                                    }
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 23
                                }
                            },
                            "winRunnerOdds": {
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "denominator": 1,
                                        "numerator": 22
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 23
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 22,
                                    "denominator": 1
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 23
                                }
                            },
                            "handicap": 0,
                            "previousWinRunnerOdds": [],
                            "selectionId": 10831166,
                            "previousRunnerOdds": []
                        },
                        {
                            "winRunnerOdds": {
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "numerator": 90,
                                        "denominator": 1
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 91
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 90,
                                    "denominator": 1
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 91
                                }
                            },
                            "runnerOrder": 1000,
                            "runnerOdds": {
                                "fractionalDisplayOdds": {
                                    "numerator": 90,
                                    "denominator": 1
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "denominator": 1,
                                        "numerator": 90
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 91
                                    }
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 91
                                }
                            },
                            "runnerStatus": "ACTIVE",
                            "selectionId": 6648216,
                            "previousRunnerOdds": [],
                            "previousWinRunnerOdds": [],
                            "handicap": 0
                        },
                        {
                            "runnerStatus": "ACTIVE",
                            "runnerOrder": 1100,
                            "runnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 101
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "denominator": 1,
                                        "numerator": 100
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 101
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 100,
                                    "denominator": 1
                                }
                            },
                            "winRunnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 101
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 1,
                                    "numerator": 100
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 101
                                    },
                                    "fractionalOdds": {
                                        "numerator": 100,
                                        "denominator": 1
                                    }
                                }
                            },
                            "handicap": 0,
                            "previousWinRunnerOdds": [],
                            "selectionId": 19265696,
                            "previousRunnerOdds": []
                        },
                        {
                            "runnerOdds": {
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 101
                                    },
                                    "fractionalOdds": {
                                        "denominator": 1,
                                        "numerator": 100
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 1,
                                    "numerator": 100
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 101
                                }
                            },
                            "runnerOrder": 1100,
                            "runnerStatus": "ACTIVE",
                            "winRunnerOdds": {
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 101
                                    },
                                    "fractionalOdds": {
                                        "denominator": 1,
                                        "numerator": 100
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 100,
                                    "denominator": 1
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 101
                                }
                            },
                            "previousWinRunnerOdds": [],
                            "handicap": 0,
                            "selectionId": 18091605,
                            "previousRunnerOdds": []
                        }
                    ],
                    "rule4Deductions": [],
                    "hasBPE": false,
                    "legTypes": [
                        "SIMPLE_SELECTION"
                    ],
                    "betDelay": 9,
                    "marketStatus": "OPEN",
                    "hasSGM": false,
                    "eachwayAvailable": false,
                    "linkedMarketId": "1.159364031",
                    "bettingType": "FIXED_ODDS",
                    "inplay": true,
                    "guaranteedPriceAvailable": false,
                    "bspMarket": false,
                    "livePriceAvailable": true,
                    "market": {
                        "numberOfUpperLevels": 1,
                        "betDelay": 9,
                        "marketLevels": [
                            "AVB_EVENT"
                        ],
                        "bspMarket": false,
                        "inPlay": true,
                        "marketTime": "2019-07-04T09:30:00.000Z",
                        "marketStatus": "OPEN",
                        "runners": [
                            {
                                "handicap": 0,
                                "selectionId": 8328358,
                                "runnerStatus": "ACTIVE",
                                "runnerName": "Rahmat Shah",
                                "result": [],
                                "sortPriority": 1
                            },
                            {
                                "runnerName": "Gulbadin Naib",
                                "result": [],
                                "sortPriority": 2,
                                "handicap": 0,
                                "runnerStatus": "ACTIVE",
                                "selectionId": 8094895
                            },
                            {
                                "result": [],
                                "sortPriority": 3,
                                "runnerName": "Ikram Ali Khil",
                                "runnerStatus": "ACTIVE",
                                "selectionId": 21011556,
                                "handicap": 0
                            },
                            {
                                "selectionId": 4686565,
                                "runnerStatus": "ACTIVE",
                                "handicap": 0,
                                "sortPriority": 4,
                                "result": [],
                                "runnerName": "Mohammad Nabi"
                            },
                            {
                                "handicap": 0,
                                "runnerStatus": "ACTIVE",
                                "selectionId": 20233373,
                                "runnerName": "Asghar Afghan",
                                "sortPriority": 5,
                                "result": []
                            },
                            {
                                "runnerStatus": "ACTIVE",
                                "selectionId": 6648218,
                                "handicap": 0,
                                "result": [],
                                "sortPriority": 6,
                                "runnerName": "Najibullah Zadran"
                            },
                            {
                                "handicap": 0,
                                "runnerStatus": "ACTIVE",
                                "selectionId": 22940146,
                                "runnerName": "Samiullah Shinwari",
                                "sortPriority": 7,
                                "result": []
                            },
                            {
                                "handicap": 0,
                                "runnerStatus": "ACTIVE",
                                "selectionId": 10831166,
                                "runnerName": "Rashid Khan",
                                "sortPriority": 8,
                                "result": []
                            },
                            {
                                "runnerName": "Dawlat Zadran",
                                "sortPriority": 9,
                                "result": [],
                                "handicap": 0,
                                "selectionId": 6648216,
                                "runnerStatus": "ACTIVE"
                            },
                            {
                                "sortPriority": 10,
                                "result": [],
                                "runnerName": "Sayed Shirzad",
                                "selectionId": 19265696,
                                "runnerStatus": "ACTIVE",
                                "handicap": 0
                            },
                            {
                                "selectionId": 18091605,
                                "runnerStatus": "ACTIVE",
                                "handicap": 0,
                                "sortPriority": 11,
                                "result": [],
                                "runnerName": "Mujeeb Ur Rahman"
                            }
                        ],
                        "numberOfRunners": 11,
                        "marketName": "Top Afghanistan Batsman",
                        "sortPriority": 20,
                        "marketId": "924.192320222",
                        "associatedMarkets": [],
                        "eventId": 29306490,
                        "marketType": "TOP_TEAM_X_RUNSCORER",
                        "sgmMarket": false,
                        "canTurnInPlay": true,
                        "numberOfWinners": 1,
                        "topLevelEventId": 28569726,
                        "bettingType": "ODDS",
                        "upperLevelEventId": 28569726,
                        "eventTypeId": 4,
                        "exchangeMarketId": "1.159364031",
                        "productType": "SPORTSBOOK",
                        "key": "SPORTSBOOK_MARKET:924.192320222",
                        "numberOfActiveRunners": 11
                    }
                },
                {
                    "bspMarket": false,
                    "livePriceAvailable": true,
                    "marketStatus": "OPEN",
                    "hasSGM": false,
                    "guaranteedPriceAvailable": false,
                    "hasBPE": false,
                    "legTypes": [
                        "SIMPLE_SELECTION"
                    ],
                    "betDelay": 8,
                    "inplay": true,
                    "runnerDetails": [
                        {
                            "handicap": 229.5,
                            "previousWinRunnerOdds": [],
                            "selectionId": 12532748,
                            "previousRunnerOdds": [],
                            "runnerStatus": "ACTIVE",
                            "runnerOrder": 10,
                            "runnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 1.83
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 1.83
                                    },
                                    "fractionalOdds": {
                                        "denominator": 6,
                                        "numerator": 5
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 6,
                                    "numerator": 5
                                }
                            },
                            "winRunnerOdds": {
                                "fractionalDisplayOdds": {
                                    "denominator": 6,
                                    "numerator": 5
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "numerator": 5,
                                        "denominator": 6
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 1.83
                                    }
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 1.83
                                }
                            }
                        },
                        {
                            "previousRunnerOdds": [],
                            "selectionId": 12532747,
                            "handicap": 229.5,
                            "previousWinRunnerOdds": [],
                            "winRunnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 1.83
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 5,
                                    "denominator": 6
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 1.83
                                    },
                                    "fractionalOdds": {
                                        "numerator": 5,
                                        "denominator": 6
                                    }
                                }
                            },
                            "runnerStatus": "ACTIVE",
                            "runnerOrder": 20,
                            "runnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 1.83
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 1.83
                                    },
                                    "fractionalOdds": {
                                        "denominator": 6,
                                        "numerator": 5
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 6,
                                    "numerator": 5
                                }
                            }
                        }
                    ],
                    "rule4Deductions": [],
                    "bettingType": "MOVING_HANDICAP",
                    "eachwayAvailable": false,
                    "turnInPlayEnabled": true,
                    "marketId": "924.192320382",
                    "market": {
                        "eventId": 29306490,
                        "canTurnInPlay": true,
                        "sgmMarket": false,
                        "marketType": "TEAM_X_TOTAL_RUNS",
                        "bettingType": "MOVING_HANDICAP",
                        "topLevelEventId": 28569726,
                        "numberOfWinners": 1,
                        "key": "SPORTSBOOK_MARKET:924.192320382",
                        "numberOfActiveRunners": 2,
                        "productType": "SPORTSBOOK",
                        "upperLevelEventId": 28569726,
                        "eventTypeId": 4,
                        "marketLevels": [
                            "AVB_EVENT"
                        ],
                        "betDelay": 8,
                        "numberOfUpperLevels": 1,
                        "marketTime": "2019-07-04T09:30:00.000Z",
                        "marketStatus": "OPEN",
                        "inPlay": true,
                        "bspMarket": false,
                        "marketName": "Team A Total Runs",
                        "numberOfRunners": 2,
                        "runners": [
                            {
                                "result": {
                                    "type": "UNDER"
                                },
                                "sortPriority": 1,
                                "runnerName": "Afghanistan Under",
                                "runnerStatus": "ACTIVE",
                                "selectionId": 12532748,
                                "handicap": 228.5
                            },
                            {
                                "sortPriority": 2,
                                "result": {
                                    "type": "OVER"
                                },
                                "runnerName": "Afghanistan Over",
                                "selectionId": 12532747,
                                "runnerStatus": "ACTIVE",
                                "handicap": 228.5
                            }
                        ],
                        "associatedMarkets": [],
                        "marketId": "924.192320382",
                        "sortPriority": 17
                    }
                },
                {
                    "guaranteedPriceAvailable": false,
                    "betDelay": 8,
                    "hasBPE": false,
                    "legTypes": [
                        "SIMPLE_SELECTION"
                    ],
                    "livePriceAvailable": true,
                    "bspMarket": false,
                    "marketStatus": "OPEN",
                    "hasSGM": false,
                    "eachwayAvailable": false,
                    "marketId": "924.192316868",
                    "turnInPlayEnabled": true,
                    "rule4Deductions": [],
                    "runnerDetails": [
                        {
                            "previousRunnerOdds": [],
                            "selectionId": 37302,
                            "handicap": 0,
                            "previousWinRunnerOdds": [],
                            "winRunnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 1.36
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "numerator": 4,
                                        "denominator": 11
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 1.36
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 4,
                                    "denominator": 11
                                }
                            },
                            "runnerStatus": "ACTIVE",
                            "runnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 1.36
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "denominator": 11,
                                        "numerator": 4
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 1.36
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 4,
                                    "denominator": 11
                                }
                            },
                            "runnerOrder": 10
                        },
                        {
                            "selectionId": 37303,
                            "previousRunnerOdds": [],
                            "previousWinRunnerOdds": [],
                            "handicap": 0,
                            "winRunnerOdds": {
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "numerator": 15,
                                        "denominator": 8
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 2.87
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 15,
                                    "denominator": 8
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 2.87
                                }
                            },
                            "runnerOdds": {
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "numerator": 15,
                                        "denominator": 8
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 2.87
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 15,
                                    "denominator": 8
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 2.87
                                }
                            },
                            "runnerOrder": 20,
                            "runnerStatus": "ACTIVE"
                        }
                    ],
                    "inplay": true,
                    "bettingType": "FIXED_ODDS",
                    "market": {
                        "marketName": "3rd Wicket Caught?",
                        "numberOfRunners": 2,
                        "runners": [
                            {
                                "runnerStatus": "ACTIVE",
                                "selectionId": 37302,
                                "handicap": 0,
                                "result": [],
                                "sortPriority": 1,
                                "runnerName": "Yes"
                            },
                            {
                                "handicap": 0,
                                "runnerStatus": "ACTIVE",
                                "selectionId": 37303,
                                "runnerName": "No",
                                "result": [],
                                "sortPriority": 2
                            }
                        ],
                        "associatedMarkets": [],
                        "marketId": "924.192316868",
                        "sortPriority": 510,
                        "marketLevels": [
                            "AVB_EVENT"
                        ],
                        "betDelay": 8,
                        "numberOfUpperLevels": 1,
                        "marketTime": "2019-07-04T09:30:00.000Z",
                        "marketStatus": "OPEN",
                        "inPlay": true,
                        "bspMarket": false,
                        "bettingType": "ODDS",
                        "topLevelEventId": 28569726,
                        "numberOfWinners": 1,
                        "numberOfActiveRunners": 2,
                        "key": "SPORTSBOOK_MARKET:924.192316868",
                        "productType": "SPORTSBOOK",
                        "eventTypeId": 4,
                        "upperLevelEventId": 28569726,
                        "eventId": 29306490,
                        "canTurnInPlay": true,
                        "sgmMarket": false,
                        "marketType": "X_WICKET_CAUGHT"
                    }
                },
                {
                    "bettingType": "FIXED_ODDS",
                    "rule4Deductions": [],
                    "runnerDetails": [
                        {
                            "selectionId": 24913363,
                            "previousRunnerOdds": [],
                            "handicap": 0,
                            "previousWinRunnerOdds": [],
                            "winRunnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 61
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "numerator": 60,
                                        "denominator": 1
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 61
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 1,
                                    "numerator": 60
                                }
                            },
                            "runnerStatus": "ACTIVE",
                            "runnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 61
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 61
                                    },
                                    "fractionalOdds": {
                                        "numerator": 60,
                                        "denominator": 1
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 1,
                                    "numerator": 60
                                }
                            },
                            "runnerOrder": 10
                        },
                        {
                            "previousWinRunnerOdds": [],
                            "handicap": 0,
                            "selectionId": 24913359,
                            "previousRunnerOdds": [],
                            "runnerOrder": 20,
                            "runnerOdds": {
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 31
                                    },
                                    "fractionalOdds": {
                                        "denominator": 1,
                                        "numerator": 30
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 1,
                                    "numerator": 30
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 31
                                }
                            },
                            "runnerStatus": "ACTIVE",
                            "winRunnerOdds": {
                                "fractionalDisplayOdds": {
                                    "denominator": 1,
                                    "numerator": 30
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 31
                                    },
                                    "fractionalOdds": {
                                        "denominator": 1,
                                        "numerator": 30
                                    }
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 31
                                }
                            }
                        },
                        {
                            "winRunnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 17
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "numerator": 16,
                                        "denominator": 1
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 17
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 16,
                                    "denominator": 1
                                }
                            },
                            "runnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 17
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 1,
                                    "numerator": 16
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 17
                                    },
                                    "fractionalOdds": {
                                        "numerator": 16,
                                        "denominator": 1
                                    }
                                }
                            },
                            "runnerOrder": 30,
                            "runnerStatus": "ACTIVE",
                            "selectionId": 24913354,
                            "previousRunnerOdds": [],
                            "previousWinRunnerOdds": [],
                            "handicap": 0
                        },
                        {
                            "selectionId": 24913357,
                            "previousRunnerOdds": [],
                            "handicap": 0,
                            "previousWinRunnerOdds": [],
                            "winRunnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 12
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "denominator": 1,
                                        "numerator": 11
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 12
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 1,
                                    "numerator": 11
                                }
                            },
                            "runnerStatus": "ACTIVE",
                            "runnerOdds": {
                                "fractionalDisplayOdds": {
                                    "numerator": 11,
                                    "denominator": 1
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "numerator": 11,
                                        "denominator": 1
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 12
                                    }
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 12
                                }
                            },
                            "runnerOrder": 40
                        },
                        {
                            "previousWinRunnerOdds": [],
                            "handicap": 0,
                            "selectionId": 24913356,
                            "previousRunnerOdds": [],
                            "runnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 9.5
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 2,
                                    "numerator": 17
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "denominator": 2,
                                        "numerator": 17
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 9.5
                                    }
                                }
                            },
                            "runnerOrder": 50,
                            "runnerStatus": "ACTIVE",
                            "winRunnerOdds": {
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 9.5
                                    },
                                    "fractionalOdds": {
                                        "numerator": 17,
                                        "denominator": 2
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 2,
                                    "numerator": 17
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 9.5
                                }
                            }
                        },
                        {
                            "winRunnerOdds": {
                                "fractionalDisplayOdds": {
                                    "denominator": 1,
                                    "numerator": 7
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "numerator": 7,
                                        "denominator": 1
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 8
                                    }
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 8
                                }
                            },
                            "runnerStatus": "ACTIVE",
                            "runnerOrder": 60,
                            "runnerOdds": {
                                "fractionalDisplayOdds": {
                                    "numerator": 7,
                                    "denominator": 1
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 8
                                    },
                                    "fractionalOdds": {
                                        "denominator": 1,
                                        "numerator": 7
                                    }
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 8
                                }
                            },
                            "previousRunnerOdds": [],
                            "selectionId": 24913355,
                            "handicap": 0,
                            "previousWinRunnerOdds": []
                        },
                        {
                            "selectionId": 24913358,
                            "previousRunnerOdds": [],
                            "previousWinRunnerOdds": [],
                            "handicap": 0,
                            "winRunnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 7
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "numerator": 6,
                                        "denominator": 1
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 7
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 1,
                                    "numerator": 6
                                }
                            },
                            "runnerOrder": 70,
                            "runnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 7
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "numerator": 6,
                                        "denominator": 1
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 7
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 1,
                                    "numerator": 6
                                }
                            },
                            "runnerStatus": "ACTIVE"
                        },
                        {
                            "previousWinRunnerOdds": [],
                            "handicap": 0,
                            "previousRunnerOdds": [],
                            "selectionId": 24635572,
                            "runnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 6.5
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 11,
                                    "denominator": 2
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 6.5
                                    },
                                    "fractionalOdds": {
                                        "numerator": 11,
                                        "denominator": 2
                                    }
                                }
                            },
                            "runnerOrder": 80,
                            "runnerStatus": "ACTIVE",
                            "winRunnerOdds": {
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "numerator": 11,
                                        "denominator": 2
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 6.5
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 2,
                                    "numerator": 11
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 6.5
                                }
                            }
                        },
                        {
                            "handicap": 0,
                            "previousWinRunnerOdds": [],
                            "previousRunnerOdds": [],
                            "selectionId": 24635566,
                            "runnerStatus": "ACTIVE",
                            "runnerOdds": {
                                "fractionalDisplayOdds": {
                                    "numerator": 11,
                                    "denominator": 2
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "denominator": 2,
                                        "numerator": 11
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 6.5
                                    }
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 6.5
                                }
                            },
                            "runnerOrder": 90,
                            "winRunnerOdds": {
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 6.5
                                    },
                                    "fractionalOdds": {
                                        "denominator": 2,
                                        "numerator": 11
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 11,
                                    "denominator": 2
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 6.5
                                }
                            }
                        },
                        {
                            "runnerOdds": {
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "denominator": 1,
                                        "numerator": 5
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 6
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 1,
                                    "numerator": 5
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 6
                                }
                            },
                            "runnerOrder": 100,
                            "runnerStatus": "ACTIVE",
                            "winRunnerOdds": {
                                "fractionalDisplayOdds": {
                                    "denominator": 1,
                                    "numerator": 5
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 6
                                    },
                                    "fractionalOdds": {
                                        "numerator": 5,
                                        "denominator": 1
                                    }
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 6
                                }
                            },
                            "previousWinRunnerOdds": [],
                            "handicap": 0,
                            "previousRunnerOdds": [],
                            "selectionId": 24913361
                        },
                        {
                            "winRunnerOdds": {
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "denominator": 1,
                                        "numerator": 7
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 8
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 7,
                                    "denominator": 1
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 8
                                }
                            },
                            "runnerOdds": {
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 8
                                    },
                                    "fractionalOdds": {
                                        "numerator": 7,
                                        "denominator": 1
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 7,
                                    "denominator": 1
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 8
                                }
                            },
                            "runnerOrder": 110,
                            "runnerStatus": "ACTIVE",
                            "previousRunnerOdds": [],
                            "selectionId": 24913362,
                            "previousWinRunnerOdds": [],
                            "handicap": 0
                        },
                        {
                            "winRunnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 11
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "denominator": 1,
                                        "numerator": 10
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 11
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 1,
                                    "numerator": 10
                                }
                            },
                            "runnerStatus": "ACTIVE",
                            "runnerOrder": 120,
                            "runnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 11
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "numerator": 10,
                                        "denominator": 1
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 11
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 1,
                                    "numerator": 10
                                }
                            },
                            "selectionId": 17543740,
                            "previousRunnerOdds": [],
                            "handicap": 0,
                            "previousWinRunnerOdds": []
                        },
                        {
                            "runnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 10
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 9,
                                    "denominator": 1
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 10
                                    },
                                    "fractionalOdds": {
                                        "denominator": 1,
                                        "numerator": 9
                                    }
                                }
                            },
                            "runnerOrder": 130,
                            "runnerStatus": "ACTIVE",
                            "winRunnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 10
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "denominator": 1,
                                        "numerator": 9
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 10
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 9,
                                    "denominator": 1
                                }
                            },
                            "previousWinRunnerOdds": [],
                            "handicap": 0,
                            "previousRunnerOdds": [],
                            "selectionId": 24913360
                        },
                        {
                            "runnerOrder": 140,
                            "runnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 3.6
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 13,
                                    "denominator": 5
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 3.6
                                    },
                                    "fractionalOdds": {
                                        "numerator": 13,
                                        "denominator": 5
                                    }
                                }
                            },
                            "runnerStatus": "ACTIVE",
                            "winRunnerOdds": {
                                "fractionalDisplayOdds": {
                                    "denominator": 5,
                                    "numerator": 13
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "denominator": 5,
                                        "numerator": 13
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 3.6
                                    }
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 3.6
                                }
                            },
                            "previousWinRunnerOdds": [],
                            "handicap": 0,
                            "previousRunnerOdds": [],
                            "selectionId": 24913364
                        },
                        {
                            "winRunnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 2.4
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "numerator": 7,
                                        "denominator": 5
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 2.4
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 7,
                                    "denominator": 5
                                }
                            },
                            "runnerOdds": {
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 2.4
                                    },
                                    "fractionalOdds": {
                                        "denominator": 5,
                                        "numerator": 7
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 5,
                                    "numerator": 7
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 2.4
                                }
                            },
                            "runnerOrder": 150,
                            "runnerStatus": "ACTIVE",
                            "selectionId": 24913353,
                            "previousRunnerOdds": [],
                            "previousWinRunnerOdds": [],
                            "handicap": 0
                        },
                        {
                            "previousWinRunnerOdds": [],
                            "handicap": 0,
                            "selectionId": 24913365,
                            "previousRunnerOdds": [],
                            "runnerOrder": 160,
                            "runnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 2.87
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 15,
                                    "denominator": 8
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 2.87
                                    },
                                    "fractionalOdds": {
                                        "denominator": 8,
                                        "numerator": 15
                                    }
                                }
                            },
                            "runnerStatus": "ACTIVE",
                            "winRunnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 2.87
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 8,
                                    "numerator": 15
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 2.87
                                    },
                                    "fractionalOdds": {
                                        "numerator": 15,
                                        "denominator": 8
                                    }
                                }
                            }
                        }
                    ],
                    "inplay": true,
                    "marketId": "924.192320271",
                    "turnInPlayEnabled": true,
                    "eachwayAvailable": false,
                    "hasSGM": false,
                    "marketStatus": "OPEN",
                    "livePriceAvailable": true,
                    "bspMarket": false,
                    "betDelay": 8,
                    "hasBPE": false,
                    "legTypes": [
                        "SIMPLE_SELECTION"
                    ],
                    "guaranteedPriceAvailable": false,
                    "market": {
                        "associatedMarkets": [],
                        "marketId": "924.192320271",
                        "sortPriority": 1680,
                        "marketName": "Team B Total Runs Margins",
                        "numberOfRunners": 16,
                        "runners": [
                            {
                                "result": [],
                                "sortPriority": 1,
                                "runnerName": "Between 159.5 and 185.5 Runs - West Indies",
                                "runnerStatus": "ACTIVE",
                                "selectionId": 24913363,
                                "handicap": 0
                            },
                            {
                                "selectionId": 24913359,
                                "runnerStatus": "ACTIVE",
                                "handicap": 0,
                                "result": [],
                                "sortPriority": 2,
                                "runnerName": "Between 185.5 and 202.5 Runs - West Indies"
                            },
                            {
                                "runnerName": "Between 202.5 and 216.5 Runs - West Indies",
                                "result": [],
                                "sortPriority": 3,
                                "handicap": 0,
                                "selectionId": 24913354,
                                "runnerStatus": "ACTIVE"
                            },
                            {
                                "runnerName": "Between 216.5 and 228.5 Runs - West Indies",
                                "result": [],
                                "sortPriority": 4,
                                "handicap": 0,
                                "selectionId": 24913357,
                                "runnerStatus": "ACTIVE"
                            },
                            {
                                "sortPriority": 5,
                                "result": [],
                                "runnerName": "Between 228.5 and 239.5 Runs - West Indies",
                                "runnerStatus": "ACTIVE",
                                "selectionId": 24913356,
                                "handicap": 0
                            },
                            {
                                "handicap": 0,
                                "selectionId": 24913355,
                                "runnerStatus": "ACTIVE",
                                "runnerName": "Between 239.5 and 250.5 Runs - West Indies",
                                "result": [],
                                "sortPriority": 6
                            },
                            {
                                "handicap": 0,
                                "runnerStatus": "ACTIVE",
                                "selectionId": 24913358,
                                "runnerName": "Between 250.5 and 261.5 Runs - West Indies",
                                "sortPriority": 7,
                                "result": []
                            },
                            {
                                "result": [],
                                "sortPriority": 8,
                                "runnerName": "Between 261.5 and 273.5 Runs - West Indies",
                                "selectionId": 24635572,
                                "runnerStatus": "ACTIVE",
                                "handicap": 0
                            },
                            {
                                "runnerStatus": "ACTIVE",
                                "selectionId": 24635566,
                                "handicap": 0,
                                "result": [],
                                "sortPriority": 9,
                                "runnerName": "Between 273.5 and 286.5 Runs - West Indies"
                            },
                            {
                                "runnerName": "Between 286.5 and 302.5 Runs - West Indies",
                                "result": [],
                                "sortPriority": 10,
                                "handicap": 0,
                                "runnerStatus": "ACTIVE",
                                "selectionId": 24913361
                            },
                            {
                                "handicap": 0,
                                "selectionId": 24913362,
                                "runnerStatus": "ACTIVE",
                                "runnerName": "Between 302.5 and 321.5 Runs - West Indies",
                                "result": [],
                                "sortPriority": 11
                            },
                            {
                                "runnerStatus": "ACTIVE",
                                "selectionId": 17543740,
                                "handicap": 0,
                                "sortPriority": 12,
                                "result": [],
                                "runnerName": "Between 321.5 and 350.5 Runs - West Indies"
                            },
                            {
                                "handicap": 0,
                                "runnerStatus": "ACTIVE",
                                "selectionId": 24913360,
                                "runnerName": "216.5 Runs or less - West Indies",
                                "result": [],
                                "sortPriority": 13
                            },
                            {
                                "runnerName": "Between 216.5 and 250.5 Runs - West Indies",
                                "sortPriority": 14,
                                "result": [],
                                "handicap": 0,
                                "selectionId": 24913364,
                                "runnerStatus": "ACTIVE"
                            },
                            {
                                "handicap": 0,
                                "selectionId": 24913353,
                                "runnerStatus": "ACTIVE",
                                "runnerName": "Between 250.5 and 286.5 Runs - West Indies",
                                "result": [],
                                "sortPriority": 15
                            },
                            {
                                "result": [],
                                "sortPriority": 16,
                                "runnerName": "286.5 Runs or more - West Indies",
                                "selectionId": 24913365,
                                "runnerStatus": "ACTIVE",
                                "handicap": 0
                            }
                        ],
                        "marketTime": "2019-07-04T09:30:00.000Z",
                        "marketStatus": "OPEN",
                        "inPlay": true,
                        "bspMarket": false,
                        "marketLevels": [
                            "AVB_EVENT"
                        ],
                        "betDelay": 8,
                        "numberOfUpperLevels": 1,
                        "key": "SPORTSBOOK_MARKET:924.192320271",
                        "numberOfActiveRunners": 16,
                        "productType": "SPORTSBOOK",
                        "upperLevelEventId": 28569726,
                        "eventTypeId": 4,
                        "bettingType": "ODDS",
                        "topLevelEventId": 28569726,
                        "numberOfWinners": 1,
                        "canTurnInPlay": true,
                        "sgmMarket": false,
                        "marketType": "TEAM_X_TOTAL_RUNS_MARGINS",
                        "eventId": 29306490
                    }
                },
                {
                    "betDelay": 8,
                    "hasBPE": false,
                    "legTypes": [
                        "SIMPLE_SELECTION"
                    ],
                    "guaranteedPriceAvailable": false,
                    "marketStatus": "OPEN",
                    "hasSGM": false,
                    "livePriceAvailable": true,
                    "bspMarket": false,
                    "marketId": "924.192316841",
                    "turnInPlayEnabled": true,
                    "eachwayAvailable": false,
                    "bettingType": "FIXED_ODDS",
                    "rule4Deductions": [],
                    "runnerDetails": [
                        {
                            "selectionId": 37302,
                            "previousRunnerOdds": [],
                            "previousWinRunnerOdds": [],
                            "runnerOdds": [],
                            "runnerOrder": 10,
                            "handicap": 0,
                            "runnerStatus": "ACTIVE"
                        },
                        {
                            "selectionId": 37303,
                            "previousRunnerOdds": [],
                            "runnerOdds": [],
                            "runnerOrder": 20,
                            "previousWinRunnerOdds": [],
                            "handicap": 0,
                            "runnerStatus": "ACTIVE"
                        }
                    ],
                    "inplay": true,
                    "market": {
                        "numberOfWinners": 1,
                        "topLevelEventId": 28569726,
                        "bettingType": "ODDS",
                        "eventTypeId": 4,
                        "upperLevelEventId": 28569726,
                        "productType": "SPORTSBOOK",
                        "key": "SPORTSBOOK_MARKET:924.192316841",
                        "numberOfActiveRunners": 2,
                        "eventId": 29306490,
                        "marketType": "X_WICKET_CAUGHT",
                        "sgmMarket": false,
                        "canTurnInPlay": true,
                        "runners": [
                            {
                                "sortPriority": 1,
                                "result": [],
                                "runnerName": "Yes",
                                "selectionId": 37302,
                                "runnerStatus": "ACTIVE",
                                "handicap": 0
                            },
                            {
                                "handicap": 0,
                                "runnerStatus": "ACTIVE",
                                "selectionId": 37303,
                                "runnerName": "No",
                                "sortPriority": 2,
                                "result": []
                            }
                        ],
                        "numberOfRunners": 2,
                        "marketName": "2nd Wicket Caught?*",
                        "sortPriority": 520,
                        "marketId": "924.192316841",
                        "associatedMarkets": [],
                        "numberOfUpperLevels": 1,
                        "betDelay": 8,
                        "marketLevels": [
                            "AVB_EVENT"
                        ],
                        "bspMarket": false,
                        "inPlay": true,
                        "marketTime": "2019-07-04T09:30:00.000Z",
                        "marketStatus": "OPEN"
                    }
                },
                {
                    "livePriceAvailable": true,
                    "bspMarket": false,
                    "marketStatus": "OPEN",
                    "hasSGM": false,
                    "guaranteedPriceAvailable": false,
                    "betDelay": 8,
                    "hasBPE": false,
                    "legTypes": [
                        "SIMPLE_SELECTION"
                    ],
                    "rule4Deductions": [],
                    "runnerDetails": [
                        {
                            "winRunnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 1.57
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 4,
                                    "denominator": 7
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 1.57
                                    },
                                    "fractionalOdds": {
                                        "numerator": 4,
                                        "denominator": 7
                                    }
                                }
                            },
                            "runnerStatus": "ACTIVE",
                            "runnerOdds": {
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "denominator": 7,
                                        "numerator": 4
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 1.57
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 4,
                                    "denominator": 7
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 1.57
                                }
                            },
                            "runnerOrder": 10,
                            "selectionId": 12123518,
                            "previousRunnerOdds": [],
                            "handicap": 89.5,
                            "previousWinRunnerOdds": []
                        },
                        {
                            "winRunnerOdds": {
                                "fractionalDisplayOdds": {
                                    "denominator": 4,
                                    "numerator": 5
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 2.25
                                    },
                                    "fractionalOdds": {
                                        "numerator": 5,
                                        "denominator": 4
                                    }
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 2.25
                                }
                            },
                            "runnerStatus": "ACTIVE",
                            "runnerOdds": {
                                "fractionalDisplayOdds": {
                                    "denominator": 4,
                                    "numerator": 5
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "numerator": 5,
                                        "denominator": 4
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 2.25
                                    }
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 2.25
                                }
                            },
                            "runnerOrder": 20,
                            "selectionId": 12123517,
                            "previousRunnerOdds": [],
                            "handicap": 89.5,
                            "previousWinRunnerOdds": []
                        }
                    ],
                    "inplay": true,
                    "bettingType": "MOVING_HANDICAP",
                    "eachwayAvailable": false,
                    "marketId": "924.192320291",
                    "turnInPlayEnabled": true,
                    "market": {
                        "marketName": "Alternate Team B -Batsman N Total Runs",
                        "runners": [
                            {
                                "handicap": 72.5,
                                "selectionId": 12123518,
                                "runnerStatus": "ACTIVE",
                                "runnerName": "Shai Hope Under",
                                "result": {
                                    "type": "UNDER"
                                },
                                "sortPriority": 1
                            },
                            {
                                "runnerStatus": "ACTIVE",
                                "selectionId": 12123517,
                                "handicap": 72.5,
                                "result": {
                                    "type": "OVER"
                                },
                                "sortPriority": 2,
                                "runnerName": "Shai Hope Over"
                            }
                        ],
                        "numberOfRunners": 2,
                        "marketId": "924.192320291",
                        "associatedMarkets": [],
                        "sortPriority": 4040,
                        "marketLevels": [
                            "AVB_EVENT"
                        ],
                        "numberOfUpperLevels": 1,
                        "betDelay": 8,
                        "inPlay": true,
                        "marketStatus": "OPEN",
                        "marketTime": "2019-07-04T09:30:00.000Z",
                        "bspMarket": false,
                        "bettingType": "MOVING_HANDICAP",
                        "numberOfWinners": 1,
                        "topLevelEventId": 28569726,
                        "numberOfActiveRunners": 2,
                        "key": "SPORTSBOOK_MARKET:924.192320291",
                        "upperLevelEventId": 28569726,
                        "eventTypeId": 4,
                        "productType": "SPORTSBOOK",
                        "eventId": 29306490,
                        "sgmMarket": false,
                        "canTurnInPlay": true,
                        "marketType": "ALTERNATE_TEAM_Y_BATSMAN_X_TOTAL_RUNS"
                    }
                },
                {
                    "rule4Deductions": [],
                    "inplay": true,
                    "runnerDetails": [
                        {
                            "selectionId": 11654318,
                            "previousRunnerOdds": [],
                            "previousWinRunnerOdds": [],
                            "handicap": 282.5,
                            "winRunnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 1.44
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 4,
                                    "denominator": 9
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "denominator": 9,
                                        "numerator": 4
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 1.44
                                    }
                                }
                            },
                            "runnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 1.44
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 1.44
                                    },
                                    "fractionalOdds": {
                                        "denominator": 9,
                                        "numerator": 4
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 4,
                                    "denominator": 9
                                }
                            },
                            "runnerOrder": 10,
                            "runnerStatus": "ACTIVE"
                        },
                        {
                            "winRunnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 2.62
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "denominator": 8,
                                        "numerator": 13
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 2.62
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 8,
                                    "numerator": 13
                                }
                            },
                            "runnerStatus": "ACTIVE",
                            "runnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 2.62
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "numerator": 13,
                                        "denominator": 8
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 2.62
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 13,
                                    "denominator": 8
                                }
                            },
                            "runnerOrder": 20,
                            "selectionId": 11654317,
                            "previousRunnerOdds": [],
                            "handicap": 282.5,
                            "previousWinRunnerOdds": []
                        }
                    ],
                    "bettingType": "MOVING_HANDICAP",
                    "eachwayAvailable": false,
                    "marketId": "924.192320316",
                    "turnInPlayEnabled": true,
                    "livePriceAvailable": true,
                    "bspMarket": false,
                    "marketStatus": "OPEN",
                    "hasSGM": false,
                    "guaranteedPriceAvailable": false,
                    "betDelay": 8,
                    "legTypes": [
                        "SIMPLE_SELECTION"
                    ],
                    "hasBPE": false,
                    "market": {
                        "eventId": 29306490,
                        "canTurnInPlay": true,
                        "sgmMarket": false,
                        "marketType": "ALTERNATE_TEAM_Y_TOTAL_RUNS_X",
                        "bettingType": "MOVING_HANDICAP",
                        "topLevelEventId": 28569726,
                        "numberOfWinners": 1,
                        "key": "SPORTSBOOK_MARKET:924.192320316",
                        "numberOfActiveRunners": 2,
                        "productType": "SPORTSBOOK",
                        "upperLevelEventId": 28569726,
                        "eventTypeId": 4,
                        "marketLevels": [
                            "AVB_EVENT"
                        ],
                        "betDelay": 8,
                        "numberOfUpperLevels": 1,
                        "marketStatus": "OPEN",
                        "marketTime": "2019-07-04T09:30:00.000Z",
                        "inPlay": true,
                        "bspMarket": false,
                        "marketName": "Alternate Team B Total Runs 3",
                        "numberOfRunners": 2,
                        "runners": [
                            {
                                "handicap": 292.5,
                                "runnerStatus": "ACTIVE",
                                "selectionId": 11654318,
                                "runnerName": "West Indies Under",
                                "result": {
                                    "type": "UNDER"
                                },
                                "sortPriority": 1
                            },
                            {
                                "selectionId": 11654317,
                                "runnerStatus": "ACTIVE",
                                "handicap": 292.5,
                                "result": {
                                    "type": "OVER"
                                },
                                "sortPriority": 2,
                                "runnerName": "West Indies Over"
                            }
                        ],
                        "associatedMarkets": [],
                        "marketId": "924.192320316",
                        "sortPriority": 282
                    }
                },
                {
                    "marketStatus": "OPEN",
                    "hasSGM": false,
                    "bspMarket": false,
                    "livePriceAvailable": true,
                    "hasBPE": false,
                    "legTypes": [
                        "SIMPLE_SELECTION"
                    ],
                    "betDelay": 8,
                    "guaranteedPriceAvailable": false,
                    "bettingType": "FIXED_ODDS",
                    "runnerDetails": [
                        {
                            "handicap": 0,
                            "previousWinRunnerOdds": [],
                            "previousRunnerOdds": [],
                            "selectionId": 19776503,
                            "runnerStatus": "ACTIVE",
                            "runnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 4.5
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "denominator": 2,
                                        "numerator": 7
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 4.5
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 7,
                                    "denominator": 2
                                }
                            },
                            "runnerOrder": 60,
                            "winRunnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 4.5
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 7,
                                    "denominator": 2
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 4.5
                                    },
                                    "fractionalOdds": {
                                        "denominator": 2,
                                        "numerator": 7
                                    }
                                }
                            }
                        },
                        {
                            "winRunnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 4.2
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "numerator": 16,
                                        "denominator": 5
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 4.2
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 16,
                                    "denominator": 5
                                }
                            },
                            "runnerOrder": 70,
                            "runnerOdds": {
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "numerator": 16,
                                        "denominator": 5
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 4.2
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 5,
                                    "numerator": 16
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 4.2
                                }
                            },
                            "runnerStatus": "ACTIVE",
                            "selectionId": 23184259,
                            "previousRunnerOdds": [],
                            "previousWinRunnerOdds": [],
                            "handicap": 0
                        },
                        {
                            "runnerOdds": {
                                "fractionalDisplayOdds": {
                                    "numerator": 13,
                                    "denominator": 5
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 3.6
                                    },
                                    "fractionalOdds": {
                                        "denominator": 5,
                                        "numerator": 13
                                    }
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 3.6
                                }
                            },
                            "runnerOrder": 80,
                            "runnerStatus": "ACTIVE",
                            "winRunnerOdds": {
                                "fractionalDisplayOdds": {
                                    "numerator": 13,
                                    "denominator": 5
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "numerator": 13,
                                        "denominator": 5
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 3.6
                                    }
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 3.6
                                }
                            },
                            "previousWinRunnerOdds": [],
                            "handicap": 0,
                            "previousRunnerOdds": [],
                            "selectionId": 15191257
                        },
                        {
                            "runnerOrder": 110,
                            "runnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 2.3
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "numerator": 13,
                                        "denominator": 10
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 2.3
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 13,
                                    "denominator": 10
                                }
                            },
                            "runnerStatus": "ACTIVE",
                            "winRunnerOdds": {
                                "fractionalDisplayOdds": {
                                    "denominator": 10,
                                    "numerator": 13
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "numerator": 13,
                                        "denominator": 10
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 2.3
                                    }
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 2.3
                                }
                            },
                            "previousWinRunnerOdds": [],
                            "handicap": 0,
                            "previousRunnerOdds": [],
                            "selectionId": 24913314
                        },
                        {
                            "handicap": 0,
                            "previousWinRunnerOdds": [],
                            "previousRunnerOdds": [],
                            "selectionId": 15191258,
                            "runnerStatus": "ACTIVE",
                            "runnerOdds": {
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "denominator": 2,
                                        "numerator": 1
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 1.5
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 2,
                                    "numerator": 1
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 1.5
                                }
                            },
                            "runnerOrder": 120,
                            "winRunnerOdds": {
                                "fractionalDisplayOdds": {
                                    "denominator": 2,
                                    "numerator": 1
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "denominator": 2,
                                        "numerator": 1
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 1.5
                                    }
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 1.5
                                }
                            }
                        }
                    ],
                    "inplay": true,
                    "rule4Deductions": [],
                    "turnInPlayEnabled": true,
                    "marketId": "924.192320240",
                    "eachwayAvailable": false,
                    "market": {
                        "marketName": "Team B - Batsman N Total Runs Margins",
                        "runners": [
                            {
                                "selectionId": 15191259,
                                "runnerStatus": "ACTIVE",
                                "handicap": 0,
                                "sortPriority": 1,
                                "result": [],
                                "runnerName": "Shai Hope Between 19.5 and 27.5 Runs"
                            },
                            {
                                "selectionId": 23009471,
                                "runnerStatus": "ACTIVE",
                                "handicap": 0,
                                "result": [],
                                "sortPriority": 2,
                                "runnerName": "Shai Hope Between 27.5 and 38.5 Runs"
                            },
                            {
                                "result": [],
                                "sortPriority": 3,
                                "runnerName": "Shai Hope Between 38.5 and 51.5 Runs",
                                "runnerStatus": "ACTIVE",
                                "selectionId": 19776503,
                                "handicap": 0
                            },
                            {
                                "handicap": 0,
                                "selectionId": 23184259,
                                "runnerStatus": "ACTIVE",
                                "runnerName": "Shai Hope Between 51.5 and 68.5 Runs",
                                "result": [],
                                "sortPriority": 4
                            },
                            {
                                "handicap": 0,
                                "runnerStatus": "ACTIVE",
                                "selectionId": 15191257,
                                "runnerName": "Shai Hope Between 68.5 and 93.5 Runs",
                                "result": [],
                                "sortPriority": 5
                            },
                            {
                                "handicap": 0,
                                "selectionId": 19776508,
                                "runnerStatus": "ACTIVE",
                                "runnerName": "Shai Hope Between 12.5 and 38.5 Runs",
                                "sortPriority": 6,
                                "result": []
                            },
                            {
                                "selectionId": 24913314,
                                "runnerStatus": "ACTIVE",
                                "handicap": 0,
                                "sortPriority": 7,
                                "result": [],
                                "runnerName": "Shai Hope Between 38.5 and 68.5 Runs"
                            },
                            {
                                "sortPriority": 8,
                                "result": [],
                                "runnerName": "Shai Hope 68.5 Runs or more",
                                "selectionId": 15191258,
                                "runnerStatus": "ACTIVE",
                                "handicap": 0
                            }
                        ],
                        "numberOfRunners": 8,
                        "marketId": "924.192320240",
                        "associatedMarkets": [],
                        "sortPriority": 3220,
                        "marketLevels": [
                            "AVB_EVENT"
                        ],
                        "numberOfUpperLevels": 1,
                        "betDelay": 8,
                        "inPlay": true,
                        "marketStatus": "OPEN",
                        "marketTime": "2019-07-04T09:30:00.000Z",
                        "bspMarket": false,
                        "bettingType": "ODDS",
                        "numberOfWinners": 1,
                        "topLevelEventId": 28569726,
                        "numberOfActiveRunners": 8,
                        "key": "SPORTSBOOK_MARKET:924.192320240",
                        "eventTypeId": 4,
                        "upperLevelEventId": 28569726,
                        "productType": "SPORTSBOOK",
                        "eventId": 29306490,
                        "sgmMarket": false,
                        "canTurnInPlay": true,
                        "marketType": "TEAM_Y_BATSMAN_X_TOTAL_RUNS_MARGINS"
                    }
                },
                {
                    "guaranteedPriceAvailable": false,
                    "betDelay": 8,
                    "legTypes": [
                        "SIMPLE_SELECTION"
                    ],
                    "hasBPE": false,
                    "livePriceAvailable": true,
                    "bspMarket": false,
                    "hasSGM": false,
                    "marketStatus": "OPEN",
                    "eachwayAvailable": false,
                    "marketId": "924.192320299",
                    "turnInPlayEnabled": true,
                    "rule4Deductions": [],
                    "runnerDetails": [
                        {
                            "selectionId": 11654318,
                            "previousRunnerOdds": [],
                            "handicap": 261.5,
                            "previousWinRunnerOdds": [],
                            "winRunnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 2.2
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 6,
                                    "denominator": 5
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 2.2
                                    },
                                    "fractionalOdds": {
                                        "denominator": 5,
                                        "numerator": 6
                                    }
                                }
                            },
                            "runnerStatus": "ACTIVE",
                            "runnerOrder": 10,
                            "runnerOdds": {
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "numerator": 6,
                                        "denominator": 5
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 2.2
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 6,
                                    "denominator": 5
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 2.2
                                }
                            }
                        },
                        {
                            "winRunnerOdds": {
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 1.61
                                    },
                                    "fractionalOdds": {
                                        "denominator": 13,
                                        "numerator": 8
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 13,
                                    "numerator": 8
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 1.61
                                }
                            },
                            "runnerStatus": "ACTIVE",
                            "runnerOdds": {
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "numerator": 8,
                                        "denominator": 13
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 1.61
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 13,
                                    "numerator": 8
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 1.61
                                }
                            },
                            "runnerOrder": 20,
                            "previousRunnerOdds": [],
                            "selectionId": 11654317,
                            "handicap": 261.5,
                            "previousWinRunnerOdds": []
                        }
                    ],
                    "inplay": true,
                    "bettingType": "MOVING_HANDICAP",
                    "market": {
                        "inPlay": true,
                        "marketStatus": "OPEN",
                        "marketTime": "2019-07-04T09:30:00.000Z",
                        "bspMarket": false,
                        "marketLevels": [
                            "AVB_EVENT"
                        ],
                        "numberOfUpperLevels": 1,
                        "betDelay": 8,
                        "marketId": "924.192320299",
                        "associatedMarkets": [],
                        "sortPriority": 281,
                        "marketName": "Alternate Team B Total Runs 2",
                        "runners": [
                            {
                                "runnerName": "West Indies Under",
                                "sortPriority": 1,
                                "result": {
                                    "type": "UNDER"
                                },
                                "handicap": 268.5,
                                "runnerStatus": "ACTIVE",
                                "selectionId": 11654318
                            },
                            {
                                "runnerName": "West Indies Over",
                                "result": {
                                    "type": "OVER"
                                },
                                "sortPriority": 2,
                                "handicap": 268.5,
                                "selectionId": 11654317,
                                "runnerStatus": "ACTIVE"
                            }
                        ],
                        "numberOfRunners": 2,
                        "sgmMarket": false,
                        "canTurnInPlay": true,
                        "marketType": "ALTERNATE_TEAM_Y_TOTAL_RUNS_X",
                        "eventId": 29306490,
                        "key": "SPORTSBOOK_MARKET:924.192320299",
                        "numberOfActiveRunners": 2,
                        "eventTypeId": 4,
                        "upperLevelEventId": 28569726,
                        "productType": "SPORTSBOOK",
                        "bettingType": "MOVING_HANDICAP",
                        "numberOfWinners": 1,
                        "topLevelEventId": 28569726
                    }
                },
                {
                    "livePriceAvailable": true,
                    "bspMarket": false,
                    "marketStatus": "OPEN",
                    "hasSGM": false,
                    "guaranteedPriceAvailable": false,
                    "betDelay": 8,
                    "hasBPE": false,
                    "legTypes": [
                        "SIMPLE_SELECTION"
                    ],
                    "rule4Deductions": [],
                    "runnerDetails": [
                        {
                            "selectionId": 12533376,
                            "previousRunnerOdds": [],
                            "handicap": 0,
                            "previousWinRunnerOdds": [],
                            "winRunnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 1.12
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 1.12
                                    },
                                    "fractionalOdds": {
                                        "denominator": 8,
                                        "numerator": 1
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 8,
                                    "numerator": 1
                                }
                            },
                            "runnerStatus": "ACTIVE",
                            "runnerOrder": 10,
                            "runnerOdds": {
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "denominator": 8,
                                        "numerator": 1
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 1.12
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 1,
                                    "denominator": 8
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 1.12
                                }
                            }
                        },
                        {
                            "runnerStatus": "ACTIVE",
                            "runnerOdds": {
                                "fractionalDisplayOdds": {
                                    "denominator": 2,
                                    "numerator": 9
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "denominator": 2,
                                        "numerator": 9
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 5.5
                                    }
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 5.5
                                }
                            },
                            "runnerOrder": 20,
                            "winRunnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 5.5
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 5.5
                                    },
                                    "fractionalOdds": {
                                        "numerator": 9,
                                        "denominator": 2
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 9,
                                    "denominator": 2
                                }
                            },
                            "handicap": 0,
                            "previousWinRunnerOdds": [],
                            "selectionId": 12533375,
                            "previousRunnerOdds": []
                        }
                    ],
                    "inplay": true,
                    "bettingType": "FIXED_ODDS",
                    "eachwayAvailable": false,
                    "marketId": "924.192320266",
                    "turnInPlayEnabled": true,
                    "market": {
                        "marketStatus": "OPEN",
                        "marketTime": "2019-07-04T09:30:00.000Z",
                        "inPlay": true,
                        "bspMarket": false,
                        "marketLevels": [
                            "AVB_EVENT"
                        ],
                        "betDelay": 8,
                        "numberOfUpperLevels": 1,
                        "associatedMarkets": [],
                        "marketId": "924.192320266",
                        "sortPriority": 3620,
                        "marketName": "Team B - Batsman N to Score 50",
                        "numberOfRunners": 2,
                        "runners": [
                            {
                                "sortPriority": 1,
                                "result": [],
                                "runnerName": "Shai Hope Yes",
                                "selectionId": 12533376,
                                "runnerStatus": "ACTIVE",
                                "handicap": 0
                            },
                            {
                                "sortPriority": 2,
                                "result": [],
                                "runnerName": "Shai Hope No",
                                "runnerStatus": "ACTIVE",
                                "selectionId": 12533375,
                                "handicap": 0
                            }
                        ],
                        "canTurnInPlay": true,
                        "sgmMarket": false,
                        "marketType": "TEAM_Y_BATSMAN_X_TO_SCORE_50",
                        "eventId": 29306490,
                        "numberOfActiveRunners": 2,
                        "key": "SPORTSBOOK_MARKET:924.192320266",
                        "productType": "SPORTSBOOK",
                        "upperLevelEventId": 28569726,
                        "eventTypeId": 4,
                        "bettingType": "ODDS",
                        "topLevelEventId": 28569726,
                        "numberOfWinners": 1
                    }
                },
                {
                    "bspMarket": false,
                    "livePriceAvailable": true,
                    "hasSGM": false,
                    "marketStatus": "OPEN",
                    "guaranteedPriceAvailable": false,
                    "hasBPE": false,
                    "legTypes": [
                        "SIMPLE_SELECTION"
                    ],
                    "betDelay": 8,
                    "runnerDetails": [
                        {
                            "handicap": 275.5,
                            "previousWinRunnerOdds": [],
                            "previousRunnerOdds": [],
                            "selectionId": 11654318,
                            "runnerStatus": "ACTIVE",
                            "runnerOrder": 10,
                            "runnerOdds": {
                                "fractionalDisplayOdds": {
                                    "numerator": 8,
                                    "denominator": 13
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 1.61
                                    },
                                    "fractionalOdds": {
                                        "denominator": 13,
                                        "numerator": 8
                                    }
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 1.61
                                }
                            },
                            "winRunnerOdds": {
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 1.61
                                    },
                                    "fractionalOdds": {
                                        "numerator": 8,
                                        "denominator": 13
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 8,
                                    "denominator": 13
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 1.61
                                }
                            }
                        },
                        {
                            "runnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 2.2
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "denominator": 5,
                                        "numerator": 6
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 2.2
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 6,
                                    "denominator": 5
                                }
                            },
                            "runnerOrder": 20,
                            "runnerStatus": "ACTIVE",
                            "winRunnerOdds": {
                                "fractionalDisplayOdds": {
                                    "denominator": 5,
                                    "numerator": 6
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "denominator": 5,
                                        "numerator": 6
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 2.2
                                    }
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 2.2
                                }
                            },
                            "previousWinRunnerOdds": [],
                            "handicap": 275.5,
                            "selectionId": 11654317,
                            "previousRunnerOdds": []
                        }
                    ],
                    "inplay": true,
                    "rule4Deductions": [],
                    "bettingType": "MOVING_HANDICAP",
                    "eachwayAvailable": false,
                    "turnInPlayEnabled": true,
                    "marketId": "924.192320254",
                    "market": {
                        "bspMarket": false,
                        "inPlay": true,
                        "marketStatus": "OPEN",
                        "marketTime": "2019-07-04T09:30:00.000Z",
                        "numberOfUpperLevels": 1,
                        "betDelay": 8,
                        "marketLevels": [
                            "AVB_EVENT"
                        ],
                        "sortPriority": 280,
                        "marketId": "924.192320254",
                        "associatedMarkets": [],
                        "runners": [
                            {
                                "handicap": 284.5,
                                "selectionId": 11654318,
                                "runnerStatus": "ACTIVE",
                                "runnerName": "West Indies Under",
                                "sortPriority": 1,
                                "result": {
                                    "type": "UNDER"
                                }
                            },
                            {
                                "runnerStatus": "ACTIVE",
                                "selectionId": 11654317,
                                "handicap": 284.5,
                                "sortPriority": 2,
                                "result": {
                                    "type": "OVER"
                                },
                                "runnerName": "West Indies Over"
                            }
                        ],
                        "numberOfRunners": 2,
                        "marketName": "Alternate Team B Total Runs 1",
                        "marketType": "ALTERNATE_TEAM_Y_TOTAL_RUNS_X",
                        "sgmMarket": false,
                        "canTurnInPlay": true,
                        "eventId": 29306490,
                        "eventTypeId": 4,
                        "upperLevelEventId": 28569726,
                        "productType": "SPORTSBOOK",
                        "key": "SPORTSBOOK_MARKET:924.192320254",
                        "numberOfActiveRunners": 2,
                        "numberOfWinners": 1,
                        "topLevelEventId": 28569726,
                        "bettingType": "MOVING_HANDICAP"
                    }
                },
                {
                    "bspMarket": false,
                    "livePriceAvailable": true,
                    "guaranteedPriceAvailable": false,
                    "inplay": true,
                    "linkedMarketId": "1.159363295",
                    "bettingType": "FIXED_ODDS",
                    "eachwayAvailable": false,
                    "marketStatus": "OPEN",
                    "hasSGM": false,
                    "hasBPE": false,
                    "legTypes": [
                        "SIMPLE_SELECTION"
                    ],
                    "betDelay": 6,
                    "runnerDetails": [
                        {
                            "runnerStatus": "ACTIVE",
                            "runnerOrder": 10,
                            "runnerOdds": {
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 2.95
                                    },
                                    "fractionalOdds": {
                                        "denominator": 20,
                                        "numerator": 39
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 39,
                                    "denominator": 20
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 2.95
                                }
                            },
                            "winRunnerOdds": {
                                "fractionalDisplayOdds": {
                                    "denominator": 20,
                                    "numerator": 39
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "denominator": 20,
                                        "numerator": 39
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 2.95
                                    }
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 2.95
                                }
                            },
                            "handicap": 0,
                            "previousWinRunnerOdds": [],
                            "previousRunnerOdds": [],
                            "selectionId": 3786094
                        },
                        {
                            "winRunnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 1.41
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "numerator": 5,
                                        "denominator": 12
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 1.41
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 12,
                                    "numerator": 5
                                }
                            },
                            "runnerOdds": {
                                "fractionalDisplayOdds": {
                                    "numerator": 5,
                                    "denominator": 12
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "denominator": 12,
                                        "numerator": 5
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 1.41
                                    }
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 1.41
                                }
                            },
                            "runnerOrder": 20,
                            "runnerStatus": "ACTIVE",
                            "selectionId": 235,
                            "previousRunnerOdds": [],
                            "previousWinRunnerOdds": [],
                            "handicap": 0
                        }
                    ],
                    "rule4Deductions": [],
                    "turnInPlayEnabled": true,
                    "marketId": "924.187976227",
                    "market": {
                        "marketId": "924.187976227",
                        "associatedMarkets": [],
                        "sortPriority": 10,
                        "marketName": "Match Odds",
                        "runners": [
                            {
                                "result": {
                                    "type": "HOME"
                                },
                                "sortPriority": 1,
                                "runnerName": "Afghanistan",
                                "runnerStatus": "ACTIVE",
                                "selectionId": 3786094,
                                "handicap": 0
                            },
                            {
                                "selectionId": 235,
                                "runnerStatus": "ACTIVE",
                                "handicap": 0,
                                "result": {
                                    "type": "AWAY"
                                },
                                "sortPriority": 2,
                                "runnerName": "West Indies"
                            }
                        ],
                        "numberOfRunners": 2,
                        "inPlay": true,
                        "marketTime": "2019-07-04T09:30:00.000Z",
                        "marketStatus": "OPEN",
                        "bspMarket": false,
                        "marketLevels": [
                            "AVB_EVENT"
                        ],
                        "numberOfUpperLevels": 1,
                        "betDelay": 6,
                        "key": "SPORTSBOOK_MARKET:924.187976227",
                        "numberOfActiveRunners": 2,
                        "eventTypeId": 4,
                        "upperLevelEventId": 28569726,
                        "exchangeMarketId": "1.159363295",
                        "productType": "SPORTSBOOK",
                        "bettingType": "ODDS",
                        "numberOfWinners": 1,
                        "topLevelEventId": 28569726,
                        "sgmMarket": false,
                        "canTurnInPlay": true,
                        "marketType": "MATCH_ODDS",
                        "eventId": 29306490
                    }
                },
                {
                    "eachwayAvailable": false,
                    "turnInPlayEnabled": true,
                    "marketId": "924.192320253",
                    "inplay": true,
                    "runnerDetails": [
                        {
                            "previousWinRunnerOdds": [],
                            "handicap": 268.5,
                            "selectionId": 11654318,
                            "previousRunnerOdds": [],
                            "runnerOrder": 10,
                            "runnerOdds": {
                                "fractionalDisplayOdds": {
                                    "denominator": 6,
                                    "numerator": 5
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 1.83
                                    },
                                    "fractionalOdds": {
                                        "numerator": 5,
                                        "denominator": 6
                                    }
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 1.83
                                }
                            },
                            "runnerStatus": "ACTIVE",
                            "winRunnerOdds": {
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "numerator": 5,
                                        "denominator": 6
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 1.83
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 6,
                                    "numerator": 5
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 1.83
                                }
                            }
                        },
                        {
                            "previousWinRunnerOdds": [],
                            "handicap": 268.5,
                            "previousRunnerOdds": [],
                            "selectionId": 11654317,
                            "runnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 1.83
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 1.83
                                    },
                                    "fractionalOdds": {
                                        "numerator": 5,
                                        "denominator": 6
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 6,
                                    "numerator": 5
                                }
                            },
                            "runnerOrder": 20,
                            "runnerStatus": "ACTIVE",
                            "winRunnerOdds": {
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 1.83
                                    },
                                    "fractionalOdds": {
                                        "numerator": 5,
                                        "denominator": 6
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 5,
                                    "denominator": 6
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 1.83
                                }
                            }
                        }
                    ],
                    "rule4Deductions": [],
                    "bettingType": "MOVING_HANDICAP",
                    "guaranteedPriceAvailable": false,
                    "legTypes": [
                        "SIMPLE_SELECTION"
                    ],
                    "hasBPE": false,
                    "betDelay": 8,
                    "bspMarket": false,
                    "livePriceAvailable": true,
                    "marketStatus": "OPEN",
                    "hasSGM": false,
                    "market": {
                        "sortPriority": 18,
                        "marketId": "924.192320253",
                        "associatedMarkets": [],
                        "runners": [
                            {
                                "sortPriority": 1,
                                "result": {
                                    "type": "UNDER"
                                },
                                "runnerName": "West Indies Under",
                                "selectionId": 11654318,
                                "runnerStatus": "ACTIVE",
                                "handicap": 276.5
                            },
                            {
                                "runnerName": "West Indies Over",
                                "result": {
                                    "type": "OVER"
                                },
                                "sortPriority": 2,
                                "handicap": 276.5,
                                "selectionId": 11654317,
                                "runnerStatus": "ACTIVE"
                            }
                        ],
                        "numberOfRunners": 2,
                        "marketName": "Team B Total Runs",
                        "bspMarket": false,
                        "inPlay": true,
                        "marketStatus": "OPEN",
                        "marketTime": "2019-07-04T09:30:00.000Z",
                        "numberOfUpperLevels": 1,
                        "betDelay": 8,
                        "marketLevels": [
                            "AVB_EVENT"
                        ],
                        "eventTypeId": 4,
                        "upperLevelEventId": 28569726,
                        "productType": "SPORTSBOOK",
                        "numberOfActiveRunners": 2,
                        "key": "SPORTSBOOK_MARKET:924.192320253",
                        "numberOfWinners": 1,
                        "topLevelEventId": 28569726,
                        "bettingType": "MOVING_HANDICAP",
                        "marketType": "TEAM_X_TOTAL_RUNS",
                        "sgmMarket": false,
                        "canTurnInPlay": true,
                        "eventId": 29306490
                    }
                },
                {
                    "guaranteedPriceAvailable": false,
                    "livePriceAvailable": true,
                    "bspMarket": false,
                    "eachwayAvailable": false,
                    "inplay": true,
                    "bettingType": "FIXED_ODDS",
                    "linkedMarketId": "1.159364032",
                    "betDelay": 9,
                    "hasBPE": false,
                    "legTypes": [
                        "SIMPLE_SELECTION"
                    ],
                    "hasSGM": false,
                    "marketStatus": "OPEN",
                    "marketId": "924.192320214",
                    "turnInPlayEnabled": true,
                    "rule4Deductions": [],
                    "runnerDetails": [
                        {
                            "runnerStatus": "ACTIVE",
                            "runnerOdds": {
                                "fractionalDisplayOdds": {
                                    "numerator": 4,
                                    "denominator": 9
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 1.44
                                    },
                                    "fractionalOdds": {
                                        "numerator": 4,
                                        "denominator": 9
                                    }
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 1.44
                                }
                            },
                            "runnerOrder": 44,
                            "winRunnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 1.44
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 1.44
                                    },
                                    "fractionalOdds": {
                                        "numerator": 4,
                                        "denominator": 9
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 4,
                                    "denominator": 9
                                }
                            },
                            "handicap": 0,
                            "previousWinRunnerOdds": [],
                            "selectionId": 9397357,
                            "previousRunnerOdds": []
                        },
                        {
                            "previousRunnerOdds": [],
                            "selectionId": 11848116,
                            "handicap": 0,
                            "previousWinRunnerOdds": [],
                            "winRunnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 5
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 4,
                                    "denominator": 1
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 5
                                    },
                                    "fractionalOdds": {
                                        "numerator": 4,
                                        "denominator": 1
                                    }
                                }
                            },
                            "runnerStatus": "ACTIVE",
                            "runnerOdds": {
                                "fractionalDisplayOdds": {
                                    "numerator": 4,
                                    "denominator": 1
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 5
                                    },
                                    "fractionalOdds": {
                                        "numerator": 4,
                                        "denominator": 1
                                    }
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 5
                                }
                            },
                            "runnerOrder": 140
                        },
                        {
                            "winRunnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 7
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 7
                                    },
                                    "fractionalOdds": {
                                        "denominator": 1,
                                        "numerator": 6
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 1,
                                    "numerator": 6
                                }
                            },
                            "runnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 7
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 6,
                                    "denominator": 1
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 7
                                    },
                                    "fractionalOdds": {
                                        "denominator": 1,
                                        "numerator": 6
                                    }
                                }
                            },
                            "runnerOrder": 160,
                            "runnerStatus": "ACTIVE",
                            "selectionId": 8301169,
                            "previousRunnerOdds": [],
                            "previousWinRunnerOdds": [],
                            "handicap": 0
                        },
                        {
                            "selectionId": 11404412,
                            "previousRunnerOdds": [],
                            "handicap": 0,
                            "previousWinRunnerOdds": [],
                            "winRunnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 13
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 13
                                    },
                                    "fractionalOdds": {
                                        "denominator": 1,
                                        "numerator": 12
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 1,
                                    "numerator": 12
                                }
                            },
                            "runnerStatus": "ACTIVE",
                            "runnerOrder": 220,
                            "runnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 13
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "denominator": 1,
                                        "numerator": 12
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 13
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 1,
                                    "numerator": 12
                                }
                            }
                        },
                        {
                            "runnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 26
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 1,
                                    "numerator": 25
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 26
                                    },
                                    "fractionalOdds": {
                                        "numerator": 25,
                                        "denominator": 1
                                    }
                                }
                            },
                            "runnerOrder": 350,
                            "runnerStatus": "ACTIVE",
                            "winRunnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 26
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 1,
                                    "numerator": 25
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "numerator": 25,
                                        "denominator": 1
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 26
                                    }
                                }
                            },
                            "previousWinRunnerOdds": [],
                            "handicap": 0,
                            "selectionId": 7022519,
                            "previousRunnerOdds": []
                        },
                        {
                            "previousRunnerOdds": [],
                            "selectionId": 11848109,
                            "previousWinRunnerOdds": [],
                            "handicap": 0,
                            "winRunnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 101
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 1,
                                    "numerator": 100
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 101
                                    },
                                    "fractionalOdds": {
                                        "numerator": 100,
                                        "denominator": 1
                                    }
                                }
                            },
                            "runnerOrder": 1100,
                            "runnerOdds": {
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 101
                                    },
                                    "fractionalOdds": {
                                        "denominator": 1,
                                        "numerator": 100
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 100,
                                    "denominator": 1
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 101
                                }
                            },
                            "runnerStatus": "ACTIVE"
                        },
                        {
                            "winRunnerOdds": {
                                "fractionalDisplayOdds": {
                                    "numerator": 100,
                                    "denominator": 1
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "numerator": 100,
                                        "denominator": 1
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 101
                                    }
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 101
                                }
                            },
                            "runnerOrder": 1100,
                            "runnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 101
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 1,
                                    "numerator": 100
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 101
                                    },
                                    "fractionalOdds": {
                                        "denominator": 1,
                                        "numerator": 100
                                    }
                                }
                            },
                            "runnerStatus": "ACTIVE",
                            "selectionId": 8301164,
                            "previousRunnerOdds": [],
                            "previousWinRunnerOdds": [],
                            "handicap": 0
                        }
                    ],
                    "market": {
                        "productType": "SPORTSBOOK",
                        "exchangeMarketId": "1.159364032",
                        "eventTypeId": 4,
                        "upperLevelEventId": 28569726,
                        "numberOfActiveRunners": 8,
                        "key": "SPORTSBOOK_MARKET:924.192320214",
                        "topLevelEventId": 28569726,
                        "numberOfWinners": 1,
                        "bettingType": "ODDS",
                        "marketType": "TOP_TEAM_X_RUNSCORER",
                        "canTurnInPlay": true,
                        "sgmMarket": false,
                        "eventId": 29306490,
                        "sortPriority": 30,
                        "associatedMarkets": [],
                        "marketId": "924.192320214",
                        "numberOfRunners": 8,
                        "runners": [
                            {
                                "handicap": 0,
                                "runnerStatus": "ACTIVE",
                                "selectionId": 11848116,
                                "runnerName": "Evin Lewis",
                                "result": [],
                                "sortPriority": 1
                            },
                            {
                                "runnerStatus": "ACTIVE",
                                "selectionId": 9397357,
                                "handicap": 0,
                                "result": [],
                                "sortPriority": 2,
                                "runnerName": "Shai Hope"
                            },
                            {
                                "runnerName": "Shimron Hetmyer",
                                "result": [],
                                "sortPriority": 3,
                                "handicap": 0,
                                "runnerStatus": "ACTIVE",
                                "selectionId": 8301169
                            },
                            {
                                "sortPriority": 4,
                                "result": [],
                                "runnerName": "Nicholas Pooran",
                                "selectionId": 11404412,
                                "runnerStatus": "ACTIVE",
                                "handicap": 0
                            },
                            {
                                "handicap": 0,
                                "runnerStatus": "ACTIVE",
                                "selectionId": 7022519,
                                "runnerName": "Jason Holder",
                                "result": [],
                                "sortPriority": 5
                            },
                            {
                                "handicap": 0,
                                "runnerStatus": "ACTIVE",
                                "selectionId": 8301164,
                                "runnerName": "Fabian Allen",
                                "result": [],
                                "sortPriority": 6
                            },
                            {
                                "selectionId": 11848109,
                                "runnerStatus": "ACTIVE",
                                "handicap": 0,
                                "result": [],
                                "sortPriority": 7,
                                "runnerName": "Carlos Brathwaite"
                            },
                            {
                                "selectionId": 19626019,
                                "runnerStatus": "ACTIVE",
                                "handicap": 0,
                                "sortPriority": 8,
                                "result": [],
                                "runnerName": "Sheldon Cotterrell"
                            }
                        ],
                        "marketName": "Top West Indies Batsman",
                        "bspMarket": false,
                        "marketStatus": "OPEN",
                        "marketTime": "2019-07-04T09:30:00.000Z",
                        "inPlay": true,
                        "betDelay": 9,
                        "numberOfUpperLevels": 1,
                        "marketLevels": [
                            "AVB_EVENT"
                        ]
                    }
                },
                {
                    "bettingType": "MOVING_HANDICAP",
                    "rule4Deductions": [],
                    "runnerDetails": [
                        {
                            "winRunnerOdds": {
                                "fractionalDisplayOdds": {
                                    "numerator": 13,
                                    "denominator": 8
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 2.62
                                    },
                                    "fractionalOdds": {
                                        "denominator": 8,
                                        "numerator": 13
                                    }
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 2.62
                                }
                            },
                            "runnerOdds": {
                                "fractionalDisplayOdds": {
                                    "numerator": 13,
                                    "denominator": 8
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "numerator": 13,
                                        "denominator": 8
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 2.62
                                    }
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 2.62
                                }
                            },
                            "runnerOrder": 10,
                            "runnerStatus": "ACTIVE",
                            "selectionId": 11654318,
                            "previousRunnerOdds": [],
                            "previousWinRunnerOdds": [],
                            "handicap": 254.5
                        },
                        {
                            "winRunnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 1.44
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 4,
                                    "denominator": 9
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "denominator": 9,
                                        "numerator": 4
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 1.44
                                    }
                                }
                            },
                            "runnerStatus": "ACTIVE",
                            "runnerOrder": 20,
                            "runnerOdds": {
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "denominator": 9,
                                        "numerator": 4
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 1.44
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 9,
                                    "numerator": 4
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 1.44
                                }
                            },
                            "selectionId": 11654317,
                            "previousRunnerOdds": [],
                            "handicap": 254.5,
                            "previousWinRunnerOdds": []
                        }
                    ],
                    "inplay": true,
                    "marketId": "924.192320251",
                    "turnInPlayEnabled": true,
                    "eachwayAvailable": false,
                    "marketStatus": "OPEN",
                    "hasSGM": false,
                    "livePriceAvailable": true,
                    "bspMarket": false,
                    "betDelay": 8,
                    "legTypes": [
                        "SIMPLE_SELECTION"
                    ],
                    "hasBPE": false,
                    "guaranteedPriceAvailable": false,
                    "market": {
                        "marketName": "Alternate Team B Total Runs 4",
                        "numberOfRunners": 2,
                        "runners": [
                            {
                                "runnerName": "West Indies Under",
                                "result": {
                                    "type": "UNDER"
                                },
                                "sortPriority": 1,
                                "handicap": 260.5,
                                "runnerStatus": "ACTIVE",
                                "selectionId": 11654318
                            },
                            {
                                "runnerName": "West Indies Over",
                                "result": {
                                    "type": "OVER"
                                },
                                "sortPriority": 2,
                                "handicap": 260.5,
                                "runnerStatus": "ACTIVE",
                                "selectionId": 11654317
                            }
                        ],
                        "associatedMarkets": [],
                        "marketId": "924.192320251",
                        "sortPriority": 283,
                        "marketLevels": [
                            "AVB_EVENT"
                        ],
                        "betDelay": 8,
                        "numberOfUpperLevels": 1,
                        "marketTime": "2019-07-04T09:30:00.000Z",
                        "marketStatus": "OPEN",
                        "inPlay": true,
                        "bspMarket": false,
                        "bettingType": "MOVING_HANDICAP",
                        "topLevelEventId": 28569726,
                        "numberOfWinners": 1,
                        "key": "SPORTSBOOK_MARKET:924.192320251",
                        "numberOfActiveRunners": 2,
                        "productType": "SPORTSBOOK",
                        "upperLevelEventId": 28569726,
                        "eventTypeId": 4,
                        "eventId": 29306490,
                        "canTurnInPlay": true,
                        "sgmMarket": false,
                        "marketType": "ALTERNATE_TEAM_Y_TOTAL_RUNS_X"
                    }
                },
                {
                    "hasBPE": false,
                    "legTypes": [
                        "SIMPLE_SELECTION"
                    ],
                    "betDelay": 8,
                    "guaranteedPriceAvailable": false,
                    "hasSGM": false,
                    "marketStatus": "OPEN",
                    "bspMarket": false,
                    "livePriceAvailable": true,
                    "turnInPlayEnabled": true,
                    "marketId": "924.192560932",
                    "eachwayAvailable": false,
                    "bettingType": "FIXED_ODDS",
                    "runnerDetails": [
                        {
                            "previousWinRunnerOdds": [],
                            "runnerOdds": [],
                            "runnerOrder": 10,
                            "runnerStatus": "ACTIVE",
                            "handicap": 0,
                            "selectionId": 37302,
                            "previousRunnerOdds": []
                        },
                        {
                            "runnerOrder": 20,
                            "runnerOdds": [],
                            "previousWinRunnerOdds": [],
                            "handicap": 0,
                            "runnerStatus": "ACTIVE",
                            "selectionId": 37303,
                            "previousRunnerOdds": []
                        }
                    ],
                    "inplay": true,
                    "rule4Deductions": [],
                    "market": {
                        "runners": [
                            {
                                "sortPriority": 1,
                                "result": [],
                                "runnerName": "Yes",
                                "selectionId": 37302,
                                "runnerStatus": "ACTIVE",
                                "handicap": 0
                            },
                            {
                                "selectionId": 37303,
                                "runnerStatus": "ACTIVE",
                                "handicap": 0,
                                "sortPriority": 2,
                                "result": [],
                                "runnerName": "No"
                            }
                        ],
                        "numberOfRunners": 2,
                        "marketName": "4th Wicket Caught?",
                        "sortPriority": 510,
                        "marketId": "924.192560932",
                        "associatedMarkets": [],
                        "numberOfUpperLevels": 1,
                        "betDelay": 8,
                        "marketLevels": [
                            "AVB_EVENT"
                        ],
                        "bspMarket": false,
                        "inPlay": true,
                        "marketStatus": "OPEN",
                        "marketTime": "2019-07-04T09:30:00.000Z",
                        "numberOfWinners": 1,
                        "topLevelEventId": 28569726,
                        "bettingType": "ODDS",
                        "eventTypeId": 4,
                        "upperLevelEventId": 28569726,
                        "productType": "SPORTSBOOK",
                        "key": "SPORTSBOOK_MARKET:924.192560932",
                        "numberOfActiveRunners": 2,
                        "eventId": 29306490,
                        "marketType": "X_WICKET_CAUGHT",
                        "sgmMarket": false,
                        "canTurnInPlay": true
                    }
                },
                {
                    "bettingType": "FIXED_ODDS",
                    "inplay": true,
                    "runnerDetails": [
                        {
                            "runnerStatus": "ACTIVE",
                            "handicap": 0,
                            "runnerOrder": 10,
                            "runnerOdds": [],
                            "previousWinRunnerOdds": [],
                            "selectionId": 37302,
                            "previousRunnerOdds": []
                        },
                        {
                            "runnerOrder": 20,
                            "runnerOdds": [],
                            "previousWinRunnerOdds": [],
                            "handicap": 0,
                            "runnerStatus": "ACTIVE",
                            "previousRunnerOdds": [],
                            "selectionId": 37303
                        }
                    ],
                    "rule4Deductions": [],
                    "turnInPlayEnabled": true,
                    "marketId": "924.192316843",
                    "eachwayAvailable": false,
                    "marketStatus": "OPEN",
                    "hasSGM": false,
                    "bspMarket": false,
                    "livePriceAvailable": true,
                    "legTypes": [
                        "SIMPLE_SELECTION"
                    ],
                    "hasBPE": false,
                    "betDelay": 8,
                    "guaranteedPriceAvailable": false,
                    "market": {
                        "runners": [
                            {
                                "runnerName": "Yes",
                                "result": [],
                                "sortPriority": 1,
                                "handicap": 0,
                                "runnerStatus": "ACTIVE",
                                "selectionId": 37302
                            },
                            {
                                "runnerName": "No",
                                "result": [],
                                "sortPriority": 2,
                                "handicap": 0,
                                "selectionId": 37303,
                                "runnerStatus": "ACTIVE"
                            }
                        ],
                        "numberOfRunners": 2,
                        "marketName": "3rd Wicket Caught?*",
                        "sortPriority": 520,
                        "marketId": "924.192316843",
                        "associatedMarkets": [],
                        "numberOfUpperLevels": 1,
                        "betDelay": 8,
                        "marketLevels": [
                            "AVB_EVENT"
                        ],
                        "bspMarket": false,
                        "inPlay": true,
                        "marketTime": "2019-07-04T09:30:00.000Z",
                        "marketStatus": "OPEN",
                        "numberOfWinners": 1,
                        "topLevelEventId": 28569726,
                        "bettingType": "ODDS",
                        "eventTypeId": 4,
                        "upperLevelEventId": 28569726,
                        "productType": "SPORTSBOOK",
                        "numberOfActiveRunners": 2,
                        "key": "SPORTSBOOK_MARKET:924.192316843",
                        "eventId": 29306490,
                        "marketType": "X_WICKET_CAUGHT",
                        "sgmMarket": false,
                        "canTurnInPlay": true
                    }
                },
                {
                    "hasSGM": false,
                    "marketStatus": "OPEN",
                    "bspMarket": false,
                    "livePriceAvailable": true,
                    "hasBPE": false,
                    "legTypes": [
                        "SIMPLE_SELECTION"
                    ],
                    "betDelay": 8,
                    "guaranteedPriceAvailable": false,
                    "bettingType": "MOVING_HANDICAP",
                    "inplay": true,
                    "runnerDetails": [
                        {
                            "selectionId": 12123518,
                            "previousRunnerOdds": [],
                            "previousWinRunnerOdds": [],
                            "handicap": 69.5,
                            "winRunnerOdds": {
                                "fractionalDisplayOdds": {
                                    "denominator": 4,
                                    "numerator": 5
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 2.25
                                    },
                                    "fractionalOdds": {
                                        "numerator": 5,
                                        "denominator": 4
                                    }
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 2.25
                                }
                            },
                            "runnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 2.25
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "denominator": 4,
                                        "numerator": 5
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 2.25
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 5,
                                    "denominator": 4
                                }
                            },
                            "runnerOrder": 10,
                            "runnerStatus": "ACTIVE"
                        },
                        {
                            "runnerStatus": "ACTIVE",
                            "runnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 1.57
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "denominator": 7,
                                        "numerator": 4
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 1.57
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 7,
                                    "numerator": 4
                                }
                            },
                            "runnerOrder": 20,
                            "winRunnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 1.57
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 7,
                                    "numerator": 4
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "numerator": 4,
                                        "denominator": 7
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 1.57
                                    }
                                }
                            },
                            "handicap": 69.5,
                            "previousWinRunnerOdds": [],
                            "selectionId": 12123517,
                            "previousRunnerOdds": []
                        }
                    ],
                    "rule4Deductions": [],
                    "turnInPlayEnabled": true,
                    "marketId": "924.192320357",
                    "eachwayAvailable": false,
                    "market": {
                        "bspMarket": false,
                        "marketStatus": "OPEN",
                        "marketTime": "2019-07-04T09:30:00.000Z",
                        "inPlay": true,
                        "betDelay": 8,
                        "numberOfUpperLevels": 1,
                        "marketLevels": [
                            "AVB_EVENT"
                        ],
                        "sortPriority": 4440,
                        "associatedMarkets": [],
                        "marketId": "924.192320357",
                        "numberOfRunners": 2,
                        "runners": [
                            {
                                "sortPriority": 1,
                                "result": {
                                    "type": "UNDER"
                                },
                                "runnerName": "Shai Hope Under",
                                "runnerStatus": "ACTIVE",
                                "selectionId": 12123518,
                                "handicap": 51.5
                            },
                            {
                                "handicap": 51.5,
                                "selectionId": 12123517,
                                "runnerStatus": "ACTIVE",
                                "runnerName": "Shai Hope Over",
                                "result": {
                                    "type": "OVER"
                                },
                                "sortPriority": 2
                            }
                        ],
                        "marketName": "Alternate Team B Batsman N Total Runs.",
                        "marketType": "ALTERNATE_TEAM_Y_BATSMAN_X_TOTAL_RUNS",
                        "canTurnInPlay": true,
                        "sgmMarket": false,
                        "eventId": 29306490,
                        "productType": "SPORTSBOOK",
                        "upperLevelEventId": 28569726,
                        "eventTypeId": 4,
                        "numberOfActiveRunners": 2,
                        "key": "SPORTSBOOK_MARKET:924.192320357",
                        "topLevelEventId": 28569726,
                        "numberOfWinners": 1,
                        "bettingType": "MOVING_HANDICAP"
                    }
                },
                {
                    "legTypes": [
                        "SIMPLE_SELECTION"
                    ],
                    "hasBPE": false,
                    "betDelay": 8,
                    "guaranteedPriceAvailable": false,
                    "hasSGM": false,
                    "marketStatus": "OPEN",
                    "bspMarket": false,
                    "livePriceAvailable": true,
                    "turnInPlayEnabled": true,
                    "marketId": "924.192320220",
                    "eachwayAvailable": false,
                    "bettingType": "FIXED_ODDS",
                    "runnerDetails": [
                        {
                            "runnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 1.9
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 1.9
                                    },
                                    "fractionalOdds": {
                                        "numerator": 10,
                                        "denominator": 11
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 10,
                                    "denominator": 11
                                }
                            },
                            "runnerOrder": 90,
                            "runnerStatus": "ACTIVE",
                            "winRunnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 1.9
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 1.9
                                    },
                                    "fractionalOdds": {
                                        "numerator": 10,
                                        "denominator": 11
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 11,
                                    "numerator": 10
                                }
                            },
                            "previousWinRunnerOdds": [],
                            "handicap": 0,
                            "previousRunnerOdds": [],
                            "selectionId": 9397357
                        },
                        {
                            "previousRunnerOdds": [],
                            "selectionId": 8328358,
                            "previousWinRunnerOdds": [],
                            "handicap": 0,
                            "winRunnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 9
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 9
                                    },
                                    "fractionalOdds": {
                                        "denominator": 1,
                                        "numerator": 8
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 1,
                                    "numerator": 8
                                }
                            },
                            "runnerOrder": 180,
                            "runnerOdds": {
                                "fractionalDisplayOdds": {
                                    "denominator": 1,
                                    "numerator": 8
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 9
                                    },
                                    "fractionalOdds": {
                                        "numerator": 8,
                                        "denominator": 1
                                    }
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 9
                                }
                            },
                            "runnerStatus": "ACTIVE"
                        },
                        {
                            "selectionId": 8094895,
                            "previousRunnerOdds": [],
                            "handicap": 0,
                            "previousWinRunnerOdds": [],
                            "winRunnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 9.5
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 2,
                                    "numerator": 17
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 9.5
                                    },
                                    "fractionalOdds": {
                                        "denominator": 2,
                                        "numerator": 17
                                    }
                                }
                            },
                            "runnerStatus": "ACTIVE",
                            "runnerOrder": 185,
                            "runnerOdds": {
                                "fractionalDisplayOdds": {
                                    "denominator": 2,
                                    "numerator": 17
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 9.5
                                    },
                                    "fractionalOdds": {
                                        "numerator": 17,
                                        "denominator": 2
                                    }
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 9.5
                                }
                            }
                        },
                        {
                            "runnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 10
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "denominator": 1,
                                        "numerator": 9
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 10
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 9,
                                    "denominator": 1
                                }
                            },
                            "runnerOrder": 190,
                            "runnerStatus": "ACTIVE",
                            "winRunnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 10
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "numerator": 9,
                                        "denominator": 1
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 10
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 9,
                                    "denominator": 1
                                }
                            },
                            "previousWinRunnerOdds": [],
                            "handicap": 0,
                            "selectionId": 8301169,
                            "previousRunnerOdds": []
                        },
                        {
                            "previousRunnerOdds": [],
                            "selectionId": 21011556,
                            "previousWinRunnerOdds": [],
                            "handicap": 0,
                            "winRunnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 12
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 11,
                                    "denominator": 1
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 12
                                    },
                                    "fractionalOdds": {
                                        "numerator": 11,
                                        "denominator": 1
                                    }
                                }
                            },
                            "runnerOdds": {
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 12
                                    },
                                    "fractionalOdds": {
                                        "denominator": 1,
                                        "numerator": 11
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 11,
                                    "denominator": 1
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 12
                                }
                            },
                            "runnerOrder": 210,
                            "runnerStatus": "ACTIVE"
                        },
                        {
                            "handicap": 0,
                            "previousWinRunnerOdds": [],
                            "selectionId": 11848116,
                            "previousRunnerOdds": [],
                            "runnerStatus": "ACTIVE",
                            "runnerOdds": {
                                "fractionalDisplayOdds": {
                                    "numerator": 12,
                                    "denominator": 1
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 13
                                    },
                                    "fractionalOdds": {
                                        "numerator": 12,
                                        "denominator": 1
                                    }
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 13
                                }
                            },
                            "runnerOrder": 220,
                            "winRunnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 13
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 1,
                                    "numerator": 12
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "numerator": 12,
                                        "denominator": 1
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 13
                                    }
                                }
                            }
                        },
                        {
                            "handicap": 0,
                            "previousWinRunnerOdds": [],
                            "selectionId": 20233373,
                            "previousRunnerOdds": [],
                            "runnerStatus": "ACTIVE",
                            "runnerOdds": {
                                "fractionalDisplayOdds": {
                                    "numerator": 14,
                                    "denominator": 1
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "denominator": 1,
                                        "numerator": 14
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 15
                                    }
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 15
                                }
                            },
                            "runnerOrder": 240,
                            "winRunnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 15
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 15
                                    },
                                    "fractionalOdds": {
                                        "denominator": 1,
                                        "numerator": 14
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 14,
                                    "denominator": 1
                                }
                            }
                        },
                        {
                            "previousRunnerOdds": [],
                            "selectionId": 4686565,
                            "previousWinRunnerOdds": [],
                            "handicap": 0,
                            "winRunnerOdds": {
                                "fractionalDisplayOdds": {
                                    "numerator": 16,
                                    "denominator": 1
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 17
                                    },
                                    "fractionalOdds": {
                                        "denominator": 1,
                                        "numerator": 16
                                    }
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 17
                                }
                            },
                            "runnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 17
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 17
                                    },
                                    "fractionalOdds": {
                                        "numerator": 16,
                                        "denominator": 1
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 1,
                                    "numerator": 16
                                }
                            },
                            "runnerOrder": 260,
                            "runnerStatus": "ACTIVE"
                        },
                        {
                            "runnerStatus": "ACTIVE",
                            "runnerOrder": 300,
                            "runnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 21
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "denominator": 1,
                                        "numerator": 20
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 21
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 1,
                                    "numerator": 20
                                }
                            },
                            "winRunnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 21
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 1,
                                    "numerator": 20
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 21
                                    },
                                    "fractionalOdds": {
                                        "numerator": 20,
                                        "denominator": 1
                                    }
                                }
                            },
                            "handicap": 0,
                            "previousWinRunnerOdds": [],
                            "previousRunnerOdds": [],
                            "selectionId": 11404412
                        },
                        {
                            "selectionId": 6648218,
                            "previousRunnerOdds": [],
                            "handicap": 0,
                            "previousWinRunnerOdds": [],
                            "winRunnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 31
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 30,
                                    "denominator": 1
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "denominator": 1,
                                        "numerator": 30
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 31
                                    }
                                }
                            },
                            "runnerStatus": "ACTIVE",
                            "runnerOrder": 400,
                            "runnerOdds": {
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "denominator": 1,
                                        "numerator": 30
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 31
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 1,
                                    "numerator": 30
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 31
                                }
                            }
                        },
                        {
                            "runnerStatus": "ACTIVE",
                            "runnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 51
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "numerator": 50,
                                        "denominator": 1
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 51
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 1,
                                    "numerator": 50
                                }
                            },
                            "runnerOrder": 600,
                            "winRunnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 51
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 1,
                                    "numerator": 50
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 51
                                    },
                                    "fractionalOdds": {
                                        "denominator": 1,
                                        "numerator": 50
                                    }
                                }
                            },
                            "handicap": 0,
                            "previousWinRunnerOdds": [],
                            "selectionId": 7022519,
                            "previousRunnerOdds": []
                        },
                        {
                            "selectionId": 22940146,
                            "previousRunnerOdds": [],
                            "previousWinRunnerOdds": [],
                            "handicap": 0,
                            "winRunnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 81
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "numerator": 80,
                                        "denominator": 1
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 81
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 1,
                                    "numerator": 80
                                }
                            },
                            "runnerOrder": 900,
                            "runnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 81
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "denominator": 1,
                                        "numerator": 80
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 81
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 1,
                                    "numerator": 80
                                }
                            },
                            "runnerStatus": "ACTIVE"
                        },
                        {
                            "runnerStatus": "ACTIVE",
                            "runnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 101
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 100,
                                    "denominator": 1
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "denominator": 1,
                                        "numerator": 100
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 101
                                    }
                                }
                            },
                            "runnerOrder": 1100,
                            "winRunnerOdds": {
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 101
                                    },
                                    "fractionalOdds": {
                                        "numerator": 100,
                                        "denominator": 1
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 100,
                                    "denominator": 1
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 101
                                }
                            },
                            "handicap": 0,
                            "previousWinRunnerOdds": [],
                            "previousRunnerOdds": [],
                            "selectionId": 11848109
                        },
                        {
                            "runnerStatus": "ACTIVE",
                            "runnerOrder": 1100,
                            "runnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 101
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 1,
                                    "numerator": 100
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "numerator": 100,
                                        "denominator": 1
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 101
                                    }
                                }
                            },
                            "winRunnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 101
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 101
                                    },
                                    "fractionalOdds": {
                                        "numerator": 100,
                                        "denominator": 1
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 100,
                                    "denominator": 1
                                }
                            },
                            "handicap": 0,
                            "previousWinRunnerOdds": [],
                            "previousRunnerOdds": [],
                            "selectionId": 6648216
                        },
                        {
                            "previousWinRunnerOdds": [],
                            "handicap": 0,
                            "selectionId": 18091605,
                            "previousRunnerOdds": [],
                            "runnerOrder": 1100,
                            "runnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 101
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 101
                                    },
                                    "fractionalOdds": {
                                        "denominator": 1,
                                        "numerator": 100
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 100,
                                    "denominator": 1
                                }
                            },
                            "runnerStatus": "ACTIVE",
                            "winRunnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 101
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "numerator": 100,
                                        "denominator": 1
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 101
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 1,
                                    "numerator": 100
                                }
                            }
                        },
                        {
                            "handicap": 0,
                            "previousWinRunnerOdds": [],
                            "previousRunnerOdds": [],
                            "selectionId": 10831166,
                            "runnerStatus": "ACTIVE",
                            "runnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 101
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 1,
                                    "numerator": 100
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "denominator": 1,
                                        "numerator": 100
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 101
                                    }
                                }
                            },
                            "runnerOrder": 1100,
                            "winRunnerOdds": {
                                "fractionalDisplayOdds": {
                                    "denominator": 1,
                                    "numerator": 100
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "numerator": 100,
                                        "denominator": 1
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 101
                                    }
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 101
                                }
                            }
                        },
                        {
                            "selectionId": 8301164,
                            "previousRunnerOdds": [],
                            "handicap": 0,
                            "previousWinRunnerOdds": [],
                            "winRunnerOdds": {
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 101
                                    },
                                    "fractionalOdds": {
                                        "denominator": 1,
                                        "numerator": 100
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 100,
                                    "denominator": 1
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 101
                                }
                            },
                            "runnerStatus": "ACTIVE",
                            "runnerOdds": {
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 101
                                    },
                                    "fractionalOdds": {
                                        "numerator": 100,
                                        "denominator": 1
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 1,
                                    "numerator": 100
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 101
                                }
                            },
                            "runnerOrder": 1100
                        }
                    ],
                    "inplay": true,
                    "rule4Deductions": [],
                    "market": {
                        "marketTime": "2019-07-04T09:30:00.000Z",
                        "marketStatus": "OPEN",
                        "inPlay": true,
                        "bspMarket": false,
                        "marketLevels": [
                            "AVB_EVENT"
                        ],
                        "betDelay": 8,
                        "numberOfUpperLevels": 1,
                        "associatedMarkets": [],
                        "marketId": "924.192320220",
                        "sortPriority": 570,
                        "marketName": "Top Match Batsman",
                        "numberOfRunners": 16,
                        "runners": [
                            {
                                "runnerStatus": "ACTIVE",
                                "selectionId": 11848116,
                                "handicap": 0,
                                "sortPriority": 1,
                                "result": [],
                                "runnerName": "Evin Lewis"
                            },
                            {
                                "handicap": 0,
                                "selectionId": 9397357,
                                "runnerStatus": "ACTIVE",
                                "runnerName": "Shai Hope",
                                "sortPriority": 2,
                                "result": []
                            },
                            {
                                "handicap": 0,
                                "runnerStatus": "ACTIVE",
                                "selectionId": 8328358,
                                "runnerName": "Rahmat Shah",
                                "result": [],
                                "sortPriority": 3
                            },
                            {
                                "handicap": 0,
                                "runnerStatus": "ACTIVE",
                                "selectionId": 8094895,
                                "runnerName": "Gulbadin Naib",
                                "sortPriority": 4,
                                "result": []
                            },
                            {
                                "sortPriority": 5,
                                "result": [],
                                "runnerName": "Shimron Hetmyer",
                                "runnerStatus": "ACTIVE",
                                "selectionId": 8301169,
                                "handicap": 0
                            },
                            {
                                "result": [],
                                "sortPriority": 6,
                                "runnerName": "Ikram Ali Khil",
                                "runnerStatus": "ACTIVE",
                                "selectionId": 21011556,
                                "handicap": 0
                            },
                            {
                                "handicap": 0,
                                "selectionId": 20233373,
                                "runnerStatus": "ACTIVE",
                                "runnerName": "Asghar Afghan",
                                "sortPriority": 7,
                                "result": []
                            },
                            {
                                "runnerName": "Mohammad Nabi",
                                "result": [],
                                "sortPriority": 8,
                                "handicap": 0,
                                "selectionId": 4686565,
                                "runnerStatus": "ACTIVE"
                            },
                            {
                                "result": [],
                                "sortPriority": 9,
                                "runnerName": "Nicholas Pooran",
                                "runnerStatus": "ACTIVE",
                                "selectionId": 11404412,
                                "handicap": 0
                            },
                            {
                                "runnerStatus": "ACTIVE",
                                "selectionId": 6648218,
                                "handicap": 0,
                                "sortPriority": 10,
                                "result": [],
                                "runnerName": "Najibullah Zadran"
                            },
                            {
                                "handicap": 0,
                                "runnerStatus": "ACTIVE",
                                "selectionId": 7022519,
                                "runnerName": "Jason Holder",
                                "sortPriority": 11,
                                "result": []
                            },
                            {
                                "sortPriority": 12,
                                "result": [],
                                "runnerName": "Rashid Khan",
                                "runnerStatus": "ACTIVE",
                                "selectionId": 10831166,
                                "handicap": 0
                            },
                            {
                                "handicap": 0,
                                "runnerStatus": "ACTIVE",
                                "selectionId": 8301164,
                                "runnerName": "Fabian Allen",
                                "sortPriority": 13,
                                "result": []
                            },
                            {
                                "sortPriority": 14,
                                "result": [],
                                "runnerName": "Samiullah Shinwari",
                                "runnerStatus": "ACTIVE",
                                "selectionId": 22940146,
                                "handicap": 0
                            },
                            {
                                "handicap": 0,
                                "runnerStatus": "ACTIVE",
                                "selectionId": 6648216,
                                "runnerName": "Dawlat Zadran",
                                "sortPriority": 15,
                                "result": []
                            },
                            {
                                "handicap": 0,
                                "runnerStatus": "ACTIVE",
                                "selectionId": 11848109,
                                "runnerName": "Carlos Brathwaite",
                                "result": [],
                                "sortPriority": 16
                            }
                        ],
                        "canTurnInPlay": true,
                        "sgmMarket": false,
                        "marketType": "TOP_MATCH_BATSMAN",
                        "eventId": 29306490,
                        "numberOfActiveRunners": 16,
                        "key": "SPORTSBOOK_MARKET:924.192320220",
                        "productType": "SPORTSBOOK",
                        "upperLevelEventId": 28569726,
                        "eventTypeId": 4,
                        "bettingType": "ODDS",
                        "topLevelEventId": 28569726,
                        "numberOfWinners": 1
                    }
                },
                {
                    "guaranteedPriceAvailable": false,
                    "betDelay": 8,
                    "legTypes": [
                        "SIMPLE_SELECTION"
                    ],
                    "hasBPE": false,
                    "livePriceAvailable": true,
                    "bspMarket": false,
                    "hasSGM": false,
                    "marketStatus": "OPEN",
                    "eachwayAvailable": false,
                    "marketId": "924.192316828",
                    "turnInPlayEnabled": true,
                    "rule4Deductions": [],
                    "runnerDetails": [
                        {
                            "handicap": 78.5,
                            "previousWinRunnerOdds": [],
                            "previousRunnerOdds": [],
                            "selectionId": 12123518,
                            "runnerStatus": "ACTIVE",
                            "runnerOdds": {
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 1.9
                                    },
                                    "fractionalOdds": {
                                        "denominator": 11,
                                        "numerator": 10
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "denominator": 11,
                                    "numerator": 10
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 1.9
                                }
                            },
                            "runnerOrder": 10,
                            "winRunnerOdds": {
                                "decimalDisplayOdds": {
                                    "decimalOdds": 1.9
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 1.9
                                    },
                                    "fractionalOdds": {
                                        "denominator": 11,
                                        "numerator": 10
                                    }
                                },
                                "fractionalDisplayOdds": {
                                    "numerator": 10,
                                    "denominator": 11
                                }
                            }
                        },
                        {
                            "previousRunnerOdds": [],
                            "selectionId": 12123517,
                            "previousWinRunnerOdds": [],
                            "handicap": 78.5,
                            "winRunnerOdds": {
                                "fractionalDisplayOdds": {
                                    "numerator": 10,
                                    "denominator": 11
                                },
                                "trueOdds": {
                                    "fractionalOdds": {
                                        "numerator": 10,
                                        "denominator": 11
                                    },
                                    "decimalOdds": {
                                        "decimalOdds": 1.9
                                    }
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 1.9
                                }
                            },
                            "runnerOdds": {
                                "fractionalDisplayOdds": {
                                    "numerator": 10,
                                    "denominator": 11
                                },
                                "trueOdds": {
                                    "decimalOdds": {
                                        "decimalOdds": 1.9
                                    },
                                    "fractionalOdds": {
                                        "denominator": 11,
                                        "numerator": 10
                                    }
                                },
                                "decimalDisplayOdds": {
                                    "decimalOdds": 1.9
                                }
                            },
                            "runnerOrder": 20,
                            "runnerStatus": "ACTIVE"
                        }
                    ],
                    "inplay": true,
                    "bettingType": "MOVING_HANDICAP",
                    "market": {
                        "betDelay": 8,
                        "numberOfUpperLevels": 1,
                        "marketLevels": [
                            "AVB_EVENT"
                        ],
                        "bspMarket": false,
                        "marketStatus": "OPEN",
                        "marketTime": "2019-07-04T09:30:00.000Z",
                        "inPlay": true,
                        "numberOfRunners": 2,
                        "runners": [
                            {
                                "sortPriority": 1,
                                "result": {
                                    "type": "UNDER"
                                },
                                "runnerName": "Shai Hope Under",
                                "selectionId": 12123518,
                                "runnerStatus": "ACTIVE",
                                "handicap": 60.5
                            },
                            {
                                "handicap": 60.5,
                                "selectionId": 12123517,
                                "runnerStatus": "ACTIVE",
                                "runnerName": "Shai Hope Over",
                                "result": {
                                    "type": "OVER"
                                },
                                "sortPriority": 2
                            }
                        ],
                        "marketName": "Team B - Batsman N Total Runs",
                        "sortPriority": 2020,
                        "associatedMarkets": [],
                        "marketId": "924.192316828",
                        "eventId": 29306490,
                        "marketType": "TEAM_Y_BATSMAN_X_TOTAL_RUNS",
                        "canTurnInPlay": true,
                        "sgmMarket": false,
                        "topLevelEventId": 28569726,
                        "numberOfWinners": 1,
                        "bettingType": "MOVING_HANDICAP",
                        "productType": "SPORTSBOOK",
                        "eventTypeId": 4,
                        "upperLevelEventId": 28569726,
                        "numberOfActiveRunners": 2,
                        "key": "SPORTSBOOK_MARKET:924.192316828"
                    }
                }
            ],
            "markets_updated_at": "1562238803"
        }
    ]
}
// res.send(data)
}
https://api.betsapi.com/v1/betfair/sb/inplay?sport_id=4&token=24341-Ify9jnhltifRBb

module.exports.matches = async (req, res) => {

    unirest.get("https://api.betsapi.com/v1/betfair/sb/inplay?sport_id=4&token=26768-Cq2cTYwNJG2I7u")

        .end(function (result) {
            res.send(result.body)
        });

}
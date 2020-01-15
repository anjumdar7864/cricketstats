const express = require('express');
const router = express.Router();
const cricController = require('../controllers/cricController')

router.get('/matchesList', cricController.matchesList)

router.post('/matchDetail', cricController.matchData)


router.post('/liveOrHighlightMatchData', cricController.liveOrHighlightsMatchData)

router.post('/scoreCard', cricController.scoreCards)

router.get('/odds/:eventId', cricController.odds)

router.get('/scrap', cricController.scrapdata)

router.get('/matches', cricController.matches)


module.exports = router;
const express = require("express");
const router = express.Router();
const wikiController = require('./controllers/wikiController')

router.get('/', wikiController.getAll)
router.get('/:id', wikiController.findCharacter)
router.post('/characters', wikiController.createNew)
router.delete('/characters/:id', wikiController.deleteCharacter)
router.put('/characters/:id', wikiController.update)

module.exports = router
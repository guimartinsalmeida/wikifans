const express = require("express");
const router = express.Router();
const charactersMiddleware = require('./middleware/charactersMiddleware')
const wikiController = require('./controllers/wikiController')

router.get('/', wikiController.getAll)
router.get('/:id', wikiController.findCharacter)
router.post('/characters', charactersMiddleware.characterFieldsValidation, wikiController.createNew)
router.delete('/characters/:id', wikiController.deleteCharacter)
router.put('/characters/:id', charactersMiddleware.characterFieldsValidation, wikiController.update)

module.exports = router
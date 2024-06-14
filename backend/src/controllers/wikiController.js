const wikiModel = require('../models/wikiModel')

const getAll = async (_req, res) =>{
  const [getAllCharacters] = await wikiModel.getAll()
  return res.status(200).json(getAllCharacters)
}

const findCharacter = async(req,res) =>{
  const {id} = req.params
  const [findCharacters] = await wikiModel.findIndex(id)
  return res.status(200).json(findCharacters)
}

const createNew = async (req, res) =>{
  const createNewCharacter = await wikiModel.createNew(req.body)
  return res.status(200).json(createNewCharacter)
}

const update = async(req, res) => {
  const {id} = req.params
  await wikiModel.updateCharacter(id, req.body)
  return res.status(200).json()
}

const deleteCharacter = async(req,res) =>{
   await wikiModel.deleteRegistry(req.params)
  return res.status(200).json()
}

module.exports = {
  getAll,
  createNew,
  deleteCharacter,
  update,
  findCharacter
}
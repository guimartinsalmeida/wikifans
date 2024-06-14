const connection = require('./connection')


const getAll = async () => {
  const getAllWikiCharacters = await connection.execute('SELECT * FROM characters')
  return getAllWikiCharacters
}

const findIndex = async (id) => {
  const findIndexCharacterQuery = 'SELECT * FROM characters WHERE id = ?'
  const findIndexCharacter = await connection.execute(findIndexCharacterQuery, [id])
  return findIndexCharacter
}

const createNew = async (charactersInfo) => {
  const {name, actor_name, age, height, nickname, main_quote, additional_info, characters_img } = charactersInfo
  const createNewCharacterQuery = 'INSERT INTO characters(name, actor_name, age, height, nickname, main_quote, additional_info, characters_img) VALUES(?,?,?,?,?,?,?, ?)'
  const createNewCharacter = await connection.execute( createNewCharacterQuery, [name, actor_name, age, height, nickname, main_quote, additional_info, characters_img])
  return  createNewCharacter
}

const updateCharacter = async (id, charactersInfo)=>{
  const {name, actor_name, age, height, nickname, main_quote, additional_info, characters_img } = charactersInfo
  const updateCharacterQuery = 'UPDATE characters SET name = ?, actor_name = ?, age = ?, height = ?, nickname = ?, main_quote = ?, additional_info = ?, characters_img = ? WHERE id = ?'
  const updateCharacter = await connection.execute(updateCharacterQuery, [name, actor_name, age, height, nickname, main_quote, additional_info, characters_img, id ])
  return updateCharacter
}

const deleteRegistry = async (characterId) =>{ 
  const {id} = characterId
  const deleteCharacterQuery = 'DELETE FROM characters WHERE id = ?'
  const deleteCharacter = await connection.execute(deleteCharacterQuery, [id])

  return deleteCharacter

}

module.exports ={
  getAll,
  createNew,
  deleteRegistry,
  updateCharacter,
  findIndex
}
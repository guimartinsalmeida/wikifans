
import {CharacterUpdate} from '../types/CharacterUpdate'
export default async function updateCharacter(id:number, update: CharacterUpdate ){
  try {
    const updateData = await fetch(`http://localhost:3333/characters/${id}`,{
      method:'PUT',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(update)
    })
    if(updateData.ok){
      console.log('data updated succesfuly')
    }
  } catch (error) {
    console.log(error)
  }
}
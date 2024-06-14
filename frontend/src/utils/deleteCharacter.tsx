
export default async function deleteCharacter (id: number){
  
  try {
    const deleteData = await fetch(`http://localhost:3333/characters/${id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
      },
    })

    if(deleteData.ok){
      console.log('succesfuly deleted')
    }
    
  } catch (error) {
    console.log(error)
  }
}

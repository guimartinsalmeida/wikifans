import {motion} from 'framer-motion'
import deleteCharacter from '../utils/deleteCharacter';
import {useNavigate } from 'react-router-dom';
interface Character {
  id: number;
  name: string;
  actor_name: string;
  age: string;
  height: string;
  nickname: string;
  main_quote: string;
  additional_info: string;
  characters_img: string;
}
const CharacterCards = ({characters} : {characters: Character}) => {
  const navigate = useNavigate()

  const handleClick = () =>{
    navigate(`/more-info/${characters.id}`)
  }
  return (
    <div>
        <motion.div
        initial={{ scale: 0, y: -260 }}
        animate={{ y: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 20
        }}
       >
          <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{
          type: "spring",
          stiffness: 400,
          damping: 20
        }} className='flex flex-col justify-around items-center w-72 h-72 m-2 bg-custom-red rounded-xl' key={characters.id}>
            <p>
              <b>{characters.name}</b>
              </p>
            <img
            className='w-4/5 h-2/4 rounded-xl'
              src={characters.characters_img}
              alt={characters.name} />
              <p>Idade: {characters.age}</p>
              <p>Ator: {characters.actor_name}</p>
          </motion.div>

          <div style={{display:'flex', justifyContent:'space-evenly', alignItems:'center'}}>

            <motion.button 
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
             transition={{
             type: "spring",
             stiffness: 400,
             damping: 20
           }}
            className='text-white w-20 h-8 text-xs bg-custom-black hover:bg-black border-none rounded'
             onClick={() => deleteCharacter(characters.id)}>
              Delete 🗑️
            </motion.button>
            <motion.button
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
             transition={{
             type: "spring",
             stiffness: 400,
             damping: 20
           }} className='flex justify-center items-center py-2 px-4 bg-green-600 text-white font-semibold rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2no-underline text-white h-7 rounded bg-green-600 hover:bg-green-700'  onClick={()=> handleClick()}>Mais Informacoes</motion.button>
          </div>
        </motion.div>
          
    </div>
  )
}

export default CharacterCards

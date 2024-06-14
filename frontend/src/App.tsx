import { useEffect, useContext } from 'react';
import './App.css';
import {useNavigate} from 'react-router-dom'
import CharacterCards from './Components/CharacterCards';
import {CharactersContext} from './context/CharactersContext'
import { CharactersType } from './types/CharactersType';
import {motion} from 'framer-motion'


function App() {
  const characterContextProvider = useContext(CharactersContext);
  const navigate = useNavigate()
  if (!characterContextProvider) {
    throw new Error("PlayContext must be used within a GameProvider");
  }
  const {characters, setCharacters} = characterContextProvider

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3333/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: CharactersType[] = await response.json();
        setCharacters(data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, [characters, setCharacters]);

  const handleClick = () =>{
    console.log()
    navigate('/new')
  }
  
  return (
    <div>
<div style={{display:'flex', justifyContent:'flex-end', alignItems:'center'}}>

<motion.button
style={{background:'#c11c24', border:'none', borderRadius:'4px', alignItems:'baseline', width:'120px', height:'40px'}}
whileHover={{ scale: 1.1 }}
whileTap={{ scale: 0.9 }}
onClick={() => handleClick()}
>
 Create new ➕
</motion.button>
</div>
    <div>
     
        <h1 style={{textTransform:'uppercase', fontWeight:'bold', color:'#c11c24', fontSize:'80px', margin:'0px'}}>Suits</h1>
    
    <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
      {characters.map((character, i) => (
        <CharacterCards key={i}  characters={character}/>
      ))}
</div>
    </div>
    </div>
  );
}

export default App;

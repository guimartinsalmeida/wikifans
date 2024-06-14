// CharactersContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

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

interface CharactersContextProps {
  characters: Character[];
  setCharacters: React.Dispatch<React.SetStateAction<Character[]>>;
}

const CharactersContext = createContext<CharactersContextProps | undefined>(undefined);

const CharactersProvider = ({ children }: { children: ReactNode }) => {
  const [characters, setCharacters] = useState<Character[]>([]);

  return (
    <CharactersContext.Provider value={{ characters, setCharacters }}>
      {children}
    </CharactersContext.Provider>
  );
};

export { CharactersContext, CharactersProvider };

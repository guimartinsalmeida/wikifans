import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CharactersContext } from "../context/CharactersContext";

const MoreInformation = () => {
  const characterContextProvider = useContext(CharactersContext);
  if (!characterContextProvider) {
    throw new Error("PlayContext must be used within a GameProvider");
  }
  const { characters } = characterContextProvider;
  const { id } = useParams();
  const navigate = useNavigate()
  const findCharacter = characters.find((r) => r.id === Number(id));

  if (!findCharacter) {
    return <p>Personagem nao encontrado</p>;
  }

  const handleClick = () =>{
    navigate('/edit/${id}', {state: { character: findCharacter }})
  }

  return (
    <div>
      <div className="flex justify-evenly">
        <div>Information about character</div>
        <div>
          <button className="flex items-center justify-center bg-yellow-800 hover:bg-yellow-900 w-20 h-8 rounded-md" onClick={()=> handleClick()}>Editar</button>
        </div>
      </div>

      <div className="flex flex-col xl2:flex-row justify-between">
        <div className="w-full  xl2:w-2/5 ">
          <img className="w-fit" src={findCharacter.characters_img} alt="" />
        </div>

        <div
          className=" w-full  xl2:w-2/5"
          style={{
            textAlign: "left",
            width: "40%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div>
            {" "}
            <p>
              <b>Name: </b>
              {findCharacter.name}
            </p>
          </div>
          <div>
            {" "}
            <p>
              <b>Age: </b>
              {findCharacter.age}
            </p>
          </div>
          <div>
            <p>
              <b>Height: </b>
              {findCharacter.height}
            </p>
          </div>
          <div>
            {" "}
            <p>
              <b>Actor Name:</b> {findCharacter.actor_name}
            </p>
          </div>
          <div>
            <p>
              <b>Nick Names:</b> {findCharacter.nickname}
            </p>
          </div>
          <div>
            <p>
              <b>Main Quote:</b> {findCharacter.main_quote}
            </p>
          </div>
        </div>

        <div></div>
      </div>

      <div>
        <p>
          <b>Additional Information:</b>
        </p>

        <div>
          <p>{findCharacter.additional_info}</p>
        </div>
      </div>
    </div>
  );
};

export default MoreInformation;

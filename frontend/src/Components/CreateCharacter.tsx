import { useParams, useNavigate } from "react-router-dom"
import createCharacter from '../utils/createCharacter'
import { useFormik } from 'formik';

function CreateCharacter() {
  const navigate = useNavigate()
 
  const {id} = useParams()
  const formik = useFormik({
    initialValues: {
      name: '',
      age: '',
      height: '',
      actor_name: '',
      nickname: '',
      main_quote: '',
      additional_info: '',
      characters_img: ''
    },
    onSubmit: values => {
      createCharacter(values);
      navigate('/');
    }
  });

  const {name, age, height, actor_name, nickname, main_quote, additional_info, characters_img} = formik.values
  return (
    <div className="flex items-center justify-center flex-col">
      <p>Create Character {id}</p>
      <form 
        onSubmit={formik.handleSubmit}
        className=" rounded-lg shadow-md w-full max-w-md"
      >

        <div className="mb-4">
          <label htmlFor="name" className="block text-white">Name</label>
          <input
            id="name"
            required
            name="name"
            type="text"
            onChange={formik.handleChange}
            placeholder="Character Name"
            value={name}
            className=" text-black block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="age" className="block text-white">Age</label>
          <input
            id="age"
            required
            name="age"
            type="number"
            placeholder="Age in numbers"
            onChange={formik.handleChange}
            value={age}
            className="mt-1 text-black block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="height" className="block text-white">Height</label>
          <input
            id="height"
            required
            name="height"
            type="text"
            placeholder="height(170cm)"
            onChange={formik.handleChange}
            value={height}
            className="mt-1 block w-full text-black px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="actor_name" className="block text-white">Actor Name</label>
          <input
            id="actor_name"
            required
            name="actor_name"
            type="text"
            onChange={formik.handleChange}
            placeholder="Actor's name"
            value={actor_name}
            className="mt-1 block w-full text-black px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="nickname" className="block text-white">Nickname</label>
          <input
            id="nickname"
            required
            name="nickname"
            type="text"
            placeholder="Character's nickname"
            onChange={formik.handleChange}
            value={nickname}
            className="mt-1 block w-full text-black px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="main_quote" className="block text-white">Main Quote</label>
          <input
            id="main_quote"
            required
            name="main_quote"
            type="text"
            onChange={formik.handleChange}
            placeholder="Character's main quote"
            value={main_quote}
            className="mt-1 block w-full text-black px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="additional_info" className="block text-white">Additional Information</label>
          <input
            id="additional_info"
            required
            name="additional_info"
            type="text"
            onChange={formik.handleChange}
            placeholder="Any additional information about the character"
            value={additional_info}
            className="mt-1 block w-full text-black px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="characters_img" className="block text-white">Character Image URL</label>
          <input
            id="characters_img"
            required
            name="characters_img"
            type="text"
            onChange={formik.handleChange}
            placeholder="Characters image(https://wallpapercave.com/wp/wp2205819.jpg)"
            value={characters_img}
            className="text-black block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <button 
          type="submit"
          className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Enviar
        </button>
      </form>
    </div>
  )
}

export default CreateCharacter

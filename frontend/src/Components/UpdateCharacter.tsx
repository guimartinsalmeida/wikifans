import { useParams, useLocation, useNavigate } from "react-router-dom";
import updateCharacter from '../utils/updateCharacter';
import { useFormik } from 'formik';

function UpdateCharacter() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { state } = useLocation();
  const {character} = state || {}

  const {name, age, height, actor_name, nickname, main_quote, additional_info, characters_img} = character

  const formik = useFormik({
    initialValues: {
      name: name,
      age: '',
      height: '',
      actor_name: '',
      nickname: '',
      main_quote: '',
      additional_info: '',
      characters_img: ''
    },
    onSubmit: values => {
      updateCharacter(Number(id), values);
      navigate('/');
    }
  });

  return (
    <div className="flex justify-center items-center">
      <form 
        onSubmit={formik.handleSubmit}
        className=" rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Update {name} information</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-white">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={name}
            placeholder={name}
            disabled
            className=" text-black block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="age" className="block text-white">Age</label>
          <input
            id="age"
            name="age"
            type="number"
            onChange={formik.handleChange}
            placeholder={age}
            value={formik.values.age}
            className="mt-1 text-black block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="height" className="block text-white">Height</label>
          <input
            id="height"
            name="height"
            type="text"
            onChange={formik.handleChange}
            placeholder={height}
            value={formik.values.height}
            className="mt-1 block w-full text-black px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="actor_name" className="block text-white">Actor Name</label>
          <input
            id="actor_name"
            name="actor_name"
            type="text"
            onChange={formik.handleChange}
            placeholder={actor_name}
            value={formik.values.actor_name}
            className="mt-1 block w-full text-black px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="nickname" className="block text-white">Nickname</label>
          <input
            id="nickname"
            name="nickname"
            type="text"
            onChange={formik.handleChange}
            placeholder={nickname}
            value={formik.values.nickname}
            className="mt-1 block w-full text-black px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="main_quote" className="block text-white">Main Quote</label>
          <input
            id="main_quote"
            name="main_quote"
            type="text"
            onChange={formik.handleChange}
            placeholder={main_quote}
            value={formik.values.main_quote}
            className="mt-1 block w-full text-black px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="additional_info" className="block text-white">Additional Information</label>
          <input
            id="additional_info"
            name="additional_info"
            type="text"
            onChange={formik.handleChange}
            placeholder={additional_info}
            value={formik.values.additional_info}
            className="mt-1 block w-full text-black px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="characters_img" className="block text-white">Character Image URL</label>
          <input
            id="characters_img"
            name="characters_img"
            type="text"
            placeholder={characters_img}
            onChange={formik.handleChange}
            disabled
            value={formik.values.characters_img}
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
  );
}

export default UpdateCharacter;

import { useNavigate} from 'react-router-dom';


   
 


const Home = () => {
  const navigate = useNavigate();


  const handleStartGame = () => {
    navigate('/transfer');
   };
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 to-blue-900 flex flex-col items-center justify-center p-4">
      <div className="bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <h1 className="text-4xl font-bold text-center mb-6 text-yellow-600">Casino game</h1>
        <button
          onClick={handleStartGame}
          className="w-full bg-yellow-400 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-full shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
        >
          Start Game
        </button>
      </div>
    </div>
  )
}

export default Home
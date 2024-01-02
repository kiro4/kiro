import Header from './components/Header' 
import MoviesList from './components/MoviesList' 
import Footer from './components/Footer' 
import Details from './components/Details' 
import { Route , Routes } from 'react-router-dom' 
 
import { useState , useEffect } from 'react' 
import axios from 'axios' 


 
function App() { 
  const[movies , setMovies] = useState([]) ; 
 
  const getMovies = async ()=>{ 
  const response = await  axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar`); 
    setMovies(response.data.results); 
  } 
 
  useEffect( ()=>{ 
      getMovies() 
  },[] ) 

  return ( 
    <> 
      <Header/> 
 
    <Routes> 
      <Route path='/' element={<MoviesList movies={movies}/>} /> 
      <Route path='/details/:id' element={<Details/>} /> 
    </Routes> 
       
      <Footer/> 
    </> 
  ) 
} 
 
export default App
import { Link } from 'react-router-dom'
import movie from '../images/movie.jpg'

function MovieCard({movie}) {
  return (
    <div className='col-md-3 col-sm-6 mb-1 movie'>
      <div className='card p-3 text-center'>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}  alt="" />
          <h4>  {movie.title}</h4>
          <h4> تاريخ الانتاج :{movie.release_date} </h4>
          <h4>  التقييم :{movie.vote_average} </h4>
          <Link to ={`/details/${movie.id}`} className='btn btn-danger'>تفاصيل</Link>
      </div> {/*card*/}
      </div>
  )
}

export default MovieCard
import MovieCard from './MovieCard'
function MoviesList({movies}) {
  
  return (
    <section className='py-5 container'>
      <div className='row'>
        {

          movies.map((item)=>{
            return( <MovieCard key={item.id} movie ={item}/> )
          })
        }
       
      </div>
    </section>
  )
}

export default MoviesList